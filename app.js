
window.onload = run();
function run() {
    console.log('carregado')
    setTimeout(() => new Exc(), 2000);
}


class Speech {
    constructor(text, lang = 'pt-BR', pitch = 1, rate = 3, volume = 3) {
        this.text = text;
        this.lang = lang;
        this.pitch = pitch;
        this.rate = rate;
        this.volume = volume;

        this.start();
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

class Exc {
    previousTxt;
    parar;
    btn;
    txt;

    constructor() {
        this.btn = null;
        this.getBtn();
    }

    reset() {
        this.parar = false;
        this.previousTxt = null;
        this.txt = null;
    }

    getBtn() {
        while (!this.btn) {
            this.reset();
            this.btn = document.querySelector('textarea').parentElement.querySelector('button');
        };

        return this.btn.addEventListener('click', () => {
            this.reset();
            this.getVoice();
        })
    }

    getVoice() {
        setTimeout(async () => {
            if (this.parar) return this.getVoice();
            console.log('passou')
            const divs = document.querySelectorAll('.markdown');
            if (divs.length === 0) return this.getVoice();
            this.txt = divs[divs.length - 1]?.firstChild.innerHTML;
            if (!this.txt || this.txt.trim() === "" || this.txt.length <= 1) return this.getVoice();
            if (this.txt !== this.previousTxt) this.previousTxt = this.txt;
            else {
                this.parar = true;
                console.log(this.txt, 'falado')
                try {
                    new Speech(this.txt.trim())
                  //  for (let p of this.txt.split(' ')) await this.promise(p);
                } finally {
                    this.previousTxt = null;
                    this.txt = null;
                }
            }
            if (!this.parar) return this.getVoice();
            return;
        }, 1500);
    }
    promise(palavra) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(palavra)
                resolve(new Speech(palavra))
            }, 700)
        })
    }


}












