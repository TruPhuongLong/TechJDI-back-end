

//GET 
const gets = (req, res, next) => {
    res.send('gets')
}


//POST 
const post = (req, res) => {
    res.send('post')
}

//PUT
const put = (req, res) => {
    res.send('put')
}

module.exports = {
    gets,
    post,
    put
}