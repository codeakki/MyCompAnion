// Express
const express = require("express");
const router = express.Router();

// Firebase functions

// Database
const db = require("../config");

// CREATE (POST)
router.post("/create", (req, res) => {
    (async () => {

        try {
            await db.collection("CONCENTRATION").doc('/'+req.body.id+'/').create({
                task: req.body.task
            });
            return res.status(200).send("Concentration task created");  
        }
        catch (error) {
            return res.status(500).send(error);
        }
    })();
});

// READ (GET)

// READ one user
router.get("/read/:id", (req, res) => {
    (async () => {

        try {
            const document = await db.collection("CONCENTRATION").doc('/'+req.params.id+'/').get();
            let data = document.data();
            return res.status(200).send(data);
                
        }
        catch (error) {
            return res.status(500).send(error);
        }
    })();
});

// READ all user
router.get("/read", (req, res) => {

    (async () => {
        try {
            let query = db.collection("CONCENTRATION");
            let response = [];
            await query.get().then(snapshot => {
                let docs = snapshot.docs;
                for (let doc of docs){
                    const data = {
                        id:doc.id,
                        task:doc.data().task
                    }
                    response.push(data);
                }
                return response;
            })
            return res.status(200).send(response);

        }
        catch (error) {
            return res.status(500).send(error);
        }
    })();
});

// UPDATE (PUT)
router.put("/update/:id", (req, res) => {
    (async () => {

        try {
            const document = db.collection("CONCENTRATION").doc('/'+req.params.id+'/');
            await document.update({
                task: req.body.task
            });

            return res.status(200).send("Concentration task updated");
        }
        catch (error) {
            return res.status(500).send(error);
        }
    })();
});

// DELETE (DELETE)
router.delete("/delete/:id", (req, res) => {
    (async () => {

        try {
            const document = db.collection("CONCENTRATION").doc('/'+req.params.id+'/');
            await document.delete();
            return res.status(200).send("Concentration task  Deleated");
        }
        catch (error) {
            return res.status(500).send(error);
        }
    })();
});

module.exports = router;