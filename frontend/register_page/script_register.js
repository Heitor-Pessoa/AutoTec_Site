document.getElementById("google-login").addEventListener("click", () => {
    google.accounts.id.initialize({
        client_id: "SEU_CLIENT_ID_GOOGLE",
        callback: handleGoogleLogin
    });
    google.accounts.id.prompt(); // ou usar google.accounts.id.renderButton() em outro lugar
});

function handleGoogleLogin(response) {
    const data = jwt_decode(response.credential);
    console.log("Google login:", data);
    alert(`Bem-vindo, ${data.name}`);
    window.location.href = "/marketplace_page/index_marketplace.html";
}
