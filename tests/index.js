var harness = new Siesta.Harness.Browser.ExtJS();

harness.configure({
    title          : 'My Tests',
    disableCaching : true,
    loaderPath     : {

        'conjoon.cn_default.overrides.cn_treenavviewport' : '../overrides/src/cn_treenavviewport',
        'conjoon.cn_default.overrides.cn_user'            : '../overrides/src/cn_user',
        'conjoon.cn_default.overrides.cn_mail'            : '../overrides/src/cn_mail',

        /**
         * Classic
         */
        'conjoon.cn_treenavviewport.view' : '../../app-cn_treenavviewport/classic/src/view',
        'conjoon.cn_user.view'            : '../../app-cn_user/classic/src/view',
        'conjoon.cn_mail.view'            : '../../app-cn_mail/classic/src/view',

        /**
         * Requirements
         */
        'conjoon.cn_comp.list' : '../../lib-cn_comp/classic/src/list',
        'conjoon.cn_comp.form' : '../../lib-cn_comp/classic/src/form',
        'conjoon.cn_comp.component' : '../../lib-cn_comp/classic/src/component',

        'conjoon.cn_core' : '../../lib-cn_core/src',

        'conjoon.cn_treenavviewport.view.controller' : '../../app-cn_treenavviewport/src/view/controller',

        'conjoon.cn_treenavviewport.store' : '../../app-cn_treenavviewport/src/store',
        'conjoon.cn_treenavviewport.model' : '../../app-cn_treenavviewport/src/model',
        'conjoon.cn_treenavviewport.data'  : '../../app-cn_treenavviewport/src/data'


    },
    preload        : [
        conjoon.tests.config.paths.extjs.css.url,
        conjoon.tests.config.paths.extjs.js.url
    ]
});

harness.start({
    group : 'overrides',
    items : [{
        group : 'cn_treenavviewport',
        items : [{
            group : 'view',
            items : [
                './overrides/src/cn_treenavviewport/view/NavigationToolbarTest.js',
                './overrides/src/cn_treenavviewport/view/NavigationTreeTest.js'
            ]
        }]
    }, {
        group : 'cn_user',
        items : [{
            group : 'view',
            items : [{
                group : 'authentication',
                items : [
                    './overrides/src/cn_user/view/authentication/AuthFormTest.js'
                ]
            }]
        }]
    }, {
        group : 'cn_mail',
        items : [{
            group : 'view',
            items : [{
                group : 'mail',
                items : [{
                    group : 'message',
                    items : [{
                        group : 'reader',
                        items : [
                            './overrides/src/cn_mail/view/mail/message/reader/MessageViewIframeTest.js'
                        ]
                    }]
                }]
            }]
        }]
    }]
});
