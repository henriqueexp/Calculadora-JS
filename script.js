const display = document.getElementById("display");

function adicionar(valor){
    display.value += valor;
}

function limpar(){
    display.value = "";
    display.style.color = "black";
}

function calcular(){

    try{

        const expressao = display.value;

        let resultado = eval(expressao);

        display.value = expressao + " = " + resultado;

        if(resultado > 0){
            display.style.color = "green";
        }
        else if(resultado < 0){
            display.style.color = "red";
        }
        else{
            display.style.color = "black";
        }

    }
    catch{
        display.value = "Erro";
        display.style.color = "red";
    }
}