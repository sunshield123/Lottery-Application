How Application Works in the Front End?

In front End Mainly there Three Component

*About
*LotteryDraw
*App Component



About :- Mainly concentrating on HTML content Displayed in the Application in the about tag.
LotteryDraw - It is main component Heart of the application where Functions are executed 
* Displaying Unique number
* Displaying Draw History
* Sending Post request to back end
* Get Request from the back end
* Current Date and Time functionality


App Component - Where Nav bar is placed 

App Module - ALl modules important for these projects are mentioned here.

Router file- Here all routing is mapped.


Servcies - For Get Request for Draw history


---------------------------
backend- Two files


1) Demo_db_connection - Where Configuration and database connection is established.
2)Server.js file - Node Express API- 

*where post request is captured
*And Sql query are executed and records are saved in the Database.
*Get request where all Data is pushed to /Users page.

----------------------------

How to Run Project
--------------

1)We should land "server.js" file and run backend of the application with command - "Node server.js" 

2)Simentanosuly should run the front end of the application - Should land LotteryUI and Run "ng serve"