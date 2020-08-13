import 'module-alias/register';
import App from './app';

const app = new App();
app.start((port) => console.log(`Started on port ${port}`));
