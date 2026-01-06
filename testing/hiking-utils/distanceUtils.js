import { error } from "node:console";

export function kmToMeters(km){
    if(typeof km !== "number"){throw Error("Only numbers can be converted.")}
    if(km < 0){throw new Error("The number cannot be less than 0.")}
    return km * 1000;
}