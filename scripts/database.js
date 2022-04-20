/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            species: "trout", 
            name: "Bart",
            color: "rainbow",
            food: "crustaceans",
            length: 14,
            region: "Atlantic",
            harvestedDate:"Jan 2022"
        },
        {
            species: "clown", 
            name: "Nemo",
            color: "orange",
            food: "crustaceans",
            length: 6,
            region: "pacific",
            harvestedDate:"July 2002"
        },
        {
            species: "Shark", 
            name: "Jaws",
            color: "silver",
            food: "everything",
            length: 100,
            region: "Atlantic",
            harvestedDate:"August 1987"
        },
        {
            species: "Bass", 
            name: "Billy",
            color: "green",
            food: "worms",
            length: 5,
            region: "lake",
            harvestedDate:"September 1999"
        },
        {
            species: "flounder", 
            name: "Flounder",
            color: "yellow",
            food: "crustaceans",
            length: 3,
            region: "Atlantic",
            harvestedDate:"December 1997"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

