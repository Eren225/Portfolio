import profileImage from '@/components/images/matteo.jpg'
import hecLiege from '@/components/images/hec_liege.png'
import liegeKotsLogoLight from '@/components/images/logo_no_bg.webp'
import liegeKotsLogoDark from '@/components/images/logo_no_bg_white.webp'
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

export const navigationLinks = [
  { id: 'about', label: 'À propos' },
  { id: 'projects', label: 'Projets' },
  { id: 'skills', label: 'Compétences' },
  { id: 'contact', label: 'Contact' }
]

export const heroContent = {
  badge: 'Tech + business, disponible pour échanger',
  greeting: 'Hey, moi c\'est Matteo.',
  headline: 'Diplômé en développement d\'applications, étudiant à HEC Liège',
  description:
    'Je combine vision produit et exécution technique pour créer des solutions utiles, lisibles et performantes.',
  location: 'Liège, Belgique',
  profileImage,
  ctaPrimary: {
    label: 'Voir mes projets',
    target: '#projects'
  },
  ctaSecondary: {
    label: 'Ouvrir mon CV',
    target: '/CV_Matteo_Rober_FR.pdf'
  },
  highlights: [
    { label: 'Formation actuelle', value: 'Master en sciences de gestion' },
    { label: 'Base académique', value: 'Diplôme dev apps 2025' },
    { label: 'Approche', value: 'Product + Tech' }
  ]
}

export const skillGroups = [
  {
    id: 'tech',
    title: 'Technologies',
    description: 'Les technos que j\'utilise le plus sur mes projets actuels.',
    skills: [
      { name: 'React', level: 75 },
      { name: 'SQL / MySQL', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'C#', level: 80 },
      { name: 'JavaScript', level: 74 },
      { name: 'Tailwind CSS', level: 82 }
    ]
  },
  {
    id: 'project-types',
    title: 'Types de projets',
    description: 'Formats de projets sur lesquels je travaille régulièrement.',
    skills: [
      { name: 'Web', level: 92 },
      { name: 'Analyse fonctionnelle', level: 82 },
      { name: 'Applications desktop (PC)', level: 77 },
      { name: 'Applications mobile', level: 74 }
    ]
  },
  {
    id: 'languages',
    title: 'Langues',
    description: 'Communication fluide dans un contexte scolaire et professionnel.',
    skills: [
      { name: 'Français', level: 100 },
      { name: 'Anglais', level: 86 },
      { name: 'Néerlandais', level: 70 }
    ]
  }
]

export const projects = [
  {
    id: 'liege-kots',
    title: 'Liège Kots',
    subtitle: 'Plateforme web pour logements et disponibilités',
    description:
      'Site web réalisé en React, Tailwind et SQL pour présenter les kots d\'un propriétaire et indiquer clairement leur disponibilité.',
    logo: liegeKotsLogoLight,
    logoLight: liegeKotsLogoLight,
    logoDark: liegeKotsLogoDark,
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
    id: 'hec-liege',
    title: 'HEC Liège',
    subtitle: 'Master en sciences de gestion',
    description:
      'Parcours axé sur la décision business, la structuration de priorités et la gestion de projets en lien avec des enjeux concrets.',
    logo: hecLiege,
    stack: ['Analyse financière', 'Gestion de projet', 'Stratégie business', 'Négociation', 'Priorisation produit'],
    highlights: [
      'Analyse de scénarios et aide à la décision',
      'Structuration des priorités selon valeur et impact',
      'Vision business complémentaire à mon profil technique'
    ]
  },
  {
    id: 'helmo-projects',
    title: 'Helmo',
    subtitle: 'Travaux académiques et prototypes applicatifs',
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
      { src: helmoGalleryOne, alt: 'Prototype remboursement fusee' },
      { src: helmoGalleryTwo, alt: 'Modèle conceptuel de données' },
      { src: helmoGalleryThree, alt: 'Vue mobile applicative' }
    ],
    video: {
      src: helmoVideo,
      title: 'Démonstration projet scolaire'
    }
  },
  {
    id: 'erens-scripts',
    title: "Eren's Scripts",
    subtitle: 'Création de contenu personnalisé pour jeux vidéo',
    description:
      'Conception de scripts et de mini expériences immersives pour différents environnements de jeu, avec un focus sur la personnalisation.',
    logo: erenLogo,
    stack: ['Lua', 'JavaScript', 'SQL'],
    highlights: [
      'Création de fonctionnalités gameplay sur mesure',
      'Direction artistique de l\'ambiance visuelle',
      'Optimisation du confort joueur et du rythme'
    ],
    gallery: [
      { src: erenGalleryOne, alt: 'Capture gameplay restaurant' },
      { src: erenGalleryTwo, alt: 'Interface telephone in game' },
      { src: erenGalleryThree, alt: 'Decor mural roleplay' }
    ],
    video: {
      src: erenVideo,
      title: 'Démonstration Eren scripts'
    }
  }
]

export const contactContent = {
  heading: 'Parlons de ton prochain projet',
  description:
    'Disponible pour échanger autour de projets web, produit et collaborations tech.',
  email: 'matteorober@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/matt%C3%A9o-rober-163401251/',
  cvUrl: '/CV_Matteo_Rober_FR.pdf',
  location: 'Liège, Belgique'
}
