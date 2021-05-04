import { useState, useEffect } from 'react'

const StreamBuilder = ({ streams = [], children = () => {}}) => {
  const [results, setResult] = useState([])

  useEffect(() => {
    const subscriptions = streams.map((stream, index) => stream.subscribe(value => {
      setResult(result => {
        result[index] = value
        return [...result]
      })
    }))
    return () => subscriptions.forEach(s => s.unsubscribe())
  }, [streams])

  if (typeof children !== 'function' || !Array.isArray(results) || results.length === 0) return null
  return children(results)
}

export default StreamBuilder