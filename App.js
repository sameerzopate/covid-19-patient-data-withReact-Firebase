
import './App.css';
import Popup from './Popup';
import Form from './Form';
import React,{ useState,useEffect } from 'react';
import firebaseDb from './firebase';




function App() {


  const [buttonPopup, setButtonPopup] = useState(false)

  const [displayData, setdisplayData] = useState({
        TestName:'',
        TestPrice:'',
        paragraph_text:'',
        TestDate:'',
        TestResult:''
  });

  const addOrEdit=obj=>{
    firebaseDb.child('Form').push(
      obj,
      err=>{
        if(err)
        console.log(err)
      }
    )
  }

  const [FormObjects,setFormObjects] = useState({})
  useEffect(()=>{
      firebaseDb.child('Form').on('value',snapshot=>{
      if(snapshot.val()!=null)
      setFormObjects({
        ...snapshot.val()
      })
      })
  },[])


  const [submitdata, setsubmitdata] = useState('')

  return (
    <div className="App">
     
        <Form  {...({addOrEdit,submitdata,FormObjects})} setdisplayData={()=>setdisplayData(true)}/>
        <Popup trigger={buttonPopup} onchange={value=>setdisplayData(true)} onchange={value=>setButtonPopup(true)}/>
        <main className='result-box'>
          <div className='heading'>
            <p>Test Detail</p>
          </div>
          <div className='result-boxes'>
            <div className='result-box-1'>
              <p>Test Name</p>
              <div>{displayData.TestName}</div>
            </div>

            <div className='result-box-2'>
              <p>Test Date</p>
              <div>{displayData.TestDate}</div>
            </div>

            <div className='result-box-3'>
              <p>Test Price</p>
              <div>{displayData.TestPrice}</div>
            </div>

            <div className='result-box-4'>
              <p>Test Result</p>
              <div>{displayData.TestResult}</div>
            </div>

            <div className='result-box-5'>
              <p>Doctor Remarks</p>
              <div>{displayData.paragraph_text}</div>
            </div>

            <div className='result-box-6'>
              <p>Action</p>
              <div className='buttonSection'>
                <button className='Edit'>Edit</button>
                <button className='Delete'>Delete</button>
              </div>
            </div>
          </div>
          <div className='submit-section'>
          <button className='submit' onClick={()=>setsubmitdata()}>submit</button>
          </div>
        </main>
      
      
    </div>
  );
}

export default App;
