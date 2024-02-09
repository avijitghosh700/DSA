function timeConversion(time) {
  let min = null;
  let hour = null;
  let sec = null;
  let PM = time.match('PM') ? true : false

  time = time.split(':')
  min = time[1];
  console.log(time, PM);

  if (PM) {
    hour = time[0] == '12' ? '12' : (12 + parseInt(time[0], 10));
    sec = time[2].replace('PM', '');
  } else {
    hour = time[0] == '12' ? '00' : time[0];
    sec = time[2].replace('AM', '');
  }

  // console.log((`${hour}:${min}:${sec}`));
  return (`${hour}:${min}:${sec}`);
}

console.log(timeConversion('10:45:54AM'));