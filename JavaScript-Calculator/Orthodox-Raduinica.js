// Code by github.com/AlexeiCrystal
function orthodoxRaduinica(year) {
    const mod19Result = year % 19;
    const mod4Result = year % 4;
    const mod7Result = year % 7;
    const phase1 = (19 * mod19Result + 15) % 30;
    const phase2 = (2 * mod4Result + 4 * mod7Result + 6 * phase1 + 6) % 7;
    let initialDay = 22 + phase1 + phase2;
    let initialMonth = 2;
    if (initialDay > 31) {
        initialMonth = 3;
        initialDay -= 31;
    }
    const tempDate = new Date(year, initialMonth, initialDay);
    tempDate.setDate(tempDate.getDate() + 13);
    tempDate.setDate(tempDate.getDate() + 9); 
    const adjustedDay = tempDate.getDate();
    const adjustedMonth = tempDate.getMonth() + 1;
    return `${adjustedDay}.${adjustedMonth}`;
}

function orthodoxRaduinicaDay(year) {
    const dateParts = orthodoxRaduinica(year).split('.');
    return parseInt(dateParts[0], 10);
}

function orthodoxRaduinicaMonth(year) {
    const dateParts = orthodoxRaduinica(year).split('.');
    return parseInt(dateParts[1], 10);
}

//Examples
console.log(orthodoxRaduinica(2025)); 
console.log('\n');    
// Input 2025; Output 29.4
console.log(orthodoxRaduinicaDay(2025));
console.log('\n');
//Input 2025; Output 29
console.log(orthodoxRaduinicaMonth(2025));
//Input 2025; Output 4
