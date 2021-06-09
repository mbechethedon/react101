import './App.css';


function SecretComponent(){
  return(
<h1>Super secret information for authorized users only</h1>
  );
}

function RegularComponent() {
  return <h1>Everyone can see this Component.</h1>
  
}


function App(props) {
  if(props.authorized){
    return <SecretComponent /> ;
  } else{
    return <RegularComponent /> ;
  }
 
}

export default App;
