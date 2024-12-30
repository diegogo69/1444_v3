// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

let time = 2000;

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Holii", time: 1 },
  { text: "digo", time: 5 },
  { text: "hellooou", time: 1 },
  { text: "it's meee", time: 5 },
  { text: "I was wondering", time: 15 },
  { text: "if after all these years", time: 15 },
  { text: "you'd like to meet", time: 15 },
  { text: "damn... that hits hard", time: 3 },
  { text: "no sabia que decía eso Jasj", time: 3 },
  { text: "chamo", time: 1 },
  { text: "mucho tiempo", time: 2 },
  { text: "muchos cambios", time: 2 },
  { text: "muchas cosas", time: 2 },
  { text: "pero acá estamos", time: 3 },
  { text: "como ese primer día", time: 3 },
  { text: "siendo nosotros mismos", time: 2 },
  { text: "haciéndonós reír", time: 1 },
  { text: "disfrutando", time: 1 },
  { text: "compartiendo un pedacito de nosotros", time: 3 },
  { text: "contando el uno para el otro", time: 3 },
  { text: "sin saber lo que sería", time: 2 },
  { text: "jamás me llegué a imaginar", time: 3 },
  { text: "lo importante que serías para mí", time: 3 },
  { text: "que charlar se hiciera tan facil", time: 3 },
  { text: "expresarme", time: 1 },
  { text: "bromear", time: 1 },
  { text: "y enfadarme", time: 1 },
  { text: "(malditx carlos sainz)", time: 2 },
  { text: "es tan fácil", time: 1 },
  { text: "a veces hasta verguenza me da", time: 3 },
  { text: "por las tonteras que te cuento", time: 3 },
  { text: "pero es así", time: 1 },
  { text: "y es tan valioso", time: 1 },
  { text: "tanto que para mí no tiene valor", time: 3 },
  { text: "no existe un número, ni cantidad o palabra", time: 3 },
  { text: "que pueda expresarlo apropiadamente", time: 3 },
  { text: "y me doy cuenta cada día", time: 2 },
  { text: "cuando hablamos", time: 1 },
  { text: "cuando no", time: 1 },
  { text: "cuando estamos bien", time: 2 },
  { text: "cuando no estamos tan bien", time: 3 },
  { text: "valoro mucho poder contar con vos", time: 3 },
  { text: "ojalá seguir haciendolo por milenios más", time: 3 },
  { text: "en esta vida y en las demás", time: 2 },
  { text: "te adoro", time: 1 },
  { text: "sos increíble", time: 1 },
  { text: "de verdad", time: 1 },
  { text: "en tus ocurrencias", time: 1 },
  { text: "en tu vibra", time: 1 },
  { text: "en tus capacidades", time: 1 },
  { text: "ojalá encuentres algo que te enamore", time: 3 },
  { text: "que logre reunir todas cualidades", time: 3 },
  { text: "y le pongas toda tu energía a ello", time: 3 },
  { text: "que seguro, seguro, seguro", time: 3 },
  { text: "sale algo muy lindo", time: 2 },
  { text: "no te limites", time: 1 },
  { text: "quiero verte feliz", time: 3 },
  { text: "orgullosa de ti misma", time: 3 },
  { text: "es raro", time: 1 },
  { text: "que nuestro día", time: 3 },
  { text: "sea el penúltimo del año", time: 3 },
  { text: "emociones super revueltas Jajaj", time: 3 },
  { text: "sobre todo vos y tu verano", time: 2 },
  { text: "gracias por regalarme a orión", time: 3 },
  { text: "ya lo hacía", time: 1 },
  { text: "pero te juro", time: 1 },
  { text: "que cada vez que vea a orión", time: 2 },
  { text: "ahí estarás vos también", time: 2 },
  { text: "no importa en q parte del mundo me esconda", time: 3 },
  { text: "pq orion siempre se ve", time: 1 },
  { text: "teniendo eso en cuenta", time: 1 },
  { text: "sería imposible olvidarte", time: 2 },
  { text: "la estrellita más brillante", time: 2 },
  { text: "para siempre mi super nova", time: 2 },
  { text: "", time: 140 },
];

let i = 0;
let finishInterval;
// Animar las letras
function updateLyrics() {
    if (i >= lyricsData.length) { 
      text = "";
      time = 1000;
      clearInterval(finishInterval)
    }

    else {
      let currentLine = lyricsData[i];
      time = currentLine.time;
      text = currentLine.text;
      
      var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
      var opacity = Math.min(1, currentLine.time  / fadeInDuration);
    
      // Aplica el efecto de aparición
      lyrics.style.opacity = opacity;
      lyrics.innerHTML = text;
      i++;
    }

}

finishInterval = setInterval(updateLyrics, time);
