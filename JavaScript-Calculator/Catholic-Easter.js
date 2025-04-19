// Code by github.com/AlexeiCrystal
function calculateCatholicEaster(CatholicEasterCalculateYear) {
    const mod19Result = CatholicEasterCalculateYear % 19;
    const centuryQuotient = Math.floor(CatholicEasterCalculateYear / 100);
    const yearInCentury = CatholicEasterCalculateYear % 100;
    const centuryDiv4 = Math.floor(centuryQuotient / 4);
    const centuryMod4 = centuryQuotient % 4;
    const centuryAdjust = Math.floor((centuryQuotient + 8) / 25);
    const centuryAdjust2 = Math.floor((centuryQuotient - centuryAdjust + 1) / 3);
    const paschalFullMoonOffset = (19 * mod19Result + centuryQuotient - centuryDiv4 - centuryAdjust2 + 15) % 30;
    const yearInCenturyDiv4 = Math.floor(yearInCentury / 4);
    const yearInCenturyMod4 = yearInCentury % 4;
    const sundayOffset = (32 + 2 * centuryMod4 + 2 * yearInCenturyDiv4 - paschalFullMoonOffset - yearInCenturyMod4) % 7;
    const paschalAdjustment = Math.floor((mod19Result + 11 * paschalFullMoonOffset + 22 * sundayOffset) / 451);
    const computedMonth = Math.floor((paschalFullMoonOffset + sundayOffset - 7 * paschalAdjustment + 114) / 31);
    const computedDay = ((paschalFullMoonOffset + sundayOffset - 7 * paschalAdjustment + 114) % 31) + 1;
    const tempDate = new Date(CatholicEasterCalculateYear, computedMonth - 1, computedDay);
    const adjustedDay = tempDate.getDate();
    const adjustedMonth = tempDate.getMonth() + 1; 
    return `${adjustedDay}.${adjustedMonth}`;
}

function getCatholicEasterDay(CatholicEasterCalculateYear) {
    const catholicDateResult = calculateCatholicEaster(CatholicEasterCalculateYear);
    return parseInt(catholicDateResult.split('.')[0], 10);
}

function getCatholicEasterMonth(CatholicEasterCalculateYear) {
    const catholicDateResult = calculateCatholicEaster(CatholicEasterCalculateYear);
    return parseInt(catholicDateResult.split('.')[1], 10);
}

// Example
console.log(calculateCatholicEaster(2025));
console.log('\n');
//Input 2025; Output 20.4
console.log(getCatholicEasterDay(2025));    
console.log('\n');
// Input 2025; Output 20
console.log(getCatholicEasterMonth(2025));  
// Input 2025; Output 4
