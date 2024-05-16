import { onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth , db } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import AdminPropertyList from '../components/AdminPropertyList'

const Admin = () => {
    const navigate = useNavigate()
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) {
          navigate('/admin/login');
        }
      });
      const [users, setUsers] = useState([]);
      const handleToggleAdmin = async (userId, isAdmin) => {
        try {
            const newIsAdminValue=!isAdmin
            const q = query(collection(db, 'users'), where('uid', '==', userId));
            const querySnapshot = await getDocs(q);

        
           

              const userDoc = querySnapshot.docs[0]; 
              console.log(querySnapshot.docs[0])
              const userRef = doc(db, 'users', userDoc.id);
              await updateDoc(userRef, { isAdmin: newIsAdminValue });
              setUsers(users.map((user) => (user.id === userId ? { ...user, isAdmin: !isAdmin } : user)));
              console.log('Admin status updated successfully');
              window.location.reload(true)

          
        } catch (error) {
          console.error('Error toggling admin status:', error);
        }
      };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const userData = [];
        querySnapshot.forEach((doc) => {
          userData.push({ id: doc.id, ...doc.data() });
          console.log(doc.id)
        });
        setUsers(userData);
        console.log(userData)
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);
  return (
    <div className='bg-white min-h-screen'>
        <nav className='flex justify-between px-8 py-6 bg-slate-400  items-center'>
            
      <h2 className='text-2xl font-bold'>Admin Page - User Information</h2>
      <button className='bg-slate-800 px-5 py-3 rounded-lg hover:bg-slate-900 text-slate-200' onClick={()=>{signOut(firebaseAuth)}}>Log-Out</button>

        </nav>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Email</th>
            <th>isAdmin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? 'Yes' : 'No'}</td>
              <td>

              <button onClick={() => handleToggleAdmin(user.uid, user.isAdmin)}>
                  {user.isAdmin ? 'Remove Admin' : 'Make Admin'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
          <div>Property List</div>

      <AdminPropertyList/>
      </div>
    </div>
  );

}

export default Admin