function checkText() {
    var inputText = document.getElementById("input").value;

    // Translation map
    var translationMap = {
        "Instrumental": "Instrumental",
        "Intro": "Intro",
        "Verse": "Verso",
        "Pre-Chorus": "Pre-Coro",
        "Chorus": "Coro",  
        "Post-Chorus": "Post-Coro",
        "Refrain": "Refrán",
        "Bridge": "Puente",
        "Interlude": "Interludio",
        "Spoken": "Hablado",
        "Breakdown": "Ruptura",
        "Outro": "Outro",
        "Build": "Build",
        "Drop": "Drop"
    };

    // Check if the text starts with "[Letra de"
    if (!inputText.startsWith("[Letra de")) {
        inputText = "[Letra de \"Título\"]\n\n" + inputText;
    }

    var lines = inputText.trim().split('\n');
    var outputText = lines.map(function (verse, index) {
        verse = verse.replace(/<[^>]*>?/gm, '');
        verse = verse.replace(/&[^;]*?;/gm, '');
        verse = verse.replace(/[.,;:!?]$/g, '');
        if (/[а-яА-Я]/.test(verse)) {
            return "Cyrillic character found";
        }
        // Replace different quotes with single quotes
        verse = verse.replace(/[’´]/g, "'");
        verse = capitalizeFirstLetter(verse);

        // Check if the verse is a tag that needs to be translated
        if (verse.startsWith("[")) {
            var tag = verse.slice(1, verse.indexOf("]"));
            if (translationMap[tag]) {
                verse = verse.replace("[" + tag + "]", "[" + translationMap[tag] + "]");
                // Add a new line after the header only if the next line is not empty
          
            }
        }

        return verse;
    }).join('\n');

    var outputElement = document.getElementById("output");
    outputElement.innerHTML = outputText;
}

function copyText() {
    var inputText = document.querySelector("#output").textContent;
    var outputText = inputText.trim().split('\n').map(function (verse) {
        return verse;
    }).join('\n');
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = outputText;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);

    alert("Text copied to clipboard.");
}

function clearText() {
    document.getElementById("input").value = "";
    document.getElementById("output").innerHTML = "";
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}