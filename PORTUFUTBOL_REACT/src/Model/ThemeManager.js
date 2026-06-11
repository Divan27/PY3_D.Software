<<<<<<< HEAD
class ThemeManager {

    static instance = null;

    constructor() {

        if (ThemeManager.instance) {
            return ThemeManager.instance;
        }

        this.theme = "dark";

        ThemeManager.instance = this;
    }

    static getInstance() {

        if (!ThemeManager.instance) {

            ThemeManager.instance =
                new ThemeManager();

        }

        return ThemeManager.instance;
    }

    getTheme() {

        return this.theme;

    }

    toggleTheme() {

        this.theme =
            this.theme === "dark"
                ? "light"
                : "dark";

    }

}

=======
class ThemeManager {

    static instance = null;

    constructor() {

        if (ThemeManager.instance) {
            return ThemeManager.instance;
        }

        this.theme = "dark";

        ThemeManager.instance = this;
    }

    static getInstance() {

        if (!ThemeManager.instance) {

            ThemeManager.instance =
                new ThemeManager();

        }

        return ThemeManager.instance;
    }

    getTheme() {

        return this.theme;

    }

    toggleTheme() {

        this.theme =
            this.theme === "dark"
                ? "light"
                : "dark";

    }

}

>>>>>>> 43d8e518e86370a06a08bc4ea088d538171a243b
export default ThemeManager;