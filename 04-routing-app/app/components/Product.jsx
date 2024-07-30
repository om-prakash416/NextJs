
import Products from '../products/page'
export default function Product(props) {
  return (
    <div style={{border:'1px solid white', margin:'10px',padding:'20px'}}>
      <h4>{props.title}</h4>
      <h4>{props.price}</h4>
    </div>
  );
}
