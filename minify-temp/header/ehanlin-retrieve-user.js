import{jQueryNoConflict}from"./jquery-no-conflict";let ajaxUtil=(o,t,e)=>("GET"!==o&&e&&(e=JSON.stringify(e)),jQueryNoConflict.ajax({type:o,cache:!1,crossDomain:!0,url:t,data:e,contentType:"application/json; charset=UTF-8",dataType:"json"})),logout=()=>{jQueryNoConflict("#logoutButton").on("click",()=>{ajaxUtil("PUT","/Users/521d946be4b0d765448570bd/!logout").then(()=>{window.location="https://"+window.location.hostname})})},logIn=()=>{ajaxUtil("GET","/ms-user-status/userStatus").then(o=>{let t=`<a href='/Users/${o.id}.html'> ${o.studentCard} ${o.name} </a>\n        <span style='color:#9B9B9B'> | </span>\n        <li><a id='logoutButton'>登出</a></li>\n        <span style='color:#9B9B9B'> | </span>`;jQueryNoConflict("#loginSuccess").append(t),jQueryNoConflict("#loginBotton").remove(),jQueryNoConflict("#register").remove(),logout()},()=>{jQueryNoConflict("ul.header-menu").removeAttr("style")}).then(()=>{jQueryNoConflict("ul.header-menu").removeAttr("style")})};export{jQueryNoConflict};export{logIn};