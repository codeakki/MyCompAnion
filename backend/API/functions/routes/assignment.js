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
            await db.collection("ASSIGNMENT").doc('/'+req.body.id+'/').create({
                type: req.body.type,
                title: req.body.title,  
                question: req.body.question
            });
            return res.status(200).send("Assignment created");  
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
            const document = await db.collection("ASSIGNMENT").doc('/'+req.params.id+'/').get();
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
            let query = db.collection("ASSIGNMENT");
            let response = [];
            await query.get().then(snapshot => {
                let docs = snapshot.docs;
                for (let doc of docs){
                    const data = {
                        id:doc.id,
                        type:doc.data().type,
                        title:doc.data().title,
                        question:doc.data().question
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
            const document = db.collection("ASSIGNMENT").doc('/'+req.params.id+'/');
            await document.update({
                type: req.body.type,
                title: req.body.title,
                question: req.body.question
            });

            return res.status(200).send("Assignment updated");
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
            const document = db.collection("ASSIGNMENT").doc('/'+req.params.id+'/');
            await document.delete();
            return res.status(200).send("Assignment Deleated");
        }
        catch (error) {
            return res.status(500).send(error);
        }
    })();
});

module.exports = router;