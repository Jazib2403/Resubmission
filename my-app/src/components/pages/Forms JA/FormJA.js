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
          name="title"
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Name:</label>
        <textarea
          name="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Suggestion:</label>
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
        <input type="submit"/>
      </form>
    </div>
  );
}
 
export default FormJA;