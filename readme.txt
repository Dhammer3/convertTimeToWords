
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
    Given: (8,46) => Expected: “[fourteen minutes] [to] [nine]"

 
