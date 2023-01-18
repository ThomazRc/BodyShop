let main = document.createElement('main');
let body = document.querySelector('body');
body.appendChild(main);

let vitriSec = document.createElement('section');
vitriSec.setAttribute('class', 'vitrine');
main.appendChild(vitriSec);

let ul = document.createElement('ul');
main.appendChild(ul);
let quantidade = 0;
let somaPreco = 0;

function Cards(data){
    
    for(let i = 0; i < data.length; i++){
        let dataCards = data[i];
        

        let li = document.createElement('li');
        ul.appendChild(li);

        let img = document.createElement('img');
        img.src = dataCards.img;

        let tag = document.createElement('span');
        tag.setAttribute('class', 'tipo');
        tag.innerText = dataCards.tag;

        let name = document.createElement('h4');
        name.setAttribute('class','name');
        name.innerText = dataCards.nameItem;

        let descrip = document.createElement('p');
        descrip.innerText = dataCards.description;

        let val = document.createElement('span');
        val.setAttribute('class', 'valor');
        val.innerText = 'R$ ' + dataCards.value + '.00';

        let addCar = document.createElement('button');
        addCar.setAttribute('class', 'adcProduto');
        addCar.setAttribute('id', dataCards.id);
        addCar.innerText = dataCards.addCart;

        

        li.appendChild(img);
        li.appendChild(tag);
        li.appendChild(name);
        li.appendChild(descrip);
        li.appendChild(val);
        li.appendChild(addCar);


        addCar.addEventListener('click', function(e){

            quantidade++
            somaPreco += dataCards.value;

            if(quantidade > 0){
                
                infoItemCarr.style = 'display: none';

            }


            let cards = criarItemCarr(dataCards);
            let lista = document.querySelector('.ulItem');
            lista.appendChild(cards);

           

            qntTot.innerText = quantidade;
            spanRes.innerText = 'R$ ' + somaPreco + '.00';
            
        });

    }

}

Cards(data);

 function criarItemCarr(dataCards){
    let liCarr = document.createElement('li');
    liCarr.setAttribute('class', 'liCarr');
    let imgCarr = document.createElement('img');
    imgCarr.setAttribute('class', 'imgCarr');
    let nameCarr = document.createElement('h3');
    nameCarr.setAttribute('class', 'nameCarr');
    let valCarr = document.createElement('span');
    valCarr.setAttribute('class', 'valCarr');
    let btnRemove = document.createElement('button');
    btnRemove.setAttribute('class', 'btnRemove');

    liCarr.id = 'ci_' + dataCards.id;
    imgCarr.src = dataCards.img;
    nameCarr.innerText = dataCards.nameItem;
    valCarr.innerText = 'R$ ' + dataCards.value + '.00';
    btnRemove.innerText = 'Remover produto';
    btnRemove.id = 'i_' + dataCards.id;

    liCarr.appendChild(imgCarr);
    liCarr.appendChild(nameCarr);
    liCarr.appendChild(valCarr);
    liCarr.appendChild(btnRemove);

    btnRemove.addEventListener('click', function(e){
        liCarr.remove();
        quantidade--;
        somaPreco -= dataCards.value;

        if(quantidade == 0){
            infoItemCarr.style = 'display: flex';
        }

        document.querySelector('.valorQuant').innerHTML = quantidade;

        document.querySelector('.spanRes').innerHTML = 'R$ ' + somaPreco + '.00';

    });

    return liCarr;

 }


 // Parte da criação do aside, com os elementos da barra de pesquisa e carrinho de compras //


let aside = document.createElement('aside');
main.appendChild(aside);

let secPesq = document.createElement('section');
secPesq.setAttribute('class','secPesq');
aside.appendChild(secPesq);

let barraInp = document.createElement('input');
barraInp.placeholder = 'Oque procura...';
let btnPes = document.createElement('button');
btnPes.setAttribute('class','btnPes');
btnPes.innerText = 'Pesquisar';
secPesq.appendChild(barraInp);
secPesq.appendChild(btnPes);

let secCarr = document.createElement('section');
secCarr.setAttribute('class','secCarr');
aside.appendChild(secCarr);

let textDoCarr = document.createElement('span');
textDoCarr.setAttribute('class','textDoCarr');
textDoCarr.innerText = 'Carrinho de compras';
let itemCarr = document.createElement('div');
itemCarr.setAttribute('class','itemCarr');
secCarr.appendChild(textDoCarr);
secCarr.appendChild(itemCarr);

let infoItemCarr = document.createElement('span');
infoItemCarr.setAttribute('class','infoItemCarr');
infoItemCarr.innerText = 'Carrinho vázio';
itemCarr.appendChild(infoItemCarr);

let ulItemCarr = document.createElement('ul');
ulItemCarr.setAttribute('class', 'ulItem');
itemCarr.appendChild(ulItemCarr);


let secCal = document.createElement('section');
secCal.setAttribute('class', 'secCal');

let divQ = document.createElement('div');
divQ.setAttribute('class','divQ');
secCal.appendChild(divQ);

let quant = document.createElement('span');
quant.setAttribute('class', 'quant');
quant.innerText = 'Quantidade: ';
divQ.appendChild(quant);

let qntTot = document.createElement('span');
qntTot.setAttribute('class', 'valorQuant'); ;
divQ.appendChild(qntTot);



let divVal = document.createElement('div');
divVal.setAttribute('class', 'divVal');
secCal.appendChild(divVal);

let spanTot = document.createElement('span');
spanTot.innerText = 'Total: ';
divVal.appendChild(spanTot);

let spanRes = document.createElement('span');
spanRes.setAttribute('class', 'spanRes');
divVal.appendChild(spanRes);

aside.appendChild(secCal);

let btnFinalizarComp = document.createElement('button');
btnFinalizarComp.innerText = 'Finalizar Compra';
btnFinalizarComp.setAttribute('class', 'btnFinalizarComp');
aside.appendChild(btnFinalizarComp);


// Configurando a parte do logo e menus (bonus) //

let todos = document.querySelector('#todos');
let acessorios = document.querySelector('#aces');
let calcados = document.querySelector('#calcados');
let camisetas = document.querySelector('#camisetas');

todos.addEventListener('click', function(e){
    ul.innerHTML = '';
    Cards(data);


});

acessorios.addEventListener('click', function(e){
    let acess = [];
    ul.innerHTML = '';

    for(let i = 0; i < data.length; i++){
        if(data[i].tag == "Acessórios"){
            acess.push(data[i]);
            
        }

    }

    Cards(acess);

});

calcados.addEventListener('click', function(e){
    let jaq = [];
    ul.innerHTML = '';

    for(let i = 0; i < data.length; i++){
        if(data[i].tag == "Jaquetas"){
            jaq.push(data[i]);
           
        }

    }

    Cards(jaq);

});

camisetas.addEventListener('click', function(e){
    let camis = [];
    ul.innerHTML = '';

    for(let i = 0; i < data.length; i++){
        if(data[i].tag == "Camisetas"){
            camis.push(data[i]);
            
        }

    }

    Cards(camis);

});

// Configurando a barra de pesquisa //

btnPes.addEventListener('click', function(e){
    let inp = [];
    ul.innerHTML = '';
    
    for(let i = 0; i < data.length; i++){
        //if(barraInp.value == data[i].nameItem){
            if(data[i].nameItem.toLowerCase().includes(barraInp.value)){
                inp.push(data[i]);

            }
           
    }

    Cards(inp);

});

