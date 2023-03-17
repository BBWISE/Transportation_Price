



function transportaionPrice(n, period) {
    /*
     * Validating the inputs' types
    */
    if (typeof n === 'number' && typeof period === 'string') {

        let prices = []; // Initializing the list of all calculated prices to null
        if (n >= 100) {
            prices.push((n * 0.06)); // Train price
            prices.push((n * 0.09)); // Bus price
            // Taxi price
            if (period.toLowerCase() == "day") {
                prices.push((n * 0.79));
            }
            else if (period.toLowerCase() == "night") {
                prices.push((n * 0.90));
            }
        }
        else if (n >= 20) {
            prices.push((n * 0.09)) // Bus price
            // Taxi price
            if (period.toLowerCase() == "day") {
                prices.push((n * 0.79));
            }
            else if (period.toLowerCase() == "night") {
                prices.push((n * 0.90));
            }
        }
        else {
            if (period.toLowerCase() == "day") {
                prices.push((n * 0.79) + 0.7);
            }
            else if (period.toLowerCase() == "night") {
                prices.push((n * 0.90) + 0.7);
            }
        }
        prices.sort(function (a, b) {
            return a - b;
        });
        return prices[0];

    }
    else {
        return NaN;
    }
}

// Testing the transportationPrice function
console.log(transportaionPrice(5, "DAY"));
console.log(transportaionPrice(7, "night"));
console.log(transportaionPrice(25, "day"));
console.log(transportaionPrice(180, "day"));