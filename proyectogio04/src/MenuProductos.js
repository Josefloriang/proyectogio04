import { useState } from 'react';
import './MenuProductos.css';
import Producto from './Producto';
import ZonaPedido from './ZonaPedido';

function MenuProductos() {
  const [pedido, setPedido] = useState([]);

  const productos = [
    { id: 1, nombre: 'Hamburguesa', emoji: '🍔', precio: 18000 },
    { id: 2, nombre: 'Pizza', emoji: '🍕', precio: 22000 },
    { id: 3, nombre: 'Papas', emoji: '🍟', precio: 9000 },
    { id: 4, nombre: 'Gaseosa', emoji: '🥤', precio: 6000 },
    { id: 5, nombre: 'Helado', emoji: '🍨', precio: 8000 },
    { id: 6, nombre: 'Perro caliente', emoji: '🌭', precio: 12000 }
  ];

  const manejarDragStart = (e, producto) => {
    e.dataTransfer.setData('producto', JSON.stringify(producto));
  };

  const agregarAlPedido = (producto) => {
    setPedido([...pedido, producto]);
  };

  return (
    <div className="contenedor-menu">
      <div className="catalogo">
        <h2>Productos disponibles</h2>
        <div className="lista-productos">
          {productos.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
              manejarDragStart={manejarDragStart}
            />
          ))}
        </div>
      </div>

      <ZonaPedido pedido={pedido} agregarAlPedido={agregarAlPedido} />
    </div>
  );
}

export default MenuProductos;