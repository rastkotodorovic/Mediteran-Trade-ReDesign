export default function Footer() {
    return (
        <div class="footer-color pt-12 border-t border-gray-600">
            <div class="container">
                <div class="lg:grid lg:grid-cols-3 lg:gap-8 lg:py-28 py-16">
                    <div class="lg:pb-0 pb-10">
                        <div class="flex pb-2 items-center">
                            <img src="141717329_497060598353545_4877675544851051058_n.gif" class="w-14" />
                            <h2 class="paragraph pb-1">Mediteran</h2>
                        </div>
                        <p class="paragraph lg:pl-3 pl-6">A better way to build</p>
                    </div>
                    <div class="px-6 pb-4">
                        <p class="text-gray-500 text-md pb-3">Navigacija</p>
                        <ul>
                            <li class="lg:pb-2 pb-4"><a href="#" class="paragraph hover:text-gray-200 transition duration-100">Početna</a></li>
                            <li class="lg:pb-2 pb-4"><a href="#" class="paragraph hover:text-gray-200 transition duration-100">O nama</a></li>
                            <li class="lg:pb-2 pb-4"><a href="#" class="paragraph hover:text-gray-200 transition duration-100">Vijesti</a></li>
                            <li class="lg:pb-2 pb-4"><a href="#" class="paragraph hover:text-gray-200 transition duration-100">Kontakt</a></li>
                        </ul>
                    </div>
                    <div class="px-6">
                        <p class="text-gray-500 text-md pb-3">Services</p>
                        <ul>
                            <li class="lg:pb-2 pb-4"><a href="#" class="paragraph hover:text-gray-200 transition duration-100">Documentation</a></li>
                            <li class="lg:pb-2 pb-4"><a href="#" class="paragraph hover:text-gray-200 transition duration-100">Changelog</a></li>
                            <li class="lg:pb-2 pb-4"><a href="#" class="paragraph hover:text-gray-200 transition duration-100">Pagebuilder</a></li>
                            <li class="lg:pb-2 pb-4"><a href="#" class="paragraph hover:text-gray-200 transition duration-100">UI Kit</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="text-center paragraph py-3 lg:px-0 px-6 border-t border-gray-600">&copy; Copyright Mediteran 2021.</p>
        </div>
        )
    }