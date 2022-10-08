import React from 'react';

const Cart = ({cart,handleDelete}) => {
    return (
        <div>
            <h1>Order summery</h1>
            {
                cart.map(c=> <li key={c._id} className="py-3 flow-root divide-y divide-gray-200 dark:divide-gray-700 sm:py-4 p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-2">
                <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={c.picture}/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           {c.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                           ${c.price}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                       <button
                        onClick={()=>handleDelete(c)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">X</button>
                    </div>
                </div>
            </li>)
            }
        </div>
    );
};

export default Cart;