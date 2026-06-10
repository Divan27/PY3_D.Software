class AudioReaderController {
    constructor() {
        this.synth = window.speechSynthesis;
        this.isReading = false;
    }

    readText(text) {
        if (!this.synth || !text.trim()) return;

        this.stopReading();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "es-ES";
        utterance.rate = 0.9;
        utterance.pitch = 1;

        utterance.onend = () => {
            this.isReading = false;
        };

        this.isReading = true;
        this.synth.speak(utterance);
    }

    stopReading() {
        if (this.synth) {
            this.synth.cancel();
            this.isReading = false;
        }
    }

    readPage() {
        const mainContent = document.querySelector("main") || document.body;
        const text = mainContent.innerText;
        this.readText(text);
    }
}

export default new AudioReaderController();
