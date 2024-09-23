import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

//@ts-expect-error This *is* correct upstream type issue ;D
library.add(faGithub, faTwitter, faDiscord, faRightLong);
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
