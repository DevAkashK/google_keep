import './App.css';
import ItemNote from './component/item_note/ItemNote';

function App() {
  return (
    <div className="App">
     <ItemNote title="Some note title" description="Note description for the edited note"/>
    </div>
  );
}

export default App;
