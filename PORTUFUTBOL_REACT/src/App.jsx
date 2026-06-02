import {useState} from 'react';
import InicioView from './View/InicioView';
import ProductosView from './View/ProductosView';
import CategoriaView from './View/CategoriaView';
import ContactoView from './View/ContactoView';

export default function App(){
 const [v,setV]=useState('inicio');
 return <div style={{fontFamily:'Arial',padding:'20px'}}>
 <h1>PORTUFUTBOL</h1>
 <button onClick={()=>setV('inicio')}>Inicio</button>{' '}
 <button onClick={()=>setV('productos')}>Productos</button>{' '}
 <button onClick={()=>setV('categorias')}>Categorías</button>{' '}
 <button onClick={()=>setV('contacto')}>Contacto</button>
 <hr/>
 {v==='inicio'&&<InicioView/>}
 {v==='productos'&&<ProductosView/>}
 {v==='categorias'&&<CategoriaView/>}
 {v==='contacto'&&<ContactoView/>}
 </div>
}
