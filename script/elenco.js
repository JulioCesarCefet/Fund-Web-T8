var elenco = new XMLHttpRequest;
elenco.open('GET', 'json/elenco.json');

elenco.responseType = "json";

elenco.send();

var lendas = new XMLHttpRequest;
lendas.open('GET', 'json/lendas.json');

lendas.responseType = "json";

lendas.send();

elenco.onreadystatechange = function(){
    if(elenco.readyState === 4 && elenco.status === 200){
        console.log(elenco);
        var jogadores = elenco.response

        jogadores.forEach(element => {
            document.querySelector(".squad-list").innerHTML += 
        `<li class="squad-list-player">
            <img class="squad-list-player-img" src="${element.foto}" alt="foto do jogador">
            <div>
                <div class="squad-list-player-information">
                    <strong class="squad-list-player-information-title">Nome: </strong><p class="squad-list-player-information-description">${element.nome}</p>
                </div>
                <div class="squad-list-player-information">
                    <strong class="squad-list-player-information-title">Idade: </strong><p class="squad-list-player-information-description">${element.idade} (${element.dataNascimento})</p>
                </div>
                <div class="squad-list-player-information">
                    <strong class="squad-list-player-information-title">Posição: </strong><p class="squad-list-player-information-description">${element.posicao}</p>
                </div>
                <div class="squad-list-player-information">
                    <strong class="squad-list-player-information-title">Numero: </strong><p class="squad-list-player-information-description">${element.numero}</p>
                </div>
            </div>
        </li>`
        });
        
    }
    
}

lendas.onreadystatechange = function(){
    if(lendas.readyState === 4 && lendas.status === 200){
        console.log(lendas);
        var lendarios = lendas.response

        lendarios.forEach(element => {
            document.querySelector(".legends-list").innerHTML += 
        `
        <li class="legends-list-player">
            <img class="legends-list-player-img" src="${element.foto}" alt="foto do ${element.apelido}">
            <div>
                <div class="legends-list-player-information">
                    <strong class="legends-list-player-information-title">Nome: </strong><p class="legends-list-player-information-description">${element.nome}</p>
                </div>
                <div class="legends-list-player-information">
                    <strong class="legends-list-player-information-title">Apelido: </strong><p class="legends-list-player-information-description">${element.apelido}</p>
                </div>
                <div class="legends-list-player-information">
                    <strong class="legends-list-player-information-title">Idade: </strong><p class="legends-list-player-information-description">${element.idade} (${element.dataNascimento})</p>
                </div>
                <div class="legends-list-player-information">
                    <strong class="legends-list-player-information-title">Titulos peolo Clube: </strong><p class="legends-list-player-information-description">${element.titulosClube}</p>
                </div>
                <div class="legends-list-player-information">
                    <strong class="legends-list-player-information-title">Jogos peolo Clube: </strong><p class="legends-list-player-information-description">${element.jogosClube}</p>
                </div>
                <div class="legends-list-player-information">
                    <strong class="legends-list-player-information-title">Gols peolo Clube: </strong><p class="legends-list-player-information-description">${element.golsClube}</p>
                </div>
            </div>
        </li>
        `;

        });
        
    }
    
}

function squadFunction(){
    document.querySelector(".legends-list").style.display = 'none';
    document.querySelector(".squad-list").style.display = 'flex';
    document.querySelector(".button-change-squad").style.borderColor= 'var(--yellow)';
    document.querySelector(".button-change-legends").style.borderColor= 'var(--black)';
}

function legendsFunction(){
    document.querySelector(".legends-list").style.display = 'flex';
    document.querySelector(".squad-list").style.display = 'none';
    document.querySelector(".button-change-squad").style.borderColor= 'var(--black)';
    document.querySelector(".button-change-legends").style.borderColor= 'var(--yellow)';
}

function colorFunctionSquad(){
    document.querySelector(".button-change-squad").style.backgroundColor = 'var(--wine2)';
}

function colorFunctionSquad2(){
    document.querySelector(".button-change-squad").style.backgroundColor = 'var(--wine)';
}

function colorFunctionLegends(){
    document.querySelector(".button-change-legends").style.backgroundColor = 'var(--wine2)';
}

function colorFunctionLegends2(){
    document.querySelector(".button-change-legends").style.backgroundColor = 'var(--wine)';
}