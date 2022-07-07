<?php

namespace App\Controller\Admin;

use App\Entity\Contact;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ContactCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Contact::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            // Change title of pages
            ->setPageTitle('index', 'Messages')
            ->setPageTitle('edit', 'Modifier un message')
            ->setPageTitle('new', 'Créer un message')

            ;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('fullName', 'Nom Prénom')->hideOnForm(),
            TextField::new('email', 'Email')->hideOnForm(),
            TextField::new('subject', 'Sujet')->hideOnForm(),
            TextField::new('message')->hideOnForm(),
            DateTimeField::new('createdAt', 'Création')->hideOnForm()
        ];
    }

}
