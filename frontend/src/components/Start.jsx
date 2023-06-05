import '../../src/index.css'
const Start = () => {
    return (
        <>
            <div className='flex'>
                <p className='text-xl md:text-6xl'>Hi, My name is </p> <p className='mx-2 text-xl md:text-6xl'> Narapol</p>
            </div>
            <p className='text-xl md:text-6xl'>i design and develop webapps</p>
            <label className="swap swap-flip text-9xl">
                <input type="checkbox" />
                <div className="swap-on text-4xl sm:text-9xl">😈</div>
                <div className="swap-off text-4xl sm:text-9xl">😇</div>
            </label>
        </>
    )
}
export default Start