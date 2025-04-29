// Code by github.com/AlexeiCrystal
function catholicTrinity(year) {
    const mod19Result = year % 19;
    const centuryQuotient = Math.floor(year / 100);
    const yearInCentury = year % 100;
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
    const easterDate = new Date(year, computedMonth - 1, computedDay);
    
   const trinityDate = new Date(easterDate);
    trinityDate.setDate(trinityDate.getDate() + 49);
    
    return `${trinityDate.getDate()}.${trinityDate.getMonth() + 1}`;
}

function catholicTrinityDay(year) {
    return parseInt(catholicTrinity(year).split('.')[0], 10);
}

function catholicTrinityMonth(year) {
    return parseInt(catholicTrinity(year).split('.')[1], 10);
}

// Examples
console.log(catholicTrinity(2025)); 
console.log('\n');    
//Input 2025; Output 8.6
console.log(catholicTrinityDay(2025));  
console.log('\n');
//Input 2025; Output 8
console.log(catholicTrinityMonth(2025));
//Input 2025; Output 6
