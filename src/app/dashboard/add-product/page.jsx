'use client'
import { useState } from "react";
import Protected from "@/components/ProtectedWrapper";

export default function AddProduct() {
  const [title,setTitle] = useState("");
  const [shortDesc,setShortDesc] = useState("");
  const [fullDesc,setFullDesc] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");
  const [loading,setLoading] = useState(false);
  const [successMsg,setSuccessMsg] = useState("");
  const [errorMsg,setErrorMsg] = useState("");

  const handleSubmit = async ()=>{
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    if(!title || !shortDesc || !fullDesc || !price){
      setErrorMsg("Please fill all required fields");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/products",{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({
          title,
          description: shortDesc,
          fullDescription: fullDesc,
          price: Number(price),
          image
        })
      });
      const data = await res.json();
      if(data.error){
        setErrorMsg(data.error);
      } else {
        setSuccessMsg("Product added successfully!");
        setTitle(""); setShortDesc(""); setFullDesc(""); setPrice(""); setImage("");
      }
    } catch(err){
      setErrorMsg("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Protected>
      <div className="max-w-lg mx-auto p-6 bg-white rounded shadow mt-10">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>

        {successMsg && <p className="text-green-600 mb-3">{successMsg}</p>}
        {errorMsg && <p className="text-red-600 mb-3">{errorMsg}</p>}

        <input className="w-full border p-2 mb-3" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <input className="w-full border p-2 mb-3" placeholder="Short Description" value={shortDesc} onChange={e=>setShortDesc(e.target.value)} />
        <textarea className="w-full border p-2 mb-3" placeholder="Full Description" value={fullDesc} onChange={e=>setFullDesc(e.target.value)} />
        <input className="w-full border p-2 mb-3" placeholder="Price" type="number" value={price} onChange={e=>setPrice(e.target.value)} />
        <input className="w-full border p-2 mb-3" placeholder="Image URL" value={image} onChange={e=>setImage(e.target.value)} />

        <button 
          onClick={handleSubmit} 
          disabled={loading} 
          className="w-full py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {loading ? "Adding..." : "Submit"}
        </button>
      </div>
    </Protected>
  )
}
