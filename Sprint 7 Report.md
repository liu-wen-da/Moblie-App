# **Sprint 7 Report (4/03/2023 - 5/02/2023)**
The Sprint 7 Demo Video can be seen [here](https://drive.google.com/drive/u/1/folders/1P1n4uuetxJVFGgUFsvMhcF7EWabeCwOv)

## **What's New (User Facing)**
* Schedule Generation
  * User Can Select Their University (currently only WSU supported)
  * User Can Select Their Degree Program
  * User Can Select Their Start Term
  * User Can Give Their Schedule a Name
  * User Taken to My Schedules Page Displaying All Created Schedules
  * User Can Select any Schedule to View and it is Displayed Correctly
* Updated Profile Page
  * User Can Select Their Profile Picture From File System
  * User Can Open Camera to Take a Picture for Their Profile
  * User Can Successfully Edit Their Profile Information Such as Phone Number and State

## **Work Summary (Developer Facing)**
**Team LD** has continued work on integration of both the front-end and the back-end for **SCALE _Pathways_ Mobile**. We continued developing the logical flow for the user to generate a full schedule that we started in Sprint 5. After making an account and signing in, we navigate the user to the University Page (WSU is preselected because it is only selectable university in the back-end). Next, the user goes to the display page and can select a degree program from the university. After selecting a degree, we navigate them to the Term Page where we store the user's start term selection. Next, we navigate the user to the Schedule Naming Page where we store the name the user enters. All of this information is then passed to the Generate Schedule Route in the back-end, which generates the Schedule. Then, the user gets navigated to the My Schedule Page where the list of created schedules is shown by name. The user can then select a schedule from this page and be shown the breakdown of the schedule's terms and courses in another page.

We also updated the Profile page to utilize the GetUserInfo route to display user information. The user may select an existing picture or take one using the camera using the expo-image-picker for their profile image. In addition to that the user may update their profile information in the editing profile pop-up page. The latter works correctly, however the former is something that we were not able to finish as the image is not being correctly displayed on the front-end. 

## **Unfinished Work**

UI Testing and Profile Picture uploading.

## **Completed Issues/User Stories**
Here are links to the issues that we completed in this sprint:

* [Issue 53: Schedule Page](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/53)
* [Issue 72:  Correctly Display Multiple Schedules on My Schedules page](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/72)
* [Issue 73:  Correctly Display Selected Schedule Name on CurrentSchedule Page](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/73)
* [Issue 74:  Edit Profile Information in Profile Page](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/74)
  
## **Incomplete Issues/User Stories**

* [Issue 67: UI Testing](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/67)

## **Code Files for Review**
Please review the following code files, which were actively developed during this sprint, for quality:
 * [main](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/tree/main)

 
## **Retrospective Summary**
**Here's what went well:**
* Fully supported multiple schedules in the app.
* Users can edit their profile information.
* Team collaborated well and helped one another out.

**Here's what we'd like to improve but were not able to:**
* Migrate from using local files for testing purposes to supply the data for the Degrees and Terms pages to using back-end route like we did for Schedule Generation, Profile Page, Authentication, and Universities Page.
* Finish UI testing with JEST 