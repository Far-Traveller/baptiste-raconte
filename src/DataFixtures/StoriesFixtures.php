<?php

namespace App\DataFixtures;

use App\Entity\Story;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class StoriesFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {

        for ($i = 0; $i < 12; $i++) {
            $story = new Story();
            $story->setTitle('Nouvelle ' . $i+1);
            $story->setSlug('nouvelle_'.$i+1);
            $story->setImage('/images/story2.png');
            $story->setSummary("Kingdom Hearts débute sur l'Île du Destin où Sora, Riku et Kairi habitent. Les trois amis veulent quitter l'île pour explorer de nouveaux mondes et ont préparé un radeau à cet effet.");
            $story->setText("Je suis le roi de la danse Oh
                                    La jungle est à mes pieds
                                    De la puissance j' suis au plus haut
                                    Et pourtant j' dois vous envier
                                    Je voudrais devenir un homme
                                    Ce serait merveilleux
                                    Vivre pareil aux autres hommes
                                    Loin des singes ennuyeux
                                    Oh woupidoo
                                    J' voudrais marcher comme vous
                                    Et parler comme vous
                                    Faire comme vous, tout!
                                    Un singe comme moi
                                    Pourrait je crois
                                    Etre parfois
                                    Bien plus humain que vous!
                                    Pourtant crois moi bien
                                    J' suis pas dupe
                                    Si j' marchande avec vous
                                    C'est que je désire le moyen d'être
                                    Un homme un point c'est tout
                                    Dis moi le secret pour être un homme,
                                    Est-ce vraiment si mystérieux?
                                    Pour moi faire éclore la grande fleur rouge
                                    Ce serait merveilleux!
                                    R'mue toi baby
                                    Oooh
                                    J' voudrais marcher comme vous
                                    Et parler comme vous
                                    Faire comme vous, tout!
                                    Car je l'avoue
                                    Quelqu'un comme moi
                                    C'est vrai, je crois
                                    Peut dev'nir comme vous
                                    C'est vrai je crois
                                    Peut dev'nir comme moi!
                                    Encore une fois!
                                    C'est vrai je crois
                                    Peut devenir comme moi!
                                    ");
            $manager->persist($story);
        }

        $manager->flush();
    }
}
