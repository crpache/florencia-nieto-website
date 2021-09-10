import { useEffect } from 'react'

export const useStickyNavbar = (navbarID, navbarHeight) => {
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    const navbar = document.getElementById(navbarID);
    const modifyTopOnScroll  = () => {
      const currentScrollPos = window?.pageYOffset;
      if (!!navbar) {
        if (prevScrollpos > currentScrollPos) {
          navbar.style.top = "0";
        } else {
          navbar.style.top = `-${navbarHeight}px`;
        }
      }
      prevScrollpos = currentScrollPos;
    }
    document.addEventListener('scroll', modifyTopOnScroll);
    return () => document.removeEventListener('scroll', modifyTopOnScroll);
  }, [navbarID, navbarHeight])
}
