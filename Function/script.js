
const altura = parseFloat(prompt("Qual sua altura ?"));
const peso = parseFloat(prompt("Qual sua peso ?"));



function calculaIMC (altura, peso){
    
    const calculaIMC = peso / (altura * altura);
    return calculaIMC;
}

function formatarDecimaEmImc(imc){
    const imcFormatado = imc.toFixed(2);
    return imcFormatado;
}


function classificaoImc (imcFormatado){

    let classificaoImc;

    if(imcFormatado < 18.5){
        classificaoImc = "Abaixo do peso";
    }
    else if(imcFormatado < 25){
        classificaoImc = "Peso normal";
    }
    else if(imcFormatado < 30){
        classificaoImc = "Acima do peso";
    }
    else if(imcFormatado < 35){
        classificaoImc = "Obesidade Grau I";
    }
    else if(imcFormatado < 41){
        classificaoImc = "Obesidade Grau II";
    }
    else{
        classificaoImc = "Obesidade Grau III"
    }

   return classificaoImc;
}


const imc = calculaIMC(altura, peso);
const imcFormatado = formatarDecimaEmImc(imc);
const resultado = classificaoImc(imcFormatado);

alert(resultado);
