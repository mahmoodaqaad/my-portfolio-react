import React, {  useEffect, useRef } from 'react'

import './Hero.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Scroll } from '../../Components/Scroll';

const Hero = () => {

    // مرجع للإشارة إلى عنصر النص
    const typedElement = useRef(null);
    // useEffect(() => {
    //     // إعداد تأثير الكتابة
    //     const typed = new Typed(typedElement.current, {
    //         strings: ['Frontend Developer'],
    //         typeSpeed: 100,
    //         backSpeed: 100,
    //         backDelay: 1000,
    //         loop: true,
    //     });

    //     // تنظيف المؤثر عند إلغاء تثبيت المكون
    //     return () => {
    //         typed.destroy();
    //     };
    // }, []);
    useEffect(() => {
        // إعداد ScrollReveal للتأثيرات
        Scroll()

    }, []);

    return (
        <section className='' >
            <div className='row flex-wrap justify-content-between align-items-center hero text-center pt-5  pt-lg-0 ' name='home'>
                <div className='left info col-12 col-lg-6 text-lg-start'>
                    <h1>Hi, I'm Mahmood</h1>
                    <h1>
                        and I'm a <span ref={typedElement} className="multiple-text">Front End Developer</span>
                    </h1>
                    <p>Passionate about building seamless web experiences</p>

                    <div className=' mt-4 d-flex align-items-center gap-3 socail justify-content-center justify-content-lg-start'>


                        <Link target='_blank' to={"https://www.facebook.com/profile.php?id=100022618519064"}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                        <Link target='_blank' to={"https://www.instagram.com/dev._mahmood/"}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link target='_blank' to={"https://wa.me/+970599923041"}>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </Link>
                        <Link target='_blank' to={"https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%AF-528463291/"}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link>
                        <Link target='_blank' to={"https://github.com/mahmoodaqaad"}>
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>

                    </div>
                    <Link target='_blank' to="https://drive.google.com/file/d/1mm9b3uDuRoCVKqJOsqzxie5b0n8XkriC/view?usp=sharing" className='btn btn-main px-5 py-1 mt-4 '>MY CV</Link>
                </div>
                <div className='right img-box col-12 col-lg-6  mt-5 '>
                    <img src={require("../../IMG/PEC-2.png")} alt="" />
                </div>
            </div></section>
    )
}

export default Hero
