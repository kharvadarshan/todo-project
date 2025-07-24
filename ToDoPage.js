import React, { useState } from 'react';
import axios from 'axios';

function TodoPage() {
    const [itemId, setItemId] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="number"
      placeholder="Item ID"
      value={itemId}
      onChange={(e) => setItemId(e.target.value)}
      />
      <button type="submit">Add To-Do</button>
    </form>
  );
}

export default TodoPage;
