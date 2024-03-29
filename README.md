# **SCALE *Pathways* Mobile** Full Stack App

## Project Summary

**SCALE *Pathways* Mobile** connects students to universities by providing them with dynamically updating course schedules, insights into degrees and courses, and more.  

The kanban board of the project can be viewed here: https://trello.com/invite/b/8ixiBzEs/ATTI64bb4d9499fb5ee2679eaea080e5e3c9CCCF4CC1/pathways-mobile-team
### Additional information about the project  

**Team LD** will be reponsible to work on the **SCALE *Pathways* Mobile**. The purpose of this project is to provide students with a way to create and manage their academic schedules throughout their college journey. **SCALE *Pathways* Mobile** will be a cross-platform mobile application that aims to address these issues. It will streamline the process of selecting a degree from an institution, tracking one’s progress through time for their degree, and making adjustments to any hurdles faced. With these solutions, **SCALE *Pathways* Mobile** hopes to take a load off the shoulders of students around the country.

## Installation

### Prerequisites
* Node.js
* npm
* Xcode (for iOS build)
* Android Studio and App Tools (for Android build)
* React Native for Web, ReactDOM, and @expo/webpack-config (for Web build)


### Add-ons
Currently, there are no add-ons for this project.


### Installation Steps
1. Clone the directory.
2. Next, enter the the `SCALEPathwaysMobileApp` directory, such as by running\
```cd SCALEPathwaysMobileApp```
3. In this directory, run the command below to install the necessary packages from package.json\
```npm install```
4. Run the back-end locally on Docker Desktop.
5. Now, the project can be run with the following commands to build the project for each respective system.\
For Android,\
```npm run android```\
For iOS, which must be built on a Mac,\
```npm run ios```\
For the web application,\
```npm run web```

## Functionality
The mobile application is currently able to complete the four authentication tasks: Log-In, Create-Account, Forgot-Password, and Log-Out. 

The app is also able to display Universities and their Degree programs. Students can select a degree program and generate a schedule. Multiple schedule generation is supported. After creating a schedule, the term breakdown can be viewed. 

The Profile screen allows the user to view and change their information. Unfortunately, changing profile images is not supported.  

## Known Problems

1. If a new user does not generate a schedule and immediately goes to the Schedule Page, the program will crash. The mitigation we attempted to utilize to prevent this from occurring is not working. 
2. The user may take and choose the profile picture, but issue with displaying the profile picture from the backend. 

Additionally, some packages have known vulnerabilities which are fixed in later versions. However, they cannot be updated to these later versions at this time because React Native requires the current offending versions in order to work. These vulnerabilities can only be resolved by testing each individual package's updated version for compatibility, or when React Native developers update their package version requirements.

## Additional Documentation
  * [Figma Design](https://www.figma.com/file/wbW23NGW4SgNUxj45qDspd/Scale-Figma-Prototype)
  * [Sprint 1 Report](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/blob/main/Sprint%201%20Report.md)
  * [Sprint 1 Videos](https://drive.google.com/drive/folders/1uS-JWdZm3AKU2bh-7qh2PkwzacMO1niT?usp=sharing)
  * [Sprint 2 Report](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/blob/main/Sprint%202%20Report.md)
  * [Sprint 2 Video](https://drive.google.com/drive/u/1/folders/16XqNwoiF7XIZ63xsQ2rWpQfTqqq760a5)
  * [Sprint 3 Report](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/blob/main/Sprint%203%20Report.md)
  * [Sprint 3 Video](https://drive.google.com/drive/u/1/folders/1NtHEk-FBT2T_FZgPfV5rQNNi3ssSSxXA)
  * [Sprint 4 Report](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/blob/main/Sprint%204%20Report.md)
  * [Sprint 4 Video](https://drive.google.com/drive/u/1/folders/1d9zLnc9OyzosJ1o8ykjKONqX-qLJolDO)
  * [Sprint 5 Report](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/blob/main/Sprint%205%20Report.md)
  * [Sprint 5 Video](https://drive.google.com/drive/u/1/folders/1_iWSvDyIpMvs69o1q63yWEPQZ0KxAe0O)
  * [Sprint 6 Report](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/blob/main/Sprint%206%20Report.md)
  * [Sprint 6 Video](https://drive.google.com/drive/u/1/folders/1vK7rr3lobuSvcbmlqSIi3UlhD_QW9viS)
  * [Sprint 7 Report](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/blob/main/Sprint%207%20Report.md)
  * [Sprint 7 Video](https://drive.google.com/drive/u/1/folders/1P1n4uuetxJVFGgUFsvMhcF7EWabeCwOv)


## License
**SCALE *Pathways* Mobile** is licensed under the MIT License - see the [LICENSE.txt](https://github.com/WSUCptSCapstone-Fall2022Spring2023/scale-mobilefullstackapp/blob/main/LICENSE.txt) file for details.
