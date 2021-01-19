import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faYoutube,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import FontAwesomeIcon from '@/libs/FontAwesomeIcon.vue';

library.add(fas, faYoutube, faGithub, faInstagram);

export default FontAwesomeIcon;
