import {Server} from 'socket.io';
import { Server as HttpServer } from 'http';

class Socket {
  public io;

  constructor(server: HttpServer) {
    this.io = new Server(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });
  }

  public listen() {
    this.io.on('connection', (socket) => {
      console.log('a user connected');
    });
  }
}

export default Socket;
