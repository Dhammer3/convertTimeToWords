
This is a simple program to convert a time into words. I used node.js as the interpreter and jetbrains webstorm as the IDE.

    To run this program:
	1) Download WebStorm IDE from https://www.jetbrains.com/webstorm/
	2) Download and install node.js from https://nodejs.org/en/download/ 
	3) Install node.js into the same directory that this program is in.
	4) Open the program with webstorm IDE.
	5) In the top right corner, there is a dropdown menu select "edit configurations">>"Node Interpreter" then click the plus sign. 
	6) Navigate to the directory where node.js is installed (it should be the same directory), select the "node.exe" file
	7) Your all set! click the green arrow in the top right hand corner to test the program.

    This problem can be broken up into three parts.
    For example:
    Given: (8,1) => Expected: "[one-minute] [past] [eight]”
    Given: (8,15) => Expected: “[quarter] [past] [eight]”
    Given: (8,46) => Expected: “[fourteen minutes] [to] [nine]”

    All of which take the form: [Minute(s) Converted] [to/past/clock] [hour converted]
    where minutes can be: singular or plural, quarter, half, or the actual text representation of the number.

    Special case:
    Given:(8,0) => Expected: “eight o’ clock”
    which will take the form [hours] [minutes] [clock]

    I will use two strings to convert the minutes and hours, and an array that will index occordingly.
    Next, I use 3 if statments to get the correct hour and a switch statment to get the rest.
    the specialCaseFlag will determine if the output needs to be reversed in the case of "[hour] o' clock"


    The runtime of this function is O(c). There are 9 lines for variable initialization and 2 lines for error handling.  
    The worst case running time of this function would occur 15/60 times. 
    For this case, the program would execute the 11 aformentioned lines + 3 for hour conversion +  12 for the switch statement + 2 for the if and return statment(=28 lines or 30 lines for the absolute worst case: (11:59)). 
    The average case for this function would occur 40/60 times in which minutes < 40, 25 lines will be executed (on average). 
    The best case occurs 5/60 times where minutes equal one of the special cases, where 22 lines will be executed ( on average). 

    
    The runtime cost of the function is dominated by the switch statement. 
    There a few ways to slightly improve the speed of this function, however the given runtime is already constant and the focus was on the readibility of the program.

    Test cases simply run through a series of if statments and determine if the input matches the expected output.
 
