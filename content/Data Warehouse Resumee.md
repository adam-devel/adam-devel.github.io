---
publish: true
---

> [!WARNING]
> Résumée incomplet

# Vocabulaire associé

* OLAP
    * Analytique / Multidimensionnel / Orienté sujets
    * Utilisé sur le domaine d'informatique décisionnelle et de Business Intelligence (BI)
    * Utilisé par les analystes, décideurs et managers
    * Utilisé sur les DSS – Decision Support System
    * Caractérisé par
        * Collection et consolidation des données
        * Chargement périodique des données
        * Données généralement non modifiées
        * Interrogations non régulières (ad hoc)

* OLTP
    * Transactionnel / Opérationnel / Orienté applications
    * Utilisé sur l’informatique de production
    * Utilisé sur les systèmes opérationnels
    * Utilisé par les développeurs et leurs applications
    * Basé sur des SGBD relationnels (Oracle, SQL, etc.)
    * Caractérisé par
        * Données détaillées
        * Données distribuées et hétérogènes
        * Modifications fréquentes (INSERT, UPDATE, DELETE)
        * Transactions répétitives et planifiées
        * cohérence / intégrité des données
        * Accès concurrent et en temps réel
        * Données volatiles (évoluent rapidement)

* Dimension / axe d’analyse / contexte / le qui, quoi, quand, où
* Fait / événement mesurable / transaction

# Chaîne décisionnelle

1. Collection des données
2. ETL - Extract, Transform, Load
3. Stockage
4. Analyse
5. Restitution

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

