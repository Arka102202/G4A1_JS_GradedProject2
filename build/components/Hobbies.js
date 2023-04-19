import { candidateState } from "../state/MuiltiValuedStateSlice.js";
import { candidateIndexdState } from "../state/StateSlice.js";
export const Hobbies = (host, insertPosition, _) => {
    const componentCallBackfn = (state) => {
        const hobbies = candidateState.getState()[state].interests.hobbies;
        const html = `<h3>Hobbies</h3>
        <ul>
        ${hobbies.reduce((pVal, cVal) => `${pVal}
        <li>${cVal}</li>`, "")}
        </ul>`;
        host.innerHTML = "";
        host.insertAdjacentHTML(insertPosition, html);
    };
    candidateIndexdState.addListener(componentCallBackfn);
};
//# sourceMappingURL=Hobbies.js.map