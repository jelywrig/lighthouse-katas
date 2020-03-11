let talkingCalendar = function(date) {
  
  return getMonth(date) + ' ' + Number(date.slice(8,10)) + getDateEnding(date) + ', ' + date.slice(0,4);

};


let getDateEnding = function (date){
  let day = Number(date.slice(8,10));

  if (day === 1 || day === 21 || day === 31){
    return 'st';
  } else if (day === 2 || day === 22){
    return 'nd';
  } else if (day === 3 || day === 23){
    return 'rd'
  } else {
    return 'th';
  }

}


let getMonth = function(date){
  let month = date.slice(5,7);
  
  switch (month) {
    case '01': return "January";
    case '02': return "February";
    case '03': return "March";
    case '04': return "April";
    case '05': return "May";
    case '06': return "June";
    case '07': return "July";
    case '08': return "August";
    case '09': return "September";
    case '10': return "October";
    case '11': return "November";
    case '12': return "December";
  }
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));