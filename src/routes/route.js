// const express = require("express")
const router = require("express").Router()

router.get("/", async (req, res) => {
    res.status(200).send({ status: false, message: "Api is working" })
})

module.exports = router