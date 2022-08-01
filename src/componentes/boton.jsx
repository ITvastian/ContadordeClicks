import '../hojas-de-estilo/boton.css';

function Boton ({texto, esBotondeClick, manejarClick }) {
  return(
		<button
		className={esBotondeClick ? 'boton-click' : 'boton-reiniciar'}
		onClick= {manejarClick} >
				{texto}
		</button>
	)
}

export default Boton;/*  con exportacion por defecto solo puedo exportar una cosa (boton) */