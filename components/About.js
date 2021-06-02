import Link from 'next/link'

export default function About() {
    return (
        <div className="container lg:mb-56 mb-24" data-aos="fade-down">
            <div className="lg:flex lg:justify-between">
                <div className="lg:w-1/2 lg:mr-32 p-6">
                    <img src="/undraw_quitting_time_dm8t.svg" alt="" />
                </div>
                <div className="lg:w-1/2 lg:pt-0 pt-4 lg:px-0 px-4">
                    <div className="pb-5">
                        <Link href="/about">
                            <a  className="bg-gray-100 text-green-500 py-1 px-4 rounded-full text-xs font-medium">
                                O NAMA
                            </a>
                        </Link>
                    </div>
                    <h2 className="title">You do the work - <br></br> <span className="text-blue-600">we do the sums</span> </h2>
                    <p className="blog-paragraph leading-loose pt-6">Knjigovodstena agencija Mediteran se bavi pružanjem knjigovodstvenih i računovodstvenih usluga, vođenjem poslovnih knjiga za sve vrste djelatnosti preduzeća i preduzetnika. Vršimo internet i elektronsko poslovanje sa poreskom upravom i UIO, čime omogućavamo brže i efikasnije poslovanje.</p>
                    <Link href="/about">
                        <a className="btn btn-blue mt-9">
                            Saznajte više
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
