<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        $contact = new Contact();

        //Autocomplete when user connected
        if ($this->getUser()) {
            $lastName = $this->getUser()->getLastName();
            $firstName = $this->getUser()->getFirstName();
            $contact->setFullName($lastName . ' ' . $firstName)
                ->setEmail($this->getUser()->getEmail());
        }

        $form = $this->createForm(ContactFormType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $contact = $form->getData();
            $entityManager->persist($contact);
            $entityManager->flush();

            $this->addFlash(
                'success',
                'Votre message a bien été envoyé !'
            );

            return $this->redirectToRoute('app_contact');
        }

        return $this->render('contact/index.html.twig', [
            'controller_name' => 'ContactController',
            'contactForm' => $form->createView(),
        ]);
    }
}
