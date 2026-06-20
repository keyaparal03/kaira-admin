"use client";

interface Props {
  products: any[];
  onDelete: (id: string) => void;
}

export default function ProductTable({
  products,
  onDelete
}: Props) {
  return (
    <div className="product-table-container">

      <table className="product-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(products) &&
            products.map((item: any) => (
              <tr key={item._id}>

                <td>{item.name}</td>

                <td>
                  {item.category?.name}
                </td>

                <td>
                  ₹{item.price}
                </td>

                <td>
                  {item.stock}
                </td>

                <td>

                  <button
                    className="edit-btn"
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      onDelete(item._id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}
        </tbody>

      </table>

    </div>
  );
}