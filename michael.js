
//Função colocar a data e hora
let valores = [];

function data() {
    var agora = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
    document.getElementById("idData").value = agora;
    document.getElementById('idMatricula').focus();
}
//Função aceitar apenas Números em Matrícula
function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    if (charCode != 8 && charCode != 9) {
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
};
function inLista(c, l) {
    if (l.indexOf(String(c)) != -1) { return true; }
    else { return false; }
};
function verificarMat() {
    var Matricula = document.getElementById('idMatricula');
    if (Matricula.value.toString() == '') {
        Matricula.placeholder = "Obrigatório";
        Matricula.focus();
    }
    else if (Matricula.value.length < 7) {
        document.getElementById("msg").textContent += " | Matricula inválida";
        Matricula.focus();
    }
    else {
        document.getElementById('idCarteiro').textContent = 'Carteiro: ' + Matricula.value.toString();
        Matricula.style.display = "none";
        document.getElementById("msg").textContent = "";
    };
};
function add() {
    let codigo = document.querySelector('input#idCod');
    let Matricula = document.querySelector('input#idMatricula');
    if (Matricula.value.toString() == '' || Matricula.value.length < 7 || Matricula.value.toString().indexOf(" ") >= 1) {
        document.getElementById("msg").textContent = "Acerte a Matricula";
        Matricula.focus();
    }
    else if (codigo.value.toString() == '' || codigo.value.length <= 12 || codigo.value.toString().indexOf(" ") >= 1) {
        document.getElementById("msg").textContent = "Código inválido";
        codigo.focus();
    }
    else {
        let ar = document.querySelector('input#idAR');
        let mp = document.querySelector('input#idMP');
        let dd = document.querySelector('input#idDD');
        let od = document.querySelector('input#idOD');
        let dest = document.querySelector('input#idDest');
        let end = document.querySelector('input#idEnd');
        let lista = document.querySelector('ol#idPrint').innerHTML;

        if (!inLista(codigo.value.toUpperCase(), valores)) {
            valores.push(String(codigo.value.toUpperCase()));

            if (ar.checked.toString() != 'false') { var xar = "AR" } else { xar = '' }
            if (mp.checked.toString() != 'false') { var xmp = "MP" } else { xmp = '' }
            if (dd.checked.toString() != 'false') { var xdd = "DD" } else { xdd = '' }
            if (od.checked.toString() != 'false') { var xod = "OD" } else { xod = '' }
            if (dest.value.toString().toUpperCase() == '') { dest.value = 'Destinatário: ' }
            if (end.value.toString().toUpperCase() == '') { end.value = 'Endereço:__________________________________________' }

            lista = lista + '<li id="' + codigo.value.toString().substring(3, 12) + '">';
            lista += '<span style="margin-right: 10px; font-size: 280%; font-family: ';
            lista += 'c39hrp24dhtt, sans-serif; text-align: left; page-break-before:always;">';
            lista += codigo.value + '</span>' + xar + '   ' + xmp + '   ' + xdd + '   ' + xod + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
            lista += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
            lista += '<div class="noPrint" style="width: 250px; display: inline-block; vertical-align: middle; color: wheat;">'
            lista += '[click ao lado para EXCLUIR -→]</div><br>' + dest.value + '<br>';
            lista += end.value + '<br>Ident:___________________';
            lista += 'Ass.:________________________________________________<hr></li>';

            document.getElementById('idPrint').innerHTML = lista;

            ar.checked = false;
            mp.checked = false;
            dd.checked = false;
            od.checked = false;
            dest.value = '';
            end.value = '';
            codigo.value = '';
            codigo.focus();
            document.getElementById('msg').textContent = '';
        }
        else {
            document.getElementById('msg').textContent = 'Objeto já Cadastrado ou inválido';
            codigo.focus();
        };
    };
};
function imprimir() {
    var conteudo = document.getElementById('idimp').innerHTML
    tela_impressao = window.open('about:blank');

    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
};

var el = document.getElementById('idPrint');
if (el != null) {
    el.addEventListener('click', function (e) {
        document.getElementById(e.target.id).remove();
    });
} else {codigo = focus()};


var meuIframe= document.getElementById("meuIframe");
var conteudoIframe= meuIframe.contentDocument || meuIframe.contentWindow.document;

var codigo = conteudoIframe.resultado.textContent;