import {
    SpanishLanguageStrategy,
    EnglishLanguageStrategy
} from "./LanguageStrategies";

class LanguageManager {

    static instance = null;

    constructor() {

        if (LanguageManager.instance) {
            return LanguageManager.instance;
        }

        this.language = "es";
        this.strategies = {
            es: new SpanishLanguageStrategy(),
            en: new EnglishLanguageStrategy()
        };
        this.currentStrategy = this.strategies.es;

        LanguageManager.instance = this;
    }

    static getInstance() {

        if (!LanguageManager.instance) {
            LanguageManager.instance = new LanguageManager();
        }

        return LanguageManager.instance;
    }

    getLanguage() {
        return this.language;
    }

    setLanguage(language) {
        if (!this.strategies[language]) return;

        this.language = language;
        this.currentStrategy = this.strategies[language];
    }

    toggleLanguage() {
        this.setLanguage(
            this.language === "es"
                ? "en"
                : "es"
        );
    }

    translate(key) {
        return this.currentStrategy.translate(key);
    }
}

export default LanguageManager;
