# 🏛️ Dies Adventus - Latein Adventskalender

> Salvete discipuli! Vergiss Schokolade. Jeden Tag eine Reise in die Antike, von Göttern über Grammatik bis zum römischen Alltag.

## 📖 Über das Projekt

Dieses Projekt verbindet klassische Bildung mit moderner Web-Technologie. Es ist ein digitaler **Latein-Adventskalender**, der das alte Rom optisch und inhaltlich zum Leben erweckt.

Statt trockener Vokabellisten öffnen die Nutzer jeden Tag ein digitales Türchen (römische Zahlen I-XXIV). Sie erhalten ein Rätsel zu römischer Geschichte, Mythologie oder Etymologie.

Das Ziel: Spielerisch lernen, woher unsere heutigen Wörter kommen (z.B. "Video", "Bus", "Datum") und wie die Römer lebten.

### ✨ Features

* **Classic Roman UI:** Ein edles Design in Dunkelblau, Gold und Kaminrot (`#B22222`), inspiriert von römischen Inschriften und klassischer Ästhetik.
* **24 Römische Rätsel:** Jeden Tag eine neue Frage – von Jupiter bis Cäsar.
* **Wissen & Etymologie:** Jede Lösung enthält eine Erklärung ("Latein-Wissen des Tages"), die Brücken zu modernen Sprachen (Deutsch, Englisch, Romanisch) schlägt.
* **Single Page Application (SPA):** Dank modernem JavaScript laden alle Inhalte dynamisch in einem Overlay (Modal), ohne dass die Seite neu geladen werden muss.
* **Responsive Design:** Optimiert für Desktop, Tablet und Smartphone.

## 🛠️ Technologie-Stack

Das Projekt ist bewusst "lean" gehalten ("KISS-Prinzip") und ist eine reine **Static Site**.

* **HTML5:** Semantische Struktur.
* **CSS3:** Flexbox & Grid für das Layout. Spezielles Styling für den "Locked"- und "Active"-Status der Türchen.
* **Vanilla JavaScript (ES6+):** Keine Frameworks. Die Daten (Rätsel) liegen als JSON-Objekt im Code vor und werden dynamisch ins DOM gerendert.

## 🚀 Installation & Nutzung

Da es sich um eine statische Seite handelt, ist keine komplexe Installation (wie Node.js oder eine Datenbank) notwendig.

1.  **Repository klonen:**
    ```bash
    git clone [https://github.com/DEIN-USERNAME/DEIN-REPO-NAME.git](https://github.com/DEIN-USERNAME/DEIN-REPO-NAME.git)
    ```
2.  **Öffnen:**
    Öffne einfach die `index.html` Datei in einem modernen Webbrowser.

*Tipp:* Bilder werden am zuverlässigsten geladen, wenn du einen lokalen Server nutzt (z.B. "Live Server" in VS Code).

## ⚙️ Konfiguration & Test-Modus

Die Logik, welche Türchen geöffnet werden dürfen, basiert auf dem aktuellen Datum des Nutzers.

**Testen (außerhalb vom Dezember):**

Um alle Türchen freizuschalten (z.B. zum Testen des Designs), kannst du den "Zeitmaschinen-Modus" im Code aktivieren. Suche in der `script.js` nach der Funktion `initializeCalendar`:

```javascript
// IN script.js

function initializeCalendar() {
    const today = new Date();
    
    // PRODUKTIV-MODUS