
import {Outlet,Link} from "react-router-dom"

function Profile() {
  return (
    <div className='container mt-5' style={{height:"400px",boxShadow:"0 0 10px black"}}>
        <div className="row h-100">
            <div className="col-4 ">
                <div className='container fs-5 h-100 d-flex flex-column justify-content-evenly align-items-center'>
                    <div className="row">
                    <Link to="personaldetails" className="text-decoration-none text-black"> Personal Details
                    </Link>
                    </div>
                    <div className="row">
                        <Link to="professionaldetails" className="text-decoration-none text-black">
                        Professional Details</Link>
                    </div>
                    <div className="row ">
                        <Link to="educationaldetails" className="text-decoration-none text-black">Educational Details</Link>
                    </div>
                </div>
            </div>
            <div className="col-8 text-bg-secondary ">
                <Outlet/>
            </div>
        </div>
      
    </div>
  )
}

export default Profile
