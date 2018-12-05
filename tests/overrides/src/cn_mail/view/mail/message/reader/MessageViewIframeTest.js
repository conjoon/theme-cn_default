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

describe('conjoon.cn_default.overrides.cn_mail.view.mail.message.reader.MessageViewIframeTest', function(t) {


    // load override first
    t.requireOk('conjoon.cn_default.overrides.cn_mail.view.mail.message.reader.MessageViewIframe', function() {

        t.it("Should properly override the MessageViewIframe", function(t) {

            let iframe = Ext.create('conjoon.cn_mail.view.mail.message.reader.MessageViewIframe', {renderTo : document.body});

            t.expect(Ext.isString(iframe.getDefaultCss())).toBe(true);
            t.expect(iframe.getDefaultCss().length).toBeGreaterThan(10);
        });

    });



});
