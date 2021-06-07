# Scraptractor
 
A Simple robot script to scrap data through UI automation in the npm repository :)

V1:
Agenda - To scrap data from the npm repository based on the user input commands and anticipated volume of data sets.

Setup Steps - Download the project to your local machine -> Run "npm install" to add all the dependencies

Execution steps - Run "npm test" to start the robot -> Enter the package name you want to scrap from npm once the prompt message "Package name you want to scrap" is displayed -> Enter the anticipated volume of data you need, once the prompt message "Total no. of data to scrap (in numbers)" is displayed.

Constraints:
> Each result page on the npm search will contain only 20 data sets, so input for  anticipated volume of data must be calculated like "page number * 20"
> If the results doesn't contain the anticipated volume of data, the script exits.