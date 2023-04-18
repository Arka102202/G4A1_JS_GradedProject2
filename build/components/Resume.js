import { appState } from "../state/StateSlice.js";
export const Resume = (host, insertPosition, props) => {
    const componentCallBackfn = (state) => {
        const html = state
            ? `<article class="resume">
        <nav class="resume__nav">${"Resume navigation...."}</nav>
        <article class="resume__box">
          <div class="resume__box__header">
            <div class="resume__box__header__headings">
              ${"Resume headings"}
            </div>
            <div class="resume__box__header__img">${"Generic avatar img"}</div>
          </div>
          <div class="resume__box__body">
            <aside class="resume__box__body__aside">
              ${"Resume aside......"}
            </aside>
            <main class="resume__box__body__main">
              ${"Resume Main"}
            </main>
          </div>
        </article>
    </article>`
            : "";
        host.insertAdjacentHTML(insertPosition, html);
    };
    componentCallBackfn(props.appState);
    appState.addListener(componentCallBackfn);
};
//# sourceMappingURL=Resume.js.map