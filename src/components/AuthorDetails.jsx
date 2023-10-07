function AuthorDetails({ authorName, books }) {
  return (
    <div>
      <h2>{authorName}</h2>
      <h3>Books by {authorName}:</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorDetails;
