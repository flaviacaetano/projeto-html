document.addEventListener("DOMContentLoaded", function() {
    alert("Bem-vindo ao Três Marias, MG!");
});

function changeTitle() {
    const header = document.querySelector("header h1");
    header.textContent = "Explorando as Maravilhas de Três Marias!";
    header.style.color = "blue";
}

const images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("mouseover", function() {
        image.style.border = "5px solid blue";
    });

    image.addEventListener("mouseout", function() {
        image.style.border = "none";
    });
});
