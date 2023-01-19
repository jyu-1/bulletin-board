const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 9000;

const logger = (req, res, next) => {
    console.log(
        `Request from ${req.protocol}://${req.get("host")}${req.originalUrl}`
    );
    next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);

//app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
