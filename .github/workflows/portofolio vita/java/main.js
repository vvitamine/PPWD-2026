const typingText = document.getElementById('typing-text');

if (typingText) {
    const words = ["Mahasiswa semester 3", "yang berkuliah di Universitas Tanjungpura", 
        "Mahasiswa Sistem Informasi"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        let isValid = true;
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        if (name === "") {
            nameError.textContent = "Nama tidak boleh kosong.";
            isValid = false;
        }

        if (email === "") {
            emailError.textContent = "Email tidak boleh kosong.";
            isValid = false;
        } else if (!email.includes('@') || !email.includes('.')) {
            emailError.textContent = "Format email tidak valid.";
            isValid = false;
        }

        if (message === "") {
            messageError.textContent = "Pesan tidak boleh kosong.";
            isValid = false;
        }

        if (isValid) {
            alert('Terima kasih, ' + name + '! Pesan Anda telah berhasil dikirim.');
            contactForm.reset(); 
        }
    });
}