import { candidateState } from "../state/MultiValuedStateSlice.js";
import { candidateIndexState } from "../state/StateSlice.js";
let count = 0;
export const NavButton = (func) => {
  const componentCallBackfn = (state) => {
    const candidateStateLength = candidateState.getState().length;
    if (state === -1) {
      document.querySelector(`.btn-next`).classList.add("hidden");
      document.querySelector(`.btn-prev`).classList.add("hidden");
      return;
    }
    const btn = document.querySelector(`.btn-${func}`);
    if (func === "next" && state < candidateStateLength - 1)
      btn.classList.remove("hidden");
    else if (func === "prev" && state > 0) btn.classList.remove("hidden");
    else if (func === "next" && state >= candidateStateLength - 1)
      btn.classList.add("hidden");
    else if (func === "prev" && state <= 0) btn.classList.add("hidden");
    if (count === 0) {
      document.querySelector(`.btn-next`).addEventListener("click", () => {
        candidateIndexState.setState(candidateIndexState.getState() + 1);
      });
      document.querySelector(`.btn-prev`).addEventListener("click", () => {
        candidateIndexState.setState(candidateIndexState.getState() - 1);
      });
      count++;
    }
  };
  componentCallBackfn(-1);
  candidateIndexState.addListener(componentCallBackfn);
};
