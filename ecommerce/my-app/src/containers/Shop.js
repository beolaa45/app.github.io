import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../Store/actions/index";

const Shop = (props) => {
  useEffect(() => {
    const params = { sortBy: "price", order: "asc", limit: 10 };

    props.product(params);
  }, []);

  return <div>Shop</div>;
};
const mapDispaccthToProps = (dispatch) => {
  return {
    product: (params) => dispatch(actions.productStart(params)),
  };
};
export default connect(null, mapDispaccthToProps)(Shop);
