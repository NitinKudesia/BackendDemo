const express = require('express');
const format = require('date-format')
const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
    res.status(200).send("Successfully Getting")
})

app.get("/api/v1/instagram", (req, res) => {
    const instaData = {
        username: "Nitin kudesia",
        followers: 200,
        follows: 100,
        date: format.asString("dd/mm hh:mm", new Date())
    };

    res.status(200).json({ instaData })
})

app.get("/api/v1/facebook", (req, res) => {
    const facebookData = {
        usename: "NKudesia",
        followers: 2000,
        follows: 100,
        date:  format.asString("dd/mm hh:mm", new Date())
    }
    res.status(200).json({facebookData})
})

app.get("/api/v1/linkedIn", (req, res) => {
    const linkedInData = {
        usename: "Nitin Kudesia",
        followers: 100,
        follows: 2,
        date:  format.asString("dd/mm hh:mm", new Date())
    }

    res.status(200).json({linkedInData})
})

app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token)
    res.status(200).json({param : req.params.token})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})