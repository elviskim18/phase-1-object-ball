function gameObject(){
    return {
        home :{
            teamName: "Brooklyn Nets",
            colors :["White", "Black"],
            players : {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                },
    
            },
    
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players:{
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                },
            }
        }
    }
}
 
function homeTeamName() {
    
    return gameObject()['home']['teamName']
}
/*number of points scored*/
function numPointsScored(playersName){
    const gamedata = gameObject()
    for(let element of gamedata){
        const teamdata = gamedata[element]
        const data = teamdata.players;
          for(const key in data){
              const player = key;
              if(player === playersName){
                  const points = data[key].points
                  return `${playersName} has ${points}`
              }
          }

    }

}
/*shoesize*/
function shoeSize(playersName){
    const gamedata = gameObject()
    for(let element of gamedata){
        const teamdata = gamedata[element]
        const data = teamdata.players;
          for(const key in data){
              const player = key;
              if(player === playersName){
                  const playerShoeSize = data[key][shoe]
                  return `${playersName} shoe size is : ${playerShoeSize}`
              }
          }
    }
}
shoeSize()
/*team colors*/
function teamColors(nameOfTeam){
    const gamedata = gameObject()
    for(let element of gamedata){
        const teamdata = gamedata[element]
        const teamName = teamdata.teamName
        const teamcolors = teamdata.colors;
        if(teamName === nameOfTeam){
            return `${nameOfTeam} colors are : [${teamColors}]`
        }
    }
}
teamColors();

/* team names*/
function teamNames(){
    const gamedata = gameObject()
    const nameArray = []
    for(let element of gamedata){
        const teamdata = gamedata[element];
        const nameOfTeam = teamdata.teamName;
        nameArray.push(`${nameOfTeam}`)
    }
    return nameArray
}
teamNames();

function playerNumbers(name) {
    const game = gameObject();
    const teamPlayerNumbers = [];
    for(const gameKey in game ){
        const teamObj = game[gameKey];
        const teamName = teamObj.teamName;
        const data = teamObj.players;
        if(teamName === name){
          for(const key in data){
              const number = data[key].number;
            teamPlayerNumbers.push(`${number}`)
          }
        }
    }
    return `Jersey numbers for ${name} are [${teamPlayerNumbers}]`;
}
playerNumbers();

// function to display players stats
function playerStats (names) {
    const game = gameObject();
    for(const gameKey in game ){
        const teamObj = game[gameKey];
        const data = teamObj.players;
        for(const key in data){
            const player = key;
            if( player === names){
              return data[key]
            }
        }
    }
}
playerStats();

function bigShoeRebounds (){
    const game = gameObject();
    for(const gameKey in game){
        const teamObj = game[gameKey];
        const data = teamObj.players;
        
        for(const key in data){
            console.log(data[key])
            const player = key;
            const shoeSize = data[key].shoe;
        //    const maxShoes = shoeSize.reduce((accumulator, element) => Math.max(accumulator, element))
           
        }
    }
}

bigShoeRebounds()