var harness = new Siesta.Harness.Browser.ExtJS();

harness.configure({
    title          : 'My Tests',
    disableCaching : true,
    loaderPath     : {

        'conjoon.cn_default.overrides.cn_navport' : '../overrides/src/coon/navport',
        'conjoon.cn_default.overrides.cn_user'            : '../overrides/src/coon/user',
        'conjoon.cn_default.overrides.cn_mail'            : '../overrides/src/conjoon/cn_mail',

        /**
         * Classic
         */
        'coon.navport.view' : '../../app-cn_navport/classic/src/view',
        'coon.user.view'            : '../../app-cn_user/classic/src/view',
        'conjoon.cn_mail.view'            : '../../app-cn_mail/classic/src/view',

        /**
         * Requirements
         */
        'coon.comp.list' : '../../lib-cn_comp/classic/src/list',
        'coon.comp.form' : '../../lib-cn_comp/classic/src/form',
        'coon.comp.component' : '../../lib-cn_comp/classic/src/component',

        'coon.core' : '../../lib-cn_core/src',

        'coon.navport.view.controller' : '../../app-cn_navport/src/view/controller',

        'coon.navport.store' : '../../app-cn_navport/src/store',
        'coon.navport.model' : '../../app-cn_navport/src/model',
        'coon.navport.data'  : '../../app-cn_navport/src/data'


    },
    preload        : [
        conjoon.tests.config.paths.extjs.css.url,
        conjoon.tests.config.paths.extjs.js.url
    ]
});

harness.start({
    group : 'overrides',
    items : [{
        group : 'coon',
        items : [{
            group : 'navport',
            items : [{
                group : 'view',
                items : [
                    './overrides/src/coon/navport/view/NavigationToolbarTest.js',
                    './overrides/src/coon/navport/view/NavigationTreeTest.js'
                ]
            }]
        }, {
            group : 'user',
            items : [{
                group : 'view',
                items : [{
                    group : 'authentication',
                    items : [
                        './overrides/src/coon/user/view/authentication/AuthFormTest.js'
                    ]
                }]
            }]
        }]
    }, {
        group : 'conjoon',
        items : [{
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
                                './overrides/src/conjoon/cn_mail/view/mail/message/reader/MessageViewIframeTest.js'
                            ]
                        }]
                    }]
                }]
            }]
        }]
    }]
});
