const zeroPad = (num, places) => String(num).padStart(places, '0')

export const dateStringToObj = (date, time) => {
    const [year, month, day] = date.split('-');
    const [hour, minutes,] =  time.split(':');

    return new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minutes));
}

export const dateObjToString = (date) => {
    const [year,month,day, hour, minutes] = [date.getFullYear(), date.getMonth()+1, date.getDate(), date.getHours(), date.getMinutes()]
    
    return [`${year}-${zeroPad(month,2)}-${zeroPad(day,2)}`,`${zeroPad(hour,2)}:${zeroPad(minutes,2)}`];
}