 // L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.-

 var stringaUno = prompt("Inserisci una parola");
 var stringaDue = prompt("Inserisci una parola");

 // Controllo i dati inseriti e stampo le parole

 if (stringaUno.length > stringaDue.length) {
   console.log (stringaDue , stringaUno);
 } else if (stringaUno.length < stringaDue.length) {
   console.log (stringaUno , stringaDue);
 } else {
   console.log ("Le due stringhe hanno stessa lunghezza:" + stringaUno + ',' + stringaDue);
 }
