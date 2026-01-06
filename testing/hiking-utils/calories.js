export function caloriesBurned(weightInKg, distanceInKm) {
    if(typeof weightInKg !== "number" || typeof distanceInKm !== "number"){
        throw new Error("Only numbers can be converted.")
    }
    if(weightInKg < 1 || distanceInKm < 1) {
        throw new Error("minimum 1")
    }
    return weightInKg * distanceInKm * 1.036;
}