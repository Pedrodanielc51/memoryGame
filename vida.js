// inicializacion de variable
let tarjetasdestapadas=0;
let tarjeta1= null;
let tarjeta2= null;
let primerResultado =null;
let segundoResultado =null;
let movimientos = 0;
let aciertos=0;
let temporizador=false;
let tiempo = 30;
let tiempoInicial=30;
let tiempoRegresivo=null;


//apuntando a documento HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrartiempo = document.getElementById('t-restante');

//generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=> {return Math.random()-0.5} );
console.log( numeros);

//funciones
function contarTiempo(){
   tiempoRegresivo = setInterval(()=>{
   tiempo--;
   mostrartiempo.innerHTML = `tiempo : ${ tiempo} segundos`;
   if(tiempo == 0){
clearInterval(tiempoRegresivo);
bloquearTarjetas();
   }
    },1000);
}
function bloquearTarjetas()
{
    for (let i = 0; i <= 15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML=numeros[i];
        tarjetaBloqueada.disabled=true;
    }
   
}

// funcion principal
function destapar(id){

    if(temporizador == false){
    contarTiempo();
    temporizador = true;
    }
    tarjetasdestapadas++;
    console.log(tarjetasdestapadas);

 if(tarjetasdestapadas ==1){

 //Mostrar primer numero
tarjeta1 = document.getElementById(id);
primerResultado = numeros[id];
tarjeta1.innerHTML = primerResultado;

//Deshabilir primer boton
tarjeta1.disabled = true;
 } else if(tarjetasdestapadas==2 ){

    //Mostrar segundo numero
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros [id];
    tarjeta2.innerHTML = segundoResultado;

    // Deshabilitad segundo boton
    tarjeta2.disabled= true;
    
    // Incrementar movimientos
    movimientos++;
    mostrarMovimientos.innerHTML = `movimientos: ${ movimientos}`;

    if( primerResultado == segundoResultado){

        // Encerrar contador tarjetas destapadas
        tarjetasdestapadas = 0;

        // Aumentar aciertos
        aciertos++;
        mostrarAciertos.innerHTML = `aciertos: ${aciertos}`;

        if(aciertos == 8){ 

            clearInterval (tiempoRegresivo);
         
 mostrarAciertos.innerHTML=`aciertos: ${aciertos} 🏁`;
 mostrartiempo.innerHTML = `genial!  solo demorastes ${ tiempoInicial-tiempo}segundos`
 mostrarMovimientos.innerHTML=`movimientos: ${ movimientos}😎`
        }
    }else{
        // Mostrar momentaneamente los valores y volver a tapar
        setTimeout(()=>{
            tarjeta1.innerHTML = ' ';
            tarjeta2.innerHTML = ' ';
            tarjeta1.disabled = false;
            tarjeta2.disabled = false;
            tarjetasdestapadas = 0;
        },800)
    }
    }
}

