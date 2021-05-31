import Link from 'next/link'

export default function ArticleData({ article }) {
    return (
        <div>
            <section className="container">
                <div className="text-center lg:px-24  px-4 py-20">
                    <h2 className="text-4xl text-gray-600 pb-12">{ article.title }</h2>
                    <p className="text-md text-gray-400 pb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Fusce pellentesque faucibus lorem at viverra. Integer at feugiat odio. In placerat euismod risus proin.</p>
                    <img src="../anthony-esau-N2zk9yXjmLA-unsplash.jpg" alt="" className="pb-12" />
                    <p className="text-md text-gray-400 pb-12 leading-loose">
                        { article.body }
                    </p>
                    <div className="text-left lg:px-28 pt-12">
                        <hr />
                        <p className="text-md text-gray-600 pb-2 pt-4 pl-4">Izvor:</p>
                        <p className="text-sm text-gray-400 pb-4 pl-4">bijeljina-danas.com</p>
                        <hr />
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 pb-24">
                <div className="container lg:px-0 px-5">
                    <div className="flex justify-between lg:pt-44 pt-20 pb-6">
                        <div>
                            <p className="text-gray-800 lg:text-xl text-lg pb-2">Latest Stories</p>
                            <p className="lg:text-md text-sm text-gray-400">Here’s what we've been up to recently.</p>
                        </div>
                        <div>
                            <a href="#" className="bg-blue-600 lg:flex hidden rounded-lg py-3 px-4 text-white shadow-lg hover:bg-blue-400">View all</a>
                        </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="bg-white shadow-md rounded-lg lg:mb-0 mb-6">
                            <div>
                                <img src="anthony-esau-N2zk9yXjmLA-unsplash.jpg" className="rounded-t-lg" />
                            </div>
                            <h2 className="text-gray-800 text-lg px-6 py-4 rounded-t-lg">
                                Caffe working has become a norm
                            </h2>
                            <p className="px-6 text-sm text-gray-400 pb-12">
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
                            <h2 className="text-gray-800 text-lg px-6 py-4">
                                Caffe working has become a norm
                            </h2>
                            <p className="px-6 text-sm text-gray-400 pb-12">
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
                            <h2 className="text-gray-800 text-lg px-6 py-4">
                                Caffe working has become a norm
                            </h2>
                            <p className="px-6 text-sm text-gray-400 pb-12">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nemo dolorum, praesentium optio beatae reprehenderit
                            </p>
                            <div className="px-6">
                                <hr />
                                <p className="text-sm text-gray-600 pb-1 pt-3">Izvor:</p>
                                <p className="text-sm text-gray-400 pb-4">bijeljina-danas.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
