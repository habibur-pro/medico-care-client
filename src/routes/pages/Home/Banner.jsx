import bannerDoctor from '../../../assets/banner-doctor.png'
import Header from '../shared/Header';

const Banner = () => {

    return (
        <div className='relative'>

            <div className="bg-banner-bg-5  relative  min-h-[calc(100vh-80px)] bg-cover bg-no-repeat ">
                <Header></Header>
                <div className=" ">
                    <div className="max-w-[1240px] px-5  mx-auto  md:flex items-center ">
                        <div className=' bg-slate-300'>
                            <h3 className=" text-5xl text-black font-bold "> Partnering with You for a Lifetime of Good Health </h3>
                        </div>
                        <div className='w-full '>
                            <img className='w-full h-[600px] w-[500px] mt-28' src={bannerDoctor} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;