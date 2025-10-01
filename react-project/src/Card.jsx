import './assets/css/Card.css'
function Card(props){
  return(
    <>
    <div id='card'>
      <div id='card_div-media'>
        <img src={props.src} alt=""/>
      </div>
      <div id='card_div-body'>
        <h2 id='card_div-body_name'>{props.name}</h2>
        <p id='card_div-body_discrip'>{props.discrip}</p>
        <div id='card_div-body_div-meta'>
          <p id='card_div-body_div-meta_rate'>{props.rate}</p>
          <pv id='card_div-body_div-meta_price'><del>{props.discount}</del> &nbsp;{props.price}</pv>
        </div>
      </div>
      <div id='card_div-btn'>
        <button id='card_div-btn_btn'>Add to cart</button>
      </div>
    </div>
    </>
  )
}
export default Card