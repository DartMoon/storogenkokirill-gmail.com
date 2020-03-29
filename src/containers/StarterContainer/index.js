import React from 'react';
import {connect} from "react-redux";

import {itemsSelector} from "./selectors";
import Initial from "../../components/Initial";

const SomeContainer = ({items}) => {
  return (
    <Initial items={items}/>
  );
};

const mapStateToProps = (state) => {
  return {
    items: itemsSelector(state),
  }
};

export default connect(mapStateToProps, null)(SomeContainer);