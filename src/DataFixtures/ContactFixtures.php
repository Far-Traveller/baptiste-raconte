<?php

namespace App\DataFixtures;

use App\Entity\Contact;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ContactFixtures extends Fixture
{

    public function load(ObjectManager $manager): void
    {
//        $fullNames = array('Wonder Woman', 'Chuck Bartowski', 'Abed Nadir', 'Dwight Schrute', 'Sheldon Cooper');
//
//        for ($i = 1; $i < 5; $i++) {
//            $contact = new Contact();
//            $contact->setEmail($fullNames[$i] . '@contact.fr')
//                ->setFullName($fullNames[$i])
//                ->setSubject('Gotta catch \'em all!' . $i + 1)
//                ->setMessage('I want to be the very best
//                                Like no one ever was
//                                To catch them is my real test
//                                To train them is my cause
//                                I will travel across the land
//                                Searching far and wide
//                                Each Pokemon to understand
//                                The power that\'s inside');
//            $manager->persist($contact);
//        }
//
//        $manager->flush();

    }
}
