function separadorCodigo() {
    let entrada = document.getElementById('codigo_fonte').value;

    entrada = entrada.split(";").join("");
    entrada = entrada.split("\n").join(" ");
    entrada = entrada.split(" ");
    return entrada;
}

function validaIdentificador() {
    const codigo = separadorCodigo();
    const regex = /^[a-z]\w*$/;
    const identificador = regex.exec(codigo);
    if (!identificador)
        window.alert(codigo + " Não é IDENT");
    else
        window.alert("IDENT: " + codigo);
}