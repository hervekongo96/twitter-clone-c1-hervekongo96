const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require('path');
const data = require("../assets/data.json");



router.get('/tweets', (req, res) => {

    const initialDataPath = path.join(__dirname, '../assets/initial-data.json');
    const dataPath = path.join(__dirname, '../assets/data.json');

    fs.access(dataPath, fs.constants.F_OK, (err) => {
        if (err) {
            fs.copyFile(initialDataPath, dataPath, (err) => {
                if (err) {
                    res.status(500).send('Une erreur est survenue lors de la copie du fichier.');
                } else {
                    res.send('Le fichier data.json a été créé et le contenu a été copié avec succès.');
                }
            });
        } else {
            const tweets = data.tweets;
            const reversedata = tweets.slice().reverse(); 
            res.json(reversedata);
        }
    });
});

router.get('/handle/:handle', (req, res)=>{

    const { handle } = req.params;

    const users = data.users;
    const tweets = data.tweets;

    const user = users.find(item => item.handle === handle);
    const tweet = tweets.filter(tweetItem => tweetItem.author === user.id)

    if(tweet) {
        return res.send(tweet)
    }

    res.status(404).send(`l'utilisateur avec l'id : ${handle} n'existe pas`)
})

router.get('/handle/:media', (req, res)=>{
    
    const { media } = req.params;


})

router.get('/:name', (req, res)=>{

    const { name } = req.params;

    const allUser = data.users;
    const onUser = allUser.filter(item => item.name === name); 

    if(onUser.length > 0){
        res.send(onUser)
    }
    res.status(404).send(`l'utilisateur avec les nom : ${name} n'existe pas`)
})


module.exports = router;