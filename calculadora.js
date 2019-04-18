function botao(num){
    var salvo =  document.calc.visor.value;
    document.calc.visor.value=salvo+num;
}

function reset(){
    var resultado =  document.calc.visor.value;
    document.calc.visor.value ='';
    
    

}

function calcule(){   
    var resultado =  document.calc.visor.value;
    var calculo = eval(resultado);
    document.calc.visor.value=calculo;
    
    }
    
    
    
   
    

    
