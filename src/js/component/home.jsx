import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import productGenerator from "../const/products";

/**
 * const [state, setState] = useState([])
 * El setState: una funcion Reemplaza el valor previo por un valor nuevo
 * setState([...state, nuevoElemento])
 * ...state: Hace referencia a lo que ya tiene el estado previamente
 * nuevoElemento: Es lo que queremos agregar a ese arreglo
 */


//create your first component
const products = productGenerator(20);
const Home = () => {
	// useState solo se puede declarar a nivel base
	// LOS ESTADOS AL PRINCIPIO Card
	const [cart, setCart] = useState([]); // Asi iniciamos una lista vacia
	const [showCart, setShowCart] = useState(false);

	// navtabs

	// const productMasUno = [...products, {nuevoProducto}]
	// Como trabajar arreglos con estado
	// Un carrito de compras

	function addToCart(product) {
		// 
		setCart([...cart, product])
	}

	function removeFromCart(productToRemove) {
		// Array.filter = filtrar
		// Devuelve todos los elementos que cumplan una condicion
		// Array.filter((elemento) => elemento == condicion);
		// creamos un arreglo nuevo sin el elemento que queremos eliminar ! = =
		const newArray = cart.filter((product) => product.id !== productToRemove.id);
		setCart(newArray)
	}

	return (
		<div className="container mt-5">
			<div className="d-flex justify-content-center gap-2">
				<button
					onClick={() => setShowCart(false)}
					className="btn btn-primary">Productos</button>
				<button
					onClick={() => setShowCart(true)}
					className="btn btn-danger">Carrito</button>

			</div>
			{showCart ?
				cart.map((product) => {
					return (

						<div
							className="card my-1"
							key={`carrito-${product.id}`}
						>
							<div className="card-body">
								<div className="d-flex justify-content-between">

									<h2 className="card-title">
										{product.name} - {product.price}$
									</h2>
									<button
										className="btn btn-danger"
										onClick={() => removeFromCart(product)}
									>
										<i className="fas fa-trash"></i>
									</button>
								</div>
							</div>
						</div>
					)

				})
				:
				products.map((product) => {
					return (
						<div
							className="card my-1"
							key={`productos-${product.id}`}
						>
							<div className="card-body">
								<div className="d-flex justify-content-between">

									<h2 className="card-title">
										{product.name} - {product.price}$
									</h2>
									<button
										className="btn btn-primary"
										onClick={() => addToCart(product)}
									>
										<i className="fas fa-plus"></i>
									</button>
								</div>
							</div>
						</div>
					);
				})
			}

		</div>
	);
};

export default Home;
