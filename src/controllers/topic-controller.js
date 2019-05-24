import {Topic} from '../models/topic'
import {ObjectId} from 'mongodb'; 


//GET 
const gets = (req, res, next) => { 
    const {sort, skip, limit} = req.query;
    const sortJson = JSON.parse(sort)
    // console.log("sortJson: ", sortJson)
    // console.log("skip: ", skip)
    // console.log("limit: ", limit)
    Topic.find()
        .sort(sortJson)
        .skip(parseInt(skip))
        .limit(parseInt(limit))
        .then(topics => {
            res.send(topics)
        })
        .catch(error => {
            res.send(error)
        })
}


//POST 
const post = (req, res) => {
    const topic = req.body;
    const newTopic = new Topic(topic);
    console.log(topic)
    newTopic.save()
        .then(() => {
            console.log(`topic save success`)
            res.status(200).send()
        })
        .catch(error => res.send(error))
}

//PUT
const put = (req, res) => {
    const topicId = req.params.topicId;

    //validate id:
    if (!ObjectId.isValid(topicId)) {
        return res.status(404).send();
    }

     // good to go:
     console.log(req.body)
     const {topic} = req.body;
     Topic.findByIdAndUpdate(topicId, { $set: { vote: parseInt(topic.vote) } })
        .then(topic => {
            if (!topic) {
                return res.status(404).send("not found :(");
            }
            res.status(200).send(topic);
        })
        .catch(error => res.status(400).send(error));
}

module.exports = {
    gets,
    post,
    put
}