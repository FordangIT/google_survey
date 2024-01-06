import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Short = () => {
  return <input type="text" placeholder="단답형입니다." />;
};

const Long = () => {
  return <input type="text" placeholder="장문형입니다." />;
};

function Question() {
  const questions = useSelector(
    (state: RootState) => state.questions.questions,
  );
  const types = useSelector((state: RootState) => state.type.indexedTypes);
  const switches = useSelector((state: RootState) => state.switch);
  const options = useSelector((state: RootState) => state.option.options);

  console.log(questions, types, switches, options, "뭐들어오는지 확인");

  const combinedData = questions.map((qe, index) => ({
    title: qe.title,
    type: types[index] ?? 10,
    switch: switches[index]?.isChecked ?? false,
    options: options[index] ?? [{ index: 0, value: "어떤 선택지도 없습니다" }],
  }));

  combinedData.forEach((data) => {
    console.log(
      "combinedData",
      `Question: ${data.title}, Type: ${data.type}, Switch: ${
        data.switch
      }, Option: ${JSON.stringify(data.options)}`,
    );
  });

  return (
    <div className="flex justify-center">
      <div className="flex-col">
        {combinedData.map((data, index: number) => {
          let selectedComponent = null;
          switch (data.type) {
            case 10:
              selectedComponent = <Short />;
              break;
            case 20:
              selectedComponent = <Long />;
              break;
            default:
              break;
          }

          return (
            <div
              key={index}
              className="w-[455px] md:w-[655px] lg:w-[855px] bg-white mt-4 rounded-lg flex-col pt-4"
            >
              <div className="flex-row justify-center items-center mt-7 pl-7 md:pl-10">
                {data.title}
              </div>
              <div className="flex justify-center mx-12 mt-2">
                {selectedComponent}
              </div>
              <div className="flex justify-center mx-3 h-[4.5rem]">
                <div className="w-11/12 border-t-2 border-gray-300 flex justify-end items-center">
                  {data.switch ? "필수입니다" : ""}
                </div>
              </div>
              {/* 옵션 렌더링 */}
              <div>
                {data.options.map((opt, idx) => (
                  <div key={idx}>{opt.value}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
