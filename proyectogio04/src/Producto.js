import './Producto.css';

function Producto({ producto, manejarDragStart }) {
  return (
    <div
      className="tarjeta-producto"
      draggable
      onDragStart={(e) => manejarDragStart(e, producto)}
    >
      <div className="emoji">{producto.emoji}</div>
      <h3>{producto.nombre}</h3>
      <p>${producto.precio.toLocaleString()}</p>
    </div>
  );
}

export default Producto;