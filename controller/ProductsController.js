import {
  SearchForProduct,
  DeleteProduct,
  UpdateProduct,
  GetProducts,
  CreateProduct,
} from "../models/ProductsModels.js";
export const getProductsCont = async (req, res) => {
  try {
    const products = await GetProducts();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// export const getProductsController = async (req, res) => {
//   try {

    
//     const products = await fetch(`https://api.escuelajs.co/api/v1/products/`)
//     res.json(products);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// export const GetProducts= async()=>{
//   return fetch(`https://api.escuelajs.co/api/v1/products/`)
// }
export const SearchForProductCont = async (req,res)=>{
try{
  // return fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  const { id } = req.params;
   
  const Product= await SearchForProduct(id);
  res.json(Product)
}catch(error){
  console.log(error)
  res.status(500).json({ error: "Internal server error" })
}
}
export const DeleteProductCont = async (req,res)=>{
  try{
    const { id } = req.params;
    await DeleteProduct(id)
    res.sendStatus(204);
  }catch{
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
export const UpdateProductCont = async (req,res)=>{
  try{
    const { id } = req.params;
    const body =req.body
    const product= await UpdateProduct(id,req.body)
    res.json(product)
  }catch (error) {
    console.log("error");
    res.status(400).json(JSON.parse(error.message));
  }
}
export const CreateProductCont= async (req,res)=>{
  try {
    const newProduct = await CreateProduct(req.body);
    res.send({ newProduct });
  } catch (error) {
    console.log(error);
    res.status(400).json(JSON.parse(error.message));
  }
}