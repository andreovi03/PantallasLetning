import styles from "./login.css"

class Login extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        if (this.shadowRoot) {
            this.render()
        }
    }

    render() {
        this.shadowRoot!.innerHTML = ``

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);

        this.shadowRoot!.innerHTML += `
        <div class="SectorLogin">
            <h1 class="welcome">Welcome Back</h1>
            <input class="input" type="text"></input>
            <input class="input" type="text"></input>
            <button class="forgotBtn">¿Forgot your Password?</button>
            <button class="logInButton">Log In</button>
            <p>¿First time in letning? <a class="registerbtn">Register</a></p>
        </div>
        `
    }
}

customElements.define('my-login', Login)
export default Login