## Diagnostics Capabilities in Node.js

Josh Gavant

* Microsoft Program Manager
* Node.js TSC and Diag WG member
* twitter.com/joshugav


## In this session...

* Introducing the Diagnostics WG
* New diagnostics interfaces
  * inspector & node-inspect
  * llnode, node-report
  * context propagation with async\_hooks
  * trace events

---

## Node.js Diagnostics WG

* Better diagnostic tools is the most frequest request in Node.js surveys and
customer research.

* Mission: Foster a set of open diagnostic interfaces and low-level tools for
Node.js so that an ecosystem of open source and commercial products can flourish.


[nodejs/diagnostics](https://github.com/nodejs/diagnostics).
  * [Inspector][]: JSON-RPC protocol for debugging, profiling, and heap snapshots.
  * [node-inspect][]: CLI tool for utilizing Inspector.
  * [Trace Events][]: Record tracepoints throughout Node.js core and user modules.
  * [async\_hooks][]: Share context across tasks and callbacks.

[Inspector]: https://chromedevtools.github.io/debugger-protocol-viewer/v8/
[node-inspect]: https://github.com/nodejs/node-inspect
[Trace Events]: https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU/preview
[async\_hooks]: https://github.com/nodejs/node/pull/11883


[nodejs/post-mortem](https://github.com/nodejs/post-mortem).
  * [node-report][]: Dump native process state on signals and crashes.
  * [llnode][]: Extension to lldb for V8 JavaScript frames and objects.

[llnode]: https://github.com/nodejs/llnode
[node-report]: https://github.com/nodejs/node-report

---

## Inspector

* Same [inspector protocol][0] as Chromium, including:
  * step debugging
  * live script inspection and modification
  * heap snapshots and object analysis
  * CPU profiling
* Access with:
  * WebSockets and HTTP
  * node-inspect or other clients
  * Development environments like VS Code and Chrome DevTools.

[0]: https://chromedevtools.github.io/debugger-protocol-viewer/v8/


## Inspector Architecture
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<!-- .slide: data-background-image="./assets/inspector_arch.png" -->
<!-- .slide: data-background-color="white" -->
<!-- .slide: data-background-size="75% auto" -->


## Demo

---

## Native Debugging

* llnode
* node-report
* node-heapdump

---

## Context Propagation

* Problem: Context of code which registers a callback or promise is lost when
  callback is executed, so determining root cause of issues is more difficult.
* AsyncWrap - layer for Node libuv objects which enables correlation of callback
  registration and invocation.
* async\_hooks - JavaScript API for utilizing AsyncWrap by specifying functions
  to be executed at callback registration time and before/after invocation.
  * Access through `process.binding('async_wrap')`
* New PR: [node#11883][1]

[1]: https://github.com/nodejs/node/pull/11883

---

## Trace Events

* Inspector's Profiler domain is for sample-based profiling; trace events is
  for event-based traces.
* Same format as Chromium traces, output can be loaded in chrome://tracing.
* Trace any point in code.
* Correlate async events by ID.
* Work continues in [node/diagnostics#84][].

[node/diagnostics#84]: https://github.com/nodejs/diagnostics/issues/84


DEMO

---

## Recap

* Diagnostics WG
* New diagnostics interfaces:
  * Inspector
  * Trace Events
  * Context Propagation


## Resources

* VS Code Roadmap: https://github.com/Microsoft/vscode/wiki/Roadmap
* [github.com/joshgav/demos](https://github.com/joshgav/demos)
* [github.com/mrkmarron/ttd-rfs-demo](https://github.com/mrkmarron/ttd-rfs-demo)
* Twitter: @joshugav
