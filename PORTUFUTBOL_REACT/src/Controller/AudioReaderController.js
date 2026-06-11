class AudioReaderController {
    constructor() {
        this.synth = window.speechSynthesis;
        this.isReading = false;
    }

    readText(text, language = "es") {
        if (!this.synth || !text.trim()) return;

        this.stopReading();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === "en" ? "en-US" : "es-ES";
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

    readPage(language = "es") {
        const mainContent = document.querySelector("main") || document.body;
        const text = mainContent.innerText;
        this.readText(text, language);
    }
}

export default new AudioReaderController();
