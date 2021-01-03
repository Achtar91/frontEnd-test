import React, {useState, useEffect} from 'react'
import PopUp from './PopUp'


/*Convert month from number to string*/
 function convMonth(num) {
    let month = ["Ian","Feb","Mar","Apr",
                 "May","Jun","Jul","Aug",
                 "Sep","Oct","Nov","Dec"];
    return month[num-1];
}

/*Saving date in the correct format*/
 function getmyDate(myDate){
     var d =  new Date(myDate * 1000);
     var monthString = convMonth(d.getMonth()+1).toString();
     var finString = monthString.concat(" ",d.getDate(),","," ",d.getFullYear());
   return finString;
 }


function Cards() {

  const [info, setInfo] = useState([]);
  const [openBtn, setopenBtn] = useState(false);
  const [saveId, setSaveId] = useState(0);
  const [myError, setMyError] = useState(null);

/*Geting the data from the api*/
  useEffect(() => {
      let url_api = 'https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts';
        fetch(url_api)
        .then((j) => j.json())
        .then((info) => setInfo(info))
        .catch((myError) => setMyError(myError));
  },[]);

  if(myError){
    return console.log("Error");
  }

  /*Changing the open state value*/
  const openPopUp = () =>{
    setopenBtn(open => !open);
  }


  return (
    <div className = "cards">
        {info.map(item =>
            <div key = {item.id} className="item">
              <div className = "img-parent" onClick={ () => setSaveId(item.id)}>
                  <div className = {item.id === 4 ? "card-overlay" : ""}></div>
                  <img  src = {item.thumbnail.large} className = "cards-img"  alt=" " />
                  <span className ="link-text" onClick={openPopUp}>{item.id === 4 ? "learn more" : ""}</span>
              </div>
               <ul className = "bullets">
                 <li className = "blue"></li>
                 <li className = "yellow"></li>
               </ul>
               <h2 className ="title">{item.title}</h2>
               <p className ="text">{item.content}</p>
               <div className = "details">
                    <span className="name">{item.author.name}-{item.author.role}</span>
                    <span className="date">{getmyDate(item.date)}</span>
                </div>  
            </div>
        )}
      
        {info.map(item =>
          <div key = {item.id}>
             {item.id === saveId ?
              <PopUp openBtn={openBtn} 
              setopenBtn={setopenBtn} 
              image={item.thumbnail.large}
              title={item.title} 
              content={item.content}
              avatar={item.author.avatar}
              name={item.author.name}
              role={item.author.role}/>
              :<span></span>}
          </div>
        )}
              
    </div>
  );
}

export default Cards;
