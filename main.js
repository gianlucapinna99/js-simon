"use strict"

function generaNumeri() {
    // Genera 5 numeri casuali
    var numeri = [];
    while (numeri.length < 5) {
      var numero = Math.floor(Math.random() * 100) + 1;
      if (numeri.indexOf(numero) === -1) numeri.push(numero);
    }
  
    // Visualizza i numeri generati nella pagina
    var numeriDiv = document.getElementById("numeri");
    numeriDiv.innerHTML = "";
    for (var i = 0; i < numeri.length; i++) {
      numeriDiv.innerHTML += "<span>" + numeri[i] + " </span>";
    }
  
    // Dopo 30 secondi, rimuovi i numeri generati dalla pagina
    setTimeout(function() {
      numeriDiv.innerHTML = "";
    }, 30000);
  
    // Fai comparire il prompt dopo i 30 secondi
    setTimeout(function() {
      // Chiedi all'utente di inserire i numeri che ricorda
      var numeriUtente = [];
      for (var i = 0; i < 5; i++) {
        var numeroInserito = prompt("Inserisci uno dei numeri che hai visto:");
        numeriUtente.push(parseInt(numeroInserito));
      }
  
      // Controlla quanti numeri l'utente ha indovinato
      var numeriIndovinati = [];
      for (var i = 0; i < numeriUtente.length; i++) {
        if (numeri.includes(numeriUtente[i])) {
          numeriIndovinati.push(numeriUtente[i]);
        }
      }
  
      // Visualizza i numeri indovinati dall'utente
      alert("Hai indovinato " + numeriIndovinati.length + " numeri: " + numeriIndovinati.join(", "));
    }, 31000);
  }