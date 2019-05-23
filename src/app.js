import express from 'express';

const port = process.env.PORT || 2345;
const app = express();

//Global Error handler:
app.use(function (err, req, res, next) {
    console.log('=== app.js - global handler err ')
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
})