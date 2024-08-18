import express from 'express';

const test = (req, res) => {
    res.json({ message: 'Hello from the API!' })
}

export default test