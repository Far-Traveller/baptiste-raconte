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
            SlugField::new('slug')->setTargetFieldName('title')
                ->setHelp("Doit correspondre au titre sans les espaces, les accents et autres caractères spéciaux. Uniquement des lettres, chiffres, tirets - et _"),
            ImageField::new('image')
                ->setBasePath(self::PRODUCTS_BASE_PATH)
                ->setUploadDir(self::PRODUCTS_UPLOAD_DIR)
                ->setSortable(false)
                ->setUploadedFileNamePattern('[day]-[month]-[year]-[contenthash].[extension]')
                ->setHelp('Taille maximale : 2 Mb'),
            TextField::new('summary', 'Résumé')
                ->setFormTypeOptions([
                    'attr' => [
                        'maxlength' => 255
                    ]
                ])
                ->setHelp('Maximum 255 caractères'),
            TextEditorField::new('text', 'Texte'),
            DateTimeField::new('createdAt', 'Création')->setTimezone('Europe/Paris')->hideOnForm(),
            DateTimeField::new('updatedAt', 'Mise à jour')->setTimezone('Europe/Paris')->hideOnForm()
        ];
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof Story) return;

        $entityInstance->setUpdatedAt(new \DateTimeImmutable());

        parent::updateEntity($entityManager, $entityInstance);
    }
}
