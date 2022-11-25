function ObjCodigoAnalisado(token, codigo) {
    this.token = token;
    this.codigo = codigo;
};

function separadorCodigo() {
    let entrada = document.getElementById('codigo_fonte').value;
    entrada = entrada.split("\n").join(" ").split(" ");
    return entrada;
}

function validaIdentificador() {
    const codigoEmAnalise = separadorCodigo();
    const regex = [/^[a-z]\w*$/,,, /^[1-9]\w*$/];
    let identificador = [];
    let codigoAnalisado = [];

    // Identificador
    for (i = 0; i < codigoEmAnalise.length; i++) {
        identificador.push(regex[0].exec(codigoEmAnalise[i]));
        if (identificador[i] == null) {
            continue;
        }
        else {
            codigoAnalisado.push(new ObjCodigoAnalisado("Identificador", codigoEmAnalise[i]));
        }
    }
    
    identificador = [];
    // Atribuição // teste 1 a 9
    for (i = 0; i < codigoEmAnalise.length; i++) {
        identificador.push(regex[1].exec(codigoEmAnalise[i]));
        if (identificador[i] == null) {
            continue;
        }
        else {
            codigoAnalisado.push(new ObjCodigoAnalisado("Atribuição", codigoEmAnalise[i]));
        }
    }

    identificador = [];
    //Relacionais
    for (i = 0; i < codigoEmAnalise.length; i++) {
        identificador.push(regex[2].exec(codigoEmAnalise[i]));
        if (identificador[i] == null) {
            continue;
        }
        else {
            codigoAnalisado.push(new ObjCodigoAnalisado("Relacionais", codigoEmAnalise[i]));
        }
    }

    identificador = [];
    //Inteiro
    for (i = 0; i < codigoEmAnalise.length; i++) {
        identificador.push(regex[3].exec(codigoEmAnalise[i]));
        if (identificador[i] == null) {
            continue;
        }
        else {
            codigoAnalisado.push(new ObjCodigoAnalisado("Inteiro", codigoEmAnalise[i]));
        }
    }

    identificador = [];
    //Numeros reais
    for (i = 0; i < codigoEmAnalise.length; i++) {
        identificador.push(regex[4].exec(codigoEmAnalise[i]));
        if (identificador[i] == null) {
            continue;
        }
        else {
            codigoAnalisado.push(new ObjCodigoAnalisado("Numeros reais", codigoEmAnalise[i]));
        }
    }

    identificador = [];
    //String
    for (i = 0; i < codigoEmAnalise.length; i++) {
        identificador.push(regex[5].exec(codigoEmAnalise[i]));
        if (identificador[i] == null) {
            continue;
        }
        else {
            codigoAnalisado.push(new ObjCodigoAnalisado("String", codigoEmAnalise[i]));
        }
    }
}