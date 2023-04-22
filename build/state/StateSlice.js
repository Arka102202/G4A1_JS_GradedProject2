class AppState {
  constructor(state) {
    this.state = state;
    this.listeners = new Set();
  }
  setState(state) {
    this.state = state;
    this.listeners.forEach((fn) => fn(this.state));
  }
  addListener(fn) {
    this.listeners.add(fn);
  }
  getState() {
    return this.state;
  }
  static useState(initialState) {
    if (this.state) return this.state;
    this.state = new AppState(initialState);
    return this.state;
  }
}
class FormState {
  constructor(state) {
    this.state = state;
    this.listeners = new Set();
  }
  setState(state) {
    this.state = state;
    this.listeners.forEach((fn) => fn(this.state));
  }
  addListener(fn) {
    this.listeners.add(fn);
  }
  getState() {
    return this.state;
  }
  static useState(initialState) {
    if (this.state) return this.state;
    this.state = new FormState(initialState);
    return this.state;
  }
}
class PasswordState {
  constructor(state) {
    this.state = state;
    this.listeners = new Set();
  }
  setState(state) {
    this.state = state;
    this.listeners.forEach((fn) => fn(this.state));
  }
  addListener(fn) {
    this.listeners.add(fn);
  }
  getState() {
    return this.state;
  }
  static useState(initialState) {
    if (this.state) return this.state;
    this.state = new PasswordState(initialState);
    return this.state;
  }
}
class CandidateIndexState {
  constructor(state) {
    this.state = state;
    this.listeners = new Set();
  }
  setState(state) {
    this.state = state;
    this.listeners.forEach((fn) => fn(this.state));
  }
  addListener(fn) {
    this.listeners.add(fn);
  }
  getState() {
    return this.state;
  }
  static useState(initialState) {
    if (this.state) return this.state;
    this.state = new CandidateIndexState(initialState);
    return this.state;
  }
}
class ResultState {
  constructor(state) {
    this.state = state;
    this.listeners = new Set();
  }
  setState(state) {
    this.state = state;
    this.listeners.forEach((fn) => fn(this.state));
  }
  addListener(fn) {
    this.listeners.add(fn);
  }
  getState() {
    return this.state;
  }
  static useState(initialState) {
    if (this.state) return this.state;
    this.state = new ResultState(initialState);
    return this.state;
  }
}
export const appState = AppState.useState(true);
export const formState = FormState.useState(true);
export const passwordState = PasswordState.useState(false);
export const resultState = ResultState.useState(true);
export const candidateIndexState = CandidateIndexState.useState(-1);
