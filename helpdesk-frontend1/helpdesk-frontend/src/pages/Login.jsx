import { useState } from "react";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async (e) => {
e.preventDefault();

try {
const response = await fetch(
"http://127.0.0.1:8000/api/login",
{
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
email,
password,
}),
}
);


const data = await response.json();

if (response.ok) {
  localStorage.setItem(
    "user",
    JSON.stringify(data.user)
  );

  localStorage.setItem(
    "token",
    data.token
  );

  alert("Login successful!");

  console.log("REDIRECTING NOW");
window.location.href = "/dashboard";
} else {
  alert(data.message || "Login failed");
}


} catch (error) {
console.error(error);
alert("Cannot connect to server");
}
};

  
return (
<div
style={{
display: "flex",
height: "100vh",
}}
>
<div
style={{
flex: 1,
background: "linear-gradient(135deg, #00124d, #0033cc)",
color: "white",
display: "flex",
flexDirection: "column",
justifyContent: "center",
padding: "60px",
}}
>
<h1
style={{
fontSize: "36px",
marginBottom: "20px",
}}
>
IT HelpDesk <br />
Dashboard </h1>


    <p
      style={{
        fontSize: "18px",
        maxWidth: "400px",
        lineHeight: "1.6",
      }}
    >
      We're here to help! Access support
      resources, manage tickets, and stay
      connected with your IT team.
    </p>
  </div>

  <div
    style={{
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    }}
  >
    <div
      style={{
        width: "400px",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "10px",
        }}
      >
        Welcome back!
      </h1>

      <p
        style={{
          color: "gray",
          marginBottom: "30px",
        }}
      >
        Please enter your details.
      </p>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email Address</label>
          <br />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              marginBottom: "20px",
            }}
          />
        </div>

        <div>
          <label>Password</label>
          <br />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              marginBottom: "20px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "350px",
            padding: "14px",
            backgroundColor: "#001f8f",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Log In
        </button>
      </form>
    </div>
  </div>
</div>
);

  
};

export default Login;
