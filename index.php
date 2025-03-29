<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selamat Idul Fitri, Sayang!</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Assalamualaikum, Sayang!</h1>
        <button id="startPopupButton">Mulai!</button>
    </div>

    <!-- Popup Area -->
    <div id="popup-container" class="popup-container">
        <div class="popup-content">
            <div id="popup-image" class="popup-image"></div>
            <p id="popup-text" class="popup-text"></p>
            <button id="next-button">Next</button>
        </div>
    </div>
    <audio id="music" loop autoplay>
        <source src="assets/music1.mp3" type="audio/mp3">
        Browser Anda tidak mendukung audio.
    </audio>
</body>
</html>
