let main = document.createElement('main');
let body = document.querySelector('body');
body.appendChild(main);

let vitriSec = document.createElement('section');
vitriSec.setAttribute('class', 'vitrine');
main.appendChild(vitriSec);

let ul = document.createElement('ul');
main.appendChild(ul);

function Cards(){
    
    for(let i = 0; i < data.length; i++){
        let dataCards = data[i];
        
        let li = document.createElement('li');
        ul.appendChild(li);

        let img = document.createElement('img');
        img.src = dataCards.img;

        let tag = document.createElement('span');
        tag.setAttribute('class', 'tipo');
        tag.innerText = dataCards.tag;

        let name = document.createElement('span');
        name.setAttribute('class','name');
        name.innerText = dataCards.nameItem;

        let descrip = document.createElement('p');
        descrip.innerText = dataCards.description;

        let val = document.createElement('span');
        val.setAttribute('class', 'valor');
        val.innerText = 'R$ ' + dataCards.value;

        let addCar = document.createElement('button');
        addCar.setAttribute('class', 'adcProduto');
        addCar.innerText = dataCards.addCart;

        

        li.appendChild(img);
        li.appendChild(tag);
        li.appendChild(name);
        li.appendChild(descrip);
        li.appendChild(val);
        li.appendChild(addCar);


    }
    
}

Cards();

