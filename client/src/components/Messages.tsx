import { useEffect, useState } from "react";
import "../styles/message.scss";

interface ApiType {
    _id: React.Key;
    name: String;
    createdAt: String;
    message: String;
}

const Messages = () => {
    const [message, setMessage] = useState<ApiType[]>([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_HOST!)
            .then((res) => res.json())
            .then((result) => setMessage(result));
    }, []);

    return (
        <div className="messages">
            {message.map((item) => {
                return (
                    <div key={item._id} className="message">
                        <div>
                            <span>{item.name}</span>
                            <span>{item.createdAt}</span>
                        </div>
                        <div>{item.message}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Messages;
