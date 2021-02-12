# Github-Search

This project queries the Github GraphQL (V4) API and gets the list of repositories matching the username entered.
You would have to enter atleast 3 characters in the search field for searching. Spaces on the side of the strings don't count though.

## Prerequisites
- Node 8.x

## Approach

1. I am using Apollo GraphQL for connecting to the GitHub server (which is also supporting GraphQL).

2. I am using React context API for managing Theme value. Redux came to my mind but considering the complexity of application, I decided to go with Context API for managing the data.

3. I am using css modules for styling my component. It gives me the advantage of having dynamic class names for the styles

4. I have 3 types of components in my application - page based, mid level components and common components. 

5. I am making use of useState for the entire application. (So basically making use of hooks)

6. On click each card in the list, I am opening a new tab with the GitHub repo URL

7. I am also using Prettier for making sure my application code is prettified.

8. I have added screenshots of the application in the screenshots directory inside the application

9. Path for the JSON file for the keywords. For changing the language, just add a lang query param in the URL. For e.g: http://localhost:3000/?lng=junk
```
public/locales/<lang.json>
```
10. I used fetchPolicy: 'cache-and-network', so that pre-rendered results returned from cache not from server.

11. I used cypress@6.4.0 integration test runner for automating unit test cases.

12. I used i18next library for adding multiple language support.

## Available Scripts

1. Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```
npm run start
```


3. Launches the cypress test runner in the interactive watch mode.\
    * Goto path - node_modules\cypress\lib\tasks
    * Open file verify.js and search for 'VERIFY_TEST_RUNNER_TIMEOUT_MS'
    * and set 'VERIFY_TEST_RUNNER_TIMEOUT_MS' = 100000;
 ```
 npm run test
```

3. Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

```
npm run build
```

## Steps to run the application
```
npm install

npm run start
```