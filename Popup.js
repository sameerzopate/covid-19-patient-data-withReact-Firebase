import React,{useState} from 'react'
import './Popup.css'
import ClearIcon from '@material-ui/icons/Clear';



function Popup(props) {
    const [data, setData] = useState({
        TestName:'',
        TestPrice:'',
        paragraph_text:'',
        TestDate:'',
        TestResult:''


    });
    
    const inputEvent=(event)=>{
        const value=event.target.value;
        const name=event.target.name;

        setData(()=>{
            if (name==='TestName')
            return{
                TestName:value
            }
            if (name==='TestPrice')
            return{
                TestPrice:value
            }
            if (name==='paragraph_text')
            return{
                paragraph_text:value
            }
            if (name==='TestDate')
            return{
                TestDate:value
            }
            if (name==='TestResult')
            return{
                TestResult:value
            }
            
        });
    }; 

    
    const onSubmit=(event)=>{
        event.preventDefault();
    };
    return (props.trigger)?(
        <form className='popup' onSubmit={onSubmit}>
            <div className='popup-inner'>
                <div className='top-popup-section'>
                    <p>Add Test Details</p>
                    <button onClick={()=>props.setTrigger(false)}><ClearIcon className='ClearIcon' /></button>
                    
                </div>

                <div className='middle-popup-section'>
                    <div className='middle-popup-details' >
                        <div className='middle-popup-details-left'>
                            <div className='Test-Name'>
                                <label>Test Name:</label>
                                <input type='text' value={data.TestName} name='TestName'onChange={inputEvent} onChange={event=>props.onChange(event.target.value)}/>
                            </div>
                            <div className='Test-Price'>
                                <label>Test Price:</label>
                                <input type='number'value={data.TestPrice} onChange={event=>props.onChange(event.target.value)} name='TestPrice'/>
                            </div>
                            <div className='Doctor-Remarks'>
                                <label>Doctor Remarks:</label>
                                <textarea value={data.paragraph_text} name="paragraph_text" cols="50" rows="10" onChange={event=>props.onChange(event.target.value)}></textarea>
                            </div>
                        </div>

                        <div className='middle-popup-details-right'>
                            <div className='Test-Date'>
                                <label>Test Date:</label>
                                <input value={data.TestDate} onChange={event=>props.onChange(event.target.value)} type='date'name="TestDate" />
                            </div>

                            <div className='Test-Result'>

                                <label>Test Result:</label>

                                <select value={data.TestResult} onChange={event=>props.onChange(event.target.value)} name="TestResult">
                                    <option value='select'>select</option>    
                                    <option value='-ve'>-ve</option>
                                    <option value='+ve'>+ve</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='bottom-popup-section'>
                    <button  className='Save'  >Save</button>
                </div>
                {props.children}
            </div>
            
        </form>
    ):'';
}

export default Popup
