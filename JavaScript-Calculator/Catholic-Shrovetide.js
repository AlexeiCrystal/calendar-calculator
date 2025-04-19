// Code by github.com/AlexeiCrystal
function catholicShrovetideStart(CatholicShrovetideYear) {
    const mod19Result = CatholicShrovetideYear % 19;
    const centuryQuotient = Math.floor(CatholicShrovetideYear / 100);
    const yearInCentury = CatholicShrovetideYear % 100;
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
    
    const easterDate = new Date(CatholicShrovetideYear, computedMonth - 1, computedDay);
    
    const shrovetideDate = new Date(easterDate);
    shrovetideDate.setDate(shrovetideDate.getDate() - 55);
    
    return `${shrovetideDate.getDate()}.${shrovetideDate.getMonth() + 1}`;
}

function catholicShrovetideEnd(CatholicShrovetideYear) {
    const mod19Result = CatholicShrovetideYear % 19;
    const centuryQuotient = Math.floor(CatholicShrovetideYear / 100);
    const yearInCentury = CatholicShrovetideYear % 100;
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
    
    const easterDate = new Date(CatholicShrovetideYear, computedMonth - 1, computedDay);
    
    const shrovetideDate = new Date(easterDate);
    shrovetideDate.setDate(shrovetideDate.getDate() - 49);
    
    return `${shrovetideDate.getDate()}.${shrovetideDate.getMonth() + 1}`;
}

function catholicShrovetideStartDay(year) {
    const result = catholicShrovetideStart(year).split('.');
    return parseInt(result[0], 10);
}

function catholicShrovetideStartMonth(year) {
    const result = catholicShrovetideStart(year).split('.');
    return parseInt(result[1], 10);
}

function catholicShrovetideEndDay(year) {
    const result = catholicShrovetideEnd(year).split('.');
    return parseInt(result[0], 10);
}

function catholicShrovetideEndMonth(year) {
    const result = catholicShrovetideEnd(year).split('.');
    return parseInt(result[1], 10);
}


//examples
console.log(catholicShrovetideStart(2025));console.log('\n');
//Input 2025; Output 24.2

console.log(catholicShrovetideStartDay(2025));
console.log('\n');
//Input 2025; Output 24

console.log(catholicShrovetideStartMonth(2025));
console.log('\n');
//Input 2025; Output 2

console.log(catholicShrovetideEnd(2025));
console.log('\n');
//Input 2025; Output 2.3

console.log(catholicShrovetideEndDay(2025));
console.log('\n');
//Input 2025; Output 2

console.log(catholicShrovetideEndMonth(2025));
//Input 2025; Output 3
