/* =========================================================
   UPNORA MARKETING — SCRIPT
   Sections: Config / Translations / Portfolio data / i18n engine /
   Nav & mobile menu / Scroll effects / Counters / FAQ accordion /
   WhatsApp links / Init
   ========================================================= */

/* ---------- CONFIG ---------- */
/* Change this single variable to update every WhatsApp button on the site. */
const WHATSAPP_NUMBER = "212XXXXXXXXX";
const WHATSAPP_MESSAGE = "Hello UPNORA, I'd like a free audit for my business.";

/* ---------- TRANSLATIONS ---------- */
/* Edit any value below to change site copy. Keys map to data-i18n attributes in index.html. */
const TRANSLATIONS = {
  en: {
    nav:{ services:"Services", how:"How It Works", packages:"Packages", portfolio:"Portfolio", faq:"FAQ", contact:"Contact", cta:"Get a Free Audit" },
    hero:{
      title1:"Turn Your Online Presence Into", title2:"Business Growth.",
      sub:"UPNORA helps local businesses build a stronger digital presence, get discovered on Google, create high-converting websites, and turn more visitors into real customers.",
      cta1:"Get Your Free Audit", cta2:"Explore Our Services",
      trust:"Google • Websites • Local Marketing • Paid Ads",
      dashboardLabel:"Growth Dashboard · Example",
      m1:"Google visibility", m2:"Website visitors", m3:"Leads", m4:"Rating",
      dashboardNote:"Example dashboard for illustration — not actual UPNORA client results."
    },
    value:{ line:"Built to help local businesses get found, trusted, and chosen.", i1:"Google Visibility", i2:"Web Presence", i3:"Lead Generation", i4:"Local Advertising", i5:"Reputation Growth" },
    services:{
      title:"Everything Your Business Needs to Grow Online",
      sub:"We combine visibility, design, and marketing into one simple growth system.",
      learnMore:"Learn more",
      s1:{ title:"Google Business Optimization", desc:"Set up, optimize and improve your Google Business presence so customers can discover your business when they are searching locally." },
      s2:{ title:"High-Converting Websites", desc:"Fast, modern websites designed to turn visitors into calls, WhatsApp conversations, bookings, and customers." },
      s3:{ title:"Local Marketing & Reputation", desc:"Strengthen your local presence, improve your customer journey, and build a professional online reputation." },
      s4:{ title:"Paid Advertising", desc:"Launch targeted advertising campaigns designed to put your business in front of the right local customers." }
    },
    how:{
      title:"From Invisible to Impossible to Ignore.",
      s1:{ title:"Audit", desc:"We analyze your current online presence and identify the biggest opportunities." },
      s2:{ title:"Build", desc:"We improve your Google presence, website, branding, and customer journey." },
      s3:{ title:"Launch", desc:"We put your new digital presence and campaigns into action." },
      s4:{ title:"Scale", desc:"We optimize what works and build toward consistent growth." }
    },
    results:{ title:"Growth Should Be Visible.", r1:"Visibility", r2:"Monthly Leads", r3:"Conversion", r4:"Average Rating", note:"Your numbers will depend on your business, market, offer, and campaign." },
    packages:{
      title:"Simple Services. Clear Pricing.", currency:"DH", perMonth:"/month", popular:"Most Popular",
      cta1:"Get Started", cta2:"Talk to UPNORA",
      p1:{ name:"Google Presence", f1:"Google Business setup", f2:"Profile optimization", f3:"Business information optimization", f4:"Photo optimization", f5:"Keyword optimization", f6:"Direct review link" },
      p2:{ name:"Growth Starter", f1:"Everything in Google Presence", f2:"Custom showcase website", f3:"Mobile optimization", f4:"WhatsApp integration", f5:"Click-to-call buttons", f6:"Basic SEO setup" },
      p3:{ name:"Full Scale", f1:"Google Business management", f2:"Local marketing", f3:"Review strategy", f4:"Advertising campaign management", f5:"Monthly optimization", f6:"Performance monitoring" }
    },
    portfolio:{ title:"Solutions Built Around Your Type of Business.", sub:"Whatever you run, here's how we'd approach your growth.", viewProject:"What's included" },
    why:{
      title:"Why Businesses Choose UPNORA",
      w1:{ title:"Business-First Strategy", desc:"We focus on business outcomes, not vanity metrics." },
      w2:{ title:"Fast Execution", desc:"We prioritize practical implementation instead of endless meetings." },
      w3:{ title:"Built For Local Businesses", desc:"Our services are designed around how local customers actually search and buy." },
      w4:{ title:"One Growth Partner", desc:"Website, Google presence, marketing, and customer acquisition under one roof." }
    },
    faq:{
      title:"Frequently Asked Questions",
      q1:"What does UPNORA Marketing do?", a1:"We help businesses build a stronger online presence through Google optimization, websites, local marketing, and paid advertising — all under one growth system.",
      q2:"Do you work with small local businesses?", a2:"Yes. Our services are built specifically around how local businesses are found and chosen by customers nearby.",
      q3:"How quickly can my website be ready?", a3:"Timelines depend on scope, but most showcase websites are ready within a short, clearly communicated timeframe once content is provided.",
      q4:"Can you manage my Google Business Profile?", a4:"Yes, ongoing Google Business Profile management is included in our Growth Starter and Full Scale packages.",
      q5:"Do you offer monthly marketing?", a5:"Yes, our Full Scale package includes ongoing monthly marketing, optimization, and performance monitoring.",
      q6:"Can I contact you through WhatsApp?", a6:"Yes, every \"Get Started\" and \"Chat With UPNORA\" button on this site opens a WhatsApp conversation directly.",
      q7:"Do you offer custom packages?", a7:"Yes. If your business needs something different from our standard packages, reach out and we'll build a plan around your goals."
    },
    finalCta:{ title:"Ready to Scale Your Business?", text:"Let's find the biggest opportunities in your online presence and turn them into your next source of growth.", cta1:"Get Your Free Audit", cta2:"Chat With UPNORA" },
    footer:{ tagline:"SCALE UP YOUR GROWTH", desc:"Digital marketing and online growth solutions for ambitious businesses.", linksTitle:"Links", contactTitle:"Contact", whatsapp:"WhatsApp", rights:"All rights reserved." },
    tabbar:{ home:"Home", services:"Services", packages:"Packages", contact:"WhatsApp", menu:"Menu" },
    promo:{ badge:"Limited Offer", title:"25% Off Your First Order", text:"Start your growth journey with UPNORA and save 25% on your first package.", cta:"Claim My 25% Off", dismiss:"Maybe later" }
  },

  fr:{
    nav:{ services:"Services", how:"Notre Méthode", packages:"Forfaits", portfolio:"Réalisations", faq:"FAQ", contact:"Contact", cta:"Audit Gratuit" },
    hero:{
      title1:"Transformez Votre Présence en Ligne en", title2:"Croissance Réelle.",
      sub:"UPNORA aide les entreprises locales à renforcer leur présence numérique, à être visibles sur Google, à créer des sites qui convertissent, et à transformer plus de visiteurs en clients.",
      cta1:"Obtenir Mon Audit Gratuit", cta2:"Découvrir Nos Services",
      trust:"Google • Sites Web • Marketing Local • Publicité",
      dashboardLabel:"Tableau de Croissance · Exemple",
      m1:"Visibilité Google", m2:"Visiteurs du site", m3:"Leads", m4:"Note",
      dashboardNote:"Tableau d'exemple à titre illustratif — pas des résultats réels de clients UPNORA."
    },
    value:{ line:"Conçu pour aider les entreprises locales à être trouvées, choisies et approuvées.", i1:"Visibilité Google", i2:"Présence Web", i3:"Génération de Leads", i4:"Publicité Locale", i5:"Réputation en Ligne" },
    services:{
      title:"Tout Ce Dont Votre Entreprise a Besoin Pour Grandir en Ligne",
      sub:"Nous combinons visibilité, design et marketing dans un seul système de croissance.",
      learnMore:"En savoir plus",
      s1:{ title:"Optimisation Google Business", desc:"Configuration, optimisation et amélioration de votre fiche Google Business pour être trouvé par vos clients locaux." },
      s2:{ title:"Sites Web Qui Convertissent", desc:"Des sites rapides et modernes conçus pour transformer vos visiteurs en appels, messages WhatsApp, réservations et clients." },
      s3:{ title:"Marketing Local & Réputation", desc:"Renforcez votre présence locale, améliorez le parcours client et bâtissez une réputation en ligne professionnelle." },
      s4:{ title:"Publicité Payante", desc:"Lancement de campagnes publicitaires ciblées pour mettre votre entreprise devant les bons clients locaux." }
    },
    how:{
      title:"De l'Invisible à l'Incontournable.",
      s1:{ title:"Audit", desc:"Nous analysons votre présence en ligne actuelle et identifions les plus grandes opportunités." },
      s2:{ title:"Construction", desc:"Nous améliorons votre présence Google, votre site, votre image et votre parcours client." },
      s3:{ title:"Lancement", desc:"Nous mettons en action votre nouvelle présence numérique et vos campagnes." },
      s4:{ title:"Croissance", desc:"Nous optimisons ce qui fonctionne et construisons une croissance durable." }
    },
    results:{ title:"La Croissance Doit Être Visible.", r1:"Visibilité", r2:"Leads Mensuels", r3:"Conversion", r4:"Note Moyenne", note:"Vos résultats dépendront de votre entreprise, votre marché, votre offre et votre campagne." },
    packages:{
      title:"Des Services Simples. Des Prix Clairs.", currency:"DH", perMonth:"/mois", popular:"Le Plus Populaire",
      cta1:"Commencer", cta2:"Parler à UPNORA",
      p1:{ name:"Présence Google", f1:"Configuration Google Business", f2:"Optimisation du profil", f3:"Optimisation des informations", f4:"Optimisation des photos", f5:"Optimisation des mots-clés", f6:"Lien d'avis direct" },
      p2:{ name:"Démarrage Croissance", f1:"Tout dans Présence Google", f2:"Site vitrine personnalisé", f3:"Optimisation mobile", f4:"Intégration WhatsApp", f5:"Boutons d'appel direct", f6:"SEO de base" },
      p3:{ name:"Échelle Complète", f1:"Gestion Google Business", f2:"Marketing local", f3:"Stratégie d'avis", f4:"Gestion des campagnes publicitaires", f5:"Optimisation mensuelle", f6:"Suivi des performances" }
    },
    portfolio:{ title:"Des Solutions Pensées Pour Votre Type d'Entreprise.", sub:"Quel que soit votre secteur, voici comment nous aborderions votre croissance.", viewProject:"Ce qui est inclus" },
    why:{
      title:"Pourquoi Choisir UPNORA",
      w1:{ title:"Stratégie Axée Résultats", desc:"Nous nous concentrons sur les résultats commerciaux, pas sur les indicateurs de vanité." },
      w2:{ title:"Exécution Rapide", desc:"Nous privilégions la mise en œuvre pratique plutôt que les réunions interminables." },
      w3:{ title:"Pensé Pour le Local", desc:"Nos services sont conçus selon la façon dont les clients locaux recherchent et achètent réellement." },
      w4:{ title:"Un Seul Partenaire de Croissance", desc:"Site web, présence Google, marketing et acquisition de clients réunis en un seul endroit." }
    },
    faq:{
      title:"Questions Fréquentes",
      q1:"Que fait UPNORA Marketing ?", a1:"Nous aidons les entreprises à renforcer leur présence en ligne grâce à l'optimisation Google, aux sites web, au marketing local et à la publicité payante — le tout dans un seul système de croissance.",
      q2:"Travaillez-vous avec les petites entreprises locales ?", a2:"Oui. Nos services sont conçus spécifiquement selon la façon dont les entreprises locales sont trouvées et choisies par les clients à proximité.",
      q3:"En combien de temps mon site sera-t-il prêt ?", a3:"Les délais dépendent du projet, mais la plupart des sites vitrines sont prêts dans un délai court et clairement communiqué une fois le contenu fourni.",
      q4:"Pouvez-vous gérer ma fiche Google Business ?", a4:"Oui, la gestion continue de votre fiche Google Business est incluse dans nos forfaits Démarrage Croissance et Échelle Complète.",
      q5:"Proposez-vous un marketing mensuel ?", a5:"Oui, notre forfait Échelle Complète inclut un marketing mensuel continu, une optimisation et un suivi des performances.",
      q6:"Puis-je vous contacter via WhatsApp ?", a6:"Oui, chaque bouton « Commencer » et « Parler à UPNORA » sur ce site ouvre directement une conversation WhatsApp.",
      q7:"Proposez-vous des forfaits personnalisés ?", a7:"Oui. Si votre entreprise a besoin de quelque chose de différent de nos forfaits standards, contactez-nous et nous bâtirons un plan adapté à vos objectifs."
    },
    finalCta:{ title:"Prêt à Faire Grandir Votre Entreprise ?", text:"Trouvons ensemble les plus grandes opportunités de votre présence en ligne et transformons-les en votre prochaine source de croissance.", cta1:"Obtenir Mon Audit Gratuit", cta2:"Parler à UPNORA" },
    footer:{ tagline:"BOOSTEZ VOTRE CROISSANCE", desc:"Solutions de marketing digital et de croissance en ligne pour les entreprises ambitieuses.", linksTitle:"Liens", contactTitle:"Contact", whatsapp:"WhatsApp", rights:"Tous droits réservés." },
    tabbar:{ home:"Accueil", services:"Services", packages:"Forfaits", contact:"WhatsApp", menu:"Menu" },
    promo:{ badge:"Offre Limitée", title:"25% de Réduction sur Votre Première Commande", text:"Démarrez votre croissance avec UPNORA et économisez 25% sur votre premier forfait.", cta:"Profiter de -25%", dismiss:"Plus tard" }
  },

  ar:{
    nav:{ services:"الخدمات", how:"طريقة العمل", packages:"الباقات", portfolio:"أعمالنا", faq:"الأسئلة الشائعة", contact:"تواصل معنا", cta:"احصل على تدقيق مجاني" },
    hero:{
      title1:"حوّل حضورك الرقمي إلى", title2:"نمو حقيقي لأعمالك.",
      sub:"تساعد UPNORA الأعمال المحلية على بناء حضور رقمي أقوى، والظهور على جوجل، وإنشاء مواقع تحقق نتائج، وتحويل الزوار إلى عملاء حقيقيين.",
      cta1:"احصل على تدقيق مجاني", cta2:"اكتشف خدماتنا",
      trust:"جوجل • مواقع إلكترونية • تسويق محلي • إعلانات ممولة",
      dashboardLabel:"لوحة النمو · مثال توضيحي",
      m1:"ظهور جوجل", m2:"زوار الموقع", m3:"العملاء المحتملون", m4:"التقييم",
      dashboardNote:"لوحة توضيحية للعرض فقط — وليست نتائج حقيقية لعملاء UPNORA."
    },
    value:{ line:"مصمم لمساعدة الأعمال المحلية على أن تُكتشف وتُختار وتُثق بها.", i1:"ظهور جوجل", i2:"الحضور الرقمي", i3:"جذب العملاء", i4:"إعلانات محلية", i5:"تعزيز السمعة" },
    services:{
      title:"كل ما تحتاجه أعمالك للنمو أونلاين",
      sub:"نجمع بين الظهور والتصميم والتسويق في نظام نمو واحد بسيط.",
      learnMore:"اعرف المزيد",
      s1:{ title:"تحسين ملف جوجل بزنس", desc:"إعداد وتحسين ملفك على جوجل بزنس ليتمكن العملاء من اكتشاف نشاطك عند البحث محليًا." },
      s2:{ title:"مواقع إلكترونية تحقق نتائج", desc:"مواقع سريعة وعصرية مصممة لتحويل الزوار إلى مكالمات ورسائل واتساب وحجوزات وعملاء." },
      s3:{ title:"التسويق المحلي والسمعة", desc:"عزّز حضورك المحلي، وحسّن رحلة العميل، وابنِ سمعة رقمية احترافية." },
      s4:{ title:"الإعلانات الممولة", desc:"إطلاق حملات إعلانية مستهدفة لوضع نشاطك أمام العملاء المحليين المناسبين." }
    },
    how:{
      title:"من الغياب إلى الحضور الذي لا يُتجاهل.",
      s1:{ title:"التدقيق", desc:"نحلل حضورك الرقمي الحالي ونحدد أكبر الفرص المتاحة." },
      s2:{ title:"البناء", desc:"نحسّن حضورك على جوجل وموقعك وهويتك ورحلة عملائك." },
      s3:{ title:"الإطلاق", desc:"نطلق حضورك الرقمي الجديد وحملاتك على أرض الواقع." },
      s4:{ title:"التوسع", desc:"نحسّن ما ينجح ونبني نموًا مستمرًا." }
    },
    results:{ title:"النمو يجب أن يكون ملموسًا.", r1:"الظهور", r2:"عملاء محتملون شهريًا", r3:"معدل التحويل", r4:"متوسط التقييم", note:"تعتمد نتائجك على نشاطك التجاري وسوقك وعرضك وحملتك." },
    packages:{
      title:"خدمات بسيطة. أسعار واضحة.", currency:"درهم", perMonth:"/شهريًا", popular:"الأكثر طلبًا",
      cta1:"ابدأ الآن", cta2:"تحدث مع UPNORA",
      p1:{ name:"حضور جوجل", f1:"إعداد جوجل بزنس", f2:"تحسين الملف الشخصي", f3:"تحسين معلومات النشاط", f4:"تحسين الصور", f5:"تحسين الكلمات المفتاحية", f6:"رابط تقييم مباشر" },
      p2:{ name:"بداية النمو", f1:"كل ما في حضور جوجل", f2:"موقع عرض مخصص", f3:"تحسين للجوال", f4:"دمج واتساب", f5:"أزرار اتصال مباشر", f6:"تهيئة أساسية لمحركات البحث" },
      p3:{ name:"التوسع الكامل", f1:"إدارة جوجل بزنس", f2:"تسويق محلي", f3:"استراتيجية التقييمات", f4:"إدارة الحملات الإعلانية", f5:"تحسين شهري", f6:"متابعة الأداء" }
    },
    portfolio:{ title:"حلول مصممة حسب نوع نشاطك.", sub:"مهما كان نشاطك، إليك كيف يمكننا مساعدتك على النمو.", viewProject:"ما الذي يشمله" },
    why:{
      title:"لماذا تختار الأعمال UPNORA",
      w1:{ title:"استراتيجية تركز على العمل", desc:"نركز على نتائج الأعمال، وليس على المؤشرات الشكلية." },
      w2:{ title:"تنفيذ سريع", desc:"نعطي الأولوية للتنفيذ العملي بدلًا من الاجتماعات التي لا تنتهي." },
      w3:{ title:"مصمم للأعمال المحلية", desc:"خدماتنا مصممة حسب طريقة بحث وشراء العملاء المحليين فعليًا." },
      w4:{ title:"شريك نمو واحد", desc:"الموقع، وحضور جوجل، والتسويق، وجذب العملاء تحت سقف واحد." }
    },
    faq:{
      title:"الأسئلة الشائعة",
      q1:"ماذا تقدم UPNORA للتسويق؟", a1:"نساعد الأعمال على تعزيز حضورها الرقمي من خلال تحسين جوجل والمواقع الإلكترونية والتسويق المحلي والإعلانات الممولة — كل ذلك ضمن نظام نمو واحد.",
      q2:"هل تعملون مع الأعمال المحلية الصغيرة؟", a2:"نعم. خدماتنا مصممة خصيصًا حسب طريقة اكتشاف واختيار الأعمال المحلية من قبل العملاء القريبين.",
      q3:"كم يستغرق تجهيز موقعي؟", a3:"تعتمد المدة على حجم المشروع، لكن معظم مواقع العرض تكون جاهزة خلال فترة قصيرة وواضحة بعد استلام المحتوى.",
      q4:"هل يمكنكم إدارة ملفي على جوجل بزنس؟", a4:"نعم، تشمل باقتا بداية النمو والتوسع الكامل إدارة مستمرة لملف جوجل بزنس.",
      q5:"هل تقدمون تسويقًا شهريًا؟", a5:"نعم، تتضمن باقة التوسع الكامل تسويقًا شهريًا مستمرًا وتحسينًا ومتابعة للأداء.",
      q6:"هل يمكنني التواصل معكم عبر واتساب؟", a6:"نعم، كل زر «ابدأ الآن» و«تحدث مع UPNORA» في هذا الموقع يفتح محادثة واتساب مباشرة.",
      q7:"هل تقدمون باقات مخصصة؟", a7:"نعم. إذا كان نشاطك يحتاج إلى شيء مختلف عن باقاتنا القياسية، تواصل معنا وسنبني خطة تناسب أهدافك."
    },
    finalCta:{ title:"هل أنت مستعد لتنمية أعمالك؟", text:"لنكتشف معًا أكبر الفرص في حضورك الرقمي ونحوّلها إلى مصدر نمو جديد لأعمالك.", cta1:"احصل على تدقيق مجاني", cta2:"تحدث مع UPNORA" },
    footer:{ tagline:"طوّر نموك إلى الأعلى", desc:"حلول تسويق رقمي ونمو أونلاين للأعمال الطموحة.", linksTitle:"روابط", contactTitle:"تواصل معنا", whatsapp:"واتساب", rights:"جميع الحقوق محفوظة." },
    tabbar:{ home:"الرئيسية", services:"الخدمات", packages:"الباقات", contact:"واتساب", menu:"القائمة" },
    promo:{ badge:"عرض محدود", title:"خصم 25% على أول طلب", text:"ابدأ رحلة نمو أعمالك مع UPNORA ووفّر 25% على باقتك الأولى.", cta:"احصل على خصم 25%", dismiss:"ربما لاحقًا" }
  }
};

