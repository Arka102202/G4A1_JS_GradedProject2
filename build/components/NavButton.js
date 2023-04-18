import { candidateState } from "../state/MuiltiValuedStateSlice";
import { canditateIndexdState } from "../state/StateSlice.js";
export const NavButton = (host, insertPosition, props) => {
    const candidatePosition = canditateIndexdState.getState();
    const candidateStateLenght = candidateState.getState().length;
    if (!props)
        return;
    let html = "";
    if (props.func === "next" && candidatePosition < candidateStateLenght - 1)
        html = `<button class="btn-next">Next</button>`;
    if (props.func === "prev" && candidatePosition > 0)
        html = `<button class="btn-prev">Prev</button>`;
    host.insertAdjacentHTML(insertPosition, html);
    if (props.func === "next")
        document.querySelector(".btn-next").addEventListener("click", () => {
            if (canditateIndexdState.getState() <
                candidateState.getState().length - 1)
                canditateIndexdState.setState(candidatePosition + 1);
        });
    if (props.func === "prev")
        document.querySelector(".btn-prev").addEventListener("click", () => {
            if (canditateIndexdState.getState() > 0)
                canditateIndexdState.setState(candidatePosition - 1);
        });
};
//# sourceMappingURL=NavButton.js.map