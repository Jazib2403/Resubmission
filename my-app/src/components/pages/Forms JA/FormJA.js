import { useState } from "react";

const FormJA = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  return (
    <div className="create">
      <h2>Add a New Suggestion</h2>
      <form>
        <label>Title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>page:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Ebooks">Ebooks</option>
          <option value="SignIn">SignIn</option>
          <option value="HomePage">HomePage</option>
          <option value="Forms">Forms</option>
          <option value="FAQ">FAQ</option>
          <option value="TnC">TnC</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default FormJA;