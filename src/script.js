///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Calculadora(numero1, numero2, operador) {
  let num1 = parseInt(numero1);
  let num2 = parseInt(numero2);
  let result;
  switch (operador){
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result =  num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "e":
      let potencia = 0;
      for (let i = 0; i < num2; i++) {
        potencia += (num1*num1);
      }
      result = potencia;
      break;
    default:
      break;
  }

  if(result === undefined || result > 1000000){
    result = "ERRO";
  }

  return result;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}