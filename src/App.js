import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [newsArticle, setNewsArticle] = useState([]);
  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/").then(
      (response) => response.json()).then((data) =>{
     setNewsArticle(data.results);
  
    })
  }, []);

  return (
   <div className="App">
      <div className='top'>
        <h1>Space News Articles</h1>
      </div>
      <div className='article_con'>
        {newsArticle.map((val,key) => {
          return (
          <div className='article'>
             <h3 key={key}>{val.title}</h3>
              <img key={key} src={val.image_url} />
              <p key={key}>summary: <br/>{val.summary}</p>
              <h4 key={key}>Published:{val.published_at}</h4>
              <h4 key={key}>Updated: {val.updated_at}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
