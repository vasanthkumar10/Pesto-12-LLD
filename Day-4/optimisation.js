function apiCall(...args) {
  console.log("calling api", args);
}

// HOF -> take fn and returns debounced fn
function debounce(func, delay) {
  let timeOutId;
  return function (...args) {
    console.log("debouncing.....");
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// const debouncedAPI = debounce(apiCall, 1000);
// debouncedAPI("v");
// debouncedAPI("va");
// debouncedAPI("vas");
// setTimeout(() => {
//   debouncedAPI("vasi");
// }, 2000);

function throttle(func, limit) {
  let isThrottling;
  return function (...args) {
    console.log("throttling.....");
    if (!isThrottling) {
      func(...args);
      isThrottling = true;
      setTimeout(() => {
        isThrottling = false;
      }, limit);
    }
  };
}

const throttledAPI = throttle(apiCall, 1000);
throttledAPI("v");
throttledAPI("va");
throttledAPI("vas");
setTimeout(() => {
  throttledAPI("vasi");
  console.log("complete");
}, 2000);

const debouncedAPI = debounce(apiCall, 1000);
debouncedAPI("v");
debouncedAPI("va");
debouncedAPI("vas");
setTimeout(() => {
  debouncedAPI("vasi");
  console.log("complete");
}, 2000);
