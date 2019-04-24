let beers = ['Space Dust', 'Bodhizafa', 'Lucille', 'Lagunitas', 'Juicy Haze'];

beers.push('Fremont InterUrban');

beers.splice(2,1);

let beerString = beers.join(",");

console.log(beers);

console.log(beerString);
