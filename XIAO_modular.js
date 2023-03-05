/*
Modualar XIAO Footprint with variable holes
s -> hole size
d_pad -> single XIAO pad in SVG
d_hole -> single hole in SVG, s changes size
*/
var XIAO = function() {
  const s = 0.019
  const d_pad = "M -0.06 0.03 L 0.06 0.03 L 0.06 -0.03 L -0.06 -0.03 L -0.06 0.03"
  var d_hole = `M -${s} 0 A ${s} ${s} 90 0 0 ${s} 0 A ${s} ${s} 90 0 0 ${s} 0 A ${s} ${s} 90 0 0 -${s} 0`
  const footprints = [
    {o:  0.3, r:["5V", "GND", "3V3", "10", "9", "8", "7"]},
    {o: -0.3, r:["0" , "1",   "2",   "3",  "4", "5", "6"]}
  ]
  var i = 0, out = {}
  footprints.forEach(function(row) {
    var offset = 0.3
    row.r.forEach(function(a) {
      var pos = [row.o,offset]
      out[a] = {"pos":pos,"shape":d_pad,"layers":["F.Cu"],"index":i++}
      out["hole____"+a+""] = {"pos":pos,"shape":d_hole,"layers":["drill"],"index":i++}
      offset = offset-0.1
    })
  })
  return out
}()