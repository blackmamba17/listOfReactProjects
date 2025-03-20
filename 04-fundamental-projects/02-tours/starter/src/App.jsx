import { CarouselOfTours } from "./components/CarouselOfTours";
import { Title } from "./components/Title";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  return (
    <>
      <Title title="Our Tours" />
      <CarouselOfTours url={url} />
    </>
  );
};
export default App;
