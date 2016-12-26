import React from "react";
import {connect} from "react-redux";
import CustomButton from "../../components/input/CustomButton";
import {requestResponseFromAPI} from "../../actions";

const MainView = ({isLoading, error, foo, loadFoo}) =>
    <div>
        {foo}
        <br/>
        <CustomButton
            text={isLoading ? "Loading .." : "Fetch from API"}
            onClick={() => requestResponseFromAPI(1000)}
            disabled={isLoading}/>
    </div>;

export default connect(state => ({...state}), {requestResponseFromAPI})(MainView);