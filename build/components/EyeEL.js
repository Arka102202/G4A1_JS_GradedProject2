export const EyeEl = (host, insertPosition, props) => {
    const img = props?.pState ? "eye-with-eyelash.png" : "eyelash.png";
    const html = `<img src="./src/assets/logo/${img}" alt="" />`;
    host.innerHTML = "";
    host.insertAdjacentHTML(insertPosition, html);
};
//# sourceMappingURL=EyeEL.js.map