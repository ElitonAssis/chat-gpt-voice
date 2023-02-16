//class criada pelo chatGpt
window.onload = run();
function run() {
    console.log('carregado')
}


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
    capture() {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = this.lang;
        recognition.start();
        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            console.log(text);
        };
    }

}

debugger

let previousTxt
let parar = false
let btn
setTimeout(() => {
    btn = document.querySelector('textarea').parentElement.querySelector('button')
    console.log(btn)
    btn.addEventListener('click', () => {
        console.log('btn clicked')
        previousTxt = null
        parar = false
        getVoice()
    })
}, 2000)

// while (btn == null) {
//     getBtn()
// }

// function setEvent() {
//     console.log('btn clicked')
//     previousTxt = null
//     parar = false
//     getVoice()
// }
// function getBtn() {
//     btn = document.querySelector('textarea').parentElement.querySelector('button')
//     console.log(btn)

//     if (!!btn) {
//         btn.onclick = setEvent
//         return
//     } else
//         getBtn()
// }

// function captureVoice() {
//     const input = document.querySelector('textarea');
//     console.log(input)
// }




function getVoice() {
    setTimeout(() => {
        if (parar) return;

        let divs = document.querySelectorAll('.markdown');
        if (divs.length > 0) {
            txt = divs[divs.length - 1]?.firstChild.innerHTML;

            if (!!txt && !/^\s*$/.test(txt)) {
                if (txt !== previousTxt)
                    previousTxt = txt
                else {
                    parar = true;
                    console.log(txt)
                    new Speech(txt).start();
                }
            }
        }
        if (!parar) getVoice();
    }, 1250);
}








