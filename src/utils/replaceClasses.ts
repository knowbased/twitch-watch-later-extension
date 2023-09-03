export const replaceElementClasses = (
  targetElement: Element,
  sourceElement: Element
) => {
  const targetClasses = targetElement.getAttribute("class");
  const sourceClasses = sourceElement.getAttribute("class");

  if (targetClasses && sourceClasses) {
    targetElement.setAttribute("class", sourceClasses);
  }
};

export const replaceAllElementClasses = (
  targetElement: Element,
  sourceElement: Element
) => {
  const targetElementChildren = targetElement.querySelectorAll("*");
  const sourceElementChildren = sourceElement.querySelectorAll("*");

  targetElementChildren.forEach((child, index) => {
    const sourceChild = sourceElementChildren[index];

    if (child instanceof HTMLElement && sourceChild instanceof HTMLElement) {
      replaceElementClasses(child, sourceChild);
    }
  });
};
