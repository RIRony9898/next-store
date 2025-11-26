import ItemCard from "@/components/products/ItemCard";



const sample = [
{ id: 1, title: "Product A", description: "Nice product", price: 20, image: "https://picsum.photos/300" },
{ id: 2, title: "Product B", description: "Great item", price: 15, image: "https://picsum.photos/301" },
{ id: 3, title: "Product C", description: "Amazing", price: 30, image: "https://picsum.photos/302" },
]

const page = () => {
    return (
            <div className="p-6">
                <h2 className="text-3xl font-bold mb-2">All Products</h2>
                <input className="border p-2 w-full mb-4" placeholder="Search products..." />


<div className="grid md:grid-cols-3 gap-6">
{sample.map(item => <ItemCard key={item.id} item={item} />)}
</div>
</div>
    );
};

export default page;