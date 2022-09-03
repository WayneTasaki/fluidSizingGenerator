
  const getValue = () => {
    let maxElementSize = Number(document.getElementById("maxElementSize").value)
    
    let minElementSize = Number(document.getElementById('minElementSize').value)
    let maxVW = Number(document.getElementById('maxVW').value)
    let minVW = Number(document.getElementById('minVW').value)
    let slope = (maxElementSize - minElementSize) / (maxVW - minVW)

    let yAxisIntersection = -minVW * slope + minElementSize
    let clampSlope = slope * 100
    let finalClamp = `clamp(${minElementSize}rem, ${yAxisIntersection.toFixed(4)}rem + ${clampSlope.toFixed(4)}vw, ${maxElementSize}rem);`

    document.getElementById('code').innerHTML = PR.prettyPrintOne(finalClamp)
  }