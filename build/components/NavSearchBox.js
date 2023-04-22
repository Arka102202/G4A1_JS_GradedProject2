import { Data } from "../data/data.js";
import { candidateState } from "../state/MultiValuedStateSlice.js";
import { candidateIndexState, resultState } from "../state/StateSlice.js";
export const NavSearchBox = (host, insertPosition, _) => {
  const html = `<input type="search" name="searchItem" id="search" placeholder="search by jobs"/>`;
  host.insertAdjacentHTML(insertPosition, html);
  const searchEl = document.getElementById("search");
  searchEl.addEventListener("keypress", (event) => {
    let queryKey;
    if (event.key === "Enter") {
      queryKey = event.target.value;
      if (!queryKey) return;
      const candidates = Data.resume.filter(
        (item) => item.basics.AppliedFor === queryKey
      );
      if (candidates.length === 0) {
        resultState.setState(false);
        candidateIndexState.setState(-1);
        return;
      }
      resetResumePage(candidates);
    }
  });
  searchEl.addEventListener("input", (event) => {
    if (!event.target.value) resetResumePage(Data.resume);
  });
  function resetResumePage(candidates) {
    candidateState.addState(candidates);
    resultState.setState(true);
    candidateIndexState.setState(0);
  }
};
