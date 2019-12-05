//This function takes in a time as  intgers and converts it into a time in words.
function inputValid(hours, minutes)
{
    if (hours > 12 || hours < 1 || minutes > 60 || minutes < 1) return false;
    return true;
}

function getHourStr(hours, minutes)
{
    hourArr=["","one", "two", "three", "four", "five", "six", "seven", "eight", "nine","ten", "eleven","twelve"]
     //get the correct hour string
    //round to 1
    if( minutes > 30 && hours == 12)
    {
        hourStr=hourArr[1]
    }
    //round up
    else if ( minutes > 30 && hours != 12)
    {
        hourStr=hourArr[hours+1];
    }
    //remain the same
    else
    {
        hourStr=hourArr[hours]
    }
    return hourStr

}

function convertTimeToWords(hours, minutes){

    //vars for each respective placeholder
    var minStr='';
    var hourStr='';
    var specialCaseFlag=false;
    //this array will help to convert to the correct time, which is indexed according to the minute.
    var numConv=[
        "o'", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven","twelve","thirteen", "fourteen", "fifteen","sixteen", "seventeen","eighteen", "nineteen","twenty",
        "half", "quarter", "minute", "minutes"
    ];

    //convert the minutes to a seperate indexed array to aide in conversion
    //when minutes < 30.
    var indexedMinutes=Array.from(String(minutes), Number);

    //forwarded time is used when minutes > 30.
    var forwardedTime=60-minutes;
    var forwardedTimeIndexed=Array.from(String(forwardedTime), Number);

    //ensuring that the input is of the correct var type, may not be necessary but just in case.
    hours=parseInt(hours, 10);
    minutes=parseInt(minutes, 10);

    //Basic Error handling
    if  (!inputValid(hours, minutes))  return (`\n Unable to convert the time given: Hour ${hours} `+` Minutes: ${minutes}`);

   

    //get the correct minutes string. catch the special cases first.
    switch (true) {
        //special case
        // "[hour] o' clock"
        case (minutes==0):
            minStr=`o\' clock`;
            specialCaseFlag=true;
            break;
        //"one-minute past eight"
        case (minutes==1):
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

    if(specialCaseFlag)
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
