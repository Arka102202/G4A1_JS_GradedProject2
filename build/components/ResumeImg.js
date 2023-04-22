import { candidateState } from "../state/MultiValuedStateSlice.js";
import { candidateIndexState } from "../state/StateSlice.js";
export const ResumeImg = (hsot, insertPosition, _) => {
  const componentCallBackfn = (state) => {
    let html = `<img src="./build/assets/img/generic-avatar.webp" alt="" />`;
    if (state >= 0) {
      html = candidateState.getState()[state].basics.image
        ? `<img src="${
            candidateState.getState()[state].basics.image
          }" alt="" />`
        : `<img src="./build/assets/img/generic-avatar.webp" alt="" />`;
    }
    hsot.innerHTML = "";
    hsot.insertAdjacentHTML(insertPosition, html);
  };
  componentCallBackfn(-1);
  candidateIndexState.addListener(componentCallBackfn);
};
