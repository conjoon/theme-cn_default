var harness = new Siesta.Harness.Browser.ExtJS();

harness.configure({
    title          : 'theme-cn_default',
    disableCaching : true,
    loaderPath     : {

        'conjoon.cn_default.overrides.cn_navport' : '../overrides/src/coon/navport',

        /**
         * Classic
         */
        'coon.navport.view' : '../../app-cn_navport/classic/src/view',

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
        }]
    }]
});
