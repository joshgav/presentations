<!-- .slide: data-background-image="./assets/node_logo.jpg" -->
<!-- .slide: data-background-size="75% auto" -->
## Diagnostics in Node.js

Working together to enable better diagnostics for Node.js.

presented by Josh Gavant ([@joshgav][]) - Node.js TSC and Diag WG member

[@joshgav]: https://github.com/joshgav


## In this session...

* Learn about the Diagnostics WG
* Dive into new diagnostics interfaces
  * Inspector, node-inspect
  * Tracing Controller
  * context propagation
  * llnode, node-report
* Write some scripts and tools

---

## Node.js Diagnostics WG

Foster a set of open diagnostic interfaces for Node.js so that an ecosystem of
great tools can flourish.

* [github.com/nodejs/diagnostics](https://github.com/nodejs/diagnostics).
* [github.com/nodejs/post-mortem](https://github.com/nodejs/post-mortem).

---

## A few Node.js diagnostics projects

* [async\_hooks][]: Share context across tasks and callbacks.
* [Inspector][]: JSON-RPC protocol for step debugging, profiling, and heap
  snapshots.
* [node-inspect][]: CLI tool for utilizing Inspector.
* [node-report][]: Dump native process state on signals and crashes.
* [llnode][]: Extension to lldb with deep understanding of V8 JavaScript frames
  and objects.
* [Tracing Controller][]: Record info on tracepoints throughout Node.js core and
  user modules.

[async\_hooks]: https://github.com/nodejs/node/pull/11883
[Inspector]: https://chromedevtools.github.io/debugger-protocol-viewer/v8/
[node-inspect]: https://github.com/nodejs/node-inspect
[node-report]: https://github.com/nodejs/node-report
[llnode]: https://github.com/nodejs/llnode
[Tracing Controller]: https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU/preview

---

## Inspector

* Same protocol as Chromium, enabling:
  * step debugging
  * live script inspection and modification
  * heap snapshots and object analysis
  * CPU profiling
* Access with:
  * WebSockets and HTTP
  * Client libraries like chrome-remote-interface and node-inspect
  * Development environments like VS Code and Chrome DevTools.


## Inspector Architecture
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<!-- .slide: data-background-image="./assets/inspector_arch.png" -->
<!-- .slide: data-background-size="75% auto" -->


## Demo

---

## Native Debugging

* llnode
* node-report
* node-heapdump


# Demo

---

## Context Propagation

* async\_hooks
* zones

---

## Tracing Controller

* Same format as Chromium traces, so output can be loaded in chrome://tracing.
* Trace any point in code.
* Correlate async events by ID.
* Optional `args` field with user data.
* What next?
  * Trace points in core
  * JS API and trace points in user modules

---

## Recap

* Diagnostics WG
* Evolving diagnostics interfaces
* Some scripts and tools


## Resources

* [github.com/joshgav/demos](https://github.com/joshgav/demos)
* Twitter: @joshugav
* GitHub: @joshgav
