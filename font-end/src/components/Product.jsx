import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({products, heading}) => {


  return (
    <div className='warpper ' style={{borderRadius: '15px ',margin:'20px 0', padding:'20px 20px'}}>
      <h2 className='name_product' style={{borderBottom:'2px solid black', display:"inline-block"}}>{heading}</h2>
      <div className='category'>
        
      </div>
      <div  style={{display:"flex", justifyContent:"space-between"}}>
        {products.map(product => (
          <Card  key={product.id} style={{ width: '18rem' }}>
            <Card.Img className='item_col'  style={{margin:"10px 0"}} variant="top" src={product.image} />
            <Card.Body>
              <Card.Title className='item_col'>{product.name}</Card.Title>
              <Card.Text className='item_col'  style={{textAlign:"center"}}>
                {product.price}<span style={{ textDecoration:"underline"}}>đ</span>
                
              </Card.Text>
              <Card.Text  style={{textAlign:"center", textDecoration:"line-through", fontSize:"14px"} }>
                {product.oldPrice}<span style={{ textDecoration:"underline"}}>đ</span>
              </Card.Text>
              <Button style={{marginLeft:"75px", color:"#fff", backgroundColor:"#000"}} variant="primary">Mua hang</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Product;
