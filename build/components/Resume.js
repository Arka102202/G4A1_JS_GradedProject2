import { Data } from "../data/data.js";
import { candidateState } from "../state/MuiltiValuedStateSlice.js";
import { appState, candidateIndexdState } from "../state/StateSlice.js";
import { ResumeNav } from "./ResumeNav.js";
import { ResumeHeadings } from "./ResumeHeadings.js";
import { ResumeAside } from "./ResumeAside.js";
import { ResumeMain } from "./ResumeMain.js";
export const Resume = (host, insertPosition, props) => {
    const componentCallBackfn = (state) => {
        const html = state
            ? `<article class="resume">
        <nav class="resume__nav"></nav>
        <article class="resume__box">
          <div class="resume__box__header">
            <div class="resume__box__header__headings">
            </div>
            <div class="resume__box__header__img">
              <img src="./src/assets/img/generic-avatar.webp" alt="" />
            </div>
          </div>
          <div class="resume__box__body">
            <aside class="resume__box__body__aside">
            </aside>
            <main class="resume__box__body__main">
            </main>
          </div>
        </article>
    </article>`
            : "";
        host.insertAdjacentHTML(insertPosition, html);
        if (state) {
            const resumeNavHost = document.querySelector(".resume__nav");
            const resumeHeadingsHost = document.querySelector(".resume__box__header__headings");
            const resumeAsideHost = document.querySelector(".resume__box__body__aside");
            const resumeMainHost = document.querySelector(".resume__box__body__main");
            ResumeNav(resumeNavHost, "beforeend", {});
            ResumeHeadings(resumeHeadingsHost, "afterbegin", {});
            ResumeAside(resumeAsideHost, "afterbegin", {});
            ResumeMain(resumeMainHost, "afterbegin", {});
            candidateState.addState(Data.resume);
            candidateIndexdState.setState(0);
        }
    };
    componentCallBackfn(props.appState);
    appState.addListener(componentCallBackfn);
};
//# sourceMappingURL=Resume.js.map