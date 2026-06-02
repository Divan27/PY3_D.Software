
import c from '../Controller/ProductoController';
import ProductCard from '../Components/ProductCard';
export default function(){
    const p=c.obtenerProductos();
    return <div>{p.map(x=><ProductCard key={x.id} producto={x}/>)}</div>
}
