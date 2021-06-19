import React from 'react'
const ScrollAnimation = () => {
    const [currentScroll, setCurrentScroll] = React.useState(document.documentElement.scrollTop)
    
    React.useEffect(()=> {

        const handleScroll = () => {
            
            const divs = document.querySelectorAll('.effectScroll');
            setCurrentScroll(document.documentElement.scrollTop)
            const finalHeight = window.innerHeight * 0.90;

            divs.forEach(div => {
                
                if(div.offsetTop - finalHeight < currentScroll){
                    div.style.opacity= 1;
                    div.classList.add('show-effect');
                }
            });
        }

        window.addEventListener('scroll', handleScroll)
        return function clear(){ 
            window.removeEventListener('scroll', handleScroll);
        }

    });
        
    return(
        <></>
    )
}

export default ScrollAnimation;