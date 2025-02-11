
let btn = document.getElementById('operacion');
let op = document.getElementById('opciones');
let prf = document.getElementById('prf');
let suma = document.getElementById('suma');
let resta = document.getElementById('resta');
let multi = document.getElementById('multi');
let divi = document.getElementById('divi');
let reiniciar = document.getElementById('reiniciar');
let btnprincipal = document.getElementById('btn0');
let contenidosecond = document.getElementById('content');
let contenidofirsrt = document.getElementById('content0');


btnprincipal.addEventListener('click', ()=> {
    contenidosecond.style.display = 'block';
    contenidofirsrt.style.display = 'none';

})


btn.addEventListener('click', ()=> {
    op.style.display = 'flex';        
    });


    //funcion para calcular las operaciones:
    function calcular(operador) {
        let num1 = parseFloat(document.getElementById('num1').value)
        let num2 = parseFloat(document.getElementById('num2').value)

        if(isNaN(num1) || isNaN(num2)){
            prf.textContent = 'Ingrese numeros valido';
            return;
        }
        let resultado;
        switch(operador) {
            case "+":
            resultado = num1 + num2;
            break;
            case "-":
            resultado = num1 - num2;
            break;
            case "*":
                resultado = num1 * num2;
                break;
                case "/":
                    resultado = num2 !== 0 ? (num1 / num2).toFixed(2) : "No se puede dividir por 0";
                    break;
        }

        prf.textContent = `tu resultado es: ${resultado}`;
        op.style.display = 'none';
        reiniciar.style.display = 'block';
    }

    //asignar eventos  a las celdas de la tabla 
    suma.addEventListener('click', ()=> calcular("+"));
    resta.addEventListener('click', ()=> calcular("-"));
    multi.addEventListener('click', ()=> calcular("*"));
    divi.addEventListener('click', ()=> calcular("/"));

    //funcion para reiniciar los valores
    reiniciar.addEventListener('click',()=> {
        document.getElementById('num1').value="";
        document.getElementById('num2').value="";
        prf.textContent = "";
        reiniciar.style.display = 'none';
    });

