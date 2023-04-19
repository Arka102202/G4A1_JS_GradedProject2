import { candidateState } from "../state/MuiltiValuedStateSlice.js";
import { candidateIndexdState } from "../state/StateSlice.js";
let count = 0;
export const NavButton = (func) => {
    const componentCallBackfn = (state) => {
        const candidateStateLenght = candidateState.getState().length;
        if (state == -1)
            return;
        const btn = document.querySelector(`.btn-${func}`);
        if (func === "next" && state < candidateStateLenght - 1)
            btn.classList.remove("hidden");
        else if (func === "prev" && state > 0)
            btn.classList.remove("hidden");
        else if (func === "next" && state >= candidateStateLenght - 1)
            btn.classList.add("hidden");
        else if (func === "prev" && state <= 0)
            btn.classList.add("hidden");
        if (count === 0) {
            document.querySelector(`.btn-next`).addEventListener("click", () => {
                candidateIndexdState.setState(candidateIndexdState.getState() + 1);
            });
            document.querySelector(`.btn-prev`).addEventListener("click", () => {
                candidateIndexdState.setState(candidateIndexdState.getState() - 1);
            });
            count++;
        }
    };
    componentCallBackfn(-1);
    candidateIndexdState.addListener(componentCallBackfn);
};
//# sourceMappingURL=NavButton.js.map