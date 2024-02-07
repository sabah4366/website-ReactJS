import './Colors.css'
import Input from '../../components/Input';


function Colors({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Colors</h2>
      <div>
      <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value='' name='test1'/>
          <span className='checkmark all'></span>All
        </label>
      
      <Input  handleChange={handleChange} 
                value='black' 
                name='test1'
                title='Black'
                color='black'

                />
        <Input  handleChange={handleChange} 
                value='blue' 
                name='test1'
                title='Blue'
                color='blue'
                />
        <Input  handleChange={handleChange} 
                value='red' 
                name='test1'
                title='Red'
                color='red'
                />
        <Input  handleChange={handleChange} 
                value= 'green' 
                name='test1'
                title='Green'
                color='green'
                />
          <label className='sidebar-label-container'>
            <input type='radio' onChange={handleChange} value='white' name='test1'/>
            <span className='checkmark' style={{backgroundColor:'white',border:'2px solid black'}}></span>White
          </label>
        
    </div>
      
      
    </div>
  )
}
export default Colors;
