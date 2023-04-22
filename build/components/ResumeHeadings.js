import { candidateState } from "../state/MultiValuedStateSlice.js";
import { candidateIndexState } from "../state/StateSlice.js";
export const ResumeHeadings = (host, insertPosition, _) => {
  const componentCallBackfn = (state) => {
    if (state == -1) return;
    const candidate = candidateState.getState()[state];
    const html = `<h2>${candidate.basics.name}</h2>
      <h4>Applied for: <strong>${candidate.basics.AppliedFor}</strong></h4>`;
    host.innerHTML = "";
    host.insertAdjacentHTML(insertPosition, html);
  };
  candidateIndexState.addListener(componentCallBackfn);
};
