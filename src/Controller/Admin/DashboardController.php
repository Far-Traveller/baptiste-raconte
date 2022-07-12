<?php

namespace App\Controller\Admin;

use App\Entity\Contact;
use App\Entity\Story;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('app_homepage');
        }

        $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);

        $urls = $adminUrlGenerator
            ->setController(ContactCrudController::class)
            ->setController(UserCrudController::class)
            ->setController(StoryCrudController::class)
            ->generateUrl();

        return $this->redirect($urls);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('<img src="/images/logojaune.png" alt="Logo" width="50px" height="50px">
                             <span> Baptiste Raconte</span>');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToRoute('Retour vers le site', 'fas fa-undo', 'app_homepage');
        yield MenuItem::section('Gestion')->setPermission('ROLE_ADMIN');
        yield MenuItem::linkToCrud('Nouvelles', 'fas fa-book-open', Story::class)
            ->setPermission('ROLE_ADMIN');
        yield MenuItem::linkToCrud('Messages', 'fas fa-message', Contact::class)
            ->setPermission('ROLE_ADMIN');
        yield MenuItem::linkToCrud('Utilisateurs', 'fas fa-address-card', User::class)
            ->setPermission('ROLE_ADMIN');
    }
}

