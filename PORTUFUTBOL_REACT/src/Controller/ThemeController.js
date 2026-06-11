<<<<<<< HEAD
import ThemeManager from "../Model/ThemeManager";

class ThemeController {

    static instance = null;

    constructor() {

        if (ThemeController.instance) {
            return ThemeController.instance;
        }

        this.themeManager =
            ThemeManager.getInstance();

        ThemeController.instance = this;
    }

    static getInstance() {

        if (!ThemeController.instance) {

            ThemeController.instance =
                new ThemeController();

        }

        return ThemeController.instance;
    }

    getTheme() {

        return this.themeManager.getTheme();

    }

    toggleTheme() {

        this.themeManager.toggleTheme();

    }

}

=======
import ThemeManager from "../Model/ThemeManager";

class ThemeController {

    static instance = null;

    constructor() {

        if (ThemeController.instance) {
            return ThemeController.instance;
        }

        this.themeManager =
            ThemeManager.getInstance();

        ThemeController.instance = this;
    }

    static getInstance() {

        if (!ThemeController.instance) {

            ThemeController.instance =
                new ThemeController();

        }

        return ThemeController.instance;
    }

    getTheme() {

        return this.themeManager.getTheme();

    }

    toggleTheme() {

        this.themeManager.toggleTheme();

    }

}

>>>>>>> 43d8e518e86370a06a08bc4ea088d538171a243b
export default ThemeController;