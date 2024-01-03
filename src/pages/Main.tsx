import Title from "../components/Main/Title";
import Question from "../components/Main/Question";
import AddPreview from "../components/Main/AddPreview";
const Main = () => {
  return (
    <div className="w-screen h-100% bg-light-purple ">
      <Title />
      <AddPreview />
      <Question />
    </div>
  );
};
export default Main;
