import { NavButton } from "./NavButton.js";
import { NavSearchBox } from "./NavSearchBox.js";
export const ResumeNav = (host, insertPosition) => {
    const html = `<div class="btn-prev-box">
        <button class="btn-prev">Prev</button>
      </div>
      <div class="nav-search-box"></div>
      <div class="btn-next-box">
        <button class="btn-next">Next</button>
      </div>`;
    host.insertAdjacentHTML(insertPosition, html);
    const searchBoxnHost = document.querySelector(".nav-search-box");
    NavButton("prev");
    NavSearchBox(searchBoxnHost, "beforeend", {});
    NavButton("next");
};
//# sourceMappingURL=ResumeNav.js.map