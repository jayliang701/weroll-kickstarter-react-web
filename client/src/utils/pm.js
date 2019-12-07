import urlParse from 'url-parse';
import queryString from 'query-string';

export const processRegexMap = (routesMap) => {
    const regexMap = {};

    for (let url in routesMap) {
        let mod = routesMap[url];
        if (url.indexOf('/:') > 0) {
            let indexes = url.split('/');
            if (indexes[0] === '') indexes.splice(0, 1);

            let tmp = url.match(/\/:[0-9A-Za-z_]*/img);
            let args = [];
            for (let g of tmp) {
                url = url.replace(g, '/[^/]*');
                g = g.replace('/:', '');
                let index = indexes.indexOf(':' + g);
                args.push([
                    g, index
                ]);
            }
            regexMap[url] = {
                args,
                mod,
            };
        }
    }

    return regexMap;
}

export const lookUpPage = (map, url, regexMap) => {
    let parsed = urlParse(url);
    let query = queryString.parse(parsed.query);
    let { pathname } = parsed;
    
    let mod = map[pathname];
    let args = { ...query };
    if (!mod) {
        let g = pathname.split('/');
        if (g[0] === '') g.splice(0, 1);

        for (let pattern in regexMap) {
            let check = pathname.match(new RegExp(pattern));
            if (check && check[0] === pathname) {
                //match
                let def = regexMap[pattern];
                if (def.args) {
                    def.args.forEach(ele => {
                        let key = ele[0];
                        let index = ele[1];
                        args[key] = g[index];
                    });
                }
                mod = def.mod;
            }
        }
    }
    if (!mod) return null;
    return {
        args,
        mod,
        pathname,
    };
}