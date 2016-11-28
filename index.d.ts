export class Push {
  receive(status: string, callback: (message: string) => void): Push;
}

export class Channel {
  state: string;
  joinPush: Push;

  constructor(topic: string, params: any, socket: Socket);

  join(): Push;
  leave(): Push;
  on(eventName: string, callback: (payload: any) => void);
  off(eventName: string);
  onClose(callback: () => void);
  onError(callback: (reason: string) => void);
}

export class Socket {
  constructor(endPoint: string);

  connect();
  channel(topic: string, params: any): Channel;
  onOpen(callback: () => void);
  onClose(callback: () => void);
  onError(callback: (reason: string) => void);
}
