class AppState {
    constructor(state) {
        this.state = state;
        this.listeners = new Array();
    }
    setState(state) {
        this.state = state;
        this.listeners.forEach((fn) => fn(this.state));
    }
    addListener(fn) {
        this.listeners.push(fn);
    }
    getState() {
        return this.state;
    }
    static useState(initialState) {
        if (this.state)
            return this.state;
        this.state = new AppState(initialState);
        return this.state;
    }
}
class FormState {
    constructor(state) {
        this.state = state;
        this.listeners = new Array();
    }
    setState(state) {
        this.state = state;
        this.listeners.forEach((fn) => fn(this.state));
    }
    addListener(fn) {
        this.listeners.push(fn);
    }
    getState() {
        return this.state;
    }
    static useState(initialState) {
        if (this.state)
            return this.state;
        this.state = new FormState(initialState);
        return this.state;
    }
}
class PasswordState {
    constructor(state) {
        this.state = state;
        this.listeners = new Array();
    }
    setState(state) {
        this.state = state;
        this.listeners.forEach((fn) => fn(this.state));
    }
    addListener(fn) {
        this.listeners.push(fn);
    }
    getState() {
        return this.state;
    }
    static useState(initialState) {
        if (this.state)
            return this.state;
        this.state = new PasswordState(initialState);
        return this.state;
    }
}
export const appState = AppState.useState(true);
export const formState = FormState.useState(true);
export const passwordState = PasswordState.useState(false);
//# sourceMappingURL=State.js.map