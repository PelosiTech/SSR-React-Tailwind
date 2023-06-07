function Login() {
    return (
      <div className="p-4">
        <form className="space-y-4" action="/login" method="post">
          <input className="block w-full p-2 border rounded" type="text" placeholder="Username" />
          <input className="block w-full p-2 border rounded" type="password" placeholder="Password" />
          <button className="block w-full p-2 bg-blue-500 text-white rounded" type="submit">Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  