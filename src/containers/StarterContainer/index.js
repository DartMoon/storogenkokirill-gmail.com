import React from 'react';
import {useSelector} from "react-redux";

import {itemsSelector} from "./selectors";
import Initial from "../../components/Initial";

const SomeContainer = () => {
  const {items} = useSelector(state => ({
    items: itemsSelector(state),
  }));

  return (
    <Initial items={items}/>
  );
};

export default SomeContainer;