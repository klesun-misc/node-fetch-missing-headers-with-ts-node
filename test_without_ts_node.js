const fetch = require('node-fetch');

// works ok
(async () => {
  const fetchRs = await fetch('https://google.com');
  for (const [name, value] of fetchRs.headers) {
    console.log('ololo header', {name, value});
  }
  console.log('ololo done iterating');
  console.log((await fetchRs.text()).slice(0, 100));
})();