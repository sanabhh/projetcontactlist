const Contact = require("../Models/Contact")

exports.addContact=async(req,res)=>{
    try {
        const found = await Contact.findOne({email : req.body.email})
        if(found){
            return res.status(400).send('Contact already exists')
        }
        const newUser = new Contact(req.body)
        await newUser.save()
        res.status(200).send({Msg:'Contact Added',newUser})
    } catch (error) {
        res.status(500).send('Could not add contact')
    }
}

exports.readContacts=async(req,res)=>{
    try {
        const contacts = await Contact.find()
        res.status(200).send({Msg : "List of contacts",contacts})
    } catch (error) {
        res.status(500).send('Could not get contacts')
    }
}

exports.deleteContact=async(req,res)=>{
    try {
        const {id} = req.params
        await Contact.findByIdAndDelete(id)
        res.status(200).send({Msg : 'Contact deleted'})
    } catch (error) {
        res.status(500).send('Could not delete contact')
    }
}

exports.updateContact=async(req,res)=>{
    try {
        const {id} = req.params
        await Contact.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : 'Contact updated'})
    } catch (error) {
        res.status(500).send('Could not update contact')
    }
}

exports.readUser=async(req,res)=>{
    try {
        const {id} = req.params
        const oneContact = await Contact.findById(id)
        res.status(200).send({Msg:'The contact is',oneContact})
    } catch (error) {
        res.status(500).send('Could not get contact')
    }
}