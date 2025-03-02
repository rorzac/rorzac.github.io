function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function hasConsent(name) {
  return getCookie(name.toLowerCase() + "Consent") === "true"
}

window.hasConsent = hasConsent;

(function () {
  const translations = {
    "en": {
      "key1": "We use cookies to improve the functionality of our website. Learn more in our <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">Cookie Policy</a>.",
      "key2": "Cookie Setting",
      "key3": "Cookie preferences",
      "key4": "Manage your preferences for how we use cookies to enhance your experience. You can adjust your choices below:",
      "key5": "Necessary Cookies",
      "key6": "These cookies are essential for the website to function correctly. They enable basic features such as page navigation and access to secure areas of the website. These cookies cannot be disabled.",
      "key7": "<b>Examples</b>: Session management, security, login functionality.",
      "key8": "Analytics Cookies",
      "key9": "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      "key10": "<b>Examples</b>: Page views, time spent on site, user flow.",
      "key11": "Marketing Cookies",
      "key12": "These cookies are used to track visitors across websites. The intent is to display ads that are relevant and engaging for the individual user.",
      "key13": "<b>Examples</b>: Retargeting, personalized ads, social media tracking.",
      "key14": "Your Rights",
      "key15": "You have the right to access, modify, or delete your personal data collected via cookies. To exercise your rights, please contact us.",
      "key16": "For more information on how we handle your data, please see our Privacy Policy.",
      "key17": "Save Preferences",
      "key18": "By continuing to use this site you consent with our <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">cookie policy</a>",
      "key19": "Always active",
      "btnAccept": "Accept all",
      "btnAll": "Allow all",
      "btnManage": "Manage cookies",
    },
    "es": {
      "key1": "Usamos cookies para mejorar la funcionalidad de nuestro sitio web. Obtén más información en nuestra <a href=\"https://sabiotrade.com/es/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">Política de Cookies</a>.",
      "key2": "Configuración de Cookies",
      "key3": "Preferencias de Cookies",
      "key4": "Gestiona tus preferencias sobre cómo usamos las cookies para mejorar tu experiencia. Puedes ajustar tus opciones a continuación:",
      "key5": "Cookies Necesarias",
      "key6": "Estas cookies son esenciales para que el sitio web funcione correctamente. Permiten funciones básicas como la navegación en las páginas y el acceso a áreas seguras del sitio web. Estas cookies no pueden ser desactivadas.",
      "key7": "Ejemplos: Gestión de sesiones, seguridad, funcionalidad de inicio de sesión.",
      "key8": "Cookies de Análisis",
      "key9": "Estas cookies nos ayudan a entender cómo interactúan los visitantes con nuestro sitio web al recopilar y reportar información de forma anónima.",
      "key10": "Ejemplos: Vistas de página, tiempo pasado en el sitio, flujo de usuarios.",
      "key11": "Cookies de Marketing",
      "key12": "Estas cookies se utilizan para realizar un seguimiento de los visitantes a través de los sitios web. El propósito es mostrar anuncios relevantes e interesantes para el usuario individual.",
      "key13": "Ejemplos: Remarketing, anuncios personalizados, seguimiento en redes sociales.",
      "key14": "Sus Derechos",
      "key15": "Tienes derecho a acceder, modificar o eliminar tus datos personales recopilados a través de las cookies. Para ejercer tus derechos, por favor contáctanos.",
      "key16": "Para obtener más información sobre cómo gestionamos tus datos, consulta nuestra Política de Privacidad.",
      "key17": "Guardar Preferencias",
      "key18": "Al continuar usando este sitio, aceptas nuestra <a href=\"https://sabiotrade.com/es/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">política de cookies</a>.",
      "key19": "Siempre activo",
      "btnAccept": "Aceptar todo",
      "btnAll": "Permitir todo",
      "btnManage": "Gestionar cookies",
    },
    "pt": {
      "key1": "Usamos cookies para melhorar a funcionalidade do nosso site. Saiba mais na nossa <a href=\"https://sabiotrade.com/pt/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">Política de Cookies</a>.",
      "key2": "Configuração de Cookies",
      "key3": "Preferências de Cookies",
      "key4": "Gerencie suas preferências sobre como usamos cookies para melhorar sua experiência. Você pode ajustar suas escolhas abaixo:",
      "key5": "Cookies Necessários",
      "key6": "Esses cookies são essenciais para o funcionamento correto do site. Eles habilitam funcionalidades básicas, como navegação nas páginas e acesso a áreas seguras do site. Esses cookies não podem ser desativados.",
      "key7": "Exemplos: Gerenciamento de sessão, segurança, funcionalidade de login.",
      "key8": "Cookies de Análise",
      "key9": "Esses cookies nos ajudam a entender como os visitantes interagem com nosso site, coletando e relatando informações de forma anônima.",
      "key10": "Exemplos: Visualizações de páginas, tempo gasto no site, fluxo de usuários.",
      "key11": "Cookies de Marketing",
      "key12": "Esses cookies são usados para rastrear visitantes em diferentes sites. O objetivo é exibir anúncios relevantes e atraentes para o usuário individual.",
      "key13": "Exemplos: Retargeting, anúncios personalizados, rastreamento de redes sociais.",
      "key14": "Seus Direitos",
      "key15": "Você tem o direito de acessar, modificar ou excluir seus dados pessoais coletados via cookies. Para exercer seus direitos, entre em contato conosco. ",
      "key16": "Para mais informações sobre como tratamos seus dados, consulte nossa Política de Privacidade.",
      "key17": "Salvar Preferências",
      "key18": "Ao continuar a usar este site, você concorda com a nossa <a href=\"https://sabiotrade.com/pt/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">política de cookies</a>.",
      "key19": "Sempre ativo",
      "btnAccept": "Aceitar tudo",
      "btnAll": "Permitir tudo",
      "btnManage": "Gerenciar cookies",
    },
    "it": {
      "key1": "Usiamo i cookie per migliorare la funzionalità del nostro sito web. Scopri di più nella nostra <a href=\"https://sabiotrade.com/it/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">Cookie Policy</a>.",
      "key2": "Impostazioni dei Cookie",
      "key3": "Preferenze dei cookie",
      "key4": "Gestisci le tue preferenze su come utilizziamo i cookie per migliorare la tua esperienza. Puoi regolare le tue scelte qui sotto:",
      "key5": "Cookie Necessari",
      "key6": "Questi cookie sono essenziali per il corretto funzionamento del sito web. Abilitano funzionalità di base come la navigazione tra le pagine e l'accesso alle aree sicure del sito web. Questi cookie non possono essere disabilitati.",
      "key7": "<b>Esempi:</b> Gestione delle sessioni, sicurezza, funzionalità di accesso.",
      "key8": "Cookie analitici",
      "key9": "Questi cookie ci aiutano a comprendere come i visitatori interagiscono con il nostro sito web raccogliendo e riportando informazioni in modo anonimo.",
      "key10": "<b>Esempi:</b> Visualizzazioni di pagina, tempo trascorso sul sito, flusso degli utenti.",
      "key11": "Cookie di Marketing",
      "key12": "Questi cookie vengono utilizzati per monitorare i visitatori su diversi siti web. L'intento è di mostrare annunci pertinenti e coinvolgenti per l'utente individuale.",
      "key13": "<b>Esempi:</b> Retargeting, annunci personalizzati, monitoraggio dei social media.",
      "key14": "I Tuoi Diritti",
      "key15": "Hai il diritto di accedere, modificare o eliminare i tuoi dati personali raccolti tramite i cookie. Per esercitare i tuoi diritti, contattaci.",
      "key16": "Per maggiori informazioni su come gestiamo i tuoi dati, consulta la nostra Privacy Policy.",
      "key17": "Salva Preferenze",
      "key18": "Continuando a utilizzare questo sito, acconsenti alla nostra <a href=\"https://sabiotrade.com/it/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">politica sui cookie</a>.",
      "key19": "Sempre attivo",
      "btnAccept": "Accetta tutto",
      "btnAll": "Consenti tutto",
      "btnManage": "Gestisci i cookie",
    },
    "fr": {
      "key1": "Nous utilisons des cookies pour améliorer la fonctionnalité de notre site Web. En savoir plus dans notre <a href=\"https://sabiotrade.com/fr/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">Politique de Cookies</a>.",
      "key2": "Paramètres des Cookies",
      "key3": "Préférences des Cookies",
      "key4": "Gérez vos préférences concernant l'utilisation des cookies pour améliorer votre expérience. Vous pouvez ajuster vos choix ci-dessous :",
      "key5": "Cookies Nécessaires",
      "key6": "Ces cookies sont essentiels au bon fonctionnement du site Web. Ils permettent des fonctionnalités de base telles que la navigation sur les pages et l'accès aux zones sécurisées du site. Ces cookies ne peuvent pas être désactivés.",
      "key7": "<b>Exemples:</b> Gestion de session, sécurité, fonctionnalité de connexion.",
      "key8": "Cookies d'Analyse",
      "key9": "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site Web en collectant et en rapportant des informations de manière anonyme.",
      "key10": "<b>Exemples:</b> Vues de pages, temps passé sur le site, flux des utilisateurs.",
      "key11": "Cookies de Marketing",
      "key12": "Ces cookies sont utilisés pour suivre les visiteurs sur différents sites Web. L'objectif est d'afficher des publicités pertinentes et engageantes pour l'utilisateur individuel.",
      "key13": "<b>Exemples:</b> Reciblage, publicités personnalisées, suivi sur les réseaux sociaux.",
      "key14": "Vos Droits",
      "key15": "Vous avez le droit d'accéder, de modifier ou de supprimer vos données personnelles collectées via les cookies. Pour exercer vos droits, veuillez nous contacter.",
      "key16": "Pour plus d'informations sur la manière dont nous gérons vos données, veuillez consulter notre Politique de Confidentialité.",
      "key17": "Enregistrer les Préférences",
      "key18": "En continuant à utiliser ce site, vous acceptez notre <a href=\"https://sabiotrade.com/fr/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">politique relative aux cookies</a>.",
      "key19": "Toujours actif",
      "btnAccept": "Tout accepter",
      "btnAll": "Tout autoriser",
      "btnManage": "Gérer les cookies",
    },
    "de": {
      "key1": "Wir verwenden Cookies, um die Funktionalität unserer Website zu verbessern. Erfahren Sie mehr in unserer <a href=\"https://sabiotrade.com/de/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">Cookie-Richtlinie</a>.",
      "key2": "Cookie-Einstellungen",
      "key3": "Cookie-Präferenzen",
      "key4": "Verwalten Sie Ihre Präferenzen dafür, wie wir Cookies verwenden, um Ihr Erlebnis zu verbessern. Sie können Ihre Auswahl unten anpassen:",
      "key5": "Notwendige Cookies",
      "key6": "Diese Cookies sind erforderlich, damit die Website korrekt funktioniert. Sie ermöglichen grundlegende Funktionen wie die Navigation auf der Seite und den Zugang zu sicheren Bereichen der Website. Diese Cookies können nicht deaktiviert werden.",
      "key7": "<b>Beispiele</b>: Sitzungsmanagement, Sicherheit, Login-Funktionalität.",
      "key8": "Analyse-Cookies",
      "key9": "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und berichten.",
      "key10": "<b>Beispiele</b>: Seitenaufrufe, verbrachte Zeit auf der Seite, Nutzerfluss.",
      "key11": "Marketing-Cookies",
      "key12": "Diese Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen. Das Ziel ist es, Anzeigen anzuzeigen, die für den einzelnen Nutzer relevant und ansprechend sind.",
      "key13": "<b>Beispiele</b>: Retargeting, personalisierte Anzeigen, Social Media Tracking.",
      "key14": "Ihre Rechte",
      "key15": "Sie haben das Recht, auf Ihre über Cookies gesammelten personenbezogenen Daten zuzugreifen, diese zu ändern oder zu löschen. Um Ihre Rechte auszuüben, kontaktieren Sie uns bitte.",
      "key16": "Weitere Informationen darüber, wie wir mit Ihren Daten umgehen, finden Sie in unserer Datenschutzrichtlinie.",
      "key17": "Präferenzen speichern",
      "key18": "Wenn Sie diese Website weiterhin nutzen, stimmen Sie unserer <a href=\"https://sabiotrade.com/de/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">Cookie-Richtlinie</a> zu.",
      "key19": "Immer aktiv",
      "btnAccept": "Alle akzeptieren",
      "btnAll": "Alle erlauben",
      "btnManage": "Cookies verwalten",
    },
    "nl": {
      "key1": "We gebruiken cookies om de functionaliteit van onze website te verbeteren. Lees meer in ons <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">Cookiebeleid</a>.",
      "key2": "Cookie-Instellingen",
      "key3": "Cookievoorkeuren",
      "key4": "Beheer uw voorkeuren voor hoe wij cookies gebruiken om uw ervaring te verbeteren. U kunt uw keuzes hieronder aanpassen:",
      "key5": "Noodzakelijke Cookies",
      "key6": "Deze cookies zijn essentieel voor de juiste werking van de website. Ze maken basisfuncties mogelijk, zoals paginanavigatie en toegang tot beveiligde gedeelten van de website. Deze cookies kunnen niet worden uitgeschakeld.",
      "key7": "<b>Voorbeelden</b>: Sessiebeheer, beveiliging, inlogfunctionaliteit.",
      "key8": "Analytische Cookies",
      "key9": "Deze cookies helpen ons te begrijpen hoe bezoekers met onze website omgaan door informatie anoniem te verzamelen en te rapporteren.",
      "key10": "<b>Voorbeelden</b>: Paginabezoeken, tijd op de site, gebruikersstroom.",
      "key11": "Marketing-Cookies",
      "key12": "Deze cookies worden gebruikt om bezoekers over verschillende websites te volgen. Het doel is om advertenties weer te geven die relevant en boeiend zijn voor de individuele gebruiker.",
      "key13": "<b>Voorbeelden</b>: Retargeting, gepersonaliseerde advertenties, tracking via sociale media.",
      "key14": "Uw Rechten",
      "key15": "U heeft het recht om toegang te krijgen tot, uw persoonlijke gegevens die via cookies zijn verzameld, te wijzigen of te verwijderen. Neem contact met ons op om uw rechten uit te oefenen.",
      "key16": "Voor meer informatie over hoe wij uw gegevens verwerken, zie ons Privacybeleid.",
      "key17": "Voorkeuren opslaan",
      "key18": "Door deze site te blijven gebruiken, stem je in met ons <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">cookiebeleid</a>.",
      "key19": "Altijd actief",
      "btnAccept": "Alles accepteren",
      "btnAll": "Alles toestaan",
      "btnManage": "Cookies beheren",
    },
    "no": {
      "key1": "Vi bruker informasjonskapsler for å forbedre funksjonaliteten på nettstedet vårt. Les mer i vår <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">retningslinje for informasjonskapsler</a>.",
      "key2": "Innstilling for informasjonskapsler",
      "key3": "Preferanser for informasjonskapsler",
      "key4": "Administrer dine preferanser for hvordan vi bruker informasjonskapsler for å forbedre din opplevelse. Du kan justere valgene dine nedenfor:",
      "key5": "Nødvendige informasjonskapsler",
      "key6": "Denne typen informasjonskapsler er essensielle for at nettstedet skal fungere korrekt. De muliggjør grunnleggende funksjoner som navigasjon på siden og tilgang til sikre områder av nettstedet. Disse informasjonskapslene kan ikke deaktiveres.",
      "key7": "<b>Eksempler</b>: Sesjonsstyring, sikkerhet, innloggingsfunksjonalitet.",
      "key8": "Analyseinformasjonskapsler",
      "key9": "Denne typen informasjonskapsler hjelper oss med å forstå hvordan besøkende samhandler med nettstedet vårt ved å samle inn og rapportere informasjon anonymt.",
      "key10": "<b>Eksempler</b>: Sidevisninger, tid brukt på nettstedet, brukerflyt.",
      "key11": "Markedsføringsinformasjonskapsler",
      "key12": "Denne typen informasjonskapsler brukes til å spore besøkende på tvers av nettsteder. Formålet er å vise annonser som er relevante og engasjerende for den enkelte bruker.",
      "key13": "<b>Eksempler</b>: Retargeting, personlige annonser, sporing i sosiale medier.",
      "key14": "Dine Rettigheter",
      "key15": "Du har rett til å få tilgang til, endre eller slette dine personopplysninger som er samlet inn via informasjonskapsler. For å utøve dine rettigheter, vennligst kontakt oss.",
      "key16": "For mer informasjon om hvordan vi håndterer dine data, vennligst se vår personvernerklæring.",
      "key17": "Lagre preferanser",
      "key18": "Ved å fortsette å bruke dette nettstedet godtar du vår <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">cookiepolicy</a>.",
      "key19": "Alltid aktiv",
      "btnAccept": "Godta alle",
      "btnAll": "Tillat alle",
      "btnManage": "Administrer informasjonskapsler",
    },
    "fi": {
      "key1": "Käytämme evästeitä parantaaksemme verkkosivustomme toimivuutta. Lue lisää evästekäytännöstämme <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">tästä</a>.",
      "key2": "Evästeasetukset",
      "key3": "Evästpreferenssit",
      "key4": "Hallinnoi preferenssejäsi siitä, miten käytämme evästeitä parantaaksemme kokemustasi. Voit säätää valintojasi alla:",
      "key5": "Välttämättömät evästeet",
      "key6": "Nämä evästeet ovat välttämättömiä verkkosivuston toimimisen kannalta. Ne mahdollistavat perusominaisuudet, kuten sivujen selaamisen ja pääsyn turvallisiin alueisiin verkkosivustolla. Näitä evästeitä ei voi poistaa käytöstä.",
      "key7": "<b>Esimerkkejä</b>: Istunnon hallinta, turvallisuus, kirjautumistoiminto.",
      "key8": "Analytiikkaevästeet",
      "key9": "Nämä evästeet auttavat meitä ymmärtämään, miten vierailijat käyttävät verkkosivustoamme keräämällä ja raportoimalla tietoja nimettömästi.",
      "key10": "<b>Esimerkkejä</b>: Sivun katselut, aikaväli verkkosivustolla, käyttäjän kulku.",
      "key11": "Markkinointievästeet",
      "key12": "Näitä evästeitä käytetään seuraamaan vierailijoita eri verkkosivustoilla. Tavoitteena on näyttää mainoksia, jotka ovat merkityksellisiä ja kiinnostavia yksittäiselle käyttäjälle.",
      "key13": "<b>Esimerkkejä</b>: Uudelleen kohdentaminen, personoidut mainokset, sosiaalisen median seuranta.",
      "key14": "Oikeutesi",
      "key15": "Sinulla on oikeus tarkastella, muokata tai poistaa evästeiden avulla kerättyjä henkilötietojasi. Voit käyttää oikeuksiasi ottamalla meihin yhteyttä.",
      "key16": "Lisätietoja siitä, miten käsittelemme tietojasi, löydät tietosuojakäytännöstämme.",
      "key17": "Tallenna preferenssit",
      "key18": "Jatkamalla tämän sivuston käyttöä hyväksyt meidän <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">evästekäytäntömme</a>.",
      "key19": "Aina aktiivinen",
      "btnAccept": "Hyväksy kaikki",
      "btnAll": "Salli kaikki",
      "btnManage": "Hallitse evästeitä",
    },
    "dk": {
      "key1": "Vi bruger cookies til at forbedre funktionaliteten på vores hjemmeside. Læs mere i vores <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">Cookiepolitik</a>.",
      "key2": "Cookieindstillinger",
      "key3": "Cookiepræferencer",
      "key4": "Administrer dine præferencer for, hvordan vi bruger cookies til at forbedre din oplevelse. Du kan justere dine valg nedenfor:",
      "key5": "Nødvendige cookies",
      "key6": "Disse cookies er essentielle for, at hjemmesiden fungerer korrekt. De muliggør grundlæggende funktioner som navigation på siden og adgang til sikre områder på hjemmesiden. Disse cookies kan ikke deaktiveres.",
      "key7": "<b>Eksempler</b>: Sessionshåndtering, sikkerhed, loginfunktionalitet.",
      "key8": "Analytiske cookies",
      "key9": "Disse cookies hjælper os med at forstå, hvordan besøgende interagerer med vores hjemmeside ved at indsamle og rapportere information anonymt.",
      "key10": "<b>Eksempler</b>: Sidevisninger, tid brugt på siden, brugerflow.",
      "key11": "Markedsføringscookies",
      "key12": "Disse cookies bruges til at spore besøgende på tværs af hjemmesider. Formålet er at vise annoncer, der er relevante og engagerende for den enkelte bruger.",
      "key13": "<b>Eksempler</b>: Retargeting, personlige annoncer, sociale mediesporing.",
      "key14": "Dine Rettigheder",
      "key15": "Du har ret til at få adgang til, ændre eller slette dine persondata, der er indsamlet via cookies. For at udøve dine rettigheder, bedes du kontakte os.",
      "key16": "For mere information om, hvordan vi håndterer dine data, se venligst vores Privatlivspolitik.",
      "key17": "Gem Præferencer",
      "key18": "Ved at fortsætte med at bruge dette websted accepterer du vores <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">cookiepolitik</a>.",
      "key19": "Altid aktiv",
      "btnAccept": "Accepter alle",
      "btnAll": "Tillad alle",
      "btnManage": "Administrer cookies",
    },
    "se": {
      "key1": "Vi använder cookies för att förbättra funktionaliteten på vår webbplats. Läs mer i vår <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">Cookiepolicy</a>.",
      "key2": "Cookieinställningar",
      "key3": "Cookiepreferenser",
      "key4": "Hantera dina preferenser för hur vi använder cookies för att förbättra din upplevelse. Du kan justera dina val nedan:",
      "key5": "Nödvändiga Cookies",
      "key6": "Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt. De möjliggör grundläggande funktioner som sidnavigering och åtkomst till säkra områden på webbplatsen. Dessa cookies kan inte inaktiveras.",
      "key7": "<b>Exempel</b>: Sessionshantering, säkerhet, inloggningsfunktioner.",
      "key8": "Analyscookies",
      "key9": "Dessa cookies hjälper oss att förstå hur besökare interagerar med vår webbplats genom att samla in och rapportera information anonymt.",
      "key10": "<b>Exempel</b>: Sidvisningar, tid spenderad på webbplatsen, användarflöde.",
      "key11": "Marknadsföringscookies",
      "key12": "Dessa cookies används för att spåra besökare mellan olika webbplatser. Syftet är att visa annonser som är relevanta och engagerande för den enskilda användaren.",
      "key13": "<b>Exempel</b>: Retargeting, personliga annonser, spårning i sociala medier.",
      "key14": "Dina Rättigheter",
      "key15": "Du har rätt att få åtkomst till, ändra eller ta bort dina personuppgifter som samlas in via cookies. För att utöva dina rättigheter, vänligen kontakta oss.",
      "key16": "För mer information om hur vi hanterar dina uppgifter, se vår Integritetspolicy.",
      "key17": "Spara Inställningar",
      "key18": "Genom att fortsätta använda denna webbplats godkänner du vår <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">cookiepolicy</a>.",
      "key19": "Alltid aktiv",
      "btnAccept": "Acceptera alla",
      "btnAll": "Tillåt alla",
      "btnManage": "Hantera cookies",
    },
    "ms": {
      "key1": "Kami menggunakan kuki untuk meningkatkan fungsi laman web kami. Ketahui lebih lanjut dalam Dasar <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">Kuki kami</a>.",
      "key2": "Tetapan Kuki",
      "key3": "Keutamaan Kuki",
      "key4": "Urus pilihan anda tentang bagaimana kami menggunakan kuki untuk meningkatkan pengalaman anda. Anda boleh menyesuaikan pilihan anda di bawah:",
      "key5": "Kuki Diperlukan",
      "key6": "Kuki ini penting untuk memastikan laman web berfungsi dengan betul. Ia membolehkan ciri asas seperti navigasi halaman dan akses ke kawasan selamat laman web. Kuki ini tidak boleh dinyahaktifkan.",
      "key7": "<b>Contoh:</b> Pengurusan sesi, keselamatan, fungsi log masuk.",
      "key8": "Kuki Analitik",
      "key9": "Kuki ini membantu kami memahami bagaimana pelawat berinteraksi dengan laman web kami dengan mengumpul dan melaporkan maklumat secara anonim.",
      "key10": "<b>Contoh:</b> Paparan halaman, masa dihabiskan di laman, aliran pengguna.",
      "key11": "Kuki Pemasaran",
      "key12": "Kuki ini digunakan untuk menjejaki pelawat merentasi laman web. Tujuannya adalah untuk memaparkan iklan yang relevan dan menarik bagi setiap pengguna individu.",
      "key13": "<b>Contoh:</b> Penargetan semula, iklan diperibadikan, penjejakan media sosial.",
      "key14": "Hak Anda",
      "key15": "Anda berhak untuk mengakses, mengubah, atau memadam data peribadi anda yang dikumpulkan melalui kuki. Untuk melaksanakan hak anda, sila hubungi kami.",
      "key16": "Untuk maklumat lanjut mengenai cara kami mengendalikan data anda, sila lihat Dasar Privasi kami.",
      "key17": "Simpan Keutamaan",
      "key18": "Dengan terus menggunakan laman ini, anda bersetuju dengan <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">dasar kuki</a> kami.",
      "key19": "Sentiasa aktif",
      "btnAccept": "Terima semua",
      "btnAll": "Benarkan semua",
      "btnManage": "Urus kuki",
    },
    "id": {
      "key1": "Kami menggunakan cookie untuk meningkatkan fungsionalitas situs web kami. Pelajari lebih lanjut dalam <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">Kebijakan Cookie</a> kami.",
      "key2": "Pengaturan Cookie",
      "key3": "Preferensi Cookie",
      "key4": "Kelola preferensi Anda tentang bagaimana kami menggunakan cookie untuk meningkatkan pengalaman Anda. Anda dapat menyesuaikan pilihan Anda di bawah ini:",
      "key5": "Cookie yang Diperlukan",
      "key6": "Cookie ini sangat penting agar situs web dapat berfungsi dengan benar. Mereka mengaktifkan fitur dasar seperti navigasi halaman dan akses ke area aman situs web. Cookie ini tidak dapat dinonaktifkan.",
      "key7": "<b>Contoh</b>: Manajemen sesi, keamanan, fungsi login.",
      "key8": "Cookie Analitik",
      "key9": "Cookie ini membantu kami memahami bagaimana pengunjung berinteraksi dengan situs web kami dengan mengumpulkan dan melaporkan informasi secara anonim.",
      "key10": "<b>Contoh</b>: Tampilan halaman, waktu yang dihabiskan di situs, alur pengguna.",
      "key11": "Cookie Pemasaran",
      "key12": "Cookie ini digunakan untuk melacak pengunjung di berbagai situs web. Tujuannya adalah untuk menampilkan iklan yang relevan dan menarik bagi setiap pengguna.",
      "key13": "<b>Contoh</b>: Retargeting, iklan yang dipersonalisasi, pelacakan media sosial.",
      "key14": "Hak Anda",
      "key15": "Anda berhak untuk mengakses, mengubah, atau menghapus data pribadi Anda yang dikumpulkan melalui cookie. Untuk menggunakan hak Anda, silakan hubungi kami.",
      "key16": "Untuk informasi lebih lanjut tentang bagaimana kami menangani data Anda, silakan lihat Kebijakan Privasi kami.",
      "key17": "Simpan Preferensi",
      "key18": "Dengan terus menggunakan situs ini, Anda menyetujui <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">kebijakan cookie</a> kami.",
      "key19": "Selalu aktif",
      "btnAccept": "Terima semua",
      "btnAll": "Izinkan semua",
      "btnManage": "Kelola cookie"
    },
    "vi": {
      "key1": "Chúng tôi sử dụng cookie để cải thiện chức năng của trang web của mình. Tìm hiểu thêm trong <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">Chính sách Cookie</a> của chúng tôi.",
      "key2": "Cài đặt Cookie",
      "key3": "Tùy chọn Cookie",
      "key4": "Quản lý tùy chọn của bạn về cách chúng tôi sử dụng cookie để nâng cao trải nghiệm của bạn. Bạn có thể điều chỉnh lựa chọn của mình bên dưới:",
      "key5": "Cookie Cần Thiết",
      "key6": "Những cookie này rất cần thiết để trang web hoạt động chính xác. Chúng kích hoạt các tính năng cơ bản như điều hướng trang và truy cập vào các khu vực an toàn của trang web. Những cookie này không thể bị vô hiệu hóa.",
      "key7": "<b>Ví dụ</b>: Quản lý phiên, bảo mật, chức năng đăng nhập.",
      "key8": "Cookie Phân Tích",
      "key9": "Những cookie này giúp chúng tôi hiểu cách khách truy cập tương tác với trang web bằng cách thu thập và báo cáo thông tin ẩn danh.",
      "key10": "<b>Ví dụ</b>: Lượt xem trang, thời gian trên trang, luồng người dùng.",
      "key11": "Cookie Tiếp Thị",
      "key12": "Những cookie này được sử dụng để theo dõi khách truy cập trên các trang web. Mục đích là hiển thị quảng cáo phù hợp và hấp dẫn đối với từng người dùng.",
      "key13": "<b>Ví dụ</b>: Tiếp thị lại, quảng cáo cá nhân hóa, theo dõi mạng xã hội.",
      "key14": "Quyền Của Bạn",
      "key15": "Bạn có quyền truy cập, chỉnh sửa hoặc xóa dữ liệu cá nhân của mình được thu thập qua cookie. Để thực hiện quyền của bạn, vui lòng liên hệ với chúng tôi.",
      "key16": "Để biết thêm thông tin về cách chúng tôi xử lý dữ liệu của bạn, vui lòng xem Chính sách quyền riêng tư của chúng tôi.",
      "key17": "Lưu tùy chọn",
      "key18": "Bằng cách tiếp tục sử dụng trang web này, bạn đồng ý với <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">chính sách cookie</a> của chúng tôi.",
      "key19": "Luôn hoạt động",
      "btnAccept": "Chấp nhận tất cả",
      "btnAll": "Cho phép tất cả",
      "btnManage": "Quản lý cookie"
    },
    "tr": {
      "key1": "Çerezleri, web sitemizin işlevselliğini geliştirmek için kullanıyoruz. Daha fazla bilgi için <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">Çerez Politikamıza</a> göz atın.",
      "key2": "Çerez Ayarları",
      "key3": "Çerez Tercihleri",
      "key4": "Deneyiminizi geliştirmek için çerezleri nasıl kullandığımızı yönetebilirsiniz. Aşağıdan tercihlerinizi ayarlayabilirsiniz:",
      "key5": "Zorunlu Çerezler",
      "key6": "Bu çerezler, web sitesinin doğru şekilde çalışması için gereklidir. Sayfa gezintisi ve güvenli alanlara erişim gibi temel özellikleri etkinleştirir. Bu çerezler devre dışı bırakılamaz.",
      "key7": "<b>Örnekler</b>: Oturum yönetimi, güvenlik, giriş işlevselliği.",
      "key8": "Analitik Çerezler",
      "key9": "Bu çerezler, ziyaretçilerin web sitemizle nasıl etkileşim kurduğunu anlamamıza yardımcı olur. Bilgileri anonim olarak toplayarak ve raporlayarak analiz yapmamızı sağlar.",
      "key10": "<b>Örnekler</b>: Sayfa görüntülemeleri, sitede geçirilen süre, kullanıcı akışı.",
      "key11": "Pazarlama Çerezleri",
      "key12": "Bu çerezler, ziyaretçileri web siteleri arasında takip etmek için kullanılır. Amaç, bireysel kullanıcıya uygun ve ilgi çekici reklamlar göstermektir.",
      "key13": "<b>Örnekler</b>: Yeniden hedefleme, kişiselleştirilmiş reklamlar, sosyal medya takibi.",
      "key14": "Haklarınız",
      "key15": "Çerezler aracılığıyla toplanan kişisel verilerinize erişme, bunları değiştirme veya silme hakkına sahipsiniz. Haklarınızı kullanmak için lütfen bizimle iletişime geçin.",
      "key16": "Verilerinizi nasıl işlediğimiz hakkında daha fazla bilgi için lütfen Gizlilik Politikamıza bakın.",
      "key17": "Tercihleri Kaydet",
      "key18": "Bu siteyi kullanmaya devam ederek <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">çerez politikamızı</a> kabul etmiş olursunuz.",
      "key19": "Her zaman aktif",
      "btnAccept": "Tümünü Kabul Et",
      "btnAll": "Hepsine İzin Ver",
      "btnManage": "Çerezleri Yönet"
    },
    "th": {
      "key1": "เราใช้คุกกี้เพื่อปรับปรุงการทำงานของเว็บไซต์ของเรา ดูเพิ่มเติมใน <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #fff\">นโยบายคุกกี้</a> ของเรา",
      "key2": "การตั้งค่าคุกกี้",
      "key3": "การกำหนดค่าคุกกี้",
      "key4": "จัดการการตั้งค่าของคุณเกี่ยวกับวิธีที่เราใช้คุกกี้เพื่อเพิ่มประสบการณ์ของคุณ คุณสามารถปรับเปลี่ยนตัวเลือกของคุณด้านล่าง:",
      "key5": "คุกกี้ที่จำเป็น",
      "key6": "คุกกี้เหล่านี้มีความจำเป็นต่อการทำงานที่ถูกต้องของเว็บไซต์ พวกเขาช่วยให้สามารถใช้งานฟีเจอร์พื้นฐาน เช่น การนำทางหน้าเว็บและการเข้าถึงพื้นที่ที่ปลอดภัยของเว็บไซต์ คุกกี้เหล่านี้ไม่สามารถปิดการใช้งานได้",
      "key7": "<b>ตัวอย่าง</b>: การจัดการเซสชัน, ความปลอดภัย, ฟังก์ชันการเข้าสู่ระบบ",
      "key8": "คุกกี้วิเคราะห์",
      "key9": "คุกกี้เหล่านี้ช่วยให้เราทราบว่าผู้เยี่ยมชมมีปฏิสัมพันธ์กับเว็บไซต์ของเราอย่างไร โดยการรวบรวมและรายงานข้อมูลแบบไม่ระบุตัวตน",
      "key10": "<b>ตัวอย่าง</b>: จำนวนการดูหน้าเว็บ, ระยะเวลาที่ใช้บนเว็บไซต์, เส้นทางการใช้งานของผู้ใช้",
      "key11": "คุกกี้การตลาด",
      "key12": "คุกกี้เหล่านี้ใช้เพื่อติดตามผู้เยี่ยมชมระหว่างเว็บไซต์ จุดประสงค์คือเพื่อแสดงโฆษณาที่เกี่ยวข้องและดึงดูดความสนใจของผู้ใช้แต่ละราย",
      "key13": "<b>ตัวอย่าง</b>: การกำหนดเป้าหมายโฆษณาซ้ำ, โฆษณาส่วนบุคคล, การติดตามบนโซเชียลมีเดีย",
      "key14": "สิทธิ์ของคุณ",
      "key15": "คุณมีสิทธิ์เข้าถึง แก้ไข หรือ ลบข้อมูลส่วนบุคคลของคุณที่เก็บรวบรวมผ่านคุกกี้ หากต้องการใช้สิทธิ์ของคุณ โปรดติดต่อเรา",
      "key16": "ดูนโยบายความเป็นส่วนตัวของเราเพื่อข้อมูลเพิ่มเติมเกี่ยวกับวิธีที่เราจัดการข้อมูลของคุณ",
      "key17": "บันทึกการตั้งค่า",
      "key18": "โดยการใช้เว็บไซต์นี้ต่อไป ถือว่าคุณยินยอมตาม <a href=\"https://sabiotrade.com/privacy\" target=\"_blank\" style=\"text-decoration: underline; color: #C9CAE3\">นโยบายคุกกี้</a> ของเรา",
      "key19": "เปิดใช้งานเสมอ",
      "btnAccept": "ยอมรับทั้งหมด",
      "btnAll": "อนุญาตทั้งหมด",
      "btnManage": "จัดการคุกกี้"
    }


  }

  function disableSite() {
    const body = document.body;
    body.innerHTML = '';

    body.innerHTML = `<div style="text-align:center; margin-top:40px; font-size:32px">
                          Website is unavailable in your Region.
                        </div>`;
  }

  async function geoCheck() {
    let baseUrl = window.location.origin;

    const domain = window.location.hostname;
    if (domain === 'localhost') {
      baseUrl = 'http://localhost';
    }
    if (domain === 'sabio-trade.com') {
      baseUrl = 'https://sabiotrade.com';
    }

    return fetch(baseUrl + '/api/locations/current', { signal: AbortSignal.timeout(5 * 1000) })
      .then(response => response.json())
      .then(data => {
        const countryCode = data.country.code;
        if (!countryCode) {
          throw new Error('Country code not found in response');
        }

        localStorage.setItem('country', countryCode);

        if (['US'].includes(countryCode)) {
          disableSite()
        }

        return data.country;
      })
      .catch(error => {
        console.error('Failed to get current location:', error);
        
        return {
          code: 'CY',
          name: 'Cyprus',
          code_iso3: 'CYP',
          supports_3ds: true,
          is_restricted: false,
          amaiz_available: true,
        }; // default country
      });
  }

  let lang;
  let langTranslations;

  function loadScripts() {
    const scripts = document.querySelectorAll("script[type='text/plain'][data-consent]");
    scripts.forEach(loadScriptFromPlaceholder);

    // Handle noscript tags
    const noscripts = document.querySelectorAll("noscript[data-consent-noscript]");
    noscripts.forEach(noscript => {
      const iframe = noscript.querySelector("iframe");
      if (iframe && iframe.src) {
        const newIframe = document.createElement("iframe");
        newIframe.src = iframe.src;
        newIframe.style.display = "none";
        newIframe.style.visibility = "hidden";
        document.body.appendChild(newIframe);
      }
      noscript.remove();
    });
  }

  function loadScriptFromPlaceholder(placeholder) {
    console.log('loading script', placeholder.src)

    const script = document.createElement("script");
    script.type = "text/javascript";

    if (placeholder.src) {
      script.src = placeholder.src;
      script.async = placeholder.async;
    } else {
      script.textContent = placeholder.textContent;
    }

    placeholder.remove();
    document.body.appendChild(script);
  }

  function loadMarketing() {
    const marketingScripts = document.querySelectorAll("script[type='text/plain'][data-consent='marketing']");
    marketingScripts.forEach(loadScriptFromPlaceholder);
  }

  function injectBannerStyles() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "/assets/cookieBot/cookie.css?v=1738067528";
    document.head.prepend(link);
  }
  
  function setCheckboxState() {
    const analyticsCheckbox = document.getElementById("analytics-consent");
    const marketingCheckbox = document.getElementById("marketing-consent");

    if (analyticsCheckbox) {
      analyticsCheckbox.checked = getCookie("analyticsConsent") === "true";
    }

    if (marketingCheckbox) {
      marketingCheckbox.checked = getCookie("marketingConsent") === "true";
    }
  }

  function handlePopupClose() {
    const banner = document.getElementById("cookie-consent-banner");
    const icon = document.getElementById("cookie-settings-icon");
    document.getElementById("cookie-popup-overlay").classList.remove("active");
    document.getElementById("cookie-popup").classList.remove("active");

    if (getCookie("userConsent") === "accepted") {
      if (icon) icon.style.display = "flex";
      if (banner) banner.style.display = "none";
    } else {
      if (banner) banner.style.display = "flex";
      if (icon) icon.style.display = "none";
    }
  }

  function showConsentPopup() {
    let overlay = document.getElementById("cookie-popup-overlay");
    let popup = document.getElementById("cookie-popup");


    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "cookie-popup-overlay";
      document.body.appendChild(overlay);
    }

    if (!popup) {
      popup = document.createElement("div");
      popup.id = "cookie-popup";
      popup.innerHTML = `
        <div>
          <div id="cookie-popup-header">
          <div id="cookie-popup-headerText">
              <h4>${langTranslations.key3}</h4>
              <p>${langTranslations.key4}</p>
          </div>

             <button id="cookie-popup-close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7.5364 6.2636C7.18492 5.91213 6.61508 5.91213 6.2636 6.2636C5.91213 6.61508 5.91213 7.18492 6.2636 7.5364L10.7272 12L6.2636 16.4636C5.91213 16.8151 5.91213 17.3849 6.2636 17.7364C6.61508 18.0879 7.18492 18.0879 7.5364 17.7364L12 13.2728L16.4636 17.7364C16.8151 18.0879 17.3849 18.0879 17.7364 17.7364C18.0879 17.3849 18.0879 16.8151 17.7364 16.4636L13.2728 12L17.7364 7.5364C18.0879 7.18492 18.0879 6.61508 17.7364 6.2636C17.3849 5.91213 16.8151 5.91213 16.4636 6.2636L12 10.7272L7.5364 6.2636Z" fill="#99A2AD"/>
                </svg>
            </button>
          </div>
          <div id="cookie-popup-body">
            <div class="cookie-switch">
                <div class="cookie-switch-head">
                    <div class="toggle-arrow-block">
                        <div class="toggle-arrow">
                        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 13.6983L6.64021 9.2318C6.21593 8.87824 5.58537 8.93556 5.2318 9.35984C4.87824 9.78412 4.93556 10.4147 5.35984 10.7682L11.3598 15.7682C11.7307 16.0773 12.2694 16.0773 12.6402 15.7682L18.6402 10.7682C19.0645 10.4147 19.1218 9.78412 18.7682 9.35984C18.4147 8.93556 17.7841 8.87824 17.3598 9.2318L12 13.6983Z" fill="white"/>
                        </svg>
                        </div>
                        <span>${langTranslations.key5}</span>
                    </div>
                    <span class="necessary">${langTranslations.key19}</span>
                </div>
                <div class="accordion">
                    <p>${langTranslations.key6}</p>
                    <p class="accordion-example">${langTranslations.key7}</p>
                </div>
            </div>
            <div class="cookie-switch">
                <div class="cookie-switch-head">
                   <div class="toggle-arrow-block">
                        <div class="toggle-arrow">
                        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 13.6983L6.64021 9.2318C6.21593 8.87824 5.58537 8.93556 5.2318 9.35984C4.87824 9.78412 4.93556 10.4147 5.35984 10.7682L11.3598 15.7682C11.7307 16.0773 12.2694 16.0773 12.6402 15.7682L18.6402 10.7682C19.0645 10.4147 19.1218 9.78412 18.7682 9.35984C18.4147 8.93556 17.7841 8.87824 17.3598 9.2318L12 13.6983Z" fill="white"/>
                        </svg>
                        </div>
                        <span>${langTranslations.key8}</span>
                    </div>
                   
                    <label>
                        <input type="checkbox" id="analytics-consent">
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="accordion">
                    <p>${langTranslations.key9}</p>
                    <p class="accordion-example">${langTranslations.key10}</p>
                </div>
            </div>
            <div class="cookie-switch">
                <div class="cookie-switch-head">
                     <div class="toggle-arrow-block">
                        <div class="toggle-arrow">
                        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 13.6983L6.64021 9.2318C6.21593 8.87824 5.58537 8.93556 5.2318 9.35984C4.87824 9.78412 4.93556 10.4147 5.35984 10.7682L11.3598 15.7682C11.7307 16.0773 12.2694 16.0773 12.6402 15.7682L18.6402 10.7682C19.0645 10.4147 19.1218 9.78412 18.7682 9.35984C18.4147 8.93556 17.7841 8.87824 17.3598 9.2318L12 13.6983Z" fill="white"/>
                        </svg>
                        </div>
                        <span>${langTranslations.key11}</span>
                    </div>
                    <label>
                        <input type="checkbox" id="marketing-consent">
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="accordion">
                    <p>${langTranslations.key12}</p>
                    <p class="accordion-example">${langTranslations.key13}</p>
                </div>
            </div>
        </div>
          <div id="cookie-popup-rights">
            <h4>${langTranslations.key14}</h4>
            <ul>
                <li>${langTranslations.key15}</li>
                <li>${langTranslations.key16}</li>
            </ul>

          </div>
        </div>
        <div id="cookie-popup-footer">
            <button id="save-cookies" class="cookie-button cookie-button--blue">
              <span class="cookie-button__text">${langTranslations.key17}</span>
            </button>
            <button id="accept-all" class="cookie-button cookie-button--grey">
              <span class="cookie-button__text">${langTranslations.btnAccept}</span>
            </button>
        </div>
            `;
      document.body.appendChild(popup);
      setCheckboxState();

      document.getElementById("cookie-popup-close").addEventListener("click", () => {
        handlePopupClose();
      });

      const cookieSwitches = document.querySelectorAll(".cookie-switch");

      if (cookieSwitches.length > 0) {
        const firstSwitch = cookieSwitches[0];
        const firstAccordion = firstSwitch.querySelector(".accordion");
        const firstArrow = firstSwitch.querySelector(".arrow-icon");

        if (firstAccordion) {
          firstAccordion.style.maxHeight = firstAccordion.scrollHeight + "px";
          firstAccordion.style.marginTop = "16px";
          if (firstArrow) {
            firstArrow.style.transform = "rotate(180deg)";
          }
        }
      }

      cookieSwitches.forEach((switchElement) => {
        const accordion = switchElement.querySelector(".accordion");
        const arrowIcon = switchElement.querySelector(".arrow-icon");
      
        switchElement.addEventListener("click", () => {
          cookieSwitches.forEach((otherElement) => {
            if (otherElement !== switchElement) {
              const otherAccordion = otherElement.querySelector(".accordion");
              const otherArrow = otherElement.querySelector(".arrow-icon");
              if (otherAccordion && otherAccordion.style.maxHeight) {
                otherAccordion.style.maxHeight = null;
                otherAccordion.style.marginTop = "0";
                if (otherArrow) {
                  otherArrow.style.transform = "rotate(0deg)";
                }
              }
            }
          });
      
          if (accordion) {
            const isExpanded = accordion.style.maxHeight;
            if (isExpanded) {
              accordion.style.maxHeight = null;
              accordion.style.marginTop = "0";
              arrowIcon.style.transform = "rotate(0deg)";
            } else {
              accordion.style.maxHeight = accordion.scrollHeight + "px";
              accordion.style.marginTop = "16px";
              arrowIcon.style.transform = "rotate(180deg)";
            }
          }
        });
      });
      


      document.getElementById("save-cookies").addEventListener("click", () => {
        const analytics = document.getElementById("analytics-consent").checked;
        const marketing = document.getElementById("marketing-consent").checked;

        setCookie("analyticsConsent", analytics, 365);
        setCookie("marketingConsent", marketing, 365);
        setCookie("userConsent", "accepted", 365);
        window.dispatchEvent(new Event('cookie-consent-updated'))

        setCheckboxState();
        handlePopupClose();
        createCookieIcon();

        console.log('cookie consent saved. analytics:', analytics, 'marketing:', marketing)
        render();
      });

      document.getElementById("accept-all").addEventListener("click", () => {
        setCookie("analyticsConsent", true, 365);
        setCookie("marketingConsent", true, 365);
        setCookie("userConsent", "accepted", 365);
        window.dispatchEvent(new Event('cookie-consent-updated'))

        setCheckboxState();
        handlePopupClose();
        createCookieIcon();
        loadScripts();
      });
    }

    overlay.classList.add("active");
    popup.classList.add("active");
  }

  let banner;

  function acceptCookieCallback(showIcon = true) {
    setCookie("userConsent", "accepted", 365);
    setCookie("analyticsConsent", true, 365);
    setCookie("marketingConsent", true, 365);
    window.dispatchEvent(new Event('cookie-consent-updated'))
    closeConsentBanner();
    loadScripts();
    if (showIcon) {
      createCookieIcon();
    }
  }

  function manageCookieCallback() {
    showConsentPopup();
    banner.style.display = "none";
  }

  function showConsentBanner() {
    banner = document.createElement("div");
    banner.id = "cookie-consent-banner";

    const currentLang = document.documentElement.lang || 'en';
    const additionalClass = ['de', 'dk', 'no'].includes(currentLang) ? 'cookie-buttons-column' : '';

    banner.innerHTML = `
            <p>${langTranslations.key1}</p>
            <div id="cookie-buttons" class=${additionalClass}>
                <button id="accept-cookies" class="cookie-button cookie-button--blue">
                  <span class="cookie-button__text">${langTranslations.btnAll}</span>
                </button>
                <button id="manage-cookies" class="cookie-button cookie-button--grey">
                <span class="cookie-button__text">${langTranslations.btnManage}</span>
                </button>
            </div>
        `;
    document.body.appendChild(banner);

    document.getElementById("accept-cookies")
      .addEventListener("click", acceptCookieCallback);

    document.getElementById("manage-cookies").addEventListener("click", manageCookieCallback);
  }

  function closeConsentBanner() {
    if (banner) {
      document.getElementById("accept-cookies").removeEventListener('click', acceptCookieCallback);
      document.getElementById("manage-cookies").removeEventListener('click', manageCookieCallback);
      banner.remove();
      banner = undefined;
    }
  }

  function createCookieIcon() {
    if (document.getElementById("cookie-settings-icon")) return;

    const icon = document.createElement("div");
    icon.id = "cookie-settings-icon";
    icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7495 3.08831C8.5998 3.58701 5.89765 5.67617 4.68762 8.54807C4.14149 9.84429 3.89716 11.4428 4.04014 12.7843C4.21474 14.422 4.64018 15.6245 5.50066 16.912C8.19686 20.9466 13.6278 22.1968 17.8321 19.7508C18.7125 19.2385 19.7268 18.3805 19.896 18.0047C20.1324 17.4798 19.9686 17.0728 19.3769 16.7152C18.3642 16.1031 17.775 14.9217 17.9531 13.8604C17.9857 13.6668 18.0142 13.3515 18.0165 13.1598L18.0208 12.8113L17.3436 12.1741C16.2461 11.1414 15.7685 10.3077 15.5415 9.02811C15.3351 7.86496 15.5298 6.69189 16.1008 5.6578C16.7442 4.49282 16.7436 4.49423 16.6902 4.21463C16.6171 3.83211 16.3093 3.52569 15.8583 3.38649C14.6823 3.02353 12.9518 2.89793 11.7495 3.08831ZM11.299 7.43449C11.7536 7.62212 12.2332 8.1378 12.3931 8.61066C12.7011 9.52168 12.2754 10.5428 11.3998 10.9934C10.9022 11.2494 10.044 11.2647 9.58549 11.0258C8.1477 10.2767 8.07538 8.3148 9.4562 7.51982C10.0247 7.19256 10.6434 7.16391 11.299 7.43449ZM10.567 12.0257C11.0691 12.2804 11.4152 12.6226 11.6554 13.1019C12.2262 14.2409 11.7804 15.5263 10.6028 16.1374C10.2922 16.2986 10.1584 16.3234 9.5994 16.3234C9.03499 16.3234 8.90763 16.2993 8.58045 16.1304C7.28778 15.4632 6.90606 13.9882 7.71738 12.7955C7.9602 12.4386 8.48527 12.0437 8.87301 11.9264C9.23352 11.8173 10.2768 11.8785 10.567 12.0257ZM14.7648 14.2855C14.9813 14.417 15.1969 14.6291 15.3312 14.8428C15.5261 15.1527 15.548 15.2455 15.5471 15.7562C15.5462 16.2503 15.5213 16.3623 15.3567 16.6122C15.0909 17.0155 14.7774 17.2541 14.3491 17.3791C13.9041 17.5089 13.6981 17.5101 13.3405 17.3848C12.8876 17.2261 12.5328 16.9372 12.3157 16.5506C11.8275 15.6808 12.217 14.5536 13.1471 14.1448C13.3169 14.0702 13.5623 14.0408 13.9066 14.0539C14.3268 14.0699 14.4761 14.1102 14.7648 14.2855Z" fill="white"/>
            </svg>
        `;
    document.body.appendChild(icon);

    icon.addEventListener("click", () => {
      showConsentPopup();
      icon.style.display = "none";
    });
  }

  function render() {
    const newLang = document.documentElement.lang || 'en';
    if (lang && newLang === lang) {
      return;
    }

    lang = newLang;
    langTranslations = translations[lang] || translations['en'];
    closeConsentBanner();

    if (getCookie("userConsent") === "accepted") {

      const marketingConsent = hasConsent("marketing");
      const analyticsConsent = hasConsent("analytics");

      if (marketingConsent) {
        loadMarketing();

        if (analyticsConsent) {
          loadScripts();
        }
      }

      createCookieIcon();
    } else {
      showConsentBanner();
    }
  }
  
  function init() {
    console.log('init cookie banner');
    
    injectBannerStyles();

    const observer = new MutationObserver(render)
    observer.observe(document.querySelector('html'), { attributes: true })

    render();
  }
  
  if (getCookie("userConsent") !== "accepted" || !localStorage.getItem('country')) {
    geoCheck()
      .then((country) => {
        const canShowCookieBanner = country.amaiz_available // todo: replace
        if (!canShowCookieBanner) {
          acceptCookieCallback(false);
          
          return;
        }

        init();
      });
  } else {
    window.addEventListener('DOMContentLoaded', init);
  }
  
})();
