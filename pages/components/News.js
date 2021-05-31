export default function News() {
    return (
        <div className="bg-gray-100 pb-24">
            <div className="container lg:px-0 px-5">
                <div className="flex justify-between lg:pt-44 pt-20 pb-6">
                    <div>
                        <p className="title pb-2">Najnovije vijesti</p>
                        <p className="paragraph">Pogledajte nase vijesti</p>
                    </div>
                    <div>
                        <a href="#" className="btn btn-white lg:flex hidden">Sve vijesti</a>
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="bg-white shadow-md rounded-lg lg:mb-0 mb-6">
                        <div>
                            <img src="anthony-esau-N2zk9yXjmLA-unsplash.jpg" className="rounded-t-lg" />
                        </div>
                        <h2 className="blog-title px-6 py-4">
                            Caffe working has become a norm
                        </h2>
                        <p className="px-6 blog-paragraph pb-12">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nemo dolorum, praesentium optio beatae reprehenderit
                        </p>
                        <div className="px-6">
                            <hr />
                            <p className="text-sm text-gray-600 pb-1 pt-3">Izvor:</p>
                            <p className="text-sm text-gray-400 pb-4">bijeljina-danas.com</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg lg:mb-0 mb-6">
                        <div>
                            <img src="anthony-esau-N2zk9yXjmLA-unsplash.jpg" className="rounded-t-lg" />
                        </div>
                        <h2 className="blog-title px-6 py-4">
                            Caffe working has become a norm
                        </h2>
                        <p className="px-6 blog-paragraph pb-12">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nemo dolorum, praesentium optio beatae reprehenderit
                        </p>
                        <div className="px-6">
                            <hr></hr>
                            <p className="text-sm text-gray-600 pb-1 pt-3">Izvor:</p>
                            <p className="text-sm text-gray-400 pb-4">bijeljina-danas.com</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg lg:mb-0 mb-6">
                        <div>
                            <img src="anthony-esau-N2zk9yXjmLA-unsplash.jpg" className="rounded-t-lg" />
                        </div>
                        <h2 className="blog-title px-6 py-4">
                            Caffe working has become a norm
                        </h2>
                        <p className="px-6 blog-paragraph pb-12">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nemo dolorum, praesentium optio beatae reprehenderit
                        </p>
                        <div className="px-6">
                            <hr></hr>
                            <p className="text-sm text-gray-600 pb-1 pt-3">Izvor:</p>
                            <p className="text-sm text-gray-400 pb-4">bijeljina-danas.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }