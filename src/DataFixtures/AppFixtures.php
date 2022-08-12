<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public function load(ObjectManager $manager): void
    {
//        $firstNames = array('Splinter', 'Leonardo', 'Raphael', 'Donatello', 'Michelangelo');
//        $lastNames = array('Sacquet', 'Parker', 'Zelda', 'Croft', 'Lovegood');


        $userAdmin = new User();
        $userAdmin->setEmail('baptallione@gmail.com');
        $userAdmin->setRoles(['ROLE_ADMIN']);
        $userAdmin->setFirstname('Baptiste');
        $userAdmin->setLastname('Allione');
        $password = $this->hasher->hashPassword($userAdmin, 'mH,5Av!T4g9!');
        $userAdmin->setPassword($password);
        $manager->persist($userAdmin);

//        for ($i = 1; $i < 5; $i++) {
//            $user = new User();
//            $user->setEmail('user'.$i.'@user.fr');
//            $user->setFirstname($firstNames[$i]);
//            $user->setLastname($lastNames[$i]);
//            $password = $this->hasher->hashPassword($user, 'User123+');
//            $user->setPassword($password);
//            $manager->persist($user);
//        }

        $manager->flush();

    }
}
