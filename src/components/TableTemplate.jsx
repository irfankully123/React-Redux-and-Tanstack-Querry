import Select, { components } from "react-select";
import LoadingAnimation from '../assets/lottie/loading.json'
import NetworkError from '../assets/lottie/networkerror.json'
import Lottie from "lottie-react";

const TableTemplate = ({ options, onSelected, optionSelected, searchInput, children, searchInputValue, isLoading, isError }) => {

    // useEffect(() => {
    //const filterMap = { id: null, name: null, quantity: null, brand: null, category: null, price: null };

    //   optionSelected.forEach((option) => {
    //     if (filterMap.hasOwnProperty(option.value)) {
    //       filterMap[option.value] = option.value;
    //     }
    //   });

    // }, [optionSelected]);

    return (
        <>
            <div className="card __web-inspector-hide-shortcut__">
                <div className="card-header">
                    <button type="button" className="btn btn-success" >Create</button>
                </div>
                <hr />
                <div className="row mx-1">
                    <div className="col-6 col-md-3">
                        <h6>Search</h6>
                        <input
                            value={searchInputValue}
                            onChange={(e) => searchInput(e.target.value)}
                            type="search"
                            className="form-control rounded"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                    </div>
                    <div className="col-6 col-sm-4">
                        <h6>Filters</h6>
                        <Select
                            options={options}
                            isMulti
                            closeMenuOnSelect={false}
                            hideSelectedOptions={false}
                            components={{
                                Option: components.Option
                            }}
                            onChange={(selected) => onSelected(selected)}
                            allowSelectAll={true}
                            value={optionSelected}
                        />
                    </div>
                </div>
                <hr />
                <div className="table-responsive text-nowrap">
                    {children}
                    {isLoading && (<div style={{ height: "450px", width: "700px", margin: "auto" }}>
                        <Lottie animationData={LoadingAnimation}></Lottie>
                    </div>)}
                    {isError && (<div style={{ height: "450px", width: "500px", margin: "auto" }}>
                        <Lottie animationData={NetworkError}></Lottie>
                    </div>)}
                </div>
            </div>
        </>
    );
}

export default TableTemplate
