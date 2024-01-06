import update from "immutability-helper";
import type { FC } from "react";
import { useCallback, useState } from "react";
import { Card } from "./Card";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const style = {
  width: 400,
};

export interface Item {
  index: number;
}

export interface ContainerState {
  cards: Item[];
}

const Container: FC = () => {
  const questions = useSelector(
    (state: RootState) => state.questions.questions || [],
  );
  {
    const [cards, setCards] = useState(questions);

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        }),
      );
    }, []);

    const renderCard = useCallback((card: { id: number }, index: number) => {
      return (
        <Card key={card.id} index={index} id={card.id} moveCard={moveCard} />
      );
    }, []);

    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};

export default Container;
