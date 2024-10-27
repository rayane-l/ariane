import openpyxl
import json

# Ouvrir le fichier Excel
workbook = openpyxl.load_workbook('demandes.xlsx')
sheet = workbook.active

# Créer une liste pour stocker les données sous forme d'objets
donnees = []

# Obtenir l'en-tête de colonne
header = [cell.value for cell in sheet[1]]

# Trouver les index des colonnes
colonne_nom = header.index("NOM")
colonne_prenom = header.index("Prénom")
colonne_email = header.index("Email de contact")
colonne_ville = header.index("Ville")
colonne_labo = header.index("Labo")

# Parcourir les lignes du fichier Excel (en supposant que la première ligne contient les en-têtes)
for row in sheet.iter_rows(min_row=2, values_only=True):
    nom, prenom, email, ville, labo = [row[colonne_nom], row[colonne_prenom], row[colonne_email], row[colonne_ville], row[colonne_labo]]

    # Ajouter les données à la liste
    donnees.append({
        "Nom": nom,
        "Prenom": prenom,
        "Fonction": "Doctorante contractuelle en sciences du langage",
        "Email": email,
        "Ville": ville,
        "Labo": labo
    })

# Enregistrer les données dans un fichier JSON
with open('donnees.json', 'w', encoding='utf-8') as json_file:
    json.dump(donnees, json_file, ensure_ascii=False, indent=4)

print("Les données ont été enregistrées dans le fichier donnees.json.")
