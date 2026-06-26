# Tableau Kanban — L'Établi

Suivi de projet pour la conception et le développement du site vitrine
de **L'Établi**, salon de tatouage à Caen.

Projet réalisé dans le cadre de la formation **Intégrateur Web** chez
OpenClassrooms (2025–2026). Ce tableau sert à la fois d'outil de travail
réel et de livrable de gestion de projet pour l'évaluation.

---

## Structure du tableau

| Colonne      | Rôle                                               |
| ------------ | -------------------------------------------------- |
| **Backlog**  | Tout ce qui est identifié mais pas encore planifié |
| **À faire**  | Prêt à démarrer dans les prochaines sessions       |
| **En cours** | Travail actif — WIP limit : 3 cartes maximum       |
| **Terminé**  | Done selon les critères ci-dessous                 |

---

## Definition of Done

Une carte passe en **Terminé** si et seulement si :

- Le code est commité sur `main` (ou mergé depuis une branche feature)
- La fonctionnalité est visible sur le preview Netlify
- Elle est lisible sur mobile (≥ 375px) et desktop (≥ 960px)
- Les contrastes WCAG AA sont respectés (4.5:1 texte courant, 3:1 grand texte)
- Aucune erreur dans la console navigateur

---

## Règles explicites du tableau

1. **WIP limit stricte** : jamais plus de 3 cartes simultanément en "En cours".
   Avant d'en démarrer une nouvelle, en finir ou débloquer une existante.

2. **Granularité** : 1 carte = 1 sous-tâche concrète et livrable.
   Une carte trop grosse pour tenir en une session de travail doit être découpée.

3. **Étiquette `bloqué`** : toute carte en attente d'un élément externe
   (assets Camcam, validation client, infos administratives) reçoit l'étiquette
   `bloqué` et une note expliquant ce qui manque.

4. **Pas de carte en "En cours" sans commit** : déplacer une carte en cours
   implique d'avoir ouvert une branche ou un fichier. Pas de "en cours" théorique.

5. **Rétroactivité** : les phases 0, 1.1 et 1.2 apparaissent en Terminé car
   elles ont été réalisées avant la mise en place de ce tableau.
   Les preuves de travail sont dans les fichiers `letabli-brief.md`,
   `SPECS-v2.md` et `Wireframes-Phase-1.2.md`.

---

## Étiquettes

| Étiquette          | Usage                                              |
| ------------------ | -------------------------------------------------- |
| `design`           | Décisions visuelles, moodboard, wireframes, tokens |
| `dev`              | Code, intégration, composants                      |
| `contenu`          | Textes, photos, assets à récupérer                 |
| `admin`            | Domaine, hébergement, mentions légales             |
| `doc`              | Documentation, specs, fichiers de référence        |
| `priorité haute`   | Bloquant pour la suite                             |
| `priorité moyenne` | Important mais pas bloquant immédiatement          |
| `priorité basse`   | À faire mais peut attendre                         |
| `bloqué`           | En attente d'un élément externe                    |
| `bug`              | Anomalie à corriger                                |

---

## Stack technique

Astro · SASS · React (composants isolés) · TypeScript  
Hébergement : Netlify · Dépôt : GitHub public
