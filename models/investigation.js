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
//     User.findById(investigation.user, function (err, user) {
//         user.investigations.pull(emisdata);
//         user.save();
//     });
// });

module.exports = mongoose.model('Investigation', schema);