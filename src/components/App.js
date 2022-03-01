// create your App component here
import React, {useState, useEffect} from 'react'

function App() {
    const [dog, setDog] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(dog => {
            setDog(dog.message);
            setIsLoaded(true)
        })
    }, [])
  return (
    <div>{isLoaded ? <img src={dog} alt="A Random Dog"/> : <p>Loading...</p>}</div>
  )
}

export default App