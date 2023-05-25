import express from 'express';
import Author from '../model/author';
import { auth } from '../middleware/auth'
const router = express.Router()

// Create an author
router.post('/', async (req, res) => {
    try {
        const { fullName, email } = req.body;
        const author = await Author.create({
            fullName, email
        });
        res.json(author);
    } catch (error) {
        res.status(500). json({
            error: 'Failed to create author'
        });
    }
})

export default router;
