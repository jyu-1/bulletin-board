import { useEffect, useRef, useState } from "react";
import "../styles/message.scss";

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
        fetch(process.env.REACT_APP_API_HOST!)
            .then((res) => res.json())
            .then((result) => setMessage(result));
    }, []);

    useEffect(() => {
        if (lastMessage.current) {
            lastMessage.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [message]);

    return (
        <div className="messages">
            {message.map((item) => {
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
            })}
        </div>
    );
};

export default Messages;
