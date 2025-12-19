import { useState } from "react";

function AddItemList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <div>
      <input className="input"
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="Button" onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddItemList;
