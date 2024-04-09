// import Calender from './Calender';
// const mca = require('./CalenderData.json');
// function App(props) {
//   return (
//     <>
//      <div className="radio">
//           <label>
//             <input type="radio" value="option1" checked={true} style={{border: "20px solid #EFE5CE"}} />
//             Holidays
//           </label>
//           <label>
//             <input type="radio" value="option1" checked={true} />
//             Exams
//           </label>
//           <label>
//             <input type="radio" value="option1" checked={true} />
//             Option 1
//           </label>
//         </div>
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
//         {
//           mca.map(function (Description) {
//             return <Calender image={Description.Image} date={Description.Date} des={Description.Description} day={Description.Day} slogan={Description.Slogan} />
//           })
//         }
//       </div>
//     </>
//   );
// }

// export default App;

import React, {useRef, useState, useEffect} from "react";

import Calender from './Calender';
import Radiobutton from './Radiobutton';
const mca = require('./CalenderData.json');
const radiodata = require('./Radiodata.json');
function App() {

  const [type, setType] = useState("All") 
  useEffect(()=>{
    console.log(type);
},[type])
  return (
    <>
      <div className="radio">
      {
        radiodata.map(function (data) {
          return <Radiobutton typeName={data.typeName} type={type} setType={setType} />
        })
      }
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {
          mca.map(function (Description) {
            if (type == 'All') {
              return <Calender image={Description.Image} date={Description.Date} des={Description.Description} day={Description.Day} slogan={Description.Slogan} /> 
            } else if(Description.Type == type) {
              return <Calender image={Description.Image} date={Description.Date} des={Description.Description} day={Description.Day} slogan={Description.Slogan} /> 
            } 
          })
        }
      </div>
    </>
  );
}

export default App;

