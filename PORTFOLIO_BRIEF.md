# 🎯 Brief — Portfolio Khaliq Ali · CTO 41DEVS

> **Pour Claude Code :** Ce document est ta source de vérité. Lis-le en entier avant d'écrire une seule ligne. Style attendu : "polished personal website" (Lee Robinson, Brian Lovin, Paco Coursey). Minimaliste, monochrome, typographie tenue. Bilingue FR/EN avec toggle. Déploiement GitHub Pages.

---

## 1. Contexte & objectif

Je suis **Ali Batawenam Khaliq**, CTO chez **41DEVS**, un studio de développement logiciel basé à Cotonou, Bénin. Un client m'a demandé mon portfolio et je veux pouvoir lui envoyer un lien dans la journée.

**Objectif :** un site personnel sobre, premium, qui fait passer le message en 30 secondes : « tu as en face de toi un CTO senior qui livre, pas un freelance générique ». Pas de hero spectaculaire, pas d'animations clinquantes. Juste de la typo bien tenue, du blanc, du noir, et du contenu qui parle.

**Cible :** clients B2B (CEO, CTO, PMO) francophones et anglophones — Afrique, Europe, agences internationales.

---

## 2. Stack

| Couche | Choix |
|---|---|
| Markup | **HTML5 statique** — un seul `index.html` |
| Styling | **Tailwind CSS 3+** via CLI (build local, output committé) |
| JS | **Vanilla JS** — un seul fichier pour le toggle FR/EN, ~30 lignes max |
| Fonts | **Inter** via Google Fonts ou `@fontsource` (poids 400 et 500 uniquement) |
| Déploiement | **GitHub Pages** depuis la branche `main`, dossier racine |

**Pas de framework, pas de bundler, pas de SPA.** L'objectif est qu'on puisse `git clone` → `npm run build` → `git push` et c'est en ligne.

**Contraintes :**
- Lighthouse : Perf 100, A11y ≥ 95, SEO 100, Best Practices 100
- Bundle CSS final < 15 Ko gzipped
- Bundle JS final < 2 Ko gzipped
- Aucune dépendance externe au runtime (pas de CDN bloquant)
- Mobile-first, responsive 320px → 1920px

---

## 3. Identité visuelle

### Palette — strictement monochrome

```css
/* Light mode (par défaut) */
--bg:           #FFFFFF;   /* blanc pur */
--text:         #0A0A0A;   /* noir doux */
--text-muted:   #737373;   /* neutral-500 */
--text-subtle:  #A3A3A3;   /* neutral-400 */
--border:       #E5E5E5;   /* neutral-200 */

/* Dark mode (optionnel) */
--bg-dark:           #0A0A0A;
--text-dark:         #FAFAFA;
--text-muted-dark:   #A3A3A3;
--border-dark:       #262626;
```

**Aucune autre couleur.** Pas d'accent vert, pas d'or, pas de bleu. Strictement noir, blanc, et nuances de gris. C'est ça la signature.

### Typographie

