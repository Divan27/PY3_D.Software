import LanguageManager from "../Model/LanguageManager";

class LanguageController {

    static instance = null;

    constructor() {

        if (LanguageController.instance) {
            return LanguageController.instance;
        }

        this.manager = LanguageManager.getInstance();

        LanguageController.instance = this;
    }

    static getInstance() {

        if (!LanguageController.instance) {
            LanguageController.instance = new LanguageController();
        }

        return LanguageController.instance;
    }

    getLanguage() {
        return this.manager.getLanguage();
    }

    toggleLanguage() {
        this.manager.toggleLanguage();
    }

    translate(key) {
        return this.manager.translate(key);
    }
}

export default LanguageController;
