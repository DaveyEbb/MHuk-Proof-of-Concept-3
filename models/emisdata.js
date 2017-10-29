var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    created: {type: String, required: true},
    title: {type: String, required: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    result: {type: String, required: true},
    //user: {type: Schema.Types.ObjectId, ref: 'User'}
});

// schema.post('remove', function (emisdata) {
//     User.findById(emsidata.user, function (err, user) {
//         user.emisdatas.pull(emisdata);
//         user.save();
//     });
// });

module.exports = mongoose.model('Emisdata', schema);