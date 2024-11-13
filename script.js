function calcularimc(){

    var altura = parseFloat(document.getElementById("altura").value)/100 ;
    var peso = parseFloat(document.getElementById("peso").value) ;
    var idade = parseInt(document.getElementById("idade").value);
    
    var imc= peso/altura **2 ;
    var fcm = 206.9-(0.67*idade);
    
    
    
    if(imc<18.5){
        window.alert("Abaixo do peso normal");
    
    }
    else if (imc<=24.9){
        window.alert('peso normal');
    }
    else if (imc<=29.9){
        window.alert('excesoo de peso')
    }
    else if (imc<=34.9){
        window.alert("obesidade classe 1")
    }
    else if (imc<=39.9){
        window.alert('obesidade clase 2')
    }
    else if (imc<= 40.0){
        window.alert('obesidade classe 3')
    }
    if(peso <= 0 && altura <=0)
        
        alert('o peso e altura devem ser maiores que 0');
      
   window.alert('o valor do seu fcm é ' + fcm );
    }
    
    
