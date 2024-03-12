import Friends from './Friends';
const mca = require('./mca.json');
function App(props) {
  console.log(mca);
  return (
    <>   
    {
      mca.map(function(faculty){
        return <Friends image={faculty.Image} name={faculty.Name} dot={faculty.Dot} dots={faculty.Dots}/>
      })
    }
    </>
  );
}

export default App;
