import { Question } from "./components/Question";
import { Title } from "./components/Title";
import { questions } from './data'

const App = () => {
  return (
    <div style={{ backgroundColor: "white", width: "80vw", height: "70vh", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", borderRadius: "1rem", boxShadow: "0.5rem 0.5rem 0.5rem" }}>
      <Title title="Questions" />
      {questions.map((question, index) => {
        return <Question key={"question" + index} {...question} />
      })}
    </div>
  );
};
export default App;
