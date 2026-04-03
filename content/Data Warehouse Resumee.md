---
publish: true
---

> [!WARNING]
> Résumée incomplet

# Informatique de production

OLTP (On Line Transactional Processing) offre traitement des données ==opérationnelles==

- Données Exhaustives / Détaillé
- Données volatiles / modifications fréquentes
- Données orientées application
- Mise à jour des donnée
- Requêtes simple
* Transactions répétitives et planifiées
* Accès concurrent et en temps réel

=> Transactionnel / Opérationnel / Orienté applications

# Informatique décisionnelle

OLAP (On Line Analytical Processing) offre accès ==rapide==, ==consistant== et ==interactif== aux informations ==transformées== pour refléter la réalité de l’entreprise

* Données agrégées/résumées
* Données non volatiles/historisée
* Données orienté sujets
* Pas de mise à jour: les données sont uniquement consultées
* Requêtes complexes/analytiques
* Utilisé par les analystes, décideurs et managers
* Collection et consolidation des données
* Données se chargent périodiquement
* Interrogations non régulières (ad hoc)

=> Analytique / Multidimensionnel
* Utilisé par les DSS – Decision Support System

# Business Intelligence (BI)

l'application des principes OLAP par l'entreprise pour transformer les données brutes en informations exploitables et faciliter la prise de décision

* Data mining: utilisation des technologies analytiques pour déceler des tendances dans des données volumineuses

* Reporting: synthèse des informations sur une période donnée, destiné aux directeurs de services, offrant une vue d'ensemble de l'activité

* Tableau de bord: présente les indicateurs de performance clés (KPI) à travers une série de graphiques
    * Indicateurs essentiels en temps réel pour piloter
    * Destiné aux équipes métier et leurs responsables

# Entrepôt de données (Data Warehouse)

Un entrepôt de données est une collection de données orientées sujet, intégrées, non volatiles et historisées

Un Data mart/Magasin de données: sous-ensemble d'un data warehouse, destiné à un service spécifique (ex: marketing, finance)

**Synonymes**:
* Sujet = Theme
* Dimension = Axe d'analyse = Contexte = Le qui, quoi, quand, où
* Fait = événement mesurable = transaction

# Chaîne décisionnelle

1. Collecte des données: extraction depuis des bases de données ou des fichiers plats (CSV, XML, ASCII, etc.).
2. ETL:
   - Extraction: récupération des données
   - Transformation: filtrer, trier, homogénéiser, nettoyer, valider, suppression des doublons et valeurs aberrantes
   - Chargement/Intégration des données dans l'entrepôt
3. Stockage: choisir manière de stocker la donnée: schéma en étoile, schéma en flocon
4. Analyse multidimensionnelle: structurer les données selon plusieurs axes, pour faciliter l'exploration et l'analyse (ex: la technologie analytique "Cube OLAP")
5. Restitution: visualisation et exploitation des données via rapports et tableaux de bord.

# Structure d'un entrepôt de données

Un entrepôt de données est organisé autour de deux concepts principaux: ==les dimensions== et ==les faits==.  Ces éléments sont stockés respectivement dans des **tables de dimensions** et des **tables de faits**.

### Exemple: Dimension Person et Product

Une **dimension** représente un un sujet, par exemple: une personne, un produit, une date, etc.

| 🔑 id | name  | birth date |
| ----- | ----- | ---------- |
| 0     | John  | 03/11/1989 |
| 1     | Mary  | 08/01/2002 |
| 2     | Ali   | 08/01/1994 |
| …     | …     | …          |


| 🔑 id | name          |
| ----- | ------------- |
| 0     | Dell Laptop   |
| 1     | Samsung Phone |
| 2     | PS4           |
| …     | …             |


### Exemple: Table de faits

Un fait est un couple qui contient:

1. **Point d'intersection des dimensions**  
   Exemple: *"Ali a acheté un Dell Laptop"*  
   → Intersection des dimensions **Personne** et **Produit**

2. **Des mesures**
   Par exemple:
   - Quantité achetée
   - Montant payé

Donc, pour l'évènement d'achat:
- Dimension: person🔗, product🔗
- Mesures: nombre, coût


| person🔗 | product🔗 | nombre | coût |
| -------- | --------- | ------ | ---- |
| 2        | 0         | 1      | 1000 |
| 0        | 1         | 2      | 1200 |
| …        | …         | …      | …    |

Cette table contient les faits:
- ==Ali== (person 2) a acheté ==x1== ==Dell Laptop== (product 0) et a payé ==1000 dt==
- ==John== (person 0)a acheté ==x2== ==Samsung Phones== (product 1) et a payé ==1200 dt==

