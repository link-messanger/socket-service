import App from '@/app';
import validateEnv from '@utils/validateEnv';
import { PlaygroundRoute } from '@routes/index';

validateEnv();
const app = new App([new PlaygroundRoute()]);

app.listen();
