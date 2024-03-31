import React from 'react'
import userImage from '../../assets/Images/WhatsApp Image 2023-10-14 at 18.12.17_3e4f8434.jpg'
export default function Profile() {
  return  <>
  
  <div className="profile bg-primary wh-100 vh-100 d-flex flex-column align-items-center justify-content-around">
    <div className="profileContent row w-50 bg-white rounded-2 d-flex  align-items-center justify-content-center">
      <div className="col-md-3 align-items-center">
      <img src={userImage} alt="user profile" className=' w-50 rounded-circle m-5' />

      </div>
      <div className="col-md-9">
        <h2 className=''>
          User-Name : <span className='fs-4'>Mohamed ezz</span>
        </h2>
        <h3 className='text-dark-emphasis'>
          Level : <span className='fs-3'>four</span>
        </h3>
        <h3 className='text-dark-emphasis'>
          Division : 
        </h3>
      </div>
      
    </div>
    <div className="Schedule w-50 bg-white rounded-2 d-flex flex-column p-5  align-items-center justify-content-center">
      <h2 className='border-bottom border-2 border-black mb-5'>
        Schedule
        
      </h2>
      <table class="table table-success table-striped">
  <thead>
    <th>monnnn</th>
    <th>monnnn</th>
    <th>monnnn</th>
    <th>monnnn</th>
    <th>monnnn</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>

    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>

    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>

    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>

    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>

    </tr>
  </tbody>
</table>

    </div>
    <div className="profFooter d-flex align-items-center justify-content-around w-50 bg-white p-3 rounded-2 ">

      <button className='btn btn-primary rounded-4 px-3 text-white'>
      language
      </button>
      <button className='btn btn-primary text-white rounded-4 px-3'>
      logout
      </button>

    </div>

  </div>
  
  </>
   
  
}
