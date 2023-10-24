const Post = require('../models/Post');
module.exports = {
	getAllPosts: async (req, res) => {
		try {
			const [posts, _] = await Post.findAll();
			res.status(200).json({posts: posts});
		} catch (error) {
			console.error(error);
			next(error);
		}
	},      
 
	createNewPost: async (req, res) => {
		try {
			let { title, body } = req.body;
			let post = new Post(title, body);

			post = await post.save();
			console.log(post);
			res.status(201).json({message: "post created successfully"});
		} catch (error) {
			console.error(error);
			next(error);
		}
	},
         
	getPostById: async (req, res) => {
		res.send("get post by id");
	},
};
