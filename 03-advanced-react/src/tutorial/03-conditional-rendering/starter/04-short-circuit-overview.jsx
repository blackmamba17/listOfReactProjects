import { useState } from 'react';

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState('')

  //truthy
  const [name, setName] = useState('gabriele')



  return <div> falsy OR: {text || 'hello uord'}
    <h2>falsy AND: {text && 'hello uord'}</h2>
    <h3>truty or: {name || 'diocane'}</h3>
    <h3>truty and: {name && 'diocane'}</h3>
  </div>
};
export default ShortCircuitOverview;
