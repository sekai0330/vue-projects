# Live Chat

A real-time chatroom working with Firebase Authentication.

## Demo

[See Demo deployed on Firebase](https://vue-projects-54fbf.web.app/)

(Email: demo@demo.com - Password: demouser)

<p align="center">
        <img src="screenshot.png">
</p>

## Features

- setting up Firebase Authentication.
- handling signup and login forms with composables.
- managing context, errors and emitting events.
- getting the current user and logging users out.
- adding route guards.
- waiting for Firebase Authentication to initialize.
- adding new messages to Firestore.
- using a real-time Firestore listener to handle messages.
- unsubscribing from real-time listeners to avoid unnecessary re-renders.
- formatting dates in the chat window with date-fns.
- building and deploying the app with Firebase CLI.
- adding Firestore security rules to require authentication and locking the API to its domain.

Based on [Build Web Apps with Vue JS 3 & Firebase](https://www.udemy.com/course/build-web-apps-with-vuejs-firebase/) by Shaun Pelling - The Net Ninja (2020).
