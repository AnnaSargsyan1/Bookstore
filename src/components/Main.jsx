import { useState } from "react";
import { books } from "../data/books"
import useCartStore from "../store/useCartStore";
import { BsArrowUp, BsArrowDown } from "react-icons/bs"

export function Main() {
    const store = useCartStore();
    const booksInCart = store.getBooks();
    const [sortedBy, setSortedBy] = useState(["title", "asc"]);
    const headers = ["title", "price", "quantity", "sub-total"];
    return <main className='container flex-grow-1 my-5'>
        <div className="row">
        <div className='col-12 col-lg-6'>
            <div className="row g-3">
            <h3 className='text-center'>Books</h3>
            {
                books.map(book => <div className='col-xl-4 col-lg-6 col-md-6 col-12 m-0 mb-3' key={book.id}>
                <div className='card h-100 d-flex flex-column align-items-center shadow-sm p-2 mx-auto' style={{width: "max-content", maxWidth: "100%"}}>
                    <img src={book.img} className='card-img-top' style={{height: 300, objectFit: "contain"}}/>
                    <div className="card-body d-flex flex-column w-100">
                    <h5 className='card-title'>{book.title}</h5>
                    <p className='card-text'>£{book.price}</p>
                    <button className='btn btn-success mt-auto' onClick={() => store.increase(book)}>Add To Cart</button>
                    </div>
                </div>
                </div>)
            }
            </div>
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column align-items-center" style={{height: "max-content"}}>
            <h3 className='text-center'>Cart</h3>
            { booksInCart.length 
            &&  
                <table className='table table-bordered'>
                <thead>
                    <tr>
                        {
                            headers.map(header => {
                                const order = sortedBy[0] === header && sortedBy[1] === "asc" ? "desc" : 
                                "asc"; 
                                return <th key={header} onClick={() => {
                                        store.sortBy(header, order);
                                        setSortedBy([header, order]);
                                    }} style={{cursor: "pointer"}}>
                                    {header.charAt(0).toUpperCase() + header.slice(1)}
                                    {sortedBy[0] === header && <>
                                        {sortedBy[1] === "asc" ? <BsArrowUp /> : <BsArrowDown />}
                                    </>}
                                </th>;
                            })
                        }
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    booksInCart.map(book =>
                        <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>£{book.price}</td>
                        <td>{book.quantity}</td>
                        <td>£{(book.quantity * book.price).toFixed(2)}</td>
                        <td>
                            <button className='btn btn-success btn-sm' onClick={() => store.increase(book)}>+</button>
                            { book.quantity > 1 && <button className='btn btn-warning btn-sm' onClick={() => store.decrease(book)}>-</button> }
                            <button className='btn btn-danger btn-sm' onClick={() => store.remove(book)}>x</button>
                        </td>
                        </tr>
                    )
                    }
                    <tr>
                    <td><b>Total:</b></td>
                    <td colSpan={4} className='text-end'><b>£{store.getTotal()}</b></td>
                    </tr>
                </tbody>
                </table>
            || 
            <>
                <img src="/icons/Empty.png" className='w-75'/>
                <p className="text-muted text-center h4">Cart Is Empty</p> 
            </>
            }
        </div>
        </div>
    </main>
}