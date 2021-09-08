import { useEffect } from 'react'

export const useStickyNavbar = (navbarID, navbarHeight) => {
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
  useEffect(() => {
    document.addEventListener('scroll', modifyTopOnScroll);
    return () => document.removeEventListener('scroll', modifyTopOnScroll);
  }, [navbarID, navbarHeight, modifyTopOnScroll])
}
