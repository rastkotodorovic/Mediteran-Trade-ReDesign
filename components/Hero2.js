export default function Hero2({ title, body }) {
    return (
        <div className="hero-2" data-aos="fade-down">
            <div className="container">
                <div className="text-center lg:py-48 py-36">
                    <h2 className="text-white text-5xl mb-7">{ title }</h2>
                    <p className="text-gray-300 lg:px-48 px-8 lg:text-md text-sm leading-relaxed">{ body }</p>
                </div>
            </div>
        </div>
        )
    }
