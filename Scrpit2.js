import express, { json } from "express";
import {
  validateProduct,
  validateProductUpdate,
} from "./Validation/Validation.js";
import {
  CreateProductCont,
  getProductsCont,
  SearchForProductCont,
   UpdateProductCont,
  DeleteProductCont,
} from "./controller/ProductsController.js";
import { DeleteProduct } from "./models/ProductsModels.js";
// import { categorizeProducts } from "./services/product-categorization.js";

const app = express();
// app.use(require('body-parser').urlencoded({ extended: false }));
// app.use(bodyParser.json({extends:true}));
app.use(express.json())
app.use(express.urlencoded({extends:true}))
app.use(json());


app.get("/", getProductsCont);

app.get("/:id", SearchForProductCont);

app.put("/:id",UpdateProductCont)

app.delete("/:id",DeleteProductCont)

app.post("/",CreateProductCont)
app.listen(process.env.PORT||3050, () => console.log("Server running on http://localhost:3050"));