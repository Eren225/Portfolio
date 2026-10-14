import profileImage from '@/components/images/matteo.jpg'
import evsLogo from '@/components/images/evs.png'
import liegeKotsLogo from '@/components/images/logo_no_bg.webp'
import liegeKotsGalleryOne from '@/components/images/liegekots_pc.png'
import liegeKotsGalleryTwo from '@/components/images/liegekots_mobile.png'
import erenLogo from '@/components/images/logof.png'
import erenGalleryOne from '@/components/images/mcdo.jpg'
import erenGalleryTwo from '@/components/images/phone.png'
import erenGalleryThree from '@/components/images/wall.jpg'
import erenVideo from '@/components/images/escape.mp4'
import helmoLogo from '@/components/icons/helmo.png'
import helmoGalleryOne from '@/components/images/rocket_refund.png'
import helmoGalleryTwo from '@/components/images/mcd.png'
import helmoGalleryThree from '@/components/images/mobile.jpg'
import helmoVideo from '@/components/images/puroguramu.mp4'

export const brandName = 'Mattéo Rober'

export const navigationLinks = [
  { id: 'about', label: 'À propos' },
  { id: 'projects', label: 'Expérience & projets' },
  { id: 'skills', label: 'Compétences' },
  { id: 'contact', label: 'Contact' }
]

export const heroContent = {
  name: 'Mattéo Rober',
  headline: 'Profil IT & business · Double formation en informatique et en sciences de gestion',
  description:
    'J\'aime faire le lien entre les équipes techniques, les utilisateurs et le business : comprendre un besoin, le traduire clairement et suivre sa réalisation. Je suis de près l\'évolution du développement logiciel (IA générative, nouveaux outils, méthodes agiles) et je teste ces pratiques dans mes propres projets.',
  location: 'Liège, Belgique',
  profileImage,
  ctaPrimary: {
    label: 'Voir mon expérience',
    target: '#projects'
  },
  ctaSecondary: {
    label: 'Ouvrir mon CV',
    target: '/CV_Matteo_Rober_FR.pdf'
  },
  highlights: [
    {
      label: 'Formation',
      value: 'Master en sciences de gestion, HEC Liège (2025 – aujourd\'hui) · Bachelier en informatique de gestion, HELMo (2021 – 2025)'
    },
    {
      label: 'Engagement',
      value: 'Bénévole international, Association Essentia (HEC Liège)'
    }
  ]
}

export const skillGroups = [
  {
    id: 'tech',
    title: 'Technologies',
    description: 'Les outils que j\'utilise en projet et en environnement R&D.',
    skills: [
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'C#' },
      { name: 'SQL / MySQL' },
      { name: 'Git' },
      { name: 'Monitoring' },
      { name: 'Outils d\'IA générative' }
    ]
  },
  {
    id: 'business',
    title: 'Business & méthodes',
    description: 'Comprendre un besoin, le traduire et suivre sa réalisation.',
    skills: [
      { name: 'Analyse des besoins' },
      { name: 'Agile / Scrum' },
      { name: 'Gestion de projet' },
      { name: 'Relation client' },
      { name: 'Communication' },
      { name: 'Vulgarisation technique' }
    ]
  },
  {
    id: 'languages',
    title: 'Langues',
    description: 'Communication fluide dans un contexte scolaire et professionnel.',
    skills: [
      { name: 'Français', level: 'Langue maternelle' },
      { name: 'Anglais', level: 'Courant (C1)' },
      { name: 'Néerlandais', level: 'Intermédiaire avancé (B2)' }
    ]
  }
]

export const projects = [
  {
    id: 'evs',
    title: 'EVS Broadcast Equipment',
    period: '2025',
    subtitle: 'Stagiaire puis job étudiant · Recherche & Développement',
    description:
      'Au sein d\'une équipe R&D, suivi de la qualité d\'une application web et lien avec les développeurs.',
    logo: evsLogo,
    stack: ['TypeScript', 'React', 'C#', 'Monitoring', 'Agile / Scrum'],
    highlights: [
      'Monitoring de l\'application (front TypeScript/React, back C#) : suivi et analyse des anomalies',
      'Communication avec les développeurs pour remonter et faire résoudre les problèmes',
      'Participation aux rituels agiles (daily, sprints)'
    ]
  },
  {
    id: 'erens-scripts',
    title: "Eren's Scripts",
    period: '2021 – 2025',
    subtitle: 'Fondateur & gestionnaire de projet · Contenu personnalisé pour jeux vidéo',
    description:
      'Scripts et mini expériences immersives pour différents environnements de jeu, avec un focus sur la personnalisation.',
    logo: erenLogo,
    stack: ['Gestion d\'équipe', 'Relation client', 'Lua', 'JavaScript', 'SQL'],
    highlights: [
      { strong: 'Pilotage d\'une équipe de 10 personnes', text: ' : répartition des tâches, priorisation, suivi de la qualité' },
      'Relation client : recueil des besoins, support et adaptation des solutions',
      'Création de contenus sur mesure et de solutions web'
    ],
    gallery: [
      { src: erenGalleryOne, alt: 'Capture gameplay restaurant' },
      { src: erenGalleryTwo, alt: 'Interface téléphone en jeu' },
      { src: erenGalleryThree, alt: 'Décor mural roleplay' }
    ],
    video: {
      src: erenVideo,
      title: 'Démonstration Eren\'s Scripts'
    }
  },
  {
    id: 'liege-kots',
    title: 'Liège Kots',
    period: '2025',
    subtitle: 'Plateforme web pour logements et disponibilités',
    description:
      'Site web réalisé en React, Tailwind et SQL pour présenter les kots d\'un propriétaire et indiquer clairement leur disponibilité.',
    logo: liegeKotsLogo,
    websiteUrl: 'https://liegekots.be',
    websiteLabel: 'liegekots.be',
    stack: ['React', 'Tailwind CSS', 'SQL'],
    highlights: [
      'Structuration claire des logements et de leur statut',
      'Interface responsive pensée pour mobile et desktop',
      'Centralisation des informations dans une base SQL'
    ],
    gallery: [
      { src: liegeKotsGalleryOne, alt: 'Version desktop du site Liège Kots' },
      { src: liegeKotsGalleryTwo, alt: 'Version mobile du site Liège Kots' }
    ]
  },
  {
    id: 'helmo-projects',
    title: 'Projets HELMo',
    period: '2021 – 2025',
    subtitle: 'Travaux et prototypes applicatifs',
    description:
      'Série de projets scolaires orientés architecture logicielle, modélisation de données et interfaces utilitaires.',
    logo: helmoLogo,
    stack: ['C#', 'Java', 'MySQL', 'UML', 'PHP', 'HTML/CSS', 'JavaScript', 'Python'],
    highlights: [
      'Implémentation de logique métier robuste',
      'Structuration des données et schémas relationnels',
      'Prototypage d\'interfaces pour mobile et desktop'
    ],
    gallery: [
      { src: helmoGalleryOne, alt: 'Prototype de remboursement' },
      { src: helmoGalleryTwo, alt: 'Modèle conceptuel de données' },
      { src: helmoGalleryThree, alt: 'Vue mobile applicative' }
    ],
    video: {
      src: helmoVideo,
      title: 'Démonstration projet scolaire'
    }
  }
]

export const contactContent = {
  heading: 'Me contacter',
  description: 'Un échange, une opportunité, une question : n\'hésitez pas à m\'écrire ou à consulter mon CV.',
  email: 'matteorober@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/matteo-rober',
  cvUrl: '/CV_Matteo_Rober_FR.pdf'
}
