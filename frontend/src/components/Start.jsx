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
                <div className="swap-on">😈</div>
                <div className="swap-off">😇</div>
            </label>
        </>
    )
}
export default Start