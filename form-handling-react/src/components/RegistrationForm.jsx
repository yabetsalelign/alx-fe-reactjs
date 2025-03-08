import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!username) errors.username = "Username is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({ username, email, password });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "3rem"}}>
        <div>
          <label htmlFor='username' style={{marginRight: "10px"}}>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div>
          <label htmlFor='email' style={{marginRight: "10px"}}>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor='password' style={{marginRight: "10px"}}>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;