<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserFormType;
use App\Form\UserPasswordFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/profil/{id}', name: 'app_user')]
    public function index(User $user,
                          Request $request,
                          EntityManagerInterface $entityManager,
                          UserPasswordHasherInterface $userPasswordHasher): Response
    {
        //Check if user is connected and if he's trying to go on his profile
        if (!$this->getUser() || $this->getUser() !== $user) {
            return $this->redirectToRoute('app_homepage');
        }

        //Form to modify infos of the current user
        $form = $this->createForm(UserFormType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash(
                'success',
                'Vos informations ont bien été modifiées !!'
            );

            return $this->redirectToRoute('app_user', array('id' => $user->getId()));
        }

        //Form to modify password of the current user
        $passwordForm = $this->createForm(UserPasswordFormType::class, $user);
        $passwordForm->handleRequest($request);
        if ($passwordForm->isSubmitted() && $passwordForm->isValid()) {
            if($userPasswordHasher->isPasswordValid($user, $passwordForm->get('newPassword')->getData())) {

                // encode the plain password
                $user->setPassword(
                    $userPasswordHasher->hashPassword(
                        $user,
                        $passwordForm->get('newPassword')->getData()
                    )
                );

                $entityManager->persist($user);
                $entityManager->flush();

                $this->addFlash(
                    'success',
                    'Votre mot de passe a bien été modifié !!'
                );

                return $this->redirectToRoute('app_user', array('id' => $user->getId()));
            } else {
                echo($passwordForm->get('plainPassword')->getData());
                echo($passwordForm->get('newPassword')->getData());

                $this->addFlash(
                    'warning',
                    'Le mot de passe est incorrect'
                );
            }

        }

        $favorite_stories = $this->getUser()->getStories();

        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
            'favorite_stories' => $favorite_stories,
            'editInfosForm' => $form->createView(),
            'editPasswordForm' => $passwordForm->createView(),
        ]);
    }
}
