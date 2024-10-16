import React from 'react';
import Login from './login'; 

function LoginModal({ closeModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      
   
      <Login closeModal={closeModal} />
    </div>
  </div>
  );
}

export default LoginModal;
