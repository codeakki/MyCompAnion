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
            await db.collection("TEACHERS").doc('/'+req.body.id+'/').create({
                name: req.body.name,
                category : req.body.category,
                class : req.body.class,
                study_material : req.body.study_material,
                assignment : req.body.assignment 
            });
            return res.status(200).send("Teacher created");  
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
            const document = await db.collection("TEACHERS").doc('/'+req.params.id+'/').get();
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
            let query = db.collection("TEACHERS");
            let response = [];
            await query.get().then(snapshot => {
                let docs = snapshot.docs;
                for (let doc of docs){
                    const data = {
                        id:doc.id,
                        name:doc.data().name,
                        category:doc.data().category,
                        class:doc.data().class,
                        study_material:doc.data().study_material,
                        assignment:doc.data().assignment 
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
            const document = db.collection("TEACHERS").doc('/'+req.params.id+'/');
            await document.update({
                name: req.body.name,
                category : req.body.category,
                class : req.body.class,
                study_material : req.body.study_material,
                assignment : req.body.assignment 
            });

            return res.status(200).send("Teacher updated");
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
            const document = db.collection("TEACHERS").doc('/'+req.params.id+'/');
            await document.delete();
            return res.status(200).send("Teacher Deleated");
        }
        catch (error) {
            return res.status(500).send(error);
        }
    })();
});

module.exports = router;