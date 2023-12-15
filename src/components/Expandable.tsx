import { useState } from "react"

interface Props {
    children: string,
    maxChar?: number
}

const Expandable = ({ children, maxChar = 100 }: Props) => {
    const [isExpanded, setIsExpanded] = useState(true); 

    if (children.length <= maxChar) return <p>{children}</p>
    
    const text = isExpanded ? children.slice(0, maxChar) : children 
    
  return (
      <>
        <p>{text}</p>
        <button onClick={() => setIsExpanded(!isExpanded) }>{ isExpanded ? 'More' : 'Less'}</button>
      </>
  )
}

export default Expandable