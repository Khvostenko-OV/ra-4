import './ListView.css';

function ShopItem(item) {
  return (
    <div className='product-item'>
      <div className='product-image'><img src={item.img} height='40' alt='X'/></div>
      <div className='product-name'>{item.name}</div>
      <div className='product-color'>{item.color}</div>
      <div className='product-price'>${item.price}</div>
      <button className='product-add-button'>ADD TO CART</button>
    </div>
  )
}

export default function ListView(items) {
  return (
    <div className='product-list'>
      { items.map(item => <>{ShopItem(item)}</>) }
    </div>
  );
}
