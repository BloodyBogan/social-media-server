const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: Date,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: Date,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
});

module.exports = model('Post', PostSchema);