- **Famille unique : Inter** (poids 400 + 500 uniquement)
- **H1** : 22px, weight 500, letter-spacing -0.01em
- **H2** : 13px, weight 500, couleur `--text-muted` (sert d'eyebrow)
- **Body** : 16px, weight 400, line-height 1.7
- **Meta (dates, footer)** : 13px, couleur `--text-subtle`, `font-variant-numeric: tabular-nums` pour les dates

Pas de `font-weight: 700`, pas de `text-transform: uppercase`, pas d'italique décoratif. Sentence case partout.

### Layout

- Une seule colonne, `max-width: 560px`, centrée
- Padding horizontal : `1.5rem` mobile, naturel desktop
- Padding vertical : `2rem` haut/bas
- Espacement vertical entre sections : `2.5rem`
- Pas de cards, pas de fonds colorés sur les sections — tout vit dans le blanc

---

## 4. Structure de la page

```
[ Nav minimal : nom à gauche · liens à droite + toggle FR/EN ]

[ Header : avatar (illustration Notion circulaire) + nom + sous-titre ]

[ Bio : 2 paragraphes ]

[ "En ce moment" / "Currently" : 3 bullets sans puces ]

[ "Réalisations sélectionnées" / "Selected work" : liste plate avec dates ]

[ "Me contacter" / "Get in touch" : 1 paragraphe avec liens inline ]

[ Footer : copyright à gauche · localisation à droite ]
```

**Pas de scroll horizontal, pas de section pleine largeur, pas de hero plein écran.** Le site doit tenir en 1.5 fenêtre desktop, 3-4 swipes mobile.

---

## 5. Contenu bilingue (FR + EN)

> Pour le toggle : utiliser `data-i18n="key"` sur chaque élément textuel et un dictionnaire JS. Persister le choix dans `localStorage` sous la clé `lang`. Détecter la langue navigateur au premier chargement (FR par défaut si non détecté).

### 5.1 Nav

| key | FR | EN |
|---|---|---|
| `nav.work` | Réalisations | Work |
| `nav.contact` | Contact | Contact |
| `nav.lang` | EN | FR |

*(Le bouton de toggle affiche la langue **vers laquelle on bascule**, pas la langue actuelle.)*

### 5.2 Header

| key | FR | EN |
|---|---|---|
| `header.subtitle` | CTO chez 41DEVS. Je construis des produits digitaux pour l'Afrique francophone, depuis Cotonou. | CTO at 41DEVS. I build digital products for French-speaking Africa, from Cotonou. |

### 5.3 Bio (2 paragraphes)

| key | FR | EN |
|---|---|---|
| `bio.p1` | Je dirige l'ingénierie chez 41DEVS, un studio de développement logiciel qui construit des plateformes digitales pour des gouvernements, des banques et des startups à travers l'Afrique francophone. | I lead engineering at 41DEVS, a software studio building digital platforms for governments, banks, and startups across French-speaking Africa. |
| `bio.p2` | Mon quotidien : décisions d'architecture, choix de stacks, encadrement des équipes design, frontend, backend et mobile — et de la livraison. J'écris encore du code presque tous les jours. | My day-to-day: architecture decisions, stack choices, mentoring design, frontend, backend, and mobile teams — and shipping. I still write code almost every day. |

### 5.4 Currently

| key | FR | EN |
|---|---|---|
| `current.title` | En ce moment | Currently |
| `current.1` | Direction technique chez **41DEVS** | Leading engineering at **41DEVS** |
| `current.2` | Co-construction d'**IDOLE**, super-app financière pour la diaspora africaine | Building **IDOLE**, a financial super-app for the African diaspora |
| `current.3` | Maintenance de **REMA**, plateforme médicale panafricaine | Maintaining **REMA**, a pan-African medical platform |

*Liens internes : 41DEVS → https://41devs.com · IDOLE → https://idole.cash · REMA → https://remaapp.com*

### 5.5 Selected work

| key | FR | EN |
|---|---|---|
| `work.title` | Réalisations sélectionnées | Selected work |

**Items** (à rendre en liste plate, titre à gauche + sous-titre 14px gris dessous, date à droite en `tabular-nums`) :

| Titre | Sous-titre FR | Sous-titre EN | Année | Lien |
|---|---|---|---|---|
| **IDOLE** | Transferts d'argent et marketplace de colis pour la diaspora · 11 pays | Money transfer and parcel marketplace for the diaspora · 11 countries | `2024` | https://idole.cash |
| **REMA** | La plus grande communauté médicale d'Afrique | The largest medical community in Africa | `2023` | https://remaapp.com |
| **Kasua Light** | App mobile de gestion financière pour micro-commerçants peu alphabétisés | Mobile finance app for low-literacy micro-merchants | `2024` | *(pas de lien public)* |
| **Plateformes gouvernementales** | Présidence du Bénin, Enabel, AFG, Atlantique Assurances · sous NDA | Presidency of Bénin, Enabel, AFG, Atlantique Assurances · under NDA | `2020 →` | *(pas de lien)* |
| **41DEVS** | Studio de développement logiciel · Direction technique | Software development studio · CTO | `<!-- À CONFIRMER : année de prise de poste -->` | https://41devs.com |

### 5.6 Contact

| key | FR | EN |
|---|---|---|
| `contact.title` | Me contacter | Get in touch |
| `contact.body` | Le meilleur moyen est [par email](mailto:dev.kgeek@gmail.com). On me trouve aussi sur [GitHub](https://github.com/batawenam), [X](https://x.com/batawenam) et [LinkedIn](https://www.linkedin.com/in/batawenam/). | The best way is [by email](mailto:dev.kgeek@gmail.com). You can also find me on [GitHub](https://github.com/batawenam), [X](https://x.com/batawenam), and [LinkedIn](https://www.linkedin.com/in/batawenam/). |

### 5.7 Footer

| key | FR | EN |
|---|---|---|
| `footer.copy` | © 2026 Khaliq Ali | © 2026 Khaliq Ali |
| `footer.location` | Cotonou, Bénin 🇧🇯 | Cotonou, Bénin 🇧🇯 |

---

## 6. Détails d'implémentation

### Avatar

Avatar **style Notion** (illustration vectorielle minimaliste noir/blanc) de Khaliq, généré sur [notion-avatar.app](https://notion-avatar.app/). Le fichier source `avatar.svg` (ou `avatar.png` à fond transparent) doit être déposé à la racine du projet par Khaliq lui-même avant le build.

**Pourquoi le style Notion est parfait ici :** la palette est déjà monochrome (noir + traits blancs), ce qui colle exactement avec l'identité du site. Aucune dissonance visuelle, contrairement à un Memoji coloré qui jurerait avec le reste.

**Spécifications du fichier source :**
- Format préféré : **SVG** (vectoriel, scalable, ~5 Ko) — sinon **PNG transparent** (200×200px minimum, idéalement 400×400px)
- Cadrage : tête + épaules visibles, centré
- Fond : transparent ou blanc — **surtout pas de cercle de couleur** (ça casserait l'identité monochrome)

**Implémentation HTML :**

```html
<img
  src="avatar.svg"
  alt="Khaliq Ali"
  width="64"
  height="64"
  loading="eager"
  decoding="async"
  class="rounded-full"
>
```

**Détails de rendu :**
- Affichage : 64×64px
- `border-radius: 50%` — l'illustration Notion est centrée, le crop circulaire reste élégant
- **Pas d'anneau, pas de bordure, pas d'ombre** — l'illustration vectorielle parle d'elle-même
- Pas besoin de `object-fit: cover` si le SVG est déjà au bon ratio
- `loading="eager"` car l'avatar est above-the-fold

**Fallback (si le fichier manque au moment du build) :** afficher un cercle noir 56×56 avec les initiales **KA** en blanc, weight 500, taille 16px. Garder ce fallback dans un commentaire HTML pour que Khaliq puisse y revenir si besoin.

### Liens

- Liens dans le corps (bio, contact) : couleur `--text` (noir), soulignement `text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px;` — sobre et lisible
- Liens dans la liste "Selected work" : tout le bloc cliquable, sans soulignement, juste un hover `opacity: 0.6` (transition 150ms)
- Tous les liens externes : `target="_blank" rel="noopener noreferrer"`

### Toggle FR/EN

Bouton dans la nav, à droite, après les autres liens. Style : même que les autres liens de nav (14px, gris, hover noir). Le label affiche **la langue cible** :
- Si on est en FR → bouton dit `EN`
- Si on est en EN → bouton dit `FR`

Implémentation JS minimaliste :

```js
const dict = {
  fr: { /* toutes les clés FR */ },
  en: { /* toutes les clés EN */ }
};

const setLang = (lang) => {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[lang][key]) el.innerHTML = dict[lang][key];
  });
  document.querySelector('[data-i18n-toggle]').textContent = lang === 'fr' ? 'EN' : 'FR';
  localStorage.setItem('lang', lang);
};

const initial = localStorage.getItem('lang')
  || (navigator.language.startsWith('fr') ? 'fr' : 'en');
setLang(initial);

document.querySelector('[data-i18n-toggle]').addEventListener('click', () => {
  setLang(document.documentElement.lang === 'fr' ? 'en' : 'fr');
});
```

> Note pour Claude Code : utiliser `innerHTML` (pas `textContent`) parce que certaines valeurs contiennent des `<a>` et `<strong>`. Pas de contenu utilisateur dans le dict, donc pas de risque XSS.

### Responsive

- Mobile (< 640px) : padding latéral 24px, le reste s'adapte naturellement (la colonne est déjà étroite)
- La nav reste sur une ligne en mobile — si trop serré, retirer "Réalisations" et "Contact" sur les très petits écrans (< 380px), garder juste le toggle langue

### Dark mode (bonus, si trivial)

Optionnel. Si tu l'ajoutes : un second bouton de toggle dans la nav, à droite du toggle langue, avec une icône lune/soleil SVG inline 16×16. Persister dans `localStorage` sous `theme`. Utiliser `class="dark"` sur `<html>` et la stratégie Tailwind `darkMode: 'class'`. **Ne pas l'ajouter si ça complique le code de plus de 30 lignes.**

---

## 7. SEO & meta

```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Khaliq Ali — CTO at 41DEVS</title>
  <meta name="description" content="CTO at 41DEVS. I build digital products for French-speaking Africa, from Cotonou, Bénin.">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Khaliq Ali — CTO at 41DEVS">
  <meta property="og:description" content="Building digital products for French-speaking Africa.">
  <meta property="og:image" content="/og.png">
  <meta property="og:url" content="https://batawenam.github.io">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:creator" content="@batawenam">

  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="canonical" href="https://batawenam.github.io">
</head>
```

**JSON-LD `Person`** dans le `<head>` :

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Khaliq Ali",
  "alternateName": "Ali Batawenam Khaliq",
  "jobTitle": "Chief Technology Officer",
  "worksFor": {
    "@type": "Organization",
    "name": "41DEVS",
    "url": "https://41devs.com"
  },
  "url": "https://batawenam.github.io",
  "email": "dev.kgeek@gmail.com",
  "sameAs": [
    "https://github.com/batawenam",
    "https://x.com/batawenam",
    "https://www.linkedin.com/in/batawenam/"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cotonou",
    "addressCountry": "BJ"
  }
}
</script>
```

**Favicon :** un `favicon.svg` simple — un carré noir 32×32 avec "K" blanc centré, font-weight 500. Si trivial, faire aussi un `apple-touch-icon.png` 180×180.

**OG image (`og.png`, 1200×630) :** fond blanc, "Khaliq Ali" en gros au centre (Inter 500), "CTO at 41DEVS" en dessous en gris. Trois liens en bas en petit. Si tu ne peux pas la générer, laisse un `<!-- TODO: og.png -->` dans le HTML et un placeholder.

---

## 8. Structure de fichiers attendue

```
portfolio/
├── index.html              ← le site complet
├── styles.css              ← Tailwind buildé (committé pour GitHub Pages)
├── script.js               ← toggle i18n
├── input.css               ← source Tailwind avec @tailwind directives
├── tailwind.config.js
├── package.json
├── .gitignore              ← node_modules/
├── avatar.svg              ← avatar style Notion de Khaliq (à déposer ; .png aussi accepté)
├── og.png                  ← image OG (ou placeholder)
├── favicon.svg
├── README.md               ← instructions dev + déploiement
└── CNAME                   ← (optionnel) si custom domain
```

### `package.json`

```json
{
  "name": "khaliq-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "tailwindcss -i ./input.css -o ./styles.css --watch",
    "build": "tailwindcss -i ./input.css -o ./styles.css --minify"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0"
  }
}
```

### `tailwind.config.js`

```js
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      maxWidth: {
        'prose-tight': '560px'
      }
    }
  },
  plugins: []
}
```

### `input.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { font-family: 'Inter', system-ui, sans-serif; }
  body { font-feature-settings: 'cv11', 'ss01', 'ss03'; }
}
```

---

## 9. Déploiement GitHub Pages

1. Créer un repo public `batawenam.github.io` (pour le user-site, l'URL sera `https://batawenam.github.io`) **OU** un repo `portfolio` avec Pages activé sur `main`.
2. Builder une fois en local : `npm install` puis `npm run build`.
3. Commiter **tout** (y compris `styles.css`, le HTML, l'image OG, etc.).
4. Push sur `main`.
5. GitHub Pages servira `index.html` automatiquement.

Pour un custom domain plus tard : ajouter un fichier `CNAME` à la racine avec le domaine.

> **Pour Claude Code :** générer un `README.md` clair avec ces étapes, plus la commande pour installer Tailwind si on part de zéro.

---

## 10. Checklist de livraison

- [ ] `index.html` rend correctement avec FR par défaut
- [ ] Toggle FR/EN bascule **toutes** les chaînes (vérifier qu'aucune n'est en dur)
- [ ] Le choix de langue persiste après refresh
- [ ] Détection langue navigateur au premier chargement
- [ ] Liens externes ouvrent dans `_blank` avec `rel="noopener noreferrer"`
- [ ] Lighthouse mobile : Perf ≥ 95, A11y ≥ 95, SEO 100, Best Practices 100
- [ ] Inter chargée correctement (poids 400 et 500)
- [ ] Aucune couleur autre que noir/blanc/gris
- [ ] Aucun warning console
- [ ] Le site rend sans JS (le JS ne fait que le toggle — le contenu FR doit être présent dans le HTML par défaut)
- [ ] Avatar : `<img src="avatar.svg">` en place avec dimensions correctes (fallback initiales en commentaire)
- [ ] Favicon et OG image en place (ou placeholders documentés)
- [ ] `README.md` complet avec instructions dev + déploiement
- [ ] Aucune ligne de code morte ou commentaire de debug

---

## 11. Notes finales pour Claude Code

1. **Commence par scaffolder** la structure de fichiers + `package.json` + `tailwind.config.js`.
2. **Construis le HTML statique en FR d'abord**, sans JS. Vérifie que ça rend bien tel quel.
3. **Ajoute les `data-i18n` partout** sur les éléments textuels.
4. **Écris le `script.js`** avec le dictionnaire complet, le toggle, et la persistance.
5. **Vérifie la responsivité** sur 320px, 375px, 640px, 1024px.
6. **Génère un `README.md`** clair avec les commandes `npm install`, `npm run dev`, `npm run build`, et les étapes GitHub Pages.
7. **Pas d'overengineering.** Si tu te dis "et si j'ajoutais...", la réponse est non. Le site fait 4 sections, point.

**L'objectif final : un site qui semble avoir été poli pendant des semaines, mais qui tient en un seul fichier HTML qu'on peut `cat` en entier.**

Ship it. 🚀
