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