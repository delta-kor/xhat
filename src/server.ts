import App from './app';

const app = new App(3000);
app.start((port) => console.log(`Started on port ${port}`));
