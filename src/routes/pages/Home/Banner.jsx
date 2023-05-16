import bannerDoctor from '../../../assets/banner-doctor.png'
import Header from '../shared/Header';

const Banner = () => {

    return (
        <div className='relative'>

            <div className="bg-banner-bg-5  relative  min-h-[calc(100vh-80px)] bg-cover bg-no-repeat ">
                <Header></Header>
                <div className=" ">
                    <div className="max-w-[1240px] px-5  mx-auto  md:flex items-center ">
                        <div className=' '>
                            <h1 className=" text-5xl text-black font-bold   leading-[60px]">
                                Your Partner in Health, Empowering Wellness, Exceptional Care
                            </h1>
                            <p className='text-md mt-5'>Exceptional healthcare provider committed to personalized, advanced care, empowering patients for optimal recovery and long-term wellness.</p>
                            <button className='btn btn-primary mt-5 rounded-sm'>Get Started</button>
                        </div>
                        {/* Enhancing Your Wellbeing, One Click at a Time */}
                        {/* Entrust your health our doctors */}

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