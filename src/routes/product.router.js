import { Router } from "express";


const productRouter = Router();

productRouter.get("/",async (req, res) => {

    const product=await ProductModels.find()
    res.send(product)
})
productRouter.post("/",async (req, res) => {

    const product=req.body
    const response=await ProductModels.create(product)
    res.send(response)
    })

    export default productRouter;