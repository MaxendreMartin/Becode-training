/*! This file is auto-generated */
!function(E){var R,l,I,L,T,p,j,D,s,i,r=document.title,O=E("#dashboard_right_now").length,u=wp.i18n.__;R=function(t){var e=parseInt(t.html().replace(/[^0-9]+/g,""),10);return isNaN(e)?0:e},l=function(t,e){var n="";if(!isNaN(e)){if(3<(e=e<1?"0":e.toString()).length){for(;3<e.length;)n=thousandsSeparator+e.substr(e.length-3)+n,e=e.substr(0,e.length-3);e+=n}t.html(e)}},T=function(n,t){var e,a,o=".post-com-count-"+t,s="comment-count-no-comments",i="comment-count-approved";I("span.approved-count",n),t&&(e=E("span."+i,o),a=E("span."+s,o),e.each(function(){var t=E(this),e=R(t)+n;e<1&&(e=0),0===e?t.removeClass(i).addClass(s):t.addClass(i).removeClass(s),l(t,e)}),a.each(function(){var t=E(this);0<n?t.removeClass(s).addClass(i):t.addClass(s).removeClass(i),l(t,n)}))},I=function(t,n){E(t).each(function(){var t=E(this),e=R(t)+n;e<1&&(e=0),l(t,e)})},j=function(t){O&&t&&t.i18n_comments_text&&E(".comment-count a","#dashboard_right_now").text(t.i18n_comments_text)},D=function(t){t&&t.i18n_moderation_text&&(E(".comments-in-moderation-text").text(t.i18n_moderation_text),O&&t.in_moderation&&E(".comment-mod-count","#dashboard_right_now")[0<t.in_moderation?"removeClass":"addClass"]("hidden"))},p=function(t){var e,n,a,o;i=i||new RegExp(u("Comments (%s)").replace("%s","\\([0-9"+thousandsSeparator+"]+\\)")+"?"),s=s||E("<div />"),e=r,1<=(a=(o=i.exec(document.title))?(o=o[0],s.html(o),R(s)+t):(s.html(0),t))?(l(s,a),(n=i.exec(document.title))&&(e=document.title.replace(n[0],u("Comments (%s)").replace("%s",s.text())+" "))):(n=i.exec(e))&&(e=e.replace(n[0],u("Comments"))),document.title=e},L=function(n,t){var e,a,o=".post-com-count-"+t,s="comment-count-no-pending",i="post-com-count-no-pending",r="comment-count-pending";O||p(n),E("span.pending-count").each(function(){var t=E(this),e=R(t)+n;e<1&&(e=0),t.closest(".awaiting-mod")[0===e?"addClass":"removeClass"]("count-0"),l(t,e)}),t&&(e=E("span."+r,o),a=E("span."+s,o),e.each(function(){var t=E(this),e=R(t)+n;e<1&&(e=0),0===e?(t.parent().addClass(i),t.removeClass(r).addClass(s)):(t.parent().removeClass(i),t.addClass(r).removeClass(s)),l(t,e)}),a.each(function(){var t=E(this);0<n?(t.parent().removeClass(i),t.removeClass(s).addClass(r)):(t.parent().addClass(i),t.addClass(s).removeClass(r)),l(t,n)}))},window.setCommentsList=function(){var w,d,m,t,e,x,n,b,r,k=0;w=E('input[name="_total"]',"#comments-form"),d=E('input[name="_per_page"]',"#comments-form"),m=E('input[name="_page"]',"#comments-form"),x=function(t,e,n){e<k||(n&&(k=e),w.val(t.toString()))},t=function(t,e){var n,a,o,s,i=E("#"+e.element);!0!==e.parsed&&(s=e.parsed.responses[0]),n=E("#replyrow"),a=E("#comment_ID",n).val(),o=E("#replybtn",n),i.is(".unapproved")?(e.data.id==a&&o.text(u("Approve and Reply")),i.find(".row-actions span.view").addClass("hidden").end().find("div.comment_status").html("0")):(e.data.id==a&&o.text(u("Reply")),i.find(".row-actions span.view").removeClass("hidden").end().find("div.comment_status").html("1")),r=E("#"+e.element).is("."+e.dimClass)?1:-1,s?(j(s.supplemental),D(s.supplemental),L(r,s.supplemental.postId),T(-1*r,s.supplemental.postId)):(L(r),T(-1*r))},e=function(t,e){var n,a,o,s,i,r,l,p=!1,c=E(t.target).attr("data-wp-lists");return t.data._total=w.val()||0,t.data._per_page=d.val()||0,t.data._page=m.val()||0,t.data._url=document.location.href,t.data.comment_status=E('input[name="comment_status"]',"#comments-form").val(),-1!=c.indexOf(":trash=1")?p="trash":-1!=c.indexOf(":spam=1")&&(p="spam"),p&&(a=c.replace(/.*?comment-([0-9]+).*/,"$1"),o=E("#comment-"+a),n=E("#"+p+"-undo-holder").html(),o.find(".check-column :checkbox").prop("checked",!1),o.siblings("#replyrow").length&&commentReply.cid==a&&commentReply.close(),i=o.is("tr")?(s=o.children(":visible").length,l=E(".author strong",o).text(),E('<tr id="undo-'+a+'" class="undo un'+p+'" style="display:none;"><td colspan="'+s+'">'+n+"</td></tr>")):(l=E(".comment-author",o).text(),E('<div id="undo-'+a+'" style="display:none;" class="undo un'+p+'">'+n+"</div>")),o.before(i),E("strong","#undo-"+a).text(l),(r=E(".undo a","#undo-"+a)).attr("href","comment.php?action=un"+p+"comment&c="+a+"&_wpnonce="+t.data._ajax_nonce),r.attr("data-wp-lists","delete:the-comment-list:comment-"+a+"::un"+p+"=1"),r.attr("class","vim-z vim-destructive aria-button-if-js"),E(".avatar",o).first().clone().prependTo("#undo-"+a+" ."+p+"-undo-inside"),r.click(function(t){t.preventDefault(),t.stopPropagation(),e.wpList.del(this),E("#undo-"+a).css({backgroundColor:"#ceb"}).fadeOut(350,function(){E(this).remove(),E("#comment-"+a).css("backgroundColor","").fadeIn(300,function(){E(this).show()})})})),t},n=function(t,e){var n,a,o,s,i,r,l,p,c=!0===e.parsed?{}:e.parsed.responses[0],d=!0===e.parsed?"":c.supplemental.status,m=!0===e.parsed?"":c.supplemental.postId,u=!0===e.parsed?"":c.supplemental,h=E(e.target).parent(),f=E("#"+e.element),v=f.hasClass("approved")&&!f.hasClass("unapproved"),g=f.hasClass("unapproved"),_=f.hasClass("spam"),y=f.hasClass("trash"),C=!1;j(u),D(u),h.is("span.undo")?(h.hasClass("unspam")?(i=-1,"trash"===d?r=1:"1"===d?p=1:"0"===d&&(l=1)):h.hasClass("untrash")&&(r=-1,"spam"===d?i=1:"1"===d?p=1:"0"===d&&(l=1)),C=!0):h.is("span.spam")?(v?p=-1:g?l=-1:y&&(r=-1),i=1):h.is("span.unspam")?(v?l=1:g?p=1:y?h.hasClass("approve")?p=1:h.hasClass("unapprove")&&(l=1):_&&(h.hasClass("approve")?p=1:h.hasClass("unapprove")&&(l=1)),i=-1):h.is("span.trash")?(v?p=-1:g?l=-1:_&&(i=-1),r=1):h.is("span.untrash")?(v?l=1:g?p=1:y&&(h.hasClass("approve")?p=1:h.hasClass("unapprove")&&(l=1)),r=-1):h.is("span.approve:not(.unspam):not(.untrash)")?l=-(p=1):h.is("span.unapprove:not(.unspam):not(.untrash)")?(p=-1,l=1):h.is("span.delete")&&(_?i=-1:y&&(r=-1)),l&&(L(l,m),I("span.all-count",l)),p&&(T(p,m),I("span.all-count",p)),i&&I("span.spam-count",i),r&&I("span.trash-count",r),("trash"===e.data.comment_status&&!R(E("span.trash-count"))||"spam"===e.data.comment_status&&!R(E("span.spam-count")))&&E("#delete_all").hide(),O||(a=w.val()?parseInt(w.val(),10):0,E(e.target).parent().is("span.undo")?a++:a--,a<0&&(a=0),"object"==typeof t?c.supplemental.total_items_i18n&&k<c.supplemental.time?((n=c.supplemental.total_items_i18n||"")&&(E(".displaying-num").text(n.replace("&nbsp;",String.fromCharCode(160))),E(".total-pages").text(c.supplemental.total_pages_i18n.replace("&nbsp;",String.fromCharCode(160))),E(".tablenav-pages").find(".next-page, .last-page").toggleClass("disabled",c.supplemental.total_pages==E(".current-page").val())),x(a,c.supplemental.time,!0)):c.supplemental.time&&x(a,c.supplemental.time,!1):x(a,t,!1)),theExtraList&&0!==theExtraList.length&&0!==theExtraList.children().length&&!C&&(theList.get(0).wpList.add(theExtraList.children(":eq(0):not(.no-items)").remove().clone()),b(),s=function(){E("#the-comment-list tr:visible").length||theList.get(0).wpList.add(theExtraList.find(".no-items").clone())},(o=E(":animated","#the-comment-list")).length?o.promise().done(s):s())},b=function(t){var e=E.query.get(),n=E(".total-pages").text(),a=E('input[name="_per_page"]',"#comments-form").val();e.paged||(e.paged=1),e.paged>n||(t?(theExtraList.empty(),e.number=Math.min(8,a)):(e.number=1,e.offset=Math.min(8,a)-1),e.no_placeholder=!0,e.paged++,!0===e.comment_type&&(e.comment_type=""),e=E.extend(e,{action:"fetch-list",list_args:list_args,_ajax_fetch_list_nonce:E("#_ajax_fetch_list_nonce").val()}),E.ajax({url:ajaxurl,global:!1,dataType:"json",data:e,success:function(t){theExtraList.get(0).wpList.add(t.rows)}}))},window.theExtraList=E("#the-extra-comment-list").wpList({alt:"",delColor:"none",addColor:"none"}),window.theList=E("#the-comment-list").wpList({alt:"",delBefore:e,dimAfter:t,delAfter:n,addColor:"none"}).bind("wpListDelEnd",function(t,e){var n=E(e.target).attr("data-wp-lists"),a=e.element.replace(/[^0-9]+/g,"");-1==n.indexOf(":trash=1")&&-1==n.indexOf(":spam=1")||E("#undo-"+a).fadeIn(300,function(){E(this).show()})})},window.commentReply={cid:"",act:"",originalContent:"",init:function(){var t=E("#replyrow");E(".cancel",t).click(function(){return commentReply.revert()}),E(".save",t).click(function(){return commentReply.send()}),E("input#author-name, input#author-email, input#author-url",t).keypress(function(t){if(13==t.which)return commentReply.send(),t.preventDefault(),!1}),E("#the-comment-list .column-comment > p").dblclick(function(){commentReply.toggle(E(this).parent())}),E("#doaction, #doaction2, #post-query-submit").click(function(){0<E("#the-comment-list #replyrow").length&&commentReply.close()}),this.comments_listing=E('#comments-form > input[name="comment_status"]').val()||""},addEvents:function(t){t.each(function(){E(this).find(".column-comment > p").dblclick(function(){commentReply.toggle(E(this).parent())})})},toggle:function(t){"none"!==E(t).css("display")&&(E("#replyrow").parent().is("#com-reply")||window.confirm(u("Are you sure you want to edit this comment?\nThe changes you made will be lost.")))&&E(t).find("button.vim-q").click()},revert:function(){if(E("#the-comment-list #replyrow").length<1)return!1;E("#replyrow").fadeOut("fast",function(){commentReply.close()})},close:function(){var t=E(),e=E("#replyrow");e.parent().is("#com-reply")||(this.cid&&(t=E("#comment-"+this.cid)),"edit-comment"===this.act&&t.fadeIn(300,function(){t.show().find(".vim-q").attr("aria-expanded","false").focus()}).css("backgroundColor",""),"replyto-comment"===this.act&&t.find(".vim-r").attr("aria-expanded","false").focus(),"undefined"!=typeof QTags&&QTags.closeAllTags("replycontent"),E("#add-new-comment").css("display",""),e.hide(),E("#com-reply").append(e),E("#replycontent").css("height","").val(""),E("#edithead input").val(""),E(".notice-error",e).addClass("hidden").find(".error").empty(),E(".spinner",e).removeClass("is-active"),this.cid="",this.originalContent="")},open:function(t,e,n){var a,o,s,i,r,l,p=E("#comment-"+t),c=p.height();return this.discardCommentChanges()&&(this.close(),this.cid=t,a=E("#replyrow"),o=E("#inline-"+t),s="edit"==(n=n||"replyto")?"edit":"replyto",s=this.act=s+"-comment",this.originalContent=E("textarea.comment",o).val(),l=E("> th:visible, > td:visible",p).length,a.hasClass("inline-edit-row")&&0!==l&&E("td",a).attr("colspan",l),E("#action",a).val(s),E("#comment_post_ID",a).val(e),E("#comment_ID",a).val(t),"edit"==n?(E("#author-name",a).val(E("div.author",o).text()),E("#author-email",a).val(E("div.author-email",o).text()),E("#author-url",a).val(E("div.author-url",o).text()),E("#status",a).val(E("div.comment_status",o).text()),E("#replycontent",a).val(E("textarea.comment",o).val()),E("#edithead, #editlegend, #savebtn",a).show(),E("#replyhead, #replybtn, #addhead, #addbtn",a).hide(),120<c&&(r=500<c?500:c,E("#replycontent",a).css("height",r+"px")),p.after(a).fadeOut("fast",function(){E("#replyrow").fadeIn(300,function(){E(this).show()})})):"add"==n?(E("#addhead, #addbtn",a).show(),E("#replyhead, #replybtn, #edithead, #editlegend, #savebtn",a).hide(),E("#the-comment-list").prepend(a),E("#replyrow").fadeIn(300)):(i=E("#replybtn",a),E("#edithead, #editlegend, #savebtn, #addhead, #addbtn",a).hide(),E("#replyhead, #replybtn",a).show(),p.after(a),p.hasClass("unapproved")?i.text(u("Approve and Reply")):i.text(u("Reply")),E("#replyrow").fadeIn(300,function(){E(this).show()})),setTimeout(function(){var t,e,n,a;e=(t=E("#replyrow").offset().top)+E("#replyrow").height(),(n=window.pageYOffset||document.documentElement.scrollTop)+(a=document.documentElement.clientHeight||window.innerHeight||0)-20<e?window.scroll(0,e-a+35):t-20<n&&window.scroll(0,t-35),E("#replycontent").focus().keyup(function(t){27==t.which&&commentReply.revert()})},600)),!1},send:function(){var e={};E("#replysubmit .error-notice").addClass("hidden"),E("#replysubmit .spinner").addClass("is-active"),E("#replyrow input").not(":button").each(function(){var t=E(this);e[t.attr("name")]=t.val()}),e.content=E("#replycontent").val(),e.id=e.comment_post_ID,e.comments_listing=this.comments_listing,e.p=E('[name="p"]').val(),E("#comment-"+E("#comment_ID").val()).hasClass("unapproved")&&(e.approve_parent=1),E.ajax({type:"POST",url:ajaxurl,data:e,success:function(t){commentReply.show(t)},error:function(t){commentReply.error(t)}})},show:function(t){var e,n,a,o,s,i=this;return"string"==typeof t?(i.error({responseText:t}),!1):(e=wpAjax.parseAjaxResponse(t)).errors?(i.error({responseText:wpAjax.broken}),!1):(i.revert(),a="#comment-"+(e=e.responses[0]).id,"edit-comment"==i.act&&E(a).remove(),void(e.supplemental.parent_approved&&(s=E("#comment-"+e.supplemental.parent_approved),L(-1,e.supplemental.parent_post_id),"moderated"==this.comments_listing)?s.animate({backgroundColor:"#CCEEBB"},400,function(){s.fadeOut()}):(e.supplemental.i18n_comments_text&&(j(e.supplemental),D(e.supplemental),T(1,e.supplemental.parent_post_id),I("span.all-count",1)),n=E.trim(e.data),E(n).hide(),E("#replyrow").after(n),a=E(a),i.addEvents(a),o=a.hasClass("unapproved")?"#FFFFE0":a.closest(".widefat, .postbox").css("backgroundColor"),a.animate({backgroundColor:"#CCEEBB"},300).animate({backgroundColor:o},300,function(){s&&s.length&&s.animate({backgroundColor:"#CCEEBB"},300).animate({backgroundColor:o},300).removeClass("unapproved").addClass("approved").find("div.comment_status").html("1")}))))},error:function(t){var e=t.statusText,n=E("#replysubmit .notice-error"),a=n.find(".error");E("#replysubmit .spinner").removeClass("is-active"),t.responseText&&(e=t.responseText.replace(/<.[^<>]*?>/g,"")),e&&(n.removeClass("hidden"),a.html(e))},addcomment:function(t){var e=this;E("#add-new-comment").fadeOut(200,function(){e.open(0,t,"add"),E("table.comments-box").css("display",""),E("#no-comments").remove()})},discardCommentChanges:function(){var t=E("#replyrow");return this.originalContent===E("#replycontent",t).val()||window.confirm(u("Are you sure you want to do this?\nThe comment changes you made will be lost."))}},E(document).ready(function(){var t,e,n,a;setCommentsList(),commentReply.init(),E(document).on("click","span.delete a.delete",function(t){t.preventDefault()}),void 0!==E.table_hotkeys&&(t=function(n){return function(){var t,e;t="next"==n?"first":"last",(e=E(".tablenav-pages ."+n+"-page:not(.disabled)")).length&&(window.location=e[0].href.replace(/\&hotkeys_highlight_(first|last)=1/g,"")+"&hotkeys_highlight_"+t+"=1")}},e=function(t,e){window.location=E("span.edit a",e).attr("href")},n=function(){E("#cb-select-all-1").data("wp-toggle",1).trigger("click").removeData("wp-toggle")},a=function(e){return function(){var t=E('select[name="action"]');E('option[value="'+e+'"]',t).prop("selected",!0),E("#doaction").click()}},E.table_hotkeys(E("table.widefat"),["a","u","s","d","r","q","z",["e",e],["shift+x",n],["shift+a",a("approve")],["shift+s",a("spam")],["shift+d",a("delete")],["shift+t",a("trash")],["shift+z",a("untrash")],["shift+u",a("unapprove")]],{highlight_first:adminCommentsSettings.hotkeys_highlight_first,highlight_last:adminCommentsSettings.hotkeys_highlight_last,prev_page_link_cb:t("prev"),next_page_link_cb:t("next"),hotkeys_opts:{disableInInput:!0,type:"keypress",noDisable:'.check-column input[type="checkbox"]'},cycle_expr:"#the-comment-list tr",start_row_index:0})),E("#the-comment-list").on("click",".comment-inline",function(){var t=E(this),e="replyto";void 0!==t.data("action")&&(e=t.data("action")),E(this).attr("aria-expanded","true"),commentReply.open(t.data("commentId"),t.data("postId"),e)})})}(jQuery);