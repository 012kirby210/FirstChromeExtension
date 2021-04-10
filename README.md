# FirstChromeExtension
First Chrome extension

A chrome extension that will change background color based on an url hostname.

https://developer.chrome.com/extensions/getstarted

Firefox developer edition :
https://www.mozilla.org/fr/firefox/developer/
* modifier la config : about:config et changer la valeur de la clef xpinstall.signatures.required
* https://support.mozilla.org/fr/kb/signature-modules-complementaires-firefox

Le fichier xpi est un fichier zippé contenant la racine du projet dont l'extension zip a été renommée en xpi.

Certaines fonctionnalités provenant de chromium résidant sous le namespace chrome peuvent ne pas être compatibles avec firefox, pour tester la compatibilité d'une extension : https://www.extensiontest.com/.

Plus de détails ici : https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Incompatibilit%C3%A9s_Chrome

2 branches :
* firefox-spe : pour les spécificités firefox
* chrome-spe : pour les spécificatés chrome

À venir une branch polyfill qui va suivre master.

En test : vérification du comportement de l'intégration de Reactjs dans les extensions de navigateur (voir la branch react)
