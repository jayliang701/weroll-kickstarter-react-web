/**
 * Created by Jay on 2016/3/8.
 */

//var Session = require("weroll/model/Session");
const Setting = global.SETTING;

exports.extend = function (App) {
    if (global.VARS.dev) {
        require("../webpack.server").inject(App);
    }

    //no any session check

    // App.get('/bundle.js', (req, res) => {
    //     res.sendFile(path.resolve(global.APP_ROOT, 'dist/client/bundle.js'));
    // });

    const render = function (view, data) {
        const res = this;
        // const req = res._req;

        // const html = renderToString(
        //     <StaticRouter location={req.url} context={data}>
        //         <ClientApp />
        //     </StaticRouter>
        // );,
        
        res.set('content-type', 'text/html;charset=utf-8');
        return res.send(`<!DOCTYPE html>
                    <head>
                        <meta charset="utf-8">
                        <title>${Setting.siteName}</title>
                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1">
                        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                    </head>
                    <body>
                        <div id="root"></div>
                        <script>window.__VIEW__='${view}';window.__DATA__=${JSON.stringify(data || {})};</script>
                        <script src="${Setting.cdn.res}/vendor.js"></script>
                        <script src="${Setting.cdn.res}/bundle.js"></script>
                    </body>
            </html>`);
    };
    
    const __handleUserSession = App.handleUserSession;
    App.handleUserSession = function(req, res, auth, security, router) {
        res.render = render.bind(res);
        return __handleUserSession(req, res, auth, security, router);
    };
}