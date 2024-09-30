import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Feedback() {
    const form = useRef()

    const HandleSubmit = (e) =>{
        e.preventDefault()
        emailjs
      .sendForm('service_whyjkjk', 'template_92c2e9v', form.current, {
        publicKey: 'y2gTWOppUDHIAC1Qo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
    return (
        <>
            <h1 className='text-2xl text-white text-center'>FeedBack</h1>
            <div className='flex justify-center '>
                <form ref={form} onSubmit={HandleSubmit} className='w-[300px]'>
                    <label className='input input-bordered flex items-center gap-3 bg-slate-200 my-3'>
                        Name:
                        <input className='text-orange-400' type='text' placeholder='Enter your Name' name='user_name' />
                    </label>
                    <label className='input input-bordered flex items-center gap-3 bg-slate-200 my-3'>
                        Email:
                        <input type='text' className='text-orange-400' placeholder='Enter Your Email' name='user_email'/>
                    </label>
                    <textarea className='w-full input input-bordered bg-slate-200 text-orange-400' placeholder='Enter Feedback' name='message'/>
                    <button type='submit' value="Send" className='btn btn-success text-white'>Send</button>
                </form>
            </div>

        </>
    )
}

export default Feedback
