import { ResumeHeadings } from "./ResumeHeadings.js";
import { ResumeAside } from "./ResumeAside.js";
import { ResumeMain } from "./ResumeMain.js";
import { candidateIndexState, resultState } from "../state/StateSlice.js";
import { Data } from "../data/data.js";
import { candidateState } from "../state/MultiValuedStateSlice.js";
import { ResumeImg } from "./ResumeImg.js";
export const ResumeBox = (host, insertPosition, props) => {
  const componentCallBackfn = (state) => {
    const html = state
      ? `<div class="resume__box__header">
            <div class="resume__box__header__headings">
            </div>
            <div class="resume__box__header__img">
            </div>
          </div>
          <div class="resume__box__body">
            <aside class="resume__box__body__aside">
            </aside>
            <main class="resume__box__body__main">
            </main>
          </div>`
      : `<div class="resume__box__error">
            <img src="./build/assets/img/page-not-found.webp" alt="" />
            <button id="go-back">Back</button>
          </div>`;
    host.innerHTML = "";
    host.insertAdjacentHTML(insertPosition, html);
    if (state) {
      const resumeHeadingsHost = document.querySelector(
        ".resume__box__header__headings"
      );
      const resumeImgHost = document.querySelector(".resume__box__header__img");
      const resumeAsideHost = document.querySelector(
        ".resume__box__body__aside"
      );
      const resumeMainHost = document.querySelector(".resume__box__body__main");
      ResumeHeadings(resumeHeadingsHost, "afterbegin", {});
      ResumeImg(resumeImgHost, "afterbegin", {});
      ResumeAside(resumeAsideHost, "afterbegin", {});
      ResumeMain(resumeMainHost, "afterbegin", {});
    } else {
      document.getElementById("go-back").onclick = clickHandler;
    }
    function clickHandler() {
      document.getElementById("search").value = "";
      candidateState.addState(Data.resume);
      resultState.setState(true);
      candidateIndexState.setState(0);
    }
  };
  componentCallBackfn(props.state);
  resultState.addListener(componentCallBackfn);
};
