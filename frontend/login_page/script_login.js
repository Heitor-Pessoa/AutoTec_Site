// ===== GOOGLE LOGIN =====
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
    window.location.href = "/init_page/index_init.html";
}

// ===== APPLE LOGIN =====
document.getElementById("apple-login").addEventListener("click", () => {
    AppleID.auth.init({
        clientId: "SEU_CLIENT_ID_APPLE",
        scope: "name email",
        redirectURI: "SUA_URL_REDIRECIONAMENTO",
        usePopup: true
    });

    AppleID.auth.signIn().then(res => {
        console.log("Apple login:", res);
        // Redireciona
        window.location.href = "/init_page/index_init.html";
    }).catch(err => console.error(err));
});


/* Tá bugado aqui, não funciona o click do botão */
// ===== MICROSOFT LOGIN =====
document.getElementById("microsoft-login").addEventListener("click", () => {
    msalInstance.loginPopup({
        scopes: ["User.Read"]
    }).then(res => {
        console.log("Microsoft login:", res.account);
        // Redireciona
        window.location.href = "/init_page/index_init.html";
    }).catch(err => console.error(err));
});

document.getElementById("guest-login").addEventListener("click", () => {
    window.location.href = "/init_page/index_init.html";
});
