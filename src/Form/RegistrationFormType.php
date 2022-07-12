<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Unique;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('username', TextType::class, [
                'attr' => [
                    'placeholder' => 'El_anillo'
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Merci d\'entrer un pseudo',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Votre pseudo doit avoir au moins {{ limit }} caractères',
                        'max' => 30,
                        'maxMessage' => 'Votre pseudo doit avoir au maximum {{ limit }} caractères',
                    ]),
                    new Regex([
                        'pattern' => "#^[a-zA-Z]\w{5,30}[^_]$#",
                        'message' => 'Il doit commencer par une lettre et ne peut contenir que des lettres, chiffres et underscores',
                    ])
                ],
            ])
            ->add('firstname', TextType::class, [
                'attr' => [
                    'placeholder' => 'Frodon'
                ]
            ])
            ->add('lastname', TextType::class, [
                'attr' => [
                    'placeholder' => 'Sacquet'
                ]
            ])
            ->add('email', EmailType::class, [
                    'attr' => [
                        'placeholder' => 'frodon@communauteanneau.fr'
                    ]
                ]
            )
            ->add('plainPassword', PasswordType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
                'attr' => ['autocomplete' => 'new-password'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Merci d\'entrer un mot de passe',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Votre mot de passe doit avoir au moins {{ limit }} caractères',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                    new Regex([
                        'pattern' => '#^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)#',
                        'message' => 'Doit comporter au moins 1 chiffre, 1 caractère spécial, 1 miniscule et 1 majuscule',
                    ]),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
