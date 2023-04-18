export const Resume = (host, insertPosition, props) => {
    const html = props?.appState
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
//# sourceMappingURL=Resume.js.map