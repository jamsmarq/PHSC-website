import React, { useState, useEffect, useRef } from "react";

const DivFadeIn = ({ children, className = '', threshold = 0.0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const divRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !isVisible) {
        setIsVisible(true)
      }
    }, { threshold })

    observer.observe(divRef.current)

    return () => observer.disconnect()
  }, [threshold, isVisible])

  return (
    <div ref={divRef} className={`${className} transition-all duration-1000 ease-in-out opacity-100 relative ${!isVisible && "opacity-5 translate-y-20"}`}>
      {children}
    </div>
  )
}

export default DivFadeIn