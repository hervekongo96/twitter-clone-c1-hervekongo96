const fs = require('fs');
const path = require('path');


exports.register = (req, res) => {
    const newTweet = req.body;
    const filePath = path.join(__dirname, '../assets/data.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la lecture du fichier JSON');
            return;
        }

        let jsonData = JSON.parse(data);
        let tweetPost = jsonData.tweets;
        
        tweetPost.push({ ...newTweet });
        jsonData.tweets = tweetPost;

        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Erreur lors de l\'écriture dans le fichier JSON');
                return;
            }
            
            res.status(200).send(newTweet);
        });
    });
}
 
