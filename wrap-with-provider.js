import React from "react";
import { Provider } from "mobx-react";
import FiltersModel from "./src/models/FiltersModel";


// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
    <Provider store={FiltersModel}>{element}</Provider>
);