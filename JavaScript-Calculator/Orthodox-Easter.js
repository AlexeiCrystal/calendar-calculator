//Code by github.com/AlexeiCrystal
function calculateOrthodoxEaster(OrthodoxEasterCalculateYear) {
    const mod19Result = OrthodoxEasterCalculateYear % 19;
    const mod4Result = OrthodoxEasterCalculateYear % 4;
    const mod7Result = OrthodoxEasterCalculateYear % 7;
    const phase1 = (19 * mod19Result + 15) % 30;
    const phase2 = (2 * mod4Result + 4 * mod7Result + 6 * phase1 + 6) % 7;
    let initialDay = 22 + phase1 + phase2;
    let initialMonth = 2;
    if (initialDay > 31) {
        initialMonth = 3; 
        initialDay -= 31;
    }
    const tempDate = new Date(OrthodoxEasterCalculateYear, initialMonth, initialDay);
    tempDate.setDate(tempDate.getDate() + 13);
    const adjustedDay = tempDate.getDate();
    const adjustedMonth = tempDate.getMonth() + 1;
    return `${adjustedDay}.${adjustedMonth}`;
}

function getOrthodoxEasterDay(OrthodoxEasterCalculateYear) {
    const orthodoxDateResult = calculateOrthodoxEaster(OrthodoxEasterCalculateYear);
    return parseInt(orthodoxDateResult.split('.')[0], 10);
}

function getOrthodoxEasterMonth(OrthodoxEasterCalculateYear) {
    const orthodoxDateResult = calculateOrthodoxEaster(OrthodoxEasterCalculateYear);
    return parseInt(orthodoxDateResult.split('.')[1], 10);
}

// Examples
console.log(calculateOrthodoxEaster(2025)); 
console.log('\n');
// Input 2025; Output 20.4

console.log(getOrthodoxEasterDay(2025));
console.log('\n');
// Input 2025; Output 20

console.log(getOrthodoxEasterMonth(2025));  
// Input 2025; Output 4
