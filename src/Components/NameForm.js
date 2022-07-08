import './NameForm.css';

const NameForm=()=>{
    return(
            <form>
                <div className='form_controls'>
             
             <div className='form__control'>
                 <label>Student Name</label>
                 <input type="text"/>
             </div>
             
             <div className='form__control'>
                 <label>Student Last Name</label>
                 <input type="text"/>
             </div>
             <div className='form__control'>
                 <label>Student Address</label>
                 <input type="text"/>
             </div>
             <div className='form__control'>
                 <label>Student Phone number</label>
                 <input type="number"/>
             </div>
             <div className='form__control'>
                 <label>Student Gym Fee</label>
                 <input type="number"/>
             </div>

                </div>
                <div className='from__actions'>
                    <button type="submit">Add Student Details</button>
                </div>
            </form>
                 
            
    );

};

export default NameForm;