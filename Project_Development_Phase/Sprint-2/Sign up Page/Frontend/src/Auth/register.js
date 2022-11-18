import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Register(props) {
  const register=()=>{
      var UserName=document.getElementById('name').value;
      var Password=document.getElementById('pass').value;
      var email=document.getElementById('email').value;
      var Phno=document.getElementById('phno').value;
      fetch('http://localhost:5050/register',{
                method:'POST',
                body:JSON.stringify({
                    UserName:UserName,
                    Password:Password,
                    email:email,
                    Phno:Phno
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(data=>{
                return data.json()
            })
            .then(result=>{
              if(result.error)
              alert(result.error)
              else
              {
              alert("Registration Successfull")
              props.nav('/')
              }
            })
    }
  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='4' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p style={{fontSize:"30px"}} classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><b>Sign up</b></p>

              <div style={{fontSize:"20px",fontFamily:"bold"}} className="d-flex flex-row align-items-center mb-2 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='name' type='text' className='w-100'/>
              </div>

              <div style={{fontSize:"20px",fontFamily:"bold"}} className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='email' type='email'/>
              </div>
              <div style={{fontSize:"20px",fontFamily:"bold"}} className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Phno' id='phno' type='email'/>
              </div>

              <div style={{fontSize:"20px",fontFamily:"bold"}} className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='pass' type='password'/>
              </div>

              <button style={{backgroundColor:"black",color:"white",padding:"3px",width:"100px"}} onClick={register}>Register</button>

            </MDBCol>

            <MDBCol md='10' lg='8' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;