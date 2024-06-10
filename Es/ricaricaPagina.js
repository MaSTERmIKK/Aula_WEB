// Funzione che ricarica una pagina basata sul nome inserito
function ricaricaPagina() {
    var nomePagina = document.getElementById('paginaInput').value;
    if(nomePagina) {
        window.location.href = nomePagina + '.html';
    } else {
        alert("Per favore, inserisci il nome della pagina!");
    }
}

