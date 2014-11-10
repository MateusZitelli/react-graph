// Improved on react/lib/cx.js
// by supporting nested arrays to allow for dynamic keys

function cx(classNames) {
  if(classNames instanceof Array) {
    var filteredClasses = [];
    classNames.forEach(function(className, i) {
      if(typeof className === 'string') {
        filteredClasses.push(className);
      }
      else if(typeof className[1] === 'undefined' || !!className[1]) {
        filteredClasses.push(className[0]);
      }
    });
    return Array.prototype.join.call(filteredClasses, ' ');
  }
  else if(typeof classNames === 'object') {
    return Object.keys(classNames).filter(function(className) {
      return classNames[className];
    }).join(' ');
  } else {
    return Array.prototype.join.call(arguments, ' ');
  }
}

module.exports = cx;
