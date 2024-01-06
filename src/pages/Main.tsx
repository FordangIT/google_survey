import Title from "../components/Main/Title";
import Question from "../components/Main/Question";
import AddPreview from "../components/Main/AddPreview";
const Main = () => {
  return (
    <div className="w-screen min-h-screen bg-light-purple ">
      <div className="position">
        <Title />
        <div className="absolute top-12 right-[20.5rem]">
          <AddPreview />
        </div>
      </div>
      <Question />
    </div>
  );
};
export default Main;
