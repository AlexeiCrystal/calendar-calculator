//Code by github.com/AlexeiCrystal
function calculateOrthodoxEaster(year) {
    const a = year % 19;
    const b = year % 4;
    const c = year % 7;
    const d = (19 * a + 15) % 30;
    const e = (2 * b + 4 * c + 6 * d + 6) % 7;
    let day = 22 + d + e;
    let month = 2;
    if (day > 31) {
        month = 3; 
        day -= 31;
    }
    const date = new Date(year, month, day);
    date.setDate(date.getDate() + 13);
  const finalDay = date.getDate();
    const finalMonth = date.getMonth() + 1;
    return `${finalDay}.${finalMonth}`;
}

console.log(calculateOrthodoxEaster(2025))
//Input: 2025; output 20.4
