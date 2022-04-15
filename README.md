=============================================
# AutoPro
=============================================

The AutoPro was created for the Angular module project defence in SoftUni. It is a simple app for car selling.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0 and use ASP.NET Core API 6.0 for the back-end part.
To authenticate a user, a client application sends a JSON Web Token (JWT) in the authorization header of the HTTP request to the backend API.

### App Architecture

##### Home 

- Welcome page

- 3 random car ads will be shown

- An authenticated user has access to all car ads, register and login

- Not authenticated user has access to all car ads, create, profile and logout

- Signin for newsletter into the footer 

##### Cars (not authorized)

- 6 car ads will be shown per page
    
- paganation 

- details button 

##### Details (not authorized)

- Shows car ad details 

- parameter cad ad id

##### Create (authentication required)

- Create car ad 

- Form validation

- Submit button

##### Profile (private, authentication required)

- List with own car ads

- Delete button

- Deactivate button

##### Login form

##### Register form

##### Logout button


## Development server

Front-End: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
Back-End: listening on https://localhost:7298 or http://localhost:5298.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

