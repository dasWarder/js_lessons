class ActiveMenuButton {
    constructor(className) {
        this.$el = document.getElementsByName(className);
    }

    makeActive() {
        this.$el.forEach(link => {
            link.onclick = () => {
                setActiveMenuElement(link);
            }
        })
    }
};

class ActiveSubmenuButton extends ActiveMenuButton {
    constructor(options) {
        super(options.className);
        this.$el.color = options.color;
    }

    makeActive() {
        console.log('Activating');
        this.$el.forEach(button => {
            button.onclick = () => {
                button.style.backgroundColor = this.$el.color;
            }
        })
    }
}

const main = new ActiveMenuButton('menu-main');
const about = new ActiveMenuButton('menu-about');
const info = new ActiveMenuButton('menu-info');
const button = new ActiveSubmenuButton( { className:'submenu-button', color: 'green' } );

activateMenuButtons(main, about, info, button);

function activateMenuButtons(...args) {
    args.forEach(button => button.makeActive());
}

const setActiveMenuElement = (name) => {

    const nav = document.querySelector('nav');
    let links = nav.querySelectorAll('a');
    links.forEach(link => link.className = 'menu-link');
    name.className = 'active menu-link';
}