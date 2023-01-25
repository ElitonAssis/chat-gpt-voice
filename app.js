  
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




document.querySelector('textarea').parentElement.querySelector('button').addEventListener('click', () => {

    let timerId;
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    console.log(input)


   

    let teste = setTimeout(() => {

        let divs = document.querySelectorAll('.markdown')
        console.log(divs)
        if (divs.length > 0)
            input.value = divs[divs.length - 1]?.firstChild.innerHTML
        else {
            teste()
        }
    }, 500)



    input.addEventListener("input", () => {
        console.log('PASSOU AQUI...............')

        clearTimeout(timerId);
        timerId = setTimeout(() => {
            new Speech(input.value).start();
        }, 1000);
    });
})


// a cada espaço na frase add a palavra em um array da uma for jogando palavra por palavra no metodo da class





