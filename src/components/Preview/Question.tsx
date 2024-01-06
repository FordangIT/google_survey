import { useSelector } from "react-redux";
import { RootState } from "../../redux/store"; // Update the path based on your file structure

function Question() {
  const questions = useSelector(
    (state: RootState) => state.questions.questions,
  );
  const types = useSelector((state: RootState) => state.type.indexedTypes);
  const switches = useSelector((state: RootState) => state.switch);
  const options = useSelector((state: RootState) => state.option.options);

  const newQuestion = (qIdx: number) => ({
    id: qIdx,
    type: types[qIdx],
    questionContent: "",
    isNecessary: switches[qIdx],
    options: [
      {
        id: qIdx,
        option: options[qIdx], // Assuming options[qIdx] contains an array of options for this question
      },
    ],
    answers: [],
    narrativeAnswer: "",
  });

  const mappedQuestions = questions.map((question, index: number) => {
    const questionData = newQuestion(question.index);
    return (
      <div key={questionData.id}>
        {/* Render the question data */}
        <p>ID: {questionData.id}</p>
        <p>Type: {questionData.type}</p>
        {/* Render other properties */}
      </div>
    );
  });

  return (
    <div className="flex justify-center">
      <div className="flex-col">{mappedQuestions}</div>
    </div>
  );
}

export default Question;
