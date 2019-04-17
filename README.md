
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Apologies, I know the brief stated no globally installed dependencies but i ran into an obscure [issue](https://github.com/facebook/create-react-app/issues/5259) with `create-react-app` and installing dependencies with npm and had to resort to using yarn to run the tests.
The App will run and build with npm but the tests bomb out.

Also the tests were running in codesandbox but when i mocked axios they stopped working. I didn't have time to figure out what the issue was.

The other issue i encountered was with the version of node i was running on my machine and the version of jest required by create-react-app. I tried upgrading jest but this didn't work. The only option that worked for me was to upgrade node. I've added an engines entry in package.json specifying the version of node required.

Finally i'm getting a warning about `React state updates should be wrapped in act()` when running the tests. From doing a bit of googling i think the tooling is just catching up with react hooks at the moment and the warning is nothing to worry about. Wrapping the render function in an act function didn't solve the warning. See link below for more details.

https://github.com/facebook/react/issues/14769
  
## Available Scripts
Install dependencies:  
  
### `yarn` 
  
In the project directory, you can run:  
  
### `yarn start`  
  
Runs the app in the development mode.<br>  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
  
The page will reload if you make edits.<br>  
You will also see any lint errors in the console.  
  
### `yarn test`  
  
Launches the test runner in the interactive watch mode.<br>  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.  
  
### `yarn run build`  
  
Builds the app for production to the `build` folder.<br>  
It correctly bundles React in production mode and optimizes the build for the best performance.  
  
The build is minified and the filenames include the hashes.<br>  
Your app is ready to be deployed!  
  
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.  
  
## Further improvement  
  
### UI  
 
I didn't spend a lot of time on the ui so obviously there is a lot of room for improvement there. I opted to use `rebass` because even though it was new to me it's similar to a proprietary system i've been using at work lately and i've been really enjoying using styled components in development. A couple of real improvements would be using icons for the weather description and allowing the user to enter a location or possibly use the browser geolocation api to show weather for the users current location. You could also use more of the data to provide a richer experience or have a responsive experience which adapts to viewport width. With more time i would also like to work on the rendered html to provide a more semantic and accessible experience for users.

### Code  
  
The code makes use of some of the latest React features like Hooks, there's room for improvement in terms of adding linting eslint/prettier etc or using Typescript/Flow for strong typing. I opted to use a container/component approach with the container being responsible for fetching data and supplying it as props to the (dumb) components. I have recent experience using GraphQL and Apollo Server/Client in a similar manner which scales quite nicely.
  
### Testing

I started out testing with Enzyme but ran into a few difficulties mocking axios requests because of hooks. I didn't spend a lot of time debugging but there's knows issues with Enzyme and hooks. I then included another package called `react-testing-library` which i've been using more and more lately. It allows you to test your application more like a user by avoiding testing implementation details of your code. This can make your code more maintainable, more like integration tests (avoiding shallow mounting components) and give you greater confidence in your tests. This particular subject can have some purists up in arms however :-). With more time i would  probably opt to add something like Cypress and run automated integration tests in a real browser.

### Deployment
The code is hosted in a public repository in Github but i opted to use CodeSandbox to deploy as i had not done this before from a Github repo. I could have opted for deployment in an s3 bucket or even a Github Pages as it's a single page app.
