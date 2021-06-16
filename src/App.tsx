import React, { useEffect, useRef } from 'react'
import FountainAnimator from './fountain'
import skin1 from './img/coin1.svg'
import skin2 from './img/coin2.svg'
import crown from './img/crown.png'

const App = () => {
  const fountainCanvasRef = useRef<any>(null)

  useEffect(() => {
    const fountainAnimator1 = new FountainAnimator({
      animationSpeed: 2.9,
      power: 155,
      itemsNumber: 52,
      spreadAngle: 99,
      gravity: 8,
      minItemsSize: 215,
      maxItemsSize: 421,
      rotationSpeed: 0.7,
      imgSkins: [skin1, skin2],
      canvasRef: fountainCanvasRef,
    })
    fountainAnimator1.start()
    const fountainAnimator2 = new FountainAnimator({
      animationSpeed: 2.9,
      power: 155,
      itemsNumber: 3,
      spreadAngle: 99,
      gravity: 8,
      minItemsSize: 215,
      maxItemsSize: 421,
      rotationSpeed: 0,
      imgSkins: [crown],
      canvasRef: fountainCanvasRef,
    })
    fountainAnimator2.start()
    return () => {
      fountainAnimator1.destroy()
      fountainAnimator2.destroy()
    }
  }, [])

  return <canvas id="fountain1" ref={fountainCanvasRef} />
}

export default App
