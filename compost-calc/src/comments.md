# Comments on the chosen file structure

Because of the small size of the app I put almost all the redux code into the one
store folder. In a larger app, you could break this store into relevant
container files.

The components folder only contains react Components that don't alter the state
of the app. The Calculator folder contains components that are only relevant to
the calculator itself, while the other folders are components that I thought
could be reused in future pages of the app.

the container folder only contains react Components that do alter the state. Right
now this is just the base Calculator component.
