import { getBusesTime } from "./arrivalBusTimes.js"

export async function getStopCodes(lat, lon, stopTypes) {

    let tflStopCodeAPIresponse = await fetch(`https://api.tfl.gov.uk/StopPoint/?lat=${lat}&lon=${lon}&stopTypes=${stopTypes}`);
    let stopCodeData = await tflStopCodeAPIresponse.json();
    let stopCode;

    if (stopCodeData.stopPoints.length >= 2) {
        for (let i = 0; i < 2; i++) {
            stopCode = stopCodeData.stopPoints[i].id;
            getBusesTime(stopCode);
        }
    } else if (stopCodeData.stopPoints.length === 1) {
        stopCode = stopCodeData.stopPoints[0].id;
        getBusesTime(stopCode);
    } else {
        console.log("There is no bus stop near your provided Postcode!!");
    }
}