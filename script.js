/** * Latein Adventskalender - Logic & Data
 * Design: Classic Roman / Content: JSON Import
 */

// Die 24 Rätsel aus deiner JSON-Datei
const latinRiddles = [
    {
        day: 1,
        q: "Ich bin ein kurzes, mächtiges Wort mit nur drei Buchstaben. Ich bin das lateinische Wort für „Ich“. Ich stecke auch in vielen deutschen Fremdwörtern, die etwas mit Selbstbezogenheit zu tun haben. Kleiner Tipp: Du kennst mich vielleicht aus dem Wort, das jemanden beschreibt, der nur an sich denkt.",
        a: "EGO",
        e: "Ego bedeutet Ich. Deshalb sprechen wir von Egoismus (Selbstsucht) oder einem Egotrip! Ein perfektes Beispiel dafür, wie Latein in unserer heutigen Sprache weiterlebt.",
        image: "bilder/tag01.jpg"
    },
    {
        day: 2,
        q: "Ich bin der oberste Gott der Römer, der König des Himmels und Herr über Blitz und Donner. Mein Name steckt im lateinischen Wort für Tag (diēs) und ist auch der Namensgeber für einen Wochentag in vielen Sprachen. Wie lautet mein lateinischer Name?",
        a: "JUPITER",
        e: "Jupiter war der Göttervater. Sein Name stammt von der alten Wurzel 'Dieus-pater' ab. Latein ist überall: Er hat auch dem größten Planeten in unserem Sonnensystem seinen Namen gegeben!",
        image: "bilder/tag02.jpg"
    },
    {
        day: 3,
        q: "Römische Schüler hatten keine Hefte aus Papier. Stattdessen benutzten sie eine Art wiederverwendbaren Notizblock aus Holztafeln mit Wachs. Wie lautete der lateinische Name für diese Schreibtafel? (Gesuchtes Wort: Sechs Buchstaben.)",
        a: "TABULA",
        e: "Die Tabula war die Wachstafel. Das spitze Schreibgerät hieß Stilus. Auch heute verwenden wir in der Schule moderne 'Tablets'.",
        image: "bilder/tag03.jpg"
    },
    {
        day: 4,
        q: "Du kennst das sicher: Du schreibst eine E-Mail oder einen Brief, unterschreibst und merkst dann: Mist, ich habe etwas Wichtiges vergessen! Die Anmerkung beginnt fast immer mit P.S. Was bedeuten diese beiden Buchstaben ausgeschrieben?",
        a: "POST SCRIPTUM",
        e: "Post heißt 'nach' und Scriptum 'das Geschriebene'. Zusammen also 'Nachschrift'. Ein Klassiker aus der Antike!",
        image: "bilder/tag04.jpg"
    },
    {
        day: 5,
        q: "Dieses Kleidungsstück war das Erkennungszeichen des freien römischen Mannes. Es war ein riesiges, weißes Wolltuch. Wie lautet der lateinische Name für dieses imposante Wickelgewand? (Beginnt mit T)",
        a: "TOGA",
        e: "Die Toga war das offizielle Staatskleid. Im Alltag trug man eher die bequeme Tunika. Wer Toga trug, zeigte: Ich bin römischer Bürger!",
        image: "bilder/tag05.jpg"
    },
    {
        day: 6,
        q: "Im Lateinischen gibt es einen einfachen Begriff für das, was Nikolaus verteilt: eine Gabe oder ein Geschenk. Das Wort beginnt mit D und endet mit M. Es steckt in 'Donation'. Was ist es?",
        a: "DONUM",
        e: "DONUM (Neutrum) bedeutet Geschenk. Das Verb dazu ist 'dare' (geben).",
        image: "bilder/tag06.jpg"
    },
    {
        day: 7,
        q: "Die wichtigste Mahlzeit der Römer war das Abendessen (CENA). In welchen modernen Fremdsprachen hat sich dieses Wort fast unverändert erhalten?",
        a: "Spanisch und Italienisch",
        e: "Im Spanischen und Italienischen heißt Abendessen immer noch 'Cena'. Die Römer aßen dabei oft liegend auf dem Triclinium.",
        image: "bilder/tag07.jpg"
    },
    {
        day: 8,
        q: "In den römischen Thermen gab es einen Raum, der richtig heiß war (Dampfbad). Sein Name beginnt mit C und ist die Wurzel für 'Kalorien'. Wie hieß dieser Raum?",
        a: "CALDARIUM",
        e: "Das Caldarium (von calidus = heiß) war der Heißraum. Die Römer heizten ihn genial mit einer Fußbodenheizung (Hypokausten).",
        image: "bilder/tag08.jpg"
    },
    {
        day: 9,
        q: "Julius Cäsar sagte nach einem Blitzsieg: 'Veni, Vidi, ...'. Wie lautet das dritte Wort, das 'ich siegte' bedeutet?",
        a: "VICI",
        e: "Veni, Vidi, Vici = Ich kam, ich sah, ich siegte. Vici kommt vom Verb vincere.",
        image: "bilder/tag09.jpg"
    },
    {
        day: 10,
        q: "Ein Zenturio befehligte ursprünglich 100 Mann. Wie lautet das lateinische Wort für 100, das wir aus 'Prozent' kennen?",
        a: "CENTUM",
        e: "Centum bedeutet Einhundert. Prozent heißt wörtlich 'für Hundert'.",
        image: "bilder/tag10.jpg"
    },
    {
        day: 11,
        q: "Der Begriff Republik stammt von 'Res Publica'. Res = Sache, Publica = öffentlich. Was bedeutet der Begriff wörtlich übersetzt?",
        a: "Die öffentliche Sache",
        e: "Res Publica = Die Sache des Volkes. Die Römer sahen den Staat als Angelegenheit aller Bürger.",
        image: "bilder/tag11.jpg"
    },
    {
        day: 12,
        q: "Die Zeitangaben a.m. und p.m. kommen aus dem Lateinischen. Mittag heißt Meridies. Wofür stehen a.m. und p.m.?",
        a: "Ante Meridiem & Post Meridiem",
        e: "Ante = vor, Post = nach. Also: Vor dem Mittag und Nach dem Mittag.",
        image: "bilder/tag12.jpg"
    },
    {
        day: 13,
        q: "Das Kolosseum heißt so wegen einer riesigen Statue (Colossus). Welches deutsche Eigenschaftswort für 'riesig' leitet sich davon ab?",
        a: "KOLOSSAL",
        e: "Kolossal bedeutet heute noch gigantisch oder überwältigend.",
        image: "bilder/tag13.jpg"
    },
    {
        day: 14,
        q: "Das Obergewand der verheirateten Römerin hieß Stola. Die Frau selbst wurde als MATRONA bezeichnet. Von welchem Wort für 'Mutter' stammt das ab?",
        a: "MATER",
        e: "MATER bedeutet Mutter. Davon kommen Wörter wie maternal, Matriarchat oder im Englischen mother.",
        image: "bilder/tag14.jpg"
    },
    {
        day: 15,
        q: "Wie lautet das lateinische Wort für 'Weg' oder 'Straße', das wir heute benutzen, wenn wir sagen: 'Ich schicke das Paket ... Luftpost'?",
        a: "VIA",
        e: "Via bedeutet Weg. Berühmt ist die Via Appia. Heute nutzen wir es als Präposition 'via' (über).",
        image: "bilder/tag15.jpg"
    },
    {
        day: 16,
        q: "Wie hieß der berühmte römische Familienname (Stamm), zu dem Julius Caesar gehörte und der sich auf Venus zurückführte? (Beginnt mit J)",
        a: "JULIER (Gens Iulia)",
        e: "Caesar gehörte zu den Juliern. Auch der Monat Juli ist nach ihm benannt.",
        image: "bilder/tag16.jpg"
    },
    {
        day: 17,
        q: "Dezember kommt von Decem (10), ist aber der 12. Monat. Warum stimmen die Namen (September=7, Oktober=8...) nicht mit der Position überein?",
        a: "Das Jahr begann früher im März!",
        e: "Ursprünglich begann das römische Jahr im März. Januar und Februar wurden erst später 'vorne' angefügt, wodurch sich alles verschob.",
        image: "bilder/tag17.jpg"
    },
    {
        day: 18,
        q: "Cäsar sagte beim Überschreiten des Rubikon einen berühmten Satz mit einem Würfel. Wie lautet er?",
        a: "Alea iacta est",
        e: "Übersetzung: Der Würfel ist gefallen. Bedeutung: Es gibt kein Zurück mehr.",
        image: "bilder/tag18.jpg"
    },
    {
        day: 19,
        q: "Wie lautet das lateinische Wort für Wasser, das in Aquädukt steckt?",
        a: "AQUA",
        e: "Aqua = Wasser. Kennst du aus Aquarium, Aquarell oder Aquaman.",
        image: "bilder/tag19.jpg"
    },
    {
        day: 20,
        q: "Der Kriegsgott war Namensgeber für den dritten Monat. Wie heißt er?",
        a: "MARS",
        e: "Der Monat März (Martius) ist dem Mars geweiht. Er war ursprünglich der erste Monat des Jahres (Kriegsbeginn im Frühling).",
        image: "bilder/tag20.jpg"
    },
    {
        day: 21,
        q: "Wie begrüßten sich die Römer? (Wörtlich: Sei gesund!)",
        a: "SALVE",
        e: "Salve bedeutet 'Sei gegrüßt'. Wenn man mehrere Leute begrüßt: Salvete!",
        image: "bilder/tag21.jpg"
    },
    {
        day: 22,
        q: "Und wie verabschiedeten sie sich? (Wörtlich: Sei stark!)",
        a: "VALE",
        e: "Vale bedeutet 'Leb wohl'. Es kommt von valere (stark/gesund sein).",
        image: "bilder/tag22.jpg"
    },
    {
        day: 23,
        q: "Wie hieß die berühmte römische Silbermünze, die ursprünglich zehn Asse wert war?",
        a: "DENARIUS",
        e: "Der Denar. Das Wort lebt im spanischen 'Dinero' (Geld) weiter.",
        image: "bilder/tag23.jpg"
    },
    {
        day: 24,
        q: "Das lateinische Wort für Frieden. (3 Buchstaben)",
        a: "PAX",
        e: "Pax bedeutet Frieden (Pax Romana). Frohe Weihnachten: Felix Natalis!",
        image: "bilder/tag24.jpg"
    }
];

