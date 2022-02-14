let keys    = document.querySelectorAll('.keyboard_wrapper .key .row span'),
    keyPad  = document.querySelector('.keyboard_wrapper .key'),
    display = document.querySelector('.keyboard_wrapper .display');

document.querySelectorAll("button").forEach(function(button){
    button.addEventListener("click", function(event){

        const el = event.target || event.srcElement;
        const id = el.id;
        var idSel = id;
        console.log(idSel);
        if(idSel != null){              
            confereLetra(idSel);                
        }
    })
})


var palavras = ['abacaxi','uva','laranja','melancia','banana','maca','bergamota','coco','mamao'];
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
var indiceAleat = random(0, palavras.length);
var palavra = palavras[indiceAleat]
palavra = palavra.toUpperCase();
console.log('Palavra Aleatoria '+palavra)

function preencheCampo(string){
    let caracter = string.split('');

    for(i = 0; i < string.length; i++){
       var exibepalavra = document.getElementById("letra").value;
       exibepalavra.innerText = caracter[i];
       console.log(caracter[i])

    }


}

preencheCampo(palavra);

function confereLetra(id){

        var teclado = document.getElementById(id).value;

        //preencheCampo(palavra);

        var palavrasecreta = document.querySelector("#palavrasecreta");
        palavrasecreta.innerText = palavra;

        console.log('A palavra secreta eh '+palavrasecreta.innerText);
    
        var string = palavrasecreta.innerText;
        var cont = 0;

        for(var i = 0; i < string.length; i++){
            if(teclado == string[i]){
                cont = ++cont;
            }            
        }     
        if(cont > 0 ){
            esconde(id);
            exibirLetraSecreta();
            console.log('A letra '+teclado+' foi encontrada '+cont+' vezes');  
            alert('PARABENS! A palavra secreta possui a letra escolhida '+teclado)
        }else{
            alert('VOCE ERROU! A palavra secreta NÃO POSSUI a letra escolhida '+teclado)
        }
         
}



function exibirLetraSecreta(){

    var tecla_off = document.querySelector('.secreta');
    var estado = tecla_off.style.display;

    tecla_off.style.display = estado == 'none' ? 'inline':'none';
}



function esconde(tecla) {  

    //var tecla_on = document.querySelector(tecla);
    var tecla_on = document.getElementById(tecla);

    var estado = tecla_on.style.display;

    tecla_on.style.display = estado == 'inline' ? 'none':'inline';

    /*
    if(tecla_on == 'inline') {  
        tecla_on = 'none';  
     }    
     */    
 }

