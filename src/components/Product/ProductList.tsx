import React, { useEffect, useState } from 'react'

const ProductList = ({ category }: {category: string}) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => { 
    console.log('Filter by '+category);
    setProducts(['PHP', 'Python', 'Devops', 'React']);
    
  }, [category]);

  if (products.length === 0) return <p>No products</p>
    
  return (
    <ul>
      {products.map(product => <li key={product}>{product}</li>)}
    </ul>
  )
}

export default ProductList