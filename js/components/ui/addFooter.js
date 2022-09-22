import { footerContainer } from "../variables.js";

export default function addFooter() {
    footerContainer.innerHTML = `
    <div class="footer__section">
        <i class="fa-brands fa-square-facebook footer__section-someicon" ></i>
        <i class="fa-brands fa-square-instagram footer__section-someicon"></i>
        <i class="fa-brands fa-square-snapchat footer__section-someicon"></i>
    </div>
    <div class="footer_section">
        <p class="footer__section-info">Org.nr: 987 654 321</p>
    </div>
    <div class="footer_section">
        <p class="footer__section-info">&copy; 2022</p>
        <p class="footer__section-info">Stian Martinsen-Stormyr</p>
    </div>`;
}
