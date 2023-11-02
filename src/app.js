//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(name,age,currentteam,trophieswon){
  // let reqarray = [managerName, managerAge, currentTeam, trophiesWon]
  // console.log(reqarray)

  // return reqarray
  return [name,age,currentteam,trophieswon]
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation([defender,midfield,forward]){
  if(defender == undefined || midfield == undefined ){
    return null;
  }
  if( forward == undefined){
    formationObject = {
    defender: defender,
    midfield: midfield,
    forward: undefined
  }
  }
  else{
    formationObject = {
      defender: defender,
      midfield: midfield,
      forward: forward
    }
  }
  
  console.log(formationObject)
  return formationObject
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
// function filterByDebut(year){
//   let playersByDebut = []
//   players.forEach((player,index)=>{
//     if(player.debut===year){
//       playersByDebut.push(player)
//       // console.log(player) // log player data 
//     }
//   })
//   // console.log(playersByDebut)  // log filtered players array
//   return playersByDebut;
// }
function filterByDebut(year){
  let playersByDebut = []
  players.forEach((player)=>{
    if(player.debut==year){
      playersByDebut.push(player)
      // console.log(player) // log player data 
    }
  })
  // console.log(playersByDebut)  // log filtered players array
  return playersByDebut;
}


//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  let playersByPosition = []
  players.forEach((player,index)=>{
    if(player.position===position){
      playersByPosition.push(player)
      // console.log(player) // log player data 
    }
  })
  // console.log(playersByDebut)  // log filtered players array
  return playersByPosition;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardSearch){
  let playersByAward = []
  players.forEach((player,index)=>{
    let playerAwardArray = player.awards
    let hasAward = false
    playerAwardArray.forEach((awardRecieved,index)=>{
      if(awardRecieved.name === awardSearch){
        hasAward = true
        return
        // console.log(player)
      }
    })
    if(hasAward){playersByAward.push(player)}
  })
  // console.log(playersByAward)
  return playersByAward
}

// Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardSearch,times){
  let playersByAwardAndTimes = []
  players.forEach((player,index)=>{
    let playerAwardArray = player.awards
    let hasAward = false
    let count = 0
    playerAwardArray.forEach((awardRecieved,index)=>{
      if(awardRecieved.name === awardSearch){
        hasAward = true
        count +=1
        // console.log(player)
      }
    })
    if(hasAward){if(count==times){playersByAwardAndTimes.push(player)}}
  })
  // console.log(playersByAward)
  return playersByAwardAndTimes
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
// function filterByAwardxCountry(awardSearch,countrySearch){
//   let playersByAwardXCountry = []
//   players.forEach((player)=>{
//     let playerAwardArray = player.awards
//     let hasAward = false
//     let countryCheck = false
//     playerAwardArray.forEach((awardRecieved)=>{
//       if(awardRecieved == awardSearch){
//         hasAward = true
//         if(player.country == countrySearch){
//           countryCheck = true
//         }
//       }
//     })
//     if(countryCheck){if(hasAward){playersByAwardXCountry.push(player)}}
//   })
//   return playersByAwardXCountry
// }

function filterByAwardxCountry(awardSearch,countrySearch){
  let playersByAwardXCounrty = []
  players.forEach((player,index)=>{
    let playerAwardArray = player.awards
    let hasAward = false
    let countryCheck = false
    playerAwardArray.forEach((awardRecieved,index)=>{
      if(awardRecieved.name === awardSearch){
        hasAward = true
        if(player.country == countrySearch)
        countryCheck = true
        return
        // console.log(player)
      }
    })
    if(hasAward && countryCheck){playersByAwardXCounrty.push(player)}
  })
  // console.log(playersByAward)
  return playersByAwardXCounrty
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(awardNumber,teamName,age){
  let requiredArray = []
  players.forEach((player)=>{
    let playerAwards = player.awards.length
    if(player.team == teamName){
      if(player.age <= age){
        if(playerAwards >= 1 || playerAwards == awardNumber ){
          requiredArray.push(player)
        }
      }
    }
  })
  return requiredArray
}

//Progression 9 - Sort players in descending order of their age
function sortByAge() {
  return players.sort((a, b) => b.age - a.age);
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function sortByTeamxAwards(team){
  let teamArray = []
  players.forEach((player)=>{
    if(player.team == team){
      teamArray.push(player)
    }
  })
  return teamArray.sort((a,b)=> b.awards.length - a.awards.length)
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function sortByAwardxTimesxCountry(award,times,country){
  let teamArray = players.filter((player)=>{
    let count = 0
    for(let awards of player.awards){
      if(awards.name == award){
        count +=1
      }
    }
    // console.log(player)
    return count == times && player.country == country
  }) 
  return teamArray.sort((a,b)=> a.name.localeCompare(b.name));
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function sortByAgexAwardYear(age){
  let teamArray = players.filter((player)=>{
      return player.age >= age
  }).sort((a,b)=> a.name.localeCompare(b.name))
  teamArray.forEach((player)=>{
    player.awards.sort((a,b)=> b.year - a.year)
  })

  return teamArray
}