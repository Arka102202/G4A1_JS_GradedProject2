export const ShowPassword = (host, insertPosition, props) => {
    const html = `<img src="./src/assets/logo/${props.img}" alt="" />`;
    host.innerHTML = "";
    host.insertAdjacentHTML(insertPosition, html);
};
//# sourceMappingURL=ShowPassword.js.map