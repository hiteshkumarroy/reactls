import React from 'react';
import PropTypes from 'prop-types';


const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <h1 style={{ display: 'inline' }}>Clothing Brand</h1>
      <ul style={{ display: 'inline', marginLeft: '20px' }}>
        <li style={{ display: 'inline', marginRight: '10px' }}>Home</li>
        <li style={{ display: 'inline', marginRight: '10px' }}>Products</li>
        <li style={{ display: 'inline', marginRight: '10px' }}>About</li>
      </ul>
    </nav>
  );
};


const ProductTable = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// CategoryList component
const CategoryList = ({ categories }) => {
  return (
    <div>
      {/* <h2>Categories</h2> */}
      <ul>
        {/* {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))} */}
      </ul>
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// HomePage component (parent)
const HomePage = () => {
  const products = [
    { name: 'T-shirt', price: 25, category: 'Men' },
    { name: 'Dress', price: 50, category: 'Women' },
    { name: 'Jeans', price: 40, category: 'Unisex' },
  ];

  const categories = ['Men', 'Women', 'Unisex', 'Accessories'];

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <ProductTable products={products} />
        <CategoryList categories={categories} />
      </div>
    </div>
  );
};

export default HomePage;