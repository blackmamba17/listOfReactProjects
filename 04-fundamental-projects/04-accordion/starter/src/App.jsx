import { Question } from "./components/Question";
import { Title } from "./components/Title";
import { questions } from './data'

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div style={{ backgroundColor: "white", width: "80vw", height: "80vh", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", borderRadius: "1rem", boxShadow: "0.5rem 0.5rem 0.5rem", fontSize: "1rem" }}>
        <Title title="Questions" />
        <Question questions={questions} />
      </div>
    </div>
  );
};
export default App;
