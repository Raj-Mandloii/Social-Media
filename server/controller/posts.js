import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js"



export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages)
    } catch (e) {
        res.status(400).json({ message: e.message })
    }

}


export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post);
    console.log("POST", post)
    console.log("NEW POST", newPost)

    try {
        await newPost.save()

        res.status(201).json(newPost)
    }
    catch (e) {
        res.status(409).json({ message: e.message })
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}