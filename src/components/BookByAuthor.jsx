import useFetch from "../useFetch";

const BookByAuthor = ({bookAuthor}) =>{
   const { data, loading, error } = useFetch(
     `https://books-dummy-level-one.vercel.app/books/author/${bookAuthor}`
   );

   console.log("author running");
   console.log(data);

   return (
     <div>
       <h2>Books by Harper Lee</h2>
       <ul>
         {data
           ? data.map((book) => <li>{book.title}</li>)
           : loading && <p>Loading Books...</p>}
       </ul>
     </div>
   );
}

export default BookByAuthor;