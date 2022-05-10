<?php

namespace App\Controller;

use App\Entity\Story;
use App\Repository\StoryRepository;
use Doctrine\ORM\EntityManagerInterface;
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

    #[Route('/nouvelles/{slug}', name: 'app_story_show')]
    public function show(Story $story): Response
    {
        $favorite_stories = [0];

        if ($this->getUser()) {
            $favorite_stories = $this->getUser()->getStories();
        }

        return $this->render('story/show.html.twig', [
            'controller_name' => 'StoryController',
            'story' => $story,
            'favorite_stories' => $favorite_stories
        ]);
    }

    #[Route('/nouvelles/{slug}/favorite', name: 'app_story_favorite')]
    public function favoriteStory(Story $story, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        $favorite_stories = $this->getUser()->getStories()->toArray();

        if (in_array($story, $favorite_stories)) {
            $user->removeStory($story);
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->json([
                'message' => 'STORY_REMOVED',
                'class' => 'fa-regular fa-heart',
                'txt' => ' Mettre en favoris'
            ]);
        }

        $user->addStory($story);
        $entityManager->persist($user);
        $entityManager->flush();

        return $this->json([
            'message' => 'STORY_FAVORITE',
            'class' => 'fa-solid fa-heart',
            'txt' => ' Déjà en favoris'
        ]);
    }
}
