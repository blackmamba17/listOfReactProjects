import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return <div>
    ternary operator
    <button className='btn'>diocane</button>
    <h2>{name ? "madonna troia" : 'non esisteee'}</h2>
  </div>
};

export default ShortCircuitExamples;
