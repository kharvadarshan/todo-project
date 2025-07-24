import React, { useState } from 'react';
import axios from 'axios';

function TodoPage() {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/submittodoitem', { itemName, itemDescription });
    alert('Item submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      <textarea
        placeholder="Item Description"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
        required
      />
      <button type="submit">Add To-Do</button>
    </form>
  );
}

export default TodoPage;
