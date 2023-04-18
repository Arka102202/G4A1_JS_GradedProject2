class CandidatesState {
    constructor() {
        this.listeners = new Set();
        this.state = new Array();
    }
    addState(state) {
        if (state instanceof Array)
            this.state.push(...state);
        else
            this.state.push(state);
        this.listeners.forEach((fn) => fn(this.state));
    }
    addListener(fn) {
        this.listeners.add(fn);
    }
    getState() {
        return this.state;
    }
    static useState() {
        if (this.state)
            return this.state;
        this.state = new CandidatesState();
        return this.state;
    }
}
export const candidateState = new CandidatesState();
//# sourceMappingURL=MuiltiValuedStateSlice.js.map