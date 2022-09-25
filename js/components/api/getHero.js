import { baseUrl, heroContainer, heroTextContainer } from "../variables.js";

export default async function getHero() {
    const url = baseUrl + "api/home?populate=*";
    try {
        const response = await fetch(url);
        const json = await response.json();
        if (response.ok) {
            const heroText = json.data.attributes.hero_banner_alt_text;
            const heroImage = json.data.attributes.hero_banner.data.attributes.url;
            heroContainer.style.backgroundImage = "URL(" + heroImage + ")";
            heroTextContainer.innerHTML = heroText;
        } else {
            throw "Error!";
        }
    } catch (error) {
        // Instead of showing an error we just hide the element.
        heroContainer.style.display = "none";
    }
}
