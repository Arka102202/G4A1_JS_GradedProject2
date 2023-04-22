import { Hobbies } from "./Hobbies.js";
import { PersonalInfo } from "./PersonalInfo.js";
import { TechnicalSkill } from "./TechnicalSkill.js";
export const ResumeAside = (host, insertPosition, _) => {
  const html = `<div class="resume-aside personal-info">
      </div>
      <div class="resume-aside technical-skill">
      </div>
      <div class="resume-aside hobbies">
      </div>`;
  host.insertAdjacentHTML(insertPosition, html);
  const personalInfoHost = document.querySelector(".personal-info");
  const technicalSkillHost = document.querySelector(".technical-skill");
  const hobbiesHost = document.querySelector(".hobbies");
  PersonalInfo(personalInfoHost, "beforeend", {});
  TechnicalSkill(technicalSkillHost, "beforeend", {});
  Hobbies(hobbiesHost, "beforeend", {});
};
