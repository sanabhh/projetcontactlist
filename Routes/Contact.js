const express = require('express')
const { addContact, readContacts, deleteContact, updateContact, readUser } = require('../Controllers/Contact')

const contactRouter = express.Router()

contactRouter.post('/addContact',addContact)

contactRouter.get('/readContacts',readContacts)

contactRouter.delete('/deleteContact/:id',deleteContact)

contactRouter.put('/updateContact/:id',updateContact)

contactRouter.get('/readUser/:id',readUser)

module.exports = contactRouter