import { useGetProductsQuery } from "./productsApiSlice"
import Product from "./Product"

const ProductsList = () => {
    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductsQuery('productsList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = products

        const tableContent = ids?.length
            ? ids.map(productId => <Product key={productId} productId={productId} />)
            : null

        content = (
            <table className="table table--products">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th product__status">Username</th>
                        <th scope="col" className="table__th product__created">Created</th>
                        <th scope="col" className="table__th product__updated">Updated</th>
                        <th scope="col" className="table__th product__title">Title</th>
                        <th scope="col" className="table__th product__username">Owner</th>
                        <th scope="col" className="table__th product__edit">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default ProductsList