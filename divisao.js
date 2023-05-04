let numerador = prompt ("Numerador :")
let denominador = prompt ("Denominador :")

if (denominador && numerador == 0)

{
    alert ("Impossível dividir o por 0")
}

else
{
    let numero = Number (numerador)
    let divisor = Number (denominador)
    let resultado = numero / divisor

    alert (`O resultado de ${numero} divido por ${divisor} é: ${resultado}`);
}