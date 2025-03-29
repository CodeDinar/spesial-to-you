// Array untuk menyimpan gambar dan pesan
const messages = [
    {
        image: "assets/1.jpg",
        text: "Selamat Idul Fitri, Sayang! Semoga kamu semakin cantik dan aku semakin cinta."
    },
    {
        image: "assets/2.jpg",
        text: "Hari ini kita rayakan kemenangan, tapi aku tetap merasa jadi pemenang karena punya kamu."
    },
    {
        image: "assets/3.jpg",
        text: "Idul Fitri memang membawa kebahagiaan, tapi senyumanmu itu yang bikin hati aku lebih bahagia."
    },
    {
        image: "assets/4.jpg",
        text: "Semoga puasa kita diterima, dan aku diterima di hatimu selamanya."
    },
    {
        image: "assets/5.jpg",
        text: "Hari ini aku maafkan semua kesalahanmu, kecuali kalau kamu tidak balas pesan aku... itu sulit dimaafkan."
    },
    {
        image: "assets/6.jpg",
        text: "Semoga kita selalu diberkahi, dan semoga aku bisa terus jadi alasan kamu tersenyum."
    },
    {
        image: "assets/7.jpg",
        text: "Bukan hanya puasa yang selesai, tapi rasa kangen aku yang tak terhingga juga berakhir hari ini!"
    },
    {
        image: "assets/8.jpg",
        text: "Idul Fitri datang membawa kedamaian, tapi kamu yang selalu bikin hati aku bergejolak. Hehe."
    },
    {
        image: "assets/9.jpg",
        text: "Semoga lebaran ini membawa kebahagiaan untuk kita berdua, dan aku harap kebahagiaan itu bisa aku dapatkan terus di sampingmu."
    },
    {
        image: "assets/10.jpg",
        text: "Ok sekarang kirim ya pap OOTD lebarang kamu ke WA seng"
    }
];

// Mendapatkan elemen-elemen penting
const startButton = document.getElementById('startPopupButton');
const popupContainer = document.getElementById('popup-container');
const popupImage = document.getElementById('popup-image');
const popupText = document.getElementById('popup-text');
const nextButton = document.getElementById('next-button');

let currentMessageIndex = 0;

// Fungsi untuk menampilkan popup pertama
function showPopup() {
    popupContainer.style.display = "flex";
    showMessage(currentMessageIndex);
}

// Fungsi untuk menampilkan gambar dan pesan
function showMessage(index) {
    popupImage.style.backgroundImage = `url(${messages[index].image})`;
    popupText.innerHTML = messages[index].text;
}

// Fungsi untuk beralih ke pesan berikutnya
nextButton.addEventListener('click', function() {
    currentMessageIndex++;
    if (currentMessageIndex >= messages.length) {
        currentMessageIndex = 0; // Reset ke pesan pertama jika sudah selesai
    }
    showMessage(currentMessageIndex);
});

// Event listener untuk memulai popup
startButton.addEventListener('click', function() {
    showPopup();
    setTimeout(() => {
        const music = document.getElementById('music');
        music.play(); // Memulai musik latar setelah kejutan
    }, 1000);
});
