const Post = require("../models/blogPost");
const Comment = require("../models/blogComments");

exports.createComment = async(req, res) => {
      try {
            const {post, user, body} = req.body;
            const comment = new Comment({
                  post, user, body
            });
            const savedComment = await comment.save();
            const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true})
            .populate("comment")
            .exec();

      res.json({
            post: updatedPost,
      });
      } 
      catch (error) {
            return res.status(500).json({
                  error:"Error while creating comment",
            });
      }
};
exports.dumyLink = (req, res) => {
      res.send("This is your Dumy Page");
}