// Elemente referenzieren
const modal = document.getElementById('riddle-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalResult = document.getElementById('modal-result');
const modalAnswer = document.getElementById('modal-answer');
const modalExplanation = document.getElementById('modal-explanation');
const solutionBtn = document.getElementById('solution-btn');
const closeBtn = document.querySelector('.close-btn');

// Kalender initialisieren
function initializeCalendar() {
    const today = new Date();
    // TEST-MODUS: Um alle Türchen zu testen, setze currentDay auf 24.
    // Im echten Einsatz: (today.getMonth() === 11) ? today.getDate() : 0;
    const currentDay = 24; 

    for (let i = 1; i <= 24; i++) {
        const door = document.getElementById(`door-${i}`);
        if (!door) continue;

        if (i <= currentDay) {
            door.classList.add('active');
            // Klick-Event
            door.addEventListener('click', (e) => {
                e.preventDefault();
                openRiddle(i);
            });
        } else {
            // Falls Türchen noch gesperrt sein sollen (Styling ist im CSS unter .advent-door ohne .active)
        }
    }
}

// Rätsel öffnen
function openRiddle(day) {
    const riddle = latinRiddles.find(r => r.day === day);
    
    if(!riddle) {
        console.error("Kein Rätsel für Tag " + day + " gefunden.");
        return;
    }

    // Inhalte füllen
    // Wir nutzen römische Zahlen im Titel für den Style
    modalTitle.innerText = `DIES ${toRoman(day)}`;
    modalText.innerText = riddle.q;
    
    // BILD LADEN
    // Fallback, falls kein Bild im Objekt definiert ist
    if(riddle.image) {
        modalImage.src = riddle.image;
        modalImage.style.display = 'block';
    } else {
        modalImage.style.display = 'none';
    }
    
    modalAnswer.innerText = ">> " + riddle.a;
    modalExplanation.innerText = riddle.e; // oder innerHTML falls Formatierung im JSON
    
    // Reset State des Modals
    modalResult.style.display = 'none';
    solutionBtn.innerText = "LÖSUNG AUFDECKEN";
    solutionBtn.style.display = "inline-block";
    
    // Anzeigen
    modal.style.display = 'flex';
}

// Helper: Zahl zu Römisch (optional, für den Titel)
function toRoman(num) {
    const roman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let str = '';
    for (let i of Object.keys(roman)) {
        let q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }
    return str;
}

// Antwort zeigen
solutionBtn.addEventListener('click', () => {
    modalResult.style.display = 'block';
    solutionBtn.style.display = 'none';
});

// Schließen
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImage.src = ""; 
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modalImage.src = "";
    }
});

document.addEventListener('DOMContentLoaded', initializeCalendar);
