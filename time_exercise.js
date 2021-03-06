var minArr=["",
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine","ten", 
    "eleven","twelve","thirteen", "fourteen", "fifteen","sixteen", "seventeen","eighteen", "nineteen","twenty",
    "twenty one", "twenty two","twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine",
];
hourArr=["","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven","twelve"]

function getHourStr(hours, minutes){
    if (minutes <= 30) hourStr = hourArr[hours]
    else if (hours == 12) hourStr = hourArr[1]
    else hourStr=hourArr[hours+1]
    return hourStr
}
function getMinutesStr(minutes){
    if ((minutes/15===1)||(minutes/15===3)) return 'quarter'  
    else if(minutes/15===2) return 'half'
    return (minutes<30) ? minArr[minutes] : minArr[60-minutes] 
}
const inputValid = (hours, minutes) => (!((hours > 12 || hours < 1 || minutes > 60 || minutes < 0)||(typeof hours !== 'number'|| typeof minutes !== 'number')))
const specialCaseTest = minutes =>  (minutes===0)
const singularOrPlural = minutes => (minutes === 1 || minutes === 59) ? 'minute': 'minutes'
const toPast = (minutes) => (minutes >30) ? 'to':'past'
//main function
function convertTimeToWords(hours, minutes){
    if  (!inputValid(hours, minutes))  return (`\n Unable to convert the time given: Hour ${hours} `+` Minutes: ${minutes}`);
    if (specialCaseTest(minutes)) return getHourStr(hours, minutes) +" o' clock"
    if(minutes%15==0) return   (`${getMinutesStr(minutes)}`+` ${toPast(minutes)}`+` ${getHourStr(hours, minutes)}`)
    return (`${getMinutesStr(minutes)}`+` ${singularOrPlural(minutes)}`+` ${toPast(minutes)}`+` ${getHourStr(hours, minutes)}`)
}

//test cases
var passedCounter=0
if(convertTimeToWords(5,47) == "thirteen minutes to six")
{
    passedCounter+=1;
}
else{
    console.log(convertTimeToWords(5,47))
}
if(convertTimeToWords(3,0) == "three o' clock")
{
    passedCounter+=1;
}
else{
    console.log(convertTimeToWords(3,0))
}
if(convertTimeToWords(7,29) == "twenty nine minutes past seven")
{
    passedCounter+=1;
}
else{
    console.log(convertTimeToWords(7,29))
}

if(convertTimeToWords(5,30) == "half past five")
{
    passedCounter+=1;
}
else{
    console.log(convertTimeToWords(5,30))
}
if(convertTimeToWords(5,45) == "quarter to six")
{
    passedCounter+=1;
}
else{
    console.log(convertTimeToWords(5,45))
}
if(convertTimeToWords(4,15) == "quarter past four")
{
    passedCounter+=1;
}
else{
    console.log(convertTimeToWords(4,15))
}
if(convertTimeToWords(6,35) == "twenty five minutes to seven")
{
    passedCounter+=1;
}
else{
    console.log(convertTimeToWords(6,35))
}
if(convertTimeToWords(3,30)=="half past three")
{
    passedCounter+=1;
}
else{
    console.log(convertTimeToWords(3,30))
}
if(convertTimeToWords(10,57)=="three minutes to eleven")
{
    passedCounter+=1;
}
else{
    console.log(convertTimeToWords(10,57))
}
if(convertTimeToWords(1,1)=="one minute past one")
{
    passedCounter+=1;
}
else{
    console.log(convertTimeToWords(1,1))
}

if(convertTimeToWords(7,15)=="quarter past seven")
{
    passedCounter+=1;
}
else{
    console.log(passedCounter)
}
if(convertTimeToWords(12,45)=="quarter to one")
{
    passedCounter+=1;
}
else{
    console.log(passedCounter)
}
console.log(`\nPASSED: `+ `${passedCounter} `+ `of 12 test cases.`)