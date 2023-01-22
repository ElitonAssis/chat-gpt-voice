
document.addEventListener("DOMContentLoaded", () => {
    if ('speechSynthesis' in window)
        console.log('Seu navegador suporta speechSynthesis.');
    else {
        console.log('Seu navegador não suporta speechSynthesis.');
    }
})


class Speech {
    constructor(text, lang = 'pt-BR', pitch = 1, rate = 1, volume = 3) {
        this.text = text;
        this.lang = lang;
        this.pitch = pitch;
        this.rate = rate;
        this.volume = volume;
    }
    start() {
        var fala = new SpeechSynthesisUtterance();
        fala.text = this.text;
        fala.lang = this.lang;
        fala.pitch = this.pitch;
        fala.rate = this.rate;
        fala.volume = this.volume;
        speechSynthesis.speak(fala)
    }
}

//let resposta = document.getElementsByClassName("markdown")

let input = document.getElementById("input")

 //input.value = resposta[resposta.length - 1].value
let timerId;
input.addEventListener("input", () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        new Speech(input.value).start();
    }, 1000);
});











// markdown prose w-full break-words dark:prose-invert dark







// transformar em palavra a cada espaço
// a cada palavra a func é chamada