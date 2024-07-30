document.addEventListener('DOMContentLoaded', function () {
    const abholungOption = document.getElementById('abholung');
    const uebergabeOption = document.getElementById('uebergabe');
    const abholDetails = document.getElementById('abholDetails');
    const spendeForm = document.getElementById('spendeForm');

    abholungOption.addEventListener('change', function () {
        if (abholungOption.checked) {
            abholDetails.style.display = 'block';
        }
    });

    uebergabeOption.addEventListener('change', function () {
        if (uebergabeOption.checked) {
            abholDetails.style.display = 'none';
        }
    });

    spendeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Verhindert das Standardverhalten des Formulars (Seiten-Reload)
        alert("Deine Spende wurde registriert. Vielen Dank für deine Unterstützung!");
        spendeForm.reset(); // Setzt das Formular zurück
        abholDetails.style.display = 'none'; // Versteckt das Adressfeld nach dem Zurücksetzen
    });
});
