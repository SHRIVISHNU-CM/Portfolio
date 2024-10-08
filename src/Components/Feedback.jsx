import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Feedback() {
    const form = useRef()
    const [err, errMsg] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault()
        const email = form.current.user_email.value
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            errMsg("Invalid Email")
        }
        emailjs
            .sendForm('service_whyjkjk', 'template_92c2e9v', form.current, {
                publicKey: 'y2gTWOppUDHIAC1Qo',
            })
            .then(
                () => {
                    console.log('SUCCESS!')
                    form.current.reset()
                    errMsg('')
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
                <form ref={form} onSubmit={HandleSubmit} className='w-[280px] lg:w-[500px]'>
                    <label className='input input-bordered flex items-center gap-3 bg-slate-200 my-3 text-xl lg:text-2xl'>
                        Name:
                        <input className='text-orange-400' type='text' placeholder='Enter your Name' name='user_name' />
                    </label>
                    <label className='input input-bordered flex items-center gap-3 bg-slate-200 my-3 text-xl lg:text-2xl'>
                        Email:
                        <input type='text' className='text-orange-400' placeholder='Enter Your Email' name='user_email' />
                    </label>
                    <textarea className='w-full input input-bordered bg-slate-200 text-orange-400 text-xl lg:text-2xl' placeholder='Enter Feedback' name='message' />
                    <button type='submit' value="Send" className='btn btn-success text-white'>Send</button>
                    {err && <p className='text-xl text-white'>{err}</p>}
                </form>
            </div>

        </>
    )
}

export default Feedback
