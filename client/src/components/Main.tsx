import "../styles/board.scss";
import Messages from "./Messages";
import socket from "../Socket";
import { useRef } from "react";

interface FormData {
    name: { value: string };
    message: { value: string };
}

const Main = () => {
    const myFormRef = useRef<HTMLFormElement>(null);
    const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, message } = e.target as typeof e.target & FormData;

        await socket.emit("send_message", {
            name: name.value,
            message: message.value,
        });
        message.value = "";
    };

    const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && e.shiftKey === false) {
            e.preventDefault();
            if (myFormRef.current) {
                myFormRef.current.dispatchEvent(
                    new Event("submit", { cancelable: true, bubbles: true })
                );
            }
        }
    };

    return (
        <main>
            <div className="bulletin">
                <Messages />
                <hr />
                <form
                    className="input"
                    onSubmit={submitMessage}
                    ref={myFormRef}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        minLength={1}
                        maxLength={25}
                    />
                    <div className="message-send">
                        <textarea
                            name="message"
                            placeholder="Message"
                            required
                            minLength={1}
                            maxLength={500}
                            onKeyDown={onEnterPress}
                        />
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Main;
