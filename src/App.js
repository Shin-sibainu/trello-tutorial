import List from "./components/List/List";
import store from "./components/Utils/store";
import { useState } from "react";
import StoreApi from "./components/Utils/storeApi";
import { v4 as uuid } from "uuid";
import InputContainer from "./components/Input/InputContainer";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "green",
  },
}));

function App() {
  const classes = useStyle();
  const [data, setData] = useState(store);

  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title: title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title: title,
      cards: [],
    };
    const newState = {
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
      listIds: [...data.listIds, newListId], //新しいリストのIDを付与している。だから識別できる。
    };
    setData(newState);
  };

  const updataListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updataListTitle }}>
      <div className={classes.root}>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
        <InputContainer type="list" />
      </div>
    </StoreApi.Provider>
  );
}

export default App;
