const Post = require('../models/Post');
module.exports = {
	getAllPosts: async (req, res) => {
		res.send("get all posts");
	},      
 
	createNewPost: async (req, res) => {
		let { title, body } = req.body;
		let post = new Post(title, body);

		post = await post.save();
		console.log(post);
		res.send("create new posts");
	},
         
	getPostById: async (req, res) => {
		res.send("get post by id");
	},
};
