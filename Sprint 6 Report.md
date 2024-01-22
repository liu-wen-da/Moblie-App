# **Sprint 6 Report (3/03/2023 - 4/02/2023)**
The Sprint 6 Demo Video can be seen [here](https://drive.google.com/drive/u/1/folders/1vK7rr3lobuSvcbmlqSIi3UlhD_QW9viS)

## **What's New (User Facing)**
* Schedule Generation
  * User Can Select Their University (currently only WSU supported)
  * User Can Select Their Degree Program
  * User Can Select Their Start Term
  * User Can Give Their Schedule a Name
  * User Taken to My Schedules Page displaying created schedules
  * User Can Select Schedule (but still working on displaying correct schedule to screen)
* Updated Profile Page
  * User Can Select Their Profile Picture (back-end needs to be updated to support this)
  * User Can Edit Their Profile Information (back-end needs to be updated to support this)

## **Work Summary (Developer Facing)**
**Team LD** has continued work on integration of both the front-end and the back-end for **SCALE _Pathways_ Mobile**. We continued developing the logical flow for the user to generate a full schedule that we started in Sprint 5. After making an account and signing in, we navigate the user to the University Page (WSU is preselected because it is only selectable university in the back-end). Next, the user goes to the display page and can select a degree program from the university. After selecting a degree, we navigate them to the Term Page where we store the user's start term selection. Next, we navigate the user to the Schedule Naming Page where we store the name the user enters. All of this information is then passed to the Generate Schedule Route in the back-end, which generates the Schedule. Then, the user gets navigated to the My Schedule Page where the list of created schedules will be shown. The user can select a schedule from this list and be shown the breakdown of the schedule's terms and courses (currently working on this).

We also updated the Profile page to utilize the GetUserInfo route to display user information. The user may select profile picture using the expo-image-picker. In addition to that the user may update their profile information in the editing profile pop-up page. 

## **Unfinished Work**

We are working on supporting multiple schedules.

## **Completed Issues/User Stories**
Here are links to the issues that we completed in this sprint:

* [Issue 53: Schedule Page](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/53)
* [Issue 63: Display Schedule on Schedule Page](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/63)
* [Issue 68: Update Profile](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/68)  
* [Issue 70: Update Navigation to Handle Multiple Schedules](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/70)
  
## **Incomplete Issues/User Stories**

* [Issue 69: Multiple Schedules Support](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/69)

## **Code Files for Review**
Please review the following code files, which were actively developed during this sprint, for quality:
 * [main](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/tree/main)

 
## **Retrospective Summary**
**Here's what went well:**
  * Connect to the back-end to create and display a schedule
  * Connect to the back-end to create multiple schedules 
  * Revised the navigation
  * Dynamically update the user profile, but waiting on SCALE to improve their backend to incorporate our changes 
  * Improved the flow between screens

**Here's what we'd like to improve:**
  * Change the degrees screen to connect to API instead of reading the JSON file 
  
**Here are changes we plan to implement in the next sprint:**
* Fully connect to the backend (degrees page)
* Utilize UI Automation Testing to test our screens
* Potentially show user the quiz to help them choose which degree before allowing them to generate a schedule
* Help transition for the next team
