# Générateur de Documents - Cybercafé

Une application web moderne pour générer facilement des reçus, factures et lettres administratives pour votre cybercafé.

## Fonctionnalités

- **Génération de reçus** : Créez des reçus professionnels avec toutes les informations nécessaires
- **Génération de factures** : Créez des factures détaillées avec calcul automatique des totaux et TVA
- **Génération de lettres administratives** : Créez des lettres et demandes officielles avec mise en forme professionnelle
- **Export PDF** : Tous les documents sont générés au format PDF pour impression ou envoi
- **Interface intuitive** : Interface utilisateur moderne et facile à utiliser
- **Responsive** : Fonctionne sur ordinateur, tablette et mobile

## Technologies utilisées

- **React** : Framework frontend moderne
- **Tailwind CSS** : Framework CSS utilitaire
- **shadcn/ui** : Composants UI élégants
- **jsPDF** : Génération de documents PDF
- **Lucide React** : Icônes modernes
- **Vite** : Outil de build rapide

## Installation et développement local

### Prérequis
- Node.js (version 18 ou supérieure)
- pnpm (gestionnaire de paquets)

### Installation
```bash
# Cloner le projet
git clone <url-du-repo>
cd cybercafe-documents

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm run dev
```

L'application sera accessible à l'adresse `http://localhost:5173`

## Déploiement sur Vercel

### Méthode 1 : Déploiement via Git (Recommandée)

1. **Créer un compte Vercel** : Rendez-vous sur [vercel.com](https://vercel.com) et créez un compte
2. **Connecter votre repository Git** : 
   - Poussez votre code sur GitHub, GitLab ou Bitbucket
   - Dans Vercel, cliquez sur "New Project"
   - Importez votre repository
3. **Configuration automatique** : Vercel détectera automatiquement qu'il s'agit d'un projet React/Vite
4. **Déploiement** : Cliquez sur "Deploy" - votre application sera en ligne en quelques minutes

### Méthode 2 : Déploiement via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer l'application
vercel

# Pour les déploiements suivants
vercel --prod
```

### Méthode 3 : Déploiement manuel

1. **Build du projet** :
```bash
pnpm run build
```

2. **Upload du dossier dist** :
   - Connectez-vous à Vercel
   - Glissez-déposez le dossier `dist` sur l'interface Vercel

## Configuration

### Variables d'environnement (optionnel)
Si vous souhaitez personnaliser certains aspects de l'application, vous pouvez créer un fichier `.env.local` :

```env
VITE_APP_TITLE="Mon Cybercafé - Générateur de Documents"
VITE_DEFAULT_CYBERCAFE_NAME="Mon Cybercafé"
VITE_DEFAULT_CONTACT="Votre contact"
VITE_DEFAULT_ADDRESS="Votre adresse"
```

## Utilisation

### Génération d'un reçu
1. Sélectionnez l'onglet "Reçu"
2. Remplissez les informations du client et du service
3. Cliquez sur "Générer le Reçu PDF"

### Génération d'une facture
1. Sélectionnez l'onglet "Facture"
2. Remplissez les informations du client
3. Ajoutez les services/produits avec quantités et prix
4. La TVA est calculée automatiquement
5. Cliquez sur "Générer la Facture PDF"

### Génération d'une lettre
1. Sélectionnez l'onglet "Lettre/Demande"
2. Remplissez les informations du destinataire
3. Rédigez le contenu de votre lettre
4. Cliquez sur "Générer la Lettre PDF"

## Personnalisation

### Modifier les informations par défaut du cybercafé
Éditez le fichier `src/App.jsx` et modifiez les valeurs par défaut dans les états `recuData`, `factureData`, et `lettreData`.

### Modifier le style des PDF
Éditez le fichier `src/utils/pdfGenerator.js` pour personnaliser :
- Les couleurs
- Les polices
- La mise en page
- Les informations affichées

## Support

Pour toute question ou problème :
1. Vérifiez que toutes les dépendances sont installées
2. Assurez-vous d'utiliser une version récente de Node.js
3. Consultez les logs de la console pour les erreurs

## Licence

Ce projet est libre d'utilisation pour votre cybercafé.

