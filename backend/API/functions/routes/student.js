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
            await db.collection("STUDENTS").doc('/'+req.body.id+'/').create({
                name: req.body.name,
                age: req.body.age,
                class : req.body.class,
                category : req.body.category,
                concentation_score : req.body.concentation_score,
                time_table : req.body.time_table,
                result : req.body.result
            });
            return res.status(200).send("User created");  
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
            const document = await db.collection("STUDENTS").doc('/'+req.params.id+'/').get();
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
            let query = db.collection("STUDENTS");
            let response = [];
            await query.get().then(snapshot => {
                let docs = snapshot.docs;
                for (let doc of docs){
                    const data = {
                        id:doc.id,
                        name: doc.data().name,
                        age: doc.data().age,
                        class : doc.data().class,
                        category : doc.data().category,
                        concentation_score : doc.data().concentation_score,
                        time_table : doc.data().time_table,
                        result : doc.data().result
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
            const document = db.collection("STUDENTS").doc('/'+req.params.id+'/');
            await document.update({
                name: req.body.name,
                age: req.body.age,
                class : req.body.class,
                category : req.body.category,
                concentation_score : req.body.concentation_score,
                time_table : req.body.time_table,
                result : req.body.result
            });

            return res.status(200).send("User updated");
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
            const document = db.collection("STUDENTS").doc('/'+req.params.id+'/');
            await document.delete();
            return res.status(200).send("User Deleated");
        }
        catch (error) {
            return res.status(500).send(error);
        }
    })();
});

module.exports = router;