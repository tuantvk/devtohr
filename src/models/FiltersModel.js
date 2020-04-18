import {
    observable,
    action,
    decorate,
} from "mobx";


class FiltersModel {
    filters = [];

    profileFilters(filters) {
        this.filters = filters;
    }

}

decorate(FiltersModel, {
    filters: observable,
    profileFilters: action,
})

export default new FiltersModel();