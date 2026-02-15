# EnRègle — obligationslegales.app

Toutes vos obligations légales. Sans stress.

EnRègle est une application SaaS destinée aux micro-entrepreneurs français.
Elle permet d’identifier, organiser et suivre automatiquement les obligations légales liées à leur activité.

## Le problème

Un micro-entrepreneur doit gérer :

- Déclarations URSSAF
- Cotisation Foncière des Entreprises (CFE)
- Assurances obligatoires
- Mentions légales
- Registres obligatoires
- Obligations spécifiques selon l’activité

Ces obligations :

- changent selon le statut
- dépendent du secteur
- comportent des échéances
- sont rarement centralisées

Résultat : stress, erreurs, pénalités potentielles.

## La solution

EnRègle génère automatiquement :

- Une liste personnalisée d’obligations
- Un calendrier clair des échéances
- Des rappels automatiques
- Des explications simples
- Des mises à jour selon les évolutions légales

## Stack technique

- Frontend : Nuxt 3
- Backend : Nitro / Node
- Déploiement : OVH (SFTP + génération statique)
- Base de données : à définir
- Authentification : à définir

## Installation locale

Installation :

    npm install

Lancer le serveur de développement :

    npm run dev

Build production :

    npm run build

Génération statique :

    npm run generate

## Structure du projet

    .
    ├── app/
    ├── server-ovh/
    ├── public/
    ├── nuxt.config.ts
    └── package.json

## Roadmap

- [x] Landing page
- [x] Système de waitlist
- [ ] Générateur d’obligations dynamiques
- [ ] Dashboard utilisateur
- [ ] Notifications email
- [ ] Système de paiement
- [ ] Version bêta privée

## Modèle économique

SaaS à faible coût :

1,99 € / mois

Cible :

- Micro-entrepreneurs sans salarié
- Freelances
- Auto-entrepreneurs débutants

## Disclaimer

Les informations fournies sont basées sur les textes officiels en vigueur (URSSAF, service-public.fr).

L’application ne remplace pas un expert-comptable ou un conseil juridique.

## Auteur

Victor Petit  
Étudiant ingénieur — CESI

## Contact

contact@obligationslegales.app

## Vision

Simplifier radicalement l’administratif des micro-entrepreneurs.
Moins de paperasse. Plus de focus business.
