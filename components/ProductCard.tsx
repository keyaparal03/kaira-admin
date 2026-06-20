interface ProductCardProps {
  totalProducts: number;
}

export default function ProductCard({
  totalProducts
}: ProductCardProps) {
  return (
    <div className="dashboard-card product-card">

      <div className="card-left">
        <h3>Products</h3>
        <h1>{totalProducts}</h1>
        <p>Total Store Products</p>
      </div>

      <div className="card-icon">
        📦
      </div>

    </div>
  );
}