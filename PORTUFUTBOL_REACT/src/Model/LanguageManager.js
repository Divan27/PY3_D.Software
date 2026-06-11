<<<<<<< HEAD
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
=======
class LanguageManager {

    static instance = null;

    constructor() {

        if(LanguageManager.instance){
            return LanguageManager.instance;
        }

        this.language = "es";

        LanguageManager.instance = this;
    }

    static getInstance(){

        if(!LanguageManager.instance){

            LanguageManager.instance =
                new LanguageManager();
        }

        return LanguageManager.instance;
    }

    getLanguage(){

        return this.language;
    }

    toggleLanguage(){

        this.language =
            this.language === "es"
            ? "en"
            : "es";
    }
}

export default LanguageManager;
>>>>>>> 43d8e518e86370a06a08bc4ea088d538171a243b
