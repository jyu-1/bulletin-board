import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
    receive_message: (arg: {
        name: string;
        message: string;
        createdAt: string;
        _id: React.Key;
    }) => void;
}

interface ClientToServerEvents {
    send_message: (arg: { name: string; message: string }) => void;
}

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    "http://localhost:9000"
);

export default socket;
