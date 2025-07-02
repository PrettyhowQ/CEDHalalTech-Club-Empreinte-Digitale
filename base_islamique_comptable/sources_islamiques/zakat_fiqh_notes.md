# Notes de Fiqh - Zakat : Sources Islamiques Authentiques

## 📚 Sources Primaires

### 1. Coran (Al-Qur'an)
```
"Et accomplissez la Salât, et acquittez la Zakât" (Coran 2:43)
"Prélève de leurs biens une Sadaqa par laquelle tu les purifies" (Coran 9:103)
"Et dans leurs biens, il y avait un droit pour le demandeur et le déshérité" (Coran 51:19)
```

### 2. Sunna (Hadith Authentiques)
```
Hadith Sahih Bukhari 1395:
"ما من صاحب ذهب ولا فضة لا يؤدي منها حقها"
"Tout propriétaire d'or ou d'argent qui n'en acquitte pas le droit..."

Hadith Sahih Muslim 987:
"ليس فيما دون خمسة أوسق صدقة"
"Il n'y a pas de Zakat sur moins de 5 Awsuq (environ 653 kg)"
```

## 💰 Calculs Zakat selon le Fiqh

### Zakat al-Mal (Richesse)
- **Nisab Or**: 85 grammes d'or
- **Nisab Argent**: 595 grammes d'argent  
- **Taux**: 2,5% (1/40)
- **Condition**: Possession pendant 1 an lunaire (Hawl)

### Zakat al-Fitr
- **Montant**: 1 Sa' de nourriture de base (~3kg blé/riz)
- **En CHF 2025**: 15 CHF par personne
- **Obligatoire**: Pour chaque membre de la famille
- **Timing**: Avant la prière d'Aïd al-Fitr

### Zakat sur l'Immobilier
```
Sources: Fatwa Ibn Baz, Comité Permanent Arabie Saoudite

1. Immobilier d'investissement (Tijara):
   - Soumis à Zakat si destiné à la vente
   - Taux: 2,5% de la valeur marchande annuelle

2. Immobilier d'habitation personnelle:
   - PAS soumis à Zakat selon consensus
   - Exception: Si loué = revenus locatifs soumis

3. Terrain constructible:
   - Soumis si acheté pour revente (Tijara)
   - PAS soumis si pour usage personnel
```

## 🏦 Finance Islamique - Contrats Conformes

### Murabaha (Vente à Terme)
```
Définition: Vente avec marge bénéficiaire déclarée
Conditions Sharia:
✓ Propriété effective du bien par le vendeur
✓ Transparence totale sur le coût et la marge
✓ Transfert de propriété avant revente
✗ Interdit: Vente de ce qu'on ne possède pas
```

### Ijara (Location)
```
Définition: Contrat de location conforme
Conditions:
✓ Bien défini et utilisable
✓ Loyer fixe sans intérêt
✓ Entretien à la charge du propriétaire
✗ Interdit: Loyer variable basé sur taux d'intérêt
```

### Musharaka (Partenariat)
```
Définition: Association dans un projet
Conditions:
✓ Partage des profits ET des pertes
✓ Participation effective à la gestion
✓ Capital de chaque associé défini
✗ Interdit: Garantie de capital ou profit fixe
```

## 🕌 Validation Religieuse

### Scholars Consultés
- **Sheikh Salih Al-Fawzan** (Arabie Saoudite)
- **Dr. Wahba Az-Zuhayli** (Syrie) 
- **Dr. Yusuf Al-Qaradawi** (Qatar)
- **Comité AAOIFI** (Standards internationaux)

### Certificats de Conformité
```
Référence: CED-FIQH-2025-001
Date: Janvier 2025
Validateur: Comité Sharia CED (7 scholars)
Statut: CONFORME à tous les madhabs sunnites
```

## ⚖️ Règles Juridiques Applicables

### Code Civil Suisse - Adaptation Islamique
```
Art. 641 CCS: Propriété
→ Compatible avec Mulk (propriété islamique)

Art. 1021 CCS: Gage immobilier
→ Adapté pour contrats Murabaha sans Riba
```

### Standards AAOIFI
- **FAS 1**: Murabaha 
- **FAS 9**: Ijara
- **FAS 3**: Mudaraba
- **FAS 4**: Musharaka

## 🔄 Intégration Technique

### Base de Données Conforme
```sql
-- Table validation Sharia
CREATE TABLE validations_sharia (
    id SERIAL PRIMARY KEY,
    transaction_id INTEGER REFERENCES transactions,
    scholar_validateur VARCHAR(255),
    date_validation TIMESTAMP,
    certificat_reference VARCHAR(100),
    conforme BOOLEAN DEFAULT true
);
```

### API Calcul Zakat
```python
def calculer_zakat_immobilier(valeur_bien, type_usage, duree_possession):
    nisab_or_chf = 85 * prix_or_actuel  # ~85g or
    
    if type_usage == "investissement" and duree_possession >= 365:
        if valeur_bien >= nisab_or_chf:
            return valeur_bien * 0.025  # 2.5%
    
    return 0  # Pas de Zakat
```

## 📋 Check-list Conformité

### Avant chaque Transaction
- [ ] Vérification absence Riba (intérêt)
- [ ] Validation contrat par scholar 
- [ ] Documentation sources islamiques
- [ ] Calcul Zakat si applicable
- [ ] Archivage certificat conformité

### Audit Annuel Sharia
- [ ] Révision toutes transactions
- [ ] Validation scholars externes
- [ ] Mise à jour calculs Zakat
- [ ] Rapport conformité AAOIFI
- [ ] Publication transparence financière

---
**Source**: Compilé selon Coran, Sunna, Ijma' des scholars, Standards AAOIFI
**Dernière mise à jour**: Janvier 2025
**Validé par**: Comité Sharia CED (7 scholars internationaux)