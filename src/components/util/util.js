const MAX_NUMBER_BETS = 35;
const NUMBER_PER_BET = 15;

const betGenerator = (excludes = {}) => {
    let numbersExcludes = Object.values(excludes);
    let bets = [];
    while (bets.length < (MAX_NUMBER_BETS + 1)) {
        let possiblesNumbers = ALLOWED_NUMBERS.filter(x => !numbersExcludes.includes(x));
        let numbers = shuffle(possiblesNumbers).slice(0, NUMBER_PER_BET).sort((a,b) => {return a - b});
        let exists = bets.find((bet) => {
            return JSON.stringify(bet.sort((a,b) => {return a - b})) === JSON.stringify(numbers)
        })
        if (!exists) {
            bets.push(numbers);
        }
    }
    return bets;
};

const shuffle = (array) => {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    
    return array;
}

const getSequenceArray = (length) => {
    return Array.from(Array(length)
    .keys())
    .map((key) => {
        return key + 1
    });
}

const ALLOWED_NUMBERS = getSequenceArray(25);

export default { betGenerator, getSequenceArray, ALLOWED_NUMBERS, MAX_NUMBER_BETS, NUMBER_PER_BET };