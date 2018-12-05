/**
 * conjoon
 * (c) 2007-2018 conjoon.org
 * licensing@conjoon.org
 *
 * theme-cn_default
 * Copyright (C) 2018 Thorsten Suckow-Homberg/conjoon.org
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
 * Custom styles for the CSS prepended to each message in the MessageViewIframe.
 */
Ext.define('conjoon.cn_default.overrides.cn_mail.view.mail.message.reader.MessageViewIframe', {

    override: 'conjoon.cn_mail.view.mail.message.reader.MessageViewIframe',


    getDefaultCss : function() {

        return ["<style type=\"text/css\">",
            " body, html {",
            " height:100%;",
            " width:100%;",
            "margin:0px;",
            "padding:0px;",
            "}",
            "body {",
            "text-align:justify;",
            "color: rgb(64, 64, 64);",
            " font-family: \"Open Sans\", \"Helvetica Neue\", helvetica, arial, verdana, sans-serif;",
            "font-size: 14px;",
            "font-weight: 400;",
            "line-height: 22.4px;",
            " }",
            "blockquote {",
            "margin-left:4px;",
            "padding-left:10px;",
            "border-left:4px solid #bee9fc;",
            "}",
            "</style>"].join('');
    }

});


