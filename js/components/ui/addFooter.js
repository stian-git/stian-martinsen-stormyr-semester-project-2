import { footerContainer } from "../variables.js";

export default function addFooter() {
    footerContainer.innerHTML = `
    <div class="footer_some">
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-square-snapchat"></i>
    </div>
    <div>Org.nr: 987 654 321</div>
    <div>
        <p>&copy; 2022</p>
        <p>Stian Martinsen-Stormyr</p>
    </div>`;
}
