export function handleAge (age) {
    var [year, month, date] = age.split("-");
    var birthday = new Date(year, month, date);
    var ageDifference = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifference);
    
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

