# **Sprint 5 Report (2/03/2023 - 3/02/2023)**
The Sprint 5 Demo Video can be seen [here](https://drive.google.com/drive/u/1/folders/1_iWSvDyIpMvs69o1q63yWEPQZ0KxAe0O)

## **What's New (User Facing)**
 * Schedule Generation
 	* User Can Select Their University (currently only WSU supported)
    * User Can Select Their Degree Program
    * User Can Select Their Start Term
    * User can Give Their Schedule a Name
    * Schedule Generated (but not displaying on app yet) on Schedule Page 
 * Updated Profile Page to Display User Data

## **Work Summary (Developer Facing)**
**Team LD** has continued work on integration of both the front-end and the back-end for **SCALE _Pathways_ Mobile**. We have outlined a logical flow for the user to generate a full schedule. After making an account and signing in, we navigate the user to the Degree Page (this is something we will update in later versions, this is currently in place since WSU is the only selectable university). We display the Degrees and locally store their selection. Then, we navigate them to the Term Page where we store the user's start term selection. Next, we navigate the user to the start Schedule Naming Page where we store the name the user enters. All of this information is then passed to the Generate Schedule Route in the backend, which generates the Schedule. Finally, the user gets navigated to the Schedule Page where the schedule will be shown (currently, the schedule information is only logged). We also updated the Profile page to utilize the GetUserInfo route to display user information.

## **Unfinished Work**

Team LD does not have any unfinished work for this sprint. We have issues for the next sprint which we are working towards completing.

## **Completed Issues/User Stories**
Here are links to the issues that we completed in this sprint:

* [Issue 57: Create Cards to Display University Information ](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/57)
* [Issue 58: Display Universities from back-end](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/58)
* [Issue 60: Display Degree Programs offered by Selected University from back-end](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/60)
* [Issue 61: Let user select Degree Program ](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/61)
* [Issue 62: Generate Schedule](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/62)
* [Issue 64: Allow user to search for degree using search bar](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/64)

## **Incomplete Issues/User Stories**

Team LD does not have any unfinished issues/user stories for this sprint. We have issues for the next sprint which we are working towards completing.

## **Code Files for Review**
Please review the following code files, which were actively developed during this sprint, for quality:
 * [main](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/tree/main)

 
## **Retrospective Summary**
**Here's what went well:**
  * Connect to the database to create student's schedule
  * Revised the navigation
  * Dynamically update the user profile 
 
**Here's what we'd like to improve:**
* Fully connect to the client backend instead of local JSON file for Degree and Terms Pages (Schedule Page DOES fully connect to backend). This relates to a JSON parsing issue we are working immediately to fix
  
**Here are changes we plan to implement in the next sprint:**
* Fully connect to the backend
* Display Schedule information on Schedule Page
* Improve the UI interactions
* Utilize UI Automation Testing to test our screens
* Allow user to generate and view multiple schedules
* Show user the quiz to help them choose which degree before allowing them to generate a schedule
* User data encryption
