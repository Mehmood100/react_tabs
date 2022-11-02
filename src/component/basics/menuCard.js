import React from "react";

const MenuCard = ({ menuData }) => {

  return (
    <>
      <div className="main-card--cointainer">
      {
        menuData.map((curElim) => {

          const {id, name, catogary, image, description} = curElim;

          return(
            <>
              <div className="card-container" key={id}>
          <div className="card">
            <div className="card-body">
              <span className="card-number card-circle subtle">{id}</span>
              <span className="card-author subtle">{name}</span>
              <h2 className="card-title">{name}</h2>
              <span className="card-description subtle">
                I live maggi realy oo yues lorem ipsum dolor.
                I live maggi realy oo yues lorem ipsum dolor.
                I live maggi realy oo yues lorem ipsum dolor.
              </span>
              <div className="card-read">Read</div>
            </div>
            <img src={image} alt="images" className="card-media" />
            <span className="card-tag subtle">Order Now</span>
          </div>
        </div>
       
            </>
          )
        })
      }
      </div>
      
    </>
  )
}

export default MenuCard;