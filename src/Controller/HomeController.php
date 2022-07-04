<?php

namespace App\Controller;

use App\Repository\StoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function index(StoryRepository $repository): Response
    {
        $latest = $repository->findLatest();
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'latest' => $latest
        ]);
    }

    #[Route('/auteur', name: 'app_author')]
    public function author(): Response
    {
        return $this->render('home/author.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    #[Route('/mentions-légales', name: 'app_legal_notices')]
    public function legal(): Response
    {
        return $this->render('home/legal.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
