// import React from "react";
// import "./customButton.style.css";

// const CustomButton = (props) => {
//   console.log(props);
//   return (
//     <button className="customButton-btn" onClick={props.onClickHandler}>
//       {props.text}
//     </button>
//   );
// };

// export default CustomButton;

import React from "react";
import "./customButton.style.css";

const CustomButton = (props) => {
  console.log(props);
  return (
    <button className="customButton-btn" onClick={props.onClickHandler}>
      {props.text}
    </button>
  );
};

export default CustomButton;
