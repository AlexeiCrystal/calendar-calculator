//Code by github.com/AlexeiCrystal
function orthodoxTrinity(YearForPentecostComputation) {
    const PaschalCycleRemainder = YearForPentecostComputation % 19;
    const SolarCycleRemainder = YearForPentecostComputation % 4;
    const WeekdayOffset = YearForPentecostComputation % 7;
    const LunarPhaseShift = (19 * PaschalCycleRemainder + 15) % 30;
    const SolarPhaseAdjustment = (2 * SolarCycleRemainder + 4 * WeekdayOffset + 6 * LunarPhaseShift + 6) % 7;
    
    let PaschalFullMoonDay = 22 + LunarPhaseShift + SolarPhaseAdjustment;
    let PaschalFullMoonMonth = 2; if (PaschalFullMoonDay > 31) {
        PaschalFullMoonMonth = 3;
        PaschalFullMoonDay -= 31;
    }
    const JulianToGregorianShift = new Date(
        YearForPentecostComputation, 
        PaschalFullMoonMonth, 
        PaschalFullMoonDay + 13
    );
    const PentecostDate = new Date(JulianToGregorianShift);
    PentecostDate.setDate(PentecostDate.getDate() + 49);
    const PentecostDayValue = PentecostDate.getDate();
    const PentecostMonthValue = PentecostDate.getMonth() + 1;
    
    return `${PentecostDayValue}.${PentecostMonthValue}`;
}

function orthodoxTrinityDay(YearToExtractPentecostDay) {
    const PentecostDateComponents = orthodoxTrinity(YearToExtractPentecostDay).split('.');
    return parseInt(PentecostDateComponents[0], 10);
}

function orthodoxTrinityMonth(YearToExtractPentecostMonth) {
    const PentecostDateSegments = orthodoxTrinity(YearToExtractPentecostMonth).split('.');
    return parseInt(PentecostDateSegments[1], 10);
}


//examples
console.log(orthodoxTrinity(2025));
console.log('\n');
 // Input 2025; Output 8.6
 
console.log(orthodoxTrinityDay(2025));  
console.log('\n');
// Input 2025; Output 8

console.log(orthodoxTrinityMonth(2025));
//Input 2025; Output 6
