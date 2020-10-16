/*! This file is auto-generated */
!function(y){var k;k=window.wpNavMenu={options:{menuItemDepthPerLevel:30,globalMaxDepth:11,sortableItems:"> *",targetTolerance:0},menuList:void 0,targetList:void 0,menusChanged:!1,isRTL:!("undefined"==typeof isRtl||!isRtl),negateIfRTL:"undefined"!=typeof isRtl&&isRtl?-1:1,lastSearch:"",init:function(){k.menuList=y("#menu-to-edit"),k.targetList=k.menuList,this.jQueryExtensions(),this.attachMenuEditListeners(),this.attachQuickSearchListeners(),this.attachThemeLocationsListeners(),this.attachMenuSaveSubmitListeners(),this.attachTabsPanelListeners(),this.attachUnsavedChangesListener(),k.menuList.length&&this.initSortables(),menus.oneThemeLocationNoMenus&&y("#posttype-page").addSelectedToMenu(k.addMenuItemToBottom),this.initManageLocations(),this.initAccessibility(),this.initToggles(),this.initPreviewing()},jQueryExtensions:function(){y.fn.extend({menuItemDepth:function(){var e=k.isRTL?this.eq(0).css("margin-right"):this.eq(0).css("margin-left");return k.pxToDepth(e&&-1!=e.indexOf("px")?e.slice(0,-2):0)},updateDepthClass:function(t,n){return this.each(function(){var e=y(this);n=n||e.menuItemDepth(),y(this).removeClass("menu-item-depth-"+n).addClass("menu-item-depth-"+t)})},shiftDepthClass:function(i){return this.each(function(){var e=y(this),t=e.menuItemDepth(),n=t+i;e.removeClass("menu-item-depth-"+t).addClass("menu-item-depth-"+n),0===n&&e.find(".is-submenu").hide()})},childMenuItems:function(){var i=y();return this.each(function(){for(var e=y(this),t=e.menuItemDepth(),n=e.next(".menu-item");n.length&&n.menuItemDepth()>t;)i=i.add(n),n=n.next(".menu-item")}),i},shiftHorizontally:function(i){return this.each(function(){var e=y(this),t=e.menuItemDepth(),n=t+i;e.moveHorizontally(n,t)})},moveHorizontally:function(a,s){return this.each(function(){var e=y(this),t=e.childMenuItems(),i=a-s,n=e.find(".is-submenu");e.updateDepthClass(a,s).updateParentMenuItemDBId(),t&&t.each(function(){var e=y(this),t=e.menuItemDepth(),n=t+i;e.updateDepthClass(n,t).updateParentMenuItemDBId()}),0===a?n.hide():n.show()})},updateParentMenuItemDBId:function(){return this.each(function(){var e=y(this),t=e.find(".menu-item-data-parent-id"),n=parseInt(e.menuItemDepth(),10),i=n-1,a=e.prevAll(".menu-item-depth-"+i).first();0===n?t.val(0):t.val(a.find(".menu-item-data-db-id").val())})},hideAdvancedMenuItemFields:function(){return this.each(function(){var e=y(this);y(".hide-column-tog").not(":checked").each(function(){e.find(".field-"+y(this).val()).addClass("hidden-field")})})},addSelectedToMenu:function(s){return 0!==y("#menu-to-edit").length&&this.each(function(){var e=y(this),i={},t=menus.oneThemeLocationNoMenus&&0===e.find(".tabs-panel-active .categorychecklist li input:checked").length?e.find('#page-all li input[type="checkbox"]'):e.find(".tabs-panel-active .categorychecklist li input:checked"),a=/menu-item\[([^\]]*)/;if(s=s||k.addMenuItemToBottom,!t.length)return!1;e.find(".button-controls .spinner").addClass("is-active"),y(t).each(function(){var e=y(this),t=a.exec(e.attr("name")),n=void 0===t[1]?0:parseInt(t[1],10);this.className&&-1!=this.className.indexOf("add-to-top")&&(s=k.addMenuItemToTop),i[n]=e.closest("li").getItemData("add-menu-item",n)}),k.addItemToMenu(i,s,function(){t.prop("checked",!1),e.find(".button-controls .select-all").prop("checked",!1),e.find(".button-controls .spinner").removeClass("is-active")})})},getItemData:function(t,n){t=t||"menu-item";var i,a={},s=["menu-item-db-id","menu-item-object-id","menu-item-object","menu-item-parent-id","menu-item-position","menu-item-type","menu-item-title","menu-item-url","menu-item-description","menu-item-attr-title","menu-item-target","menu-item-classes","menu-item-xfn"];return n||"menu-item"!=t||(n=this.find(".menu-item-data-db-id").val()),n&&this.find("input").each(function(){var e;for(i=s.length;i--;)"menu-item"==t?e=s[i]+"["+n+"]":"add-menu-item"==t&&(e="menu-item["+n+"]["+s[i]+"]"),this.name&&e==this.name&&(a[s[i]]=this.value)}),a},setItemData:function(e,a,s){return a=a||"menu-item",s||"menu-item"!=a||(s=y(".menu-item-data-db-id",this).val()),s&&this.find("input").each(function(){var n,i=y(this);y.each(e,function(e,t){"menu-item"==a?n=e+"["+s+"]":"add-menu-item"==a&&(n="menu-item["+s+"]["+e+"]"),n==i.attr("name")&&i.val(t)})}),this}})},countMenuItems:function(e){return y(".menu-item-depth-"+e).length},moveMenuItem:function(e,t){var n,i,a,s=y("#menu-to-edit li"),m=s.length,u=e.parents("li.menu-item"),o=u.childMenuItems(),r=u.getItemData(),c=parseInt(u.menuItemDepth(),10),l=parseInt(u.index(),10),d=u.next(),h=d.childMenuItems(),f=parseInt(d.menuItemDepth(),10)+1,p=u.prev(),v=parseInt(p.menuItemDepth(),10),g=p.getItemData()["menu-item-db-id"];switch(t){case"up":if(i=l-1,0===l)break;0==i&&0!==c&&u.moveHorizontally(0,c),0!==v&&u.moveHorizontally(v,c),o?(n=u.add(o)).detach().insertBefore(s.eq(i)).updateParentMenuItemDBId():u.detach().insertBefore(s.eq(i)).updateParentMenuItemDBId();break;case"down":if(o){if(n=u.add(o),(h=0!==(d=s.eq(n.length+l)).childMenuItems().length)&&(a=parseInt(d.menuItemDepth(),10)+1,u.moveHorizontally(a,c)),m===l+n.length)break;n.detach().insertAfter(s.eq(l+n.length)).updateParentMenuItemDBId()}else{if(0!==h.length&&u.moveHorizontally(f,c),m===l+1)break;u.detach().insertAfter(s.eq(l+1)).updateParentMenuItemDBId()}break;case"top":if(0===l)break;o?(n=u.add(o)).detach().insertBefore(s.eq(0)).updateParentMenuItemDBId():u.detach().insertBefore(s.eq(0)).updateParentMenuItemDBId();break;case"left":if(0===c)break;u.shiftHorizontally(-1);break;case"right":if(0===l)break;if(r["menu-item-parent-id"]===g)break;u.shiftHorizontally(1)}e.focus(),k.registerChange(),k.refreshKeyboardAccessibility(),k.refreshAdvancedAccessibility()},initAccessibility:function(){var e=y("#menu-to-edit");k.refreshKeyboardAccessibility(),k.refreshAdvancedAccessibility(),e.on("mouseenter.refreshAccessibility focus.refreshAccessibility touchstart.refreshAccessibility",".menu-item",function(){k.refreshAdvancedAccessibilityOfItem(y(this).find("a.item-edit"))}),e.on("click","a.item-edit",function(){k.refreshAdvancedAccessibilityOfItem(y(this))}),e.on("click",".menus-move",function(){var e=y(this).data("dir");void 0!==e&&k.moveMenuItem(y(this).parents("li.menu-item").find("a.item-edit"),e)})},refreshAdvancedAccessibilityOfItem:function(e){if(!0===y(e).data("needs_accessibility_refresh")){var t,n,i,a,s,m,u,o,r,c=y(e),l=c.closest("li.menu-item").first(),d=l.menuItemDepth(),h=0===d,f=c.closest(".menu-item-handle").find(".menu-item-title").text(),p=parseInt(l.index(),10),v=h?d:parseInt(d-1,10),g=l.prevAll(".menu-item-depth-"+v).first().find(".menu-item-title").text(),b=l.prevAll(".menu-item-depth-"+d).first().find(".menu-item-title").text(),I=y("#menu-to-edit li").length,k=l.nextAll(".menu-item-depth-"+d).length;l.find(".field-move").toggle(1<I),0!==p&&(t=l.find(".menus-move-up")).attr("aria-label",menus.moveUp).css("display","inline"),0!==p&&h&&(t=l.find(".menus-move-top")).attr("aria-label",menus.moveToTop).css("display","inline"),p+1!==I&&0!==p&&(t=l.find(".menus-move-down")).attr("aria-label",menus.moveDown).css("display","inline"),0===p&&0!==k&&(t=l.find(".menus-move-down")).attr("aria-label",menus.moveDown).css("display","inline"),h||(t=l.find(".menus-move-left"),n=menus.outFrom.replace("%s",g),t.attr("aria-label",menus.moveOutFrom.replace("%s",g)).text(n).css("display","inline")),0!==p&&l.find(".menu-item-data-parent-id").val()!==l.prev().find(".menu-item-data-db-id").val()&&(t=l.find(".menus-move-right"),n=menus.under.replace("%s",b),t.attr("aria-label",menus.moveUnder.replace("%s",b)).text(n).css("display","inline")),s=h?(a=(i=y(".menu-item-depth-0")).index(l)+1,I=i.length,menus.menuFocus.replace("%1$s",f).replace("%2$d",a).replace("%3$d",I)):(u=(m=l.prevAll(".menu-item-depth-"+parseInt(d-1,10)).first()).find(".menu-item-data-db-id").val(),o=m.find(".menu-item-title").text(),r=y('.menu-item .menu-item-data-parent-id[value="'+u+'"]'),a=y(r.parents(".menu-item").get().reverse()).index(l)+1,menus.subMenuFocus.replace("%1$s",f).replace("%2$d",a).replace("%3$s",o)),c.attr("aria-label",s),c.data("needs_accessibility_refresh",!1)}},refreshAdvancedAccessibility:function(){y(".menu-item-settings .field-move .menus-move").hide(),y("a.item-edit").data("needs_accessibility_refresh",!0),y(".menu-item-edit-active a.item-edit").each(function(){k.refreshAdvancedAccessibilityOfItem(this)})},refreshKeyboardAccessibility:function(){y("a.item-edit").off("focus").on("focus",function(){y(this).off("keydown").on("keydown",function(e){var t,n=y(this),i=n.parents("li.menu-item").getItemData();if((37==e.which||38==e.which||39==e.which||40==e.which)&&(n.off("keydown"),1!==y("#menu-to-edit li").length)){switch(t={38:"up",40:"down",37:"left",39:"right"},y("body").hasClass("rtl")&&(t={38:"up",40:"down",39:"left",37:"right"}),t[e.which]){case"up":k.moveMenuItem(n,"up");break;case"down":k.moveMenuItem(n,"down");break;case"left":k.moveMenuItem(n,"left");break;case"right":k.moveMenuItem(n,"right")}return y("#edit-"+i["menu-item-db-id"]).focus(),!1}})})},initPreviewing:function(){y("#menu-to-edit").on("change input",".edit-menu-item-title",function(e){var t,n,i=y(e.currentTarget);t=i.val(),n=i.closest(".menu-item").find(".menu-item-title"),t?n.text(t).removeClass("no-title"):n.text(wp.i18n._x("(no label)","missing menu item navigation label")).addClass("no-title")})},initToggles:function(){postboxes.add_postbox_toggles("nav-menus"),columns.useCheckboxesForHidden(),columns.checked=function(e){y(".field-"+e).removeClass("hidden-field")},columns.unchecked=function(e){y(".field-"+e).addClass("hidden-field")},k.menuList.hideAdvancedMenuItemFields(),y(".hide-postbox-tog").click(function(){var e=y(".accordion-container li.accordion-section").filter(":hidden").map(function(){return this.id}).get().join(",");y.post(ajaxurl,{action:"closed-postboxes",hidden:e,closedpostboxesnonce:jQuery("#closedpostboxesnonce").val(),page:"nav-menus"})})},initSortables:function(){var m,s,u,n,o,r,c,l,d,h,f=0,p=k.menuList.offset().left,v=y("body"),g=function(){if(!v[0].className)return 0;var e=v[0].className.match(/menu-max-depth-(\d+)/);return e&&e[1]?parseInt(e[1],10):0}();function b(e){var t;n=e.placeholder.prev(".menu-item"),o=e.placeholder.next(".menu-item"),n[0]==e.item[0]&&(n=n.prev(".menu-item")),o[0]==e.item[0]&&(o=o.next(".menu-item")),r=n.length?n.offset().top+n.height():0,c=o.length?o.offset().top+o.height()/3:0,s=o.length?o.menuItemDepth():0,u=n.length?(t=n.menuItemDepth()+1)>k.options.globalMaxDepth?k.options.globalMaxDepth:t:0}function I(e,t){e.placeholder.updateDepthClass(t,f),f=t}0!==y("#menu-to-edit li").length&&y(".drag-instructions").show(),p+=k.isRTL?k.menuList.width():0,k.menuList.sortable({handle:".menu-item-handle",placeholder:"sortable-placeholder",items:k.options.sortableItems,start:function(e,t){var n,i,a,s;k.isRTL&&(t.item[0].style.right="auto"),d=t.item.children(".menu-item-transport"),m=t.item.menuItemDepth(),I(t,m),a=(t.item.next()[0]==t.placeholder[0]?t.item.next():t.item).childMenuItems(),d.append(a),n=d.outerHeight(),n+=0<n?1*t.placeholder.css("margin-top").slice(0,-2):0,n+=t.helper.outerHeight(),l=n,n-=2,t.placeholder.height(n),h=m,a.each(function(){var e=y(this).menuItemDepth();h=h<e?e:h}),i=t.helper.find(".menu-item-handle").outerWidth(),i+=k.depthToPx(h-m),i-=2,t.placeholder.width(i),(s=t.placeholder.next(".menu-item")).css("margin-top",l+"px"),t.placeholder.detach(),y(this).sortable("refresh"),t.item.after(t.placeholder),s.css("margin-top",0),b(t)},stop:function(e,t){var n,i,a=f-m;n=d.children().insertAfter(t.item),i=t.item.find(".item-title .is-submenu"),0<f?i.show():i.hide(),0!=a&&(t.item.updateDepthClass(f),n.shiftDepthClass(a),function(e){var t,n=g;{if(0===e)return;if(0<e)g<(t=h+e)&&(n=t);else if(e<0&&h==g)for(;!y(".menu-item-depth-"+n,k.menuList).length&&0<n;)n--}v.removeClass("menu-max-depth-"+g).addClass("menu-max-depth-"+n),g=n}(a)),k.registerChange(),t.item.updateParentMenuItemDBId(),t.item[0].style.top=0,k.isRTL&&(t.item[0].style.left="auto",t.item[0].style.right=0),k.refreshKeyboardAccessibility(),k.refreshAdvancedAccessibility()},change:function(e,t){t.placeholder.parent().hasClass("menu")||(n.length?n.after(t.placeholder):k.menuList.prepend(t.placeholder)),b(t)},sort:function(e,t){var n=t.helper.offset(),i=k.isRTL?n.left+t.helper.width():n.left,a=k.negateIfRTL*k.pxToDepth(i-p);u<a||n.top<r-k.options.targetTolerance?a=u:a<s&&(a=s),a!=f&&I(t,a),c&&n.top+l>c&&(o.after(t.placeholder),b(t),y(this).sortable("refreshPositions"))}})},initManageLocations:function(){y("#menu-locations-wrap form").submit(function(){window.onbeforeunload=null}),y(".menu-location-menus select").on("change",function(){var e=y(this).closest("tr").find(".locations-edit-menu-link");y(this).find("option:selected").data("orig")?e.show():e.hide()})},attachMenuEditListeners:function(){var t=this;y("#update-nav-menu").bind("click",function(e){if(e.target&&e.target.className){if(-1!=e.target.className.indexOf("item-edit"))return t.eventOnClickEditLink(e.target);if(-1!=e.target.className.indexOf("menu-save"))return t.eventOnClickMenuSave(e.target);if(-1!=e.target.className.indexOf("menu-delete"))return t.eventOnClickMenuDelete(e.target);if(-1!=e.target.className.indexOf("item-delete"))return t.eventOnClickMenuItemDelete(e.target);if(-1!=e.target.className.indexOf("item-cancel"))return t.eventOnClickCancelLink(e.target)}}),y("#menu-name").on("input",_.debounce(function(){var e=y(document.getElementById("menu-name")),t=e.val();t&&t.replace(/\s+/,"")?e.parent().removeClass("form-invalid"):e.parent().addClass("form-invalid")},500)),y('#add-custom-links input[type="text"]').keypress(function(e){y("#customlinkdiv").removeClass("form-invalid"),13===e.keyCode&&(e.preventDefault(),y("#submit-customlinkdiv").click())})},attachMenuSaveSubmitListeners:function(){y("#update-nav-menu").submit(function(){var e=y("#update-nav-menu").serializeArray();y('[name="nav-menu-data"]').val(JSON.stringify(e))})},attachThemeLocationsListeners:function(){var e=y("#nav-menu-theme-locations"),t={action:"menu-locations-save"};t["menu-settings-column-nonce"]=y("#menu-settings-column-nonce").val(),e.find('input[type="submit"]').click(function(){return e.find("select").each(function(){t[this.name]=y(this).val()}),e.find(".spinner").addClass("is-active"),y.post(ajaxurl,t,function(){e.find(".spinner").removeClass("is-active")}),!1})},attachQuickSearchListeners:function(){var t;y("#nav-menu-meta").on("submit",function(e){e.preventDefault()}),y("#nav-menu-meta").on("input",".quick-search",function(){var e=y(this);e.attr("autocomplete","off"),t&&clearTimeout(t),t=setTimeout(function(){k.updateQuickSearchResults(e)},500)}).on("blur",".quick-search",function(){k.lastSearch=""})},updateQuickSearchResults:function(e){var t,n,i=e.val();i.length<2||k.lastSearch==i||(k.lastSearch=i,t=e.parents(".tabs-panel"),n={action:"menu-quick-search","response-format":"markup",menu:y("#menu").val(),"menu-settings-column-nonce":y("#menu-settings-column-nonce").val(),q:i,type:e.attr("name")},y(".spinner",t).addClass("is-active"),y.post(ajaxurl,n,function(e){k.processQuickSearchQueryResponse(e,n,t)}))},addCustomLink:function(e){var t=y("#custom-menu-item-url").val().trim(),n=y("#custom-menu-item-name").val();if(e=e||k.addMenuItemToBottom,""===t||"https://"==t||"http://"==t)return y("#customlinkdiv").addClass("form-invalid"),!1;y(".customlinkdiv .spinner").addClass("is-active"),this.addLinkToMenu(t,n,e,function(){y(".customlinkdiv .spinner").removeClass("is-active"),y("#custom-menu-item-name").val("").blur(),y("#custom-menu-item-url").val("").attr("placeholder","https://")})},addLinkToMenu:function(e,t,n,i){n=n||k.addMenuItemToBottom,i=i||function(){},k.addItemToMenu({"-1":{"menu-item-type":"custom","menu-item-url":e,"menu-item-title":t}},n,i)},addItemToMenu:function(e,n,i){var a,t=y("#menu").val(),s=y("#menu-settings-column-nonce").val();n=n||function(){},i=i||function(){},a={action:"add-menu-item",menu:t,"menu-settings-column-nonce":s,"menu-item":e},y.post(ajaxurl,a,function(e){var t=y("#menu-instructions");e=y.trim(e),n(e,a),y("li.pending").hide().fadeIn("slow"),y(".drag-instructions").show(),!t.hasClass("menu-instructions-inactive")&&t.siblings().length&&t.addClass("menu-instructions-inactive"),i()})},addMenuItemToBottom:function(e){var t=y(e);t.hideAdvancedMenuItemFields().appendTo(k.targetList),k.refreshKeyboardAccessibility(),k.refreshAdvancedAccessibility(),y(document).trigger("menu-item-added",[t])},addMenuItemToTop:function(e){var t=y(e);t.hideAdvancedMenuItemFields().prependTo(k.targetList),k.refreshKeyboardAccessibility(),k.refreshAdvancedAccessibility(),y(document).trigger("menu-item-added",[t])},attachUnsavedChangesListener:function(){y("#menu-management input, #menu-management select, #menu-management, #menu-management textarea, .menu-location-menus select").change(function(){k.registerChange()}),0!==y("#menu-to-edit").length||0!==y(".menu-location-menus select").length?window.onbeforeunload=function(){if(k.menusChanged)return wp.i18n.__("The changes you made will be lost if you navigate away from this page.")}:y("#menu-settings-column").find("input,select").end().find("a").attr("href","#").unbind("click")},registerChange:function(){k.menusChanged=!0},attachTabsPanelListeners:function(){y("#menu-settings-column").bind("click",function(e){var t,n,i,a,s,m=y(e.target);if(m.hasClass("nav-tab-link"))i=m.data("type"),a=m.parents(".accordion-section-content").first(),y("input",a).prop("checked",!1),y(".tabs-panel-active",a).removeClass("tabs-panel-active").addClass("tabs-panel-inactive"),y("#"+i,a).removeClass("tabs-panel-inactive").addClass("tabs-panel-active"),y(".tabs",a).removeClass("tabs"),m.parent().addClass("tabs"),y(".quick-search",a).focus(),a.find(".tabs-panel-active .menu-item-title").length?a.removeClass("has-no-menu-item"):a.addClass("has-no-menu-item"),e.preventDefault();else if(m.hasClass("select-all"))(t=m.closest(".button-controls").data("items-type"))&&((s=y("#"+t+" .tabs-panel-active .menu-item-title input")).length!==s.filter(":checked").length||m.is(":checked")?m.is(":checked")&&s.prop("checked",!0):s.prop("checked",!1));else if(m.hasClass("menu-item-checkbox"))(t=m.closest(".tabs-panel-active").parent().attr("id"))&&(s=y("#"+t+" .tabs-panel-active .menu-item-title input"),n=y('.button-controls[data-items-type="'+t+'"] .select-all'),s.length!==s.filter(":checked").length||n.is(":checked")?n.is(":checked")&&n.prop("checked",!1):n.prop("checked",!0));else if(m.hasClass("submit-add-to-menu"))return k.registerChange(),e.target.id&&"submit-customlinkdiv"==e.target.id?k.addCustomLink(k.addMenuItemToBottom):e.target.id&&-1!=e.target.id.indexOf("submit-")&&y("#"+e.target.id.replace(/submit-/,"")).addSelectedToMenu(k.addMenuItemToBottom),!1}),y("#nav-menu-meta").on("click","a.page-numbers",function(){var i=y(this).closest(".inside");return y.post(ajaxurl,this.href.replace(/.*\?/,"").replace(/action=([^&]*)/,"")+"&action=menu-get-metabox",function(e){var t,n=y.parseJSON(e);-1!==e.indexOf("replace-id")&&(t=document.getElementById(n["replace-id"]),n.markup&&t&&i.html(n.markup))}),!1})},eventOnClickEditLink:function(e){var t,n,i=/#(.*)$/.exec(e.href);if(i&&i[1]&&0!==(n=(t=y("#"+i[1])).parent()).length)return n.hasClass("menu-item-edit-inactive")?(t.data("menu-item-data")||t.data("menu-item-data",t.getItemData()),t.slideDown("fast"),n.removeClass("menu-item-edit-inactive").addClass("menu-item-edit-active")):(t.slideUp("fast"),n.removeClass("menu-item-edit-active").addClass("menu-item-edit-inactive")),!1},eventOnClickCancelLink:function(e){var t=y(e).closest(".menu-item-settings"),n=y(e).closest(".menu-item");return n.removeClass("menu-item-edit-active").addClass("menu-item-edit-inactive"),t.setItemData(t.data("menu-item-data")).hide(),n.find(".menu-item-title").text(t.data("menu-item-data")["menu-item-title"]),!1},eventOnClickMenuSave:function(){var e="",t=y("#menu-name"),n=t.val();return n&&n.replace(/\s+/,"")?(y("#nav-menu-theme-locations select").each(function(){e+='<input type="hidden" name="'+this.name+'" value="'+y(this).val()+'" />'}),y("#update-nav-menu").append(e),k.menuList.find(".menu-item-data-position").val(function(e){return e+1}),!(window.onbeforeunload=null)):(t.parent().addClass("form-invalid"),!1)},eventOnClickMenuDelete:function(){return!!window.confirm(wp.i18n.__("You are about to permanently delete this menu.\n'Cancel' to stop, 'OK' to delete."))&&!(window.onbeforeunload=null)},eventOnClickMenuItemDelete:function(e){var t=parseInt(e.id.replace("delete-",""),10);return k.removeMenuItem(y("#menu-item-"+t)),k.registerChange(),!1},processQuickSearchQueryResponse:function(e,t,n){var i,a,s,m={},u=document.getElementById("nav-menu-meta"),o=/menu-item[(\[^]\]*/,r=y("<div>").html(e).find("li"),c=n.closest(".accordion-section-content"),l=c.find(".button-controls .select-all");if(!r.length)return y(".categorychecklist",n).html("<li><p>"+wp.i18n.__("No results found.")+"</p></li>"),y(".spinner",n).removeClass("is-active"),void c.addClass("has-no-menu-item");r.each(function(){if(s=y(this),(i=o.exec(s.html()))&&i[1]){for(a=i[1];u.elements["menu-item["+a+"][menu-item-type]"]||m[a];)a--;m[a]=!0,a!=i[1]&&s.html(s.html().replace(new RegExp("menu-item\\["+i[1]+"\\]","g"),"menu-item["+a+"]"))}}),y(".categorychecklist",n).html(r),y(".spinner",n).removeClass("is-active"),c.removeClass("has-no-menu-item"),l.is(":checked")&&l.prop("checked",!1)},removeMenuItem:function(t){var n=t.childMenuItems();y(document).trigger("menu-removing-item",[t]),t.addClass("deleting").animate({opacity:0,height:0},350,function(){var e=y("#menu-instructions");t.remove(),n.shiftDepthClass(-1).updateParentMenuItemDBId(),0===y("#menu-to-edit li").length&&(y(".drag-instructions").hide(),e.removeClass("menu-instructions-inactive")),k.refreshAdvancedAccessibility()})},depthToPx:function(e){return e*k.options.menuItemDepthPerLevel},pxToDepth:function(e){return Math.floor(e/k.options.menuItemDepthPerLevel)}},y(document).ready(function(){wpNavMenu.init()})}(jQuery);