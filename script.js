(() => {
  const dict = {
    fr: {
      'nav.work': 'Réalisations',
      'nav.contact': 'Contact',
      'header.subtitle': "CTO chez 41DEVS. Je construis des produits digitaux pour l'Afrique francophone, depuis Cotonou.",
      'bio.p1': "Je dirige l'ingénierie chez <a href=\"https://41devs.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"link-inline\">41DEVS</a>, un studio de développement logiciel basé à Cotonou. On y construit des plateformes digitales pour des gouvernements, des banques et des startups à travers l'Afrique francophone — de la première ligne de code jusqu'à la mise en production.",
      'bio.p2': "Mon quotidien : décisions d'architecture, choix de stacks, encadrement des équipes design, frontend, backend et mobile, et surtout la livraison. J'écris encore du code presque tous les jours — c'est ce qui me garde proche de la réalité du produit.",
      'bio.p3': "Ce qui m'intéresse vraiment en ce moment : l'IA appliquée à des contextes qu'elle a longtemps ignorés. Lire une pièce d'identité ouest-africaine mal cadrée, sécuriser un onboarding sur un téléphone d'entrée de gamme, faire tenir un agent vocal en français mêlé de langues locales. C'est là que les modèles arrêtent d'être des démos et deviennent utiles.",
      'current.title': 'En ce moment',
      'current.1': 'Direction technique chez <a href="https://41devs.com" target="_blank" rel="noopener noreferrer" class="link-inline">41DEVS</a>',
      'current.2': "Co-construction d'<a href=\"https://idole.cash\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"link-inline\"><strong class=\"font-medium\">IDOLE</strong></a>, super-app financière pour la diaspora africaine",
      'current.3': 'Maintenance de <a href="https://remaapp.com" target="_blank" rel="noopener noreferrer" class="link-inline"><strong class="font-medium">REMA</strong></a>, plateforme médicale panafricaine',
      'work.title': 'Réalisations sélectionnées',
      'work.idole.sub': "Transferts d'argent et marketplace de colis pour la diaspora · 11 pays",
      'work.rema.sub': "La plus grande communauté médicale d'Afrique",
      'work.etchite.sub': "Plateforme mobile d'informations et de gestion dédiée aux MPME",
      'work.gov.title': 'Plateformes gouvernementales',
      'work.gov.sub': 'Présidence du Bénin, Enabel, AFG, Atlantique Assurances · sous NDA',
      'work.41devs.sub': 'Studio de développement logiciel · Direction technique',
      'contact.title': 'Me contacter',
      'contact.body': 'Le meilleur moyen est <a href="mailto:dev.kgeek@gmail.com" class="link-inline">par email</a>. Pour quelque chose de plus rapide, on peut aussi échanger sur <a href="https://wa.me/2290162922091" target="_blank" rel="noopener noreferrer" class="link-inline">WhatsApp</a>. On me trouve également sur <a href="https://github.com/batawenam" target="_blank" rel="noopener noreferrer" class="link-inline">GitHub</a>, <a href="https://x.com/batawenam" target="_blank" rel="noopener noreferrer" class="link-inline">X</a> et <a href="https://www.linkedin.com/in/batawenam/" target="_blank" rel="noopener noreferrer" class="link-inline">LinkedIn</a>.',
      'footer.copy': '© 2026 Khaliq Ali',
      'footer.location': 'Cotonou, Bénin 🇧🇯'
    },
    en: {
      'nav.work': 'Work',
      'nav.contact': 'Contact',
      'header.subtitle': 'CTO at 41DEVS. I build digital products for French-speaking Africa, from Cotonou.',
      'bio.p1': 'I lead engineering at <a href="https://41devs.com" target="_blank" rel="noopener noreferrer" class="link-inline">41DEVS</a>, a Cotonou-based software studio. We build digital platforms for governments, banks, and startups across French-speaking Africa — from the first line of code to production.',
      'bio.p2': 'My day-to-day: architecture decisions, stack choices, mentoring design, frontend, backend, and mobile teams, and above all shipping. I still write code almost every day — it keeps me close to the reality of the product.',
      'bio.p3': "What I'm into right now: AI applied to contexts it has long ignored. Reading a poorly framed West African ID card, securing onboarding on a low-end phone, making a voice agent hold up in French mixed with local languages. That's where models stop being demos and start being useful.",
      'current.title': 'Currently',
      'current.1': 'Leading engineering at <a href="https://41devs.com" target="_blank" rel="noopener noreferrer" class="link-inline">41DEVS</a>',
      'current.2': 'Building <a href="https://idole.cash" target="_blank" rel="noopener noreferrer" class="link-inline"><strong class="font-medium">IDOLE</strong></a>, a financial super-app for the African diaspora',
      'current.3': 'Maintaining <a href="https://remaapp.com" target="_blank" rel="noopener noreferrer" class="link-inline"><strong class="font-medium">REMA</strong></a>, a pan-African medical platform',
      'work.title': 'Selected work',
      'work.idole.sub': 'Money transfer and parcel marketplace for the diaspora · 11 countries',
      'work.rema.sub': 'The largest medical community in Africa',
      'work.etchite.sub': 'Mobile information and management platform for MSMEs',
      'work.gov.title': 'Government platforms',
      'work.gov.sub': 'Presidency of Bénin, Enabel, AFG, Atlantique Assurances · under NDA',
      'work.41devs.sub': 'Software development studio · CTO',
      'contact.title': 'Get in touch',
      'contact.body': 'The best way is <a href="mailto:dev.kgeek@gmail.com" class="link-inline">by email</a>. For something faster, we can also chat on <a href="https://wa.me/2290162922091" target="_blank" rel="noopener noreferrer" class="link-inline">WhatsApp</a>. You can also find me on <a href="https://github.com/batawenam" target="_blank" rel="noopener noreferrer" class="link-inline">GitHub</a>, <a href="https://x.com/batawenam" target="_blank" rel="noopener noreferrer" class="link-inline">X</a>, and <a href="https://www.linkedin.com/in/batawenam/" target="_blank" rel="noopener noreferrer" class="link-inline">LinkedIn</a>.',
      'footer.copy': '© 2026 Khaliq Ali',
      'footer.location': 'Cotonou, Bénin 🇧🇯'
    }
  };

  const toggle = document.querySelector('[data-i18n-toggle]');

  const setLang = (lang) => {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[lang] && dict[lang][key] !== undefined) {
        el.innerHTML = dict[lang][key];
      }
    });
    if (toggle) toggle.textContent = lang === 'fr' ? 'EN' : 'FR';
    try { localStorage.setItem('lang', lang); } catch (_) {}
  };

  let initial = 'fr';
  try {
    const stored = localStorage.getItem('lang');
    if (stored === 'fr' || stored === 'en') {
      initial = stored;
    } else if (navigator.language && !navigator.language.toLowerCase().startsWith('fr')) {
      initial = 'en';
    }
  } catch (_) {}

  setLang(initial);

  if (toggle) {
    toggle.addEventListener('click', () => {
      setLang(document.documentElement.lang === 'fr' ? 'en' : 'fr');
    });
  }
})();
