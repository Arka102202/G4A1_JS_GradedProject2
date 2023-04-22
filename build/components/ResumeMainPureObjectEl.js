export const ResumeMainPureObjectEl = (host, insertPosition, props) => {
  const title = props.name;
  const info = props.info;
  let hasInnerObject = false;
  let html = `<h3>${title}</h3>
        <ul>`;
  html += "\n";
  for (const [key, value] of Object.entries(info)) {
    if (value) {
      html += `
        ${
          value instanceof Array
            ? `${value.reduce((p, c) => `${p}<li><p>${c}</p></li>`, "")}`
            : `<li class=resume-main-${key.replace(/ /g, "")}> ${
                typeof value === "object"
                  ? (hasInnerObject = true)
                  : `<span>${key} : </span> <p>${value}</p>`
              }`
        }
        </li>`;
      html += "\n";
    }
  }
  html += "</ul>";
  host.innerHTML = "";
  host.insertAdjacentHTML(insertPosition, html);
  if (hasInnerObject) {
    Object.entries(info).forEach((el) =>
      ResumeMainPureObjectEl(
        document.querySelector(`.resume-main-${el[0].replace(/ /g, "")}`),
        "afterbegin",
        { name: el[0], info: el[1] }
      )
    );
  }
};
