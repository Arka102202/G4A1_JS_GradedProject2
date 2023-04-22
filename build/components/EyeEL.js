import { passwordState } from "../state/StateSlice.js";
export const EyeEl = (host, insertPosition, props) => {
    const componentCallBackFn = (state) => {
        const img = state ? "eye-with-eyelash.png" : "eyelash.png";
        const html = `<img src="./build/assets/logo/${img}" alt="" />`;
        host.innerHTML = "";
        host.insertAdjacentHTML(insertPosition, html);
        host.addEventListener("click", updatePasswordState);
    };
    componentCallBackFn(props.pState);
    passwordState.addListener(componentCallBackFn);
};
function updatePasswordState() {
    let pState = passwordState.getState();
    if (!pState)
        document.getElementById("password").setAttribute("type", "text");
    else
        document.getElementById("password").setAttribute("type", "password");
    passwordState.setState(!pState);
}
