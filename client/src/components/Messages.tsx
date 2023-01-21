import { useEffect, useRef, useState } from "react";
import "../styles/message.scss";
import socket from "../Socket";

interface ApiType {
    _id: React.Key;
    name: String;
    createdAt: string;
    message: String;
}

const Messages = () => {
    const [message, setMessage] = useState<ApiType[]>([]);
    const lastMessage = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function datata(data: {
            _id: React.Key;
            name: string;
            message: string;
            createdAt: string;
        }) {
            setMessage((prev) => [...prev, data]);
        }

        fetch(process.env.REACT_APP_API_HOST_MESSAGES!)
            .then((res) => res.json())
            .then((result) => setMessage(result.reverse()));

        socket.on("receive_message", datata);

        return () => {
            socket.off("receive_message", datata);
        };
    }, []);

    useEffect(() => {
        if (lastMessage.current) {
            lastMessage.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [message]);

    return (
        <div className="messages">
            {message.length !== 0 ? (
                message.map((item) => {
                    return (
                        <div key={item._id} className="message">
                            <div>
                                <span>{item.name}</span>
                                <span>
                                    {new Date(Date.parse(item.createdAt))
                                        .toString()
                                        .slice(4, 21)}
                                </span>
                            </div>
                            <div>{item.message}</div>
                            <div ref={lastMessage} />
                        </div>
                    );
                })
            ) : (
                <div className="loading">
                    <div>Waking up the backend...</div>
                    <div>This can take up to 20 seconds.</div>
                </div>
            )}
        </div>
    );
};

export default Messages;
