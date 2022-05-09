<?php

namespace App\Controller;

use App\Repository\StoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StoryController extends AbstractController
{
    #[Route('/nouvelles', name: 'app_story')]
    public function index(StoryRepository $repository): Response
    {
        $stories = $repository->findAll();

        return $this->render('story/index.html.twig', [
            'controller_name' => 'StoryController',
            'stories' => $stories
        ]);
    }
}
