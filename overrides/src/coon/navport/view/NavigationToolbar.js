/**
 * conjoon
 * (c) 2007-2017 conjoon.org
 * licensing@conjoon.org
 *
 * theme-cn_default
 * Copyright (C) 2017 Thorsten Suckow-Homberg/conjoon.org
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Custom styles for the intiial Navigation Toolbar.
 */
Ext.define('conjoon.cn_default.overrides.cn_navport.view.NavigationToolbar', {

    override : 'coon.navport.view.NavigationToolbar',

    initComponent : function() {

        var me = this;

        Ext.apply(me.items[0], {
            cls   : 'conjoon-logo',
            html  : '<div class="main-logo"><div class="x-fa fa-envelope logo"></div>conjoon</div>',
            width : 250
        });

        delete me.items[1].text;
        me.items[1].iconCls =  'x-fa fa-navicon';

        me.callParent();
    }


});