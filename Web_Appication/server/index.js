const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')
const UsersModel = require('./models/Users')
const RoomsModel = require('./models/Rooms')
const RequestsModel = require('./models/Requests')

app.use(cors());
app.use(express.json());
// Database Connection
mongoose.connect("mongodb+srv://root:1234@project.wkzdg.mongodb.net/room_reservation?retryWrites=true&w=majority", { useNewUrlParser: true });

app.post('/adduser', async (req, res) => {
    const user = req.body.user
    const pass = req.body.pass
    const first_name = req.body.firstname
    const last_name = req.body.lastname

    const email = req.body.Email
    const status = req.body.Status

    const role = req.body.Role


    const Users = new UsersModel({
        user: user,
        pass: pass,
        firstname: first_name,
        lastname: last_name,
        Email: email,
        Status: status,
        Role: role,
    });

    await Users.save();
    res.send('Success')
});

app.get('/readuser', async (req, res) => {
    UsersModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.put("/updateuser", async (req, res) => {
    const newPass = req.body.newPass
    const newFirstName = req.body.newFirstName
    const newLastName = req.body.newLastName
    const newAge = req.body.newAge;
    const id = mongoose.Types.ObjectId(req.body.id);
    console.log(id);
    try {
        await UsersModel.findById(id, (error, res) => {
            res.pass = newPass;
            res.firstname = newFirstName;
            res.lastname = newLastName;
            res.age = Number(newAge);
            res.save();
        });
    } catch (err) {
        console.log(err);
    }

    res.send("updated");
})

app.delete('/deleteuser/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await UsersModel.findByIdAndRemove(id).exec()
        res.send("itemdeleted");
    }
    catch (err) {
        console.log(err);
    }

})


app.post('/addroom', async (req, res) => {
    const id_room = req.body.id_room
    const Name = req.body.Name
    const Detail = req.body.Detail
    const Contributer = req.body.Contributer
    const Building = req.body.Building


    const Rooms = new RoomsModel({
        id_room: id_room,
        Name: Name,
        Detail: Detail,
        Contributer: Contributer,
        Building: Building,
    });

    await Rooms.save();
    res.send('Success')
});


app.get('/readroom', async (req, res) => {
    RoomsModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})


// app.put("/updateroom", async(req,res) =>{
//     const newAge = req.body.newAge;
//     const id = req.body.id;
//     console.log(newAge,id);

//     try{
//         await UsersModel.findById(id, (error, friendToUpdate) => {
//             friendToUpdate.age = Number(newAge);
//             friendToUpdate.save();
//         });
//     } catch (err) {
//         console.log(err);
//     }

//     res.send("updated");
// })

app.delete('/deleteroom/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await RoomsModel.findByIdAndRemove(id).exec()
        res.send("itemdeleted");
    }
    catch (err) {
        console.log(err);
    }

})

app.get('/readrequest', async (req, res) => {
    RequestsModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log('You are connected!');
})