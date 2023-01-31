import TypeWriter from 'typewriter-effect';

import './app-hero.scss';

export const AppHero = () => {
    return (
        <section id='hero' className='d-flex flex-column justify-content-center align-items-center'>
            <div className='hero-container' data-aos='fade-in'>
                <h1>Vitali Shvaichuk</h1>
                <TypeWriter
                    options={{
                        strings: [
                            "I'm Designer",
                            "I'm Developer",
                            "I'm Freelancer",
                            "I'm Photographer"
                        ],
                        autoStart: true,
                        delay: 75,
                        loop: true
                    }}
                />
            </div>
        </section>
    );
};
