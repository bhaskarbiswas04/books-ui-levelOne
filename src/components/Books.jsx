import useFetch from "../useFetch";

const Books = ()=>{
    const { data, loading, error } = useFetch(
      "https://books-dummy-level-one.vercel.app/books"
    );

    console.log("Books runing...");
    
    console.log(data);

    return (
      <div>
        <h2>All Books</h2>
        <ul>
          {data ? data.map((book) => (
            <li>{book.title}</li>
          )): loading && <p>Loading Books...</p>}
        </ul>
      </div>
    );
    
}

export default Books;