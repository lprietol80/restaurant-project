

export  const getCurrentDate =()=>{
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  const year = today.getFullYear();

  // month and day to two digits
  month = month <10 ? `0${month}` : month
  day = day < 10 ? `0${day}` : day;
  return `${year}-${month}-${day}`

}