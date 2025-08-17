document.getElementById("forgot-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();

    if (!email) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Aqui você faria a requisição para o backend enviar o link de redefinição
    // Exemplo de fetch:
    /*
    fetch("/api/send-reset-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => console.error(err));
    */

    alert(`Se o e-mail estiver cadastrado, um link de redefinição foi enviado para: ${email}`);
    document.getElementById("email").value = "";
});
