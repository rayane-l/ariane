import pandas as pd
import json

csv_file = '/home/lelia/Documents/Projet persos code/ariane/public/logos/demande_dadhesion_au_consortium_hn_ariane.csv'

# Lire le fichier CSV avec des colonnes séparées par des tabulations
df = pd.read_csv(csv_file, sep='\t')

# Sélectionner uniquement les colonnes souhaitées
columns = ['Nom', 'Prenom', 'Fonction', 'Email', 'Ville', 'Labo']
df_selected = df[columns]

# Convertir le DataFrame en dictionnaire
data = df_selected.to_dict(orient='records')

# Écrire les données dans un fichier JSON
json_file = 'data.json'
with open(json_file, 'w') as f:
    json.dump(data, f, indent=4)

print("Le fichier JSON a été créé avec succès.")
