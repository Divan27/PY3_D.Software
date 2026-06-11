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