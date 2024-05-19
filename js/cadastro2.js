function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const birthdate = document.getElementById("birthdate").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const name = document.getElementById("name").value; // Adiciona o campo para o nome do usuário
    const message = document.getElementById("message");

    if (!email || !password || !birthdate || !city || !state || !name) {
        message.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Salva os detalhes adicionais do usuário no banco de dados
        return firebase.firestore().collection("usuarios").doc(userCredential.user.uid).set({
            email: email,
            name: name, // Salva o nome do usuário
            birthdate: birthdate,
            city: city,
            state: state
        });
    })
    .then(() => {
        // Redireciona para a página de login após o cadastro
        message.textContent = "Cadastro realizado com sucesso. Vá para o login.";
        setTimeout(() => {
            window.location.href = "index2.html";
        }, 3000); // Redireciona após 3 segundos
    })
    .catch((error) => {
        // Exibe o erro em um texto
        message.textContent = "Erro: " + error.message;
    });
}

function mostrarSenha() {
    var inputPass = document.getElementById('password');
    var btnShowPass = document.getElementById('btn-senha');

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text');
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        inputPass.setAttribute('type', 'password');
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}
