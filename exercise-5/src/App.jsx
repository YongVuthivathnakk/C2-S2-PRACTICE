import Card  from "./components/Card.jsx";
import { USER_DATA } from "./data.js";
function App() {
  return (
    <div className="main-container">
      <h1>My Title</h1>
      <div className="card-container">
        {USER_DATA.map((user, index) =>
          <Card key={index} user={user}/>
        )}
      </div>
    </div>
    
  );
}

export default App;
