import Link from 'next/link'

export default function Action() {
    return (
        <div class="action-image">
            <div class="container py-32 lg:flex lg:justify-between lg:items-center">
                <div class="lg:w-3/4">
                    <h2 class="title text-center text-white font-bold lg:mb-2 mb-6">Akcija</h2>
                    <p class="paragraph text-center lg:px-0 px-4 lg:mb-2 mb-6">Prvi mjesec naših knjigovodstvenih usluga je besplatan.</p>
                </div>
                <div class="lg:1/4 text-center lg:mt-0 mt-10">
                    <Link href="/contact">
                        <a class="lg:items-center paragraph text-white border-2 rounded-full border-white px-6 py-3">Pišite nam</a>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
