/* 
LED_RGB_WS2812B 
- GND Pad Indicator
- Pad size & position modular
*/

const LED_RGB_WS2812B = function() {
  // Single Pad
  const a = 0.03 // 0.03
  const b = 0.018 // 0.18
  const f = 0.004 // 0.004
  // Pad Positions
  const x = 0.0964 // 0.0964
  const y = 0.0649 // 0.0649
  const PAD = `M ${-a} ${b} L ${a} ${b} L ${a} ${-b} L ${-a} ${-b} L ${-a} ${b}`
  const GND_PAD = `M ${-a} ${b} L ${a} ${b} L ${a} ${-f} L ${a-b+f} ${-b} L ${-a} ${-b} L ${-a} ${b}`
  return {
    "VCC":{"alias": 1,"pos":[-x,y],"shape": PAD,"layers":["F.Cu"]},
    "OUT":{"alias": 2,"pos":[-x,-y],"shape":PAD,"layers":["F.Cu"]},
    "GND":{"alias": 3, "pos":[x,-y],"shape":GND_PAD,"layers":["F.Cu"]},
    "IN":{"alias": 4,"pos":[x,y], "shape":PAD,"layers":["F.Cu"]}
  }
}()