export class Push {
  receive(status: string, callback: (message: string) => void): Push;
}

export class Channel {
  constructor(topic: string, params: any, socket: Socket);
  
  join(): Push;
}

export class Socket {
  constructor(endPoint: string);
  
  connect();  
  channel(topic: string, params: any): Channel;
}
