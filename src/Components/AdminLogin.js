import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/Studentlogin.css';

const StudentLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleLogin = async () => {
    if (!validateEmail(username)) {
      alert('Invalid email format');
      return;
    }

    if (!validatePassword(password)) {
      alert('Password should be at least 8 characters');
      return;
    }

    const email = username;

    try {
      const response = await axios.post('http://localhost:3001/adminlogin', { email, password });
      const data = response.data;

      if (data.status) {
        setLoggedIn(true);
        alert('Login successful!');
        // updateUser(data.rollNo)
        navigate('/adminpanel');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3001/logout');
      setLoggedIn(false);
      localStorage.removeItem('user'); // Remove user information from localStorage
      alert('Logged out successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during logout. Please try again later.');
    }
  };

  useEffect(() => {
    // Check if the user is already logged in on the client side
    const checkLoggedIn = async () => {
      try {
        const response = await axios.get('http://localhost:3001/checklogin');
        const data = response.data;

        if (data.status) {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <div className="login-container">
      {loggedIn ? (
        <>
          <p>You are already logged in. Redirecting...</p>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Admin Login</h2>
          <form>
            <label htmlFor="rollNo">Email:</label>
            <input
              type="text"
              id="rollNo"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email"
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />

            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default StudentLogin;


// import React, { useState } from 'react';
// import '../CSS/Studentlogin.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const StudentLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     // Password should be at least 8 characters
//     return password.length >= 8;
//   };

//   const handleLogin = async () => {
//     // Client-side validation
//     if (!validateEmail(username)) {
//       alert('Invalid email format');
//       return;
//     }

//     if (!validatePassword(password)) {
//       alert('Password should be at least 8 characters');
//       return;
//     }

//     // Proceed with login
//     const email = username;

//     try {
//       const response = await axios.post('http://localhost:3001/adminlogin', { email, password });
//       const data = response.data;
//       console.log(data);
//       if (data.status) {
//         setLoggedIn(true);
//         alert('Login successful!');
//         // updateUser(data.rollNo)
//         navigate('/adminpanel');
//       } else {
//         alert('Invalid username or password');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2 style={{fontSize:"20px",fontWeight:"bold"}}>Admin Login</h2>
//       <form>
//         <label htmlFor="rollNo">Email:</label>
//         <input
//           type="text"
//           id="rollNo"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Enter your email"
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter Password"
//         />

//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StudentLogin;
