import './assets/css/Header.css'
function Header(){

  return(
    <>
    <div id='Header'>
      <div id='Header_brand-div'>
      <img src="" alt="" id='Header_brand-div_weblogo'/>
      <span id='Header_brand-div_brand-name'>Brand</span>
      </div>
        <ul id='Header_nav-links'>
          <li className='Header_nav-links_nav-link'><a href="">page 1</a></li>
          <li className='Header_nav-links_nav-link'><a href="">page 2</a></li>
          <li className='Header_nav-links_nav-link'><a href="">page 3</a></li>
          <li className='Header_nav-links_nav-link'><a href="">page 4</a></li>
        </ul>
      <button id='Header_Sign-in'>Sign in</button>
    </div>
    </>
  )
}
export default Header