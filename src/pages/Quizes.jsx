import React, { useState } from 'react'
import './quizes.css'


export default function Quizes() {

  const [formData, setFormData] = useState({
    name: "",
    i_want_to_pursue_some_career_related_to: "",
    i_have_already_learnt: "",
    course_that_i_am_studying_in_college:"",
    skills_that_i_have: "",
    level_of_comfort_with_technology: "",
    communication_skills: "",
    things_i_enjoy_doing: "",
    my_ideal_job_would_provide: "",
    other_information: ""
  })

  return (
    <>
    <div className='container-fluid'>
     <div className='container text-white text-center justify-content-center d-grid gap-5'>
        {/* <form className='text-white' action=""> */}
          <div>
            <label htmlFor="name" className='row justify-content-center'>Your Name</label>
            <div className='row d-flex justify-content-center'>
              <input className='col-10 text-center' type="text" id='name'/>
            </div>
          </div>
          <div>
            <label className='row justify-content-center' htmlFor="inp2">Which course are you studying in college?</label>
            <div className='row d-flex justify-content-between'>
              <input className='col-6 text-center' type="text" id='inp2'/>
              <p className='col-6 row justify-content-center'>skip if not related to your career</p>
            </div>
          </div>
        {/* </form> */}
     </div>
    </div>  
    </>
  )
}
