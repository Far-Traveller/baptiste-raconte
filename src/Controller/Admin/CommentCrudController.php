<?php

namespace App\Controller\Admin;

use App\Entity\Comment;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CommentCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Comment::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            // Change title of pages
            ->setPageTitle('index', 'Commentaires')
            ->setPageTitle('edit', 'Modifier un commentaire')
            ;
    }

//    public function configureActions(Actions $actions): Actions
//    {
//        return $actions
//            ->remove(Crud::PAGE_INDEX, Action::NEW);
//    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            AssociationField::new('user', 'Utilisateur'),
            AssociationField::new('story', 'Nouvelle'),
            TextField::new('content', 'Contenu'),
            DateTimeField::new('createdAt', 'Création')->hideOnForm(),
            DateTimeField::new('updatedAt', 'Mise à jour')->hideOnForm()
        ];
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof Comment) return;

        $entityInstance->setUpdatedAt(new \DateTimeImmutable());

        parent::updateEntity($entityManager, $entityInstance);
    }
}
