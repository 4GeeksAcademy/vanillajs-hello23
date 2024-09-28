let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function generateDomains() {
    let domains = [];
    let domainList = document.getElementById('domainList');
    domainList.innerHTML = ''; // Limpiar la lista antes de generar nuevas combinaciones

    pronoun.forEach(p => {
        adj.forEach(a => {
            noun.forEach(n => {
                let domain = `${p}${a}${n}.com`;
                domains.push(domain);
            });
        });
    });

    // Mostrar los dominios en la página
    domains.forEach(domain => {
        let listItem = document.createElement('li');
        listItem.textContent = domain;
        domainList.appendChild(listItem);
    });
}
