import './ZonaPedido.css';

function ZonaPedido({ pedido, agregarAlPedido }) {
  const permitirDrop = (e) => {
    e.preventDefault();
  };

  const manejarDrop = (e) => {
    e.preventDefault();
    const producto = JSON.parse(e.dataTransfer.getData('producto'));
    agregarAlPedido(producto);
  };

  const total = pedido.reduce((acum, producto) => acum + producto.precio, 0);

  return (
    <div className="zona-pedido" onDragOver={permitirDrop} onDrop={manejarDrop}>
      <h2>Mi pedido</h2>

      {pedido.length === 0 ? (
        <p className="mensaje-vacio">Arrastra aquí tus productos</p>
      ) : (
        <>
          <ul>
            {pedido.map((producto, index) => (
              <li key={index}>
                {producto.emoji} {producto.nombre} - ${producto.precio.toLocaleString()}
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toLocaleString()}</h3>
        </>
      )}
    </div>
  );
}

export default ZonaPedido;