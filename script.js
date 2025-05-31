const adhkar = [
    {
        arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ.",
        transliteration: "Lā ilāha illā-Allāh",
        translation: "There is no god but Allah.",
        source: "The Messenger of Allah ﷺ said: “The best dhikr is [above]” (Nasā’ī)"
    }, 

    {
        arabic: "سُبْحَانَ اللّٰهِ ، اَلْحَمْدُ لِلّٰهِ ، اَللّٰهُ أَكْبَرُ",
        transliteration: "Subḥāna-llāh. Alḥamdu li-llāh, Allāhu akbar.",
        translation: "Allah is free from imperfection. All praise be to Allah. Allah is the Greatest.",
        source: "The Messenger of Allah ﷺ said: “The most beloved statements to Allah are four: سُبْحَانَ اللهِ ، وَالْحَمْدُ لِلهِ ، وَلَا إِلهَ إِلَّا اللهُ ، وَاللهُ أَكْبَر.” (Muslim)"
    }
]

let currentIndex = 0;

const quoteBox = document.getElementById("text");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", function () {
  
    if (currentIndex > 0) {
        const entry = adhkar[currentIndex];

        quoteBox.innerHTML = `
        <p style="font-size: 24px;">${entry.arabic}</p>
        <p><em>${entry.transliteration}</em></p>
        <p>${entry.translation}</p>
        <p><small><strong>${entry.source}</strong></small></p>
        `;

        currentIndex = (currentIndex - 1) % adhkar.length;
    } else {
        console.log("Nothing to display.");
    }

  });