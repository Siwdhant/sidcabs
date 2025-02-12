const mongoose = require('mongoose');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required:true,
            minlength:[3,'First Name must be at least 3 characters long'],
        },
        lastname:{
            type:String,
            required:true,
            minlength:[3,'Last Name must be at least 3 characters long'],
        }
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Invalid Email'],
        },        
        password: {
            type: String,
            required: true,
            select: false,
        },
        socketId:{
            type:String,
        },  
               
        status:{
            type:String,
            enum:['active','inactive'],
            default:'inactive',
        },
        vehicle:{
            color:{
                type:String,
                required:true,
                minlength:[3,'Color must be at least 3 characters long'],
            },
            plate:{
                type:String,
                required:true,
                minlength:[3,'Plate must be at least 3 characters long'],
            },
            capacity:{
                type:Number,
                required:true,
                min:[1,'Capacity must be at least 1'],
            },
            vehicleType:{
                type:String,
                required:true,
                enum:['car','motorcycle','auto'],
            },
        },
        location:{
            lat:{
                type:Number,
            },
            lng:{
                type:Number,    
            }
        }
    })

    captainSchema.methods.generateAuthToken = function () {
        const token = jsonwebtoken.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        return token;
    };


  captainSchema.methods.comparePassword = async function (password) {
  }

  captainSchema.statics.hashPassword = async function (password) {  
  }


    const captainModel = mongoose.model('captain', captainSchema); 