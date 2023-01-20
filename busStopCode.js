import { getBusesTime } from "./arrivalBusTimes.js"

//Function to find nearest two bus stops based on latitude and longitude
export async function getStopCodes(lat, lon) {

    //Hardcoded Stop Type for buses which is retrived from TFL api
    let tflStopCodeAPIresponse = await fetch(`https://api.tfl.gov.uk/StopPoint/?lat=${lat}&lon=${lon}&stopTypes=NaptanPublicBusCoachTram`);
    let stopCodeData = await tflStopCodeAPIresponse.json();
    let stopCode;

    if (stopCodeData.stopPoints.length >= 2) { //Incase when there are more or euqal to 2 bus stops
        for (let i = 0; i < 2; i++) {
            stopCode = stopCodeData.stopPoints[i].id;
            //Calling function to retrieve due buses on the stop
            getBusesTime(stopCode);
        }
    } else if (stopCodeData.stopPoints.length === 1) { //Incase when there is only 1 bus stop nearby
        //Calling function to retrieve due buses on the stop
        stopCode = stopCodeData.stopPoints[0].id;
        getBusesTime(stopCode);
    } else {
        console.log("There is no bus stop near your provided Postcode!!");
    }
}