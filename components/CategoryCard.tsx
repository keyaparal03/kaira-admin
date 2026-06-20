interface CategoryCardProps {
  totalCategories: number;
}

export default function CategoryCard({
  totalCategories
}: CategoryCardProps) {
  return (
    <div className="dashboard-card category-card">

      <div className="card-left">
        <h3>Categories</h3>
        <h1>{totalCategories}</h1>
        <p>Total Categories</p>
      </div>

      <div className="card-icon">
        🗂️
      </div>

    </div>
  );
}