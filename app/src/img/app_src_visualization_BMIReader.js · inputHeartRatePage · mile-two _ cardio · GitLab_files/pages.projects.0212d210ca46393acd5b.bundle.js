webpackJsonp(["pages.projects"],{"./pages/projects/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./pages/projects/project.js"),o=n("./shortcuts_navigation.js");document.addEventListener("DOMContentLoaded",function(){new r.a,new o.a})},"./pages/projects/project.js":function(e,t,n){"use strict";(function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n("../../../node_modules/js-cookie/src/js.cookie.js"),a=n.n(o),s=n("./locale/index.js"),i=n("./lib/utils/url_utility.js"),c=n("./lib/utils/axios_utils.js"),u=n("./flash.js"),l=n("./project_select.js"),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(){function t(){r(this,t);var n=e("ul.clone-options-dropdown"),o=e("#project_clone"),s=e("a.clone-dropdown-btn span"),i=s.text().trim();i.length>0&&e("a:contains('"+i+"')",n).addClass("is-active"),e("a",n).on("click",function(t){var r=e(t.currentTarget),a=r.attr("href"),i=r.find(".dropdown-menu-inner-title").text();return t.preventDefault(),e(".is-active",n).not(r).removeClass("is-active"),r.toggleClass("is-active"),o.val(a),s.text(i),e("#modal-geo-info").data({cloneUrlSecondary:r.attr("href"),cloneUrlPrimary:r.data("primaryUrl")||""}),e(".clone").text(a)}),t.initRefSwitcher(),e(".project-refs-select").on("change",function(){return e(this).parents("form").submit()}),e(".hide-no-ssh-message").on("click",function(t){return a.a.set("hide_no_ssh_message","false"),e(this).parents(".no-ssh-key-message").remove(),t.preventDefault()}),e(".hide-no-password-message").on("click",function(t){return a.a.set("hide_no_password_message","false"),e(this).parents(".no-password-message").remove(),t.preventDefault()}),e(".hide-shared-runner-limit-message").on("click",function(t){var n=e(this).parents(".shared-runner-quota-message"),r=n.data("scope");a.a.set("hide_shared_runner_quota_message","false",{path:r}),n.remove(),t.preventDefault()}),t.projectSelectDropdown()}return d(t,null,[{key:"projectSelectDropdown",value:function(){Object(l.a)(),e(".project-item-select").on("click",function(n){return t.changeProject(e(n.currentTarget).val())})}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var t=document.createElement("li"),n=document.createElement("a");return n.href="#",e(".js-project-refs-dropdown").each(function(){var r,o;return r=e(this),o=r.data("selected"),r.glDropdown({data:function(e,t){c.a.get(r.data("refsUrl"),{params:{ref:r.data("ref"),search:e}}).then(function(e){var n=e.data;return t(n)}).catch(function(){return Object(u.a)(Object(s.a)("An error occurred while getting projects"))})},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:r.data("inputFieldName"),fieldName:r.data("fieldName"),renderRow:function(e){var r=t.cloneNode(!1);if(null!=e.header)r.className="dropdown-header",r.textContent=e.header;else{var a=n.cloneNode(!1);e===o&&(a.className="is-active"),a.textContent=e,a.dataset.ref=e,r.appendChild(a)}return r},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(t){if(t.e.preventDefault(),e('input[name="ref"]').length){var n=r.closest("form"),o=r.data("visit"),a=!!o||o,s=n.attr("action"),c=-1===s.indexOf("?")?"?":"&";a&&Object(i.g)(""+s+c+n.serialize())}}})})}}]),t}();t.a=f}).call(t,n("../../../node_modules/jquery/dist/jquery.js"))},"./project_select.js":function(e,t,n){"use strict";(function(e){function r(){e(".ajax-project-select").each(function(t,n){var r,s=e(n).data("simpleFilter")||!1;return this.groupId=e(n).data("groupId"),this.includeGroups=e(n).data("includeGroups"),this.allProjects=e(n).data("allProjects")||!1,this.orderBy=e(n).data("orderBy")||"id",this.withIssuesEnabled=e(n).data("withIssuesEnabled"),this.withMergeRequestsEnabled=e(n).data("withMergeRequestsEnabled"),r="Search for project",this.includeGroups&&(r+=" or group"),e(n).select2({placeholder:r,minimumInputLength:0,query:function(e){return function(t){var n,r;return n=function(e){var n;return n={results:e},t.callback(n)},r=e.includeGroups?function(e){var r;return r=function(t){var r;return r=t.concat(e),n(r)},o.a.groups(t.term,{},r)}:n,e.groupId?o.a.groupProjects(e.groupId,t.term,r):o.a.projects(t.term,{order_by:e.orderBy,with_issues_enabled:e.withIssuesEnabled,with_merge_requests_enabled:e.withMergeRequestsEnabled,membership:!e.allProjects},r)}}(this),id:function(e){return s?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},dropdownCssClass:"ajax-project-dropdown"}),s?n:new a.a(n)})}t.a=r;var o=n("./api.js"),a=n("./project_select_combo_button.js")}).call(t,n("../../../node_modules/jquery/dist/jquery.js"))},"./project_select_combo_button.js":function(e,t,n){"use strict";(function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n("./lib/utils/accessor.js"),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function t(n){r(this,t),this.projectSelectInput=e(n),this.newItemBtn=e(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}return a(t,[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",function(t){return e.openDropdown(t)}),this.newItemBtn.on("click",function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))}),this.projectSelectInput.on("change",function(){return e.selectProject()})}},{key:"initLocalStorage",value:function(){o.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(t){e(t.currentTarget).siblings(".project-item-select").select2("open")}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t=e.url+"/"+this.projectSelectInput.data("relativePath"),n=e.name,r={url:t,name:n};this.setNewItemBtnAttributes(r),this.setProjectInLocalStorage(r)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text(this.formattedText.defaultTextPrefix+" in "+e.name)):this.newItemBtn.text("Select project to create "+this.formattedText.presetTextSuffix)}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-"+this.resourceType.split("_").join("-").slice(0,-1),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}]),t}();t.a=s}).call(t,n("../../../node_modules/jquery/dist/jquery.js"))},"./shortcuts_navigation.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n("../../../node_modules/mousetrap/mousetrap.js"),i=n.n(s),c=n("./shortcuts_dashboard_navigation.js"),u=n("./shortcuts.js"),l=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.a.bind("g p",function(){return Object(c.a)(".shortcuts-project")}),i.a.bind("g e",function(){return Object(c.a)(".shortcuts-project-activity")}),i.a.bind("g f",function(){return Object(c.a)(".shortcuts-tree")}),i.a.bind("g c",function(){return Object(c.a)(".shortcuts-commits")}),i.a.bind("g j",function(){return Object(c.a)(".shortcuts-builds")}),i.a.bind("g n",function(){return Object(c.a)(".shortcuts-network")}),i.a.bind("g d",function(){return Object(c.a)(".shortcuts-repository-charts")}),i.a.bind("g i",function(){return Object(c.a)(".shortcuts-issues")}),i.a.bind("g b",function(){return Object(c.a)(".shortcuts-issue-boards")}),i.a.bind("g m",function(){return Object(c.a)(".shortcuts-merge_requests")}),i.a.bind("g t",function(){return Object(c.a)(".shortcuts-todos")}),i.a.bind("g w",function(){return Object(c.a)(".shortcuts-wiki")}),i.a.bind("g s",function(){return Object(c.a)(".shortcuts-snippets")}),i.a.bind("i",function(){return Object(c.a)(".shortcuts-new-issue")}),e.enabledHelp.push(".hidden-shortcut.project"),e}return a(t,e),t}(u.a);t.a=l}},["./pages/projects/index.js"]);
//# sourceMappingURL=pages.projects.0212d210ca46393acd5b.bundle.js.map