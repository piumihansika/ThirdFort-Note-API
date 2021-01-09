const supertest = require('supertest');
const app = require('../index');

describe("Testing the Note API", () => {

	it("tests the base route for retreiving all the Notes and returns true for status", async () => {
		const response = await supertest(app).get('/notes');
		expect(response.status).toBe(200);
    });
    

    it("tests the base route for retrieving a Note by Id and returns true for status", async () => {

		const response = await supertest(app).get('/notes/:id');
        expect(response.status).toBe(200);
		

    });
    
    it("tests the post route for adding a new note endpoint and returns as success message", async () => {

		const response = await supertest(app).post('/notes/addNew').send({
            NoteHeading: 'Test Heading',
            NoteContent: 'Test Content',
			IsArchived: true
		});

		expect(response.status).toBe(200);
		expect(response.body.message).toBe('New Note has been Added Successfully.');

    });
    
    it("tests the delete route for deleting a existing note endpoint and returns as success message", async () => {

		const response = await supertest(app).delete('/notes/delete/:id');

		expect(response.status).toBe(200);
		expect(response.body.message).toBe('Note has been Deleted Successfully.');

    });

    it("tests the put route for updating a existing note endpoint and returns as success message", async () => {

		const response = await supertest(app).put('/notes/update').send({
           NoteId: 1,
           NoteHeading: "Test Edit",
           NoteContent: "Test Content",
           IsArchived: false
		});

		expect(response.status).toBe(200);
		expect(response.body.message).toBe('Note has been Updated Successfully.');

    });

    it("tests the put route for Archiving a existing note endpoint and returns as success message", async () => {

		const response = await supertest(app).put('/notes/archive').send({
           NoteId: 1
          
		});

		expect(response.status).toBe(200);
		expect(response.body.message).toBe('Note has been Archived Successfully.');

    });

    it("tests the put route for UnArchiving a existing note endpoint and returns as success message", async () => {

		const response = await supertest(app).put('/notes/unArchive').send({
           NoteId: 1
          
		});

		expect(response.status).toBe(200);
		expect(response.body.message).toBe('Note has been UnArchived Successfully.');

    });

    it("tests the base route for retreiving all the Archived Notes and returns true for status", async () => {
		const response = await supertest(app).get('/notes/archived');
		expect(response.status).toBe(200);
    });

    it("tests the base route for retreiving all the UnArchived Notes and returns true for status", async () => {
		const response = await supertest(app).get('/notes/unarchived');
		expect(response.status).toBe(200);
    });



});