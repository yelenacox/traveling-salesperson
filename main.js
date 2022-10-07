// You fill in some sample weekly miles traveled in this array
const milesTraveled = [4, 6, 6, 6, 6, 6, 4]

// Declare a variable to store the total. Initial value is 0.
let totalMiles = 0
/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (miles of milesTraveled) {
    totalMiles += miles
}

// Declare a new variable to store the average miles over time
const averageMiles = totalMiles / milesTraveled.length
// Output the average miles and the total miles to the console
console.log(`I average ${averageMiles} miles each week.
I have driven a total of ${totalMiles} miles.`)


