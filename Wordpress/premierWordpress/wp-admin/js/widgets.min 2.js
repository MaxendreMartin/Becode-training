/*! This file is auto-generated */
!function(h){var v=h(document);window.wpWidgets={hoveredSidebar:null,dirtyWidgets:{},init:function(){var c,g,w=this,d=h(".widgets-chooser"),o=d.find(".widgets-chooser-sidebars"),e=h("div.widgets-sortables"),p=!("undefined"==typeof isRtl||!isRtl);h("#widgets-right .sidebar-name").click(function(){var e=h(this),i=e.closest(".widgets-holder-wrap "),t=e.find(".handlediv");i.hasClass("closed")?(i.removeClass("closed"),t.attr("aria-expanded","true"),e.parent().sortable("refresh")):(i.addClass("closed"),t.attr("aria-expanded","false")),v.triggerHandler("wp-pin-menu")}).find(".handlediv").each(function(e){0!==e&&h(this).attr("aria-expanded","false")}),h(window).on("beforeunload.widgets",function(e){var i,t=[];if(h.each(w.dirtyWidgets,function(e,i){i&&t.push(e)}),0!==t.length)return(i=h("#widgets-right").find(".widget").filter(function(){return-1!==t.indexOf(h(this).prop("id").replace(/^widget-\d+_/,""))})).each(function(){h(this).hasClass("open")||h(this).find(".widget-title-action:first").click()}),i.first().each(function(){this.scrollIntoViewIfNeeded?this.scrollIntoViewIfNeeded():this.scrollIntoView(),h(this).find(".widget-inside :tabbable:first").focus()}),e.returnValue=wp.i18n.__("The changes you made will be lost if you navigate away from this page."),e.returnValue}),h("#widgets-left .sidebar-name").click(function(){var e=h(this).closest(".widgets-holder-wrap");e.toggleClass("closed").find(".handlediv").attr("aria-expanded",!e.hasClass("closed")),v.triggerHandler("wp-pin-menu")}),h(document.body).bind("click.widgets-toggle",function(e){var i,t,d,a,s,n,r=h(e.target),o={},l=r.closest(".widget").find(".widget-top button.widget-action");r.parents(".widget-top").length&&!r.parents("#available-widgets").length?(t=(i=r.closest("div.widget")).children(".widget-inside"),d=parseInt(i.find("input.widget-width").val(),10),a=i.parent().width(),n=t.find(".widget-id").val(),i.data("dirty-state-initialized")||((s=t.find(".widget-control-save")).prop("disabled",!0).val(wp.i18n.__("Saved")),t.on("input change",function(){w.dirtyWidgets[n]=!0,i.addClass("widget-dirty"),s.prop("disabled",!1).val(wp.i18n.__("Save"))}),i.data("dirty-state-initialized",!0)),t.is(":hidden")?(250<d&&a<d+30&&i.closest("div.widgets-sortables").length&&(o[i.closest("div.widget-liquid-right").length?p?"margin-right":"margin-left":p?"margin-left":"margin-right"]=a-(d+30)+"px",i.css(o)),l.attr("aria-expanded","true"),t.slideDown("fast",function(){i.addClass("open")})):(l.attr("aria-expanded","false"),t.slideUp("fast",function(){i.attr("style",""),i.removeClass("open")}))):r.hasClass("widget-control-save")?(wpWidgets.save(r.closest("div.widget"),0,1,0),e.preventDefault()):r.hasClass("widget-control-remove")?wpWidgets.save(r.closest("div.widget"),1,1,0):r.hasClass("widget-control-close")?((i=r.closest("div.widget")).removeClass("open"),l.attr("aria-expanded","false"),wpWidgets.close(i)):"inactive-widgets-control-remove"===r.attr("id")&&(wpWidgets.removeInactiveWidgets(),e.preventDefault())}),e.children(".widget").each(function(){var e=h(this);wpWidgets.appendTitle(this),e.find("p.widget-error").length&&e.find(".widget-action").trigger("click").attr("aria-expanded","true")}),h("#widget-list").children(".widget").draggable({connectToSortable:"div.widgets-sortables",handle:"> .widget-top > .widget-title",distance:2,helper:"clone",zIndex:101,containment:"#wpwrap",refreshPositions:!0,start:function(e,i){var t=h(this).find(".widgets-chooser");i.helper.find("div.widget-description").hide(),g=this.id,t.length&&(h("#wpbody-content").append(t.hide()),i.helper.find(".widgets-chooser").remove(),w.clearWidgetSelection())},stop:function(){c&&h(c).hide(),c=""}}),e.droppable({tolerance:"intersect",over:function(e){var i=h(e.target).parent();wpWidgets.hoveredSidebar&&!i.is(wpWidgets.hoveredSidebar)&&wpWidgets.closeSidebar(e),i.hasClass("closed")&&(wpWidgets.hoveredSidebar=i).removeClass("closed").find(".handlediv").attr("aria-expanded","true"),h(this).sortable("refresh")},out:function(e){wpWidgets.hoveredSidebar&&wpWidgets.closeSidebar(e)}}),e.sortable({placeholder:"widget-placeholder",items:"> .widget",handle:"> .widget-top > .widget-title",cursor:"move",distance:2,containment:"#wpwrap",tolerance:"pointer",refreshPositions:!0,start:function(e,i){var t,d=h(this),a=d.parent(),s=i.item.children(".widget-inside");"block"===s.css("display")&&(i.item.removeClass("open"),i.item.find(".widget-top button.widget-action").attr("aria-expanded","false"),s.hide(),h(this).sortable("refreshPositions")),a.hasClass("closed")||(t=i.item.hasClass("ui-draggable")?d.height():1+d.height(),d.css("min-height",t+"px"))},stop:function(e,i){var t,d,a,s,n,r,o=i.item,l=g;if(wpWidgets.hoveredSidebar=null,o.hasClass("deleting"))return wpWidgets.save(o,1,0,1),void o.remove();t=o.find("input.add_new").val(),d=o.find("input.multi_number").val(),o.attr("style","").removeClass("ui-draggable"),g="",t&&("multi"===t?(o.html(o.html().replace(/<[^<>]+>/g,function(e){return e.replace(/__i__|%i%/g,d)})),o.attr("id",l.replace("__i__",d)),d++,h("div#"+l).find("input.multi_number").val(d)):"single"===t&&(o.attr("id","new-"+l),c="div#"+l),wpWidgets.save(o,0,0,1),o.find("input.add_new").val(""),v.trigger("widget-added",[o])),(a=o.parent()).parent().hasClass("closed")&&(a.parent().removeClass("closed").find(".handlediv").attr("aria-expanded","true"),1<(s=a.children(".widget")).length&&(n=s.get(0),r=o.get(0),n.id&&r.id&&n.id!==r.id&&h(n).before(o))),t?o.find(".widget-action").trigger("click"):wpWidgets.saveOrder(a.attr("id"))},activate:function(){h(this).parent().addClass("widget-hover")},deactivate:function(){h(this).css("min-height","").parent().removeClass("widget-hover")},receive:function(e,i){var t=h(i.sender);-1<this.id.indexOf("orphaned_widgets")?t.sortable("cancel"):-1<t.attr("id").indexOf("orphaned_widgets")&&!t.children(".widget").length&&t.parents(".orphan-sidebar").slideUp(400,function(){h(this).remove()})}}).sortable("option","connectWith","div.widgets-sortables"),h("#available-widgets").droppable({tolerance:"pointer",accept:function(e){return"widget-list"!==h(e).parent().attr("id")},drop:function(e,i){i.draggable.addClass("deleting"),h("#removing-widget").hide().children("span").empty()},over:function(e,i){i.draggable.addClass("deleting"),h("div.widget-placeholder").hide(),i.draggable.hasClass("ui-sortable-helper")&&h("#removing-widget").show().children("span").html(i.draggable.find("div.widget-title").children("h3").html())},out:function(e,i){i.draggable.removeClass("deleting"),h("div.widget-placeholder").show(),h("#removing-widget").hide().children("span").empty()}}),h("#widgets-right .widgets-holder-wrap").each(function(e,i){var t=h(i),d=t.find(".sidebar-name h2").text(),a=t.find(".sidebar-name").data("add-to"),s=t.find(".widgets-sortables").attr("id"),n=h("<li>"),r=h("<button>",{type:"button","aria-pressed":"false",class:"widgets-chooser-button","aria-label":a}).text(h.trim(d));n.append(r),0===e&&(n.addClass("widgets-chooser-selected"),r.attr("aria-pressed","true")),o.append(n),n.data("sidebarId",s)}),h("#available-widgets .widget .widget-top").on("click.widgets-chooser",function(){var e=h(this).closest(".widget"),i=h(this).find(".widget-action"),t=o.find(".widgets-chooser-button");e.hasClass("widget-in-question")||h("#widgets-left").hasClass("chooser")?(i.attr("aria-expanded","false"),w.closeChooser()):(w.clearWidgetSelection(),h("#widgets-left").addClass("chooser"),e.addClass("widget-in-question").children(".widget-description").after(d),d.slideDown(300,function(){i.attr("aria-expanded","true")}),t.on("click.widgets-chooser",function(){o.find(".widgets-chooser-selected").removeClass("widgets-chooser-selected"),t.attr("aria-pressed","false"),h(this).attr("aria-pressed","true").closest("li").addClass("widgets-chooser-selected")}))}),d.on("click.widgets-chooser",function(e){var i=h(e.target);i.hasClass("button-primary")?(w.addWidget(d),w.closeChooser()):i.hasClass("widgets-chooser-cancel")&&w.closeChooser()}).on("keyup.widgets-chooser",function(e){e.which===h.ui.keyCode.ESCAPE&&w.closeChooser()})},saveOrder:function(e){var i={action:"widgets-order",savewidgets:h("#_wpnonce_widgets").val(),sidebars:[]};e&&h("#"+e).find(".spinner:first").addClass("is-active"),h("div.widgets-sortables").each(function(){h(this).sortable&&(i["sidebars["+h(this).attr("id")+"]"]=h(this).sortable("toArray").join(","))}),h.post(ajaxurl,i,function(){h("#inactive-widgets-control-remove").prop("disabled",!h("#wp_inactive_widgets .widget").length),h(".spinner").removeClass("is-active")})},save:function(t,d,a,s){var e,i,n=this,r=t.closest("div.widgets-sortables").attr("id"),o=t.find("form"),l=t.find("input.add_new").val();(d||l||!o.prop("checkValidity")||o[0].checkValidity())&&(e=o.serialize(),t=h(t),h(".spinner",t).addClass("is-active"),i={action:"save-widget",savewidgets:h("#_wpnonce_widgets").val(),sidebar:r},d&&(i.delete_widget=1),e+="&"+h.param(i),h.post(ajaxurl,e,function(e){var i=h("input.widget-id",t).val();d?(h("input.widget_number",t).val()||h("#available-widgets").find("input.widget-id").each(function(){h(this).val()===i&&h(this).closest("div.widget").show()}),a?(s=0,t.slideUp("fast",function(){h(this).remove(),wpWidgets.saveOrder(),delete n.dirtyWidgets[i]})):(t.remove(),delete n.dirtyWidgets[i],"wp_inactive_widgets"===r&&h("#inactive-widgets-control-remove").prop("disabled",!h("#wp_inactive_widgets .widget").length))):(h(".spinner").removeClass("is-active"),e&&2<e.length&&(h("div.widget-content",t).html(e),wpWidgets.appendTitle(t),t.find(".widget-control-save").prop("disabled",!0).val(wp.i18n.__("Saved")),t.removeClass("widget-dirty"),delete n.dirtyWidgets[i],v.trigger("widget-updated",[t]),"wp_inactive_widgets"===r&&h("#inactive-widgets-control-remove").prop("disabled",!h("#wp_inactive_widgets .widget").length))),s&&wpWidgets.saveOrder()}))},removeInactiveWidgets:function(){var e,i,t=h(".remove-inactive-widgets"),d=this;h(".spinner",t).addClass("is-active"),e={action:"delete-inactive-widgets",removeinactivewidgets:h("#_wpnonce_remove_inactive_widgets").val()},i=h.param(e),h.post(ajaxurl,i,function(){h("#wp_inactive_widgets .widget").each(function(){var e=h(this);delete d.dirtyWidgets[e.find("input.widget-id").val()],e.remove()}),h("#inactive-widgets-control-remove").prop("disabled",!0),h(".spinner",t).removeClass("is-active")})},appendTitle:function(e){var i=h('input[id*="-title"]',e).val()||"";i=i&&": "+i.replace(/<[^<>]+>/g,"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),h(e).children(".widget-top").children(".widget-title").children().children(".in-widget-title").html(i)},close:function(e){e.children(".widget-inside").slideUp("fast",function(){e.attr("style","").find(".widget-top button.widget-action").attr("aria-expanded","false").focus()})},addWidget:function(e){var i,t,d,a,s,n,r,o=e.find(".widgets-chooser-selected").data("sidebarId"),l=h("#"+o);t=(i=h("#available-widgets").find(".widget-in-question").clone()).attr("id"),d=i.find("input.add_new").val(),a=i.find("input.multi_number").val(),i.find(".widgets-chooser").remove(),"multi"===d?(i.html(i.html().replace(/<[^<>]+>/g,function(e){return e.replace(/__i__|%i%/g,a)})),i.attr("id",t.replace("__i__",a)),a++,h("#"+t).find("input.multi_number").val(a)):"single"===d&&(i.attr("id","new-"+t),h("#"+t).hide()),l.closest(".widgets-holder-wrap").removeClass("closed").find(".handlediv").attr("aria-expanded","true"),l.append(i),l.sortable("refresh"),wpWidgets.save(i,0,0,1),i.find("input.add_new").val(""),v.trigger("widget-added",[i]),n=(s=h(window).scrollTop())+h(window).height(),(r=l.offset()).bottom=r.top+l.outerHeight(),(s>r.bottom||n<r.top)&&h("html, body").animate({scrollTop:r.top-130},200),window.setTimeout(function(){i.find(".widget-title").trigger("click"),window.wp.a11y.speak(wp.i18n.__("Widget has been added to the selected sidebar"),"assertive")},250)},closeChooser:function(){var e=this,i=h("#available-widgets .widget-in-question");h(".widgets-chooser").slideUp(200,function(){h("#wpbody-content").append(this),e.clearWidgetSelection(),i.find(".widget-action").attr("aria-expanded","false").focus()})},clearWidgetSelection:function(){h("#widgets-left").removeClass("chooser"),h(".widget-in-question").removeClass("widget-in-question")},closeSidebar:function(e){this.hoveredSidebar.addClass("closed").find(".handlediv").attr("aria-expanded","false"),h(e.target).css("min-height",""),this.hoveredSidebar=null}},v.ready(function(){wpWidgets.init()})}(jQuery),wpWidgets.l10n=wpWidgets.l10n||{save:"",saved:"",saveAlert:"",widgetAdded:""},wpWidgets.l10n=window.wp.deprecateL10nObject("wpWidgets.l10n",wpWidgets.l10n);