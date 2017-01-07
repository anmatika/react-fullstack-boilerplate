import React from "react";
import {connect} from "react-redux";
import {requestResponseFromAPI, changeInputValue} from "../../actions";
import CustomButton from "../../components/input/CustomButton";
import CustomInput from "../../components/input/CustomInput";

const MainView = ({isLoading, error, foo, loadFoo, callApiThroughRedux, onInputChange, inputValue}) =>
    <div>
        {foo}
        <br/>
        <CustomButton
            text={isLoading ? "Loading .." : "Submit value to API"}
            onClick={() => callApiThroughRedux(inputValue)}
            disabled={isLoading}/>

        <CustomInput
            type="number"
            disabled={isLoading}
            onChange={onInputChange}
            value={inputValue}/>
    </div>;

export default connect(
    state => ({...state}),
    dispatch => ({
        onInputChange: event => dispatch(changeInputValue(event.target.value)),
        callApiThroughRedux: timeout => dispatch(requestResponseFromAPI(timeout)),
    }),
)(MainView);