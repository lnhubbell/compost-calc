# Compost Calculator

Welcome to the only Compost Calculator on the web! This is a quick project to explore React and Redux.

## The App Itself

You can use this app to build an efficient compost pile! When composting it's important to make sure your ratio of carbon to nitrogen stays around 30. This creates the optimal environment for organic waste to breakdown into soil. This app lets you create a virtual compost pile based on your own compost pile and lets you know if you need to add more 'brown stuff' (carbon rich) or 'green stuff' (nitrogen rich).

## Demo:
You can play with the app here: https://compost-calc.firebaseapp.com/

## The Technology

This app uses a few other pieces of technology besides React:

### State Management:
The state of the app is completely managed by Redux. On an app of this size, using Redux to manage state is almost certainly overkill. However, starting with Redux now will make it easier if I ever decide to expand this app into a more complex project.

### Database:
Firebase is used both to serve the app itself, and to act as a restful API to serve data to the app. The only data the API serves right now is the list of compost ingredients. In the future it would be fun to add the ability to save your compost pile, and Firebase would be an easy way to add that functionality.

### Styling:
The styling is done entirely in pure css. I chose this method so that I could focus this app on the React/Redux side of things. If I were to expand this app, I would refactor the styling to use something like less or sass and bootstrap. That said, it was fun trying to create common UI elements in pure css.

### Mobile:
This app is mobile friendly! (At least on my iphone SE) Feel free to play with it on your phone.

## Next Steps

Besides what I've already mentioned, if I were to spend more time on this app I'd like to add routing and a few more pages, about page, composting resource page, etc. I'd also like to add some user authentication so that people can save their piles and come back to them. It would also be fun to add in a way for users to enter ingredients that aren't already on the app. (I've already had one user complain that the app has chicken manure but not duck manure.)


