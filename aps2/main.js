function criarTabela(obj) {
    const div = document.getElementById('tabela')

    const codigoAnalisadoTabela = obj

    const tableBody = codigoAnalisadoTabela.map((codigoAnalisadoTabela) => {
        return `<tr>
    <td>${codigoAnalisadoTabela.token}</td>
    <td>${codigoAnalisadoTabela.codigo}</td>
  </tr>`
    }).join('')

    const table = `<table  class="table">
  <tr>
    <td>Token</td>
    <td>Codigo</td>
  </tr>
  ${tableBody}
</table>`;

    div.insertAdjacentHTML('beforeend', table)
}

function ObjCodigoAnalisado(token, codigo) {
    this.token = token;
    this.codigo = codigo;
};

function separadorCodigo() {
    let entrada = document.getElementById('codigo_fonte').value;
    // Como o HTML coloca um \n sempre que quebro linha, usei ele no lugar do ;
    // Poderia substituir o \n por ; mas só daria mais trabalho, pq eu teria que fazer mais um split
    // Então consideirei o \n como ;.
    entrada = entrada.split("\n").join(" ").split(" ");
    return entrada;
}

function validaIdentificador() {
    let identificador = [];
    let codigoAnalisado = [];
    const codigoEmAnalise = separadorCodigo();
    const objRegex = [
        {
            token: "Identificador",
            regex: /^[a-z]\w*$/
        },
        {
            token: "Numero Inteiro",
            regex: /^([0-9]*(e-?[0-9]*)?)?$/
        },
        {
            token: "Numero Real",
            regex: /([1-9][0-9]*[eE][1-9][0-9]*|(([1-9][0-9]*\,)|(\,[0-9]+))([0-9]*)?([eE][\-\+]?[1-9][0-9]*)?)/m
        },
        {
            token: "Atribuição",
            regex: /^=$/
        },
        {
            token: "Relacionais",
            regex: /^==$|^!=$|^>$|^<$/
        },
        {
            token: "String",
            regex: /"(“ [^ ”] *” | '[^'] * '| [^' ”>])*"/
        }
    ];

    // Identificador
    for (i = 0; i < codigoEmAnalise.length; i++) {
        identificador.push(objRegex[0].regex.exec(codigoEmAnalise[i]));
        if (identificador[i] == null) {
            continue;
        }
        else {
            codigoAnalisado.push(new ObjCodigoAnalisado(objRegex[0].token, codigoEmAnalise[i]));
        }

    }

    // Numeros Inteiros
    identificador = []
    for (i = 0; i < codigoEmAnalise.length; i++) {
        identificador.push(objRegex[1].regex.exec(codigoEmAnalise[i]));
        if (identificador[i] == null) {
            continue;
        }
        else {
            codigoAnalisado.push(new ObjCodigoAnalisado(objRegex[1].token, codigoEmAnalise[i]));
        }
    }

    // Numero real
    identificador = []
    for (i = 0; i < codigoEmAnalise.length; i++) {
        identificador.push(objRegex[2].regex.exec(codigoEmAnalise[i]));
        if (identificador[i] == null) {
            continue;
        }
        else {
            codigoAnalisado.push(new ObjCodigoAnalisado(objRegex[2].token, codigoEmAnalise[i]));
        }
    }

    // Atribuição
    identificador = []
    for (i = 0; i < codigoEmAnalise.length; i++) {
        identificador.push(objRegex[3].regex.exec(codigoEmAnalise[i]));
        if (identificador[i] == null) {
            continue;
        }
        else {
            codigoAnalisado.push(new ObjCodigoAnalisado(objRegex[3].token, codigoEmAnalise[i]));
        }
    }

    // Relacionais
    identificador = []
    for (i = 0; i < codigoEmAnalise.length; i++) {
        identificador.push(objRegex[4].regex.exec(codigoEmAnalise[i]));
        if (identificador[i] == null) {
            continue;
        }
        else {
            codigoAnalisado.push(new ObjCodigoAnalisado(objRegex[4].token, codigoEmAnalise[i]));
        }
    }

    // String
    identificador = []
    for (i = 0; i < codigoEmAnalise.length; i++) {
        identificador.push(objRegex[5].regex.exec(codigoEmAnalise[i]));
        if (identificador[i] == null) {
            continue;
        }
        else {
            codigoAnalisado.push(new ObjCodigoAnalisado(objRegex[5].token, codigoEmAnalise[i]));
        }
    }

    criarTabela(codigoAnalisado);
}