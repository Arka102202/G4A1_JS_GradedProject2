import { Data } from "../data/data.js";
import { candidateIndexState } from "../state/StateSlice.js";
import { ResumeMainPureObjectEl } from "./ResumeMainPureObjectEl.js";
export const ResumeMain = (host, insertPosition, _) => {
    const html = `<section class="resume-main-section work-experience"></section>
      <section class="resume-main-section projects"></section>
      <section class="resume-main-section education"></section>
      <section class="resume-main-section internship"></section>
      <section class="resume-main-section achievements"></section>
      `;
    host.insertAdjacentHTML(insertPosition, html);
    const componentCallBackfn = (state) => {
        const workExpHost = document.querySelector(".work-experience");
        const projectsHost = document.querySelector(".projects");
        const educationHost = document.querySelector(".education");
        const internshipHost = document.querySelector(".internship");
        const achievementsHost = document.querySelector(".achievements");
        const candidate = Data.resume[state];
        ResumeMainPureObjectEl(workExpHost, "beforeend", {
            name: "Work experience in previous company",
            info: candidate.work,
        });
        ResumeMainPureObjectEl(projectsHost, "beforeend", {
            name: "Projects",
            info: candidate.projects,
        });
        ResumeMainPureObjectEl(educationHost, "beforeend", {
            name: "Education",
            info: candidate.education,
        });
        ResumeMainPureObjectEl(internshipHost, "beforeend", {
            name: "Internship",
            info: candidate.Internship,
        });
        ResumeMainPureObjectEl(achievementsHost, "beforeend", {
            name: "Achievements",
            info: candidate.achievements,
        });
    };
    candidateIndexState.addListener(componentCallBackfn);
};
//# sourceMappingURL=ResumeMain.js.map