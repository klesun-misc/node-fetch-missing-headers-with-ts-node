
I encountered a problem when using [`node-fetch`](https://github.com/node-fetch/node-fetch)
in conjunction with [`ts-node`](https://github.com/TypeStrong/ts-node). For some reason, iterating through
[`Response.headers`](https://github.com/node-fetch/node-fetch/issues/495) yields no values when the lib
is imported through `ts-node`, even though everything works ok if it's required in normal nodejs environment.

This repo is the minimal case for reproduction of the issue. (Ticket [#1006](https://github.com/node-fetch/node-fetch/issues/1006))

Install the dependencies:
```
npm ci
```

Then try running:
```
node test_without_ts_node.js 
```

You should see something like this in output:
```
ololo header {
  name: 'alt-svc',
  value: 'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"'
}
ololo header { name: 'cache-control', value: 'private, max-age=0' }
...
ololo header { name: 'x-xss-protection', value: '0' }
ololo done iterating
<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="lv"><head><meta content
```

Now run:
```
node test_with_ts_node.js
```

It runs virtually same code, just in a `ts-node` environment, yet it only outputs this:
```
ololo done iterating
<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="lv"><head><meta content
```

No idea how `node-fetch` conflicts with `ts-ndde`, but it apparently does, would be nice to have this issue resolved some day ^_^ 
