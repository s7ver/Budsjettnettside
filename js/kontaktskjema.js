document.getElementById("tilbakemeldingknapp").addEventListener("click", function(event){ //henter submit knappen fra html dokumentet med getElementById, og legger til en addEventListener click som betyr at funksjonen som skrives her skal utføres når submit blir trykket på.
    event.preventDefault();
    alert("Tilbakemeldingen din er motatt!"); //alert er popup meldingen som kommer når en sender inn kontaktskjemaet.
    document.getElementById("kontakt-navn-input").value = ""; //Når en setter value = "", så vil input feltene i skjemaet bli tomme igjen etter en har trykket send inn og fått opp bekreftelsen på at det er sendt inn.
    document.getElementById("kontakt-epost-input").value = "";
    document.getElementById("tilbakemelding").value = "";
});
