function orthodoxShrovetideStart(OrthodoxShrovetideYear) {
    const mod19Result = OrthodoxShrovetideYear % 19;
    const mod4Result = OrthodoxShrovetideYear % 4;
    const mod7Result = OrthodoxShrovetideYear % 7;
    const phase1 = (19 * mod19Result + 15) % 30;
    const phase2 = (2 * mod4Result + 4 * mod7Result + 6 * phase1 + 6) % 7;
    let initialDay = 22 + phase1 + phase2;
    let initialMonth = 2;
    
    if (initialDay > 31) {
        initialMonth = 3;
        initialDay -= 31;
    }
    
    const easterDate = new Date(OrthodoxShrovetideYear, initialMonth, initialDay);
    easterDate.setDate(easterDate.getDate() + 13);
    
    const shrovetideDate = new Date(easterDate);
    shrovetideDate.setDate(shrovetideDate.getDate() - 55);
    
    return `${shrovetideDate.getDate()}.${shrovetideDate.getMonth() + 1}`;
}

function orthodoxShrovetideEnd(OrthodoxShrovetideYear) {
    const mod19Result = OrthodoxShrovetideYear % 19;
    const mod4Result = OrthodoxShrovetideYear % 4;
    const mod7Result = OrthodoxShrovetideYear % 7;
    const phase1 = (19 * mod19Result + 15) % 30;
    const phase2 = (2 * mod4Result + 4 * mod7Result + 6 * phase1 + 6) % 7;
    let initialDay = 22 + phase1 + phase2;
    let initialMonth = 2;
    
    if (initialDay > 31) {
        initialMonth = 3;
        initialDay -= 31;
    }
    
    const easterDate = new Date(OrthodoxShrovetideYear, initialMonth, initialDay);
    easterDate.setDate(easterDate.getDate() + 13);
    
    const shrovetideDate = new Date(easterDate);
    shrovetideDate.setDate(shrovetideDate.getDate() - 49);
    
    return `${shrovetideDate.getDate()}.${shrovetideDate.getMonth() + 1}`;
}

function orthodoxShrovetideStartDay(year) {
    const result = orthodoxShrovetideStart(year).split('.');
    return parseInt(result[0], 10);
}

function orthodoxShrovetideStartMonth(year) {
    const result = orthodoxShrovetideStart(year).split('.');
    return parseInt(result[1], 10);
}

function orthodoxShrovetideEndDay(year) {
    const result = orthodoxShrovetideEnd(year).split('.');
    return parseInt(result[0], 10);
}

function orthodoxShrovetideEndMonth(year) {
    const result = orthodoxShrovetideEnd(year).split('.');
    return parseInt(result[1], 10);
}

//example
console.log(orthodoxShrovetideStart(2025));
console.log('\n');
// Input 2025; Output 24.2

console.log(orthodoxShrovetideStartDay(2025));
console.log('\n');
// Input 2025; Output: 24

console.log(orthodoxShrovetideStartMonth(2025));
console.log('\n');
// Input 2025; Output: 2


console.log(orthodoxShrovetideEnd(2025));
console.log('\n');
// Input 2025; Output: 2.3

console.log(orthodoxShrovetideEndDay(2025));
console.log('\n');
// Input 2025; Output: 2

console.log(orthodoxShrovetideEndMonth(2025));
// Input 2025; Output: 3
