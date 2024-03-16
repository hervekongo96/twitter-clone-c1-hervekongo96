function checkDataFiles(req, res, next) {
    const initialDataPath = path.join(__dirname, '../assets/initial-data.json');
    const dataPath = path.join(__dirname, '../assets/data.json');

    fs.access(dataPath, fs.constants.F_OK, (err) => {
        if (err) {
            fs.copyFile(initialDataPath, dataPath, (err) => {
                if (err) {
                    res.status(500).send('Une erreur est survenue lors de la copie du fichier.');
                } else {
                    console.log('Le fichier data.json a été créé et le contenu a été copié avec succès.');
                    next();
                }
            });
        } else {
            next();
        }
    });
}