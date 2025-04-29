// ==UserScript==
// @name         Github Enhancement - High Speed Download
// @version      2.6.20
// @description  High-speed download of Git Clone/SSH, Release, Raw, Code(ZIP) and other files (Based on public welfare), project list file quick download (☁)
// @match        *://github.com/*
// @match        *://hub.whtrys.space/*
// @match        *://dgithub.xyz/*
// @match        *://kkgithub.com/*
// @match        *://github.site/*
// @match        *://github.store/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACEUExURUxpcRgWFhsYGBgWFhcWFh8WFhoYGBgWFiUlJRcVFRkWFhgVFRgWFhgVFRsWFhgWFigeHhkWFv////////////r6+h4eHv///xcVFfLx8SMhIUNCQpSTk/r6+jY0NCknJ97e3ru7u+fn51BOTsPCwqGgoISDg6empmpoaK2srNDQ0FhXV3eXcCcAAAAXdFJOUwCBIZXMGP70BuRH2Ze/LpIMUunHkpQR34sfygAAAVpJREFUOMt1U+magjAMDAVb5BDU3W25b9T1/d9vaYpQKDs/rF9nSNJkArDA9ezQZ8wPbc8FE6eAiQUsOO1o19JolFibKCdHGHC0IJezOMD5snx/yE+KOYYr42fPSufSZyazqDoseTPw4lGJNOu6LBXVUPBG3lqYAOv/5ZwnNUfUifzBt8gkgfgINmjxOpgqUA147QWNaocLniqq3QsSVbQHNp45N/BAwoYQz9oUJEiE4GMGfoBSMj5gjeWRIMMqleD/CAzUHFqTLyjOA5zjNnwa4UCEZ2YK3khEcBXHjVBtEFeIZ6+NxYbPqWp1DLKV42t6Ujn2ydyiPi9nX0TTNAkVVZ/gozsl6FbrktkwaVvL2TRK0C8Ca7Hck7f5OBT6FFbLATkL2ugV0tm0RLM9fedDvhWstl8Wp9AFDjFX7yOY/lJrv8AkYuz7fuP8dv9izCYH+x3/LBnj9fYPBTpJDNzX+7cAAAAASUVORK5CYII=
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_notification
// @grant        GM_setClipboard
// @grant        window.onurlchange
// @sandbox      JavaScript
// @license      GPL-3.0 License
// @run-at       document-end
// @namespace    https://greasyfork.org/scripts/412245
// @supportURL   https://github.com/XIU2/UserScript
// @homepageURL  https://github.com/XIU2/UserScript
// ==/UserScript==

