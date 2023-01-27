
class Speech {
    constructor(text, lang = 'pt-BR', pitch = 1, rate = 1, volume = 3) {
        this.text = text;
        this.lang = lang;
        this.pitch = pitch;
        this.rate = rate;
        this.volume = volume;
    }
    start() {
        let fala = new SpeechSynthesisUtterance();
        fala.text = this.text;
        fala.lang = this.lang;
        fala.pitch = this.pitch;
        fala.rate = this.rate;
        fala.volume = this.volume;
        speechSynthesis.speak(fala)
    }
}



let previousTxt;


let timerId;

let parar = false

let btn = document.querySelector('textarea').parentElement.querySelector('button')

let input = document.createElement('input')

input.setAttribute('type', 'text')


function teste() {
    setTimeout(() => {
        if (parar) return;

        let divs = document.querySelectorAll('.markdown');

        if (divs.length > 0) {

            let txt = divs[divs.length - 1]?.firstChild.innerHTML;

            if (!!txt && txt.trim() != "" && txt !== previousTxt) {

                console.log(txt, 'valor txt')
                previousTxt = txt;

            } else {
                input.value = txt;
                parar = true;
                new Speech(txt).start();
            }
        }

        if (!parar) teste();
    }, 1000);
}



// function voz() {
//     console.log(input.value,'valor do input')
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//         parar = true;
//         new Speech(input.value).start();
//         input.value = ""
//     }, 1000);
// }

btn.addEventListener('click', () => {
    parar = false
    teste()

  //  input.addEventListener("input", voz)
})

// clica 
// pega valor da div 
// se div tem valores repetidos a cada 1 segundos para
// quando parar input recebe valor e dispara evento || chama metodo da class







// a cada espaço na frase add a palavra em um array da uma for jogando palavra por palavra no metodo da class





