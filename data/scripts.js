document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        en: {
            tituloPagina: "Frialdad's Page",
            title: "Welcome",
            subtitle: "Interesting Links",
            linkText: "Lyrics Editor",
            scriptsText: "Useful Scripts for Genius"
        },
        es: {
            tituloPagina: "Página de Frialdad",
            title: "Bienvenido",
            subtitle: "Links interesantes",
            linkText: "Editor de letras",
            scriptsText: "Scripts útiles para Genius"
        },
        fr: {
            tituloPagina: "Page de Frialdad",
            title: "Bienvenue",
            subtitle: "Liens intéressants",
            linkText: "Éditeur de paroles",
            scriptsText: "Scripts utiles pour Genius"
        },
        de: {
            tituloPagina: "Frialdads Seite",
            title: "Willkommen",
            subtitle: "Interessante Links",
            linkText: "Texteditor",
            scriptsText: "Nützliche Skripte für Genius"
        },
        it: {
            tituloPagina: "Pagina di Frialdad",
            title: "Benvenuto",
            subtitle: "Link interessanti",
            linkText: "Editor di testi",
            scriptsText: "Script utili per Genius"
        },
        pl: {
            tituloPagina: "Strona Frialdada",
            title: "Witamy",
            subtitle: "Ciekawe linki",
            linkText: "Edytor tekstów",
            scriptsText: "Przydatne skrypty dla Genius"
        },
        nl: {
            tituloPagina: "Frialdad's Pagina",
            title: "Welkom",
            subtitle: "Interessante links",
            linkText: "Lyrics-editor",
            scriptsText: "Handige scripts voor Genius"
        },
        ru: {
            tituloPagina: "Страница Frialdad",
            title: "Добро пожаловать",
            subtitle: "Интересные ссылки",
            linkText: "Редактор текстов",
            scriptsText: "Полезные скрипты для Genius"
        },
         tr: {
            tituloPagina: "Frialdad'ın Sayfası",
            title: "Hoşgeldiniz",
            subtitle: "İlginç Bağlantılar",
            linkText: "Şarkı Sözleri Editörü",
            scriptsText: "Genius için Faydalı Betikler"
        }
    };

    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.split('-')[0]; // Get the language part of the locale
    const translation = translations[lang] || translations['en']; // Default to English if the language is not supported

    document.documentElement.lang = lang;
    document.title = translation.tituloPagina;
    document.getElementById("title").innerText = translation.title;
    document.getElementById("subtitle").innerText = translation.subtitle;
    document.getElementById("link-text").innerText = translation.linkText;
    document.getElementById("scripts-text").innerText = translation.scriptsText;
});
