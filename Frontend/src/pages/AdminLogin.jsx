// AdminLoginPage.jsx
import React, { useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth, db } from '../utils/firebase-config';
import { collection, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const { email, password } = form;
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      const userDoc = await db.collection('users').doc(userCredential.user.uid).get();
      const userData = userDoc.data();
      
      if (userData && userData.isAdmin) {
        const token = await userCredential.user.getIdToken();
        Cookies.set('jwtToken', token, { expires: 7, secure: true, sameSite: 'strict' });
        navigate('/admin');
      } else {
        setError('User is not an admin');
      }
    } catch (error) {
      console.log(error.code);
      setError(error.code);
    }
}
onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      // Redirect to admin dashboard if user is already logged in
      navigate('/admin/dashboard');
    }
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80">
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-red-600 text-white rounded-full py-2 px-4 hover:bg-red-700 transition duration-200"
        >
          Login
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default AdminLoginPage;
