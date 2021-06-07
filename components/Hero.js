import Link from 'next/link'

export default function Hero() {
    return (
      <div className="lg:container" data-aos="fade-down">
            <div className="lg:flex lg:justify-between lg:py-20 lg:p-0 p-7">
                <div className="lg:hidden">
                    <img src="/undraw_co-working_825n.svg" className="lg:ml-28" />
                </div>
                <div className="lg:w-1/2 pt-7">
                    <h2 className="h1">
                        Računovodstvene usluge na <br /> području Bosne i Hercegovine
                    </h2>
                    <p className="paragraph mt-10">
                        Računovodstvena agencija Mediteran Cvijeta Panić vam pruža  veliki asortiman usluga: računovodstvo, knjigovodstvo, elektronsko poslovanje i brojne druge.
                    </p>
                    <div className="mt-12">
                        <Link href="/contact">
                            <a className="btn btn-blue lg:mb-0 mb-3  mr-5">Kontaktirajte nas</a>
                        </Link>
                        <Link href="/about">
                            <a className="btn btn-white">Saznajte više</a>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:flex hidden">
                    <img src="/undraw_co-working_825n.svg" className="lg:ml-28" />
                </div>
            </div>
            <div className="lg:flex mt-6 lg:p-0 lg:pb-12 p-7">
                <div className="pb-6 lg:w-1/3 lg:pr-16"  data-aos="fade-down">
                    <div className="mb-3">
                        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA"></path><path d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA" opacity=".3"></path></g></svg>
                    </div>
                    <h2 className="title mb-3">Izrada obračuna</h2>
                    <p className="paragraph">Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>
                </div>
                <div className="pb-6 lg:w-1/3 lg:pr-12"  data-aos="fade-down">
                    <div className="mb-3">
                        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z" fill="#335EEA"></path><path d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z" fill="#335EEA" opacity=".3"></path></g></svg>
                    </div>
                    <h2 className="title mb-3">Obračun plata</h2>
                    <p className="paragraph">Designed with the latest design trends in mind. Landkit feels modern, minimal, and beautiful.</p>
                </div>
                <div className="pb-6 lg:w-1/3 lg:pl-4"  data-aos="fade-down">
                    <div className="mb-3">
                        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"></rect></g></svg>
                    </div>
                    <h2 className="title mb-3">Obračun PDV-a</h2>
                    <p className="paragraph">We've written extensive documentation for components and tools, so you never have to reverse engineer anything.</p>
                </div>
            </div>
      </div>
    )
  }
