document.getElementById("contato-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio para validação

    // Campos e mensagens de erro
    const inputNome = document.getElementById("nome");
    const mensagemDeErroNome = document.getElementById("nome-error");
    const inputEmail = document.getElementById("email");
    const mensagemDeErroEmail = document.getElementById("email-error");

    // Validação do Nome: deve ter pelo menos 3 caracteres
    if (inputNome.value.trim().length < 3) {
        inputNome.classList.add("error");
        mensagemDeErroNome.classList.add("visible");
    } else {
        inputNome.classList.remove("error");
        mensagemDeErroNome.classList.remove("visible");
    }

    // Validação do E-mail: regex para e-mail válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail.value)) {
        inputEmail.classList.add("error");
        mensagemDeErroEmail.classList.add("visible");
    } else {
        inputEmail.classList.remove("error");
        mensagemDeErroEmail.classList.remove("visible");
    }

    // Se tudo estiver certo, enviar o formulário
    if (!inputNome.classList.contains("error") && !inputEmail.classList.contains("error")) {
        alert("Formulário enviado com sucesso!");
        event.target.submit();
    }
});
