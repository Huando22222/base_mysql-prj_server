const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();

router.post("/:id", postController.getPostById);

router.route("/")
    .get(postController.getAllPosts)
    .post(postController.createNewPost);


module.exports = router;
