document.getElementById('confessButton').addEventListener('click', () => {
    const phoneNumber = document.getElementById('phoneNumber').value;

    if (!phoneNumber) {
        alert('Sila masukkan nombor telefon!');
        return;
    }

    const message = encodeURIComponent("I love you"); // Encode mesej untuk URL
    const whatsappUrl = https://wa.me/${phoneNumber}?text=${message};

    // Redirect ke WhatsApp
    window.open(whatsappUrl, '_blank');
});