import React, {useEffect,useState} from "react";
import Navbar from "./Components/Navbar";
import Characters from "./Components/Characters";
import Pagination from "./Components/Pagination";



function App() {
  const [characters, setcharacters] = useState([]);
  const[info,setInfo]=useState({})

  const initialUrl= "https://rickandmortyapi.com/api/character";
  const fetchCharters=(initialUrl)=>{
    fetch(initialUrl)
     .then(response=>response.json())
     .then(data=> {
       setcharacters(data.results);
       setInfo(data.info);
        })
     .catch ((error) => console.log(error))
  };
  const onPrevious=()=>{
    fetchCharters(info.prev);

  }
  const onNext=()=>{
    fetchCharters(info.next);
    
  }

 useEffect(()=>{
  fetchCharters(initialUrl);
 },[])


  return (
    <>  
    <Navbar brand="Rick And Morty App" />

     <div className="container mt-5" >
      <Pagination 
       prev={info.prev}
       next={info.next} 
       onPrevious={onPrevious}
       onNext={onNext}
      />
      <Characters characters={characters}/>
      <Pagination 
       prev={info.prev}
       next={info.next} 
       onPrevious={onPrevious}
       onNext={onNext}
      />
    </div>
    </>  
  );
}

export default App;
