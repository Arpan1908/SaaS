import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Convo.css'

function Convo() {

  const [cardData, setData] = useState([]); // State to store the data from the API

  useEffect(() => {
    // Use an effect to make the API request when the component mounts
    axios.get('https://api.escuelajs.co/api/v1/products') // Replace with the actual API endpoint
      .then((response) => {
        setData(response.data); // Set the data in the state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const cardsPerRow = 4; // Number of cards to display in a row

  // Split cardData into arrays of cardsPerRow items each
  const rowsOfCards = [];
  for (let i = 0; i < cardData.length; i += cardsPerRow) {
    rowsOfCards.push(cardData.slice(i, i + cardsPerRow));
  }

  return (
    <section>
    <div className="container">
      {rowsOfCards.length > 1 ? ( // Check if there are more than one row of cards
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {rowsOfCards.map((row, index) => (
              <div
                key={index}
                className={`carousel-item${index === 0 ? ' active' : ''}`}
              >
                <div className="card-group">
                  {row.map((card) => (
                    <div className="card mb-3" key={card.categoryId}>
                      <img
                        src={card.images}
                        className="card-img-top"
                        
                      />
                      <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.description}</p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
  id="carouselExampleControls"
  className="carousel slide"
  data-ride="carousel"
  data-interval="2000" // Set the auto-slide interval to 2 seconds (2000 milliseconds)
>
  
</div>

        </div>
      ) : (
        // If there is only one row of cards, display them without a carousel
        <div className="card-group">
          {rowsOfCards.map((card) => (
            <div className="card " key={card.categoryId}>
              <img
                src={card.images}
                className="card-img-top"
              
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </section>
  );
}

export default Convo;
