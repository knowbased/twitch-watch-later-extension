export const getClockSVG = () => {
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("width", "24");
  svgElement.setAttribute("height", "24");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute("fill", "none");
  svgElement.setAttribute("stroke", "currentColor");
  svgElement.setAttribute("stroke-width", "2");
  svgElement.setAttribute("stroke-linecap", "round");
  svgElement.setAttribute("stroke-linejoin", "round");

  const circleElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circleElement.setAttribute("cx", "12");
  circleElement.setAttribute("cy", "12");
  circleElement.setAttribute("r", "10");

  const polylineElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polyline"
  );
  polylineElement.setAttribute("points", "12 6 12 12 16 14");

  svgElement.appendChild(circleElement);
  svgElement.appendChild(polylineElement);

  return svgElement;
};
