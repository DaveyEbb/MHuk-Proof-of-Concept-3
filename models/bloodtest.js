export class Bloodtest {er');
    created: {type: String, required: false},
    //title?: {type: String, required: false},
    //description?: {type: String, required: false},
    totalCholesterol?: {type: String, required: false},
    Hdl?: {type: String, required: false},
    Ldl?: {type: String, required: false},
    Triglycerides?: {type: String, required: false},
    HdlRatio?: {type: String, required: false}
    //user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Bloodtest', schema);