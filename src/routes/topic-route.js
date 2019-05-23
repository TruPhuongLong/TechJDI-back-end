import TopicController from '../controllers/topic-controller';

//ROUTE
const topicRouter = router => {

    //GET topic
    router.get('/api/topics',  TopicController.gets);

    //POST
    router.post('/api/topic', TopicController.post);

    //PUT
    router.put('/api/topic/:topicId', TopicController.put);

}

module.exports = { topicRouter }