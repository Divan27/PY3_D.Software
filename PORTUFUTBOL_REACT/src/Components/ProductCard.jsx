
export default function ProductCard({producto}){
const comprar=()=>window.open(`https://wa.me/50688888888?text=Hola,%20deseo%20comprar%20${producto.nombre}`,'_blank');
return <div style={{border:'1px solid #ccc',margin:'10px',padding:'10px'}}>
<h3>{producto.nombre}</h3>
<p>{producto.descripcion}</p>
<p>₡{producto.precio}</p>
<button onClick={comprar}>Comprar por WhatsApp</button>
</div>
}
