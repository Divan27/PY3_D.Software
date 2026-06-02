export default 
class Producto{
    constructor(id,nombre,descripcion,precio,stock){
        Object.assign(this,{id,nombre,descripcion,precio,stock})
    }
}