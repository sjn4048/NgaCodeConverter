// ==UserScript==
// @name         NGA Markdown
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       sjn4048
// @match        *://bbs.ngacn.cc/*
// @match        *://*.ngabbs.com/*
// @match        *://nga.178.com/*
// @match        *://bbs.nga.cn/*
// @require      http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js
// @grant        unsafeWindow
// ==/UserScript==

jQuery.noConflict();

remote_api = "example.com/api/your_api";

(function($) {
    'use strict';
    // debugger;
    var button =$("#xoxoxxxoxoxxoo > span > span > table > tbody > tr:nth-child(4) > td > button:nth-child(6)");
    var submitButton = $('#xoxoxxxoxoxxoo > span > table.stdbtn > tbody > tr > td:nth-child(1) > a > span');
    var textarea = $('#xoxoxxxoxoxxoo > span > span > table > tbody > tr:nth-child(5) > td > textarea');
    if (typeof postfunc !== undefined) {
        postfunc.old_preview = postfunc.preview;
        postfunc.preview = () => {
            const mdText = textarea.val();
            $.ajax({
                type: 'POST',
                url: remote_api,
                data: {text: mdText},
                success: (res) => {
                    textarea.val(res.msg);
                    postfunc.old_preview();
                    textarea.val(mdText);
                }
            });
        };
        commonui.newPost_old = commonui.newPost;
        commonui.newPost = function(btn,
            action,//操作
            fbit,//版面bit type
            fid,//版面id
            tid,//主题id
            pid,//回复id
            stid,
            subject,//标题
            content,//内容
            hidden,//隐藏帖子 仅版主可见
            selfReply,//只有作者和版主可回复
            attach,//附件
            attachChk,//附件校验
            vote,//投票内容
            voteType,// 0投票 1投注铜币
            voteMax,//每人最多可投 0不限
            voteEnd,//小时后结束
            voteBetMax,//投注最大值
            voteBetMin,//投注最小值
            voteLimit,//投票的声望限制
            modifyAppend,//修改时修改内容添加在原内容之后
            comment,//评论/贴条回复
            anony,//匿名
            live,//直播
            replyAnony,//回复匿名
            topicVote,//评分主题评分
            tmbit1,
            otherData,
            post_opt
        ) {
            const mdText = content;
            $.ajax({
                type: 'POST',
                url: remote_api,
                data: {text: mdText},
                success: (res) => {
                    content = res.msg;
                    commonui.newPost_old(btn,
                        action,//操作
                        fbit,//版面bit type
                        fid,//版面id
                        tid,//主题id
                        pid,//回复id
                        stid,
                        subject,//标题
                        content,//内容
                        hidden,//隐藏帖子 仅版主可见
                        selfReply,//只有作者和版主可回复
                        attach,//附件
                        attachChk,//附件校验
                        vote,//投票内容
                        voteType,// 0投票 1投注铜币
                        voteMax,//每人最多可投 0不限
                        voteEnd,//小时后结束
                        voteBetMax,//投注最大值
                        voteBetMin,//投注最小值
                        voteLimit,//投票的声望限制
                        modifyAppend,//修改时修改内容添加在原内容之后
                        comment,//评论/贴条回复
                        anony,//匿名
                        live,//直播
                        replyAnony,//回复匿名
                        topicVote,//评分主题评分
                        tmbit1,
                        otherData,
                        post_opt
                        )
                }
            });
        };
    }
})( jQuery );