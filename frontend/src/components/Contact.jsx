import lineicon from '../assets/line.png'
import phoneicon from '../assets/phone.png'
import { SocialIcon } from 'react-social-icons';
const Contact = () => {
    return (
        <div >
            <h1 className='text-4xl font-bold'>Find me on:</h1>
            <div className='my-10 grid md:grid-cols-2 xl:grid-cols-4 '>
                <div className='flex mt-2 ml-2 '>
                    <SocialIcon url="https://github.com/narapol1998y" /><p className='my-auto ml-2'>github.com/narapol1998y </p>
                </div>
                <div className='flex mt-2 ml-2 '>
                    <SocialIcon url="https://www.facebook.com/narapol.ai.5/" /><p className='my-auto ml-2 '>facebook.com/narapol.ai.5 </p>
                </div>
                <div className='flex '>
                    <img src={lineicon} className='w-[64px] object-cover' alt="line" /><p className='my-auto '>luk1ss3</p>
                </div>
                <div className='flex '>
                    <img src={phoneicon} className='w-[64px] object-cover' alt="line" /><p className='my-auto '>095-5760744</p>
                </div>
            </div>
        </div>
    )
}
export default Contact