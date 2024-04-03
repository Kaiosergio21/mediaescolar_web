
const nome  = document.querySelector('#nome');
const unidade_1  = document.querySelector('#unidade_1');
const unidade_2 = document.querySelector('#unidade_2');
const unidade_3 = document.querySelector('#unidade_3');
const calcular = document.querySelector('#calcular');
const result = document.querySelector('#result');
const estado = document.querySelector('#estado');

calcular.addEventListener('click',() =>{

    const name = nome.value;
    const valor_1 = Number(unidade_1.value);
    const valor_2 = Number(unidade_2.value);
    const valor_3 = Number(unidade_3.value);
    let estate;

    const resultado = (valor_1+valor_2+valor_3)/3;

  

result.textContent = `${nome.value} sua média é ${resultado.toFixed(1)}`;



if(resultado >= 7){
          
    estate = 'aprovado';

} else if(resultado < 7 && resultado >= 5){

    estate = 'recuperação';
}else{

    
    estate = 'reprovado';
}    

estado.textContent = estate;
 
});







   




