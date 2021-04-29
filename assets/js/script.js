function gerar(length) {
    var resultado = '';
    var operadores = '+-*/';
    var operadoresLength = operadores.length;
    for ( var i = 0; i < length; i++ ) {
        resultado += operadores.charAt(Math.floor(Math.random() * operadoresLength));
    }
    return resultado;
 }
 
 console.log(geradorNumeros());

 function geradorNumeros(){
     const num = Math.floor(Math.random() * 4);

     if( num == 0 ) return '+';
     if( num == 1 ) return '-';
     if( num == 2 ) return '*';
     if( num == 3 ) return '/'
 }


 