Reveal.initialize({
  dependencies : [
     // Speaker notes
    { src: '/bower_components/reveal-js/plugin/notes/notes.js', async: true },
    { src: '/bower_components/reveal-js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ],
  // Push each slide change to the browser history
  history: true,

  // Enable keyboard shortcuts for navigation
  keyboard: true,

  // Enable the slide overview mode
  overview: true,

  width: "80%",

  transition: 'fade'
});
