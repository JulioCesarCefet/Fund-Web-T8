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
            document.querySelector(".lista").innerHTML += 
        `<li class="lista-jogador">
            <img class="lista-imagem" src="${element.foto}" alt="foto do jogador">
            <div>
                <div class="lista-caracteristicas">
                    <strong class="lista-nome">Nome: </strong><p>${element.nome}</p>
                </div>
                <div class="lista-caracteristicas">
                    <strong class="lista-idade">Idade: </strong><p>${element.idade} (${element.dataNascimento})</p>
                </div>
                <div class="lista-caracteristicas">
                    <strong class="lista-posicao">Posição: </strong><p>${element.posicao}</p>
                </div>
                <div class="lista-caracteristicas">
                    <strong class="lista-numero">Numero: </strong><p>${element.numero}</p>
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
            document.querySelector(".lendas").innerHTML += 
        `
        <li class="lendas-lista">
            <img class="lendas-imagem" src="${element.foto}" alt="foto do ${element.apelido}">
            <div>
                <div class="lendas-caracteristicas">
                    <strong class="lendas-nome">Nome: </strong><p>${element.nome}</p>
                </div>
                <div class="lendas-caracteristicas">
                    <strong class="lendas-apelido">Apelido: </strong><p>${element.apelido}</p>
                </div>
                <div class="lendas-caracteristicas">
                    <strong class="lendas-idade">Idade (Nascimento): </strong><p>${element.idade} (${element.dataNascimento})</p>
                </div>
                <div class="lendas-caracteristicas">
                    <strong class="lendas-titulos">Titulos peolo Clube: </strong><p>${element.titulosClube}</p>
                </div>
                <div class="lendas-caracteristicas">
                    <strong class="lendas-jogos">Jogos peolo Clube: </strong><p>${element.jogosClube}</p>
                </div>
                <div class="lendas-caracteristicas">
                    <strong class="lendas-gols">Gols peolo Clube: </strong><p>${element.golsClube}</p>
                </div>
            </div>
        </li>
        `;

        console.log(element.nome)
        });
        
    }
    
}

function elencoFuncao(){
    document.querySelector(".lendas").style.display = 'none';
    document.querySelector(".lista").style.display = 'flex';
}

function lendasFuncao(){
    document.querySelector(".lendas").style.display = 'flex';
    document.querySelector(".lista").style.display = 'none';
}

function colorFuncaoElenco(){
    document.querySelector(".botao-elenco").style.backgroundColor = '#56244a';
}

function colorFuncaoElenco2(){
    document.querySelector(".botao-elenco").style.backgroundColor = '#86244a';
}

function colorFuncaoLendas(){
    document.querySelector(".botao-lendas").style.backgroundColor = '#56244a';
}

function colorFuncaoLendas2(){
    document.querySelector(".botao-lendas").style.backgroundColor = '#86244a';
}