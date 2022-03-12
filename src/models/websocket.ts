export type WsUpdateMessage = {
    type: 'UPDATE';
    apiPath: string;
};

export type WsBroadcastMessage = WsUpdateMessage & { timestamp: number };
