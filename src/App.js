import React from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleAnalyzeButtonClick = () => {
    // Aquí va el código para analizar la imagen
  };

  const handleGenerateButtonClick = () => {
    // Aquí va el código para generar la imagen
  };

  return (
    <div className="App">
      <h1>Computer Vision</h1>
      <input type="text" value={imageUrl} onChange={handleInputChange} placeholder="Escribe la URL de la imagen aquí" />
      <button onClick={handleAnalyzeButtonClick}>Analizar imagen</button>
      <button onClick={handleGenerateButtonClick}>Generar imagen</button>
    </div>
  );
}

export default App;
