document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('image');
    const changeColorBtn = document.getElementById('changeColorBtn');

    changeColorBtn.addEventListener('click', function () {
        // Generate a random color (hexadecimal format)
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        // Apply the random color as a filter to the image
        image.style.filter = `sepia(100%) hue-rotate(180deg) saturate(200%) brightness(0.6) contrast(1.2) drop-shadow(3px 3px 3px ${randomColor})`;
    });
});
