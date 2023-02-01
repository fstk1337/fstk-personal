import TypeWriter from 'typewriter-effect';

import './app-hero.scss';

export const AppHero = () => {
    return (
        <section id='hero' className='d-flex flex-column justify-content-center align-items-center'>
            <div className='hero-container' data-aos='fade-in'>
                <h1>Vitali Shvaichuk</h1>
                <div className='me-typed'>
                    <div className='Typewriter'>
                        <span>I&apos;m&nbsp;</span>
                    </div>
                    <TypeWriter
                        options={{
                            strings: ['Dreamer', 'Achiever', 'Developer'],
                            autoStart: true,
                            delay: 75,
                            loop: true
                        }}
                    />
                </div>
            </div>
        </section>
    );
};
