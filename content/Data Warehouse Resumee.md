---
publish: true
---

| Entrepôt des données / Data Warehouse                                                       | Not entrepôt des données / Not Data Warehouse        |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| OLAP, Décisionnelle, Analytique, Multidimensionnelle, sujets orientée, Pour non-Développeur | OLTP, Opérationnelle, Relationnel, Pour Développeurs |
# Structure

Un entrepôt de donnée est structurée en terme des (1) ==Dimensions==, et des (2) ==Faits==. registrée sur des tables des dimensions et des tables des fait.

(1) Un dimension exprime un sujet, par exemple: un personne, un produit, etc..

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

(2) un fait est un couple qui contient:
- **point d'intersection des dimensions**: par exemple, le table de faits "un ==personne== achète un ==produit==" est un table dont les dimensions "personne" et "produit" intersect.
- **des mesures**: par exemple, pour le fait "un ==personne== achète un ==produit==" on peut mesure:
	- "combient de la produit cette person a achète ?"
	- " combien cette personne a payée pour l'achat de produit ?"

| ACHAT | person🔗 | product🔗 | nombre | coût |
| ----- | -------- | --------- | ------ | ---- |
|       | 2        | 0         | 1      | 1000 |
|       | 0        | 1         | 2      | 1200 |
|       | …        | …         | …      | …    |

Cette table de fait contiene les faits:
- "==Ali==" a achète un "==delle laptop==" un ==seule== fois a coûte de ==1000dt==
- "==John==" a achète ==deux== "==Samsung phone==" a coûte de ==1200dt==