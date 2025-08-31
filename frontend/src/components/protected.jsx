import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

const Protected = ({
    token
  }) => {
  const isRun = useRef(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get("documents", config).then((res) => {
      console.log(res.data);
      setData(res.data); // Add this line to update the state
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return data && data.length > 0 ? (
    <div style={{ padding: '20px', color: '#333' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Documents</h2>
      {data.map((item) => (
        <div key={item.id} style={{ 
          border: '1px solid #ddd', 
          padding: '15px', 
          margin: '10px 0', 
          borderRadius: '5px',
          background: '#ffffff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          color: '#333'
        }}>
          <h3 style={{ color: '#333', margin: '0 0 10px 0' }}>{item.title}</h3>
          <p style={{ color: '#666', margin: '0' }}>{item.description}</p>
        </div>
      ))}
    </div>
  ) : (
    <div style={{ padding: '20px', color: '#333', fontSize: '18px' }}>Loading documents...</div>
  );
};

export default Protected;