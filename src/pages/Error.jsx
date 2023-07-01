import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error__container">
     <img
      className="error_image"
      src="
https://static.vecteezy.com/system/resources/previews/012/671/021/non_2x/flat-illustration-404-page-error-the-concept-of-error-of-the-web-site-can-be-used-for-web-pages-postcards-posters-and-banners-vector.jpg" alt="error-image" />
<div className="txt-center">
  <h3>Page Not Found</h3>
  <button
  className="btn btn-primary"
  onClick={()=>navigate("/")}
  >Back to Home</button>
</div>

    </div>
    
  )
}

export default Error