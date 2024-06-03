const express = require('express');
const app = express();
const port = 8080;
app.use(express.static("static web"));

app.get('/', (req, res) => res.send(' this is cloud computing DEVOPS ; CI-CD PIPELINE STEP 1 !'));
//app.get('/', (req, res) => res.send(' this is cloud computing DEVOPS ; CI-CD PIPELINE STEP 1 !'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
console.log('THIS IS CSC314 CLOUD COMPUTING DEVOPS; CI-CD PIPELINE CREATED WITH AWS, THIS PAGE INDICATES SUCCESS \n Emmanuel C Onyenwuzor \n VUG/CSC/21/6280');