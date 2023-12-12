const crypto = require('node:crypto')
const menu = [
    {
        id: crypto.randomUUID(),
        name: "Carpacho Fresco",
        description: "Entrada Carpaccio de salmón con cítricos",
        price: 65.50,
        imagen: "Carpaccio-de-salmon.jpg",
    },
    {
        id: crypto.randomUUID(),
        name: "Risotto de berenjena",
        description: "Risotto de berenjena y queso de cabra",
        price: 47.00,
        imagen: "Risotto-berenjena-queso-cabra.jpg",
    },
    {
        id: crypto.randomUUID(),
        name: "Mousse de arroz",
        description: "Mousse de arroz con leche y aroma de azahar",
        price: 27.50,
        imagen: "Mousse-de-arroz-con-leche.jpg",
    },
    {
        id: crypto.randomUUID(),
        name: "Espárragos blancos",
        description: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        price: 37.50,
        imagen: "esparragos.png",
    },
    {
        id: crypto.randomUUID(),
        name: "Asado criollo",
        description: null,
        price: 100.50,
        imagen: "asado.jpg",
    },
];
  
module.exports={
    index : (req,res) => {
        return res.render('index',{
            menu
        })
    },
    detail :(req,res) => {
        const {id} =req.params
        const item = menu.find(item => item.id === id)
        return res.render('detalleMenu', {
            item
        })
    }
}