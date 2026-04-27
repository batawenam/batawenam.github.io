# Portfolio — Khaliq Ali

Site personnel statique, monochrome, bilingue FR/EN. HTML + Tailwind CSS + un fichier JS pour le toggle de langue. Police : Mulish (Google Fonts). Aucun framework.

## Prérequis

- **Node.js >= 20** (un fichier `.nvmrc` est fourni — `nvm use` pour basculer automatiquement).

```bash
node -v   # doit afficher v20.x.x ou plus
```

## Installation

```bash
nvm use            # bascule sur Node 20 (lit .nvmrc)
npm install
```

## Développement

Reconstruit `styles.css` à chaque changement de classes Tailwind :

```bash
npm run dev
```

Pour servir le site en local (au choix) :

```bash
npx serve -p 8080 .
# ou
python3 -m http.server 8080
```

Puis ouvrir <http://localhost:8080>.

## Build de production

Génère `styles.css` minifié :

```bash
npm run build
```

`styles.css` doit être committé — GitHub Pages ne lance pas de build.

## Fichiers à fournir manuellement

- **`avatar.png`** *(ou `avatar.svg`)* — illustration style Notion (noir et blanc), tête + épaules, fond transparent, 400×400 minimum. À déposer à la racine du projet.
  Le HTML pointe déjà sur `avatar.png` ; si le fichier est absent, un fallback automatique en JS affiche les initiales **KA** sur cercle noir. Si tu utilises un autre nom (ex: `avatar.svg`), modifie le `src` dans `index.html`.
- **`og.png`** — image Open Graph 1200×630, fond blanc, "Khaliq Ali" centré (Mulish 500), "CTO at 41DEVS" en dessous en gris. À déposer à la racine. Un placeholder vide est en place pour éviter le 404 — remplace-le.
- **Numéro WhatsApp** — dans `index.html` et `script.js`, remplacer toutes les occurrences de `PHONE_TODO` par ton numéro au format international sans `+` ni espaces (ex: `22990000000` pour `+229 90 00 00 00`). L'URL devient alors `https://wa.me/22990000000`.
- **`CNAME`** *(optionnel)* — si tu utilises un domaine custom, mettre une ligne avec le domaine (ex: `khaliq.dev`).

> **TODO avant push** : déposer `avatar.png`, remplacer `og.png`, remplacer `PHONE_TODO` par le numéro WhatsApp.

## Déploiement GitHub Pages

GitHub Pages sert les fichiers tels quels — pas de pipeline CI nécessaire pour un site statique.

1. Créer le repo public **`batawenam.github.io`** sur GitHub (le nom exact compte : c'est ce qui donne l'URL `https://batawenam.github.io`).
2. Initialiser et pousser :
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin git@github.com:batawenam/batawenam.github.io.git
   git push -u origin main
   ```
3. Sur GitHub → **Settings → Pages** → Source : `Deploy from a branch`, Branch : `main`, Folder : `/ (root)` → Save.
4. Attendre 1–2 min, l'URL `https://batawenam.github.io` est en ligne.
5. Pour un domaine custom : ajouter un fichier `CNAME` à la racine (une ligne avec le domaine) puis configurer le DNS (CNAME vers `batawenam.github.io`).

## Structure

```
.
├── index.html          ← le site complet (FR par défaut, hydraté en EN par script.js)
├── styles.css          ← Tailwind buildé et minifié (committé)
├── input.css           ← source Tailwind
├── script.js           ← toggle FR/EN + persistance localStorage
├── tailwind.config.js
├── package.json
├── .nvmrc
├── .gitignore
├── favicon.svg
├── avatar.png          ← À DÉPOSER (fallback initiales JS si absent)
├── og.png              ← À REMPLACER (placeholder)
└── README.md
```

## Notes

- **Aucune couleur autre que noir / blanc / gris.**
- Le HTML rend correctement sans JavaScript (FR statique).
- Toggle FR/EN persiste dans `localStorage.lang` et détecte la langue navigateur au premier chargement.
- Tous les liens externes sont en `target="_blank" rel="noopener noreferrer"`.
