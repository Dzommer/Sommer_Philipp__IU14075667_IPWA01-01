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
