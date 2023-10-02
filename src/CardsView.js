import './CardsView.css';

function ShopCard(item) {
  return (
    <div className='card-item'>
      <div className='card-name'>{item.name}</div>
      <div className='card-color'>{item.color}</div>
      <div className='card-image'><img src={item.img} width='80%' alt='X'/></div>
      <div className='card-footer'>
        <div className='card-price'>${item.price}</div>
        <button className='product-add-button'>ADD TO CART</button>
      </div>
    </div>
  );
}

export default function CardsView(cards) {
  return (
    <div className='product-cards'>
      { cards.map(item => <>{ShopCard(item)}</>) }
    </div>
  );
}
