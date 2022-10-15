import App from 'app';
import Socket from 'socket';
import {createServer} from 'http';
import validateEnv from '@utils/validateEnv';
import { PlaygroundRoute } from '@routes/index';

validateEnv();

const app = new App([new PlaygroundRoute()]);

const socket = new Socket(app.getServer());
socket.listen();

app.listen();
