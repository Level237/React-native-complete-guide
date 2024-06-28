export function getFormatedDate(date){
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

export function getDateMinusDays(date,days){
    return Date(date.getFullYear(),date.getMonth(),date.getDate() - days);
}