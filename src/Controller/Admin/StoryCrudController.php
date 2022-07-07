<?php

namespace App\Controller\Admin;

use App\Entity\Story;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class StoryCrudController extends AbstractCrudController
{
    public const PRODUCTS_BASE_PATH = 'images/upload';
    public const PRODUCTS_UPLOAD_DIR = 'public/images/upload';

    public static function getEntityFqcn(): string
    {
        return Story::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            // Change title of pages
            ->setPageTitle('index', 'Nouvelles')
            ->setPageTitle('edit', 'Modifier une nouvelle')
            ->setPageTitle('new', 'Créer une nouvelle')

            ;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('title', 'Titre'),
            ImageField::new('image')
                ->setBasePath(self::PRODUCTS_BASE_PATH)
                ->setUploadDir(self::PRODUCTS_UPLOAD_DIR)
                ->setSortable(false)
                ->setUploadedFileNamePattern('[day]-[month]-[year]-[contenthash].[extension]')
                ->setHelp('Mettre, de préférence, une image carrée'),
            TextField::new('summary', 'Résumé')
                ->setHelp('Maximum 255 caractères'),
            TextEditorField::new('text', 'Texte'),
            SlugField::new('slug')->setTargetFieldName('title')
                ->setHelp('Ne doit pas être vide'),
            DateTimeField::new('createdAt', 'Création')->hideOnForm(),
            DateTimeField::new('updatedAt', 'Mise à jour')->hideOnForm()
        ];
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof Story) return;

        $entityInstance->setUpdatedAt(new \DateTimeImmutable());

        parent::updateEntity($entityManager, $entityInstance);
    }
}
