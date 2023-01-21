const express = require("express");
require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./db");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const PORT = process.env.PORT || 3000;
const Message = require("./model/messageModel");
connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log(`${socket.id} user connected`);

    socket.on("send_message", async (data) => {
        const messages = await Message.create({
            name: data.name,
            message: data.message,
        });
        io.emit("receive_message", messages);
    });

    socket.on("disconnect", () => {
        console.log(`${socket.id} user disconnected`);
    });
});

app.use((req, res, next) => {
    console.log(
        `Request from ${req.protocol}://${req.get("host")}${req.originalUrl} ${
            req.method
        }`
    );
    next();
});

app.use("/api/messages", require("./routes/messagesApi"));

app.use(errorHandler);

httpServer.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
