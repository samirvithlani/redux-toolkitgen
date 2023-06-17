import logo from "./logo.svg";
import "./App.css";
import { ProductComponent } from "./component/ProductComponent";
import { HeaderComponent } from "./component/HeaderComponent";
import { UserComponent } from "./component/UserComponent";

function App() {
  return (
    <div className="App">
      {/* <HeaderComponent />
      <ProductComponent /> */}
      <UserComponent/>
    </div>
  );
}

export default App;
