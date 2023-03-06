"use strict"

function generaNumeri() {

    var numeri = [];
    while (numeri.length < 5) {
      var numero = Math.floor(Math.random() * 100) + 1;
      if (numeri.indexOf(numero) === -1) numeri.push(numero);
    }
  

    var numeriDiv = document.getElementById("numeri");
    numeriDiv.innerHTML = "";
    for (var i = 0; i < numeri.length; i++) {
      numeriDiv.innerHTML += "<span>" + numeri[i] + " </span>";
    }
  

    setTimeout(function() {
      numeriDiv.innerHTML = "";
    }, 3000);
  

    setTimeout(function() {

      var numeriUtente = [];
      for (var i = 0; i < 5; i++) {
        var numeroInserito = prompt("Inserisci uno dei numeri che hai visto:");
        numeriUtente.push(parseInt(numeroInserito));
      }
  
      var numeriIndovinati = [];
      for (var i = 0; i < numeriUtente.length; i++) {
        if (numeri.includes(numeriUtente[i])) {
          numeriIndovinati.push(numeriUtente[i]);
        }
      }

      alert("Hai indovinato " + numeriIndovinati.length + " numeri: " + numeriIndovinati.join(", "));
    }, 3000);
  }