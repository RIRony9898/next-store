export default function Login() {
return (
<div className="max-w-md mx-auto mt-10 bg-white p-6 shadow rounded">
<h2 className="text-2xl font-bold mb-4">Login</h2>
<input className="w-full border p-2 mb-3" placeholder="Email" />
<input className="w-full border p-2 mb-3" placeholder="Password" type="password" />
<button className="w-full py-2 bg-blue-600 text-white rounded">Login</button>


<button className="w-full py-2 mt-3 border rounded">Continue with Google</button>
</div>
)
}