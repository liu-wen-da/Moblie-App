# Sprint 3 Report (11/09/2022 - 12/09/2022)
The Sprint 3 Demo Video can be seen [here](https://drive.google.com/drive/u/1/folders/1uS-JWdZm3AKU2bh-7qh2PkwzacMO1niT)

## What's New (User Facing)
 * Revise the Navigation Bar 
 * Schema for logging in
 * Schema for signing up
 * Preview content for all landing pages


## Work Summary (Developer Facing)
**Team LD** has worked on both the front-end and the back-end for **SCALE _Pathways_ Mobile**. Firstly, we have updated all of the landing pages to have preview content, which has been designed in such a manner that when the backend integration commences, the real content will be able to display easily. Next, we have updated the Navigation Bar's look and feel, and also defined it in such a manner that it is positioned correctly on different mobile screen sizes and mobile operating systems. Finally, we have begun some preliminary integration with the back-end for the purpose of authentication. The app makes the correct HTTP request for Log-in, Log-out, Sign-up, and Get Universities. Currently, the app logs to console when these requests are made, however, we will expand upon this in the future regarding correct functionality.


## Some Key Features
* User login requirements
* Revised Navigation Bar
* Preview content for all landing pages
* Preliminary back-end integration for authentication
* Schema for logging in
* Schema for signing up


## Unfinished Work
Team LD has yet to fully complete authentication and the back button for iOS users. 


## Completed Issues/User Stories
Here are links to the issues that we completed in this sprint:

 * [Issue 35 - Fix Screens to implement Flex instead of hard positions and views](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/35)
 * [Issue 38 - Correctly create Navigation Bar using Flex](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/38)
 * [Issue 45 - Add preview content to the first landing page](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/45)
 * [Issue 47 - Create HTTP Requests to PathwaysCore from the App](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/47)
 * [Issue 48 - Create Schema for Sign-in](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/48)
 * [Issue 49 - Create Schema for Sign-up](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/49)
 
 
## Incomplete Issues/User Stories
There are unfinished tasks for Sprint 3.
 * [Issue 40 - Authentication Firebase](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/40)
 * [Issue 28 - Add back arrow feature for iOS users](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/issues/28)


## Code Files for Review
Please review the following code files, which were actively developed during this sprint, for quality:
 * [main](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/tree/main)


## Retrospective Summary
Here's what went well:
  * Revised the navigation menu so that it is nicer looking and user-friendly
  * Created a schema for the sign-in screen where the user has to meet requirements before signing in
  * Created a schema for the sign-up screen where the user has to meet requirements before signing up
  * Confirmed that application works and looks and feels correct on iOS
  * Confirmed ability to connect to back-end for authentication
  * Team worked well together and its members supported and adjusted for one another


Here's what we'd like to improve:
   * Package management for the entire project
   * Coding style needs to be unified among team members. Looking into JSHint
  
  
Here are changes we plan to implement in the next sprint:
   * Further Firebase integration
   * Support for creating and signing in new users from the app with appropriate updates to back-end
   * Support for password recovery
   * Continue working towards fully integrating the back-end
