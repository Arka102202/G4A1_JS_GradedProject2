import { candidateState } from "../state/MuiltiValuedStateSlice.js";
import { candidateIndexdState } from "../state/StateSlice.js";
export const PersonalInfo = (host, insertPosition, _) => {
    const componentCallBackfn = (state) => {
        const phNo = candidateState.getState()[state].basics.phone;
        const email = candidateState.getState()[state].basics.email;
        const profile = candidateState.getState()[state].basics.profiles.network;
        const url = candidateState.getState()[state].basics.profiles.url;
        const html = `<h3>Personal Info</h3>
        <ul>
        <li>${phNo}</li>
        <li>${email}</li>
        <li><a href=${url} target="_blank">${profile}</a></li>
        </ul>`;
        host.innerHTML = "";
        host.insertAdjacentHTML(insertPosition, html);
    };
    candidateIndexdState.addListener(componentCallBackfn);
};
//# sourceMappingURL=PersonalInfo.js.map