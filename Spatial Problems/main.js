//Minding the Gap
function distanceBetweenPoints2D(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function distanceBetweenPoints3D(x1, y1, z1, x2, y2, z2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dz = z2 - z1;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  //Detecting the Overlap
  function checkRectangleOverlap(rect1, rect2) {
    const [x1, y1, width1, height1] = rect1;
    const [x2, y2, width2, height2] = rect2;
  
    if (x1 > x2 + width2 || x2 > x1 + width1) {
      return false; // Rectangles do not overlap horizontally
    }
  
    if (y1 > y2 + height2 || y2 > y1 + height1) {
      return false; // Rectangles do not overlap vertically
    }
  
    return true; // Rectangles overlap
  }