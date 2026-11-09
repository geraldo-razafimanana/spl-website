import { AppWindow, Globe, ClipboardList, SlidersHorizontal, PenTool, Compass } from 'lucide-react'
export const nav = [['Accueil','/'],['À propos','/a-propos'],['Nos services','/services'],['Nos réalisations','/realisations'],['Notre approche','/approche'],['Contact','/contact']] as const
export const services = [
  { icon: AppWindow, t: 'Développement logiciel', d: 'Des applications pensées pour vos métiers.', l: ['Applications métiers','Logiciels de gestion','Automatisation des processus'] },
  { icon: Globe, t: 'Développement web', d: 'Des présences et plateformes web fiables.', l: ['Sites vitrines','Applications web','Plateformes professionnelles'] },
  { icon: ClipboardList, t: 'Solutions de gestion', d: 'Piloter l’organisation au quotidien.', l: ['Gestion des ressources humaines','Gestion de la paie','Gestion administrative','Gestion des activités'] },
  { icon: SlidersHorizontal, t: 'Personnalisation informatique', d: 'Adapter vos outils à vos façons de travailler.', l: ['Adaptation des logiciels','Optimisation des processus','Fonctionnalités spécifiques'] },
  { icon: PenTool, t: 'Design graphique et communication digitale', d: 'Une image cohérente, du logo aux supports.', l: ['Identité visuelle','Conception graphique','Supports de communication'] },
  { icon: Compass, t: 'Conseil et accompagnement numérique', d: 'Un regard extérieur pour bien démarrer.', l: ['Analyse des besoins','Conseil technologique','Accompagnement à la digitalisation'] },
]
export const steps = [
  ['01','Écoute et analyse','Nous étudions vos besoins et la façon dont vous travaillez réellement.'],
  ['02','Étude et conception','Nous définissons la solution, ses écrans et son architecture.'],
  ['03','Développement et personnalisation','Nous réalisons et ajustons la solution à vos processus.'],
  ['04','Tests et validation','Nous vérifions chaque fonctionnalité avec vous.'],
  ['05','Déploiement et accompagnement','Nous mettons en service, formons et faisons évoluer.'],
]
export const cats = ['Toutes','Applications web','Logiciels de gestion','Applications mobiles','Identité visuelle','Autres projets'] as const
// Contenus de démonstration : à remplacer par les vraies réalisations de SPL.
export const works = [
  { n: 'Projet web (exemple)', c: 'Applications web', d: 'Emplacement réservé pour une application web réalisée par SPL.', dom: 'À renseigner', tech: 'À renseigner' },
  { n: 'Logiciel de gestion (exemple)', c: 'Logiciels de gestion', d: 'Emplacement réservé pour un logiciel de gestion réalisé par SPL.', dom: 'À renseigner', tech: 'À renseigner' },
  { n: 'Application mobile (exemple)', c: 'Applications mobiles', d: 'Emplacement réservé pour une application mobile réalisée par SPL.', dom: 'À renseigner', tech: 'À renseigner' },
  { n: 'Identité visuelle (exemple)', c: 'Identité visuelle', d: 'Emplacement réservé pour un travail d’identité visuelle.', dom: 'À renseigner', tech: 'À renseigner' },
  { n: 'Autre projet (exemple)', c: 'Autres projets', d: 'Emplacement réservé pour un autre type de projet.', dom: 'À renseigner', tech: 'À renseigner' },
]
export const why = [
  ['Solutions adaptées aux besoins réels','Nous partons de vos usages, pas d’un modèle imposé.'],
  ['Approche centrée sur les utilisateurs','Les outils sont conçus pour ceux qui s’en servent chaque jour.'],
  ['Personnalisation des fonctionnalités','Chaque fonction répond à une étape précise de votre activité.'],
  ['Accompagnement des projets','Un suivi avant, pendant et après la mise en service.'],
  ['Performance et simplicité','Des interfaces claires et rapides, sans complexité inutile.'],
]
export const projectTypes = ['Logiciel sur mesure','Site ou application web','Gestion RH / paie','Personnalisation d’un logiciel existant','Design et communication','Conseil','Autre']
