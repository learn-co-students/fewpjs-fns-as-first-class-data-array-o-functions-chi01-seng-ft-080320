function wakeDog(dogName, dogBreed) {
    let walk = `Wake ${dogName} the ${dogBreed}`
    console.log(walk)
    return walk 
}
function leashDog(dogName, dogBreed) {
    let leash = `Leash ${dogName} the ${dogBreed}`
    console.log(leash)
    return leash 
}

function walkToPark(dogName, dogBreed) {
    let toPark = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(toPark)
    return toPark
}

function throwFrisbee(dogName, dogBreed) {
    let frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(frisbee)
    return frisbee
}

function walkHome(dogName, dogBreed) {
    let home = `Walk home with ${dogName} the ${dogBreed}`
    console.log(home)
    return home
}

function unleashDog(dogName, dogBreed) {
    let unleash = `Unleash ${dogName} the ${dogBreed}`
    console.log(unleash)
    return unleash 
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let result = []
    for (let i = 0; i < routine.length; i++) {
    routine[i] = routine[i](dogName, dogBreed)
    result.push(routine[i])
    }
    return result 
}