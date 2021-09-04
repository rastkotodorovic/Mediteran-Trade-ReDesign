import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

export default function Section() {
    return (
        <div className="container mt-20 lg:mb-56 mb-24 lg:px-0 px-8" data-aos="fade-down">
            <h2 className="title text-center text-blue-600 lg:my-5 my-8">Racunovodstvena agencija Mediteran - Cvijeta Panic</h2>
            <p className="paragraph text-center text-gray-400 mb-16">Znanje i povjerenje su naše osnovne vrijednosti. Svima je potreban partner kojem mogu vjerovati, koji prati i usmjerava njihovo poslovanje da bi ono istovremeno bilo usklađeno sa zakonima i ekonomično.</p>
            <div className="lg:grid lg:grid-cols-4 gap-6">
                <div className="text-center lg:mb-0 mb-6">
                    <h2 className="text-4xl text-blue-600 mb-2">
                        <CountUp
                            start={0}
                            end={100}
                            duration={1.80}
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>+
                    </h2>
                    <p className="paragraph">
                        Zadovoljnih klijenata
                    </p>
                </div>
                <div className="text-center lg:mb-0 mb-6">
                    <h2 className="text-4xl text-blue-600 mb-2">
                        <CountUp
                            start={0}
                            end={35}
                            duration={1.80}
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                    </h2>
                    <p className="paragraph">
                        Godina poslovanja
                    </p>
                </div>
                <div className="text-center lg:mb-0 mb-6">
                    <h2 className="text-4xl text-blue-600 mb-2">
                        <CountUp
                            start={0}
                            end={2000}
                            duration={1.80}
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                    </h2>
                    <p className="paragraph">
                        Završenih projekata
                    </p>
                </div>
                <div className="text-center lg:mb-0 mb-6">
                    <h2 className="text-4xl text-blue-600 mb-2">
                        <CountUp
                            start={0}
                            end={300}
                            duration={1.80}
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>+
                    </h2>
                    <p className="paragraph">
                        Uspješnih saradnji
                    </p>
                </div>
            </div>
        </div>
        )
    }