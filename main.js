
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify


    // Write your algorithm first, and then your code. Feel free to remove this comment
    //a for of loop that iterates each flower object
    //a conditional statement that pushes the object to the filteredFlowers array if the price property is less than 2
    for (let flower of flowers) {
        if (flower.price < 2.00) {
            filteredFlowers.push(flower)
        }
    }



    return filteredFlowers  // Do not modify

}

/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify


    //Iterate through each flower with a for of loop
    //use if statement to push flowers whose usdaZones property includes 3 and 8
    for (let flower of flowers) {
        if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
            filteredFlowers.push(flower)
        }
    }





    return filteredFlowers  // Do not modify
}



/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify



//Iterate through flowers using for of loop
//use conditional to push flower to array if colors property contains "Orange"
for (let flower of flowers) {
    if (flower.colors.includes("Orange")) {
        filteredFlowers.push(flower)
    }
}




    return filteredFlowers  // Do not modify
}



/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify


    /*
        Algorithmic thinking is most important on this one.
        We would rather see the correct algorithm than the
        correct code. If you have code that works, but no
        algorithm, then you failed the exercise.
    */
   
        /////allll wroononnggg!!!  MUST REFACTOR COMPLETELY!!!

   //start with a for of loop to iterate through each flower
   for (let flower of flowers) {

    //inside loop, add opening article tag and the "type" property to the string. surround type with <h1> tags.
    //follow with "Colors surrounded by <h2>."
     flowersHTMLString += `<article>\n   <h1>${flower.type}</h1>\n\n     <h2>Colors</h2>`  
    //nest a new for of loop which iterates through the "colors" property and adds each index surrounded by <section> tags.
        for (let color of flower.colors) {
           flowersHTMLString += `\n   <section>${color}</section>`
        }
    //add "<h2>USDA Zones</h2>"
    flowersHTMLString += "\n\n   <h2>USDA Zones</h2>"
    //nest another loop inside the first, this time interating through the usdaZones property and adding each item surrounded by <div> tags.
        for (let zone of flower.usdaZones) {
            flowersHTMLString += `\n    <div>${zone}</div>`
        }
    //add closing article tag
    flowersHTMLString += `\n</article>\n\n`

    //** use \n and spacing as needed to achieve desired format */
   }


    return flowersHTMLString  // Do not modify
}















































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

