import img1 from '../../../assets/s2.jpg'
import img2 from '../../../assets/s1.jpg'
import img3 from '../../../assets/s3.jpg'
import img4 from '../../../assets/4s.jpg'



const Slider = () => {
    return (
        <div>

            <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
                <div className="relative">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="ml-auto lg:col-start-2 lg:max-w-2xl">
                            <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                                Duplo
                            </p>
                            <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                                Toys that create high quality play.
                            </h4>
                            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                                Ensuring the safety and quality of toys is not just a matter of protecting children, but also a legal obligation. Governments around the world have implemented various regulations and standards to govern toy quality and safety,
                            </p>
                            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            Good quality materials.
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            Safe, durable, and sturdy
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            24/24 support
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            Various options
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                            <div data-aos="zoom-out-up" className="relative space-y-4">
                                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={img1} alt="1" />
                                    <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src={img2} alt="2" />
                                </div>
                                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                    <img className="w-24 rounded-lg shadow-lg md:w-40" width="170" src={img3} alt="3" />
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={img4} alt="4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Slider;