import React from 'react';
import './Form.css';
// import Popup from './Popup';
import { useState,useEffect} from 'react';




function Form(props) {
    
    const PatientDetails={
        FirstName:'',
        Age:'',
        DOB:'',
        Hospital:'',
        TotalAmount:'',
        LastName:'',
        City:'',
        AdmissionDate:'',
        DischargeDate:''



    }

    const [state, setstate] = useState(PatientDetails)

    const handleInputChange=e=>{
        var {name,value}=e.target
        setstate({
            ...state,
            [name]:value
        })
    };


    const handleFormSubmit=e=>{
        e.preventDefault();
        props.addOrEdit(state)
    }


    useEffect(()=>{
        if (props.submitdata=='')
        setstate({
            ...PatientDetails

        })
        else 
        setstate({
            ...props.FormObjects

        })

    },[props.submitdata,props.FormObjects])


    return (
        <div className='Form'>
            <p className='Patient-Details'>Patient Details</p>

            <form className='bottom-form' autoComplete='off' onSubmit={handleFormSubmit}>
                <div className='left-side-form'>
                    <div className='First-Name'>
                        <label>First Name:</label>
                        <input type='text' onChange={handleInputChange} placeholder='FirstName' value={state.FirstName} name='FirstName'/>
                    </div>

                    <div className='Age'>
                        <label>Age:</label>
                        <input type='number'onChange={handleInputChange} value={state.Age} placeholder='Age' name='Age'/>
                    </div>

                    <div className='DOB'>
                        <label>DOB:</label>
                        <input type='date'onChange={handleInputChange} value={state.DOB} placeholder='DOB' name='DOB'/>
                    </div>
                    <div className='Hospital-names'>
                        <label>Hospital:</label>
                        <select className='Hospital'onChange={handleInputChange} value={state.Hospital} placeholder='Hospital' name='Hospital'>
                            <option value='select'>select</option>
                            <option value='Asian Heart Institute, Bandra-Kurla Complex'>Asian Heart Institute, Bandra-Kurla Complex</option>
                            <option value='Bhabha Hospital, Bandra'>Bhabha Hospital, Bandra</option>
                            <option value='Bhaktivedanta Hospital, Mira Road'>Bhaktivedanta Hospital, Mira Road</option>
                            <option value='Bombay Hospital, Marine Lines'>Bombay Hospital, Marine Lines</option>
                            <option value='Breach Candy Hospital, Mahalaxmi'>Breach Candy Hospital, Mahalaxmi</option>
                            <option value='D Y Patil Hospital, Nerul'>D Y Patil Hospital, Nerul</option>
                            <option value='Cloudnine Hospitals, Link Road, Malad West'>Cloudnine Hospitals, Link Road, Malad West</option>
                            <option value='Cooper Hospital, Vile Parle'>Cooper Hospital, Vile Parle</option>
                            <option value='Gokuldas Tejpal Hospital, Fort'>Gokuldas Tejpal Hospital, Fort</option>
                            <option value='Grant Medical College and Sir Jamshedjee Jeejebhoy Group of Hospitals, Sandhurst Road'>Grant Medical College and Sir Jamshedjee Jeejebhoy Group of Hospitals, Sandhurst Road</option>
                            <option value='Hinduja Healthcare Surgical, Khar, Mumbai'>Hinduja Healthcare Surgical, Khar, Mumbai</option>
                            <option value='Hinduja Hospital, Mahim, Mumbai'>Hinduja Hospital, Mahim, Mumbai</option>
                            <option value='Holy Family Hospital, Bandra'>Holy Family Hospital, Bandra</option>
                            <option value='Hurkisondas Hospital, Girgaon'>Hurkisondas Hospital, Girgaon</option>
                            <option value='Jaslok Hospital, Pedar Road'>Jaslok Hospital, Pedar Road</option>
                            <option value='Lilavati Hospital, Bandra'>Lilavati Hospital, Bandra</option>
                            <option value='Lokmanya Tilak Hospital, Sion'>Lokmanya Tilak Hospital, Sion</option>
                            <option value='Nanavati Hospital, Vile Parle'>Nanavati Hospital, Vile Parle</option>
                            <option value='Prince Aly Khan Hospital, Byculla'>Prince Aly Khan Hospital, Byculla</option>
                            <option value='Rajawadi Hospital, Ghatkopar'>Rajawadi Hospital, Ghatkopar</option>
                            <option value='Saifee Hospital, Charni Road'>Saifee Hospital, Charni Road</option>
                            <option value='KEM Hospital, Parel'>KEM Hospital, Parel</option>
                            <option value='Shushrusha Citizens Co-operative Hospital, Shivaji Park, Mumbai'>Shushrusha Citizens Co-operative Hospital, Shivaji Park, Mumbai</option>
                            <option value='Sunrise Hospital, Bhandup'>Sunrise Hospital, Bhandup</option>
                            <option value='Tata Memorial Hospital, Parel'>Tata Memorial Hospital, Parel</option>
                            <option value='Mahatma Gandhi Memorial Hospital, Parel'>Mahatma Gandhi Memorial Hospital, Parel</option>
                            <option value='Aditya Birla Memorial Hospital'>Aditya Birla Memorial Hospital</option>
                            <option value='Cloudnine Hospitals, Bhamburda, Shivaji Nagar and Kalyaninagar'>Cloudnine Hospitals, Bhamburda, Shivaji Nagar and Kalyaninagar</option>
                            <option value='Deenanath Mangeshkar Hospital'>Deenanath Mangeshkar Hospital</option>
                            <option value='Hardikar Hospital'>Hardikar Hospital</option>
                            <option value='Jehangir Hospital'>Jehangir Hospital</option>
                            <option value='Joshi Hospital'>Joshi Hospital</option>
                            <option value='Ruby Hall Clinic'>Ruby Hall Clinic</option>
                            <option value='Sassoon Hospital'>Sassoon Hospital</option>
                            <option value='Apollo Hospitals'>Apollo Hospitals</option>
                            <option value='Bangalore Medical College'>Bangalore Medical College</option>
                            <option value='Bowring & Lady Curzon Hospitals.'>Bowring & Lady Curzon Hospitals.</option>
                            <option value='Bangalore Medical College'>Bangalore Medical College</option>
                            <option value='Columbia Asia, Hebbal'>Columbia Asia, Hebbal</option>
                            <option value='Columbia Asia, Yeshwanthpur'>Columbia Asia, Yeshwanthpur</option>
                            <option value='Cloudnine Hospitals, Jayanagar.'>Cloudnine Hospitals, Jayanagar.</option>
                            <option value='Dr. Mohan’s Diabetes Specialities Centre'>Dr. Mohan’s Diabetes Specialities Centre</option>
                            <option value='Indira Gandhi Institute of Child Health, Bangalore.'>Indira Gandhi Institute of Child Health, Bangalore.</option>
                            <option value='Minto Eye Hospital, Bangalore Medical College.'>Minto Eye Hospital, Bangalore Medical College.</option>
                            <option value='Kidwai Memorial Institute of Oncology'>Kidwai Memorial Institute of Oncology</option>
                            <option value='Narayana Hrudayalaya, Hosur Road'>Narayana Hrudayalaya, Hosur Road</option>
                            <option value='National Institute of Mental Health and Neurosciences (Nimhans), Bangalore'>National Institute of Mental Health and Neurosciences (Nimhans), Bangalore</option>
                            <option value='Nethradhama Superspeciality Eye Hospital, Jayanagar'>Nethradhama Superspeciality Eye Hospital, Jayanagar</option>
                            <option value='Rajarajeswari Medical College and Hospital'>Rajarajeswari Medical College and Hospital</option>
                            <option value='SDS Tuberculosis and Rajiv Gandhi Institute of Chest diseases'>SDS Tuberculosis and Rajiv Gandhi Institute of Chest diseases</option>
                            <option value='Sri Jayadeva Institute of Cardiology, Jayanagar'>Sri Jayadeva Institute of Cardiology, Jayanagar</option>
                            <option value='St. Johns Medical College'>St. Johns Medical College</option>
                            <option value='Vanivilas Women and Children Hospital, Bangalore Medical College'>Vanivilas Women and Children Hospital, Bangalore Medical College</option>
                            <option value='Victoria Hospital, Bangalore Medical College'>Victoria Hospital, Bangalore Medical College</option>
                            <option value='Vydehi Institute of Medical Sciences and Research Centre Whitefield, Bangalore'>Vydehi Institute of Medical Sciences and Research Centre Whitefield, Bangalore</option>
                            <option value='Basaveshwara Teaching and General Hospital, Gulbarga'>Basaveshwara Teaching and General Hospital, Gulbarga</option>
                            <option value='All India Institute of Medical Sciences, Ansari Nagar'>All India Institute of Medical Sciences, Ansari Nagar</option>
                            <option value='Cloudnine Hospitals, Gurgaon'>Cloudnine Hospitals, Gurgaon</option>
                            <option value='Columbia Asia, Gurgaon'>Columbia Asia, Gurgaon</option>
                            <option value='Dharamshila Cancer Hospital and Research Centre, Dharamshila Marg, Vasundhara Enclave'>Dharamshila Cancer Hospital and Research Centre, Dharamshila Marg, Vasundhara Enclave</option>
                            <option value='Dr. Mohan’s Diabetes Specialities Centre'>Dr. Mohan’s Diabetes Specialities Centre</option>
                            <option value='Eden Hospital, East of Kailash, New Delhi'>Eden Hospital, East of Kailash, New Delhi</option>
                            <option value='Fortis Hospital, Gurgaon'>Fortis Hospital, Gurgaon</option>
                            <option value='Guru Teg Bahadur Hospital, Dilshad Garden'>Guru Teg Bahadur Hospital, Dilshad Garden</option>
                            <option value='Holy Family Hospital, Jamia Nagar, Friends Colony'>Holy Family Hospital, Jamia Nagar, Friends Colony</option>
                            <option value='Indraprastha Apollo Hospital, Sarita Vihar'>Indraprastha Apollo Hospital, Sarita Vihar</option>
                            <option value='Lady Hardinge Medical College, Shaheed Bhagat Singh Marg'>Lady Hardinge Medical College, Shaheed Bhagat Singh Marg</option>
                            <option value='Lok Nayak Hospital, Delhi'>Lok Nayak Hospital, Delhi</option>
                            <option value='Maharaja Agrasen Hospital, West Punjabi Bagh'>Maharaja Agrasen Hospital, West Punjabi Bagh</option>
                            <option value='Maulana Azad Medical College, Bahadur Shah Zafar Marg'>Maulana Azad Medical College, Bahadur Shah Zafar Marg</option>
                            <option value='Max Healthcare, Max Medcentre, Panchsheel Park'>Max Healthcare, Max Medcentre, Panchsheel Park</option>
                            <option value='Medanta The Medicity, Gurgaon'>Medanta The Medicity, Gurgaon</option>
                            <option value='National Heart Institute (Delhi), Community Centre, East of Kailash'>National Heart Institute (Delhi), Community Centre, East of Kailash</option>
                            <option value='Rajiv Gandhi Cancer Institute and Research Centre, Rohini and Niti bagh'>Rajiv Gandhi Cancer Institute and Research Centre, Rohini and Niti bagh</option>
                            <option value='Ram Manohar Lohia Hospital, Baba Kharag Singh Marg'>Ram Manohar Lohia Hospital, Baba Kharag Singh Marg</option>
                            <option value='Safdarjang Hospital'>Safdarjang Hospital</option>
                            <option value='Sanjeevan Hospitals, Daryaganj, Paharganj'>Sanjeevan Hospitals, Daryaganj, Paharganj</option>
                            <option value='Sir Ganga Ram Hospital, Rajendar Nagar'>Sir Ganga Ram Hospital, Rajendar Nagar</option>
                            <option value='St. Stephens Hospital, Delhi, Tis Hazari'>St. Stephens Hospital, Delhi, Tis Hazari</option>
                            <option value='Sunrise Hospital, Kalindi colony'>Sunrise Hospital, Kalindi colony</option>
                            <option value='Vidyasagar Institute of Mental Health and Neuro Sciences'>Vidyasagar Institute of Mental Health and Neuro Sciences</option>
                            <option value='Akruti Institute of Plastic and cosmetic surgery, Kukatpally'>Akruti Institute of Plastic and cosmetic surgery, Kukatpally</option>
                            <option value='Akruti Institute of Plastic and cosmetic surgery, Kukatpally'>Akruti Institute of Plastic and cosmetic surgery, Kukatpally</option>
                            <option value='Dr. Mohan’s Diabetes Specialities Centre, Domalguda & Jubilee Hills'>Dr. Mohan’s Diabetes Specialities Centre, Domalguda & Jubilee Hills</option>
                            <option value='Durgabai Deshmukh Hospital, Vidyanagar'>Durgabai Deshmukh Hospital, Vidyanagar</option>
                            <option value='Fernandez Hospital, Bogulkunta'>Fernandez Hospital, Bogulkunta</option>
                            <option value='L. V. Prasad Eye Institute'>L. V. Prasad Eye Institute</option>
                            <option value='LifeSpring Hospitals'>LifeSpring Hospitals</option>
                            <option value='National Institute of Mentally Handicapped, Newbowenpally'>National Institute of Mentally Handicapped, Newbowenpally</option>
                            <option value='Osmania General Hospital, Afzal Gunj'>Osmania General Hospital, Afzal Gunj</option>
                            <option value='Sarojini Devi Eye Hospital, Mehidipatnam'>Sarojini Devi Eye Hospital, Mehidipatnam</option>
                            <option value='Yashoda Hospitals, Malakpet, Secunderabad, Somajiguda'>Yashoda Hospitals, Malakpet, Secunderabad, Somajiguda</option>
                        </select>
                    </div>

                    <div className='Total-Amount'>
                        <label>Total Amount:</label>
                        <input type='number'onChange={handleInputChange} value={state.TotalAmount} placeholder='TotalAmount' name='TotalAmount'/>
                    </div>

                </div>

                <div className='right-side-form'>

                    <div className='Last-Name'>
                        <label>Last Name:</label>
                        <input type='text'onChange={handleInputChange} value={state.LastName} placeholder='LastName' name='LastName'/>
                    </div>
                    <div className='City'>

                        <label>City:</label>

                        <select value={state.City} onChange={handleInputChange} placeholder='City' name='City'>  
                            <option value='select'>select</option>  
                            <option value='Mumbai'>Mumbai</option>
                            <option value='Pune'>Pune</option>
                            <option value='Bangalore'>Bangalore</option>
                            <option value='Delhi'>Delhi</option>
                            <option value='Hyderabad'>Hyderabad</option>
                        </select>
                    </div>

                    <div className='Admission-Date'>
                        <label>Admission Date:</label>
                        <input type='date' onChange={handleInputChange} value={state.AdmissionDate} placeholder='AdmissionDate' name='AdmissionDate'/>
                    </div>

                    <div className='Discharge-Date'>
                        <label>Discharge Date:</label>
                        <input type='date' onChange={handleInputChange} value={state.DischargeDate} placeholder='DischargeDate' name='DischargeDate'/>
                    </div>
                    <div className='Add-Test'>
                        
                        <button className='button' setTrigger={props.setdisplayData}>Add Test</button>
                            
                    </div>
                </div>
            </form>
            {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/> */}
        </div>
        
    )
}

export default Form


