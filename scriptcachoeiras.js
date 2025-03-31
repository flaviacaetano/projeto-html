    const mainTitle = document.querySelector("section h1");
    mainTitle.style.cursor = "pointer";
    mainTitle.addEventListener("click", function() {
        mainTitle.textContent = "Descubra as Maravilhas Naturais!";
        mainTitle.style.color = "green";
    });

    const paragraph = document.querySelector("section p");
    paragraph.addEventListener("mouseover", function() {
        paragraph.style.backgroundColor = "#f0f8ff";
        paragraph.style.padding = "10px";
    });

    paragraph.addEventListener("mouseout", function() {
        paragraph.style.backgroundColor = "";
        paragraph.style.padding = "";
    });
});
