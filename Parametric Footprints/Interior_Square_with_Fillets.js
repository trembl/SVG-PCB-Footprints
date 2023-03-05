/* 
Interior with Fillets
xMin, xMax, yMin, yMax need to be defined
*/

const addInterior = function(b) {
  fillet_size = 0.10
  var p = pt(xMin+0.05, yMin+(yMax-yMin)/2)
  let interior = path(
    p,
    ["fillet", fillet_size, pt(xMin+0.05, yMax-0.05)],
    ["fillet", fillet_size, pt(xMax-0.05, yMax-0.05)],
    ["fillet", fillet_size, pt(xMax-0.05, yMin+0.05)],
    ["fillet", fillet_size, pt(xMin+0.05, yMin+0.05)],
    p,
  )
  b.addShape("interior", interior);
}
addInterior(board)
