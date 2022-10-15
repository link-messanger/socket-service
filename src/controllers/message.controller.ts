import { Server } from 'socket.io';

class MessageController {
  constructor(private io: Server) {}


  public async sendMessage (message: string) {
    this.io.emit('message', () => {

    });
  }
}
