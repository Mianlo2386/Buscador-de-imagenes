import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
function App() {
  const [valor,setValor] = useState('');
  const [resultados,setResultados] = useState([]);
  /* const ACCESS_KEY = '9NQwitXw0qC17sFzywcOn6vsSMj0TPvaGO5CEchO7I4'
  const endPoint = 'https://api.unsplash.com/search/photos';

async function getImages(query){
     let response = await fetch(endPoint + '?query=' + query + 
    '&client_id=' + ACCESS_KEY)
    let jsonResponse = await response.json();
    let imagesList = await jsonResponse.results;
    return imagesList;
    }
    


function createImages(imagesList){
    for(let i = 0 ; i < imagesList.length ; i++ ) {
    const image = document.createElement('img');
    image.src = imagesList[i].urls.thumb;
    document.body.appendChild(image);
    }
    }

    createImages(getImages(query));

    getImages('random');  */


  const buscarResultado = async ()=> {
    const ACCESS_KEY = '9NQwitXw0qC17sFzywcOn6vsSMj0TPvaGO5CEchO7I4'
    const URL = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${valor}&per_page=50`
    const respuesta = await fetch(URL);
    const data = await respuesta.json();
    setResultados(data.results)
    console.log(data) 
  }
  return (
    <div className="App">
      <div className='CajaDeBusqueda'>
        <input className='CajaDeBusqueda--input' placeholder='Buscar Imagenes...' onChange={e=> setValor(e.target.value)} />
        <button onClick={()=>buscarResultado()}  className='CajaDeBusqueda--btn'><i className="bi bi-search"></i></button>
      </div> 
      { 
      <div className='contenido'>{
        resultados.map((elemento,index)=> {
          return (
            <div className='contenido-grid'>
              <img key = {index} src={elemento.urls.regular}/>
              <p>Ubicación: Lorem ipsum dolor</p>
              <p>Cámara: Lorem ipsum dolor</p>
              <p>Tags Tags Tags</p>
          </div>
          )
        })
      }   
      </div> }
    </div>
  )
  }

export default App