(function() {
    'use strict';
    var menu_rawFast = GM_getValue('xiu2_menu_raw_fast'), menu_rawFast_ID, menu_rawDownLink_ID, menu_gitClone_ID, menu_feedBack_ID;
    const download_url_us = [
        ['https://gh.h233.eu.org/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [@X.I.U/XIU2]'],
        ['https://ghproxy.1888866.xyz/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [WJQSERVER-STUDIO/ghproxy]'],
        ['https://gh.ddlc.top/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [@mtr-static-official]'],
        ['https://slink.ltd/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [Zhiliao Station]'],
        ['https://gh-proxy.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [gh-proxy.com]'],
        ['https://cors.isteed.cc/github.com', 'USA', '[USA Cloudflare CDN] - Provided by [@Lufs\'s]'],
        ['https://hub.gitmirror.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [GitMirror]'],
        ['https://down.sciproxy.com/github.com', 'USA', '[USA Cloudflare CDN] - Provided by [sciproxy.com]'],
        ['https://ghproxy.cfd/https://github.com', 'USA', '[USA Los Angeles] - Provided by [@yionchilau]'],
        ['https://github.boki.moe/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [blog.boki.moe]'],
        ['https://github.moeyy.xyz/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [moeyy.cn]'],
        ['https://gh-proxy.net/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [gh-proxy.net]'],
        ['https://github.yongyong.online/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [github.yongyong.online]'],
        ['https://ghdd.862510.xyz/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [ghdd.862510.xyz]'],
        ['https://hub.whtrys.space', 'USA', '[USA Cloudflare CDN] - Provided by [FastGit Group Member]'],
        ['https://gh.jasonzeng.dev/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [gh.jasonzeng.dev]'],
        ['https://gh.monlor.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [gh.monlor.com]'],
        ['https://fastgit.cc/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [fastgit.cc]'],
        ['https://github.tbedu.top/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [github.tbedu.top]'],
        ['https://github.geekery.cn/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [github.geekery.cn]'],
        ['https://gh-proxy.linioi.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [gh-proxy.linioi.com]'],
        ['https://firewall.lxstd.org/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [firewall.lxstd.org]'],
        ['https://mirrors.chenby.cn/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [mirrors.chenby.cn]'],
        ['https://github.ednovas.xyz/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [github.ednovas.xyz]'],
        ['https://ghfile.geekertao.top/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [ghfile.geekertao.top]'],
        ['https://ghp.keleyaa.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [ghp.keleyaa.com]'],
        ['https://github.wuzhij.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [github.wuzhij.com]'],
        ['https://gh.cache.cloudns.org/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [gh.cache.cloudns.org]'],
        ['https://gh.chjina.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [gh.chjina.com]'],
        ['https://ghpxy.hwinzniej.top/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [ghpxy.hwinzniej.top]'],
        ['https://cdn.crashmc.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [cdn.crashmc.com]'],
        ['https://ghproxy.imciel.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [ghproxy.imciel.com]'],
        ['https://gitproxy.mrhjx.cn/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [gitproxy.mrhjx.cn]'],
        ['https://ghproxy.cxkpro.top/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [ghproxy.cxkpro.top]'],
        ['https://gh.xxooo.cf/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [gh.xxooo.cf]'],
        ['https://ghproxy.xiaopa.cc/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [ghproxy.xiaopa.cc]'],
        ['https://gh.944446.xyz/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [gh.944446.xyz]'],
        ['https://github.limoruirui.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [github.limoruirui.com]'],
        ['https://api-gh.muran.eu.org/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [api-gh.muran.eu.org]'],
        ['https://gh.idayer.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [gh.idayer.com]'],
        ['https://gh.zwnes.xyz/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [gh.zwnes.xyz]'],
        ['https://gh.llkk.cc/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [gh.llkk.cc]'],
        ['https://down.npee.cn/?https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by [npee community]'],
        ['https://dgithub.xyz', 'USA', '[USA Seattle] - Provided by [dgithub.xyz]'],
        ['https://gh-proxy.ygxz.in/https://github.com', 'USA', '[USA Los Angeles] - Provided by [@A Small Station www.ygxz.in]'],
        ['https://gh.nxnow.top/https://github.com', 'USA', '[USA Los Angeles] - Provided by [gh.nxnow.top]'],
        ['https://gh-proxy.ygxz.in/https://github.com', 'USA', '[USA Los Angeles] - Provided by [gh-proxy.ygxz.in]'],
        ['https://gh.zwy.one/https://github.com', 'USA', '[USA Los Angeles] - Provided by [gh.zwy.one]'],
        ['https://ghproxy.monkeyray.net/https://github.com', 'USA', '[USA Los Angeles] - Provided by [ghproxy.monkeyray.net]'],
        ['https://gh.xx9527.cn/https://github.com', 'USA', '[USA Los Angeles] - Provided by [gh.xx9527.cn]'],
    ], download_url = [
        ['https://ghproxy.net/https://github.com', 'UK', '[UK London] - Provided by [ghproxy.net]'],
        ['https://ghfast.top/https://github.com', 'Other', '[Japan, Korea, Singapore, USA, Germany, etc.] - Provided by [ghproxy.link]'],
        ['https://wget.la/https://github.com', 'Other', '[Hong Kong, Taiwan, Japan, USA, etc.] - Provided by [ucdn.me]'],
        ['https://kkgithub.com', 'Other', '[Hong Kong, Japan, Korea, Singapore, etc.] - Provided by [help.kkgithub.com]'],
    ], clone_url = [
        ['https://gitclone.com', 'Domestic', '[China Domestic] - Provided by [GitClone]'],
        ['https://kkgithub.com', 'Hong Kong', '[Hong Kong, Japan, Singapore, etc.] - Provided by [help.kkgithub.com]'],
        ['https://wget.la/https://github.com', 'Hong Kong', '[Hong Kong, Taiwan, Japan, USA, etc.] - Provided by [ucdn.me]'],
        ['https://ghfast.top/https://github.com', 'Korea', '[Japan, Korea, Singapore, USA, Germany, etc.] - Provided by [ghproxy]'],
        ['https://githubfast.com', 'Korea', '[Korea] - Provided by [Github Fast]'],
        ['https://ghproxy.net/https://github.com', 'Japan', '[Japan Osaka] - Provided by [ghproxy.net]'],
    ], clone_ssh_url = [
        ['ssh://git@ssh.github.com:443/', 'Github Native', '[Japan, Singapore, etc.] - Official Github SSH on port 443'],
    ], raw_url = [
        ['https://raw.githubusercontent.com', 'Github Native', '[Japan Tokyo]'],
        ['https://raw.kkgithub.com', 'Hong Kong 1', '[Hong Kong, Japan, Singapore, etc.] - Provided by [help.kkgithub.com]'],
        ['https://wget.la/https://raw.githubusercontent.com', 'Hong Kong 2', '[Hong Kong, Taiwan, Japan, USA, etc.] - Provided by [ucdn.me]'],
        ['https://ghfast.top/https://raw.githubusercontent.com', 'Korea', '[Japan, Korea, Singapore, USA, Germany, etc.] - Provided by [ghproxy.link]'],
        ['https://gh.catmak.name/https://github.com', 'Korea', '[Korea Seoul] - Provided by [gh.catmak.name]'],
        ['https://ghproxy.net/https://raw.githubusercontent.com', 'Japan 1', '[Japan Osaka] - Provided by [ghproxy.net]'],
        ['https://fastly.jsdelivr.net/gh', 'Japan 2', '[Japan Tokyo] - Provided by [JSDelivr CDN]'],
        ['https://jsdelivr.pai233.top/gh', 'Japan 3', '[Japan Tokyo] - Provided by [blog.pai233.top]'],
        ['https://github.3x25.com/https://raw.githubusercontent.com', 'Singapore', '[Singapore] - Provided by [github.3x25.com]'],
    ], svg = [
        '<svg class="octicon octicon-cloud-download" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"></path></svg>'
    ], style = ['padding:0 6px; margin-right: -1px; border-radius: 2px; background-color: var(--XIU2-background-color); border-color: var(--borderColor-default); font-size: 11px; color: var(--XIU2-font-color);'];

    if (menu_rawFast == null){menu_rawFast = 1; GM_setValue('xiu2_menu_raw_fast', 1)};
    if (GM_getValue('menu_rawDownLink') == null){GM_setValue('menu_rawDownLink', true)};
    if (GM_getValue('menu_gitClone') == null){GM_setValue('menu_gitClone', true)};
    registerMenuCommand();

    function registerMenuCommand() {
        if (menu_feedBack_ID) {GM_unregisterMenuCommand(menu_rawFast_ID); GM_unregisterMenuCommand(menu_rawDownLink_ID); GM_unregisterMenuCommand(menu_gitClone_ID); GM_unregisterMenuCommand(menu_feedBack_ID); menu_rawFast = GM_getValue('xiu2_menu_raw_fast');}
        if (menu_rawFast > raw_url.length - 1) menu_rawFast = 0
        if (GM_getValue('menu_rawDownLink')) menu_rawFast_ID = GM_registerMenuCommand(`${['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'][menu_rawFast]} [ ${raw_url[menu_rawFast][1]} ] Speed Source (☁) - Click to switch`, menu_toggle_raw_fast);
        menu_rawDownLink_ID = GM_registerMenuCommand(`${GM_getValue('menu_rawDownLink')?'✅':'❌'} Quick download of single file in project list (☁)`, function(){if (GM_getValue('menu_rawDownLink') == true) {GM_setValue('menu_rawDownLink', false); GM_notification({text: `Quick download of single file in project list (☁) feature has been disabled\n(Click to refresh the page to take effect)`, timeout: 3500, onclick: function(){location.reload();}});} else {GM_setValue('menu_rawDownLink', true); GM_notification({text: `Quick download of single file in project list (☁) feature has been enabled\n(Click to refresh the page to take effect)`, timeout: 3500, onclick: function(){location.reload();}});}registerMenuCommand();});
        menu_gitClone_ID = GM_registerMenuCommand(`${GM_getValue('menu_gitClone')?'✅':'❌'} Add git clone command`, function(){if (GM_getValue('menu_gitClone') == true) {GM_setValue('menu_gitClone', false); GM_notification({text: `Add git clone command feature has been disabled\n(Click to refresh the page to take effect)`, timeout: 3500, onclick: function(){location.reload();}});} else {GM_setValue('menu_gitClone', true); GM_notification({text: `Add git clone command feature has been enabled\n(Click to refresh the page to take effect)`, timeout: 3500, onclick: function(){location.reload();}});}registerMenuCommand();});
        menu_feedBack_ID = GM_registerMenuCommand('💬 Feedback & Suggestions [Github]', function () {window.GM_openInTab('https://github.com/XIU2/UserScript', {active: true,insert: true,setParent: true});window.GM_openInTab('https://greasyfork.org/zh-CN/scripts/412245/feedback', {active: true,insert: true,setParent: true});});
    }

    function menu_toggle_raw_fast() {
        if (menu_rawFast >= raw_url.length - 1) {menu_rawFast = 0;} else {menu_rawFast += 1;}
        GM_setValue('xiu2_menu_raw_fast', menu_rawFast);
        delRawDownLink();
        addRawDownLink();
        GM_notification({text: "Switched speed source to: " + raw_url[menu_rawFast][1], timeout: 3000});
        registerMenuCommand();
    };

    colorMode();
    setTimeout(addRawFile, 1000);
    setTimeout(addRawDownLink, 2000);

    if (window.onurlchange === undefined) addUrlChangeEvent();
    window.addEventListener('urlchange', function() {
        colorMode();
        if (location.pathname.indexOf('/releases')) addRelease();
        setTimeout(addRawFile, 1000);
        setTimeout(addRawDownLink, 2000);
        setTimeout(addRawDownLink_, 1000);
    });

    const callback = (mutationsList, observer) => {
        if (location.pathname.indexOf('/releases') > -1) {
            for (const mutation of mutationsList) {
                for (const target of mutation.addedNodes) {
                    if (target.nodeType !== 1) return
                    if (target.tagName === 'DIV' && target.dataset.viewComponent === 'true' && target.classList[0] === 'Box') addRelease();
                }
            }
        } else if (document.querySelector('#repository-container-header:not([hidden])')) {
            for (const mutation of mutationsList) {
                for (const target of mutation.addedNodes) {
                    if (target.nodeType !== 1) return
                    if (target.tagName === 'DIV' && target.parentElement && target.parentElement.id === '__primerPortalRoot__') {
                        addDownloadZIP(target);
                        addGitClone(target);
                        addGitCloneSSH(target);
                    } else if (target.tagName === 'DIV' && target.className.indexOf('Box-sc-') != -1) {
                        if (target.querySelector('input[value^="https:"]')) {
                            addGitCloneClear('.XIU2-GCS'); addGitClone(target);
                        } else if (target.querySelector('input[value^="git@"]')) {
                            addGitCloneClear('.XIU2-GC'); addGitCloneSSH(target);
                        } else if (target.querySelector('input[value^="gh "]')) {
                            addGitCloneClear('.XIU2-GC, .XIU2-GCS');
                        }
                    }
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(document, { childList: true, subtree: true });

    function get_New_download_url() {
        let shuffled = download_url_us.slice(0), i = download_url_us.length, min = i - 6, temp, index;
        while (i-- > min) {index = Math.floor((i + 1) * Math.random()); temp = shuffled[index]; shuffled[index] = shuffled[i]; shuffled[i] = temp;}
        return shuffled.slice(min);
    }

    function addRelease() {
        let html = document.querySelectorAll('.Box-footer'); if (html.length == 0 || location.pathname.indexOf('/releases') == -1) return
        let divDisplay = 'margin-left: -90px;', new_download_url = get_New_download_url();
        if (document.documentElement.clientWidth > 755) {divDisplay = 'margin-top: -3px;margin-left: 8px;display: inherit;';};
        for (const current of html) {
            if (current.querySelector('.XIU2-RS')) continue
            current.querySelectorAll('li.Box-row a').forEach(function (_this) {
                let href = _this.href.split(location.host),
                    url = '', _html = `<div class="XIU2-RS" style="${divDisplay}">`;

                for (let i=0;i<new_download_url.length;i++) {
                    if (new_download_url[i][3] !== undefined && url.indexOf('/archive/') !== -1) {
                        url = new_download_url[i][3] + href[1]
                    } else {
                        url = new_download_url[i][0] + href[1]
                    }
                    _html += `<a style="${style[0]}" class="btn" href="${url}" title="${new_download_url[i][2]}" rel="noreferrer noopener nofollow">${new_download_url[i][1]}</a>`
                }
                _this.parentElement.nextElementSibling.insertAdjacentHTML('beforeend', _html + '</div>');
            });
        }
    }

    function addDownloadZIP(target) {
        let html = target.querySelector('ul[class^=prc-ActionList-ActionList-]>li:last-child');if (!html) return
        let href_script = document.querySelector('react-partial[partial-name=repos-overview]>script[data-target="react-partial.embeddedData"]'),
            href_slice = href_script.textContent.slice(href_script.textContent.indexOf('"zipballUrl":"')+14),
            href = href_slice.slice(0, href_slice.indexOf('"')),
            url = '', _html = '', new_download_url = get_New_download_url();

        let html_clone = html.cloneNode(true),
            html_clone_a = html_clone.querySelector('a[href$=".zip"]'),
            html_clone_span = html_clone.querySelector('span[id]');

        for (let i=0;i<new_download_url.length;i++) {
            if (new_download_url[i][3] === '') continue

            if (new_download_url[i][3] !== undefined) {
                url = new_download_url[i][3] + href
            } else {
                url = new_download_url[i][0] + href
            }
            html_clone_a.href = url
            html_clone_a.setAttribute('title', new_download_url[i][2].replaceAll('&#10;','\n'))
            html_clone_span.textContent = 'Download ZIP ' + new_download_url[i][1]
            _html += html_clone.outerHTML
        }
        html.insertAdjacentHTML('afterend', _html);
    }

    function addGitCloneClear(css) {
        document.querySelectorAll(css).forEach((e)=>{e.remove()})
    }

    function addGitClone(target) {
        let html = target.querySelector('input[value^="https:"]:not([title])');if (!html) return
        let href_split = html.value.split(location.host)[1],
            html_parent = '<div style="margin-top: 4px;" class="XIU2-GC ' + html.parentElement.className + '">',
            url = '', _html = '', _gitClone = '';
        if (html.nextElementSibling) html.nextElementSibling.hidden = true;
        if (html.parentElement.nextElementSibling.tagName === 'SPAN'){
            html.parentElement.nextElementSibling.textContent += ' (↑Click the text above to copy)'
        }
        if (GM_getValue('menu_gitClone')) {_gitClone='git clone '; html.value = _gitClone + html.value; html.setAttribute('value', html.value);}
        let html_clone = html.cloneNode(true);
        for (let i=0;i<clone_url.length;i++) {
            if (clone_url[i][0] === 'https://gitclone.com') {
                url = clone_url[i][0] + '/github.com' + href_split
            } else {
                url = clone_url[i][0] + href_split
            }
            html_clone.title = `${url}\n\n${clone_url[i][2].replaceAll('&#10;','\n')}\n\nTip: Click the text to copy directly`
            html_clone.setAttribute('value', _gitClone + url)
            _html += html_parent + html_clone.outerHTML + '</div>'
        }
        html.parentElement.insertAdjacentHTML('afterend', _html);
        if (html.parentElement.parentElement.className.indexOf('XIU2-GCP') === -1){
            html.parentElement.parentElement.classList.add('XIU2-GCP')
            html.parentElement.parentElement.addEventListener('click', (e)=>{if (e.target.tagName === 'INPUT') {GM_setClipboard(e.target.value);}})
        }
    }

    function addGitCloneSSH(target) {
        let html = target.querySelector('input[value^="git@"]:not([title])');if (!html) return
        let href_split = html.value.split(':')[1],
            html_parent = '<div style="margin-top: 4px;" class="XIU2-GCS ' + html.parentElement.className + '">',
            url = '', _html = '', _gitClone = '';
        html.nextElementSibling.hidden = true;
        if (html.parentElement.nextElementSibling.tagName === 'SPAN'){
            html.parentElement.nextElementSibling.textContent += ' (↑Click the text to copy)'
        }
        if (GM_getValue('menu_gitClone')) {_gitClone='git clone '; html.value = _gitClone + html.value; html.setAttribute('value', html.value);}
        let html_clone = html.cloneNode(true);
        for (let i=0;i<clone_ssh_url.length;i++) {
            url = clone_ssh_url[i][0] + href_split
            html_clone.title = `${url}\n\n${clone_ssh_url[i][2].replaceAll('&#10;','\n')}\n\nTip: Click the text to copy directly`
            html_clone.setAttribute('value', _gitClone + url)
            _html += html_parent + html_clone.outerHTML + '</div>'
        }
        html.parentElement.insertAdjacentHTML('afterend', _html);
        if (html.parentElement.parentElement.className.indexOf('XIU2-GCP') === -1){
            html.parentElement.parentElement.classList.add('XIU2-GCP')
            html.parentElement.parentElement.addEventListener('click', (e)=>{if (e.target.tagName === 'INPUT') {GM_setClipboard(e.target.value);}})
        }
    }

    function addRawFile() {
        let html = document.querySelector('a[data-testid="raw-button"]');if (!html) return
        let href = location.href.replace(`https://${location.host}`,''),
            href2 = href.replace('/blob/','/'),
            url = '', _html = '';

        for (let i=1;i<raw_url.length;i++) {
            if ((raw_url[i][0].indexOf('/gh') + 3 === raw_url[i][0].length) && raw_url[i][0].indexOf('cdn.staticaly.com') === -1) {
                url = raw_url[i][0] + href.replace('/blob/','@');
            } else {
                url = raw_url[i][0] + href2;
            }
            _html += `<a href="${url}" title="${raw_url[i][2]}" target="_blank" role="button" rel="noreferrer noopener nofollow" data-size="small" data-variant="default" class="${html.className} XIU2-RF" style="border-radius: 0;margin-left: -1px;">${raw_url[i][1].replace(/ \d/,'')}</a>`
        }
        if (document.querySelector('.XIU2-RF')) document.querySelectorAll('.XIU2-RF').forEach((e)=>{e.remove()})
        html.insertAdjacentHTML('afterend', _html);
    }

    function addRawDownLink() {
        if (!GM_getValue('menu_rawDownLink')) return
        let files = document.querySelectorAll('div.Box-row svg.octicon.octicon-file, .react-directory-filename-column>svg.color-fg-muted');if(files.length === 0) return;if (location.pathname.indexOf('/tags') > -1) return
        let files1 = document.querySelectorAll('a.fileDownLink');if(files1.length > 0) return;

        var mouseOverHandler = function(evt) {
            let elem = evt.currentTarget,
                aElm_new = elem.querySelectorAll('.fileDownLink'),
                aElm_now = elem.querySelectorAll('svg.octicon.octicon-file, svg.color-fg-muted');
            aElm_new.forEach(el=>{el.style.cssText = 'display: inline'});
            aElm_now.forEach(el=>{el.style.cssText = 'display: none'});
        };

        var mouseOutHandler = function(evt) {
            let elem = evt.currentTarget,
                aElm_new = elem.querySelectorAll('.fileDownLink'),
                aElm_now = elem.querySelectorAll('svg.octicon.octicon-file, svg.color-fg-muted');
            aElm_new.forEach(el=>{el.style.cssText = 'display: none'});
            aElm_now.forEach(el=>{el.style.cssText = 'display: inline'});
        };

        files.forEach(function(fileElm) {
            let trElm = fileElm.parentNode.parentNode,
                cntElm_a = trElm.querySelector('[role="rowheader"] > .css-truncate.css-truncate-target.d-block.width-fit > a, .react-directory-truncate>a'),
                Name = cntElm_a.innerText,
                href = cntElm_a.getAttribute('href'),
                href2 = href.replace('/blob/','/'), url = '';
            if ((raw_url[menu_rawFast][0].indexOf('/gh') + 3 === raw_url[menu_rawFast][0].length) && raw_url[menu_rawFast][0].indexOf('cdn.staticaly.com') === -1) {
                url = raw_url[menu_rawFast][0] + href.replace('/blob/','@');
            } else {
                url = raw_url[menu_rawFast][0] + href2;
            }

            fileElm.insertAdjacentHTML('afterend', `<a href="${url}" download="${Name}" target="_blank" rel="noreferrer noopener nofollow" class="fileDownLink" style="display: none;" title="「${raw_url[menu_rawFast][1]}」&#10;&#10;[Alt + Left Click] or [Right Click - Save As...] to download the file.&#10;Note: Click the [☁] icon, not the file name on the left!&#10;&#10;${raw_url[menu_rawFast][2]}&#10;&#10;Tip: Click the Tampermonkey extension icon in the upper right corner of the browser - [ ${raw_url[menu_rawFast][1]} ] Speed Source (☁) to switch.">${svg[0]}</a>`);
            trElm.onmouseover = mouseOverHandler;
            trElm.onmouseout = mouseOutHandler;
        });
    }

    function delRawDownLink() {
        if (!GM_getValue('menu_rawDownLink')) return
        let aElm = document.querySelectorAll('.fileDownLink');if(aElm.length === 0) return;
        aElm.forEach(function(fileElm) {fileElm.remove();})
    }

    function addRawDownLink_() {
        if (!GM_getValue('menu_rawDownLink')) return
        let files = document.querySelectorAll('div.Box-row svg.octicon.octicon-file, .react-directory-filename-column>svg.color-fg-muted');if(files.length === 0) return;
        let files1 = document.querySelectorAll('a.fileDownLink');if(files1.length === 0) return;

        var mouseOverHandler = function(evt) {
            let elem = evt.currentTarget,
                aElm_new = elem.querySelectorAll('.fileDownLink'),
                aElm_now = elem.querySelectorAll('svg.octicon.octicon-file, svg.color-fg-muted');
            aElm_new.forEach(el=>{el.style.cssText = 'display: inline'});
            aElm_now.forEach(el=>{el.style.cssText = 'display: none'});
        };

        var mouseOutHandler = function(evt) {
            let elem = evt.currentTarget,
                aElm_new = elem.querySelectorAll('.fileDownLink'),
                aElm_now = elem.querySelectorAll('svg.octicon.octicon-file, svg.color-fg-muted');
            aElm_new.forEach(el=>{el.style.cssText = 'display: none'});
            aElm_now.forEach(el=>{el.style.cssText = 'display: inline'});
        };

        files.forEach(function(fileElm) {
            let trElm = fileElm.parentNode.parentNode;
            trElm.onmouseover = mouseOverHandler;
            trElm.onmouseout = mouseOutHandler;
        });
    }

    function colorMode() {
        let style_Add;
        if (document.getElementById('XIU2-Github')) {style_Add = document.getElementById('XIU2-Github')} else {style_Add = document.createElement('style'); style_Add.id = 'XIU2-Github'; style_Add.type = 'text/css';}
        let backColor = '#ffffff', fontColor = '#888888';

        if (document.lastElementChild.dataset.colorMode === 'dark') {
            if (document.lastElementChild.dataset.darkTheme === 'dark_dimmed') {
                backColor = '#272e37'; fontColor = '#768390';
            } else {
                backColor = '#161a21'; fontColor = '#97a0aa';
            }
        } else if (document.lastElementChild.dataset.colorMode === 'auto') {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches || document.lastElementChild.dataset.lightTheme.indexOf('dark') > -1) {
                if (document.lastElementChild.dataset.darkTheme === 'dark_dimmed') {
                    backColor = '#272e37'; fontColor = '#768390';
                } else if (document.lastElementChild.dataset.darkTheme.indexOf('light') == -1) {
                    backColor = '#161a21'; fontColor = '#97a0aa';
                }
            }
        }

            document.lastElementChild.appendChild(style_Add).textContent = `.XIU2-RS a {--XIU2-background-color: ${backColor}; --XIU2-font-color: ${fontColor};}`;
    }

    function addUrlChangeEvent() {
        history.pushState = (f => function pushState(){
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('urlchange'));
            return ret;
        })(history.pushState);

        history.replaceState = (f => function replaceState(){
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('replacestate'));
            window.dispatchEvent(new Event('urlchange'));
            return ret;
        })(history.replaceState);

        window.addEventListener('popstate', () => {
            window.dispatchEvent(new Event('urlchange'))
        });
    }
})();
