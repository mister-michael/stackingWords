let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, puncuation, instances) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.
            

            Otherwise, just concatenate the word itself.
         */
        if ((i + 1) % 3 !== 0) {
        buildMeUp += (theWordArray[i] + " ");
        console.log(buildMeUp);
        } else if ((i + 1) % 3 === 0) {
            buildMeUp += (theWordArray[i]) + puncuation.repeat(instances) + " ";
            console.log(buildMeUp);
        }

        // Print buildMeUp to the console
    }

}

addExcitement(sentence, "*", 4);