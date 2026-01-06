export function isSafeToHike(temperature, windSpeed){
    if(temperature < 0 || temperature > 35){
        return {safe: false,
            message: "The weather is not good for walking."
        }
    }
    if(windSpeed >= 60){return {safe: false, message: "Too windy to hike!"}}
    return {
        "safe": true,
"message": "All conditions are good for hiking!"
    }
}