### MyNotes: Human Computer Interaction Project by-- Shramish Kafle

#### NyNotes Application

MyNotes is a note organizing application. User can login into the application either by registering or through Gmail Authentication. The application also allows user to create new notes and view the complete note details.User can either edit or delete individual notes. It also allows user to search specific notes according to specific keywords. User can also download the complete note details in form of pdf or csv. Finally, the application also has pagination.

#### Application Setup Guide

1. Clone this github repository as:
  ```
  git clone https://github.com/Jacobs-University/mynotes-notesorganizingapp.git
   
  ```
2. To download the dependencies for backend- In the main root folder, run:
   ```
   npm run install
   
   ```
3.  Then navigate inside frontend and install required dependencies for frontend as:
   ```
   cd frontend
   npm run install
   
   ```
 4. Finally, to run the application, navigate to the root folder and run the applications as:
   ```
   cd /
   npm run dev
   
   ```


#### Technologies Used

- React
- Redux
- Material UI
- Node JS
- Express
- MongoDB


#### Features:

- Gmail Authentication
- Ability to Add, Edit, or Delete Notes
- Print the complete notes details in form of pdf document or csv format
- Pagination
- Search for specific notes using keywords
- Use of REDUX
- Use of Material UI


#### Extra Dependencies Added

Frontend:

- "@material-ui/core"
- "@material-ui/icons"
- "@testing-library/jest-dom"
- "@testing-library/react"
- "@testing-library/user-event"
- "axios"
- "material-table"
- "material-ui-image"
- "react"
- "react-dom"
- "react-file-base64"
- "react-redux"
- "react-router-dom"
- "react-scripts"
- "redux"
- "redux-devtools-extension"
- "redux-thunk"
- "web-vitals"

Backend:

- "bcryptjs"
- "express"
- "express-async-handler"
- "jsonwebtoken"
- "mongoose"
- "react-google-login"

