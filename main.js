import { getLatLon } from "./location.js";
import readline from 'readline-sync';

async function getBusesByPostcode(postCode, stopTypes) {

    let postCodesAPIResponse = await fetch(`https://api.postcodes.io/postcodes/${postCode}/validate`);
    let postCodeResponse = await postCodesAPIResponse.json();

    //Validating the postcode
    if (postCodeResponse.result === true) {
        getLatLon(postCode, stopTypes);
    } else {
        console.log("Invalid PostCode");
    }
}

console.log('Please enter Postcode: ');
const responsePostCode = readline.prompt();
console.log('Please enter Stop Type: ');
const responseStopType = readline.prompt();
getBusesByPostcode(responsePostCode, responseStopType);
//getBusesByPostcode("RM112SU", "NaptanPublicBusCoachTram");