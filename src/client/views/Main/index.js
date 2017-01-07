import React from "react";
import {connect} from "react-redux";
import CustomButton from "../../components/input/CustomButton";
import {requestResponseFromAPI} from "../../actions";

const MainView = ({isLoading, error, foo, loadFoo, callApiThroughRedux}) =>
    <div>
        {foo}
        <br/>
        <CustomButton
            text={isLoading ? "Loading .." : "Fetch from API"}
            onClick={() => callApiThroughRedux(1000)}
            disabled={isLoading}/>
    </div>;

export default connect(
    state => ({...state}),
    dispatch => ({
        callApiThroughRedux: timeout => dispatch(requestResponseFromAPI(timeout))
    }),
)(MainView);