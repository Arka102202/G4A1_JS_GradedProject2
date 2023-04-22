import { Data } from "../data/data.js";
import { candidateState } from "../state/MultiValuedStateSlice.js";
import { appState, candidateIndexState } from "../state/StateSlice.js";
import { ResumeBox } from "./ResumeBox.js";
import { ResumeNav } from "./ResumeNav.js";
export const Resume = (host, insertPosition, props) => {
  const componentCallBackfn = (state) => {
    if (!state) return;
    const html = `<article class="resume">
        <nav class="resume__nav"></nav>
        <article class="resume__box">
        </article>
    </article>`;
    host.innerHTML = "";
    host.insertAdjacentHTML(insertPosition, html);
    if (state) {
      const resumeNavHost = document.querySelector(".resume__nav");
      const resumeBoxHost = document.querySelector(".resume__box");
      ResumeNav(resumeNavHost, "beforeend", {});
      ResumeBox(resumeBoxHost, "beforeend", { state: true });
      candidateState.addState(Data.resume);
      candidateIndexState.setState(0);
    }
  };
  componentCallBackfn(props.appState);
  appState.addListener(componentCallBackfn);
};
