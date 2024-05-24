import React from "react";
import MovieApi from "./Card";
function ProductCard() {

  
  return (
    <div className="container">
      <div className="w-full flex items-center justify-center flex-wrap gap-5 h-[500px]  ">
        {MovieApi.movies.map((item, index) => {
          return (
            <div>
              <div className="  w-[250px] h-[300px]  flex ">
              <img class="transition-all duration-300 delay-200 hover:scale-105" src={item.imageUrl}  key={index} alt="Not A Photo" />              </div>
              <div className="btn">
                <button  className="border-[1px] border-black rounded-lg mt-3"> Watch</button>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
export default ProductCard;
