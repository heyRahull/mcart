import * as productService from '../services/productService.js';

export const getAllMobiles = async (req, res) => {
    try{
        const allMobilesData = await productService.getMobiles();
        res.status(200).json({
            success: true,
            message: "Mobile details fetched successfully",
            data: allMobilesData
        }) 

    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

export const getAllTablets = async (req, res) => {
    try{
        const allTabletsData = await productService.getTablets();
        res.status(200).json({
            success: true,
            message: "Tablets Data fetched successfully",
            data: allTabletsData
        })

    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

export const deleteProductController = async (req, res) => {
    try{
        const {product} = req.params;
        const deletedProduct = await productService.deleteProduct(product);

        if(!deletedProduct){
            return res.status(404).json({
                message: "Product not available"
            })
        }

        res.status(200).json({
            success:true,
            message: `${product} product has been removed successfully`,
            details: deletedProduct
        })


    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}



