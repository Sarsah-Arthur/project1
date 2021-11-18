const PRODUCTS = [
    {
        id: 100,
        name: 'CyberPunk',
        price: 127,
        image: require('../assets/products/CyberPunk.png'),
        description: 'Cyberpunk is a tabletop role-playing game in the dystopian science fiction genre, written by Mike Pondsmith and first published by R. Talsorian Games in 1988. It is typically referred to by its second or fourth edition names, Cyberpunk 2020 and Cyberpunk Red, in order to distinguish it from the genre after which it is named.'
    },
    {
        id: 101,
        name: 'BattleField 4',
        price: 90,
        image: require('../assets/products/BattleField4.png'),
        description: 'Battlefield 4™ is the genre-defining action blockbuster made from moments that blur the line between game and glory. Fueled by the next-generation power and fidelity of Frostbite™ 3, Battlefield 4™ provides a visceral, dramatic experience unlike any other. Only in Battlefield can you demolish the buildings shielding your enemy.'
    },
    {
        id: 103,
        name: 'FIFA 22',
        price: 240,
        image: require('../assets/products/fifa21.png'),
        description: 'FIFA 22 is an association football simulation video game published by Electronic Arts as part of the FIFA series. It is the 29th installment in the FIFA series, and was released worldwide on 1 October 2021s.'
    },
    {
        id: 104,
        name: 'Mortal Kombat 11',
        price: 120,
        image: require('../assets/products/MortalKombat11.png'),
        description: 'Like the previous three games in the series, including MK Mobile, Mortal Kombat 11 is a 2.5D fighting game. Alongside the returning Fatalities, Brutalities, Stage Fatalities, Friendships and Quitalities, new gameplay features are introduced, such as Fatal Blows and Krushing Blows.'
    },
    {
        id: 105,
        name: 'Grand Theft Auto V',
        price: 13,
        image: require('../assets/products/GrandTheftAutoV.jpg'),
        description: 'Grand Theft Auto V is an epic open-world action game, giving the player complete freedom to explore the bustling city of Los Santos. Playing as a squad of uneasy allies, you will pull off massive heists and get down and dirty with the criminal element.'
    },
    {
        id: 106,
        name: 'BlackOpsColdWar',
        price: 269,
        image: require('../assets/products/BlackOpsColdWar.png'),
        description: 'The iconic black ops series is back with call of duty: Black ops cold war - the direct sequel to the original and fan-favorite call of duty: Black ops. Black ops cold war will drop fans into the depths of the cold war’s volatile geopolitical battle of the early 1980s.'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}