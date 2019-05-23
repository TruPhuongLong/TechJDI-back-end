import {Router} from 'express';
import {topicRouter} from './topic-route';

const router = new Router();

//user router:
topicRouter(router);

router.get('*', (req, res) => {
    res.json({message: 'not found'})
})

module.exports = router;