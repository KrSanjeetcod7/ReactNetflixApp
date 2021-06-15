import React from 'react';
const Card = (props) => {
    return (
        <>
            <div className="cards">
              <div className="card">
                  <img src={props.imgsrc} alt="myimage" className="card_img" />
                  <div className="card_info">
                      <span className="card_category">{props.title}</span>
                      <h3 className="card_title">{props.sname}</h3>
                      <a href={props.links} target="_sanjeet">
                          <button className="btnwatch">WATCH NOW</button>
                      </a>
                  </div>
              </div>
          </div> 
        </>
    )
}

export default Card;
