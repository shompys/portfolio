import React from 'react'
const ScrollAnimation = () => {
    
        const handleScroll = () => {

            const divs = document.querySelectorAll('.effectScroll');
            const top = document.documentElement.scrollTop;
            const finalHeight = window.innerHeight * 0.90;

            divs.forEach(div => {
                
                if(div.offsetTop - finalHeight < top){
                    div.style.opacity= 1;
                    div.classList.add('show-effect');
                }
            });
        }

    window.addEventListener('scroll', handleScroll)

    return(
        <></>
    )
}

export default ScrollAnimation;