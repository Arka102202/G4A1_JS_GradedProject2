import { formState, appState } from "../state/StateSlice.js";
import { EyeEl } from "./EyeEL.js";
export const Form = (host, insertPosition, props) => {
  const componentCallBackFn = (state) => {
    const htmlValid = `<input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <div class="show-password">
          </div>
          <button type="submit">Login</button>`;
    const htmlInvalid = `<h1 style="color:#e03131;">Username and Password invalid</h1>
    <button id="btn-ok">Ok</button>`;
    const html = `${state ? htmlValid : htmlInvalid}`;
    host.innerHTML = "";
    host.insertAdjacentHTML(insertPosition, html);
    if (state) {
      const eyeElHost = document.querySelector(".show-password");
      EyeEl(eyeElHost, "afterbegin", { pState: false });
      host.addEventListener("submit", formStateUpdate);
    } else
      document.getElementById("btn-ok").addEventListener("click", () => {
        formState.setState(true);
      });
  };
  componentCallBackFn(props.fState);
  formState.addListener(componentCallBackFn);
};
function formStateUpdate(event) {
  event.preventDefault();
  if (
    document.getElementById("username").value !==
      localStorage.getItem("username") ||
    document.getElementById("password").value !==
      localStorage.getItem("password")
  ) {
    formState.setState(false);
    return;
  }
  appState.setState(true);
}
