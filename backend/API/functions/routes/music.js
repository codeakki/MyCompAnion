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
            await db.collection("MUSIC").doc('/'+req.body.id+'/').create({
                src: req.body.src,
                title: req.body.title
            });
            return res.status(200).send("Music record created");  
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
            const document = await db.collection("MUSIC").doc('/'+req.params.id+'/').get();
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
            let query = db.collection("MUSIC");
            let response = [];
            await query.get().then(snapshot => {
                let docs = snapshot.docs;
                for (let doc of docs){
                    const data = {
                        id:doc.id,
                        src:doc.data().src,
                        title:doc.data().title
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
            const document = db.collection("MUSIC").doc('/'+req.params.id+'/');
            await document.update({
                src : req.body.src,
                title : req.body.title
            });

            return res.status(200).send("Music record updated");
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
            const document = db.collection("MUSIC").doc('/'+req.params.id+'/');
            await document.delete();
            return res.status(200).send("Music record Deleated");
        }
        catch (error) {
            return res.status(500).send(error);
        }
    })();
});

module.exports = router;