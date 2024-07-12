const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Chemins vers les fichiers
const buildPath = path.resolve(__dirname, 'build');
const indexPath = path.resolve(buildPath, 'index.html');
const headersPath = path.resolve(__dirname, '_headers');
const firebaseConfigPath = path.resolve(__dirname, 'firebase.json');

// Lire et modifier le fichier index.html pour ajouter le nonce
fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
        return console.error(err);
    }

    // Générer un nonce
    const nonce = crypto.randomBytes(16).toString('base64');
    // Remplacer <script> par <script nonce="nonce">
    const result = data.replace(/<script/g, `<script nonce="${nonce}"`);

    // Écrire les modifications dans le fichier index.html
    fs.writeFile(indexPath, result, 'utf8', (err) => {
        if (err) return console.error(err);
    });

    // Lire et modifier le fichier _headers pour ajouter le nonce
    fs.readFile(headersPath, 'utf8', (err, headersData) => {
        if (err) {
            return console.error(err);
        }

        // Remplacer {nonce} par le nonce généré
        const updatedHeaders = headersData.replace('{nonce}', nonce);

        // Écrire les modifications dans le fichier _headers
        fs.writeFile(headersPath, updatedHeaders, 'utf8', (err) => {
            if (err) return console.error(err);
        });
    });

    // Lire et modifier le fichier firebase.json pour ajouter le nonce
    fs.readFile(firebaseConfigPath, 'utf8', (err, firebaseData) => {
        if (err) {
            return console.error(err);
        }

        const updatedFirebaseConfig = firebaseData.replace('{nonce}', nonce);

        fs.writeFile(firebaseConfigPath, updatedFirebaseConfig, 'utf8', (err) => {
            if (err) return console.error(err);
        });
    });

    console.log(`Added nonce: ${nonce}`);
});
