/**
 * conjoon
 * (c) 2007-2019 conjoon.org
 * licensing@conjoon.org
 *
 * theme-cn_default
 * Copyright (C) 2019 Thorsten Suckow-Homberg/conjoon.org
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
 * Custom styles for the MailFolderTreeColumn
 */
Ext.define('conjoon.cn_default.overrides.cn_mail.view.mail.folder.MailFolderTreeColumn', {

    override: 'conjoon.cn_mail.view.mail.folder.MailFolderTreeColumn',

    /**
     * @inheritdoc
     *
     * @see #getIconClsForMailFolderType
     */
    initTemplateRendererData : function(value, metaData, record, rowIdx, colIdx, store, view) {

        const me   = this,
              type = record.get('cn_folderType');

        let ret;

        ret = Ext.tree.Column.prototype.initTemplateRendererData.apply(this, arguments);

        if (ret.lines.length === 1) {
            record.set('iconCls', me.getIconClsForMailFolderType(type));
        } else {
            record.set('iconCls', '');
        }

        if (ret.lines && ret.lines.length < 2) {
            ret.lines = [];
        } else {
            ret.lines.pop();
        }


        return ret;
    },


    cellTpl: [
        '<tpl for="lines">',
        '<div class="{parent.childCls} {parent.elbowCls}-img ',
        '{parent.elbowCls}-<tpl if=".">line<tpl else>empty</tpl>" role="presentation"></div>',
        '</tpl>',

        '<tpl if="glyph">',
        '<span class="{baseIconCls}" ',
        '<tpl if="glyphFontFamily">',
        'style="font-family:{glyphFontFamily}"',
        '</tpl>',
        '>{glyph}</span>',
        '<tpl else>',
        '<tpl if="icon">',
        '<img src="{blankUrl}"',
        '<tpl else>',
        '<div',
        '</tpl>',
        ' role="presentation" class="{childCls} {baseIconCls} {customIconCls} ',
        '{baseIconCls}-<tpl if="leaf">leaf<tpl else><tpl if="expanded">parent-expanded<tpl else>parent</tpl></tpl> {iconCls}" ',
        '<tpl if="icon">style="background-image:url({icon})"/>' +
        '<tpl else>' +
        '></div>' +
        '</tpl>',
        '</tpl>',
        '<tpl if="href">',
        '<a href="{href}" role="link" target="{hrefTarget}" class="{textCls} {childCls}">{value}</a>',
        '<tpl else>',
        '<span class="{textCls} {childCls}">{value}</span>',
        '</tpl>',

        '<div class="{childCls} {elbowCls}-img {elbowCls}',
        '<tpl if="isLast">-end</tpl>' +
        '<tpl if="expandable">-plus {expanderCls}</tpl>" role="presentation"></div>',

    ],

});


