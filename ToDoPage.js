import React, { useState } from 'react';
import axios from 'axios';

function TodoPage() {
    const [itemId, setItemId] = useState('');
    const [itemUUID, setItemUUID] = useState('');
    const [itemHash, setItemHash] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="number"
      placeholder="Item ID"
      value={itemId}
      onChange={(e) => setItemId(e.target.value)}
      />
      <input
      type="text"
      placeholder="Item UUID"
      value={itemUUID}
      onChange={(e) => setItemUUID(e.target.value)}
      />
      <input
       type="text"
       placeholder="Item Hash"
       value={itemHash}
       onChange={(e) => setItemHash(e.target.value)}
       />
      <button type="submit">Add To-Do</button>
    </form>
  );
}

export default TodoPage;
