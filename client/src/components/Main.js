import "../styles/board.scss";
import Messages from "./Messages";

const Main = () => {
    return (
        <main>
            <div className="bulletin">
                <Messages />
                <hr />
                <form className="input">
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
