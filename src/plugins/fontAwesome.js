import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faWhatsappSquare,
    faFacebookSquare,
    faInstagramSquare,
    faYoutubeSquare
  } from "@fortawesome/free-brands-svg-icons";
  
import { faBars, 
    faCheck, 
    faAward, 
    faPhoneVolume, 
    faSyringe, 
    faHeadSideMask, 
    faHospital, 
    faArrowUp,
    faArrowLeft,
    faArrowRight
  } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
faBars,
faCheck,
faAward,
faPhoneVolume,
faSyringe,
faHeadSideMask,
faHospital,
faArrowUp,
faArrowLeft,
faArrowRight,
faFacebookSquare,
faInstagramSquare,
faWhatsappSquare,
faYoutubeSquare
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
