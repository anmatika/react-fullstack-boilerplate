import React from "react";
import {connect} from "react-redux";
import CustomButton from "../../components/input/CustomButton";
import {loadFoo} from "../../actions";

const MainView = ({state, loadFoo}) =>
    <div>
        Hello, world! {JSON.stringify(state)}
        <br/>
        <CustomButton text="Click me!" onClick={() => console.log(loadFoo(1000))}/>
    </div>;

export default connect(state => ({state}), {loadFoo})(MainView);