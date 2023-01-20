import { getLatLon } from "./location.js";
import { getStopCodes } from "./busStopCode.js";
import readline from 'readline-sync';

/*Program to get 5 buses due on the two nearest bus stops from the Postcode provided by the User from console */
async function getBusesByPostcode(responsePostCode) {

    //Fetching API Response if user passed the correct Postcode
    let postCodesAPIResponse = await fetch(`https://api.postcodes.io/postcodes/${responsePostCode}/validate`);
    let postCodeResponse = await postCodesAPIResponse.json();

    //Validating the postcode
    if (postCodeResponse.result) { //if true

        //Calling function to get Latitude and longitude 
        let latlon = await getLatLon(responsePostCode);

        //Calling function to get two nearby Bus Stops
        getStopCodes(latlon[0], latlon[1]);

    } else {
        console.log("Invalid PostCode");
    }
}

//Asking User to enter postcode
console.log('Please enter Postcode: ');
const responsePostCode = readline.prompt();
//Calling function...
getBusesByPostcode(responsePostCode);