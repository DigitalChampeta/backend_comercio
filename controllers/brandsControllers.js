import BrandsModel from "../models/brandModel.js";


//Voy a escribir aquí todas las funciones de los métodos
export const getAllBrands = async (_req,res) => {
    try {
        const brands = await BrandsModel.findAll()
        res.json(brands)
    } catch(error) {
        res.status(500).json({message:error.message})
    }
}

//POST - the Create of CRUD

export const createBrand = async (req, res) => {
    try{
        await BrandsModel.create(req.body)
        res.json({message: "The brand has been created successfully!"})
    }catch (error){
        res.status(500).json({message: error.message})
    }
} 

//PUT

export const updateBrand = async (req, res) => {
    try {
        await BrandsModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The brand has been updated successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

//Delete


export const deleteBrand = async (req, res) => {
    try {
        await BrandsModel.destroy({where: {id:req.params.id}} );
        res.status(203).json({ message: 'The brand has been deleted successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};