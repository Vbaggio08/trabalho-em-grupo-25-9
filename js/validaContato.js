function validaContato() {
    let cxNome = document.getElementById("nome");
    let cxEmail = document.getElementById("email");

    const nomeRegex = /^[A-Za-zÀ-ÿ]+([ '][A-Za-zÀ-ÿ]+)*$/;
    const emailRegex = /([a-z0-9\.\-\_\*\+\.\,\!\#]{2,})@([a-z0-9]{2,})(\.[a-z]{2,})(\.[a-z]{2,})?/;

    if (!nomeRegex.test(cxNome.value)) {
        alert("Preencha com um nome válido");
        cxNome.focus();
        return false;
    } else if (!emailRegex.test(cxEmail.value)) {
        alert("Digite um e-mail válido! formato(xyzxyz@gmail.com ou hotmail ou .com.br ou até mesmo com caracteres)");
        cxEmail.focus();
        return false;
    } else {
        alert("Formulário enviado com sucesso!");
        return true;
    }
}
