
/*
This function validates the input. 
Ensures @param hours and @param minutes are of the correct type and within bounds.
*/
var specialCaseFlagGlobal=false;

function inputValid(hours, minutes)
{
    if ((hours > 12 || hours < 1 || minutes > 60 || minutes < 1)||(typeof hours !== 'number'|| typeof minutes !== 'number'))  return false;
    return true;
}

function getHourStr(hours, minutes)
{
    hourArr=["","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven","twelve"];
    hourStr='';
    if (minutes < 30) hourStr = hourArr[hours];
    else if (hours == 12) hourStr = hourArr[1];
    else hourStr=hourArr[hours+1];
    return hourStr;
}

function specialCaseTest(minutes)
{
    flag = false;
    minute === 0 ? flag = true;
    return flag;
}

function getMinutesStr(minutes)
{
    minStr=''
    var minArr=[
        "one", "two", "three", "four", "five", "six", "seven", "eight", "nine","ten", 
        "eleven","twelve","thirteen", "fourteen", "fifteen","sixteen", "seventeen","eighteen", "nineteen","twenty",
        "twenty one", "twenty two","twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine",
    ];
    if( minutes%15==0)
    {
        minutes === 0 ? minStr = 'o\' clock':
        minutes === 15 ? minStr = 'quarter past'
        minutes === 30 ? minStr = 'half past'
        minutes === 45 ? minStr = 'quarter to'

    }  
}

function convertTimeToWords(hours, minutes){

    //vars for each respective placeholder
    var minStr='';
    var hourStr='';
    specialCaseFlagGlobal=specialCaseTest(mintues);
    //this array will help to convert to the correct time, which is indexed according to the minute.
    

    //convert the minutes to a seperate indexed array to aide in conversion
    //when minutes < 30.
    var indexedMinutes=Array.from(String(minutes), Number);

    //forwarded time is used when minutes > 30.
    var forwardedTime=60-minutes;
    var forwardedTimeIndexed=Array.from(String(forwardedTime), Number);

    //Basic Error handling
    if  (!inputValid(hours, minutes))  return (`\n Unable to convert the time given: Hour ${hours} `+` Minutes: ${minutes}`);

   

    //get the correct minutes string. catch the special cases first.
    switch (true) {
        //special case
        // "[hour] o' clock"
        case (minutes == 0):
            minStr=`o\' clock`;
            specialCaseFlag=true;
            break;
        //"one-minute past eight"
        case (minutes == 1):
            minStr=`${numConv[minutes]}`+ ` minute past`;
            break;
        case (minutes == 15):
            minStr=`quarter past`
            break;
        case (minutes == 45):
            minStr=`quarter to`
            break;
        case (minutes==30):
            minStr=`half past`
            break;
        //1-20 minutes past [hour]
        case (minutes <= 20):
            minStr=`${numConv[minutes]} `+` minutes past`;
            break;
        //20-29 minutes past [hour]
        case (minutes < 30):
            minStr=`twenty `+`${numConv[indexedMinutes[1]]}`+` minutes past`;
            break;
         //20-29 minutes to [forwarded hour]
        case (minutes < 40):
            minStr=`twenty `+`${numConv[forwardedTimeIndexed[1]]}`+` minutes to`;
            break;
         //1-19 minute(s) to [forwarded hour]
        case (minutes>40):
            minStr=`${numConv[forwardedTime]}`;
            //append 'minutes' or 'minute'
            if(forwardedTime>1){
                minStr+=` minutes to`
            }
            else{
                minStr+=` minute to`
            }
            break;
    }

    if(specialCaseFlagGlobal)
    {
        return hourStr+" "+ minStr;
    }
    return minStr+" "+ hourStr;
}

//test cases
passedCounter=0
if(convertTimeToWords(5,47)=="thirteen minutes to six")
{
    passedCounter+=1;
}
if(convertTimeToWords(3,0)=="three o' clock")
{
    passedCounter+=1;
}
if(convertTimeToWords(7,29)=="twenty nine minutes past seven")
{
    passedCounter+=1;
}

if(convertTimeToWords(5,30)=="half past five")
{
    passedCounter+=1;
}
if(convertTimeToWords(5,45)=="quarter to six")
{
    passedCounter+=1;
}
if(convertTimeToWords(4,15)=="quarter past four")
{
    passedCounter+=1;
}
if(convertTimeToWords(6,35)=="twenty five minutes to seven")
{
    passedCounter+=1;
}
if(convertTimeToWords(3,30)=="half past three")
{
    passedCounter+=1;
}
if(convertTimeToWords(10,57)=="three minutes to eleven")
{
    passedCounter+=1;
}
if(convertTimeToWords(1,1)=="one minute past one")
{
    passedCounter+=1;
}

if(convertTimeToWords(7,15)=="quarter past seven")
{
    passedCounter+=1;
}
if(convertTimeToWords(12,45)=="quarter to one")
{
    passedCounter+=1;
}
console.log(`\nPASSED: `+ `${passedCounter} `+ `of 12 test cases.`)
