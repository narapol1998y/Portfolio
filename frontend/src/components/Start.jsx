import '../../src/index.css'
import profile from '../assets/ppp.jpg'
const Start = () => {
    return (
        <>
            <div className='grid sm:grid-cols-2 gap-10'>
                <div >
                    <div>
                        <h1 className='font-bold text-2xl md:text-4xl'>OBJECTIVE</h1>
                        <p className='text-xl'>Seeking a Front-end Developer position to leverage my existing development skills while continuously expanding my skill set to meet the requirements of diverse projects.</p>
                    </div>
                    <div className='mt-[50px] md:mt-[200px]'>
                        <h1 className='font-bold text-2xl md:text-4xl'>PERSONAL INFO</h1>
                        <p className='text-xl'>Nickname: Ice</p>
                        <p className='text-xl'>Phone Number: 095-5760744</p>
                        <p className='text-xl'>Gmail: narapol25411998@gmail.com</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mx-auto'>
                    <img src={profile} className='w-[400px] object-cover rounded hidden sm:block' alt="profile" />
                    </div>
                </div>
            </div>


        </>
    )
}
export default Start