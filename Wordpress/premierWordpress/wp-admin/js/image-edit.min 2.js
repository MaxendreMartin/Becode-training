/*! This file is auto-generated */
!function(m){var l=wp.i18n.__,h=window.imageEdit={iasapi:{},hold:{},postid:"",_view:!1,handleCropToolClick:function(i,t,e){var a=m("#image-preview-"+i),o=this.iasapi.getSelection();isNaN(o.x1)&&(this.setCropSelection(i,{x1:0,y1:0,x2:a.innerWidth(),y2:a.innerHeight(),width:a.innerWidth(),height:a.innerHeight()}),o=this.iasapi.getSelection()),0===o.x1&&0===o.y1&&0===o.x2&&0===o.y2?(this.iasapi.setSelection(0,0,a.innerWidth(),a.innerHeight(),!0),this.iasapi.setOptions({show:!0}),this.iasapi.update()):h.crop(i,t,e)},intval:function(i){return 0|i},setDisabled:function(i,t){t?i.removeClass("disabled").prop("disabled",!1):i.addClass("disabled").prop("disabled",!0)},init:function(i){var t=this,e=m("#image-editor-"+t.postid),a=t.intval(m("#imgedit-x-"+i).val()),o=t.intval(m("#imgedit-y-"+i).val());t.postid!==i&&e.length&&t.close(t.postid),t.hold.w=t.hold.ow=a,t.hold.h=t.hold.oh=o,t.hold.xy_ratio=a/o,t.hold.sizer=parseFloat(m("#imgedit-sizer-"+i).val()),t.postid=i,m("#imgedit-response-"+i).empty(),m('input[type="text"]',"#imgedit-panel-"+i).keypress(function(i){var t=i.keyCode;if(36<t&&t<41&&m(this).blur(),13===t)return i.preventDefault(),i.stopPropagation(),!1}),m(document).on("image-editor-ui-ready",this.focusManager)},toggleEditor:function(i,t,e){var a=m("#imgedit-wait-"+i);t?a.fadeIn("fast"):a.fadeOut("fast",function(){e&&m(document).trigger("image-editor-ui-ready")})},toggleHelp:function(i){var t=m(i);return t.attr("aria-expanded","false"===t.attr("aria-expanded")?"true":"false").parents(".imgedit-group-top").toggleClass("imgedit-help-toggled").find(".imgedit-help").slideToggle("fast"),!1},getTarget:function(i){return m('input[name="imgedit-target-'+i+'"]:checked',"#imgedit-save-target-"+i).val()||"full"},scaleChanged:function(i,t,e){var a=m("#imgedit-scale-width-"+i),o=m("#imgedit-scale-height-"+i),n=m("#imgedit-scale-warn-"+i),s="",d="";!1!==this.validateNumeric(e)&&(t?(d=""!==a.val()?Math.round(a.val()/this.hold.xy_ratio):"",o.val(d)):(s=""!==o.val()?Math.round(o.val()*this.hold.xy_ratio):"",a.val(s)),d&&d>this.hold.oh||s&&s>this.hold.ow?n.css("visibility","visible"):n.css("visibility","hidden"))},getSelRatio:function(i){var t=this.hold.w,e=this.hold.h,a=this.intval(m("#imgedit-crop-width-"+i).val()),o=this.intval(m("#imgedit-crop-height-"+i).val());return a&&o?a+":"+o:t&&e?t+":"+e:"1:1"},filterHistory:function(i,t){var e,a,o,n,s=m("#imgedit-history-"+i).val(),d=[];if(""===s)return"";if(s=JSON.parse(s),0<(e=this.intval(m("#imgedit-undone-"+i).val())))for(;0<e;)s.pop(),e--;if(t){if(!s.length)return this.hold.w=this.hold.ow,this.hold.h=this.hold.oh,"";(o=(o=s[s.length-1]).c||o.r||o.f||!1)&&(this.hold.w=o.fw,this.hold.h=o.fh)}for(a in s)(n=s[a]).hasOwnProperty("c")?d[a]={c:{x:n.c.x,y:n.c.y,w:n.c.w,h:n.c.h}}:n.hasOwnProperty("r")?d[a]={r:n.r.r}:n.hasOwnProperty("f")&&(d[a]={f:n.f.f});return JSON.stringify(d)},refreshEditor:function(s,i,d){var t,r,e=this;e.toggleEditor(s,1),t={action:"imgedit-preview",_ajax_nonce:i,postid:s,history:e.filterHistory(s,1),rand:e.intval(1e6*Math.random())},r=m('<img id="image-preview-'+s+'" alt="" />').on("load",{history:t.history},function(i){var t,e,a,o=m("#imgedit-crop-"+s),n=h;""!==i.data.history&&(a=JSON.parse(i.data.history))[a.length-1].hasOwnProperty("c")&&(n.setDisabled(m("#image-undo-"+s),!0),m("#image-undo-"+s).focus()),o.empty().append(r),t=Math.max(n.hold.w,n.hold.h),e=Math.max(m(r).width(),m(r).height()),n.hold.sizer=e<t?e/t:1,n.initCrop(s,r,o),null!=d&&d(),m("#imgedit-history-"+s).val()&&"0"===m("#imgedit-undone-"+s).val()?m("input.imgedit-submit-btn","#imgedit-panel-"+s).removeAttr("disabled"):m("input.imgedit-submit-btn","#imgedit-panel-"+s).prop("disabled",!0),n.toggleEditor(s,0)}).on("error",function(){var i=l("Could not load the preview image. Please reload the page and try again.");m("#imgedit-crop-"+s).empty().append('<div class="notice notice-error" tabindex="-1" role="alert"><p>'+i+"</p></div>"),e.toggleEditor(s,0,!0),wp.a11y.speak(i,"assertive")}).attr("src",ajaxurl+"?"+m.param(t))},action:function(t,i,e){var a,o,n,s,d,r=this;if(r.notsaved(t))return!1;if(a={action:"image-editor",_ajax_nonce:i,postid:t},"scale"===e){if(o=m("#imgedit-scale-width-"+t),n=m("#imgedit-scale-height-"+t),s=r.intval(o.val()),d=r.intval(n.val()),s<1)return o.focus(),!1;if(d<1)return n.focus(),!1;if(s===r.hold.ow||d===r.hold.oh)return!1;a.do="scale",a.fwidth=s,a.fheight=d}else{if("restore"!==e)return!1;a.do="restore"}r.toggleEditor(t,1),m.post(ajaxurl,a,function(i){m("#image-editor-"+t).empty().append(i.data.html),r.toggleEditor(t,0,!0),r._view&&r._view.refresh()}).done(function(i){i&&i.data.message.msg?wp.a11y.speak(i.data.message.msg):i&&i.data.message.error&&wp.a11y.speak(i.data.message.error)})},save:function(t,i){var e,a=this.getTarget(t),o=this.filterHistory(t,0),n=this;if(""===o)return!1;this.toggleEditor(t,1),e={action:"image-editor",_ajax_nonce:i,postid:t,history:o,target:a,context:m("#image-edit-context").length?m("#image-edit-context").val():null,do:"save"},m.post(ajaxurl,e,function(i){if(i.data.error)return m("#imgedit-response-"+t).html('<div class="notice notice-error" tabindex="-1" role="alert"><p>'+i.data.error+"</p></div>"),h.close(t),void wp.a11y.speak(i.data.error);i.data.fw&&i.data.fh&&m("#media-dims-"+t).html(i.data.fw+" &times; "+i.data.fh),i.data.thumbnail&&m(".thumbnail","#thumbnail-head-"+t).attr("src",""+i.data.thumbnail),i.data.msg&&(m("#imgedit-response-"+t).html('<div class="notice notice-success" tabindex="-1" role="alert"><p>'+i.data.msg+"</p></div>"),wp.a11y.speak(i.data.msg)),n._view?n._view.save():h.close(t)})},open:function(e,i,t){this._view=t;var a,o=m("#image-editor-"+e),n=m("#media-head-"+e),s=m("#imgedit-open-btn-"+e),d=s.siblings(".spinner");if(!s.hasClass("button-activated"))return d.addClass("is-active"),a={action:"image-editor",_ajax_nonce:i,postid:e,do:"open"},m.ajax({url:ajaxurl,type:"post",data:a,beforeSend:function(){s.addClass("button-activated")}}).done(function(i){var t;"-1"===i&&(t=l("Could not load the preview image."),o.html('<div class="notice notice-error" tabindex="-1" role="alert"><p>'+t+"</p></div>")),i.data&&i.data.html&&o.html(i.data.html),n.fadeOut("fast",function(){o.fadeIn("fast",function(){t&&m(document).trigger("image-editor-ui-ready")}),s.removeClass("button-activated"),d.removeClass("is-active")}),h.init(e)})},imgLoaded:function(i){var t=m("#image-preview-"+i),e=m("#imgedit-crop-"+i);void 0===this.hold.sizer&&this.init(i),this.initCrop(i,t,e),this.setCropSelection(i,{x1:0,y1:0,x2:0,y2:0,width:t.innerWidth(),height:t.innerHeight()}),this.toggleEditor(i,0,!0)},focusManager:function(){setTimeout(function(){var i=m('.notice[role="alert"]');i.length||(i=m(".imgedit-wrap").find(":tabbable:first")),i.focus()},100)},initCrop:function(o,i,t){var n=this,a=m("#imgedit-sel-width-"+o),s=m("#imgedit-sel-height-"+o),e=m(i);e.data("imgAreaSelect")||(n.iasapi=e.imgAreaSelect({parent:t,instance:!0,handles:!0,keys:!0,minWidth:3,minHeight:3,onInit:function(i){m(i).next().css("position","absolute").nextAll(".imgareaselect-outer").css("position","absolute"),t.children().on("mousedown, touchstart",function(i){var t,e,a=!1;i.shiftKey&&(t=n.iasapi.getSelection(),e=n.getSelRatio(o),a=t&&t.width&&t.height?t.width+":"+t.height:e),n.iasapi.setOptions({aspectRatio:a})})},onSelectStart:function(){h.setDisabled(m("#imgedit-crop-sel-"+o),1)},onSelectEnd:function(i,t){h.setCropSelection(o,t)},onSelectChange:function(i,t){var e=h.hold.sizer;a.val(h.round(t.width/e)),s.val(h.round(t.height/e))}}))},setCropSelection:function(i,t){var e;if(!(t=t||0)||t.width<3&&t.height<3)return this.setDisabled(m(".imgedit-crop","#imgedit-panel-"+i),1),this.setDisabled(m("#imgedit-crop-sel-"+i),1),m("#imgedit-sel-width-"+i).val(""),m("#imgedit-sel-height-"+i).val(""),m("#imgedit-selection-"+i).val(""),!1;e={x:t.x1,y:t.y1,w:t.width,h:t.height},this.setDisabled(m(".imgedit-crop","#imgedit-panel-"+i),1),m("#imgedit-selection-"+i).val(JSON.stringify(e))},close:function(i,t){if((t=t||!1)&&this.notsaved(i))return!1;this.iasapi={},this.hold={},this._view?this._view.back():m("#image-editor-"+i).fadeOut("fast",function(){m("#media-head-"+i).fadeIn("fast",function(){m("#imgedit-open-btn-"+i).focus()}),m(this).empty()})},notsaved:function(i){var t=m("#imgedit-history-"+i).val(),e=""!==t?JSON.parse(t):[];return this.intval(m("#imgedit-undone-"+i).val())<e.length&&!confirm(m("#imgedit-leaving-"+i).html())},addStep:function(i,t,e){for(var a=this,o=m("#imgedit-history-"+t),n=""!==o.val()?JSON.parse(o.val()):[],s=m("#imgedit-undone-"+t),d=a.intval(s.val());0<d;)n.pop(),d--;s.val(0),n.push(i),o.val(JSON.stringify(n)),a.refreshEditor(t,e,function(){a.setDisabled(m("#image-undo-"+t),!0),a.setDisabled(m("#image-redo-"+t),!1)})},rotate:function(i,t,e,a){if(m(a).hasClass("disabled"))return!1;this.addStep({r:{r:i,fw:this.hold.h,fh:this.hold.w}},t,e)},flip:function(i,t,e,a){if(m(a).hasClass("disabled"))return!1;this.addStep({f:{f:i,fw:this.hold.w,fh:this.hold.h}},t,e)},crop:function(i,t,e){var a=m("#imgedit-selection-"+i).val(),o=this.intval(m("#imgedit-sel-width-"+i).val()),n=this.intval(m("#imgedit-sel-height-"+i).val());if(m(e).hasClass("disabled")||""===a)return!1;0<(a=JSON.parse(a)).w&&0<a.h&&0<o&&0<n&&(a.fw=o,a.fh=n,this.addStep({c:a},i,t))},undo:function(e,i){var a=this,o=m("#image-undo-"+e),t=m("#imgedit-undone-"+e),n=a.intval(t.val())+1;o.hasClass("disabled")||(t.val(n),a.refreshEditor(e,i,function(){var i=m("#imgedit-history-"+e),t=""!==i.val()?JSON.parse(i.val()):[];a.setDisabled(m("#image-redo-"+e),!0),a.setDisabled(o,n<t.length),t.length===n&&m("#image-redo-"+e).focus()}))},redo:function(i,t){var e=this,a=m("#image-redo-"+i),o=m("#imgedit-undone-"+i),n=e.intval(o.val())-1;a.hasClass("disabled")||(o.val(n),e.refreshEditor(i,t,function(){e.setDisabled(m("#image-undo-"+i),!0),e.setDisabled(a,0<n),0==n&&m("#image-undo-"+i).focus()}))},setNumSelection:function(i,t){var e,a,o,n,s,d=m("#imgedit-sel-width-"+i),r=m("#imgedit-sel-height-"+i),l=this.intval(d.val()),h=this.intval(r.val()),g=m("#image-preview-"+i),c=g.height(),p=g.width(),u=this.hold.sizer,v=this.iasapi;if(!1!==this.validateNumeric(t))return l<1?(d.val(""),!1):h<1?(r.val(""),!1):void(l&&h&&(e=v.getSelection())&&(n=e.x1+Math.round(l*u),s=e.y1+Math.round(h*u),a=e.x1,o=e.y1,p<n&&(a=0,n=p,d.val(Math.round(n/u))),c<s&&(o=0,s=c,r.val(Math.round(s/u))),v.setSelection(a,o,n,s),v.update(),this.setCropSelection(i,v.getSelection())))},round:function(i){var t;return i=Math.round(i),.6<this.hold.sizer?i:"1"===(t=i.toString().slice(-1))?i-1:"9"===t?i+1:i},setRatioSelection:function(i,t,e){var a,o,n=this.intval(m("#imgedit-crop-width-"+i).val()),s=this.intval(m("#imgedit-crop-height-"+i).val()),d=m("#image-preview-"+i).height();!1!==this.validateNumeric(e)?n&&s&&(this.iasapi.setOptions({aspectRatio:n+":"+s}),(a=this.iasapi.getSelection(!0))&&(d<(o=Math.ceil(a.y1+(a.x2-a.x1)/(n/s)))&&(o=d,t?m("#imgedit-crop-height-"+i).val(""):m("#imgedit-crop-width-"+i).val("")),this.iasapi.setSelection(a.x1,a.y1,a.x2,o),this.iasapi.update())):this.iasapi.setOptions({aspectRatio:null})},validateNumeric:function(i){if(!this.intval(m(i).val()))return m(i).val(""),!1}}}(jQuery);