import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai'
import './Nav.css'


function Nav({handleInputChange,query}) {
  return (
    <nav>
        <div className='nav-container'>
            <input type='text' onChange={handleInputChange} value={query} className='search-input' placeholder='Enter your search shoes.'/>
           
            

        </div>
        <div className='profile-container'>
            <span >
              <FiHeart className='nav-icons'/>
            </span>
            <span >
              <AiOutlineShoppingCart className='nav-icons'/>
            </span>
            <span >
              <AiOutlineUserAdd className='nav-icons'/>
            </span>
            

        </div>

    </nav>
  )
}

export default Nav;