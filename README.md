# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Space API

This project was created using Typescript & Redux Toolkit.

## Redux

There are 2 stores, one managing an external API (spaceApi) which uses RTK Query and another one (rocketSlice) managing internal state which uses Redux Toolkit's createSlice.

## Internationalization

i18n was used for internationalization. Further languages can be easily added via JSON file.

## Styling (Sass)

Style is minimalist and has been created using the css framework Sass. Global variables have been set to avoid repetition.

## Routing

In order to generate all the routes, I have used the react-router-dom library in its latest version (6) and a 404 page component has been added to avoid errors when typing.

## Componentization, reusability and customHooks

I have tried to componentize and divide the application into smaller pieces of code so there's no repetition. I have also used customHooks to extract the majority of the logic out of the components.

## Pagination & filters

Pagination has been included at the end of the listing page container and its default parameters can be modified. Filters have been also added to improve user experience.

## Testing

I have created a minimum of one test for component using react-testing-library in order to check that all elements and text are displayed correctly.

### Ana Gracia