/* ---------- WHAT WE OFFER, BY INDUSTRY ---------- */
/* These describe our services applied to each business type — not past client work. Edit freely. */
const PORTFOLIO_ITEMS = [
  { category:{en:"Restaurants & Cafés",fr:"Restaurants & Cafés",ar:"مطاعم ومقاهي"}, name:{en:"Get found at mealtime",fr:"Soyez visible à l'heure des repas",ar:"كن حاضرًا وقت الوجبات"}, desc:{en:"A menu-friendly website, WhatsApp ordering setup, and Google visibility so hungry customers nearby find you first.",fr:"Un site axé sur le menu, une commande WhatsApp et une visibilité Google pour que les clients affamés à proximité vous trouvent en premier.",ar:"موقع يبرز قائمة الطعام، وإعداد الطلب عبر واتساب، وتحسين الظهور على جوجل ليجدك الزبائن الجائعون القريبون أولاً."} },
  { category:{en:"Barbershops & Salons",fr:"Salons de Coiffure & Beauté",ar:"صالونات الحلاقة والتجميل"}, name:{en:"Fill your appointment book",fr:"Remplissez votre agenda",ar:"املأ جدول مواعيدك"}, desc:{en:"A booking-ready website with click-to-call, plus a Google Business setup built for local searches.",fr:"Un site prêt pour les réservations avec appel direct, et une fiche Google Business pensée pour les recherches locales.",ar:"موقع جاهز للحجز مع اتصال مباشر، وإعداد لملف جوجل بزنس مصمم للبحث المحلي."} },
  { category:{en:"Beauty & Wellness",fr:"Beauté & Bien-être",ar:"تجميل وعناية"}, name:{en:"Turn visitors into bookings",fr:"Transformez les visiteurs en réservations",ar:"حوّل الزوار إلى حجوزات"}, desc:{en:"A high-converting showcase site with WhatsApp integration, designed to make booking effortless.",fr:"Un site vitrine performant avec intégration WhatsApp, conçu pour rendre la réservation facile.",ar:"موقع عرض فعّال مع دمج واتساب، مصمم لجعل الحجز سهلًا."} },
  { category:{en:"Clinics & Practices",fr:"Cliniques & Cabinets",ar:"عيادات ومراكز"}, name:{en:"Build patient trust online",fr:"Bâtissez la confiance des patients en ligne",ar:"ابنِ ثقة المرضى عبر الإنترنت"}, desc:{en:"A trust-focused website paired with local marketing designed to bring in new patients.",fr:"Un site axé sur la confiance associé à un marketing local pour attirer de nouveaux patients.",ar:"موقع يبني الثقة مع تسويق محلي مصمم لجذب مرضى جدد."} },
  { category:{en:"Local Services",fr:"Services Locaux",ar:"خدمات محلية"}, name:{en:"Be the obvious local choice",fr:"Devenez le choix local évident",ar:"كن الخيار المحلي الواضح"}, desc:{en:"Google Business optimization and reputation growth so you're the name people trust nearby.",fr:"Optimisation Google Business et croissance de réputation pour être le nom auquel on fait confiance.",ar:"تحسين جوجل بزنس وتعزيز السمعة لتكون الاسم الموثوق قريبًا."} },
  { category:{en:"E-commerce",fr:"E-commerce",ar:"متجر إلكتروني"}, name:{en:"Sell to your local market",fr:"Vendez à votre marché local",ar:"بِع لسوقك المحلي"}, desc:{en:"A product-led store built for local delivery, click-to-order, and targeted paid advertising.",fr:"Une boutique orientée produit conçue pour la livraison locale et la publicité ciblée.",ar:"متجر يركز على المنتجات مصمم للتوصيل المحلي والإعلانات المستهدفة."} }
];

