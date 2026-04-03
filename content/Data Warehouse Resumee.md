---
publish: true
---

| Entrepôt des données / Data Warehouse                                                       | Not entrepôt des données / Not Data Warehouse        |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| OLAP, Décisionnelle, Analytique, Multidimensionnelle, sujets orientée, Pour non-Développeur | OLTP, Opérationnelle, Relationnel, Pour Développeurs |

# Structure

Un entrepôt de données est structuré en termes des (1) ==Dimensions== et des (2) ==Faits==, enregistrés sur des tables de dimensions et des tables de faits.

(1) Une dimension exprime un sujet, par exemple : une personne, un produit, etc.

| PERSON | 🔑 id | name  | birth date |
| ------ | ----- | ----- | ---------- |
|        | 0     | John  | 03/11/1989 |
|        | 1     | Marry | 08/01/2002 |
|        | 2     | Ali   | 08/01/1994 |
|        | …     | …     | …          |

| PRODUCT | 🔑 id | name          |
| ------- | ----- | ------------- |
|         | 0     | Dell Laptop   |
|         | 1     | Samsung Phone |
|         | 2     | PS4           |
|         | …     | …             |

(2) Un fait est un couple qui contient :
- **Point d'intersection des dimensions** : par exemple, la table de faits "une ==personne== achète un ==produit==" est une table dont les dimensions "personne" et "produit" s'intersectent.
- **Des mesures** : par exemple, pour le fait "une ==personne== achète un ==produit==" on peut mesurer :
  - "Combien de ce produit cette personne a-t-elle acheté ?"
  - "Combien cette personne a-t-elle payé pour l'achat de ce produit ?"

| ACHAT | person🔗 | product🔗 | nombre | coût |
| ----- | -------- | --------- | ------ | ---- |
|       | 2        | 0         | 1      | 1000 |
|       | 0        | 1         | 2      | 1200 |
|       | …        | …         | …      | …    |

Cette table de faits contient les faits :
- "==Ali==" a acheté un "==Dell Laptop==" une ==seule== fois et a ==payé== ==1000 dt==
- "==John==" a acheté ==deux== "==Samsung Phone==" et a ==payé== ==1200 dt==
