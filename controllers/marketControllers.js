import ProductsModel from "../models/marketModels.js";


//Voy a escribir aquí todas las funciones de los métodos
export const getAllProducts = async (_req,res) => {
    try {
        const products = await ProductsModel.findAll()
        res.json(products)
    } catch(error) {
        res.status(500).json({message:error.message})
    }
}

//POST - the Create of CRUD

export const createProduct = async (req, res) => {
    try{
        await ProductsModel.create(req.body)
        res.json({message: "The product has been created successfully!"})
    }catch (error){
        res.status(500).json({message: error.message})
    }
} 

//PUT
export const updateProduct = async (req, res) => {
    try {
        await ProductsModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The jewel has been updated successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

//Delete


export const deleteProduct = async (req, res) => {
    try {
        await ProductsModel.destroy({where: {id:req.params.id}} );
        res.status(203).json({ message: 'The product has been deleted successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};