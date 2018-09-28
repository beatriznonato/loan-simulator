function validar(entrada, limiteInferior, limiteSuperior){
    if(!limiteInferior){
        limiteInferior = -Infinity;
    }
    
    if(!limiteSuperior){
        limiteSuperior = Infinity;
    }
    
    if(entrada && !isNaN(Number(entrada)) && Number(entrada) >= limiteInferior && Number(entrada) <= limiteSuperior){
        return true;
    }
    return false;
}

let idade = Number(prompt("Informe sua idade:"));
let renda = Number(prompt("Informe sua renda:"));
let emprestimo = Number(prompt("Informe valor do empréstimo:"));

if((!validar(idade, 21, 55)) || (!validar(renda, 1000)) || (!validar(emprestimo, 500, renda * 15))){
    console.log(validar(emprestimo, renda * 15));
    console.log("Recusado!");
}
else{
    console.log("Aprovado!");
    let parcelas = Number(prompt("Informe número de parcelas:"));
    let juros = 8.5 / 100;
    let total = emprestimo * ((1 + juros) ** parcelas); // fórmula juros composto: M = C (1+ i)**t 
    if((!validar(parcelas,3))){
        console.log("O número de parcelas deve ser maior que 3.");
    }
    else if((!validar(parcelas,null,24))){
        console.log("O número de parcelas deve ser menor que 24.");
    }
    else{
        console.log(`O emprestimo no valor de R$${emprestimo}, dividido em ${parcelas} vezes com juros, será de R$${(total/parcelas).toFixed(2)} ao mês!`);
    }
}