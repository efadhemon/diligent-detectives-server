const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const app = express()
const port = process.env.PORT || 4000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Diligent Directives Server Site Is Here :)')
})



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d0ugz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const bookingsCollection = client.db(process.env.DB_NAME).collection("bookings");
    const testimonialsCollection = client.db(process.env.DB_NAME).collection("testimonials");
    const adminCollection = client.db(process.env.DB_NAME).collection("admin");
    const serviceCollection = client.db(process.env.DB_NAME).collection("services");
    if (err) {
        console.log('DataBase Not Connected');
    } else {

        app.post('/addBooking', (req, res) => {
            const booking = req.body;
            bookingsCollection.insertOne(booking)
                .then(result => {
                    res.send(result.insertedCount > 0)
                })
        })

        app.get('/bookings', (req, res) => {

            bookingsCollection.find({ client_email: req.query.email })
                .toArray((err, document) => {
                    res.send(document)
                })
        })

        app.get('/clients', (req, res) => {

            bookingsCollection.find({})
                .toArray((err, document) => {
                    res.send(document)
                })
        })

        app.patch('/updateStatus/:id', (req, res) => {
            bookingsCollection.updateOne({ _id: ObjectId(req.params.id) }, {
                    $set: { status: req.body.newStatus }
                })
                .then(result => {
                    res.send(result.modifiedCount > 0)
                })

        })

        app.post('/addTestimonial', (req, res) => {
            const review = req.body;
            testimonialsCollection.insertOne(review)
                .then(result => {
                    res.send(result.insertedCount > 0);
                })
        })

        app.get('/testimonials', (req, res) => {

            testimonialsCollection.find({})
                .toArray((err, document) => {
                    res.send(document)
                })
        })

        app.post('/addAdmin', (req, res) => {
            const admin = req.body;
            adminCollection.insertOne(admin)
                .then(result => {
                    res.send(result.insertedCount > 0);
                })
        })

        app.get('/admin', (req, res) => {
            const email = req.query.email;
            adminCollection.find({ email: email })
                .toArray((err, document) => {
                    res.send(document[0])
                })
        })

        app.post('/addService', (req, res) => {
            const service = req.body;
            serviceCollection.insertOne(service)
                .then(result => {
                    res.send(result.insertedCount > 0);
                })
        })

        app.get('/service', (req, res) => {
            serviceCollection.find({})
                .toArray((err, document) => {
                    res.send(document)
                })
        })

        app.delete('/deleteService/:id', (req, res) => {
            serviceCollection.deleteOne({ _id: ObjectId(req.params.id) })
              .then(result => {
                res.send(result.deletedCount > 0)
              })
          })

          app.delete('/deleteTestimonial/:id', (req, res) => {
            testimonialsCollection.deleteOne({ _id: ObjectId(req.params.id) })
              .then(result => {
                res.send(result.deletedCount > 0)
              })
          })

    }

});


app.listen(port)