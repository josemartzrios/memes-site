import html2canvas from 'html2canvas';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [lineaUno, setLineaUno] = useState('');
  const [lineaDos, setLineaDos] = useState('');
  const [imagen, setImagen] = useState('')

  const onChangeEvent1 = (e) => {
    setLineaUno(e.target.value);
    
  }

  const onChangeEvent2 = (e) => {
    setLineaDos(e.target.value);
  }

  const onChangeSelect = (evento) => {
    setImagen(evento.target.value);
  }
  
  const functionExportar = (e) => {

      html2canvas(document.querySelector("#meme")).then(canvas => {
      // converti en canvas mi imagen
      // Ya que hice eso descargo el canvas a mi dispositivo 
      var img = canvas.toDataURL('image/png');
      
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click()
    });
  }

  return <>
    <div className='App'>

      <select onChange={onChangeSelect}>
        <option value='Dicaprio'>Dicaprio</option>
        <option value='Futurama'>Futurama</option>
        <option value='Wonka'>Wonka</option>
      </select> <br/><br/>

      <input type='text' placeholder='Primera línea'  onChange={onChangeEvent1}/><br/>
      <input type='text' placeholder='Segunda línea'  onChange={onChangeEvent2}/><br/><br/>

    <button onClick={functionExportar}>Descargar</button> 

    </div>

    <div className='imgDiv' id='meme'>
      <span>{lineaUno}</span>
      <span>{lineaDos}</span>
      {/* para seleccionar la imagen del meme */}
      <img src={"/img/" + imagen + ".jpg"} />
    </div>
  </>
  
}

export default App;
