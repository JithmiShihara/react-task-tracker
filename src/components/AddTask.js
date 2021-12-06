import { useState } from 'react'

const AddTask = () => {
    cost [text, setText] = useState('')
    cost [day, setDay] = useState('')
    cost [reminder, setReminder] = useState(false)

    return (
        <form className='add-form'>
            <div className='form-control'>
                <lable>Task</lable>
                <input 
                type='text' 
                placeholder='AddTask' 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                />
            </div>
            <div className='form-control'>
                <lable>Day & Time</lable>
                <input 
                    type='text' 
                    placeholder='Add Day & Time' 
                    value={day} 
                    onChange={(e) => setDay(e.target.value)} 
                />
            </div>
            <div className='form-control form-control-check'>
                <lable>Set Reminder</lable>
                <input 
                    type='checkbox' 
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)} 
                    />
            </div>

           <input type='submit' value='Save Task' className='btn btn-block' /> 
        </form> 
    )
}

export default AddTask