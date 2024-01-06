import Title from "../components/Preview/Title";
import Question from "../components/Preview/Question";
const Preview = () => {
  return (
    <div className="w-screen min-h-screen bg-light-purple ">
      <div className="position">
        <Title />
      </div>
      <Question />
    </div>
  );
};
export default Preview;
