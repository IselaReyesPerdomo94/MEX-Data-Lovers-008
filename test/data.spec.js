require('../src/data.js'); //funciones
require('../src/data/rickandmorty/rickandmorty.json'); //data

const mock = {
    "info": {
        "count": 493,
        "pages": 25,
        "next": "https://rickandmortyapi.com/api/character/?page=2",
        "prev": ""
    },
    "results": [{
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
    }, {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],
        "url": "https://rickandmortyapi.com/api/character/2",
        "created": "2017-11-04T18:50:21.651Z"
    }, {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],
        "url": "https://rickandmortyapi.com/api/character/3",
        "created": "2017-11-04T19:09:56.428Z"
    }, {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],
        "url": "https://rickandmortyapi.com/api/character/4",
        "created": "2017-11-04T19:22:43.665Z"
    }, {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],
        "url": "https://rickandmortyapi.com/api/character/5",
        "created": "2017-11-04T19:26:56.301Z"
    }]
};

//TEST filterData

describe('filterData', () => { //describe = palabra reservada que contiene las funciones para ejecutar los test.
    it('is a function', () => { // it = palabra reservada que contiene el enunciado en caso de que el test sea correcto o incorrecto (sentencia).
        expect(typeof filterData).toBe('function'); //test dentro de la palabra reservada expect.
    });

    it('returns `Rick Sanchez`', () => { //segunda sentencia
        expect(window.filterData('name', 'Rick', mock.results)[0].name).toBe('Rick Sanchez'); //Llama la función de filterData. Tiene 3 parametros(key, value, data)
    });

    it('returns `There are 1 Mortys`', () => {
        expect(window.filterData('name', 'Morty', mock.results).length).toBe(1);
    });
});

//TEST filterHuman

describe('filterHuman', () => { //describe = palabra reservada que contiene las funciones para ejecutar los test.
    it('is a function', () => { // it = palabra reservada que contiene el enunciado en caso de que el test sea correcto o incorrecto (sentencia).
        expect(typeof filterHumans).toBe('function'); //test dentro de la palabra reservada expect.
    });

    it('returns `There are 5 Humans`', () => { //segunda sentencia
        expect(window.filterHumans(mock.results).length).toBe(5); //Llama la función de filterData. Tiene 3 parametros(key, value, data)
    });

    it('returns `Should return Rick Sanchez, Morty Smith and Summer Smith as first humans`', () => {
        expect(window.filterHumans(mock.results)[0].name).toBe('Rick Sanchez');
        expect(window.filterHumans(mock.results)[1].name).toBe('Morty Smith');
        expect(window.filterHumans(mock.results)[2].name).toBe('Summer Smith');
    });
});



//TEST orderData


describe('sortData', () => {
    it('is a function', () => {
        expect(typeof sortData).toBe('function');
    });
    it('returns `Should return: Beth Smith, Jerry Smith and Morty Smith as the first three items from the array.`', () => {
        expect(window.sortData(mock.results, 'a-z')[0].name).toBe('Beth Smith');
        expect(window.sortData(mock.results, 'a-z')[1].name).toBe('Jerry Smith');
        expect(window.sortData(mock.results, 'a-z')[2].name).toBe('Morty Smith');
    });

    it('returns `Should return: Summer Smith, Rick Sanchez and Morty Smith as the firts three items from the array.`', () => {
        expect(window.sortData(mock.results, 'z-a')[0].name).toBe('Summer Smith');
        expect(window.sortData(mock.results, 'z-a')[1].name).toBe('Rick Sanchez');
        expect(window.sortData(mock.results, 'z-a')[2].name).toBe('Morty Smith');
    });
});

//Estadística con porcentajes
describe('statisticsPercentage', () => {
    it('is a function', () => {
        expect(typeof statisticsPercentage).toBe('function');
    });

    it('returns `Should return 20 % when asking porcentage of total Ricks`', () => {
        expect(window.statisticsPercentage('name', 'Rick', mock.results)).toBe(20);
    });

    it('returns`Should return 100% when asking porcentage of Humans`', () => {
        expect(window.statisticsPercentage('species', 'Human', mock.results)).toBe(100);
    });
});

//Estadística con valores
describe('statisticsValue', () => {
    it('is a function', () => {
        expect(typeof statisticsValue).toBe('function');
    });

    it('returns `Should return 3 when asking value of total men`', () => {
        expect(window.statisticsValue('gender', 'Male', mock.results)).toBe(3);
    });

    it('returns`Should return 5 when asking value of Humans`', () => {
        expect(window.statisticsValue('species', 'Human', mock.results)).toBe(5);
    });
    it('returns`Should return 0 when asking value of Humans`', () => {
        expect(window.statisticsValue('species', 'Alien', mock.results)).toBe(0);
    });
});