<?php

namespace App\Controller\Admin;

use App\Entity\Story;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class StoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Story::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            //IdField::new('id'),
            TextField::new('title', 'Titre'),
//            ImageField::new('image')
//                ->setUploadDir('assets/images/')
//                ->setUploadedFileNamePattern('assets/images/[day]-[month]-[year]-[slug]-[contenthash].[extension]'),
            TextField::new('summary', 'Résumé'),
            TextEditorField::new('text', 'Texte'),
            SlugField::new('slug')->setTargetFieldName('title'),
        ];
    }

}
