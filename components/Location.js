export default function Location() {
    return (
        <div className="bg-gray-100 lg:mb-56 mb-24" data-aos="fade-down">
            <div className="lg:flex lg:justify-between lg:p-0 p-4">
                <div className="lg:w-1/2 lg:pb-0 pb-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d708.207753134186!2d19.176833829265462!3d44.763860998693666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ1JzQ5LjkiTiAxOcKwMTAnMzguNiJF!5e0!3m2!1sbs!2sba!4v1593699792372!5m2!1sbs!2sba" width="100%" height="650" frameBorder="0" className="map" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="lg:w-1/2  lg:pl-32 lg:pt-36 lg:mb-2 lg:pr-72 lg:text-left lg:mt-0 mt-4">
                    <h2 className="title mb-3 lg:mx-0 mx-4">Locirani smo u Bijeljini.</h2>
                    <h2 className="title text-blue-600 mb-8 lg:mx-0 mx-4">Agrotrzni centar</h2>
                    <p className="paragraph mb-8 lg:mx-0 mx-4">We picked our office location to maximize our team's enjoyment! LA's best restaurants are within walking distance, as well are some of the finest coffee shops in the world. Come visit us and you'll agree.</p>
                    <div className="lg:grid lg:grid-cols-4 lg:gap-6 grid grid-cols-3">
                        <div className="lg:mb-0 mb-6 border-r border-gray-300 lg:text-left text-center">
                            <p className="title text-blue-600">100%</p>
                            <p className="paragraph">Pouzdanje</p>
                        </div>
                        <div className="lg:mb-0 mb-6 border-r border-gray-300 lg:text-left text-center">
                            <p className="title text-blue-600">24/7</p>
                            <p className="paragraph">Efikasnost</p>
                        </div>
                        <div className="lg:mb-0 mb-6 lg:text-left text-center">
                            <p className="title text-blue-600">100%</p>
                            <p className="paragraph">Povjerenje</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }