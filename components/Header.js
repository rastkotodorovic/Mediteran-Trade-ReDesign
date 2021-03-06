import Link from 'next/link'

export default function Header() {
  return (
    <div className="lg:container">
        <div className="lg:flex lg:justify-between lg:py-6 flex flex-wrap justify-between items-center pt-6 pb-2">
            <div className="flex items-center">
                <img src="/141717329_497060598353545_4877675544851051058_n.gif" className="w-14 lg:pt-1" />
                <Link href="/">
                    <a>
                        <h1 className="text-2xl font-bold text-blue-600">
                            Mediteran
                        </h1>
                    </a>
                </Link>

            </div>

            <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block py-4 px-8"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <ul  className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                    <li>
                        <Link href="/">
                            <a className="lg:ml-0 ml-3 lg:my-0 my-2 inline-block lg:mx-12 transition duration-100 hover:text-blue-300 text-gray-600">
                                Početna
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className="lg:ml-0 ml-3 lg:my-0 my-2 inline-block lg:mx-12 transition duration-100 hover:text-blue-300 text-gray-600">
                                O nama
                            </a>
                        </Link>
                        </li>
                    <li>
                        <Link href="/news?page=1">
                            <a className="lg:my-0 my-2 inline-block lg:mx-12 transition duration-100 hover:text-blue-300 lg:ml-0 ml-3 text-gray-600">
                                Vijesti
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact">
                            <a className="lg:my-0 my-2 lg:mx-10 btn btn-blue lg:ml-0 ml-3">
                                Kontakt
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
