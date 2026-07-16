import {Product} from '../models/Product.js';

/**
 * Fetches all products that are mobiles
 */

export const getMobiles = async () => {
    const mobiles = await Product.find({productCode : {$regex : /^MOB/i} });
    return mobiles;
}

export const getTablets = async () => {
    const tablets = await Product.find({productCode: {$regex: /^TAB/i} })
    return tablets
}

export const deleteProduct = async (productName) => {
    const deletedProduct = await Product.findOneAndDelete({productName: productName})
    return deletedProduct;
}