
import Producto from '../Model/Producto';

class ProductoController{
    obtenerProductos(){
        return [
            new Producto(1,'Balón Nike','Profesional',25000,10),
            new Producto(2,'Camiseta','Temporada actual',35000,5)
        ];
    }
}
export default new ProductoController();
