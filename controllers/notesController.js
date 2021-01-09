const express = require('express');
var router = express.Router();

var dbConn = require('../dbConnection/dbConnection');

// Add a New Note  
router.post('/addNew', function (req, res) {
    let note = req.body;
    if (!note) {
      return res.status(400).send({ error:true, message: 'Please Provide a Note' });
    }

    let query = " Insert INTO Note (NoteHeading, NoteContent, IsArchived) values(?, ?, ?)"
    dbConn.query(query,[req.body.NoteHeading,req.body.NoteContent,req.body.IsArchived], function (error, results, fields) {
    if (error) throw error;
        return res.send({ error: false, data: results, message: 'New Note has been Added Successfully.' });
    });
});


// Retrieve all Notes 
router.get('/', function (req, res) {
    dbConn.query('SELECT * FROM Note', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Notes List.' });
    });
});

// Retrieve a Note with Id 
router.get('/:id', function (req, res) {
    let note_id = req.params.id;
    let query = "SELECT * FROM Note WHERE NoteId = ?";
    if (!note_id) {
     return res.status(400).send({ error: true, message: 'Please provide NoteId' });
    }
    dbConn.query(query,[note_id], function (error, results, fields) {
     if (error) throw error;
      return res.send({ error: false, data: results[0], message: 'Notes List.' });
    });
});


// Update Note with Id
router.put('/update', function (req, res) {
    let note_id = req.body.NoteId;
    let note = req.body;
    let query = "UPDATE note SET NoteHeading =?, NoteContent= ? WHERE NoteId= ? ";
    if (!note_id || !note) {
      return res.status(400).send({ error: note, message: 'Please Provide Note and Note Id' });
    }
    dbConn.query(query,[req.body.NoteHeading, req.body.NoteContent, note_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Note has been Updated Successfully.' });
     });
    });


    //  Delete a Note
router.delete('/delete/:id', function (req, res) {
    let note_id = req.params.id;
    let query ="DELETE FROM note WHERE NoteId = ?";
    if (!note_id) {
        return res.status(400).send({ error: true, message: 'Please Provide Note Id' });
    }
    dbConn.query(query,[note_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Note has been Deleted Successfully.' });
    });
    });

    //Archiving Notes
    router.put('/archive', function (req, res) {
        let note_id = req.body.NoteId;
        let note =  req.body;
        let query = "UPDATE note SET IsArchived=? WHERE NoteId= ? ";

        if (!note_id) {
          return res.status(400).send({ error: note, message: 'Please Provide Note Id' });
        }
        dbConn.query(query,[true,note_id], function (error, results, fields) {
          if (error) throw error;
          return res.send({ error: false, data: results, message: 'Note has been Archived Successfully.' });
         });
        });


        //UnArchiving Notes
        router.put('/unArchive', function (req, res) {
        let note_id = req.body.NoteId;
        let note =  req.body;
        let query = "UPDATE note SET IsArchived=? WHERE NoteId= ? ";

        if (!note_id) {
          return res.status(400).send({ error: note, message: 'Please Provide Note Id' });
        }
        dbConn.query(query,[false,note_id], function (error, results, fields) {
          if (error) throw error;
          return res.send({ error: false, data: results, message: 'Note has been UnArchived Successfully.' });
         });
        });

// Retrieve all Archived Notes 
router.get('/archived', function (req, res) {
    let query =  "SELECT * FROM Note WHERE IsArchived = ?";
    dbConn.query(query,[true], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Notes List.' });
    });
});

// Retrieve all UnArchived notes 
router.get('/unArchived', function (req, res) {
    let query =  "SELECT * FROM Note WHERE IsArchived = ?";
    dbConn.query(query,[false], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Notes List.' });
    });
});


module.exports = router;