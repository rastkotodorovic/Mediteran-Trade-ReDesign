export default function Contact() {
    return (
        <div data-aos="fade-down">
            <div class="lg:w-1/3 lg:mx-auto rounded-lg bg-white text-center border-t-4 border-blue-600 -mb-80 relative shadow-lg mx-4">
                <div class="px-6 lg:w-80 w-64 mx-auto flex justify-center py-16">
                    <img src="undraw_contact_us_15o2.svg" />
                </div>
                <h2 class="title pb-4">Pošaljite nam poruku</h2>
                <p class="paragraph mb-6">We can help you solve company communication.</p>
                <div class="lg:grid lg:grid-cols-2 lg:gap-6 lg:px-6 lg:py-6">
                    <input type="text" class="border-b border-gray-200 lg:py-3 py-4 lg:px-3 mb-2 lg:w-auto w-60" placeholder="Ime"></input>
                    <input type="text" class="border-b border-gray-200 lg:py-3 py-4 lg:px-3 mb-2 lg:w-auto w-60" placeholder="Prezime"></input>
                </div>
                <div class="lg:grid lg:grid-cols-2 lg:gap-6 lg:px-6 lg:py-6">
                    <input type="text" class="border-b border-gray-200 lg:py-3 py-4 lg:px-3 mb-2 lg:w-auto w-60" placeholder="E-mail"></input>
                    <input type="text" class="border-b border-gray-200 lg:py-3 py-4 lg:px-3 mb-2 lg:w-auto w-60" placeholder="Opis"></input>
                </div>
                <div class="lg:py-10 pt-4">
                    <button href="#" class="btn btn-blue lg:mx-20 lg:my-0 mt-4 mb-8">
                        Pošaljite poruku
                    </button>
                </div>
            </div>
            <div class="contact-color h-96"></div>
        </div>
        )
    }