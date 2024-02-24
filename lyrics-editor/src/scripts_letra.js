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
    "Drop": "Drop",
    "Instrumental Interlude": "Interludio Instrumental",
    "Instrumental Breakdown": "Ruptura Instrumental",
    "Instrumental Bridge": "Puente Instrumental",
    "Estrofa": "Verso",
  
  };

  // Check if the text starts with "[Letra de"
  if (!inputText.startsWith("[Letra de")) {
      inputText = "[Letra de \"Título\"]\n\n" + inputText;
  }

  var lines = inputText.trim().split('\n');
  var outputText = lines.map(function(verse, index) {
    verse = verse.replace(/&[^;]*?;/gm, '');
    verse = verse.replace(/[.,;:!?]$/g, '');

    if (/[а-яА-Я]/.test(verse)) {
      return "Cyrillic character found";
    }
    // Replace different quotes with single quotes
    verse = verse.replace(/[’´]/g, "'");
    verse = capitalizeFirstLetter(verse);

    if (verse.startsWith("[")) {
      // Use a regular expression to match the tag even if it has one or more words
      var tagMatch = verse.match(/\[([^\]]+)\]/);
      if (tagMatch) {
        var x = tagMatch[1].split(":");
        var tag = x[0].trim(); // Tomar solo la primera palabra antes de ":"
        if (translationMap[tag]) {
          if (x.length > 1) {
            // Reemplazar coma por "&" si hay contenido después de los dos puntos
            var content = x.slice(1).join(':').trim().replace(',', ' &');
            verse = "[" + translationMap[tag] + ": " + content + "]";
          } else {
            verse = "[" + translationMap[tag] + "]";
          }
        } else {
          if (x.length > 1) {
            // Reemplazar coma por "&" si hay contenido después de los dos puntos
            var content = x.slice(1).join(':').trim().replace(',', ' &');
            verse = "[" + tag + ": " + content + "]";
          }
        }
      }
    }

    // Apply formatting for <i></i>
    verse = verse.replace(/<i>(.*?)<\/i>/g, '$1');

    // Apply formatting for <b></b>
    verse = verse.replace(/<b>(.*?)<\/b>/g, '$1');


    return verse;
  }).join('\n');

  var outputElement = document.getElementById("output");
  outputElement.textContent = outputText;
}

function copyText() {
  try {
    var inputText = document.querySelector("#output").textContent;
    var outputText = inputText.trim().split('\n').map(function(verse) {
      return verse;
    }).join('\n');
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = outputText;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);

    alert("Letra copiada al portapapeles.");
  } catch (error) {
    console.error("Error al copiar el texto:", error);
    alert("Se produjo un error al copiar el texto. Consulta la consola para más detalles.");
  }
}


function clearText() {
  document.getElementById("input").value = "";
  document.getElementById("output").innerHTML = "";
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}