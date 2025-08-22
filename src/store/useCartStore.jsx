import { useState } from "react";

export default function useCartStore() {
    const [books, setBooks] = useState([]);
    return {
        increase(item) {
            const found = books.find(book => item.id === book.id);
            if (found) {
                ++found.quantity;
                setBooks([...books]);
            } else {
                setBooks([...books, {...item, quantity: 1}]);
            }
        },
        decrease(item) {
            const found = books.find(book => item.id === book.id);
            if (found) {
                --found.quantity;
                setBooks([...books]);
            }
        },
        remove(item) {
            const filtered = books.filter(book => item.id !== book.id);
            setBooks(filtered);
        },
        getBooks() {
            return books;
        },
        getTotal() {
            return books.reduce((acc, curr) => acc + curr.quantity * curr.price, 0).toFixed(2);
        },
        sortBy(field = "price", order="asc") {
            const compare = (a, b) => {
                let valA = a[field];
                let valB = b[field];
            
                if (field === "sub-total") {
                  valA = a.price * a.quantity;
                  valB = b.price * b.quantity;
                }
            
                if (valA < valB) return order === "asc" ? -1 : 1;
                if (valA > valB) return order === "asc" ? 1 : -1;
                return 0;
            };
            setBooks([...books.sort(compare)]);
        }
    }
}