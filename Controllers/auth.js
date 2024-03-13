const data = require('../assets/initial-data.json')


exports.register = (req, res)=>{

    const tweets = req.body;

    const tweetPost = data.tweets;

    tweetPost.push({ ...tweets});

    res.status(200).send(tweets);   
}