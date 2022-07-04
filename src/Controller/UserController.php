<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserFormType;
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
                          UserPasswordHasherInterface $hasher): Response
    {
        if (!$this->getUser() || $this->getUser() !== $user) {
            return $this->redirectToRoute('app_homepage');
        }

        $form = $this->createForm(UserFormType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
//            if ($hasher->isPasswordValid($user, $form->getData()->getPassword())) {
//                $user = $form->getData();
//                $entityManager->persist($user);
//                $entityManager->flush();
//
//                $this->addFlash(
//                    'success',
//                    'Vos informations ont bien été modifiées !!'
//                );
//
//                return $this->redirectToRoute('app_user');
//            } else {
//                $this->addFlash(
//                    'warning',
//                    'Le mot de passe renseigné est incorrect'
//                );
//            }
            $user = $form->getData();
            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash(
                'success',
                'Vos informations ont bien été modifiées !!'
            );

            return $this->redirectToRoute('app_user', array('id' => $user->getId()));
        }

        $favorite_stories = $this->getUser()->getStories();

        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
            'favorite_stories' => $favorite_stories,
            'editInfosForm' => $form->createView()
        ]);
    }
}
