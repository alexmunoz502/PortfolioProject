// Event: On Load
window.addEventListener('load', initializeHomePage);

// Page Initialization
function initializeHomePage() {
    onWindowResize();
}

// Event: Window Resize
window.addEventListener('resize', onWindowResize)

function onWindowResize() {
    resizeLandingWrapper();
    resizeViewPortfolioButton();
}

// Home Page Landing
const ASPECT_RATIO = 16 / 9;

// Landing Wrapper

function getLandingWrapper() {
    return document.getElementById('home-landing-wrapper');
}

function getLandingWrapperStyles() {
    let landingWrapper = getLandingWrapper();
    let wrapperStyles = window.getComputedStyle(landingWrapper);
    return wrapperStyles;
}

function getLandingWrapperMinHeight() {
    let minHeight = getLandingWrapperStyles().getPropertyValue('min-height');
    minHeight = minHeight.substring(0, minHeight.length - 2);
    return minHeight;
}

function getLandingWrapperMinWidth() {
    let minWidth = getLandingWrapperStyles().getPropertyValue('min-width');
    minWidth = minWidth.substring(0, minWidth.length - 2);
    return minWidth;
}

function getLandingWrapperHeightRatio() {
    let landingWrapper = getLandingWrapper();
    let heightRatio = landingWrapper.offsetHeight / getLandingWrapperMinHeight();
    return heightRatio;
}

function getLandingWrapperWidthRatio() {
    let landingWrapper = getLandingWrapper();
    let widthRatio = landingWrapper.offsetWidth / getLandingWrapperMinWidth();
    return widthRatio;
}

function setLandingWrapperWidth(newWidth) {
    getLandingWrapper().setAttribute("style", `width: ${newWidth}px`);
}

function resizeLandingWrapper() {
    let height = getLandingWrapper().offsetHeight;
    let newWidth = height * ASPECT_RATIO;
    setLandingWrapperWidth(newWidth);
}

// View Portfolio Button

function getViewPortfolioButton() {
    return document.getElementById('btn-view-portfolio');
}

function getViewPortfolioButtonStyles() {
    let viewPortfolioButton = getViewPortfolioButton();
    let wrapperStyles = window.getComputedStyle(viewPortfolioButton);
    return wrapperStyles;
}

function getViewPortfolioButtonMinHeight() {
    let minHeight = getViewPortfolioButtonStyles().getPropertyValue('min-height');
    minHeight = minHeight.substring(0, minHeight.length - 2);
    return minHeight;
}

function getViewPortfolioButtonMinWidth() {
    let minWidth = getViewPortfolioButtonStyles().getPropertyValue('min-width');
    minWidth = minWidth.substring(0, minWidth.length - 2);
    return minWidth;
}

function setViewPortfolioButtonHeight(newHeight) {
    let viewPortfolioButton = getViewPortfolioButton();
    viewPortfolioButton.setAttribute("style", `height: ${newHeight}px`);
}

function setViewPortfolioButtonWidth(newWidth) {
    let viewPortfolioButton = getViewPortfolioButton();
    viewPortfolioButton.setAttribute("style", `width: ${newWidth}px`);
}

function calculateNewHeight() {
    let height = getViewPortfolioButtonMinHeight() * getLandingWrapperHeightRatio();
    return height;
}

function calculateNewWidth() {
    let width = getViewPortfolioButtonMinWidth() * getLandingWrapperWidthRatio();
    return width;
}

function resizeViewPortfolioButton() {
    console.log(calculateNewHeight());
    console.log(calculateNewWidth());
    setViewPortfolioButtonHeight(calculateNewHeight());
    setViewPortfolioButtonWidth(calculateNewWidth());
}


