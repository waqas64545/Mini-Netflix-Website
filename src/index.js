import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";


ReactDOM.render(
  <>
  <h1 className="heading"> List of Top 5 malik Favorite series</h1>
  
  {Sdata.map((val,index) =>{
      console.log(index);
      return (
<Card
        imgm={val.imgm}
        title={val.title}
        sname={val.sname}
        link={val.links}
        />
      );

  }
  )}
       
  
  </>
 ,
  document.getElementById('root')
);


