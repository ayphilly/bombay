import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Platformbutton } from '../components/buttons';

export const Error404 =  ()=> {

    const navigate = useNavigate()
  return (
    <section className="w-full h-[100vh]  flex items-center justify-center">
            <div className="flex flex-col items-center gap-[10px]">
                    {/* <img src={error404} alt="error404__svg" className='error404__svg'/> */}
                    <span className='flex flex-col gap-[10px] text-white items-center max-w-[80vw] md:max-w-[50vw] lg:max-w-[400px]'>
                        <p className='my-0 text-center  font-[600] text-[1.25em]'>Oops :(</p>
                        <p className='my-0 text-center font-[400] text-[1em] leading-[1.4em] mb-[20px]'>
                            The page you are currently looking for 
                            isn’t available or missing :(, maybe it was  removed or renamed,
                            we advise you go back to the homepage.
                        </p>
                    </span>
                    <Platformbutton name="Back to homepage" click={()=> navigate('/')} />
                    
                </div>

        </section>
  );
}