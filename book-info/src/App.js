import pic from './imgs/logo.jpg'
import './App.css';
import Info from './info'

function App() {
  const descriptionString = "Coraline is a novella for young readers by Neil Gaiman. It was published in 2002. The novella tells the story of Coraline Jones, who finds a doorway to a parallel, sinister otherworld inside her new home, and must battle the evil \"Other Mother\" who lives there to secure her family's safety."
  const charactersNames = ['Coraline Jones', 'The Other Mother', 'The Cat', "Coraline’s Mother/Mrs. Jones", "Coraline’s Father/Mr. Jones"]
  const btnF = (headerName) => {
    console.log(headerName)
  }

  return (
    <div className="App">
      <img src={pic} alt="coraline" className='coraline_pic'/>
      <Info headerName = 'Coraline' year='2002' director='Neil Gaiman' description={descriptionString} characters={charactersNames} btn={btnF}/>
    </div>
  );
}

export default App;
