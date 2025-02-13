const products = [
    { "pname": "Wafer", "Brand": "Balaji", "Price": "10$" },
    { "pname": "Kurkure", "Brand": "Balaji", "Price": "10$" },
    { "pname": "Jadu", "Brand": "Home made", "Price": "5$" },
    { "pname": "Mama Save", "Brand": "Home made", "Price": "3$" }
  ];
  
  function ProductTab() {
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((val, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.pname}</td>
                <td>{val.Brand}</td>
                <td>{val.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ProductTab;
  