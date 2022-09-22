import { baseUrl } from "../variables.js";

export default async function getHero() {
    const url = baseUrl + "api/home?populate=*";
    try {
        const response = await fetch(url);
        const json = await response.json();
        if (response.ok) {
            const heroText = json.data.attributes.hero_banner_alt_text;
            const heroImage = json.data.attributes.hero_banner.data.attributes.url;
            // may concider different sizes on different screens...
            const heroContainer = document.querySelector(".hero");
            const heroTextContainer = document.querySelector(".hero-text");
            heroContainer.style.backgroundImage = "URL(" + heroImage + ")";
            heroTextContainer.innerHTML = heroText;
        } else {
            // Display an error to the user.
        }
    } catch (error) {
        console.log("Error occured: " + error);
        // Display an error to the user.
    }
}
