(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4M6O":function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o;return function(){var r=this,i=arguments,a=function(){o=null,n||e.apply(r,i)},s=n&&!o;window.clearTimeout(o),o=setTimeout(a,t),s&&e.apply(r,i)}},t.isReactElement=a,t.shallowComparison=function e(t,n){var o,i=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(o=[]).concat.apply(o,(0,r.default)(i)).filter((function(o){if("object"==typeof t[o]){if(e(t[o],n[o]))return!0}else if(t[o]!==n[o]&&!a(t[o]))return!0})).length};var r=o(n("RIqP")),i=o(n("q1tI"));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},ORnI:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=void 0;var r=o(n("VUT9"));t.Disqus=r.default;var i=o(n("qASQ"));t.CommentCount=i.default;var a=o(n("vAJ3"));t.CommentEmbed=a.default;var s=r.default;t.default=s},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return o(e)||r(e)||i(e)||a()}},VUT9:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=void 0;var r=o(n("pVnL")),i=o(n("8OQS")),a=o(n("VbXa")),s=o(n("q1tI")),l=o(n("17x9")),u=n("4M6O"),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="jeromewu",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,u.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,u.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(s.default.Component);t.default=d,d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},ZhPi:function(e,t,n){var o=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},qASQ:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=void 0;var r=o(n("pVnL")),i=o(n("8OQS")),a=o(n("VbXa")),s=o(n("q1tI")),l=o(n("17x9")),u=n("4M6O"),d=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="jeromewu",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?d():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,o=(0,i.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},o,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(s.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},vAJ3:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=void 0;var r=o(n("VbXa")),i=o(n("q1tI")),a=o(n("17x9")),s=function(e){function t(){return e.apply(this,arguments)||this}(0,r.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(i.default.Component);t.default=s,s.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},s.propTypes={commentId:a.default.string.isRequired,width:a.default.number,height:a.default.number,showMedia:a.default.bool,showParentComment:a.default.bool}},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return d}));var o=n("q1tI"),r=n.n(o),i=n("Wbzz"),a=n("ORnI"),s=n("6Gk8"),l=n("Bl7J"),u=n("vrFN");t.default=function(e){var t,n=e.data,o=e.pageContext,d=e.location,c=n.markdownRemark,m=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=o.previous,p=o.next,h={url:""+(n.site.siteUrl+d.pathname),identifier:c.id,title:c.title};return r.a.createElement(l.a,{location:d,title:m},r.a.createElement(u.a,{title:c.frontmatter.title,description:c.frontmatter.description||c.excerpt}),r.a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.a.createElement("header",null,r.a.createElement("h1",{itemProp:"headline"},c.frontmatter.title),r.a.createElement("p",null,c.frontmatter.date)),r.a.createElement(a.CommentCount,{config:h,placeholder:"..."}),r.a.createElement("section",{dangerouslySetInnerHTML:{__html:c.html},itemProp:"articleBody"}),r.a.createElement("hr",null),r.a.createElement("footer",null,r.a.createElement(s.a,null))),r.a.createElement("nav",{className:"blog-post-nav"},r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,f&&r.a.createElement(i.Link,{to:f.fields.slug,rel:"prev"},"← ",f.frontmatter.title)),r.a.createElement("li",null,p&&r.a.createElement(i.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →")))),r.a.createElement(a.Disqus,{config:h}))};var d="10472337"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-759d6f952daf1ebcc15f.js.map