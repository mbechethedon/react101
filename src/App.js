import './App.css';
import restaurants from './restaurants.jpeg';

function Header(props) {
  
  return(
<header>
  <h1>{props.name}'s Kitchen</h1>
</header>
  );
  
}
function Main(props) {
  return(
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={restaurants} alt={props.adjective} height="700" />
      <ul style={{textAlign:"left"}}>
       {props.dishes.map((dish)=>(<li key={dish.id}>{dish.title}</li>))}
      </ul>
     
    </section>
  );
}

function Footer(props) {
  return(
<footer>
  <p> Copyright @{props.year}</p>
</footer>
  );
}
const dishes= [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Fish"
];

const dishObjects = dishes.map((dish,i)=>({id:i,title:dish}));


function App() {
  return (
    <div className="App">
      <Header name="Mbeche" />
      <Main  adjective="Delicious" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
     
    </div>
  );
}

export default App;
