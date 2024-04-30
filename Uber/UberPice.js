class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distanceInMiles, durationInMinutes) {
        const totalFare = this.baseFare + (this.costPerMile * distanceInMiles) + (this.costPerMinute * durationInMinutes) + this.bookingFee;
        return totalFare;
    }
}

let myUber = new UberPriceCalculator(10, 20, 1, 5);
let distance = 5;
let duration = 15;
let fare = myUber.calculatePrice(distance, duration);

console.log(`The estimated Uber fare for a ${distance}-mile ride taking ${duration} minutes is ${fare}.`);
