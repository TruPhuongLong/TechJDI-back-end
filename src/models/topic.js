import mongoose from 'mongoose';

const _Topic = {
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    vote: {
        type: Number,
        default: 0,
    }
 
}

const TopicSchema = new mongoose.Schema(_Topic);

const Topic = mongoose.model('Topic', TopicSchema);

module.exports = { Topic }