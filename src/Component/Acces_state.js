import  React,{useState} from "react";
/*function useInterval(timeout, getValue){
  const [value, setValue]=useState(getValue);
  useEffect(()=>{
    const intervalID=setInterval(
      () => setValue(getValue()),
       timeout
       );
       return function(){
        clearInterval(intervalID);
      }
  },[]);
  return value;
}
const getCurrentDate=()=>new Date();

function App() {
  const date=useInterval(1000, getCurrentDate);
  return <p>Nous sommes le {date}</p>
/*function Exemple(){
  const[count,setCount]=useState(0);
  //useEffect is the equivalent of componentDidMount && ComponentDidUpdate in functional compnenent

  useEffect(()=>{
    //Update the document title in your page in each clicks
    document.title='You clicked '+ count+' time';
  });
  return(
    <div>
      <p>Count the numbe rof clicks in your page title : </p>
      <button onClick={()=> setCount(count+1)}>
        Click here
        </button>
       
    </div>
  )
}

  //exemple
  const Welcome=props=>{
    const [name, setName]=useState('Sokhna');
    return(
      <div>
      <p>Welcome {name}</p>
      </div>
    )
  }

//Acceder à l'etat
  const MyFonctionComponent=props=>{
    //settings the state hooks
    const [name, setName]=useState("Sokhna Faye");
    //on utilise le setter pour changer le nom
    const handleClick=()=>setName("Mbene Faye");
    return(
        <div>
             
            <p>hello my name is {name}</p>
            <button onClick={handleClick}>Click if you want to give the crown to Mbene Faye</button>
        </div>
    );
};*/

/*let [name, setName]=useState("Sokhna");
//we declare referring to input inside variable
let nameRef = useRef();
//we are refering  to input to change the value
const SubmitButton=()=>{
  setName(nameRef.current.value);
};
  return (
    <div className="App">
      {/*<Welcome></Welcome>
      <MyFonctionComponent></MyFonctionComponent>
  <Exemple></Exemple> }
    <p>{name}</p>
    <h1>Who is your favorite games of throne character</h1>

    <div>
      <input
      placeholder='Enter your preferred Games of throne character ...'
      ref={nameRef}
      type='text'>
      </input>
      <button type='button' onClick={SubmitButton}></button>
    </div>
    </div>

  );
}*/