let morango = 0
let banana = 0
function pergunta1(){
morango++
atual = "O voto atual foi em morango."
texto = morango + " pessoas votaram em morango e" + "</br>" +banana + " pessoas votaram em banana" + "</br>" + "votos totais: " + (morango + banana) 
document.getElementById("texto").innerHTML=texto
document.getElementById("atual").innerHTML=atual
}
function pergunta2() { 
banana++
atual = "O voto atual foi em banana."
texto =  morango + " pessoas votaram em morango e" +  "</br>" + banana + " pessoas votaram em banana" + "</br>" + "votos totais: " + (morango + banana)
document.getElementById("texto").innerHTML=texto
document.getElementById("atual").innerHTML=atual
}