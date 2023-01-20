const Messages = () => {
    return (
        <div className="messages">
            {data.map((item) => {
                return (
                    <div key={item.id} className="message">
                        <div>{item.name}</div>
                        <div>{item.message}</div>
                        <div>{item.time}</div>
                    </div>
                );
            })}
        </div>
    );
};

const data = [
    { id: 0, name: "john", message: "hey there", time: "10pm" },
    { id: 1, name: "john", message: "hey there", time: "10pm" },
    { id: 2, name: "john", message: "hey there", time: "10pm" },
    { id: 3, name: "john", message: "hey there", time: "10pm" },
    { id: 4, name: "john", message: "hey there", time: "10pm" },
    { id: 5, name: "john", message: "hey there", time: "10pm" },
    { id: 6, name: "john", message: "hey there", time: "10pm" },
];

export default Messages;
