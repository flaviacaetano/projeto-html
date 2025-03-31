const locations = document.querySelectorAll(".location");
    locations.forEach(location => {
        location.addEventListener("click", function() {
            alert(`Você está explorando: ${location.querySelector("h3").textContent}`);
        });
    });

    const images = document.querySelectorAll("img");
    images.forEach(image => {
        image.addEventListener("mouseover", function() {
            image.style.transform = "scale(1.05)";
            image.style.transition = "transform 0.3s";
        });
        image.addEventListener("mouseout", function() {
            image.style.transform = "scale(1)";
        });