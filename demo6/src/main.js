require('./app.css');
// main.js
import('./a').then((module) => {
    let content = module.default;
    document.open();
    document.write('<h1>' + content + '</h1>');
    document.close();
});
  