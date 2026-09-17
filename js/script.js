// ================= MENU MOBILE =================

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// ================= TUTUP MENU =================

const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ================= TAHUN OTOMATIS =================

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();


// ================= FORM KONTAK =================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name")
                .value
                .trim();


        const email =
            document.getElementById("email")
                .value
                .trim();


        const message =
            document.getElementById("message")
                .value
                .trim();


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            alert("Harap isi semua kolom!");

            return;
        }


        alert(
            "Terima kasih, " +
            name +
            "! Pesan berhasil dikirim."
        );


        contactForm.reset();

    }
);