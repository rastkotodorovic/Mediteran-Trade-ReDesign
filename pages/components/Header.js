import Link from 'next/link'

export default function Header() {
  return (
    <div class="lg:container">
        <div class="lg:flex lg:justify-between lg:py-6 flex flex-wrap justify-between items-center py-2">
            <div class="flex items-center">
                <img src="141717329_497060598353545_4877675544851051058_n.gif" class="w-14 pt-1" />
                <h1 class="text-2xl font-extrabold text-blue-600">
                    Mediteran
                </h1>
            </div>

            <label for="menu-toggle" class="cursor-pointer lg:hidden block p-4"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <ul  class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                    <li>
                        <Link href="/">
                            <a class="lg:ml-0 ml-3 lg:my-0 my-2 inline-block lg:mx-12 transition duration-100 hover:text-blue-300">
                                Početna
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a class="lg:ml-0 ml-3 lg:my-0 my-2 inline-block lg:mx-12 transition duration-100 hover:text-blue-300">
                                O nama
                            </a>
                        </Link>
                        </li>
                    <li>
                        <Link href="/">
                            <a class="lg:my-0 my-2 inline-block lg:mx-12 transition duration-100 hover:text-blue-300 lg:ml-0 ml-3">
                                Vijesti
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact">
                            <a class="lg:my-0 my-2 lg:mx-12 btn btn-blue lg:ml-0 ml-3">
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
