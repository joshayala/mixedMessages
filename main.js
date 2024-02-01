// Mixed Messages Project - A Random Message Generator - 'Auto MadLibs'
// The Array from which the MadLibs will generate
const madLibMaterial = {
    Subjects: ['porcupine ', 'mailmain ', 'walrus ', 'pilot ',
             'racoon ', 'toddler ', 'orangutan ', 'college student '],
    Desires: ['wants to ', 'aspires to ', 'hopes to ', 'loves to ', 
                'has to ', 'forgets to ', 'hates to '],
    Action: ['run ', 'jump ', 'crawl ', 'swim ', 'play ', 'sing '],
    Place: ['to a hotel ', 'on a boat ', 'in a river ', 'to a restaurant ', 
            'in a playpin ', 'at a farmer\'s market ', 'in a car '],
    Durration: ['weekly', '3 times a week', 'every other month', 
                '5 times a year', 'once in a lifetime', 'once in a blue moon']
}

//This Function will randomly select a string from each array within madLibMaterial
const randomString = (array) => array[Math.floor(Math.random() * array.length)];

//This function will put put all the strings together into a Madlib
const autoMadlib = () => {
    let theString = "";

    for (thing in madLibMaterial) {
        theString += randomString(madLibMaterial[thing]);
    }
    console.log("Did you know, every " + theString + "!");
}

//This Runs the Program
autoMadlib();