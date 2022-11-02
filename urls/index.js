const url = require('url');

const u = new URL(
    'http://zenithassurance.net:8000/zenith-assurances/public/backoffice/profile/login?id=1&name=oualid'
);

u.searchParams.append('key', '321');

console.log(u);
