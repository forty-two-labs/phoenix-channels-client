export class Push {
  receive(status: string, callback: (message: string) => void): Push;
}

export class Channel {
  topic: string;
  state: string;
  joinPush: Push;
  bindings: Array<Function>;

  constructor(topic: string, params: any, socket: Socket);

  join(): Push;
  leave(): Push;
  rejoin(): void;
  on(eventName: string, callback: (payload: any) => void);
  off(eventName: string);
  onClose(callback: () => void);
  onError(callback: (reason: string) => void);
}

interface SocketOpts {
  transport?: any;
  timeout?: number;
  logger?: (kind: string, msg: any, data: any) => void;
  longpollerTimeout?: number;
  params?: any;
}

export class Socket {
  constructor(endPoint: string, opts?: SocketOpts);

  connect();
  channel(topic: string, params: any): Channel;
  onOpen(callback: () => void);
  onClose(callback: () => void);
  onError(callback: (reason: string) => void);
}
