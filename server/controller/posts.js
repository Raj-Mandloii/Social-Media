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