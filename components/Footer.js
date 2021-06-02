import Link from 'next/link'

export default function Footer() {
    return (
        <div className="footer-color pt-12 border-t border-gray-600">
            <div className="container">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:py-28 py-16">
                    <div className="lg:pb-0 pb-10">
                        <div className="flex pb-2 items-center">
                            <img src="/141717329_497060598353545_4877675544851051058_n.gif" className="w-14" />
                            <h2 className="paragraph pb-1">Mediteran</h2>
                        </div>
                        <p className="paragraph lg:pl-3 pl-6">A better way to build</p>
                    </div>
                    <div className="px-6 pb-4">
                        <p className="text-gray-500 text-md pb-3">Navigacija</p>
                        <ul>
                            <li className="lg:pb-2 pb-4">
                                <Link href="/">
                                    <a href="#" className="paragraph hover:text-gray-200 transition duration-100">Početna</a>
                                </Link>
                            </li>
                            <li className="lg:pb-2 pb-4">
                                <Link href="/about">
                                    <a href="#" className="paragraph hover:text-gray-200 transition duration-100">O nama</a>
                                </Link>
                            </li>
                            <li className="lg:pb-2 pb-4">
                                <Link href="/">
                                    <a href="#" className="paragraph hover:text-gray-200 transition duration-100">Vijesti</a>
                                </Link>
                            </li>
                            <li className="lg:pb-2 pb-4">
                                <Link href="/contact">
                                    <a href="#" className="paragraph hover:text-gray-200 transition duration-100">Kontakt</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="px-6">
                        <p className="text-gray-500 text-md pb-3">Services</p>
                        <ul>
                            <li className="lg:pb-2 pb-4"><a className="paragraph hover:text-gray-200 transition duration-100">Documentation</a></li>
                            <li className="lg:pb-2 pb-4"><a className="paragraph hover:text-gray-200 transition duration-100">Changelog</a></li>
                            <li className="lg:pb-2 pb-4"><a className="paragraph hover:text-gray-200 transition duration-100">Pagebuilder</a></li>
                            <li className="lg:pb-2 pb-4"><a className="paragraph hover:text-gray-200 transition duration-100">UI Kit</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-center paragraph py-3 lg:px-0 px-6 border-t border-gray-600">&copy; Copyright Mediteran 2021.</p>
        </div>
        )
    }