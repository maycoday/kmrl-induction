import { useEffect, useState } from 'react';
import axios from 'axios';

function App(){
  const [plan, setPlan] = useState([]);
  useEffect(()=> {
    axios.get('http://localhost:8000/plan/simple')
      .then(res => setPlan(res.data.plan));
  }, []);
  return (
    <div style={{padding:20}}>
      <h1>KMRL - Simple Plan</h1>
      <table border="1" cellPadding="8">
        <thead><tr><th>Train</th><th>Status</th></tr></thead>
        <tbody>
          {plan.map(p => (
            <tr key={p.train_id}>
              <td>{p.train_id}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default App;
