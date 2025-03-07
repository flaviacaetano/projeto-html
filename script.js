// Função para rolar suavemente para as seções ao clicar nos links
document.querySelectorAll('a.button-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajuste para um pequeno espaçamento
                behavior: 'smooth'
            });
        }
    });
});

// Efeito de destaque nos links das cachoeiras
const links = document.querySelectorAll('.button-link');
links.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#FFD700'; // Altera a cor do fundo ao passar o mouse
        this.style.color = '#000'; // Muda a cor do texto
    });

    link.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Restaura o fundo original
        this.style.color = ''; // Restaura a cor do texto
    });
});