/* ---------- STATE ---------- */
let currentLang = localStorage.getItem("upnora_lang") || "en";

/* ---------- WHATSAPP LINKS ---------- */
function buildWhatsAppLink(){
  const text = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
function applyWhatsAppLinks(){
  document.querySelectorAll(".whatsapp-link").forEach(el => {
    el.setAttribute("href", buildWhatsAppLink());
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });
}

/* ---------- i18n ENGINE ---------- */
function getValue(obj, path){
  return path.split(".").reduce((o,k)=> (o && o[k] !== undefined) ? o[k] : null, obj);
}

function applyTranslations(lang){
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = getValue(dict, key);
    if (value !== null) el.textContent = value;
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  renderPortfolio(lang);
  currentLang = lang;
  localStorage.setItem("upnora_lang", lang);
}

function setLanguage(lang){
  if (!TRANSLATIONS[lang]) return;
  applyTranslations(lang);
}

/* ---------- PORTFOLIO RENDER ---------- */
function renderPortfolio(lang){
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  grid.innerHTML = PORTFOLIO_ITEMS.map(item => `
    <article class="card portfolio-card fade-up in-view">
      <div class="portfolio-thumb"><span>${item.category[lang] || item.category.en}</span></div>
      <div class="portfolio-body">
        <p class="portfolio-category">${item.category[lang] || item.category.en}</p>
        <h3>${item.name[lang] || item.name.en}</h3>
        <p>${item.desc[lang] || item.desc.en}</p>
        <button class="learn-more" type="button">${dict.portfolio.viewProject}</button>
      </div>
    </article>
  `).join("");
}

/* ---------- NAV: SCROLL STATE + MOBILE MENU ---------- */
function initNav(){
  const nav = document.getElementById("siteNav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive:true });

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- LANGUAGE SWITCH BUTTONS ---------- */
function initLangButtons(){
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
}

/* ---------- FAQ ACCORDION ---------- */
function initAccordion(){
  document.querySelectorAll(".accordion-item").forEach(item => {
    const trigger = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");
    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".accordion-item.open").forEach(openItem => {
        if (openItem !== item){
          openItem.classList.remove("open");
          openItem.querySelector(".accordion-trigger").setAttribute("aria-expanded","false");
          openItem.querySelector(".accordion-panel").style.maxHeight = null;
        }
      });

      if (isOpen){
        item.classList.remove("open");
        trigger.setAttribute("aria-expanded","false");
        panel.style.maxHeight = null;
      } else {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded","true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

/* ---------- SCROLL REVEAL (fade-up) ---------- */
function initScrollReveal(){
  const items = document.querySelectorAll(".fade-up");
  if (!("IntersectionObserver" in window)){
    items.forEach(el => el.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });
  items.forEach(el => observer.observe(el));
}

/* ---------- ANIMATED COUNTERS ---------- */
function initCounters(){
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || (el.textContent.includes("%") ? "%" : "");
    const prefix = "+";
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${prefix}${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (!("IntersectionObserver" in window)){
    counters.forEach(animate);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold:0.4 });
  counters.forEach(el => observer.observe(el));
}

/* ---------- SERVICE / WHY "LEARN MORE" (smooth scroll to contact) ---------- */
function initLearnMore(){
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".service-card .learn-more");
    if (btn){
      document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" });
    }
  });
}

/* ---------- MOBILE BOTTOM TAB BAR ---------- */
function initMobileTabbar(){
  const tabbar = document.getElementById("mobileTabbar");
  if (!tabbar) return;
  const tabs = tabbar.querySelectorAll(".tab-item[data-section]");
  const sectionIds = ["top","services","packages"];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  const setActive = (id) => {
    tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.section === id));
  };

  if ("IntersectionObserver" in window && sections.length){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin:"-45% 0px -45% 0px", threshold:0 });
    sections.forEach(sec => observer.observe(sec));
  }

  const menuBtn = document.getElementById("tabMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");
  menuBtn?.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    tabs.forEach(tab => tab.classList.remove("active"));
    menuBtn.classList.toggle("active", isOpen);
    if (isOpen) window.scrollTo({ top:0, behavior:"smooth" });
  });
}

/* ---------- FIRST-ORDER PROMO POPUP ---------- */
function initPromoPopup(){
  const overlay = document.getElementById("promoOverlay");
  if (!overlay) return;

  const alreadyShown = sessionStorage.getItem("upnora_promo_shown");
  if (alreadyShown) return;

  const open = () => {
    overlay.classList.add("visible");
    requestAnimationFrame(() => overlay.classList.add("show"));
    sessionStorage.setItem("upnora_promo_shown", "1");
  };
  const close = () => {
    overlay.classList.remove("show");
    setTimeout(() => overlay.classList.remove("visible"), 300);
  };

  document.getElementById("promoClose")?.addEventListener("click", close);
  document.getElementById("promoDismiss")?.addEventListener("click", close);
  document.getElementById("promoCta")?.addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  setTimeout(open, 1200);
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
  applyWhatsAppLinks();
  initNav();
  initLangButtons();
  initAccordion();
  initScrollReveal();
  initCounters();
  initLearnMore();
  initMobileTabbar();
  initPromoPopup();
});
