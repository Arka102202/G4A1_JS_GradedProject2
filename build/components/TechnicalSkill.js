import { candidateState } from "../state/MultiValuedStateSlice.js";
import { candidateIndexState } from "../state/StateSlice.js";
export const TechnicalSkill = (host, insertPosition, _) => {
    const componentCallBackfn = (state) => {
        const skillName = candidateState.getState()[state].skills.name;
        const skills = candidateState.getState()[state].skills.keywords;
        const html = `<h3>Technical Skills ( <span>${skillName}</span> )</h3>
        <ul>
        ${skills.reduce((pVal, cVal) => `${pVal}
        <li>${cVal}</li>`, "")}
        </ul>`;
        host.innerHTML = "";
        host.insertAdjacentHTML(insertPosition, html);
    };
    candidateIndexState.addListener(componentCallBackfn);
};
//# sourceMappingURL=TechnicalSkill.js.map