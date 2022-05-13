<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/profil', name: 'app_user')]
    public function index(): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('app_homepage');
        }

        $favorite_stories = $this->getUser()->getStories();

        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
            'favorite_stories' => $favorite_stories
        ]);
    }
}
