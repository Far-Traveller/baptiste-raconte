<?php

namespace App\Controller;

use App\Form\ResetPasswordFormType;
use App\Form\ResetPasswordRequestFormType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    #[Route(path: '/connexion', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('app_homepage');
        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    #[Route(path: '/déconnexion', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    #[Route(path: '/oubli-mot-de-passe', name: 'forgotten_password')]
    public function forgottenPassword(Request                 $request,
                                      UserRepository          $userRepository,
                                      TokenGeneratorInterface $tokenGeneratorInterface,
                                      EntityManagerInterface  $entityManager,
                                      MailerInterface         $mailer
    ): Response
    {

        if ($this->getUser()) {
            return $this->redirectToRoute('app_homepage');
        }

        $form = $this->createForm(ResetPasswordRequestFormType::class);

        $form->handleRequest($request);

//        dd($form);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $userRepository->findOneByEmail($form->get('email')->getData());

            if ($user) {
                // Generate token for reinitialization
                $token = $tokenGeneratorInterface->generateToken();
                $user->setResetToken($token);
                $entityManager->persist($user);
                $entityManager->flush();

                // Generate link for password reinitialization
                $url = $this->generateUrl('reset_password', ['token' => $token], UrlGeneratorInterface::ABSOLUTE_URL);

                // Send mail
                $email = (new TemplatedEmail())
                    ->from('no-reply@baptiste-raconte.fr')
                    ->to($user->getEmail())
                    ->subject('Réinitialisation de mot de passe')

                    // path of the Twig template to render
                    ->htmlTemplate('emails/reset_password.html.twig')

                    // pass variables (name => value) to the template
                    ->context([
                        'user' => $user,
                        'url' => $url
                    ]);

                $mailer->send($email);

                $this->addFlash('success', 'Email envoyé avec succès');
                return $this->redirectToRoute('app_login');

            }

            //$user = null
            $this->addFlash('danger', 'Un problème est survenu');
            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/reset_password_request.html.twig', [
            'resetPasswordRequestForm' => $form->createView()
        ]);
    }

    #[Route(path: '/oubli-mot-de-passe/{token}', name: 'reset_password')]
    public function resetPassword(
        string                      $token,
        Request                     $request,
        UserRepository              $userRepository,
        EntityManagerInterface      $entityManager,
        UserPasswordHasherInterface $userPasswordHasher
    ): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('app_homepage');
        }

        // Check if token is in database
        $user = $userRepository->findOneByResetToken($token);

        // Token exists
        if ($user) {
            $form = $this->createForm(ResetPasswordFormType::class);

            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                // Erase reset Token + set new Password
                $user->setResetToken('');
                $user->setPassword(
                    $userPasswordHasher->hashPassword(
                        $user,
                        $form->get('plainPassword')->getData()
                    )
                );
                $entityManager->persist($user);
                $entityManager->flush();

                $this->addFlash('success', 'Mot de passe changé avec succès');
                return $this->redirectToRoute('app_login');
            }

            return $this->render('security/reset_password.html.twig', [
                'resetPasswordForm' => $form->createView()
            ]);
        }

        // Token doesn't exist
        $this->addFlash('danger', 'Jeton invalide');
        return $this->redirectToRoute('app_login');
    }

}
