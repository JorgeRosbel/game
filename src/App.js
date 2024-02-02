import './App.css';
import {Input} from  './component/input';


const WORDS = [
  'manzana', 'guitarra', 'montana', 'ciudad', 'sol', 'ocean', 'ventana', 'avion', 'libro', 'cancion',
  'tierra', 'cafe', 'jardin', 'reloj', 'rayo', 'heroe', 'luz', 'puente', 'cascada', 'calle',
  'ocaso', 'espejo', 'isla', 'flor', 'rio', 'nieve', 'arbol', 'silencio', 'fuego', 'hoja',
  'viaje', 'teatro', 'mascara', 'risa', 'sombra', 'arcoiris', 'travesia', 'deseo', 'sendero', 'estrella',
  'eco', 'nube', 'invierno', 'verano', 'felicidad', 'sombrero', 'mariposa', 'susurro', 'azul', 'espacio',
  'silla', 'azucar', 'carretera', 'montana', 'guitarra', 'ocean', 'hoja', 'puente', 'aventura', 'risueno',
  'escalera', 'cristal', 'dorado', 'tormenta', 'palabra', 'fantasma', 'brillante', 'lagrima', 'alegria', 'secret',
  'cautivador', 'rincon', 'risa', 'calido', 'aleteo', 'bisonte', 'ciervo', 'maravilla', 'espejismo', 'selva',
  'nostalgia', 'nacar', 'orquidea', 'horizonte', 'pradera', 'fugaz', 'sinfonia', 'torrente', 'candil', 'quimera',
  'ebano', 'serenata', 'serendipia', 'melodia', 'efimero', 'murmullo', 'silueta', 'petalo', 'fragancia', 'sereno'
];

const test = Array.from({length:40}, ()=> WORDS[ Math.random() * WORDS.length | 0 ]).join(" ")


function App() {

  
  return (
    <div className="App">
      <Input test={test} />
    </div>
  );
}

export default App;


