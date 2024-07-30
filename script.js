document.addEventListener('DOMContentLoaded', function () {
    const abholungOption = document.getElementById('abholung');
    const uebergabeOption = document.getElementById('uebergabe');
    const abholDetails = document.getElementById('abholDetails');

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
});

