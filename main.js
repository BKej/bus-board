import { getLatLon } from "./location.js";


function getBusesByPostcode(postCode, stopTypes) {
    getLatLon(postCode, stopTypes);
}

getBusesByPostcode("RM112SU", "NaptanPublicBusCoachTram");