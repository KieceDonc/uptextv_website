function scrollToElement(elementID){
    let element = document.getElementById(elementID);
    let elementRect = element.getBoundingClientRect();
    let absoluteElementTop = elementRect.top + window.pageYOffset;
    let middle = absoluteElementTop - (window.innerHeight / 2);
    window.scrollTo(0, middle);
}

function openInNewTab(href) { 
    window.open(href, "_blank"); 
} 