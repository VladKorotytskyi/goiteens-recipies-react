import "./App.css";
// import { RecipeFn } from "./components/Recipe";
// import recipeData from "./recipies.json";
import { Propsfn } from "./components/PropsPractice";
import propsData from "./propsPractice.json";
function App() {
  return (
    <>
      <div className="main">
        {/* <RecipeFn data={recipeData} /> */}
        {<Propsfn data={propsData} />}
      </div>
    </>
  );
}

export default App;
