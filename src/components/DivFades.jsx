import React, { useState, useEffect, useRef } from "react";

const DivFades = ({ children, className, type = "fadeIn", threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const divRef = useRef(null)

  const typeClass = {
    fadeIn: "",
    fadeInDown: "-translate-y-20",
    fadeInUp: "translate-y-20",
    fadeInLeft: "-translate-x-20",
    fadeInRight: "translate-x-20",
  }[type]

  useEffect(() => {
    const currentDiv = divRef.current

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !isVisible) {
        setIsVisible(true)
      }
    }, { threshold })

    if (currentDiv) observer.observe(currentDiv)

    return () => {
      if (currentDiv) observer.unobserve(currentDiv)
      observer.disconnect()
    }
  }, [threshold, isVisible])

  return (
    <div ref={divRef} className={`${className} transition-all duration-1000 ease-in-out opacity-100 ${!isVisible && `opacity-[0] ${typeClass}`}`}>
      {children}
    </div>
  )
}

export default DivFades