import React from 'react';

const CompletedTasks = () => {
    return (
        <div className=''>
            {/* <PageTitle title="Manage Products"></PageTitle> */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            products.map((product, index) => <ProductRow
                            key={product._id}
                            index={index}
                            product={product}
                            products={products}
                            setProducts={setProducts}
                            ></ProductRow>)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedTasks;