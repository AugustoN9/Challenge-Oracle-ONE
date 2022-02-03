let keys    = document.querySelectorAll('.keyboard_wrapper .key .row span'),
    keyPad  = document.querySelector('.keyboard_wrapper .key'),
    display = document.querySelector('.keyboard_wrapper .display');

if(keys && keyPad && display)
{
    let capsLockMode = false;
    keys.forEach(key=>
    {
        key.addEventListener('click', function()
        {
            // console.log(this.innerText);
            if(this.classList.contains('caps'))
            {
                this.classList.toggle('active');
                keyPad.classList.toggle('uppercase');

                capsLockMode ? capsLockMode = false : capsLockMode = true;
            }
            else if (this.classList.contains('backspace')){
                let str = display.innerText;
                display.innerText = str.substring(0, (str.length-1));
            }else{
                if(capsLockMode)
                {
                    display.innerText += this.dataset.key.toUpperCase();
                }else{
                    display.innerText += this.dataset.key.toUpperCase();
                }
            }
        });
    });
}
<<<<<<< HEAD


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

function confereLetra(id){

        var teclado = document.getElementById(id).value;

        var palavra = 'ABACAXI';
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
        }else{
            exibirLetraSecreta();
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
=======
>>>>>>> 77179ad0668fc6ebdccfdecc244b319df768d533
