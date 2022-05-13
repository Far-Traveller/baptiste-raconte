<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220510125345 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE story ADD created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', ADD updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', CHANGE title title VARCHAR(50) NOT NULL, CHANGE image image VARCHAR(255) DEFAULT NULL, CHANGE slug slug VARCHAR(50) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE story DROP created_at, DROP updated_at, CHANGE title title VARCHAR(255) NOT NULL, CHANGE image image LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:object)\', CHANGE slug slug VARCHAR(255) DEFAULT NULL');
    }
}
