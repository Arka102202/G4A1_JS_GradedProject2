import { Data } from "../data/data.js";
export const NavSearchBox = (host, insertPosition, _) => {
    const html = `<input type="search" name="searchItem" id="search" placeholder="search by jobs"/>`;
    host.insertAdjacentHTML(insertPosition, html);
    const searchEl = document.getElementById("search");
    searchEl.addEventListener("keypress", (event) => {
        let queryKey;
        if (event.key === "Enter") {
            queryKey = event.target.value;
            Data.resume.filter((item) => item.basics.AppliedFor === queryKey);
        }
    });
    searchEl.addEventListener("input", (event) => {
        console.log(event.target.value);
    });
};
//# sourceMappingURL=NavSearchBox.js.map