const arrayButton = document.querySelectorAll(".button-language");
let lenguageText = document.getElementById("language-abbrevation");
arrayButton.forEach(element => {
  element.addEventListener("click" ,() => {
    switch(element.innerHTML){
        case 'العربية':
            lenguageText.innerHTML = "AR";
            break;
        case 'বাংলা':
            lenguageText.innerHTML = "BN";
            break;
        case 'English':
            lenguageText.innerHTML = "EN";
            break;
        case 'Deutsch':
            lenguageText.innerHTML = "DE";
            break;
        case 'Ελληνικά':
            lenguageText.innerHTML = "EL";
            break;
        case 'Español':
            lenguageText.innerHTML = "ES-ES";
            break;
        case 'Suomalainen':
            lenguageText.innerHTML = "FI";
            break;
        case 'Filipino':
            lenguageText.innerHTML = "FIL";
            break;
        case 'Français':
            lenguageText.innerHTML = "FR";
            break;
        case 'हिंदी':
            lenguageText.innerHTML = "HI";
            break;
        case 'Magyar':
            lenguageText.innerHTML = "HU";
            break;            
        case 'Bahasa Indonesia':
            lenguageText.innerHTML = "ID";
            break;
        case 'Italiano':
            lenguageText.innerHTML = "IT";
            break;            
        case '日本語':
            lenguageText.innerHTML = "JA";
            break;
        case '한국어':
            lenguageText.innerHTML = "KO";
            break;            
        case 'Nederlands':
            lenguageText.innerHTML = "NL";
            break;
        case 'Polski':
            lenguageText.innerHTML = "PT-BR";
            break;            
        case 'Português (Brazil)':
            lenguageText.innerHTML = "PT-PT";
            break;
        case 'Română':
            lenguageText.innerHTML = "RO";
            break;            
        case 'Русский':
            lenguageText.innerHTML = "RU";
            break;
        case 'Svenska':
            lenguageText.innerHTML = "SV";
            break;            
        case 'தமிழ்':
            lenguageText.innerHTML = "TA";
            break;
        case 'Türkçe':
            lenguageText.innerHTML = "TR";
            break;            
        case 'Українська':
            lenguageText.innerHTML = "UK";
            break;
        case 'Tiếng Việt':
            lenguageText.innerHTML = "VI";
            break;            
        case '简体中文':
            lenguageText.innerHTML = "ZH-CN";
            break;
        case '繁體中文':
            lenguageText.innerHTML = "ZH-TW";
            break;
        default:
            lenguageText.innerHTML = "IT";
            break;
    }
  });  
});