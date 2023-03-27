# Task Manager Project

This project is a simple task manager application built with React. It allows users to add, update, and delete tasks in a list. 

## How to use

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the application by running `npm start`.
5. Open your browser and navigate to `http://localhost:3000`.

## Technology used

- React
- Bootstrap

## What I learned

In this project, I learned how to use the `useReducer` hook in React. `useReducer` is an alternative to using `useState` for managing state in a React component. It is particularly useful when dealing with complex state that requires multiple updates or when the state logic is too complex to be handled by `useState`. The `useReducer` hook allows us to define a reducer function that receives the current state and an action, and returns a new state based on the action. We can then use `dispatch` to send actions to the reducer and update the state accordingly. 

In the Task Manager project, I used `useReducer` to manage the state of the application. I defined a reducer function that updates the state based on the action type, and used `dispatch` to update the state in response to user actions. This allowed me to manage the state of the application in a more organized and efficient manner.
