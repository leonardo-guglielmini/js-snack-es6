//Snack 1

function bike(name, weight) {
    this.name = name;
    this.weight = weight;
}

function checkBikeWeight(list) {
    let bikeWeight;
    let bikeWeightList = [];
    for (let i = 0; i < list.length; i++) {
        bikeWeight = list[i].weight;
        bikeWeightList.push(bikeWeight);
        //console.log(bikeWeight);
    }

    let lighter = 0;

    for (let num in bikeWeightList) {
        if (bikeWeightList[lighter] > bikeWeightList[num]) {
            lighter = num;
        }
    }
    //console.log(lighter);
    return lighter;
}

const bikeLighter = document.getElementById("bike-lighter");
const bikeList = [];

const bike1 = new bike("KTM mtb ultra", 13);
const bike2 = new bike("KTM mtb 2024", 11);
const bike3 = new bike("KTM mtb 2023", 10);
const bike4 = new bike("KTM mtb 2022", 8);
const bike5 = new bike("KTM mtb 2021", 9);

bikeList.push(bike1, bike2, bike3, bike4, bike5);
//console.log(bikeList);

const lighterBike = checkBikeWeight(bikeList);

bikeLighter.innerHTML = `${bikeList[lighterBike].name} | ${bikeList[lighterBike].weight} KG`;


//Snack 2

function team(name, points, fouls) {
    this.name = name;
    this.points = points;
    this.fouls = fouls;
}

function teamNew(name, fouls) {
    this.name = name;
    this.fouls = fouls;
}

function generateRandNum() {
    let randNum = Math.floor(Math.random() * (10) + 1);
    //console.log(randNum);
    return randNum;
}

const teamList = [];
const teamListNew = [];

const team1 = new team("Inter", generateRandNum(), generateRandNum());
const team2 = new team("Lazio", generateRandNum(), generateRandNum());
const team3 = new team("Milan", generateRandNum(), generateRandNum());
const team4 = new team("Roma", generateRandNum(), generateRandNum());
const team5 = new team("Atalanta", generateRandNum(), generateRandNum());

teamList.push(team1, team2, team3, team4, team5);

console.log(teamList);

for (let i = 0; i < teamList.length; i++) {
    let team = new teamNew(teamList[i].name, teamList[i].fouls)
    teamListNew.push(team);
}

console.log(teamListNew);



