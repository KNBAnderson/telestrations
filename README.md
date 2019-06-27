# Telestrations
by Katlin Anderson, Justin Kerntz, Lindsey Baker, and Marc Davies
## Description

_An Angular app to play telestrations._
_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2_

## Setup/Installation Requirements

* _$ git clone https://github.com/KNBAnderson/telestrations.git_
* _Create an account at https://firebase.google.com/_
* _On Firebase, create a project called bananabox_
* _Create a realtime database within the project_
* _Change the rules of the database to_
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
* _Create file in src/app/api-keys.ts_
* _Add this code to the new file. Your personal keys can be found in your projects settings_
```
  export const masterFirebaseConfig = {
    apiKey: XXXX,
    authDomain: "XXXX.firebaseapp.com",
    databaseURL: "https://XXX.firebaseio.com",
    projectId: "XXXX",
    storageBucket: "",
    messagingSenderId: XXXX,
    appId: XXXX
};
```
* _$ npm install;_
* _$ ng serve
*_Navigate to `http://localhost:4200/`_

## Specs
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| The wesite will allow a user to type something | - | - |
| The website will allow a user to draw something | - | - |
| The website will allow two users to type something, taking turns | - | - |
| The website will allow two users to draw something, taking turns | - | - |
| The website will save a store drawings and writing entered | - | - |
| The website will display others writings and drawings | - | - |
| The website will display the sequence of writing and drawings | - | - |

## Installation Requirements
* Run in browser

## Known Bugs
There are no known bugs.

## Technologies Used

_HTML_
_CSS_
_TypeScript_
_Angular_
_Node_
_Bootstrap_
_Jasmine_
_Linter_
_Babel_

### License

*This software is licensed under the GPL license.*

Copyright (c) 2019 **_Katlin Anderson, Justin Kerntz, Lindsey Baker, and Marc Davies_**

##Souces

Canvas component functionality gained witht the help of : 
* _https://medium.com/@tarik.nzl/creating-a-canvas-component-with-free-hand-drawing-with-rxjs-and-angular-61279f577415_

* _http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/#demo-complete_

Auth tutorial used 
https://coursetro.com/posts/code/32/Create-a-Full-Angular-Authentication-System-with-Firebase

Animation Resource
CloudFlare
https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.2.2/web-animations.min.js
