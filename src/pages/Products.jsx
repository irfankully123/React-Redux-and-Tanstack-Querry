import SneatLayout from "../layouts/SneatLayout"
import TableTemplate from "../components/TableTemplate";
import ProductFilters from '../filters/ProductFilters';
import ProductService from "../services/ProductService";
import Pagination from '../components/Pagination';
import paginationReducer from "../reducers/paginationReducer";
import { useState, useReducer } from "react";

const Products = () => {

    const [filters, setFilters] = useState([]);
    const [search, setSearch] = useState("");

    const [paginationState, dispatchPagination] = useReducer(paginationReducer, { activePage: 1 });


    const { data, isLoading, isError } = ProductService.fetchProducts({
        search,
        page: paginationState.activePage,
    });

    const handlePrePage = () => {
        if (paginationState.activePage > 1) {
            dispatchPagination({ type: 'PrevPage' });
        }
    };

    const handleNextPage = () => {
        if (data && paginationState.activePage < data.products.last_page) {
            dispatchPagination({ type: 'NextPage' });
        }
    };

    const handleSetPage = (page) => dispatchPagination({ type: 'SetPage', page });

    return (
        <SneatLayout>
            <TableTemplate onSelected={(selected) => setFilters(selected)}
                options={ProductFilters}
                optionSelected={filters}
                searchInput={(value) => setSearch(value)}
                searchInputValue={search}
                isError={isError}
                isLoading={isLoading}
            >
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>quantity</th>
                            <th>brand</th>
                            <th>category</th>
                            <th>stock</th>
                            <th>price</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                        {data && data.products.data.map((product, index) => (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td>
                                <td>{product.stock}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className="btn btn-warning mx-1">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableTemplate>
            <Pagination
                pagelinks={data && data.products.links}
                activeLink={(page) => handleSetPage(page)}
                last_page={data && data.products.last_page}
                moveToLastPage={(lastPage) => handleSetPage(lastPage)}
                moveToFirstPage={() => handleSetPage(1)}
                moveToPrePage={handlePrePage}
                moveToNextPage={handleNextPage}
            />
        </SneatLayout>
    )
}

export default Products
