var wakeDog = function(dogName="Byron", dogBreed="poodle") {
    return `Wake ${dogName} the ${dogBreed}`
  }
  
  var leashDog = function(dogName="Byron", dogBreed="poodle") {
    return `Leash ${dogName} the ${dogBreed}`
  }
  
  var walkToPark = function(dogName="Byron", dogBreed="poodle") {
    return `Walk to the park with ${dogName} the ${dogBreed}`
  }
  
  var throwFrisbee = function(dogName="Byron", dogBreed="poodle") {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
  }
  
  var walkHome = function(dogName="Byron", dogBreed="poodle") {
    return `Walk home with ${dogName} the ${dogBreed}`
  }
  
  var unleashDog = function(dogName="Byron", dogBreed="poodle") {
    return `Unleash ${dogName} the ${dogBreed}`
  }
  
  const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]


function exerciseDog(dogName, dogBreed){
    return routine.map(element => element(dogName, dogBreed))
}

let exercises = exerciseDog('toby', 'yorkshire')
console.log(exercises)