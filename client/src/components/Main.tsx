import "../styles/board.scss";
import Messages from "./Messages";
import socket from "../Socket";

interface FormData {
    name: { value: string };
    message: { value: string };
}

const Main = () => {
    const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, message } = e.target as typeof e.target & FormData;
        // fetch(process.env.REACT_APP_API_HOST!, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         name: name.value,
        //         message: message.value,
        //     }),
        // }).then(() => {
        //     message.value = "";
        // });

        await socket.emit("send_message", {
            name: name.value,
            message: message.value,
        });
        message.value = "";
    };

    return (
        <main>
            <div className="bulletin">
                <Messages />
                <hr />
                <form className="input" onSubmit={submitMessage}>
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
                        />
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Main;
