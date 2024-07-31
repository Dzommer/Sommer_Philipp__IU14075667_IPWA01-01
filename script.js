document.addEventListener('DOMContentLoaded', function () {
    const abholungOption = document.getElementById('abholung');
    const uebergabeOption = document.getElementById('uebergabe');
    const abholDetails = document.getElementById('abholDetails');

    // Event Listener für die Abhol-Option
    abholungOption.addEventListener('change', function () {
        if (abholungOption.checked) {
            abholDetails.style.display = 'block';
        }
    });

    // Event Listener für die Übergabe-Option
    uebergabeOption.addEventListener('change', function () {
        if (uebergabeOption.checked) {
            abholDetails.style.display = 'none';
        }
    });

    // Event Listener für die Formularübermittlung
    document.getElementById('spendeForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Verhindert das Standard-Formular-Absenden

        // Erfassung der Formulardaten
        const anrede = document.getElementById('anrede').value;
        const vorname = document.getElementById('vorname').value;
        const name = document.getElementById('name').value;
        const strasse = document.getElementById('strasse').value;
        const hausnummer = document.getElementById('hausnummer').value;
        const plz = document.getElementById('plz').value;
        const ort = document.getElementById('ort').value;
        const email = document.getElementById('email').value;
        const krisengebiet = document.getElementById('krisengebiet').value;

        // Erfassung der Kleidungsangaben
        const kleidungRows = document.querySelectorAll('.kleidung-row');
        let kleidungDetails = '';
        kleidungRows.forEach(function(row, index) {
            const menge = row.querySelector('input[name="menge[]"]').value;
            const kleidung = row.querySelector('input[name="kleidung[]"]').value;
            kleidungDetails += `Kleidungsstück ${index + 1}: Menge: ${menge}, Art: ${kleidung}\n`;
        });

        // Erfassung der Übergabeoption
        let uebergabeArt;
        if (uebergabeOption.checked) {
            uebergabeArt = 'Übergabe an der Geschäftsstelle';
        } else if (abholungOption.checked) {
            const adresse = `${strasse} ${hausnummer}, ${plz} ${ort}`;
            uebergabeArt = `Abholung von: ${adresse}`;
        }

        // Zusammenstellung der Bestätigungsnachricht
        const confirmationMessage = `
            Bestätigen Sie die folgenden Spendedaten:\n
            Anrede: ${anrede}\n
            Vorname: ${vorname}\n
            Nachname: ${name}\n
            E-Mail: ${email}\n
            ${kleidungDetails}
            Krisengebiet: ${krisengebiet}\n
            ${uebergabeArt}\n
        `;

        // Anzeige des Bestätigungsdialoges
        if (confirm(confirmationMessage)) {
            alert('Ihre Spende wurde registriert. Vielen Dank für Ihre Unterstützung!');
            document.getElementById('spendeForm').submit(); // Formular abschicken
        }
    });
});


// Funktion zum Hinzufügen neuer Zeilen für die Kleidungsangabe
function addKleidungRow() {
    const kleidungTable = document.getElementById('kleidungTable');
    const newRow = document.createElement('div');
    newRow.className = 'kleidung-row';
    newRow.innerHTML = `
        <input type="number" name="menge[]" placeholder="Menge" required>
        <input type="text" name="kleidung[]" placeholder="Kleidung" required>
    `;
    kleidungTable.appendChild(newRow);
}
