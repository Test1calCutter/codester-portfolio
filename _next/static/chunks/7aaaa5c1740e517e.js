(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98879,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return n}});let a=e.r(71645),r="undefined"==typeof window,i=r?()=>{}:a.useLayoutEffect,s=r?()=>{}:a.useEffect;function n(e){let{headManager:t,reduceComponentsToState:o}=e;function n(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(o(e))}}return r&&(t?.mountedInstances?.add(e.children),n()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a={default:function(){return g},defaultHead:function(){return f}};for(var r in a)Object.defineProperty(o,r,{enumerable:!0,get:a[r]});let i=e.r(55682),s=e.r(90809),n=e.r(43476),l=s._(e.r(71645)),c=i._(e.r(98879)),u=e.r(42732);function f(){return[(0,n.jsx)("meta",{charSet:"utf-8"},"charset"),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let p=["name","httpEquiv","charSet","itemProp"];function d(e){let t,o,a,r;return e.reduce(m,[]).reverse().concat(f().reverse()).filter((t=new Set,o=new Set,a=new Set,r={},e=>{let i=!0,s=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){s=!0;let o=e.key.slice(e.key.indexOf("$")+1);t.has(o)?i=!1:t.add(o)}switch(e.type){case"title":case"base":o.has(e.type)?i=!1:o.add(e.type);break;case"meta":for(let t=0,o=p.length;t<o;t++){let o=p[t];if(e.props.hasOwnProperty(o))if("charSet"===o)a.has(o)?i=!1:a.add(o);else{let t=e.props[o],a=r[o]||new Set;("name"!==o||!s)&&a.has(t)?i=!1:(a.add(t),r[o]=a)}}}return i})).reverse().map((e,t)=>{let o=e.key||t;return l.default.cloneElement(e,{key:o})})}let g=function({children:e}){let t=(0,l.useContext)(u.HeadManagerContext);return(0,n.jsx)(c.default,{reduceComponentsToState:d,headManager:t,children:e})};("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},88143,(e,t,o)=>{"use strict";function a({widthInt:e,heightInt:t,blurWidth:o,blurHeight:a,blurDataURL:r,objectFit:i}){let s=o?40*o:e,n=a?40*a:t,l=s&&n?`viewBox='0 0 ${s} ${n}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${r}'/%3E%3C/svg%3E`}Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},87690,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return i},imageConfigDefault:function(){return s}};for(var r in a)Object.defineProperty(o,r,{enumerable:!0,get:a[r]});let i=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"getImgProps",{enumerable:!0,get:function(){return l}}),e.r(33525);let a=e.r(88143),r=e.r(87690),i=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l({src:e,sizes:t,unoptimized:o=!1,priority:l=!1,preload:c=!1,loading:u,className:f,quality:m,width:p,height:d,fill:g=!1,style:h,overrideSrc:v,onLoad:x,onLoadingComplete:_,placeholder:b="empty",blurDataURL:y,fetchPriority:w,decoding:S="async",layout:A,objectFit:C,objectPosition:B,lazyBoundary:k,lazyRoot:z,...R},F){var U;let E,O,M,{imgConf:P,showAltText:I,blurComplete:V,defaultLoader:D}=F,T=P||r.imageConfigDefault;if("allSizes"in T)E=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t),o=T.qualities?.sort((e,t)=>e-t);E={...T,allSizes:e,deviceSizes:t,qualities:o}}if(void 0===D)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let N=R.loader||D;delete R.loader,delete R.srcSet;let j="__next_img_default"in N;if(j){if("custom"===E.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=N;N=t=>{let{config:o,...a}=t;return e(a)}}if(A){"fill"===A&&(g=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(h={...h,...e});let o={responsive:"100vw",fill:"100vw"}[A];o&&!t&&(t=o)}let W="",G=n(p),Y=n(d);if((U=e)&&"object"==typeof U&&(s(U)||void 0!==U.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(O=t.blurWidth,M=t.blurHeight,y=y||t.blurDataURL,W=t.src,!g)if(G||Y){if(G&&!Y){let e=G/t.width;Y=Math.round(t.height*e)}else if(!G&&Y){let e=Y/t.height;G=Math.round(t.width*e)}}else G=t.width,Y=t.height}let Q=!l&&!c&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:W)||e.startsWith("data:")||e.startsWith("blob:"))&&(o=!0,Q=!1),E.unoptimized&&(o=!0),j&&!E.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(o=!0);let H=n(m),L=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:B}:{},I?{}:{color:"transparent"},h),X=V||"empty"===b?null:"blur"===b?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:G,heightInt:Y,blurWidth:O,blurHeight:M,blurDataURL:y||"",objectFit:L.objectFit})}")`:`url("${b}")`,q=i.includes(L.objectFit)?"fill"===L.objectFit?"100% 100%":"cover":L.objectFit,J=X?{backgroundSize:q,backgroundPosition:L.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},K=function({config:e,src:t,unoptimized:o,width:a,quality:r,sizes:i,loader:s}){if(o)return{src:t,srcSet:void 0,sizes:void 0};let{widths:n,kind:l}=function({deviceSizes:e,allSizes:t},o,a){if(a){let o=/(^|\s)(1?\d?\d)vw/g,r=[];for(let e;e=o.exec(a);)r.push(parseInt(e[2]));if(r.length){let o=.01*Math.min(...r);return{widths:t.filter(t=>t>=e[0]*o),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof o?{widths:e,kind:"w"}:{widths:[...new Set([o,2*o].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,i),c=n.length-1;return{sizes:i||"w"!==l?i:"100vw",srcSet:n.map((o,a)=>`${s({config:e,src:t,quality:r,width:o})} ${"w"===l?o:a+1}${l}`).join(", "),src:s({config:e,src:t,quality:r,width:n[c]})}}({config:E,src:e,unoptimized:o,width:G,quality:H,sizes:t,loader:N}),Z=Q?"lazy":u;return{props:{...R,loading:Z,fetchPriority:w,width:G,height:Y,decoding:S,className:f,style:{...L,...J},sizes:K.sizes,srcSet:K.srcSet,src:v||K.src},meta:{unoptimized:o,preload:c||l,placeholder:b,fill:g}}}},18556,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let a=e.r(55682)._(e.r(71645)),r=e.r(87690),i=a.default.createContext(r.imageConfigDefault)},65856,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,o)=>{"use strict";function a(e,t){let o=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-o)<Math.abs(e-o)?t:e,0):o}Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"findClosestQuality",{enumerable:!0,get:function(){return a}})},1948,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return i}});let a=e.r(70965);function r({config:e,src:t,width:o,quality:r}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let i=(0,a.findClosestQuality)(r,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${o}&q=${i}${t.startsWith("/_next/static/media/"),""}`}r.__next_img_default=!0;let i=r},18581,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"useMergedRef",{enumerable:!0,get:function(){return r}});let a=e.r(71645);function r(e,t){let o=(0,a.useRef)(null),r=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=o.current;e&&(o.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(o.current=i(e,a)),t&&(r.current=i(t,a))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let o=e(t);return"function"==typeof o?o:()=>e(null)}}("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},5500,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"Image",{enumerable:!0,get:function(){return b}});let a=e.r(55682),r=e.r(90809),i=e.r(43476),s=r._(e.r(71645)),n=a._(e.r(74080)),l=a._(e.r(25633)),c=e.r(8927),u=e.r(87690),f=e.r(18556);e.r(33525);let m=e.r(65856),p=a._(e.r(1948)),d=e.r(18581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/portfolio-codester/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,o,a,r,i,s){let n=e?.src;e&&e["data-loaded-src"]!==n&&(e["data-loaded-src"]=n,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&r(!0),o?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,r=!1;o.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function v(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let x=(0,s.forwardRef)(({src:e,srcSet:t,sizes:o,height:a,width:r,decoding:n,className:l,style:c,fetchPriority:u,placeholder:f,loading:m,unoptimized:p,fill:g,onLoadRef:x,onLoadingCompleteRef:_,setBlurComplete:b,setShowAltText:y,sizesInput:w,onLoad:S,onError:A,...C},B)=>{let k=(0,s.useCallback)(e=>{e&&(A&&(e.src=e.src),e.complete&&h(e,f,x,_,b,p,w))},[e,f,x,_,b,A,p,w]),z=(0,d.useMergedRef)(B,k);return(0,i.jsx)("img",{...C,...v(u),loading:m,width:r,height:a,decoding:n,"data-nimg":g?"fill":"1",className:l,style:c,sizes:o,srcSet:t,src:e,ref:z,onLoad:e=>{h(e.currentTarget,f,x,_,b,p,w)},onError:e=>{y(!0),"empty"!==f&&b(!0),A&&A(e)}})});function _({isAppRouter:e,imgAttributes:t}){let o={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...v(t.fetchPriority)};return e&&n.default.preload?(n.default.preload(t.src,o),null):(0,i.jsx)(l.default,{children:(0,i.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...o},"__nimg-"+t.src+t.srcSet+t.sizes)})}let b=(0,s.forwardRef)((e,t)=>{let o=(0,s.useContext)(m.RouterContext),a=(0,s.useContext)(f.ImageConfigContext),r=(0,s.useMemo)(()=>{let e=g||a||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),o=e.deviceSizes.sort((e,t)=>e-t),r=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:o,qualities:r,localPatterns:"undefined"==typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:n,onLoadingComplete:l}=e,d=(0,s.useRef)(n);(0,s.useEffect)(()=>{d.current=n},[n]);let h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let[v,b]=(0,s.useState)(!1),[y,w]=(0,s.useState)(!1),{props:S,meta:A}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:r,blurComplete:v,showAltText:y});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{...S,unoptimized:A.unoptimized,placeholder:A.placeholder,fill:A.fill,onLoadRef:d,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:w,sizesInput:e.sizes,ref:t}),A.preload?(0,i.jsx)(_,{isAppRouter:!o,imgAttributes:S}):null]})});("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},79474,(e,t,o)=>{"use strict";var a=e.r(71645).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;o.c=function(e){return a.H.useMemoCache(e)}},932,(e,t,o)=>{"use strict";t.exports=e.r(79474)},98183,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a={assign:function(){return l},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return n}};for(var r in a)Object.defineProperty(o,r,{enumerable:!0,get:a[r]});function i(e){let t={};for(let[o,a]of e.entries()){let e=t[o];void 0===e?t[o]=a:Array.isArray(e)?e.push(a):t[o]=[e,a]}return t}function s(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function n(e){let t=new URLSearchParams;for(let[o,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)t.append(o,s(e));else t.set(o,s(a));return t}function l(e,...t){for(let o of t){for(let t of o.keys())e.delete(t);for(let[t,a]of o.entries())e.append(t,a)}return e}},95057,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a={formatUrl:function(){return n},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var r in a)Object.defineProperty(o,r,{enumerable:!0,get:a[r]});let i=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function n(e){let{auth:t,hostname:o}=e,a=e.protocol||"",r=e.pathname||"",n=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:o&&(c=t+(~o.indexOf(":")?`[${o}]`:o),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||s.test(a))&&!1!==c?(c="//"+(c||""),r&&"/"!==r[0]&&(r="/"+r)):c||(c=""),n&&"#"!==n[0]&&(n="#"+n),u&&"?"!==u[0]&&(u="?"+u),r=r.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${a}${c}${r}${u}${n}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return n(e)}},18967,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a={DecodeError:function(){return v},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return b},NormalizeError:function(){return x},PageNotFoundError:function(){return _},SP:function(){return g},ST:function(){return h},WEB_VITALS:function(){return i},execOnce:function(){return s},getDisplayName:function(){return f},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return m},loadGetInitialProps:function(){return d},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var r in a)Object.defineProperty(o,r,{enumerable:!0,get:a[r]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function s(e){let t,o=!1;return(...a)=>(o||(o=!0,t=e(...a)),t)}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>n.test(e);function c(){let{protocol:e,hostname:t,port:o}=window.location;return`${e}//${t}${o?":"+o:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function m(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function d(e,t){let o=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await d(t.Component,t.ctx)}:{};let a=await e.getInitialProps(t);if(o&&m(o))return a;if(!a)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let g="undefined"!=typeof performance,h=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class v extends Error{}class x extends Error{}class _ extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class b extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"isLocalURL",{enumerable:!0,get:function(){return i}});let a=e.r(18967),r=e.r(52817);function i(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),o=new URL(e,t);return o.origin===t&&(0,r.hasBasePath)(o.pathname)}catch(e){return!1}}},84508,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},22016,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a={default:function(){return v},useLinkStatus:function(){return _}};for(var r in a)Object.defineProperty(o,r,{enumerable:!0,get:a[r]});let i=e.r(90809),s=e.r(43476),n=i._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),f=e.r(18967),m=e.r(5550);e.r(33525);let p=e.r(91949),d=e.r(73668),g=e.r(9396);function h(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function v(t){var o;let a,r,i,[l,v]=(0,n.useOptimistic)(p.IDLE_LINK_STATUS),_=(0,n.useRef)(null),{href:b,as:y,children:w,prefetch:S=null,passHref:A,replace:C,shallow:B,scroll:k,onClick:z,onMouseEnter:R,onTouchStart:F,legacyBehavior:U=!1,onNavigate:E,ref:O,unstable_dynamicOnHover:M,...P}=t;a=w,U&&("string"==typeof a||"number"==typeof a)&&(a=(0,s.jsx)("a",{children:a}));let I=n.default.useContext(c.AppRouterContext),V=!1!==S,D=!1!==S?null===(o=S)||"auto"===o?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,{href:T,as:N}=n.default.useMemo(()=>{let e=h(b);return{href:e,as:y?h(y):e}},[b,y]);if(U){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});r=n.default.Children.only(a)}let j=U?r&&"object"==typeof r&&r.ref:O,W=n.default.useCallback(e=>(null!==I&&(_.current=(0,p.mountLinkInstance)(e,T,I,D,V,v)),()=>{_.current&&((0,p.unmountLinkForCurrentNavigation)(_.current),_.current=null),(0,p.unmountPrefetchableInstance)(e)}),[V,T,I,D,v]),G={ref:(0,u.useMergedRef)(W,j),onClick(t){U||"function"!=typeof z||z(t),U&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),!I||t.defaultPrevented||function(t,o,a,r,i,s,l){if("undefined"!=typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,d.isLocalURL)(o)){i&&(t.preventDefault(),location.replace(o));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(99781);n.default.startTransition(()=>{f(a||o,i?"replace":"push",s??!0,r.current)})}}(t,T,N,_,C,k,E)},onMouseEnter(e){U||"function"!=typeof R||R(e),U&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&V&&(0,p.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){U||"function"!=typeof F||F(e),U&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&V&&(0,p.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,f.isAbsoluteUrl)(N)?G.href=N:U&&!A&&("a"!==r.type||"href"in r.props)||(G.href=(0,m.addBasePath)(N)),i=U?n.default.cloneElement(r,G):(0,s.jsx)("a",{...P,...G,children:a}),(0,s.jsx)(x.Provider,{value:l,children:i})}e.r(84508);let x=(0,n.createContext)(p.IDLE_LINK_STATUS),_=()=>(0,n.useContext)(x);("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},75157,e=>{"use strict";let t=(e=new Map,t=null,o)=>({nextPart:e,validators:t,classGroupId:o}),o=[],a=(e,t,o)=>{if(0==e.length-t)return o.classGroupId;let r=e[t],i=o.nextPart.get(r);if(i){let o=a(e,t+1,i);if(o)return o}let s=o.validators;if(null===s)return;let n=0===t?e.join("-"):e.slice(t).join("-"),l=s.length;for(let e=0;e<l;e++){let t=s[e];if(t.validator(n))return t.classGroupId}},r=(e,o)=>{let a=t();for(let t in e)i(e[t],a,t,o);return a},i=(e,t,o,a)=>{let r=e.length;for(let i=0;i<r;i++)s(e[i],t,o,a)},s=(e,t,o,a)=>{"string"==typeof e?n(e,t,o):"function"==typeof e?l(e,t,o,a):c(e,t,o,a)},n=(e,t,o)=>{(""===e?t:u(t,e)).classGroupId=o},l=(e,t,o,a)=>{f(e)?i(e(a),t,o,a):(null===t.validators&&(t.validators=[]),t.validators.push({classGroupId:o,validator:e}))},c=(e,t,o,a)=>{let r=Object.entries(e),s=r.length;for(let e=0;e<s;e++){let[s,n]=r[e];i(n,u(t,s),o,a)}},u=(e,o)=>{let a=e,r=o.split("-"),i=r.length;for(let e=0;e<i;e++){let o=r[e],i=a.nextPart.get(o);i||(i=t(),a.nextPart.set(o,i)),a=i}return a},f=e=>"isThemeGetter"in e&&!0===e.isThemeGetter,m=[],p=(e,t,o,a,r)=>({modifiers:e,hasImportantModifier:t,baseClassName:o,maybePostfixModifierPosition:a,isExternal:r}),d=/\s+/,g=e=>{let t;if("string"==typeof e)return e;let o="";for(let a=0;a<e.length;a++)e[a]&&(t=g(e[a]))&&(o&&(o+=" "),o+=t);return o},h=[],v=e=>{let t=t=>t[e]||h;return t.isThemeGetter=!0,t},x=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,_=/^\((?:(\w[\w-]*):)?(.+)\)$/i,b=/^\d+\/\d+$/,y=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,w=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,S=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,A=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,C=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,B=e=>b.test(e),k=e=>!!e&&!Number.isNaN(Number(e)),z=e=>!!e&&Number.isInteger(Number(e)),R=e=>e.endsWith("%")&&k(e.slice(0,-1)),F=e=>y.test(e),U=()=>!0,E=e=>w.test(e)&&!S.test(e),O=()=>!1,M=e=>A.test(e),P=e=>C.test(e),I=e=>!D(e)&&!Y(e),V=e=>K(e,et,O),D=e=>x.test(e),T=e=>K(e,eo,E),N=e=>K(e,ea,k),j=e=>K(e,$,O),W=e=>K(e,ee,P),G=e=>K(e,ei,M),Y=e=>_.test(e),Q=e=>Z(e,eo),H=e=>Z(e,er),L=e=>Z(e,$),X=e=>Z(e,et),q=e=>Z(e,ee),J=e=>Z(e,ei,!0),K=(e,t,o)=>{let a=x.exec(e);return!!a&&(a[1]?t(a[1]):o(a[2]))},Z=(e,t,o=!1)=>{let a=_.exec(e);return!!a&&(a[1]?t(a[1]):o)},$=e=>"position"===e||"percentage"===e,ee=e=>"image"===e||"url"===e,et=e=>"length"===e||"size"===e||"bg-size"===e,eo=e=>"length"===e,ea=e=>"number"===e,er=e=>"family-name"===e,ei=e=>"shadow"===e,es=((e,...t)=>{let i,s,n,l,c=e=>{let t=s(e);if(t)return t;let o=((e,t)=>{let{parseClassName:o,getClassGroupId:a,getConflictingClassGroupIds:r,sortModifiers:i}=t,s=[],n=e.trim().split(d),l="";for(let e=n.length-1;e>=0;e-=1){let t=n[e],{isExternal:c,modifiers:u,hasImportantModifier:f,baseClassName:m,maybePostfixModifierPosition:p}=o(t);if(c){l=t+(l.length>0?" "+l:l);continue}let d=!!p,g=a(d?m.substring(0,p):m);if(!g){if(!d||!(g=a(m))){l=t+(l.length>0?" "+l:l);continue}d=!1}let h=0===u.length?"":1===u.length?u[0]:i(u).join(":"),v=f?h+"!":h,x=v+g;if(s.indexOf(x)>-1)continue;s.push(x);let _=r(g,d);for(let e=0;e<_.length;++e){let t=_[e];s.push(v+t)}l=t+(l.length>0?" "+l:l)}return l})(e,i);return n(e,o),o};return l=u=>{var f;let d;return s=(i={cache:(e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,o=Object.create(null),a=Object.create(null),r=(r,i)=>{o[r]=i,++t>e&&(t=0,a=o,o=Object.create(null))};return{get(e){let t=o[e];return void 0!==t?t:void 0!==(t=a[e])?(r(e,t),t):void 0},set(e,t){e in o?o[e]=t:r(e,t)}}})((f=t.reduce((e,t)=>t(e),e())).cacheSize),parseClassName:(e=>{let{prefix:t,experimentalParseClassName:o}=e,a=e=>{let t,o=[],a=0,r=0,i=0,s=e.length;for(let n=0;n<s;n++){let s=e[n];if(0===a&&0===r){if(":"===s){o.push(e.slice(i,n)),i=n+1;continue}if("/"===s){t=n;continue}}"["===s?a++:"]"===s?a--:"("===s?r++:")"===s&&r--}let n=0===o.length?e:e.slice(i),l=n,c=!1;return n.endsWith("!")?(l=n.slice(0,-1),c=!0):n.startsWith("!")&&(l=n.slice(1),c=!0),p(o,c,l,t&&t>i?t-i:void 0)};if(t){let e=t+":",o=a;a=t=>t.startsWith(e)?o(t.slice(e.length)):p(m,!1,t,void 0,!0)}if(o){let e=a;a=t=>o({className:t,parseClassName:e})}return a})(f),sortModifiers:(d=new Map,f.orderSensitiveModifiers.forEach((e,t)=>{d.set(e,1e6+t)}),e=>{let t=[],o=[];for(let a=0;a<e.length;a++){let r=e[a],i="["===r[0],s=d.has(r);i||s?(o.length>0&&(o.sort(),t.push(...o),o=[]),t.push(r)):o.push(r)}return o.length>0&&(o.sort(),t.push(...o)),t}),...(e=>{let t=(e=>{let{theme:t,classGroups:o}=e;return r(o,t)})(e),{conflictingClassGroups:i,conflictingClassGroupModifiers:s}=e;return{getClassGroupId:e=>{if(e.startsWith("[")&&e.endsWith("]")){var o;let t,a,r;return -1===(o=e).slice(1,-1).indexOf(":")?void 0:(a=(t=o.slice(1,-1)).indexOf(":"),(r=t.slice(0,a))?"arbitrary.."+r:void 0)}let r=e.split("-"),i=+(""===r[0]&&r.length>1);return a(r,i,t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=s[e],a=i[e];if(t){if(a){let e=Array(a.length+t.length);for(let t=0;t<a.length;t++)e[t]=a[t];for(let o=0;o<t.length;o++)e[a.length+o]=t[o];return e}return t}return a||o}return i[e]||o}}})(f)}).cache.get,n=i.cache.set,l=c,c(u)},(...e)=>l(((...e)=>{let t,o,a=0,r="";for(;a<e.length;)(t=e[a++])&&(o=g(t))&&(r&&(r+=" "),r+=o);return r})(...e))})(()=>{let e=v("color"),t=v("font"),o=v("text"),a=v("font-weight"),r=v("tracking"),i=v("leading"),s=v("breakpoint"),n=v("container"),l=v("spacing"),c=v("radius"),u=v("shadow"),f=v("inset-shadow"),m=v("text-shadow"),p=v("drop-shadow"),d=v("blur"),g=v("perspective"),h=v("aspect"),x=v("ease"),_=v("animate"),b=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...y(),Y,D],S=()=>["auto","hidden","clip","visible","scroll"],A=()=>["auto","contain","none"],C=()=>[Y,D,l],E=()=>[B,"full","auto",...C()],O=()=>[z,"none","subgrid",Y,D],M=()=>["auto",{span:["full",z,Y,D]},z,Y,D],P=()=>[z,"auto",Y,D],K=()=>["auto","min","max","fr",Y,D],Z=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],$=()=>["start","end","center","stretch","center-safe","end-safe"],ee=()=>["auto",...C()],et=()=>[B,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...C()],eo=()=>[e,Y,D],ea=()=>[...y(),L,j,{position:[Y,D]}],er=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ei=()=>["auto","cover","contain",X,V,{size:[Y,D]}],es=()=>[R,Q,T],en=()=>["","none","full",c,Y,D],el=()=>["",k,Q,T],ec=()=>["solid","dashed","dotted","double"],eu=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ef=()=>[k,R,L,j],em=()=>["","none",d,Y,D],ep=()=>["none",k,Y,D],ed=()=>["none",k,Y,D],eg=()=>[k,Y,D],eh=()=>[B,"full",...C()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[F],breakpoint:[F],color:[U],container:[F],"drop-shadow":[F],ease:["in","out","in-out"],font:[I],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[F],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[F],shadow:[F],spacing:["px",k],text:[F],"text-shadow":[F],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",B,D,Y,h]}],container:["container"],columns:[{columns:[k,D,Y,n]}],"break-after":[{"break-after":b()}],"break-before":[{"break-before":b()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:E()}],"inset-x":[{"inset-x":E()}],"inset-y":[{"inset-y":E()}],start:[{start:E()}],end:[{end:E()}],top:[{top:E()}],right:[{right:E()}],bottom:[{bottom:E()}],left:[{left:E()}],visibility:["visible","invisible","collapse"],z:[{z:[z,"auto",Y,D]}],basis:[{basis:[B,"full","auto",n,...C()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[k,B,"auto","initial","none",D]}],grow:[{grow:["",k,Y,D]}],shrink:[{shrink:["",k,Y,D]}],order:[{order:[z,"first","last","none",Y,D]}],"grid-cols":[{"grid-cols":O()}],"col-start-end":[{col:M()}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":O()}],"row-start-end":[{row:M()}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":K()}],"auto-rows":[{"auto-rows":K()}],gap:[{gap:C()}],"gap-x":[{"gap-x":C()}],"gap-y":[{"gap-y":C()}],"justify-content":[{justify:[...Z(),"normal"]}],"justify-items":[{"justify-items":[...$(),"normal"]}],"justify-self":[{"justify-self":["auto",...$()]}],"align-content":[{content:["normal",...Z()]}],"align-items":[{items:[...$(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...$(),{baseline:["","last"]}]}],"place-content":[{"place-content":Z()}],"place-items":[{"place-items":[...$(),"baseline"]}],"place-self":[{"place-self":["auto",...$()]}],p:[{p:C()}],px:[{px:C()}],py:[{py:C()}],ps:[{ps:C()}],pe:[{pe:C()}],pt:[{pt:C()}],pr:[{pr:C()}],pb:[{pb:C()}],pl:[{pl:C()}],m:[{m:ee()}],mx:[{mx:ee()}],my:[{my:ee()}],ms:[{ms:ee()}],me:[{me:ee()}],mt:[{mt:ee()}],mr:[{mr:ee()}],mb:[{mb:ee()}],ml:[{ml:ee()}],"space-x":[{"space-x":C()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":C()}],"space-y-reverse":["space-y-reverse"],size:[{size:et()}],w:[{w:[n,"screen",...et()]}],"min-w":[{"min-w":[n,"screen","none",...et()]}],"max-w":[{"max-w":[n,"screen","none","prose",{screen:[s]},...et()]}],h:[{h:["screen","lh",...et()]}],"min-h":[{"min-h":["screen","lh","none",...et()]}],"max-h":[{"max-h":["screen","lh",...et()]}],"font-size":[{text:["base",o,Q,T]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,Y,N]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",R,D]}],"font-family":[{font:[H,D,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,Y,D]}],"line-clamp":[{"line-clamp":[k,"none",Y,N]}],leading:[{leading:[i,...C()]}],"list-image":[{"list-image":["none",Y,D]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Y,D]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:eo()}],"text-color":[{text:eo()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ec(),"wavy"]}],"text-decoration-thickness":[{decoration:[k,"from-font","auto",Y,T]}],"text-decoration-color":[{decoration:eo()}],"underline-offset":[{"underline-offset":[k,"auto",Y,D]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:C()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Y,D]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Y,D]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ea()}],"bg-repeat":[{bg:er()}],"bg-size":[{bg:ei()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},z,Y,D],radial:["",Y,D],conic:[z,Y,D]},q,W]}],"bg-color":[{bg:eo()}],"gradient-from-pos":[{from:es()}],"gradient-via-pos":[{via:es()}],"gradient-to-pos":[{to:es()}],"gradient-from":[{from:eo()}],"gradient-via":[{via:eo()}],"gradient-to":[{to:eo()}],rounded:[{rounded:en()}],"rounded-s":[{"rounded-s":en()}],"rounded-e":[{"rounded-e":en()}],"rounded-t":[{"rounded-t":en()}],"rounded-r":[{"rounded-r":en()}],"rounded-b":[{"rounded-b":en()}],"rounded-l":[{"rounded-l":en()}],"rounded-ss":[{"rounded-ss":en()}],"rounded-se":[{"rounded-se":en()}],"rounded-ee":[{"rounded-ee":en()}],"rounded-es":[{"rounded-es":en()}],"rounded-tl":[{"rounded-tl":en()}],"rounded-tr":[{"rounded-tr":en()}],"rounded-br":[{"rounded-br":en()}],"rounded-bl":[{"rounded-bl":en()}],"border-w":[{border:el()}],"border-w-x":[{"border-x":el()}],"border-w-y":[{"border-y":el()}],"border-w-s":[{"border-s":el()}],"border-w-e":[{"border-e":el()}],"border-w-t":[{"border-t":el()}],"border-w-r":[{"border-r":el()}],"border-w-b":[{"border-b":el()}],"border-w-l":[{"border-l":el()}],"divide-x":[{"divide-x":el()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":el()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ec(),"hidden","none"]}],"divide-style":[{divide:[...ec(),"hidden","none"]}],"border-color":[{border:eo()}],"border-color-x":[{"border-x":eo()}],"border-color-y":[{"border-y":eo()}],"border-color-s":[{"border-s":eo()}],"border-color-e":[{"border-e":eo()}],"border-color-t":[{"border-t":eo()}],"border-color-r":[{"border-r":eo()}],"border-color-b":[{"border-b":eo()}],"border-color-l":[{"border-l":eo()}],"divide-color":[{divide:eo()}],"outline-style":[{outline:[...ec(),"none","hidden"]}],"outline-offset":[{"outline-offset":[k,Y,D]}],"outline-w":[{outline:["",k,Q,T]}],"outline-color":[{outline:eo()}],shadow:[{shadow:["","none",u,J,G]}],"shadow-color":[{shadow:eo()}],"inset-shadow":[{"inset-shadow":["none",f,J,G]}],"inset-shadow-color":[{"inset-shadow":eo()}],"ring-w":[{ring:el()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:eo()}],"ring-offset-w":[{"ring-offset":[k,T]}],"ring-offset-color":[{"ring-offset":eo()}],"inset-ring-w":[{"inset-ring":el()}],"inset-ring-color":[{"inset-ring":eo()}],"text-shadow":[{"text-shadow":["none",m,J,G]}],"text-shadow-color":[{"text-shadow":eo()}],opacity:[{opacity:[k,Y,D]}],"mix-blend":[{"mix-blend":[...eu(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":eu()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[k]}],"mask-image-linear-from-pos":[{"mask-linear-from":ef()}],"mask-image-linear-to-pos":[{"mask-linear-to":ef()}],"mask-image-linear-from-color":[{"mask-linear-from":eo()}],"mask-image-linear-to-color":[{"mask-linear-to":eo()}],"mask-image-t-from-pos":[{"mask-t-from":ef()}],"mask-image-t-to-pos":[{"mask-t-to":ef()}],"mask-image-t-from-color":[{"mask-t-from":eo()}],"mask-image-t-to-color":[{"mask-t-to":eo()}],"mask-image-r-from-pos":[{"mask-r-from":ef()}],"mask-image-r-to-pos":[{"mask-r-to":ef()}],"mask-image-r-from-color":[{"mask-r-from":eo()}],"mask-image-r-to-color":[{"mask-r-to":eo()}],"mask-image-b-from-pos":[{"mask-b-from":ef()}],"mask-image-b-to-pos":[{"mask-b-to":ef()}],"mask-image-b-from-color":[{"mask-b-from":eo()}],"mask-image-b-to-color":[{"mask-b-to":eo()}],"mask-image-l-from-pos":[{"mask-l-from":ef()}],"mask-image-l-to-pos":[{"mask-l-to":ef()}],"mask-image-l-from-color":[{"mask-l-from":eo()}],"mask-image-l-to-color":[{"mask-l-to":eo()}],"mask-image-x-from-pos":[{"mask-x-from":ef()}],"mask-image-x-to-pos":[{"mask-x-to":ef()}],"mask-image-x-from-color":[{"mask-x-from":eo()}],"mask-image-x-to-color":[{"mask-x-to":eo()}],"mask-image-y-from-pos":[{"mask-y-from":ef()}],"mask-image-y-to-pos":[{"mask-y-to":ef()}],"mask-image-y-from-color":[{"mask-y-from":eo()}],"mask-image-y-to-color":[{"mask-y-to":eo()}],"mask-image-radial":[{"mask-radial":[Y,D]}],"mask-image-radial-from-pos":[{"mask-radial-from":ef()}],"mask-image-radial-to-pos":[{"mask-radial-to":ef()}],"mask-image-radial-from-color":[{"mask-radial-from":eo()}],"mask-image-radial-to-color":[{"mask-radial-to":eo()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":y()}],"mask-image-conic-pos":[{"mask-conic":[k]}],"mask-image-conic-from-pos":[{"mask-conic-from":ef()}],"mask-image-conic-to-pos":[{"mask-conic-to":ef()}],"mask-image-conic-from-color":[{"mask-conic-from":eo()}],"mask-image-conic-to-color":[{"mask-conic-to":eo()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ea()}],"mask-repeat":[{mask:er()}],"mask-size":[{mask:ei()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Y,D]}],filter:[{filter:["","none",Y,D]}],blur:[{blur:em()}],brightness:[{brightness:[k,Y,D]}],contrast:[{contrast:[k,Y,D]}],"drop-shadow":[{"drop-shadow":["","none",p,J,G]}],"drop-shadow-color":[{"drop-shadow":eo()}],grayscale:[{grayscale:["",k,Y,D]}],"hue-rotate":[{"hue-rotate":[k,Y,D]}],invert:[{invert:["",k,Y,D]}],saturate:[{saturate:[k,Y,D]}],sepia:[{sepia:["",k,Y,D]}],"backdrop-filter":[{"backdrop-filter":["","none",Y,D]}],"backdrop-blur":[{"backdrop-blur":em()}],"backdrop-brightness":[{"backdrop-brightness":[k,Y,D]}],"backdrop-contrast":[{"backdrop-contrast":[k,Y,D]}],"backdrop-grayscale":[{"backdrop-grayscale":["",k,Y,D]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[k,Y,D]}],"backdrop-invert":[{"backdrop-invert":["",k,Y,D]}],"backdrop-opacity":[{"backdrop-opacity":[k,Y,D]}],"backdrop-saturate":[{"backdrop-saturate":[k,Y,D]}],"backdrop-sepia":[{"backdrop-sepia":["",k,Y,D]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":C()}],"border-spacing-x":[{"border-spacing-x":C()}],"border-spacing-y":[{"border-spacing-y":C()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Y,D]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[k,"initial",Y,D]}],ease:[{ease:["linear","initial",x,Y,D]}],delay:[{delay:[k,Y,D]}],animate:[{animate:["none",_,Y,D]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[g,Y,D]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:ep()}],"rotate-x":[{"rotate-x":ep()}],"rotate-y":[{"rotate-y":ep()}],"rotate-z":[{"rotate-z":ep()}],scale:[{scale:ed()}],"scale-x":[{"scale-x":ed()}],"scale-y":[{"scale-y":ed()}],"scale-z":[{"scale-z":ed()}],"scale-3d":["scale-3d"],skew:[{skew:eg()}],"skew-x":[{"skew-x":eg()}],"skew-y":[{"skew-y":eg()}],transform:[{transform:[Y,D,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eh()}],"translate-x":[{"translate-x":eh()}],"translate-y":[{"translate-y":eh()}],"translate-z":[{"translate-z":eh()}],"translate-none":["translate-none"],accent:[{accent:eo()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:eo()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Y,D]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Y,D]}],fill:[{fill:["none",...eo()]}],"stroke-w":[{stroke:[k,Q,T,N]}],stroke:[{stroke:["none",...eo()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}});function en(...e){return es(function(){for(var e,t,o=0,a="",r=arguments.length;o<r;o++)(e=arguments[o])&&(t=function e(t){var o,a,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t)){var i=t.length;for(o=0;o<i;o++)t[o]&&(a=e(t[o]))&&(r&&(r+=" "),r+=a)}else for(a in t)t[a]&&(r&&(r+=" "),r+=a);return r}(e))&&(a&&(a+=" "),a+=t);return a}(e))}e.s(["cn",()=>en],75157)},95272,26726,37881,573,31967,21449,45426,93344,27064,e=>{"use strict";var t=e.i(71645);let o=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;

uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;

uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

uniform float u_pxSize;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_objectHelperBox;

out vec2 v_responsiveUV;
out vec2 v_responsiveBoxSize;
out vec2 v_responsiveHelperBox;
out vec2 v_responsiveBoxGivenSize;

out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_patternHelperBox;

out vec2 v_imageUV;

// #define ADD_HELPERS

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================
  // Sizing api for graphic objects with fixed ratio
  // (currently supports only ratio = 1)

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  #ifdef ADD_HELPERS
  v_objectHelperBox = uv;
  v_objectHelperBox *= objectWorldScale;
  v_objectHelperBox += boxOrigin * (objectWorldScale - 1.);
  #endif

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;


  // ===================================================


  // ===================================================
  // Sizing api for graphic objects with either givenBoxSize ratio or canvas ratio.
  // Full-screen mode available with u_worldWidth = u_worldHeight = 0

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  v_responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / v_responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================


  // ===================================================
  // Sizing api for patterns
  // (treating graphics as a image u_worldWidth x u_worldHeight size)

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  #ifdef ADD_HELPERS
  v_patternHelperBox = uv;
  v_patternHelperBox *= patternBoxScale;
  v_patternHelperBox += boxOrigin * (patternBoxScale - 1.);
  #endif

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================


  // ===================================================
  // Sizing api for images

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  #ifdef ADD_HELPERS
  vec2 imageHelperBox = uv;
  imageHelperBox *= imageBoxScale;
  imageHelperBox += boxOrigin * (imageBoxScale - 1.);
  #endif

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;

  // ===================================================

}`,a=8294400;class r{parentElement;canvasElement;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;currentFrame=0;speed=0;currentSpeed=0;providedUniforms;mipmaps=[];hasBeenDisposed=!1;resolutionChanged=!0;textures=new Map;minPixelRatio;maxPixelCount;isSafari=(function(){let e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&!e.includes("android")})();uniformCache={};textureUnitMap=new Map;constructor(e,t,o,r,i=0,n=0,l=2,c=a,u=[]){if(e instanceof HTMLElement)this.parentElement=e;else throw Error("Paper Shaders: parent element must be an HTMLElement");if(!document.querySelector("style[data-paper-shader]")){const e=document.createElement("style");e.innerHTML=s,e.setAttribute("data-paper-shader",""),document.head.prepend(e)}const f=document.createElement("canvas");this.canvasElement=f,this.parentElement.prepend(f),this.fragmentShader=t,this.providedUniforms=o,this.mipmaps=u,this.currentFrame=n,this.minPixelRatio=l,this.maxPixelCount=c;const m=f.getContext("webgl2",r);if(!m)throw Error("Paper Shaders: WebGL is not supported in this browser");this.gl=m,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport?.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(i),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,document.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}initProgram=()=>{let e=function(e,t,o){let a=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),r=a?a.precision:null;r&&r<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),o=o.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));let s=i(e,e.VERTEX_SHADER,t),n=i(e,e.FRAGMENT_SHADER,o);if(!s||!n)return null;let l=e.createProgram();return l?(e.attachShader(l,s),e.attachShader(l,n),e.linkProgram(l),e.getProgramParameter(l,e.LINK_STATUS))?(e.detachShader(l,s),e.detachShader(l,n),e.deleteShader(s),e.deleteShader(n),l):(console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(l)),e.deleteProgram(l),e.deleteShader(s),e.deleteShader(n),null):null}(this.gl,o,this.fragmentShader);e&&(this.program=e)};setupPositionAttribute=()=>{let e=this.gl.getAttribLocation(this.program,"a_position"),t=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{let e={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([t,o])=>{if(e[t]=this.gl.getUniformLocation(this.program,t),o instanceof HTMLImageElement){let o=`${t}AspectRatio`;e[o]=this.gl.getUniformLocation(this.program,o)}}),this.uniformLocations=e};renderScale=1;parentWidth=0;parentHeight=0;parentDevicePixelWidth=0;parentDevicePixelHeight=0;devicePixelsSupported=!1;resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(([e])=>{if(e?.borderBoxSize[0]){let t=e.devicePixelContentBoxSize?.[0];void 0!==t&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=t.inlineSize,this.parentDevicePixelHeight=t.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)};handleVisualViewportChange=()=>{this.resizeObserver?.disconnect(),this.setupResizeObserver()};handleResize=()=>{let e=0,t=0,o=Math.max(1,window.devicePixelRatio),a=visualViewport?.scale??1;if(this.devicePixelsSupported){let r=Math.max(1,this.minPixelRatio/o);e=this.parentDevicePixelWidth*r*a,t=this.parentDevicePixelHeight*r*a}else{let r,i,s=Math.max(o,this.minPixelRatio)*a;this.isSafari&&(s*=Math.max(1,(i=Math.round(100*(r=outerWidth/((visualViewport?.scale??1)*(visualViewport?.width??window.innerWidth)+(window.innerWidth-document.documentElement.clientWidth)))))%5==0?i/100:33===i?1/3:67===i?2/3:133===i?4/3:r)),e=Math.round(this.parentWidth)*s,t=Math.round(this.parentHeight)*s}let r=Math.min(1,Math.sqrt(this.maxPixelCount)/Math.sqrt(e*t)),i=Math.round(e*r),s=Math.round(t*r),n=i/Math.round(this.parentWidth);(this.canvasElement.width!==i||this.canvasElement.height!==s||this.renderScale!==n)&&(this.renderScale=n,this.canvasElement.width=i,this.canvasElement.height=s,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=e=>{if(this.hasBeenDisposed)return;if(null===this.program)return void console.warn("Tried to render before program or gl was initialized");let t=e-this.lastRenderTime;this.lastRenderTime=e,0!==this.currentSpeed&&(this.currentFrame+=t*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,.001*this.currentFrame),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),0!==this.currentSpeed?this.requestRender():this.rafId=null};requestRender=()=>{null!==this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(e,t)=>{if(!t.complete||0===t.naturalWidth)throw Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);let o=this.textures.get(e);o&&this.gl.deleteTexture(o),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);let a=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+a);let r=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));let i=this.gl.getError();if(i!==this.gl.NO_ERROR||null===r)return void console.error("Paper Shaders: WebGL error when uploading texture:",i);this.textures.set(e,r);let s=this.uniformLocations[e];if(s){this.gl.uniform1i(s,a);let o=`${e}AspectRatio`,r=this.uniformLocations[o];if(r){let e=t.naturalWidth/t.naturalHeight;this.gl.uniform1f(r,e)}}};areUniformValuesEqual=(e,t)=>e===t||!!(Array.isArray(e)&&Array.isArray(t))&&e.length===t.length&&e.every((e,o)=>this.areUniformValuesEqual(e,t[o]));setUniformValues=e=>{this.gl.useProgram(this.program),Object.entries(e).forEach(([e,t])=>{let o=t;if(t instanceof HTMLImageElement&&(o=`${t.src.slice(0,200)}|${t.naturalWidth}x${t.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[e],o))return;this.uniformCache[e]=o;let a=this.uniformLocations[e];if(!a)return void console.warn(`Uniform location for ${e} not found`);if(t instanceof HTMLImageElement)this.setTextureUniform(e,t);else if(Array.isArray(t)){let o=null,r=null;if(void 0!==t[0]&&Array.isArray(t[0])){let a=t[0].length;if(!t.every(e=>e.length===a))return void console.warn(`All child arrays must be the same length for ${e}`);o=t.flat(),r=a}else r=(o=t).length;switch(r){case 2:this.gl.uniform2fv(a,o);break;case 3:this.gl.uniform3fv(a,o);break;case 4:this.gl.uniform4fv(a,o);break;case 9:this.gl.uniformMatrix3fv(a,!1,o);break;case 16:this.gl.uniformMatrix4fv(a,!1,o);break;default:console.warn(`Unsupported uniform array length: ${r}`)}}else"number"==typeof t?this.gl.uniform1f(a,t):"boolean"==typeof t?this.gl.uniform1i(a,+!!t):console.warn(`Unsupported uniform type for ${e}: ${typeof t}`)})};getCurrentFrame=()=>this.currentFrame;setFrame=e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.render(performance.now())};setSpeed=(e=1)=>{this.speed=e,this.setCurrentSpeed(document.hidden?0:e)};setCurrentSpeed=e=>{this.currentSpeed=e,null===this.rafId&&0!==e&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),null!==this.rafId&&0===e&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setMaxPixelCount=(e=a)=>{this.maxPixelCount=e,this.handleResize()};setMinPixelRatio=(e=2)=>{this.minPixelRatio=e,this.handleResize()};setUniforms=e=>{this.setUniformValues(e),this.providedUniforms={...this.providedUniforms,...e},this.render(performance.now())};handleDocumentVisibilityChange=()=>{this.setCurrentSpeed(document.hidden?0:this.speed)};dispose=()=>{this.hasBeenDisposed=!0,null!==this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport?.removeEventListener("resize",this.handleVisualViewportChange),document.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount}}function i(e,t,o){let a=e.createShader(t);return a?(e.shaderSource(a,o),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS))?a:(console.error("An error occurred compiling the shaders: "+e.getShaderInfoLog(a)),e.deleteShader(a),null):null}let s=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;function n(e){return"paperShaderMount"in e}e.s(["ShaderMount",()=>r,"isPaperShaderElement",()=>n],26726);var l=e.i(43476);async function c(e){let t={},o=[];return Object.entries(e).forEach(([e,a])=>{if("string"==typeof a){if(!a){t[e]=function(){if("undefined"==typeof window)return void console.warn("Paper Shaders: can’t create an image on the server");let e=new Image;return e.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",e}();return}if(!(e=>{try{if(e.startsWith("/"))return!0;return new URL(e),!0}catch{return!1}})(a))return void console.warn(`Uniform "${e}" has invalid URL "${a}". Skipping image loading.`);let r=new Promise((o,r)=>{let i=new Image;(e=>{try{if(e.startsWith("/"))return!1;return new URL(e,window.location.origin).origin!==window.location.origin}catch{return!1}})(a)&&(i.crossOrigin="anonymous"),i.onload=()=>{t[e]=i,o()},i.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${a}`),r()},i.src=a});o.push(r)}else t[e]=a}),await Promise.all(o),t}let u=(0,t.forwardRef)(function({fragmentShader:e,uniforms:o,webGlContextAttributes:a,speed:i=0,frame:s=0,width:n,height:u,minPixelRatio:f,maxPixelCount:m,mipmaps:p,style:d,...g},h){var v;let x,_,[b,y]=(0,t.useState)(!1),w=(0,t.useRef)(null),S=(0,t.useRef)(null),A=(0,t.useRef)(a);(0,t.useEffect)(()=>((async()=>{let t=await c(o);w.current&&!S.current&&(S.current=new r(w.current,e,t,A.current,i,s,f,m,p),y(!0))})(),()=>{S.current?.dispose(),S.current=null}),[e]),(0,t.useEffect)(()=>{let e=!1;return(async()=>{let t=await c(o);e||S.current?.setUniforms(t)})(),()=>{e=!0}},[o,b]),(0,t.useEffect)(()=>{S.current?.setSpeed(i)},[i,b]),(0,t.useEffect)(()=>{S.current?.setMaxPixelCount(m)},[m,b]),(0,t.useEffect)(()=>{S.current?.setMinPixelRatio(f)},[f,b]),(0,t.useEffect)(()=>{S.current?.setFrame(s)},[s,b]);let C=(v=[w,h],x=t.useRef(void 0),_=t.useCallback(e=>{let t=v.map(t=>{if(null!=t){if("function"==typeof t){let o=t(e);return"function"==typeof o?o:()=>{t(null)}}return t.current=e,()=>{t.current=null}}});return()=>{t.forEach(e=>e?.())}},v),t.useMemo(()=>v.every(e=>null==e)?null:e=>{x.current&&(x.current(),x.current=void 0),null!=e&&(x.current=_(e))},v));return(0,l.jsx)("div",{ref:C,style:void 0!==n||void 0!==u?{width:"string"==typeof n&&!1===isNaN(+n)?+n:n,height:"string"==typeof u&&!1===isNaN(+u)?+u:u,...d}:d,...g})});function f(e,t){for(let o in e){if("colors"===o){let o=Array.isArray(e.colors),a=Array.isArray(t.colors);if(!o||!a){if(!1===Object.is(e.colors,t.colors))return!1;continue}if(e.colors?.length!==t.colors?.length||!e.colors?.every((e,o)=>e===t.colors?.[o]))return!1;continue}if(!1===Object.is(e[o],t[o]))return!1}return!0}u.displayName="ShaderMount",e.s(["ShaderMount",()=>u],37881),e.s(["colorPropsAreEqual",()=>f],573);let m=`
in vec2 v_objectUV;
in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_patternUV;
in vec2 v_imageUV;`,p=`
in vec2 v_objectBoxSize;
in vec2 v_objectHelperBox;
in vec2 v_responsiveBoxSize;
in vec2 v_responsiveHelperBox;
in vec2 v_patternBoxSize;
in vec2 v_patternHelperBox;`,d=`
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;

uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;`,g=`

  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  #ifdef USE_PIXELIZATION
    float pxSize = u_pxSize * u_pixelRatio;
    vec2 pxSizeUv = gl_FragCoord.xy;
    pxSizeUv -= .5 * u_resolution;
    pxSizeUv /= pxSize;
    uv = floor(pxSizeUv) * pxSize / u_resolution.xy;    
    uv += .5;
  #endif
  uv -= .5;

  
  // ===================================================
  // sizing params shared between objects and patterns
  
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  
  // ===================================================
  // Sizing api for objects (graphics with fixed ratio)

  #ifdef USE_OBJECT_SIZING
    float fixedRatio = 1.;
    vec2 fixedRatioBoxGivenSize = vec2(
      (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
      (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
    );
    vec2 objectBoxSize = vec2(0.);
    // fit = none
    objectBoxSize.x = fixedRatio * min(fixedRatioBoxGivenSize.x / fixedRatio, fixedRatioBoxGivenSize.y);
    if (u_fit == 1.) { // fit = contain
      objectBoxSize.x = fixedRatio * min(u_resolution.x / fixedRatio, u_resolution.y);
    } else if (u_fit == 2.) {  // fit = cover
      objectBoxSize.x = fixedRatio * max(u_resolution.x / fixedRatio, u_resolution.y);
    }
    objectBoxSize.y = objectBoxSize.x / fixedRatio;
    vec2 objectWorldScale = u_resolution.xy / objectBoxSize;
  
    #ifdef ADD_HELPERS
      vec2 objectHelperBox = gl_FragCoord.xy / u_resolution.xy;
      objectHelperBox -= .5;
      objectHelperBox *= objectWorldScale;
      objectHelperBox += boxOrigin * (objectWorldScale - 1.);  
    #endif
  
    vec2 objectUV = uv;
    objectUV *= objectWorldScale;
    objectUV += boxOrigin * (objectWorldScale - 1.);
    objectUV += vec2(-u_offsetX, u_offsetY);
    objectUV /= u_scale;
    objectUV = graphicRotation * objectUV;
  #endif
  
  // ===================================================
 
  // ===================================================
  // Sizing api for patterns (graphics respecting u_worldWidth / u_worldHeight ratio)
  
  #ifdef USE_PATTERN_SIZING
    float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
    vec2 patternBoxGivenSize = vec2(
      (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
      (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
    );
    vec2 patternBoxSize = vec2(0.);
    // fit = none
    patternBoxSize.x = patternBoxRatio * min(patternBoxGivenSize.x / patternBoxRatio, patternBoxGivenSize.y);
    float patternWorldNoFitBoxWidth = patternBoxSize.x;
    if (u_fit == 1.) {  // fit = contain
      patternBoxSize.x = patternBoxRatio * min(u_resolution.x / patternBoxRatio, u_resolution.y);
    } else if (u_fit == 2.) {  // fit = cover
      patternBoxSize.x = patternBoxRatio * max(u_resolution.x / patternBoxRatio, u_resolution.y);
    }
    patternBoxSize.y = patternBoxSize.x / patternBoxRatio;
    vec2 patternWorldScale = u_resolution.xy / patternBoxSize;
  
    #ifdef ADD_HELPERS  
      vec2 patternHelperBox = gl_FragCoord.xy / u_resolution.xy;
      patternHelperBox -= .5;
      patternHelperBox *= patternWorldScale;
      patternHelperBox += boxOrigin * (patternWorldScale - 1.);  
    #endif
  
    vec2 patternUV = uv;
    patternUV += vec2(-u_offsetX, u_offsetY) / patternWorldScale;
    patternUV += boxOrigin;
    patternUV -= boxOrigin / patternWorldScale;
    patternUV *= u_resolution.xy;
    patternUV /= u_pixelRatio;
    if (u_fit > 0.) {
      patternUV *= (patternWorldNoFitBoxWidth / patternBoxSize.x);
    }
    patternUV /= u_scale;
    patternUV = graphicRotation * patternUV;
    patternUV += boxOrigin / patternWorldScale;
    patternUV -= boxOrigin;
    patternUV += .5;
  #endif
    
  // ===================================================
 
  // ===================================================
  // Sizing api for image filters
  
  #ifdef USE_IMAGE_SIZING

    vec2 imageBoxSize;
    if (u_fit == 1.) { // contain
      imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
    } else if (u_fit == 2.) { // cover
      imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
    } else {
      imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
    }
    imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
    vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

    #ifdef ADD_HELPERS
      vec2 imageHelperBox = uv;
      imageHelperBox *= imageBoxScale;
      imageHelperBox += boxOrigin * (imageBoxScale - 1.);
    #endif

    vec2 imageUV = uv;
    imageUV *= imageBoxScale;
    imageUV += boxOrigin * (imageBoxScale - 1.);
    imageUV += graphicOffset;
    imageUV /= u_scale;
    imageUV.x *= u_imageAspectRatio;
    imageUV = graphicRotation * imageUV;
    imageUV.x /= u_imageAspectRatio;
    
    imageUV += .5;
    imageUV.y = 1. - imageUV.y;
  #endif
`,h=`
  vec2 worldBoxDist = abs(helperBox);
  float boxStroke = (step(max(worldBoxDist.x, worldBoxDist.y), .5) - step(max(worldBoxDist.x, worldBoxDist.y), .495));
  color.rgb = mix(color.rgb, vec3(1., 0., 0.), boxStroke);
  opacity += boxStroke;

  vec2 boxOriginCopy = vec2(.5 - u_originX, u_originY - .5);
  vec2 boxOriginDist = helperBox + boxOriginCopy;
  boxOriginDist.x *= (boxSize.x / boxSize.y);
  float boxOriginPoint = 1. - smoothstep(0., .05, length(boxOriginDist));
  
  vec2 graphicOriginPointDist = helperBox + vec2(-u_offsetX, u_offsetY);
  graphicOriginPointDist.x *= (boxSize.x / boxSize.y);
  float graphicOriginPoint = 1. - smoothstep(0., .05, length(graphicOriginPointDist));
  
  color.rgb = mix(color.rgb, vec3(0., 1., 0.), boxOriginPoint);
  opacity += boxOriginPoint;
  color.rgb = mix(color.rgb, vec3(0., 0., 1.), graphicOriginPoint);
  opacity += graphicOriginPoint;
`,v={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},x={fit:"none",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},_={none:0,contain:1,cover:2};function b(e){if(Array.isArray(e))return 4===e.length?e:3===e.length?[...e,1]:w;if("string"!=typeof e)return w;let t,o,a,r=1;if(e.startsWith("#")){var i;[t,o,a,r]=(3===(i=(i=e).replace(/^#/,"")).length&&(i=i.split("").map(e=>e+e).join("")),6===i.length&&(i+="ff"),[parseInt(i.slice(0,2),16)/255,parseInt(i.slice(2,4),16)/255,parseInt(i.slice(4,6),16)/255,parseInt(i.slice(6,8),16)/255])}else if(e.startsWith("rgb")){let i;[t,o,a,r]=(i=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(i[1]??"0")/255,parseInt(i[2]??"0")/255,parseInt(i[3]??"0")/255,void 0===i[4]?1:parseFloat(i[4])]:[0,0,0,1]}else{let i;if(!e.startsWith("hsl"))return console.error("Unsupported color format",e),w;[t,o,a,r]=function(e){let t,o,a,[r,i,s,n]=e,l=r/360,c=i/100,u=s/100;if(0===i)t=o=a=u;else{let e=(e,t,o)=>(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e,r=u<.5?u*(1+c):u+c-u*c,i=2*u-r;t=e(i,r,l+1/3),o=e(i,r,l),a=e(i,r,l-1/3)}return[t,o,a,n]}((i=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(i[1]??"0"),parseInt(i[2]??"0"),parseInt(i[3]??"0"),void 0===i[4]?1:parseFloat(i[4])]:[0,0,0,1])}return[y(t,0,1),y(o,0,1),y(a,0,1),y(r,0,1)]}e.s(["ShaderFitOptions",()=>_,"defaultObjectSizing",()=>v,"defaultPatternSizing",()=>x,"drawSizingHelpers",()=>h,"sizingDebugVariablesDeclaration",()=>p,"sizingUV",()=>g,"sizingUniformsDeclaration",()=>d,"sizingVariablesDeclaration",()=>m],31967);let y=(e,t,o)=>Math.min(Math.max(e,t),o),w=[0,0,0,1];function S(){if("undefined"==typeof window)return;let e=new Image;return e.src=A,e}e.s(["getShaderColorFromString",()=>b],21449);let A="data:image/png;base64,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";e.s(["getShaderNoiseTexture",()=>S],45426);let C=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,B=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,k=`
  float hash11(float p) {
    p = fract(p * 0.3183099) + 0.1;
    p *= p + 19.19;
    return fract(p * p);
  }
`,z=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,R=`
  float randomR(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).r;
  }
`,F=`
  vec2 randomGB(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).gb;
  }
`,U=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,E=`
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`,O=`
float fiberRandom(vec2 p) {
  vec2 uv = floor(p) / 100.;
  return texture(u_noiseTexture, fract(uv)).b;
}

float fiberValueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = fiberRandom(i);
  float b = fiberRandom(i + vec2(1.0, 0.0));
  float c = fiberRandom(i + vec2(0.0, 1.0));
  float d = fiberRandom(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float fiberNoiseFbm(in vec2 n, vec2 seedOffset) {
  float total = 0.0, amplitude = 1.;
  for (int i = 0; i < 4; i++) {
    n = rotate(n, .7);
    total += fiberValueNoise(n + seedOffset) * amplitude;
    n *= 2.;
    amplitude *= 0.6;
  }
  return total;
}

float fiberNoise(vec2 uv, vec2 seedOffset) {
  float epsilon = 0.001;
  float n1 = fiberNoiseFbm(uv + vec2(epsilon, 0.0), seedOffset);
  float n2 = fiberNoiseFbm(uv - vec2(epsilon, 0.0), seedOffset);
  float n3 = fiberNoiseFbm(uv + vec2(0.0, epsilon), seedOffset);
  float n4 = fiberNoiseFbm(uv - vec2(0.0, epsilon), seedOffset);
  return length(vec2(n1 - n2, n3 - n4)) / (2.0 * epsilon);
}
`;e.s(["colorBandingFix",()=>U,"declarePI",()=>C,"fiberNoise",()=>O,"proceduralHash11",()=>k,"proceduralHash21",()=>z,"rotation2",()=>B,"simplexNoise",()=>E,"textureRandomizerGB",()=>F,"textureRandomizerR",()=>R],93344);let M={maxColorCount:5,maxSpots:4},P=`#version 300 es
precision lowp float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${M.maxColorCount}];
uniform float u_colorsCount;
uniform float u_roundness;
uniform float u_thickness;
uniform float u_marginLeft;
uniform float u_marginRight;
uniform float u_marginTop;
uniform float u_marginBottom;
uniform float u_aspectRatio;
uniform float u_softness;
uniform float u_intensity;
uniform float u_bloom;
uniform float u_spotSize;
uniform float u_spots;
uniform float u_pulse;
uniform float u_smoke;
uniform float u_smokeSize;

uniform sampler2D u_noiseTexture;

${m}

out vec4 fragColor;

${C}

float beat(float time) {
  float first = pow(abs(sin(time * TWO_PI)), 10.);
  float second = pow(abs(sin((time - .15) * TWO_PI)), 10.);

  return clamp(first + 0.6 * second, 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

float roundedBox(vec2 uv, vec2 halfSize, float distance, float cornerDistance, float thickness, float softness) {
  float borderDistance = abs(distance);
  float aa = 2. * fwidth(distance);
  float border = 1. - sst(min(mix(thickness, -thickness, softness), thickness + aa), max(mix(thickness, -thickness, softness), thickness + aa), borderDistance);
  float cornerFadeCircles = 0.;
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv + halfSize) / thickness)));
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv - vec2(-halfSize.x, halfSize.y)) / thickness)));
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv - vec2(halfSize.x, -halfSize.y)) / thickness)));
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv - halfSize) / thickness)));
  aa = fwidth(cornerDistance);
  float cornerFade = sst(0., mix(aa, thickness, softness), cornerDistance);
  cornerFade *= cornerFadeCircles;
  border += cornerFade;
  return border;
}

${F}

float randomG(vec2 p) {
  vec2 uv = floor(p) / 100. + .5;
  return texture(u_noiseTexture, fract(uv)).g;
}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomG(i);
  float b = randomG(i + vec2(1.0, 0.0));
  float c = randomG(i + vec2(0.0, 1.0));
  float d = randomG(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

void main() {
  const float firstFrameOffset = 109.;
  float t = 1.2 * (u_time + firstFrameOffset);

  vec2 borderUV = v_responsiveUV;
  float pulse = u_pulse * beat(.18 * u_time);

  float canvasRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 halfSize = vec2(.5);
  borderUV.x *= max(canvasRatio, 1.);
  borderUV.y /= min(canvasRatio, 1.);
  halfSize.x *= max(canvasRatio, 1.);
  halfSize.y /= min(canvasRatio, 1.);

  float mL = u_marginLeft;
  float mR = u_marginRight;
  float mT = u_marginTop;
  float mB = u_marginBottom;
  float mX = mL + mR;
  float mY = mT + mB;

  if (u_aspectRatio > 0.) {
    float shapeRatio = canvasRatio * (1. - mX) / max(1. - mY, 1e-6);
    float freeX = shapeRatio > 1. ? (1. - mX) * (1. - 1. / max(abs(shapeRatio), 1e-6)) : 0.;
    float freeY = shapeRatio < 1. ? (1. - mY) * (1. - shapeRatio) : 0.;
    mL += freeX * 0.5;
    mR += freeX * 0.5;
    mT += freeY * 0.5;
    mB += freeY * 0.5;
    mX = mL + mR;
    mY = mT + mB;
  }

  float thickness = .5 * u_thickness * min(halfSize.x, halfSize.y);

  halfSize.x *= (1. - mX);
  halfSize.y *= (1. - mY);

  vec2 centerShift = vec2(
    (mL - mR) * max(canvasRatio, 1.) * 0.5,
    (mB - mT) / min(canvasRatio, 1.) * 0.5
  );

  borderUV -= centerShift;
  halfSize -= mix(thickness, 0., u_softness);

  float radius = mix(0., min(halfSize.x, halfSize.y), u_roundness);
  vec2 d = abs(borderUV) - halfSize + radius;
  float outsideDistance = length(max(d, .0001)) - radius;
  float insideDistance = min(max(d.x, d.y), .0001);
  float cornerDistance = abs(min(max(d.x, d.y) - .45 * radius, .0));
  float distance = outsideDistance + insideDistance;

  float borderThickness = mix(thickness, 3. * thickness, u_softness);
  float border = roundedBox(borderUV, halfSize, distance, cornerDistance, borderThickness, u_softness);
  border = pow(border, 1. + u_softness);

  vec2 smokeUV = .3 * u_smokeSize * v_patternUV;
  float smoke = clamp(3. * valueNoise(2.7 * smokeUV + .5 * t), 0., 1.);
  smoke -= valueNoise(3.4 * smokeUV - .5 * t);
  float smokeThickness = thickness + .2;
  smokeThickness = min(.4, max(smokeThickness, .1));
  smoke *= roundedBox(borderUV, halfSize, distance, cornerDistance, smokeThickness, 1.);
  smoke = 30. * smoke * smoke;
  smoke *= mix(0., .5, pow(u_smoke, 2.));
  smoke *= mix(1., pulse, u_pulse);
  smoke = clamp(smoke, 0., 1.);
  border += smoke;

  border = clamp(border, 0., 1.);

  vec3 blendColor = vec3(0.);
  float blendAlpha = 0.;
  vec3 addColor = vec3(0.);
  float addAlpha = 0.;

  float bloom = 4. * u_bloom;
  float intensity = 1. + (1. + 4. * u_softness) * u_intensity;

  float angle = atan(borderUV.y, borderUV.x) / TWO_PI;

  for (int colorIdx = 0; colorIdx < ${M.maxColorCount}; colorIdx++) {
    if (colorIdx >= int(u_colorsCount)) break;
    float colorIdxF = float(colorIdx);

    vec3 c = u_colors[colorIdx].rgb * u_colors[colorIdx].a;
    float a = u_colors[colorIdx].a;

    for (int spotIdx = 0; spotIdx < ${M.maxSpots}; spotIdx++) {
      if (spotIdx >= int(u_spots)) break;
      float spotIdxF = float(spotIdx);

      vec2 randVal = randomGB(vec2(spotIdxF * 10. + 2., 40. + colorIdxF));

      float time = (.1 + .15 * abs(sin(spotIdxF * (2. + colorIdxF)) * cos(spotIdxF * (2. + 2.5 * colorIdxF)))) * t + randVal.x * 3.;
      time *= mix(1., -1., step(.5, randVal.y));

      float mask = .5 + .5 * mix(
        sin(t + spotIdxF * (5. - 1.5 * colorIdxF)),
        cos(t + spotIdxF * (3. + 1.3 * colorIdxF)),
        step(mod(colorIdxF, 2.), .5)
      );

      float p = clamp(2. * u_pulse - randVal.x, 0., 1.);
      mask = mix(mask, pulse, p);

      float atg1 = fract(angle + time);
      float spotSize = .05 + .6 * pow(u_spotSize, 2.) + .05 * randVal.x;
      spotSize = mix(spotSize, .1, p);
      float sector = sst(.5 - spotSize, .5, atg1) * (1. - sst(.5, .5 + spotSize, atg1));

      sector *= mask;
      sector *= border;
      sector *= intensity;
      sector = clamp(sector, 0., 1.);

      vec3 srcColor = c * sector;
      float srcAlpha = a * sector;

      blendColor += ((1. - blendAlpha) * srcColor);
      blendAlpha = blendAlpha + (1. - blendAlpha) * srcAlpha;
      addColor += srcColor;
      addAlpha += srcAlpha;
    }
  }

  vec3 accumColor = mix(blendColor, addColor, bloom);
  float accumAlpha = mix(blendAlpha, addAlpha, bloom);
  accumAlpha = clamp(accumAlpha, 0., 1.);

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  vec3 color = accumColor + (1. - accumAlpha) * bgColor;
  float opacity = accumAlpha + (1. - accumAlpha) * u_colorBack.a;

  ${U}

  fragColor = vec4(color, opacity);
}`,I={auto:0,square:1};e.s(["PulsingBorderAspectRatios",()=>I,"pulsingBorderFragmentShader",()=>P,"pulsingBorderMeta",()=>M],27064);let V={name:"Default",params:{...v,speed:1,frame:0,scale:.6,colorBack:"#000000",colors:["#0dc1fd","#d915ef","#ff3f2ecc"],roundness:.25,thickness:.1,margin:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,aspectRatio:"auto",softness:.75,intensity:.2,bloom:.25,spots:5,spotSize:.5,pulse:.25,smoke:.3,smokeSize:.6}},D=[V,{name:"Circle",params:{...v,aspectRatio:"square",scale:.6,speed:1,frame:0,colorBack:"#000000",colors:["#0dc1fd","#d915ef","#ff3f2ecc"],roundness:1,margin:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,thickness:0,softness:.75,intensity:.2,bloom:.45,spots:3,spotSize:.4,pulse:.5,smoke:1,smokeSize:0}},{name:"Northern lights",params:{...v,speed:.18,scale:1.1,frame:0,colors:["#4c4794","#774a7d","#12694a","#0aff78","#4733cc"],colorBack:"#0c182c",roundness:0,thickness:1,softness:1,margin:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,aspectRatio:"auto",intensity:.1,bloom:.2,spots:4,spotSize:.25,pulse:0,smoke:.32,smokeSize:.5}},{name:"Solid line",params:{...v,speed:1,frame:0,colors:["#81ADEC"],colorBack:"#00000000",roundness:0,thickness:.05,margin:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,aspectRatio:"auto",softness:0,intensity:0,bloom:.15,spots:4,spotSize:1,pulse:0,smoke:0,smokeSize:0}}],T=(0,t.memo)(function({speed:e=V.params.speed,frame:t=V.params.frame,colors:o=V.params.colors,colorBack:a=V.params.colorBack,roundness:r=V.params.roundness,thickness:i=V.params.thickness,aspectRatio:s=V.params.aspectRatio,softness:n=V.params.softness,bloom:c=V.params.bloom,intensity:f=V.params.intensity,spots:m=V.params.spots,spotSize:p=V.params.spotSize,pulse:d=V.params.pulse,smoke:g=V.params.smoke,smokeSize:h=V.params.smokeSize,margin:v,marginLeft:x=v??V.params.marginLeft,marginRight:y=v??V.params.marginRight,marginTop:w=v??V.params.marginTop,marginBottom:A=v??V.params.marginBottom,fit:C=V.params.fit,rotation:B=V.params.rotation,scale:k=V.params.scale,originX:z=V.params.originX,originY:R=V.params.originY,offsetX:F=V.params.offsetX,offsetY:U=V.params.offsetY,worldWidth:E=V.params.worldWidth,worldHeight:O=V.params.worldHeight,...M}){let D={u_colorBack:b(a),u_colors:o.map(b),u_colorsCount:o.length,u_roundness:r,u_thickness:i,u_marginLeft:x,u_marginRight:y,u_marginTop:w,u_marginBottom:A,u_aspectRatio:I[s],u_softness:n,u_intensity:f,u_bloom:c,u_spots:m,u_spotSize:p,u_pulse:d,u_smoke:g,u_smokeSize:h,u_noiseTexture:S(),u_fit:_[C],u_rotation:B,u_scale:k,u_offsetX:F,u_offsetY:U,u_originX:z,u_originY:R,u_worldWidth:E,u_worldHeight:O};return(0,l.jsx)(u,{...M,speed:e,frame:t,fragmentShader:P,uniforms:D})},f);e.s(["PulsingBorder",()=>T,"pulsingBorderPresets",()=>D],95272)},2874,e=>{"use strict";var t=e.i(43476),o=e.i(932),a=e.i(22016),r=e.i(71645),i=e.i(75157);let s=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},n=(...e)=>e.filter((e,t,o)=>!!e&&""!==e.trim()&&o.indexOf(e)===t).join(" ").trim();var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:i="",children:s,iconNode:c,...u},f)=>(0,r.createElement)("svg",{ref:f,...l,width:t,height:t,stroke:e,strokeWidth:a?24*Number(o)/Number(t):o,className:n("lucide",i),...!s&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(u)&&{"aria-hidden":"true"},...u},[...c.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(s)?s:[s]])),u=(e,t)=>{let o=(0,r.forwardRef)(({className:o,...a},i)=>(0,r.createElement)(c,{ref:i,iconNode:t,className:n(`lucide-${s(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,o),...a}));return o.displayName=s(e),o},f=u("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]),m=u("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function p(){let e,a,i,s,n,l,c=(0,o.c)(12),[u,p]=(0,r.useState)("light");c[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>{let e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches,o=e||(t?"dark":"light");p(o),document.documentElement.classList.toggle("dark","dark"===o)},a=[],c[0]=e,c[1]=a):(e=c[0],a=c[1]),(0,r.useEffect)(e,a),c[2]!==u?(i=()=>{let e="light"===u?"dark":"light";p(e),localStorage.setItem("theme",e),document.documentElement.classList.toggle("dark","dark"===e)},c[2]=u,c[3]=i):i=c[3];let d=i,g=`${"light"===u?"hidden":"block"}`;c[4]!==g?(s=(0,t.jsx)(f,{className:g}),c[4]=g,c[5]=s):s=c[5];let h=`${"dark"===u?"hidden":"block"}`;return c[6]!==h?(n=(0,t.jsx)(m,{className:h}),c[6]=h,c[7]=n):n=c[7],c[8]!==s||c[9]!==n||c[10]!==d?(l=(0,t.jsxs)("button",{onClick:d,className:"relative w-fit h-fit rounded-full transition-colors duration-300 focus:outline-none ","aria-label":"Toggle theme",children:[s,n]}),c[8]=s,c[9]=n,c[10]=d,c[11]=l):l=c[11],l}var d=e.i(95272);function g(){let e,s,n,l,c,u,f,m,g,h,v,x=(0,o.c)(13),[_,b]=(0,r.useState)(!1);x[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>{let e=()=>{b(window.scrollY>20)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},s=[],x[0]=e,x[1]=s):(e=x[0],s=x[1]),(0,r.useEffect)(e,s);let y=_?"bg-background/80 backdrop-blur-md border-b border-border":"bg-transparent";return x[2]!==y?(n=(0,i.cn)("fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block",y),x[2]=y,x[3]=n):n=x[3],x[4]===Symbol.for("react.memo_cache_sentinel")?(l=(0,t.jsx)(a.default,{href:"/",className:"text-xl font-bold text-foreground hover:text-white/65 transition-colors",children:"Portfolio"}),x[4]=l):l=x[4],x[5]===Symbol.for("react.memo_cache_sentinel")?(c=(0,t.jsx)(a.default,{href:"#work",className:"text-sm font-medium text-foreground hover:text-white/65 transition-colors",children:"Work"}),u=(0,t.jsx)(a.default,{href:"#about",className:"text-sm font-medium text-foreground hover:text-white/65 transition-colors",children:"About"}),f=(0,t.jsx)(a.default,{href:"#experience",className:"text-sm font-medium text-foreground hover:text-white/65 transition-colors",children:"Experience"}),m=(0,t.jsx)(a.default,{href:"#contact",className:"text-sm font-medium text-foreground hover:text-white/65 transition-colors",children:"Contact"}),x[5]=c,x[6]=u,x[7]=f,x[8]=m):(c=x[5],u=x[6],f=x[7],m=x[8]),x[9]===Symbol.for("react.memo_cache_sentinel")?(g=["#0dc1fd","#d915ef","#ff3f2ecc"],x[9]=g):g=x[9],x[10]===Symbol.for("react.memo_cache_sentinel")?(h=(0,t.jsx)("div",{className:"container mx-auto px-6 py-4",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[l,(0,t.jsxs)("div",{className:"flex items-center gap-8",children:[c,u,f,m,(0,t.jsx)("div",{className:"flex",children:(0,t.jsx)(d.PulsingBorder,{width:120,height:40,colors:g,colorBack:"#ffffff00",roundness:1,thickness:.1,softness:.75,aspectRatio:"auto",intensity:.2,bloom:.25,spots:4,spotSize:.5,pulse:.25,smoke:.3,smokeSize:.6,speed:1,scale:.6,children:(0,t.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,t.jsx)(a.default,{href:"https://github.com/sponsors/Test1calCutter",className:"text-sm font-medium text-foreground hover:text-white/65 transition-colors",children:"Sponsor"})})})}),(0,t.jsx)(p,{})]})]})}),x[10]=h):h=x[10],x[11]!==n?(v=(0,t.jsx)("nav",{className:n,children:h}),x[11]=n,x[12]=v):v=x[12],v}e.s(["Navbar",()=>g],2874)},65914,e=>{"use strict";var t=e.i(43476),o=e.i(932),a=e.i(71645);function r(){let e,r,n,l,c,u=(0,o.c)(7);u[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],u[0]=e):e=u[0];let[f,m]=(0,a.useState)(e);return u[1]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{m(Array.from({length:8},s))},n=[],u[1]=r,u[2]=n):(r=u[1],n=u[2]),(0,a.useEffect)(r,n),u[3]!==f?(l=f.map(i),u[3]=f,u[4]=l):l=u[4],u[5]!==l?(c=(0,t.jsx)("div",{className:"fixed inset-0 pointer-events-none overflow-hidden z-0",children:l}),u[5]=l,u[6]=c):c=u[6],c}function i(e){return(0,t.jsx)("div",{className:"absolute rounded-full border border-border/20 animate-float",style:{width:`${e.size}px`,height:`${e.size}px`,left:`${e.left}%`,bottom:"-10%",animation:`float ${e.duration}s ease-in-out ${e.delay}s infinite`}},e.id)}function s(e,t){return{id:t,size:200*Math.random()+100,left:100*Math.random(),duration:10*Math.random()+15,delay:5*Math.random()}}e.s(["FloatingBubbles",()=>r])},3226,e=>{"use strict";var t=e.i(37881),o=e.i(71645),a=e.i(573),r=e.i(31967),i=e.i(21449),s=e.i(93344);let n={maxColorCount:10},l=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[${n.maxColorCount}];
uniform float u_colorsCount;

uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;

${r.sizingVariablesDeclaration}
${r.sizingDebugVariablesDeclaration}
${r.sizingUniformsDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.rotation2}
${s.proceduralHash21}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + fract(float(i) / 3.) * .9;
  float c = .8 + fract(float(i + 1) / 4.);

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 shape_uv = v_objectUV;
  shape_uv += .5;

  vec2 grainUV = v_objectUV;
  // apply inverse transform to grain_uv so it respects the originXY
  float grainUVRot = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(grainUVRot), sin(grainUVRot), -sin(grainUVRot), cos(grainUVRot));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);
  grainUV = transpose(graphicRotation) * grainUV;
  grainUV *= u_scale;
  grainUV *= .7;
  grainUV -= graphicOffset;
  grainUV *= v_objectBoxSize;
  
  float grain = noise(grainUV, vec2(0.));
  float mixerGrain = .4 * u_grainMixer * (grain - .5);

  const float firstFrameOffset = 41.5;
  float t = .5 * (u_time + firstFrameOffset);

  float radius = smoothstep(0., 1., length(shape_uv - .5));
  float center = 1. - radius;
  for (float i = 1.; i <= 2.; i++) {
    shape_uv.x += u_distortion * center / i * sin(t + i * .4 * smoothstep(.0, 1., shape_uv.y)) * cos(.2 * t + i * 2.4 * smoothstep(.0, 1., shape_uv.y));
    shape_uv.y += u_distortion * center / i * cos(t + i * 2. * smoothstep(.0, 1., shape_uv.x));
  }

  vec2 uvRotated = shape_uv;
  uvRotated -= vec2(.5);
  float angle = 3. * u_swirl * radius;
  uvRotated = rotate(uvRotated, -angle);
  uvRotated += vec2(.5);

  vec3 color = vec3(0.);
  float opacity = 0.;
  float totalWeight = 0.;

  for (int i = 0; i < ${n.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 pos = getPosition(i, t) + mixerGrain;
    vec3 colorFraction = u_colors[i].rgb * u_colors[i].a;
    float opacityFraction = u_colors[i].a;

    float dist = length(uvRotated - pos);

    dist = pow(dist, 3.5);
    float weight = 1. / (dist + 1e-3);
    color += colorFraction * weight;
    opacity += opacityFraction * weight;
    totalWeight += weight;
  }

  color /= max(1e-4, totalWeight);
  opacity /= max(1e-4, totalWeight);

  float rr = noise(rotate(grainUV, 1.), vec2(3.));
  float gg = noise(rotate(grainUV, 2.) + 10., vec2(-1.));
  float bb = noise(grainUV - 2., vec2(5.));
  vec3 grainColor = vec3(rr, gg, bb);
  color = mix(color, grainColor, .01 + .3 * u_grainOverlay);
  
  fragColor = vec4(color, opacity);
}
`;var c=e.i(43476);let u={name:"Default",params:{...r.defaultObjectSizing,speed:1,frame:0,colors:["#e0eaff","#241d9a","#f75092","#9f50d3"],distortion:.8,swirl:.1,grainMixer:0,grainOverlay:0}},f={name:"Purple",params:{...r.defaultObjectSizing,speed:.6,frame:0,colors:["#aaa7d7","#3c2b8e"],distortion:1,swirl:1,grainMixer:0,grainOverlay:0}},m={name:"Beach",params:{...r.defaultObjectSizing,speed:.1,frame:0,colors:["#bcecf6","#00aaff","#00f7ff","#ffd447"],distortion:.8,swirl:.35,grainMixer:0,grainOverlay:0}},p=[u,{name:"Ink",params:{...r.defaultObjectSizing,speed:1,frame:0,colors:["#ffffff","#000000"],distortion:1,swirl:.2,rotation:90,grainMixer:0,grainOverlay:0}},f,m],d=(0,o.memo)(function({speed:e=u.params.speed,frame:o=u.params.frame,colors:a=u.params.colors,distortion:s=u.params.distortion,swirl:n=u.params.swirl,grainMixer:f=u.params.grainMixer,grainOverlay:m=u.params.grainOverlay,fit:p=u.params.fit,rotation:d=u.params.rotation,scale:g=u.params.scale,originX:h=u.params.originX,originY:v=u.params.originY,offsetX:x=u.params.offsetX,offsetY:_=u.params.offsetY,worldWidth:b=u.params.worldWidth,worldHeight:y=u.params.worldHeight,...w}){let S={u_colors:a.map(i.getShaderColorFromString),u_colorsCount:a.length,u_distortion:s,u_swirl:n,u_grainMixer:f,u_grainOverlay:m,u_fit:r.ShaderFitOptions[p],u_rotation:d,u_scale:g,u_offsetX:x,u_offsetY:_,u_originX:h,u_originY:v,u_worldWidth:b,u_worldHeight:y};return(0,c.jsx)(t.ShaderMount,{...w,speed:e,frame:o,fragmentShader:l,uniforms:S})},a.colorPropsAreEqual);var g=e.i(45426);let h={maxColorCount:10,maxNoiseIterations:8},v=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${h.maxColorCount}];
uniform float u_colorsCount;

uniform float u_thickness;
uniform float u_radius;
uniform float u_innerShape;
uniform float u_noiseScale;
uniform float u_noiseIterations;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.textureRandomizerR}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomR(i);
  float b = randomR(i + vec2(1.0, 0.0));
  float c = randomR(i + vec2(0.0, 1.0));
  float d = randomR(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}
float fbm(in vec2 n) {
  float total = 0.0, amplitude = .4;
  for (int i = 0; i < ${h.maxNoiseIterations}; i++) {
    if (i >= int(u_noiseIterations)) break;
    total += valueNoise(n) * amplitude;
    n *= 1.99;
    amplitude *= 0.65;
  }
  return total;
}

float getNoise(vec2 uv, vec2 pUv, float t) {
  float noiseLeft = fbm(pUv + .03 * t);
  float period = max(abs(u_noiseScale * TWO_PI), 1e-6);
  pUv.x = fract(pUv.x / period) * period;
  float noiseRight = fbm(pUv + .03 * t);
  return mix(noiseRight, noiseLeft, smoothstep(-.25, .25, uv.x));
}

float getRingShape(vec2 uv) {
  float radius = u_radius;
  float thickness = u_thickness;

  float distance = length(uv);
  float ringValue = 1. - smoothstep(radius, radius + thickness, distance);
  ringValue *= smoothstep(radius - pow(u_innerShape, 3.) * thickness, radius, distance);

  return ringValue;
}

void main() {
  vec2 shape_uv = v_objectUV;

  float t = u_time;

  float cycleDuration = 3.;
  float period2 = 2.0 * cycleDuration;
  float localTime1 = fract((0.1 * t + cycleDuration) / period2) * period2;
  float localTime2 = fract((0.1 * t) / period2) * period2;
  float timeBlend = .5 + .5 * sin(.1 * t * PI / cycleDuration - .5 * PI);

  float atg = atan(shape_uv.y, shape_uv.x) + .001;
  float l = length(shape_uv);
  vec2 polar_uv1 = vec2(atg, localTime1 - (.5 * l) + 1. / pow(max(1e-4, l), .5));
  polar_uv1 *= u_noiseScale;
  float noise1 = getNoise(shape_uv, polar_uv1, t);

  vec2 polar_uv2 = vec2(atg, localTime2 - (.5 * l) + 1. / pow(max(1e-4, l), .5));
  polar_uv2 *= u_noiseScale;
  float noise2 = getNoise(shape_uv, polar_uv2, t);

  float noise = mix(noise1, noise2, timeBlend);

  shape_uv *= (.8 + 1.2 * noise);

  float ringShape = getRingShape(shape_uv);

  float mixer = ringShape * ringShape * (u_colorsCount - 1.);
  vec4 gradient = u_colors[int(u_colorsCount) - 1];
  gradient.rgb *= gradient.a;
  for (int i = ${h.maxColorCount} - 2; i >= 0; i--) {
    float localT = clamp(mixer - float(int(u_colorsCount) - 1 - i - 1), 0., 1.);
    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, localT);
  }

  vec3 color = gradient.rgb * ringShape;
  float opacity = gradient.a * ringShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${s.colorBandingFix}

  fragColor = vec4(color, opacity);
}
`,x={name:"Default",params:{...r.defaultObjectSizing,speed:.5,frame:0,colorBack:"#000000",colors:["#ffffff"],noiseScale:3,noiseIterations:8,radius:.25,thickness:.65,innerShape:.7,scale:.8}},_={name:"Solar",params:{...r.defaultObjectSizing,speed:1,frame:0,colorBack:"#000000",colors:["#ffffff","#ffca0a","#fc6203","#fc620366"],noiseScale:2,noiseIterations:3,radius:.4,thickness:.8,innerShape:4,scale:2,offsetY:1}},b=[x,{name:"Line",params:{...r.defaultObjectSizing,frame:0,colorBack:"#000000",colors:["#4540a4","#1fe8ff"],noiseScale:1.1,noiseIterations:2,radius:.38,thickness:.01,innerShape:.88,speed:4}},_,{name:"Cloud",params:{...r.defaultObjectSizing,frame:0,colorBack:"#81ADEC",colors:["#ffffff"],noiseScale:3,noiseIterations:10,radius:.5,thickness:.65,innerShape:.85,speed:.5,scale:2.5}}],y=(0,o.memo)(function({speed:e=x.params.speed,frame:o=x.params.frame,colorBack:a=x.params.colorBack,colors:s=x.params.colors,noiseScale:n=x.params.noiseScale,thickness:l=x.params.thickness,radius:u=x.params.radius,innerShape:f=x.params.innerShape,noiseIterations:m=x.params.noiseIterations,fit:p=x.params.fit,scale:d=x.params.scale,rotation:h=x.params.rotation,originX:_=x.params.originX,originY:b=x.params.originY,offsetX:y=x.params.offsetX,offsetY:w=x.params.offsetY,worldWidth:S=x.params.worldWidth,worldHeight:A=x.params.worldHeight,...C}){let B={u_colorBack:(0,i.getShaderColorFromString)(a),u_colors:s.map(i.getShaderColorFromString),u_colorsCount:s.length,u_noiseScale:n,u_thickness:l,u_radius:u,u_innerShape:f,u_noiseIterations:m,u_noiseTexture:(0,g.getShaderNoiseTexture)(),u_fit:r.ShaderFitOptions[p],u_scale:d,u_rotation:h,u_offsetX:y,u_offsetY:w,u_originX:_,u_originY:b,u_worldWidth:S,u_worldHeight:A};return(0,c.jsx)(t.ShaderMount,{...C,speed:e,frame:o,fragmentShader:v,uniforms:B})},a.colorPropsAreEqual),w=`#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform vec4 u_colorFront;
uniform vec4 u_colorMid;
uniform vec4 u_colorBack;
uniform float u_brightness;
uniform float u_contrast;


${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.rotation2}

float neuroShape(vec2 uv, float t) {
  vec2 sine_acc = vec2(0.);
  vec2 res = vec2(0.);
  float scale = 8.;

  for (int j = 0; j < 15; j++) {
    uv = rotate(uv, 1.);
    sine_acc = rotate(sine_acc, 1.);
    vec2 layer = uv * scale + float(j) + sine_acc - t;
    sine_acc += sin(layer);
    res += (.5 + .5 * cos(layer)) / scale;
    scale *= (1.2);
  }
  return res.x + res.y;
}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= .13;

  float t = .5 * u_time;

  float noise = neuroShape(shape_uv, t);

  noise = (1. + u_brightness) * noise * noise;
  noise = pow(noise, .7 + 6. * u_contrast);
  noise = min(1.4, noise);

  float blend = smoothstep(0.7, 1.4, noise);

  vec4 frontC = u_colorFront;
  frontC.rgb *= frontC.a;
  vec4 midC = u_colorMid;
  midC.rgb *= midC.a;
  vec4 blendFront = mix(midC, frontC, blend);

  float safeNoise = max(noise, 0.0);
  vec3 color = blendFront.rgb * safeNoise;
  float opacity = clamp(blendFront.a * safeNoise, 0., 1.);

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${s.colorBandingFix}

  fragColor = vec4(color, opacity);
}
`,S={name:"Default",params:{...r.defaultPatternSizing,speed:1,frame:0,colorFront:"#ffffff",colorMid:"#47a6ff",colorBack:"#000000",brightness:.05,contrast:.3}},A=[S,{name:"Sensation",params:{...r.defaultPatternSizing,speed:1,frame:0,colorFront:"#00c8ff",colorMid:"#fbff00",colorBack:"#8b42ff",brightness:.19,contrast:.12,scale:3}},{name:"Bloodstream",params:{...r.defaultPatternSizing,speed:1,frame:0,colorFront:"#ff0000",colorMid:"#ff0000",colorBack:"#ffffff",brightness:.24,contrast:.17,scale:.7}},{name:"Ghost",params:{...r.defaultPatternSizing,speed:1,frame:0,colorFront:"#ffffff",colorMid:"#000000",colorBack:"#ffffff",brightness:0,contrast:1,scale:.55}}],C=(0,o.memo)(function({speed:e=S.params.speed,frame:o=S.params.frame,colorFront:a=S.params.colorFront,colorMid:s=S.params.colorMid,colorBack:n=S.params.colorBack,brightness:l=S.params.brightness,contrast:u=S.params.contrast,fit:f=S.params.fit,scale:m=S.params.scale,rotation:p=S.params.rotation,originX:d=S.params.originX,originY:g=S.params.originY,offsetX:h=S.params.offsetX,offsetY:v=S.params.offsetY,worldWidth:x=S.params.worldWidth,worldHeight:_=S.params.worldHeight,...b}){let y={u_colorFront:(0,i.getShaderColorFromString)(a),u_colorMid:(0,i.getShaderColorFromString)(s),u_colorBack:(0,i.getShaderColorFromString)(n),u_brightness:l,u_contrast:u,u_fit:r.ShaderFitOptions[f],u_scale:m,u_rotation:p,u_offsetX:h,u_offsetY:v,u_originX:d,u_originY:g,u_worldWidth:x,u_worldHeight:_};return(0,c.jsx)(t.ShaderMount,{...b,speed:e,frame:o,fragmentShader:w,uniforms:y})},a.colorPropsAreEqual),B={maxColorCount:10},k=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${B.maxColorCount}];
uniform float u_colorsCount;
uniform float u_stepsPerColor;
uniform float u_size;
uniform float u_sizeRange;
uniform float u_spreading;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.rotation2}
${s.textureRandomizerR}
${s.textureRandomizerGB}


vec3 voronoiShape(vec2 uv, float time) {
  vec2 i_uv = floor(uv);
  vec2 f_uv = fract(uv);

  float spreading = .25 * clamp(u_spreading, 0., 1.);

  float minDist = 1.;
  vec2 randomizer = vec2(0.);
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 tileOffset = vec2(float(x), float(y));
      vec2 rand = randomGB(i_uv + tileOffset);
      vec2 cellCenter = vec2(.5 + 1e-4);
      cellCenter += spreading * cos(time + TWO_PI * rand);
      cellCenter -= .5;
      cellCenter = rotate(cellCenter, randomR(vec2(rand.x, rand.y)) + .1 * time);
      cellCenter += .5;
      float dist = length(tileOffset + cellCenter - f_uv);
      if (dist < minDist) {
        minDist = dist;
        randomizer = rand;
      }
      minDist = min(minDist, dist);
    }
  }

  return vec3(minDist, randomizer);
}

void main() {

  vec2 shape_uv = v_patternUV;
  shape_uv *= 1.5;

  const float firstFrameOffset = -10.;
  float t = u_time + firstFrameOffset;

  vec3 voronoi = voronoiShape(shape_uv, t) + 1e-4;

  float radius = .25 * clamp(u_size, 0., 1.) - .5 * clamp(u_sizeRange, 0., 1.) * voronoi[2];
  float dist = voronoi[0];
  float edgeWidth = fwidth(dist);
  float dots = 1. - smoothstep(radius - edgeWidth, radius + edgeWidth, dist);

  float shape = voronoi[1];

  float mixer = shape * (u_colorsCount - 1.);
  mixer = (shape - .5 / u_colorsCount) * u_colorsCount;
  float steps = max(1., u_stepsPerColor);

  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  for (int i = 1; i < ${B.maxColorCount}; i++) {
      if (i >= int(u_colorsCount)) break;
      float localT = clamp(mixer - float(i - 1), 0.0, 1.0);
      localT = round(localT * steps) / steps;
      vec4 c = u_colors[i];
      c.rgb *= c.a;
      gradient = mix(gradient, c, localT);
  }

  if ((mixer < 0.) || (mixer > (u_colorsCount - 1.))) {
    float localT = mixer + 1.;
    if (mixer > (u_colorsCount - 1.)) {
      localT = mixer - (u_colorsCount - 1.);
    }
    localT = round(localT * steps) / steps;
    vec4 cFst = u_colors[0];
    cFst.rgb *= cFst.a;
    vec4 cLast = u_colors[int(u_colorsCount - 1.)];
    cLast.rgb *= cLast.a;
    gradient = mix(cLast, cFst, localT);
  }

  vec3 color = gradient.rgb * dots;
  float opacity = gradient.a * dots;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  fragColor = vec4(color, opacity);
}
`,z={name:"Default",params:{...r.defaultPatternSizing,speed:1.5,frame:0,colorBack:"#000000",colors:["#ffc96b","#ff6200","#ff2f00","#421100","#1a0000"],size:1,sizeRange:0,spreading:1,stepsPerColor:4}},R={name:"Shine",params:{...r.defaultPatternSizing,speed:.1,frame:0,colors:["#ffffff","#006aff","#fff675"],colorBack:"#000000",stepsPerColor:4,size:.3,sizeRange:.2,spreading:1,scale:.4}},F=[z,{name:"Bubbles",params:{...r.defaultPatternSizing,speed:.4,frame:0,colors:["#D0D2D5"],colorBack:"#989CA4",stepsPerColor:2,size:.9,sizeRange:.7,spreading:1,scale:1.64}},R,{name:"Hallucinatory",params:{...r.defaultPatternSizing,speed:5,frame:0,colors:["#000000"],colorBack:"#ffe500",stepsPerColor:2,size:.65,sizeRange:0,spreading:.3,scale:.5}}],U=(0,o.memo)(function({speed:e=z.params.speed,frame:o=z.params.frame,colorBack:a=z.params.colorBack,colors:s=z.params.colors,size:n=z.params.size,sizeRange:l=z.params.sizeRange,spreading:u=z.params.spreading,stepsPerColor:f=z.params.stepsPerColor,fit:m=z.params.fit,scale:p=z.params.scale,rotation:d=z.params.rotation,originX:h=z.params.originX,originY:v=z.params.originY,offsetX:x=z.params.offsetX,offsetY:_=z.params.offsetY,worldWidth:b=z.params.worldWidth,worldHeight:y=z.params.worldHeight,...w}){let S={u_colorBack:(0,i.getShaderColorFromString)(a),u_colors:s.map(i.getShaderColorFromString),u_colorsCount:s.length,u_size:n,u_sizeRange:l,u_spreading:u,u_stepsPerColor:f,u_noiseTexture:(0,g.getShaderNoiseTexture)(),u_fit:r.ShaderFitOptions[m],u_scale:p,u_rotation:d,u_offsetX:x,u_offsetY:_,u_originX:h,u_originY:v,u_worldWidth:b,u_worldHeight:y};return(0,c.jsx)(t.ShaderMount,{...w,speed:e,frame:o,fragmentShader:k,uniforms:S})},a.colorPropsAreEqual),E=`#version 300 es
precision mediump float;

uniform vec4 u_colorBack;
uniform vec4 u_colorFill;
uniform vec4 u_colorStroke;
uniform float u_dotSize;
uniform float u_gapX;
uniform float u_gapY;
uniform float u_strokeWidth;
uniform float u_sizeRange;
uniform float u_opacityRange;
uniform float u_shape;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.simplexNoise}

float polygon(vec2 p, float N, float rot) {
  float a = atan(p.x, p.y) + rot;
  float r = TWO_PI / float(N);

  return cos(floor(.5 + a / r) * r - a) * length(p);
}

void main() {

  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  vec2 shape_uv = 100. * v_patternUV;

  vec2 gap = max(abs(vec2(u_gapX, u_gapY)), vec2(1e-6));
  vec2 grid = fract(shape_uv / gap) + 1e-4;
  vec2 grid_idx = floor(shape_uv / gap);
  float sizeRandomizer = .5 + .8 * snoise(2. * vec2(grid_idx.x * 100., grid_idx.y));
  float opacity_randomizer = .5 + .7 * snoise(2. * vec2(grid_idx.y, grid_idx.x));

  vec2 center = vec2(0.5) - 1e-3;
  vec2 p = (grid - center) * vec2(u_gapX, u_gapY);

  float baseSize = u_dotSize * (1. - sizeRandomizer * u_sizeRange);
  float strokeWidth = u_strokeWidth * (1. - sizeRandomizer * u_sizeRange);

  float dist;
  if (u_shape < 0.5) {
    // Circle
    dist = length(p);
  } else if (u_shape < 1.5) {
    // Diamond
    strokeWidth *= 1.5;
    dist = polygon(1.5 * p, 4., .25 * PI);
  } else if (u_shape < 2.5) {
    // Square
    dist = polygon(1.03 * p, 4., 1e-3);
  } else {
    // Triangle
    strokeWidth *= 1.5;
    p = p * 2. - 1.;
    p *= .9;
    p.y = 1. - p.y;
    p.y -= .75 * baseSize;
    dist = polygon(p, 3., 1e-3);
  }

  float edgeWidth = fwidth(dist);
  float shapeOuter = 1. - smoothstep(baseSize - edgeWidth, baseSize + edgeWidth, dist - strokeWidth);
  float shapeInner = 1. - smoothstep(baseSize - edgeWidth, baseSize + edgeWidth, dist);
  float stroke = shapeOuter - shapeInner;

  float dotOpacity = max(0., 1. - opacity_randomizer * u_opacityRange);
  stroke *= dotOpacity;
  shapeInner *= dotOpacity;

  stroke *= u_colorStroke.a;
  shapeInner *= u_colorFill.a;

  vec3 color = vec3(0.);
  color += stroke * u_colorStroke.rgb;
  color += shapeInner * u_colorFill.rgb;
  color += (1. - shapeInner - stroke) * u_colorBack.rgb * u_colorBack.a;

  float opacity = 0.;
  opacity += stroke;
  opacity += shapeInner;
  opacity += (1. - opacity) * u_colorBack.a;

  fragColor = vec4(color, opacity);
}
`,O={circle:0,diamond:1,square:2,triangle:3},M={name:"Default",params:{...r.defaultPatternSizing,colorBack:"#000000",colorFill:"#ffffff",colorStroke:"#ffaa00",size:2,gapX:32,gapY:32,strokeWidth:0,sizeRange:0,opacityRange:0,shape:"circle"}},P=[M,{name:"Triangles",params:{...r.defaultPatternSizing,colorBack:"#ffffff",colorFill:"#ffffff",colorStroke:"#808080",size:5,gapX:32,gapY:32,strokeWidth:1,sizeRange:0,opacityRange:0,shape:"triangle"}},{name:"Tree line",params:{...r.defaultPatternSizing,colorBack:"#f4fce7",colorFill:"#052e19",colorStroke:"#000000",size:8,gapX:20,gapY:90,strokeWidth:0,sizeRange:1,opacityRange:.6,shape:"circle"}},{name:"Wallpaper",params:{...r.defaultPatternSizing,colorBack:"#204030",colorFill:"#000000",colorStroke:"#bd955b",size:9,gapX:32,gapY:32,strokeWidth:1,sizeRange:0,opacityRange:0,shape:"diamond"}}],I=(0,o.memo)(function({colorBack:e=M.params.colorBack,colorFill:o=M.params.colorFill,colorStroke:a=M.params.colorStroke,size:s=M.params.size,gapX:n=M.params.gapX,gapY:l=M.params.gapY,strokeWidth:u=M.params.strokeWidth,sizeRange:f=M.params.sizeRange,opacityRange:m=M.params.opacityRange,shape:p=M.params.shape,fit:d=M.params.fit,scale:g=M.params.scale,rotation:h=M.params.rotation,originX:v=M.params.originX,originY:x=M.params.originY,offsetX:_=M.params.offsetX,offsetY:b=M.params.offsetY,worldWidth:y=M.params.worldWidth,worldHeight:w=M.params.worldHeight,maxPixelCount:S=0x136a400,...A}){let C={u_colorBack:(0,i.getShaderColorFromString)(e),u_colorFill:(0,i.getShaderColorFromString)(o),u_colorStroke:(0,i.getShaderColorFromString)(a),u_dotSize:s,u_gapX:n,u_gapY:l,u_strokeWidth:u,u_sizeRange:f,u_opacityRange:m,u_shape:O[p],u_fit:r.ShaderFitOptions[d],u_scale:g,u_rotation:h,u_offsetX:_,u_offsetY:b,u_originX:v,u_originY:x,u_worldWidth:y,u_worldHeight:w};return(0,c.jsx)(t.ShaderMount,{...A,maxPixelCount:S,fragmentShader:E,uniforms:C})},a.colorPropsAreEqual),V={maxColorCount:10},D=`#version 300 es
precision mediump float;

uniform float u_time;
uniform float u_scale;

uniform vec4 u_colors[${V.maxColorCount}];
uniform float u_colorsCount;
uniform float u_stepsPerColor;
uniform float u_softness;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.simplexNoise}

float getNoise(vec2 uv, float t) {
  float noise = .5 * snoise(uv - vec2(0., .3 * t));
  noise += .5 * snoise(2. * uv + vec2(0., .32 * t));

  return noise;
}

float steppedSmooth(float m, float steps, float softness) { 
  float stepT = floor(m * steps) / steps;
  float f = m * steps - floor(m * steps);
  float fw = steps * fwidth(m);
  float smoothed = smoothstep(.5 - softness, min(1., .5 + softness + fw), f);
  return stepT + smoothed / steps;
}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= .1;

  float t = .2 * u_time;

  float shape = .5 + .5 * getNoise(shape_uv, t);

  bool u_extraSides = true;

  float mixer = shape * (u_colorsCount - 1.);
  if (u_extraSides == true) {
    mixer = (shape - .5 / u_colorsCount) * u_colorsCount;
  }

  float steps = max(1., u_stepsPerColor);

  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  for (int i = 1; i < ${V.maxColorCount}; i++) {
      if (i >= int(u_colorsCount)) break;

      float localM = clamp(mixer - float(i - 1), 0., 1.);
      localM = steppedSmooth(localM, steps, .5 * u_softness);

      vec4 c = u_colors[i];
      c.rgb *= c.a;
      gradient = mix(gradient, c, localM);
  }

  if (u_extraSides == true) {
   if ((mixer < 0.) || (mixer > (u_colorsCount - 1.))) {
     float localM = mixer + 1.;
     if (mixer > (u_colorsCount - 1.)) {
       localM = mixer - (u_colorsCount - 1.);
     }
     localM = steppedSmooth(localM, steps, .5 * u_softness);
     vec4 cFst = u_colors[0];
     cFst.rgb *= cFst.a;
     vec4 cLast = u_colors[int(u_colorsCount - 1.)];
     cLast.rgb *= cLast.a;
     gradient = mix(cLast, cFst, localM);
   }
  }

  vec3 color = gradient.rgb;
  float opacity = gradient.a;

  ${s.colorBandingFix}

  fragColor = vec4(color, opacity);
}
`,T={name:"Default",params:{...r.defaultPatternSizing,scale:.6,speed:.5,frame:0,colors:["#4449CF","#FFD1E0","#F94446","#FFD36B","#FFFFFF"],stepsPerColor:2,softness:0}},N={name:"Bubblegum",params:{...r.defaultPatternSizing,speed:2,frame:0,colors:["#ffffff","#ff9e9e","#5f57ff","#00f7ff"],stepsPerColor:1,softness:1,scale:1.6}},j=[T,{name:"Spots",params:{...r.defaultPatternSizing,speed:.6,frame:0,colors:["#ff7b00","#f9ffeb","#320d82"],stepsPerColor:1,softness:0,scale:1}},{name:"First contact",params:{...r.defaultPatternSizing,speed:2,frame:0,colors:["#e8cce6","#120d22","#442c44","#e6baba","#fff5f5"],stepsPerColor:2,softness:0,scale:.2}},N],W=(0,o.memo)(function({speed:e=T.params.speed,frame:o=T.params.frame,colors:a=T.params.colors,stepsPerColor:s=T.params.stepsPerColor,softness:n=T.params.softness,fit:l=T.params.fit,scale:u=T.params.scale,rotation:f=T.params.rotation,originX:m=T.params.originX,originY:p=T.params.originY,offsetX:d=T.params.offsetX,offsetY:g=T.params.offsetY,worldWidth:h=T.params.worldWidth,worldHeight:v=T.params.worldHeight,...x}){let _={u_colors:a.map(i.getShaderColorFromString),u_colorsCount:a.length,u_stepsPerColor:s,u_softness:n,u_fit:r.ShaderFitOptions[l],u_scale:u,u_rotation:f,u_offsetX:d,u_offsetY:g,u_originX:m,u_originY:p,u_worldWidth:h,u_worldHeight:v};return(0,c.jsx)(t.ShaderMount,{...x,speed:e,frame:o,fragmentShader:D,uniforms:_})},a.colorPropsAreEqual),G={maxColorCount:8,maxBallsCount:20},Y=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${G.maxColorCount}];
uniform float u_colorsCount;
uniform float u_size;
uniform float u_sizeRange;
uniform float u_count;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.textureRandomizerR}
float noise(float x) {
  float i = floor(x);
  float f = fract(x);
  float u = f * f * (3.0 - 2.0 * f);
  vec2 p0 = vec2(i, 0.0);
  vec2 p1 = vec2(i + 1.0, 0.0);
  return mix(randomR(p0), randomR(p1), u);
}

float getBallShape(vec2 uv, vec2 c, float p) {
  float s = .5 * length(uv - c);
  s = 1. - clamp(s, 0., 1.);
  s = pow(s, p);
  return s;
}

void main() {
  vec2 shape_uv = v_objectUV;

  shape_uv += .5;

  const float firstFrameOffset = 2503.4;
  float t = .2 * (u_time + firstFrameOffset);

  vec3 totalColor = vec3(0.);
  float totalShape = 0.;
  float totalOpacity = 0.;

  for (int i = 0; i < ${G.maxBallsCount}; i++) {
    if (i >= int(ceil(u_count))) break;

    float idxFract = float(i) / float(${G.maxBallsCount});
    float angle = TWO_PI * idxFract;

    float speed = 1. - .2 * idxFract;
    float noiseX = noise(angle * 10. + float(i) + t * speed);
    float noiseY = noise(angle * 20. + float(i) - t * speed);

    vec2 pos = vec2(.5) + 1e-4 + .9 * (vec2(noiseX, noiseY) - .5);

    int safeIndex = i % int(u_colorsCount + 0.5);
    vec4 ballColor = u_colors[safeIndex];
    ballColor.rgb *= ballColor.a;

    float sizeFrac = 1.;
    if (float(i) > floor(u_count - 1.)) {
      sizeFrac *= fract(u_count);
    }

    float shape = getBallShape(shape_uv, pos, 45. - 30. * u_size * sizeFrac);
    shape *= pow(u_size, .2);
    shape = smoothstep(0., 1., shape);

    totalColor += ballColor.rgb * shape;
    totalShape += shape;
    totalOpacity += ballColor.a * shape;
  }

  totalColor /= max(totalShape, 1e-4);
  totalOpacity /= max(totalShape, 1e-4);

  float edge_width = fwidth(totalShape);
  float finalShape = smoothstep(.4, .4 + edge_width, totalShape);

  vec3 color = totalColor * finalShape;
  float opacity = totalOpacity * finalShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${s.colorBandingFix}

  fragColor = vec4(color, opacity);
}
`,Q={name:"Default",params:{...r.defaultObjectSizing,scale:1,speed:1,frame:0,colorBack:"#000000",colors:["#6e33cc","#ff5500","#ffc105","#ffc800","#f585ff"],count:10,size:.83}},H={name:"Ink Drops",params:{...r.defaultObjectSizing,scale:1,speed:2,frame:0,colorBack:"#ffffff00",colors:["#000000"],count:18,size:.1}},L={name:"Background",params:{...r.defaultObjectSizing,speed:.5,frame:0,colors:["#ae00ff","#00ff95","#ffc105"],colorBack:"#2a273f",count:13,size:.81,scale:4,rotation:0,offsetX:-.3}},X=[Q,H,{name:"Solar",params:{...r.defaultObjectSizing,speed:1,frame:0,colors:["#ffc800","#ff5500","#ffc105"],colorBack:"#102f84",count:7,size:.75,scale:1}},L],q=(0,o.memo)(function({speed:e=Q.params.speed,frame:o=Q.params.frame,colorBack:a=Q.params.colorBack,colors:s=Q.params.colors,size:n=Q.params.size,count:l=Q.params.count,fit:u=Q.params.fit,rotation:f=Q.params.rotation,scale:m=Q.params.scale,originX:p=Q.params.originX,originY:d=Q.params.originY,offsetX:h=Q.params.offsetX,offsetY:v=Q.params.offsetY,worldWidth:x=Q.params.worldWidth,worldHeight:_=Q.params.worldHeight,...b}){let y={u_colorBack:(0,i.getShaderColorFromString)(a),u_colors:s.map(i.getShaderColorFromString),u_colorsCount:s.length,u_size:n,u_count:l,u_noiseTexture:(0,g.getShaderNoiseTexture)(),u_fit:r.ShaderFitOptions[u],u_rotation:f,u_scale:m,u_offsetX:h,u_offsetY:v,u_originX:p,u_originY:d,u_worldWidth:x,u_worldHeight:_};return(0,c.jsx)(t.ShaderMount,{...b,speed:e,frame:o,fragmentShader:Y,uniforms:y})},a.colorPropsAreEqual),J=`#version 300 es
precision mediump float;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform float u_shape;
uniform float u_frequency;
uniform float u_amplitude;
uniform float u_spacing;
uniform float u_proportion;
uniform float u_softness;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= 4.;

  float wave = .5 * cos(shape_uv.x * u_frequency * TWO_PI);
  float zigzag = 2. * abs(fract(shape_uv.x * u_frequency) - .5);
  float irregular = sin(shape_uv.x * .25 * u_frequency * TWO_PI) * cos(shape_uv.x * u_frequency * TWO_PI);
  float irregular2 = .75 * (sin(shape_uv.x * u_frequency * TWO_PI) + .5 * cos(shape_uv.x * .5 * u_frequency * TWO_PI));

  float offset = mix(zigzag, wave, smoothstep(0., 1., u_shape));
  offset = mix(offset, irregular, smoothstep(1., 2., u_shape));
  offset = mix(offset, irregular2, smoothstep(2., 3., u_shape));
  offset *= 2. * u_amplitude;

  float spacing = (.001 + u_spacing);
  float shape = .5 + .5 * sin((shape_uv.y + offset) * PI / spacing);

  float aa = .0001 + fwidth(shape);
  float dc = 1. - clamp(u_proportion, 0., 1.);
  float e0 = dc - u_softness - aa;
  float e1 = dc + u_softness + aa;
  float res = smoothstep(min(e0, e1), max(e0, e1), shape);
  
  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  fragColor = vec4(color, opacity);
}
`,K={name:"Default",params:{...r.defaultPatternSizing,scale:.6,colorFront:"#ffbb00",colorBack:"#000000",shape:0,frequency:.5,amplitude:.5,spacing:1.2,proportion:.1,softness:0}},Z=[K,{name:"Groovy",params:{...r.defaultPatternSizing,scale:5,rotation:90,colorFront:"#fcfcee",colorBack:"#ff896b",shape:3,frequency:.2,amplitude:.25,spacing:1.17,proportion:.57,softness:0}},{name:"Tangled up",params:{...r.defaultPatternSizing,scale:.5,rotation:0,colorFront:"#133a41",colorBack:"#c2d8b6",shape:2.07,frequency:.44,amplitude:.57,spacing:1.05,proportion:.75,softness:0}},{name:"Ride the wave",params:{...r.defaultPatternSizing,scale:1.7,rotation:0,colorFront:"#fdffe6",colorBack:"#1f1f1f",shape:2.25,frequency:.2,amplitude:1,spacing:1.25,proportion:1,softness:0}}],$=(0,o.memo)(function({colorFront:e=K.params.colorFront,colorBack:o=K.params.colorBack,shape:a=K.params.shape,frequency:s=K.params.frequency,amplitude:n=K.params.amplitude,spacing:l=K.params.spacing,proportion:u=K.params.proportion,softness:f=K.params.softness,fit:m=K.params.fit,scale:p=K.params.scale,rotation:d=K.params.rotation,offsetX:g=K.params.offsetX,offsetY:h=K.params.offsetY,originX:v=K.params.originX,originY:x=K.params.originY,worldWidth:_=K.params.worldWidth,worldHeight:b=K.params.worldHeight,maxPixelCount:y=0x136a400,...w}){let S={u_colorFront:(0,i.getShaderColorFromString)(e),u_colorBack:(0,i.getShaderColorFromString)(o),u_shape:a,u_frequency:s,u_amplitude:n,u_spacing:l,u_proportion:u,u_softness:f,u_fit:r.ShaderFitOptions[m],u_scale:p,u_rotation:d,u_offsetX:g,u_offsetY:h,u_originX:v,u_originY:x,u_worldWidth:_,u_worldHeight:b};return(0,c.jsx)(t.ShaderMount,{...w,fragmentShader:J,uniforms:S})},a.colorPropsAreEqual),ee=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform float u_proportion;
uniform float u_softness;
uniform float u_octaveCount;
uniform float u_persistence;
uniform float u_lacunarity;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}

float hash11(float p) {
  p = fract(p * 0.3183099) + 0.1;
  p *= p + 19.19;
  return fract(p * p);
}

float hash21(vec2 p) {
  p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
  p += dot(p, p + 19.19);
  return fract(p.x * p.y);
}

float hash31(vec3 p) {
  p = fract(p * 0.3183099) + 0.1;
  p += dot(p, p.yzx + 19.19);
  return fract(p.x * (p.y + p.z));
}

vec3 hash33(vec3 p) {
  p = fract(p * 0.3183099) + 0.1;
  p += dot(p, p.yzx + 19.19);
  return fract(vec3(p.x * p.y, p.y * p.z, p.z * p.x));
}

vec3 gradientSafe(vec3 p) {
  vec3 h = hash33(p) * 2.0 - 1.;
  return normalize(h + 0.001);
}

vec3 gradientPredefined(float hash) {
  int idx = int(hash * 12.0) % 12;

  if (idx == 0) return vec3(1, 1, 0);
  if (idx == 1) return vec3(-1, 1, 0);
  if (idx == 2) return vec3(1, -1, 0);
  if (idx == 3) return vec3(-1, -1, 0);
  if (idx == 4) return vec3(1, 0, 1);
  if (idx == 5) return vec3(-1, 0, 1);
  if (idx == 6) return vec3(1, 0, -1);
  if (idx == 7) return vec3(-1, 0, -1);
  if (idx == 8) return vec3(0, 1, 1);
  if (idx == 9) return vec3(0, -1, 1);
  if (idx == 10) return vec3(0, 1, -1);
  return vec3(0, -1, -1);// idx == 11
}

float interpolateSafe(float v000, float v001, float v010, float v011,
float v100, float v101, float v110, float v111, vec3 t) {
  t = clamp(t, 0.0, 1.0);

  float v00 = mix(v000, v100, t.x);
  float v01 = mix(v001, v101, t.x);
  float v10 = mix(v010, v110, t.x);
  float v11 = mix(v011, v111, t.x);

  float v0 = mix(v00, v10, t.y);
  float v1 = mix(v01, v11, t.y);

  return mix(v0, v1, t.z);
}

vec3 fade(vec3 t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float perlinNoise(vec3 position, float seed) {
  position += vec3(seed * 127.1, seed * 311.7, seed * 74.7);

  vec3 i = floor(position);
  vec3 f = fract(position);
  float h000 = hash31(i);
  float h001 = hash31(i + vec3(0, 0, 1));
  float h010 = hash31(i + vec3(0, 1, 0));
  float h011 = hash31(i + vec3(0, 1, 1));
  float h100 = hash31(i + vec3(1, 0, 0));
  float h101 = hash31(i + vec3(1, 0, 1));
  float h110 = hash31(i + vec3(1, 1, 0));
  float h111 = hash31(i + vec3(1, 1, 1));
  vec3 g000 = gradientPredefined(h000);
  vec3 g001 = gradientPredefined(h001);
  vec3 g010 = gradientPredefined(h010);
  vec3 g011 = gradientPredefined(h011);
  vec3 g100 = gradientPredefined(h100);
  vec3 g101 = gradientPredefined(h101);
  vec3 g110 = gradientPredefined(h110);
  vec3 g111 = gradientPredefined(h111);
  float v000 = dot(g000, f - vec3(0, 0, 0));
  float v001 = dot(g001, f - vec3(0, 0, 1));
  float v010 = dot(g010, f - vec3(0, 1, 0));
  float v011 = dot(g011, f - vec3(0, 1, 1));
  float v100 = dot(g100, f - vec3(1, 0, 0));
  float v101 = dot(g101, f - vec3(1, 0, 1));
  float v110 = dot(g110, f - vec3(1, 1, 0));
  float v111 = dot(g111, f - vec3(1, 1, 1));

  vec3 u = fade(f);
  return interpolateSafe(v000, v001, v010, v011, v100, v101, v110, v111, u);
}

float p_noise(vec3 position, int octaveCount, float persistence, float lacunarity) {
  float value = 0.0;
  float amplitude = 1.0;
  float frequency = 10.0;
  float maxValue = 0.0;
  octaveCount = clamp(octaveCount, 1, 8);

  for (int i = 0; i < octaveCount; i++) {
    float seed = float(i) * 0.7319;
    value += perlinNoise(position * frequency, seed) * amplitude;
    maxValue += amplitude;
    amplitude *= persistence;
    frequency *= lacunarity;
  }
  return value;
}

float get_max_amp(float persistence, float octaveCount) {
  persistence = clamp(persistence * 0.999, 0.0, 0.999);
  octaveCount = clamp(octaveCount, 1.0, 8.0);

  if (abs(persistence - 1.0) < 0.001) {
    return octaveCount;
  }

  return (1.0 - pow(persistence, octaveCount)) / max(1e-4, (1.0 - persistence));
}

void main() {
  vec2 uv = v_patternUV;
  uv *= .5;
  
  float t = .2 * u_time;

  vec3 p = vec3(uv, t);

  float octCount = clamp(floor(u_octaveCount), 1.0, 8.0);
  float persistence = clamp(u_persistence, 0., 1.);
  float noise = p_noise(p, int(octCount), persistence, u_lacunarity);

  float max_amp = get_max_amp(persistence, octCount);
  float noise_normalized = clamp((noise + max_amp) / max(1e-4, (2. * max_amp)) + (u_proportion - .5), 0.0, 1.0);
  float sharpness = clamp(u_softness, 0., 1.);
  float smooth_w = 0.5 * max(fwidth(noise_normalized), 0.001);
  float res = smoothstep(
    .5 - .5 * sharpness - smooth_w,
    .5 + .5 * sharpness + smooth_w,
    noise_normalized
  );

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  ${s.colorBandingFix}

  fragColor = vec4(color, opacity);
}
`,et={name:"Default",params:{...r.defaultPatternSizing,speed:.5,frame:0,colorBack:"#632ad5",colorFront:"#fccff7",proportion:.35,softness:.1,octaveCount:1,persistence:1,lacunarity:1.5}},eo=[et,{name:"Nintendo Water",params:{...r.defaultPatternSizing,scale:5,speed:.4,frame:0,colorBack:"#2d69d4",colorFront:"#d1eefc",proportion:.42,softness:0,octaveCount:2,persistence:.55,lacunarity:1.8}},{name:"Moss",params:{...r.defaultPatternSizing,scale:1/.15,speed:.02,frame:0,colorBack:"#05ff4a",colorFront:"#262626",proportion:.65,softness:.35,octaveCount:6,persistence:1,lacunarity:2.55}},{name:"Worms",params:{...r.defaultPatternSizing,scale:.9,speed:0,frame:0,colorBack:"#ffffff00",colorFront:"#595959",proportion:.5,softness:0,octaveCount:1,persistence:1,lacunarity:1.5}}],ea=(0,o.memo)(function({speed:e=et.params.speed,frame:o=et.params.frame,colorFront:a=et.params.colorFront,colorBack:s=et.params.colorBack,proportion:n=et.params.proportion,softness:l=et.params.softness,octaveCount:u=et.params.octaveCount,persistence:f=et.params.persistence,lacunarity:m,fit:p=et.params.fit,worldWidth:d=et.params.worldWidth,worldHeight:g=et.params.worldHeight,scale:h=et.params.scale,rotation:v=et.params.rotation,originX:x=et.params.originX,originY:_=et.params.originY,offsetX:b=et.params.offsetX,offsetY:y=et.params.offsetY,...w}){let S={u_colorBack:(0,i.getShaderColorFromString)(s),u_colorFront:(0,i.getShaderColorFromString)(a),u_proportion:n,u_softness:l??et.params.softness,u_octaveCount:u??et.params.octaveCount,u_persistence:f??et.params.persistence,u_lacunarity:m??et.params.lacunarity,u_fit:r.ShaderFitOptions[p],u_scale:h,u_rotation:v,u_offsetX:b,u_offsetY:y,u_originX:x,u_originY:_,u_worldWidth:d,u_worldHeight:g};return(0,c.jsx)(t.ShaderMount,{...w,speed:e,frame:o,fragmentShader:ee,uniforms:S})},a.colorPropsAreEqual),er={maxColorCount:5},ei=`#version 300 es
precision mediump float;

uniform float u_time;

uniform float u_scale;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colors[${er.maxColorCount}];
uniform float u_colorsCount;

uniform float u_stepsPerColor;
uniform vec4 u_colorGlow;
uniform vec4 u_colorGap;
uniform float u_distortion;
uniform float u_gap;
uniform float u_glow;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.textureRandomizerGB}

vec4 voronoi(vec2 x, float t) {
  vec2 ip = floor(x);
  vec2 fp = fract(x);

  vec2 mg, mr;
  float md = 8.;
  float rand = 0.;

  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 o = randomGB(ip + g);
      float raw_hash = o.x;
      o = .5 + u_distortion * sin(t + TWO_PI * o);
      vec2 r = g + o - fp;
      float d = dot(r, r);

      if (d < md) {
        md = d;
        mr = r;
        mg = g;
        rand = raw_hash;
      }
    }
  }

  md = 8.;
  for (int j = -2; j <= 2; j++) {
    for (int i = -2; i <= 2; i++) {
      vec2 g = mg + vec2(float(i), float(j));
      vec2 o = randomGB(ip + g);
      o = .5 + u_distortion * sin(t + TWO_PI * o);
      vec2 r = g + o - fp;
      if (dot(mr - r, mr - r) > .00001) {
        md = min(md, dot(.5 * (mr + r), normalize(r - mr)));
      }
    }
  }

  return vec4(md, mr, rand);
}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= 1.25;

  float t = u_time;

  vec4 voronoiRes = voronoi(shape_uv, t);

  float shape = clamp(voronoiRes.w, 0., 1.);
  float mixer = shape * (u_colorsCount - 1.);
  mixer = (shape - .5 / u_colorsCount) * u_colorsCount;
  float steps = max(1., u_stepsPerColor);

  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  for (int i = 1; i < ${er.maxColorCount}; i++) {
      if (i >= int(u_colorsCount)) break;
      float localT = clamp(mixer - float(i - 1), 0.0, 1.0);
      localT = round(localT * steps) / steps;
      vec4 c = u_colors[i];
      c.rgb *= c.a;
      gradient = mix(gradient, c, localT);
  }

  if ((mixer < 0.) || (mixer > (u_colorsCount - 1.))) {
    float localT = mixer + 1.;
    if (mixer > (u_colorsCount - 1.)) {
      localT = mixer - (u_colorsCount - 1.);
    }
    localT = round(localT * steps) / steps;
    vec4 cFst = u_colors[0];
    cFst.rgb *= cFst.a;
    vec4 cLast = u_colors[int(u_colorsCount - 1.)];
    cLast.rgb *= cLast.a;
    gradient = mix(cLast, cFst, localT);
  }

  vec3 cellColor = gradient.rgb;
  float cellOpacity = gradient.a;

  float glows = length(voronoiRes.yz * u_glow);
  glows = pow(glows, 1.5);

  vec3 color = mix(cellColor, u_colorGlow.rgb * u_colorGlow.a, u_colorGlow.a * glows);
  float opacity = cellOpacity + u_colorGlow.a * glows;

  float edge = voronoiRes.x;
  float smoothEdge = .02 / (2. * u_scale) * (1. + .5 * u_gap);
  edge = smoothstep(u_gap - smoothEdge, u_gap + smoothEdge, edge);

  color = mix(u_colorGap.rgb * u_colorGap.a, color, edge);
  opacity = mix(u_colorGap.a, opacity, edge);

  fragColor = vec4(color, opacity);
}
`,es={name:"Default",params:{...r.defaultPatternSizing,speed:.5,frame:0,colors:["#ff8247","#ffe53d"],stepsPerColor:3,colorGlow:"#ffffff",colorGap:"#2e0000",distortion:.4,gap:.04,glow:0,scale:.5}},en={name:"Cells",params:{...r.defaultPatternSizing,scale:.5,speed:.5,frame:0,colors:["#ffffff"],stepsPerColor:1,colorGlow:"#ffffff",colorGap:"#000000",distortion:.5,gap:.03,glow:.8}},el={name:"Bubbles",params:{...r.defaultPatternSizing,scale:.75,speed:.5,frame:0,colors:["#83c9fb"],stepsPerColor:1,colorGlow:"#ffffff",colorGap:"#ffffff",distortion:.4,gap:0,glow:1}},ec=[es,{name:"Lights",params:{...r.defaultPatternSizing,scale:3.3,speed:.5,frame:0,colors:["#fffffffc","#bbff00","#00ffff"],colorGlow:"#ff00d0",colorGap:"#ff00d0",stepsPerColor:2,distortion:.38,gap:0,glow:1}},en,el],eu=(0,o.memo)(function({speed:e=es.params.speed,frame:o=es.params.frame,colors:a=es.params.colors,stepsPerColor:s=es.params.stepsPerColor,colorGlow:n=es.params.colorGlow,colorGap:l=es.params.colorGap,distortion:u=es.params.distortion,gap:f=es.params.gap,glow:m=es.params.glow,fit:p=es.params.fit,scale:d=es.params.scale,rotation:h=es.params.rotation,originX:v=es.params.originX,originY:x=es.params.originY,offsetX:_=es.params.offsetX,offsetY:b=es.params.offsetY,worldWidth:y=es.params.worldWidth,worldHeight:w=es.params.worldHeight,...S}){let A={u_colors:a.map(i.getShaderColorFromString),u_colorsCount:a.length,u_stepsPerColor:s,u_colorGlow:(0,i.getShaderColorFromString)(n),u_colorGap:(0,i.getShaderColorFromString)(l),u_distortion:u,u_gap:f,u_glow:m,u_noiseTexture:(0,g.getShaderNoiseTexture)(),u_fit:r.ShaderFitOptions[p],u_scale:d,u_rotation:h,u_offsetX:_,u_offsetY:b,u_originX:v,u_originY:x,u_worldWidth:y,u_worldHeight:w};return(0,c.jsx)(t.ShaderMount,{...S,speed:e,frame:o,fragmentShader:ei,uniforms:A})},a.colorPropsAreEqual),ef={maxColorCount:10},em=`#version 300 es
precision mediump float;

uniform float u_time;
uniform float u_scale;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colors[${ef.maxColorCount}];
uniform float u_colorsCount;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.rotation2}
float randomG(vec2 p) {
  vec2 uv = floor(p) / 100. + .5;
  return texture(u_noiseTexture, fract(uv)).g;
}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomG(i);
  float b = randomG(i + vec2(1.0, 0.0));
  float c = randomG(i + vec2(0.0, 1.0));
  float d = randomG(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}


void main() {
  vec2 uv = v_patternUV;
  uv *= .5;

  const float firstFrameOffset = 118.;
  float t = 0.0625 * (u_time + firstFrameOffset);

  float n1 = valueNoise(uv * 1. + t);
  float n2 = valueNoise(uv * 2. - t);
  float angle = n1 * TWO_PI;
  uv.x += 4. * u_distortion * n2 * cos(angle);
  uv.y += 4. * u_distortion * n2 * sin(angle);

  float swirl = u_swirl;
  for (int i = 1; i <= 20; i++) {
    if (i >= int(u_swirlIterations)) break;
    float iFloat = float(i);
//    swirl *= (1. - smoothstep(.0, .25, length(fwidth(uv))));
    uv.x += swirl / iFloat * cos(t + iFloat * 1.5 * uv.y);
    uv.y += swirl / iFloat * cos(t + iFloat * 1. * uv.x);
  }

  float proportion = clamp(u_proportion, 0., 1.);

  float shape = 0.;
  if (u_shape < .5) {
    vec2 checksShape_uv = uv * (.5 + 3.5 * u_shapeScale);
    shape = .5 + .5 * sin(checksShape_uv.x) * cos(checksShape_uv.y);
    shape += .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
  } else if (u_shape < 1.5) {
    vec2 stripesShape_uv = uv * (2. * u_shapeScale);
    float f = fract(stripesShape_uv.y);
    shape = smoothstep(.0, .55, f) * (1.0 - smoothstep(.45, 1., f));
    shape += .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
  } else {
    float shapeScaling = 5. * (1. - u_shapeScale);
    float e0 = 0.45 - shapeScaling;
    float e1 = 0.55 + shapeScaling;
    shape = smoothstep(min(e0, e1), max(e0, e1), 1.0 - uv.y + 0.3 * (proportion - 0.5));
  }

  float mixer = shape * (u_colorsCount - 1.);
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  float aa = fwidth(shape);
  for (int i = 1; i < ${ef.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;
    float m = clamp(mixer - float(i - 1), 0.0, 1.0);

    float localMixerStart = floor(m);
    float softness = .5 * u_softness + fwidth(m);
    float smoothed = smoothstep(max(0., .5 - softness - aa), min(1., .5 + softness + aa), m - localMixerStart);
    float stepped = localMixerStart + smoothed;

    m = mix(stepped, m, u_softness);

    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  vec3 color = gradient.rgb;
  float opacity = gradient.a;

  ${s.colorBandingFix}

  fragColor = vec4(color, opacity);
}
`,ep={checks:0,stripes:1,edge:2},ed={name:"Default",params:{...r.defaultPatternSizing,rotation:0,speed:1,frame:0,colors:["#121212","#9470ff","#121212","#8838ff"],proportion:.45,softness:1,distortion:.25,swirl:.8,swirlIterations:10,shapeScale:.1,shape:"checks"}},eg=[ed,{name:"Cauldron Pot",params:{...r.defaultPatternSizing,scale:.9,rotation:160,speed:10,frame:0,colors:["#a7e58b","#324472","#0a180d"],proportion:.64,softness:1.5,distortion:.2,swirl:.86,swirlIterations:7,shapeScale:.6,shape:"edge"}},{name:"Live Ink",params:{...r.defaultPatternSizing,scale:1.2,rotation:44,offsetY:-.3,speed:2.5,frame:0,colors:["#111314","#9faeab","#f3fee7","#f3fee7"],proportion:.05,softness:0,distortion:.25,swirl:.8,swirlIterations:10,shapeScale:.28,shape:"checks"}},{name:"Kelp",params:{...r.defaultPatternSizing,scale:.8,rotation:50,speed:20,frame:0,colors:["#dbff8f","#404f3e","#091316"],proportion:.67,softness:0,distortion:0,swirl:.2,swirlIterations:3,shapeScale:1,shape:"stripes"}},{name:"Nectar",params:{...r.defaultPatternSizing,scale:2,offsetY:.6,rotation:0,speed:4.2,frame:0,colors:["#151310","#d3a86b","#f0edea"],proportion:.24,softness:1,distortion:.21,swirl:.57,swirlIterations:10,shapeScale:.75,shape:"edge"}},{name:"Passion",params:{...r.defaultPatternSizing,scale:2.5,rotation:1.35,speed:3,frame:0,colors:["#3b1515","#954751","#ffc085"],proportion:.5,softness:1,distortion:.09,swirl:.9,swirlIterations:6,shapeScale:.25,shape:"checks"}}],eh=(0,o.memo)(function({speed:e=ed.params.speed,frame:o=ed.params.frame,colors:a=ed.params.colors,proportion:s=ed.params.proportion,softness:n=ed.params.softness,distortion:l=ed.params.distortion,swirl:u=ed.params.swirl,swirlIterations:f=ed.params.swirlIterations,shapeScale:m=ed.params.shapeScale,shape:p=ed.params.shape,fit:d=ed.params.fit,scale:h=ed.params.scale,rotation:v=ed.params.rotation,originX:x=ed.params.originX,originY:_=ed.params.originY,offsetX:b=ed.params.offsetX,offsetY:y=ed.params.offsetY,worldWidth:w=ed.params.worldWidth,worldHeight:S=ed.params.worldHeight,...A}){let C={u_colors:a.map(i.getShaderColorFromString),u_colorsCount:a.length,u_proportion:s,u_softness:n,u_distortion:l,u_swirl:u,u_swirlIterations:f,u_shapeScale:m,u_shape:ep[p],u_noiseTexture:(0,g.getShaderNoiseTexture)(),u_scale:h,u_rotation:v,u_fit:r.ShaderFitOptions[d],u_offsetX:b,u_offsetY:y,u_originX:x,u_originY:_,u_worldWidth:w,u_worldHeight:S};return(0,c.jsx)(t.ShaderMount,{...A,speed:e,frame:o,fragmentShader:em,uniforms:C})},a.colorPropsAreEqual),ev={maxColorCount:5},ex=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colorBloom;
uniform vec4 u_colors[${ev.maxColorCount}];
uniform float u_colorsCount;

uniform float u_density;
uniform float u_spotty;
uniform float u_midSize;
uniform float u_midIntensity;
uniform float u_intensity;
uniform float u_bloom;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.rotation2}
${s.textureRandomizerR}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomR(i);
  float b = randomR(i + vec2(1.0, 0.0));
  float c = randomR(i + vec2(0.0, 1.0));
  float d = randomR(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

${s.proceduralHash11}

float raysShape(vec2 uv, float r, float freq, float intensity, float radius) {
  float a = atan(uv.y, uv.x);
  vec2 left = vec2(a * freq, r);
  vec2 right = vec2(fract(a / TWO_PI) * TWO_PI * freq, r);
  float n_left = pow(valueNoise(left), intensity);
  float n_right = pow(valueNoise(right), intensity);
  float shape = mix(n_right, n_left, smoothstep(-.15, .15, uv.x));
  return shape;
}

void main() {
  vec2 shape_uv = v_objectUV;

  float t = .2 * u_time;

  float radius = length(shape_uv);
  float spots = 6.5 * abs(u_spotty);

  float intensity = 4. - 3. * clamp(u_intensity, 0., 1.);

  float delta = 1. - smoothstep(0., 1., radius);

  float midSize = 10. * abs(u_midSize);
  float ms_lo = 0.02 * midSize;
  float ms_hi = max(midSize, 1e-6);
  float middleShape = pow(u_midIntensity, 0.3) * (1. - smoothstep(ms_lo, ms_hi, 3.0 * radius));
  middleShape = pow(middleShape, 5.0);

  vec3 accumColor = vec3(0.0);
  float accumAlpha = 0.0;

  for (int i = 0; i < ${ev.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 rotatedUV = rotate(shape_uv, float(i) + 1.0);

    float r1 = radius * (1.0 + 0.4 * float(i)) - 3.0 * t;
    float r2 = 0.5 * radius * (1.0 + spots) - 2.0 * t;
    float density = 6. * u_density + step(.5, u_density) * pow(4.5 * (u_density - .5), 4.);
    float f = mix(1.0, 3.0 + 0.5 * float(i), hash11(float(i) * 15.)) * density;

    float ray = raysShape(rotatedUV, r1, 5.0 * f, intensity, radius);
    ray *= raysShape(rotatedUV, r2, 4.0 * f, intensity, radius);
    ray += (1. + 4. * ray) * middleShape;
    ray = clamp(ray, 0.0, 1.0);

    float srcAlpha = u_colors[i].a * ray;
    vec3 srcColor = u_colors[i].rgb * srcAlpha;

    vec3 alphaBlendColor = accumColor + (1.0 - accumAlpha) * srcColor;
    float alphaBlendAlpha = accumAlpha + (1.0 - accumAlpha) * srcAlpha;

    vec3 addBlendColor = accumColor + srcColor;
    float addBlendAlpha = accumAlpha + srcAlpha;

    accumColor = mix(alphaBlendColor, addBlendColor, u_bloom);
    accumAlpha = mix(alphaBlendAlpha, addBlendAlpha, u_bloom);
  }

  float overlayAlpha = u_colorBloom.a;
  vec3 overlayColor = u_colorBloom.rgb * overlayAlpha;

  vec3 colorWithOverlay = accumColor + accumAlpha * overlayColor;
  accumColor = mix(accumColor, colorWithOverlay, u_bloom);

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;

  vec3 color = accumColor + (1. - accumAlpha) * bgColor;
  float opacity = accumAlpha + (1. - accumAlpha) * u_colorBack.a;
  color = clamp(color, 0., 1.);
  opacity = clamp(opacity, 0., 1.);

  ${s.colorBandingFix}

  fragColor = vec4(color, opacity);
}
`,e_={name:"Default",params:{...r.defaultObjectSizing,offsetX:0,offsetY:-.55,colorBack:"#000000",colorBloom:"#0000ff",colors:["#a600ff6e","#6200fff0","#ffffff","#33fff5"],density:.3,spotty:.3,midIntensity:.4,midSize:.2,intensity:.8,bloom:.4,speed:.75,frame:0}},eb=[e_,{name:"Warp",params:{...r.defaultObjectSizing,colorBack:"#000000",colorBloom:"#222288",colors:["#ff47d4","#ff8c00","#ffffff"],density:.45,spotty:.15,midIntensity:.4,midSize:.33,intensity:.79,bloom:.4,speed:2,frame:0}},{name:"Linear",params:{...r.defaultObjectSizing,offsetX:.2,offsetY:-.8,colorBack:"#000000",colorBloom:"#eeeeee",colors:["#ffffff1f","#ffffff3d","#ffffff29"],density:.41,spotty:.25,midSize:.1,midIntensity:.75,intensity:.79,bloom:1,speed:.5,frame:0}},{name:"Ether",params:{...r.defaultObjectSizing,offsetX:-.6,colorBack:"#090f1d",colorBloom:"#ffffff",colors:["#148effa6","#c4dffebe","#232a47"],density:.03,spotty:.77,midSize:.1,midIntensity:.6,intensity:.6,bloom:.6,speed:1,frame:0}}],ey=(0,o.memo)(function({speed:e=e_.params.speed,frame:o=e_.params.frame,colorBloom:a=e_.params.colorBloom,colorBack:s=e_.params.colorBack,colors:n=e_.params.colors,density:l=e_.params.density,spotty:u=e_.params.spotty,midIntensity:f=e_.params.midIntensity,midSize:m=e_.params.midSize,intensity:p=e_.params.intensity,bloom:d=e_.params.bloom,fit:h=e_.params.fit,scale:v=e_.params.scale,rotation:x=e_.params.rotation,originX:_=e_.params.originX,originY:b=e_.params.originY,offsetX:y=e_.params.offsetX,offsetY:w=e_.params.offsetY,worldWidth:S=e_.params.worldWidth,worldHeight:A=e_.params.worldHeight,...C}){let B={u_colorBloom:(0,i.getShaderColorFromString)(a),u_colorBack:(0,i.getShaderColorFromString)(s),u_colors:n.map(i.getShaderColorFromString),u_colorsCount:n.length,u_density:l,u_spotty:u,u_midIntensity:f,u_midSize:m,u_intensity:p,u_bloom:d,u_noiseTexture:(0,g.getShaderNoiseTexture)(),u_fit:r.ShaderFitOptions[h],u_scale:v,u_rotation:x,u_offsetX:y,u_offsetY:w,u_originX:_,u_originY:b,u_worldWidth:S,u_worldHeight:A};return(0,c.jsx)(t.ShaderMount,{...C,speed:e,frame:o,fragmentShader:ex,uniforms:B})},a.colorPropsAreEqual),ew=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorFront;
uniform float u_density;
uniform float u_distortion;
uniform float u_strokeWidth;
uniform float u_strokeCap;
uniform float u_strokeTaper;
uniform float u_noise;
uniform float u_noiseFrequency;
uniform float u_softness;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.simplexNoise}

void main() {
  vec2 uv = 2. * v_patternUV;
  
  float t = u_time;
  float l = length(uv);
  float density = clamp(u_density, 0., 1.);
  l = pow(max(l, 1e-6), density);
  float angle = atan(uv.y, uv.x) - t;
  float angleNormalised = angle / TWO_PI;

  angleNormalised += .125 * u_noise * snoise(16. * pow(u_noiseFrequency, 3.) * uv);

  float offset = l + angleNormalised;
  offset -= u_distortion * (sin(4. * l - .5 * t) * cos(PI + l + .5 * t));
  float stripe = fract(offset);
  
  float shape = 2. * abs(stripe - .5);
  float width = 1. - clamp(u_strokeWidth, .005 * u_strokeTaper, 1.);


  float wCap = mix(width, (1. - stripe) * (1. - step(.5, stripe)), (1. - clamp(l, 0., 1.)));
  width = mix(width, wCap, u_strokeCap);
  width *= (1. - clamp(u_strokeTaper, 0., 1.) * l);

  float fw = fwidth(offset);
  float fwMult = 4. - 3. * (smoothstep(.05, .4, 2. * u_strokeWidth) * smoothstep(.05, .4, 2. * (1. - u_strokeWidth)));
  float pixelSize = mix(fwMult * fw, fwidth(shape), clamp(fw, 0., 1.));
  pixelSize = mix(pixelSize, .002, u_strokeCap * (1. - clamp(l, 0., 1.)));

  float res = smoothstep(width - pixelSize - u_softness, width + pixelSize + u_softness, shape);

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  ${s.colorBandingFix}

  fragColor = vec4(color, opacity);
}
`,eS={name:"Default",params:{...r.defaultPatternSizing,scale:1,colorBack:"#001429",colorFront:"#79D1FF",density:1,distortion:0,strokeWidth:.5,strokeTaper:0,strokeCap:0,noise:0,noiseFrequency:0,softness:0,speed:1,frame:0}},eA={name:"Droplet",params:{...r.defaultPatternSizing,colorBack:"#effafe",colorFront:"#bf40a0",density:.9,distortion:0,strokeWidth:.75,strokeTaper:.18,strokeCap:1,noise:.74,noiseFrequency:.33,softness:.02,speed:1,frame:0}},eC=[eS,{name:"Jungle",params:{...r.defaultPatternSizing,scale:1.3,density:.5,colorBack:"#a0ef2a",colorFront:"#288b18",distortion:0,strokeWidth:.5,strokeTaper:0,strokeCap:0,noise:1,noiseFrequency:.25,softness:0,speed:.75,frame:0}},eA,{name:"Swirl",params:{...r.defaultPatternSizing,scale:.45,colorBack:"#b3e6d9",colorFront:"#1a2b4d",density:.2,distortion:0,strokeWidth:.5,strokeTaper:0,strokeCap:0,noise:0,noiseFrequency:.3,softness:.5,speed:1,frame:0}}],eB=(0,o.memo)(function({speed:e=eS.params.speed,frame:o=eS.params.frame,colorBack:a=eS.params.colorBack,colorFront:s=eS.params.colorFront,density:n=eS.params.density,distortion:l=eS.params.distortion,strokeWidth:u=eS.params.strokeWidth,strokeTaper:f=eS.params.strokeTaper,strokeCap:m=eS.params.strokeCap,noiseFrequency:p=eS.params.noiseFrequency,noise:d=eS.params.noise,softness:g=eS.params.softness,fit:h=eS.params.fit,rotation:v=eS.params.rotation,scale:x=eS.params.scale,originX:_=eS.params.originX,originY:b=eS.params.originY,offsetX:y=eS.params.offsetX,offsetY:w=eS.params.offsetY,worldWidth:S=eS.params.worldWidth,worldHeight:A=eS.params.worldHeight,...C}){let B={u_colorBack:(0,i.getShaderColorFromString)(a),u_colorFront:(0,i.getShaderColorFromString)(s),u_density:n,u_distortion:l,u_strokeWidth:u,u_strokeTaper:f,u_strokeCap:m,u_noiseFrequency:p,u_noise:d,u_softness:g,u_fit:r.ShaderFitOptions[h],u_scale:x,u_rotation:v,u_offsetX:y,u_offsetY:w,u_originX:_,u_originY:b,u_worldWidth:S,u_worldHeight:A};return(0,c.jsx)(t.ShaderMount,{...C,speed:e,frame:o,fragmentShader:ew,uniforms:B})},a.colorPropsAreEqual),ek={maxColorCount:10},ez=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${ek.maxColorCount}];
uniform float u_colorsCount;
uniform float u_bandCount;
uniform float u_twist;
uniform float u_center;
uniform float u_proportion;
uniform float u_softness;
uniform float u_noise;
uniform float u_noiseFrequency;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.simplexNoise}
${s.rotation2}

void main() {
  vec2 shape_uv = v_objectUV;

  float l = length(shape_uv);
  l = max(1e-4, l);
  
  float t = u_time;

  float angle = ceil(u_bandCount) * atan(shape_uv.y, shape_uv.x) + t;
  float angle_norm = angle / TWO_PI;

  float twist = 3. * clamp(u_twist, 0., 1.);
  float offset = pow(l, -twist) + angle_norm;

  float shape = fract(offset);
  shape = 1. - abs(2. * shape - 1.);
  shape += u_noise * snoise(15. * pow(u_noiseFrequency, 2.) * shape_uv);

  float mid = smoothstep(.2, .2 + .8 * u_center, pow(l, twist));
  shape = mix(0., shape, mid);

  float proportion = clamp(u_proportion, 0., 1.);
  float exponent = mix(.25, 1., proportion * 2.);
  exponent = mix(exponent, 10., max(0., proportion * 2. - 1.));
  shape = pow(shape, exponent);

  float mixer = shape * u_colorsCount;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  
  float outerShape = 0.;
  for (int i = 1; i < ${ek.maxColorCount+1}; i++) {
    if (i > int(u_colorsCount)) break;

    float m = clamp(mixer - float(i - 1), 0., 1.);
    float aa = fwidth(m);
    m = smoothstep(.5 - .5 * u_softness - aa, .5 + .5 * u_softness + aa, m);

    if (i == 1) {
      outerShape = m;
    }

    vec4 c = u_colors[i - 1];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  float midAA = .1 * fwidth(pow(l, -twist));
  float outerMid = smoothstep(.2, .2 + midAA, pow(l, twist));
  outerShape = mix(0., outerShape, outerMid);

  vec3 color = gradient.rgb * outerShape;
  float opacity = gradient.a * outerShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  ${s.colorBandingFix}

  fragColor = vec4(color, opacity);
}
`,eR={name:"Default",params:{...r.defaultObjectSizing,speed:.32,frame:0,colorBack:"#330000",colors:["#ffd1d1","#ff8a8a","#660000"],bandCount:4,twist:.1,center:.2,proportion:.5,softness:0,noiseFrequency:.4,noise:.2}},eF={name:"Opening",params:{...r.defaultObjectSizing,offsetX:-.4,offsetY:1,speed:.5,frame:0,colorBack:"#ff8b61",colors:["#fefff0","#ffd8bd","#ff8b61"],bandCount:2,twist:.3,center:.2,proportion:.5,softness:0,noiseFrequency:0,noise:0,scale:1}},eU=[eR,{name:"007",params:{...r.defaultObjectSizing,speed:1,frame:0,colorBack:"#E9E7DA",colors:["#000000"],bandCount:5,twist:.3,center:0,proportion:0,softness:0,noiseFrequency:.5,noise:0}},eF,{name:"Candy",params:{...r.defaultObjectSizing,speed:1,frame:0,colorBack:"#ffcd66",colors:["#6bbceb","#d7b3ff","#ff9fff"],bandCount:2,twist:.15,center:.2,proportion:.5,softness:1,noiseFrequency:.5,noise:0}}],eE=(0,o.memo)(function({speed:e=eR.params.speed,frame:o=eR.params.frame,colorBack:a=eR.params.colorBack,colors:s=eR.params.colors,bandCount:n=eR.params.bandCount,twist:l=eR.params.twist,center:u=eR.params.center,proportion:f=eR.params.proportion,softness:m=eR.params.softness,noiseFrequency:p=eR.params.noiseFrequency,noise:d=eR.params.noise,fit:g=eR.params.fit,rotation:h=eR.params.rotation,scale:v=eR.params.scale,originX:x=eR.params.originX,originY:_=eR.params.originY,offsetX:b=eR.params.offsetX,offsetY:y=eR.params.offsetY,worldWidth:w=eR.params.worldWidth,worldHeight:S=eR.params.worldHeight,...A}){let C={u_colorBack:(0,i.getShaderColorFromString)(a),u_colors:s.map(i.getShaderColorFromString),u_colorsCount:s.length,u_bandCount:n,u_twist:l,u_center:u,u_proportion:f,u_softness:m,u_noiseFrequency:p,u_noise:d,u_fit:r.ShaderFitOptions[g],u_scale:v,u_rotation:h,u_offsetX:b,u_offsetY:y,u_originX:x,u_originY:_,u_worldWidth:w,u_worldHeight:S};return(0,c.jsx)(t.ShaderMount,{...A,speed:e,frame:o,fragmentShader:ez,uniforms:C})},a.colorPropsAreEqual),eO=`#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

${r.sizingUniformsDeclaration}

uniform vec4 u_colorBack;
uniform vec4 u_colorFront;
uniform float u_shape;
uniform float u_type;
uniform float u_pxSize;

out vec4 fragColor;

${s.simplexNoise}
${s.declarePI}
${s.proceduralHash11}
${s.proceduralHash21}

float getSimplexNoise(vec2 uv, float t) {
  float noise = .5 * snoise(uv - vec2(0., .3 * t));
  noise += .5 * snoise(2. * uv + vec2(0., .32 * t));

  return noise;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
  0,  8,  2, 10,
 12,  4, 14,  6,
  3, 11,  1,  9,
 15,  7, 13,  5
);

const int bayer8x8[64] = int[64](
   0, 32,  8, 40,  2, 34, 10, 42,
  48, 16, 56, 24, 50, 18, 58, 26,
  12, 44,  4, 36, 14, 46,  6, 38,
  60, 28, 52, 20, 62, 30, 54, 22,
   3, 35, 11, 43,  1, 33,  9, 41,
  51, 19, 59, 27, 49, 17, 57, 25,
  15, 47,  7, 39, 13, 45,  5, 37,
  63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(fract(uv / float(size)) * float(size));
  int index = pos.y * size + pos.x;

  if (size == 2) {
    return float(bayer2x2[index]) / 4.0;
  } else if (size == 4) {
    return float(bayer4x4[index]) / 16.0;
  } else if (size == 8) {
    return float(bayer8x8[index]) / 64.0;
  }
  return 0.0;
}


void main() {
  float t = .5 * u_time;

  #define USE_PATTERN_SIZING
  #define USE_OBJECT_SIZING
  #define USE_PIXELIZATION
  // #define ADD_HELPERS

  ${r.sizingUV}

  vec2 dithering_uv = pxSizeUv;
  vec2 ditheringNoise_uv = uv * u_resolution;
  vec2 shape_uv = objectUV;
  if (u_shape < 3.5) {
    shape_uv = patternUV;
  }

  float shape = 0.;
  if (u_shape < 1.5) {
    // Simplex noise
    shape_uv *= .001;

    shape = 0.5 + 0.5 * getSimplexNoise(shape_uv, t);
    shape = smoothstep(0.3, 0.9, shape);

  } else if (u_shape < 2.5) {
    // Warp
    shape_uv *= .003;

    for (float i = 1.0; i < 6.0; i++) {
      shape_uv.x += 0.6 / i * cos(i * 2.5 * shape_uv.y + t);
      shape_uv.y += 0.6 / i * cos(i * 1.5 * shape_uv.x + t);
    }

    shape = .15 / max(0.001, abs(sin(t - shape_uv.y - shape_uv.x)));
    shape = smoothstep(0.02, 1., shape);

  } else if (u_shape < 3.5) {
    // Dots
    shape_uv *= .05;

    float stripeIdx = floor(2. * shape_uv.x / TWO_PI);
    float rand = hash11(stripeIdx * 10.);
    rand = sign(rand - .5) * pow(.1 + abs(rand), .4);
    shape = sin(shape_uv.x) * cos(shape_uv.y - 5. * rand * t);
    shape = pow(abs(shape), 6.);

  } else if (u_shape < 4.5) {
    // Sine wave
    shape_uv *= 4.;

    float wave = cos(.5 * shape_uv.x - 2. * t) * sin(1.5 * shape_uv.x + t) * (.75 + .25 * cos(3. * t));
    shape = 1. - smoothstep(-1., 1., shape_uv.y + wave);

  } else if (u_shape < 5.5) {
    // Ripple

    float dist = length(shape_uv);
    float waves = sin(pow(dist, 1.7) * 7. - 3. * t) * .5 + .5;
    shape = waves;

  } else if (u_shape < 6.5) {
    // Swirl

    float l = length(shape_uv);
    float angle = 6. * atan(shape_uv.y, shape_uv.x) + 4. * t;
    float twist = 1.2;
    float offset = 1. / pow(max(l, 1e-6), twist) + angle / TWO_PI;
    float mid = smoothstep(0., 1., pow(l, twist));
    shape = mix(0., fract(offset), mid);

  } else {
    // Sphere
    shape_uv *= 2.;

    float d = 1. - pow(length(shape_uv), 2.);
    vec3 pos = vec3(shape_uv, sqrt(max(0., d)));
    vec3 lightPos = normalize(vec3(cos(1.5 * t), .8, sin(1.25 * t)));
    shape = .5 + .5 * dot(lightPos, pos);
    shape *= step(0., d);
  }


  int type = int(floor(u_type));
  float dithering = 0.0;

  switch (type) {
    case 1: {
      dithering = step(hash21(ditheringNoise_uv), shape);
    } break;
    case 2:
      dithering = getBayerValue(dithering_uv, 2);
      break;
    case 3:
      dithering = getBayerValue(dithering_uv, 4);
      break;
    default:
      dithering = getBayerValue(dithering_uv, 8);
      break;
  }

  dithering -= .5;
  float res = step(.5, shape + dithering);

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  #ifdef ADD_HELPERS
    vec2 helperBox = objectHelperBox;
    vec2 boxSize = objectBoxSize;
    if (u_shape < 3.5) {
      helperBox = patternHelperBox;
      boxSize = patternBoxSize;
    }
    ${r.drawSizingHelpers}
  #endif

  fragColor = vec4(color, opacity);
}
`,eM={simplex:1,warp:2,dots:3,wave:4,ripple:5,swirl:6,sphere:7},eP={random:1,"2x2":2,"4x4":3,"8x8":4},eI={name:"Default",params:{...r.defaultPatternSizing,speed:1,frame:0,scale:.6,colorBack:"#000000",colorFront:"#00b2ff",shape:"sphere",type:"4x4",size:2}},eV={name:"Sine Wave",params:{...r.defaultPatternSizing,speed:1,frame:0,colorBack:"#730d54",colorFront:"#00becc",shape:"wave",type:"4x4",size:11,scale:1.2}},eD={name:"Bugs",params:{...r.defaultPatternSizing,speed:1,frame:0,colorBack:"#000000",colorFront:"#008000",shape:"dots",type:"random",size:9}},eT={name:"Ripple",params:{...r.defaultObjectSizing,speed:1,frame:0,colorBack:"#603520",colorFront:"#c67953",shape:"ripple",type:"2x2",size:3}},eN={name:"Swirl",params:{...r.defaultObjectSizing,speed:1,frame:0,colorBack:"#00000000",colorFront:"#47a8e1",shape:"swirl",type:"8x8",size:2}},ej=[eI,{name:"Warp",params:{...r.defaultObjectSizing,speed:1,frame:0,colorBack:"#301c2a",colorFront:"#56ae6c",shape:"warp",type:"4x4",size:2.5}},eV,eT,eD,eN],eW=(0,o.memo)(function({speed:e=eI.params.speed,frame:o=eI.params.frame,colorBack:a=eI.params.colorBack,colorFront:s=eI.params.colorFront,shape:n=eI.params.shape,type:l=eI.params.type,pxSize:u,size:f=void 0===u?eI.params.size:u,fit:m=eI.params.fit,scale:p=eI.params.scale,rotation:d=eI.params.rotation,originX:g=eI.params.originX,originY:h=eI.params.originY,offsetX:v=eI.params.offsetX,offsetY:x=eI.params.offsetY,worldWidth:_=eI.params.worldWidth,worldHeight:b=eI.params.worldHeight,...y}){let w={u_colorBack:(0,i.getShaderColorFromString)(a),u_colorFront:(0,i.getShaderColorFromString)(s),u_shape:eM[n],u_type:eP[l],u_pxSize:f,u_fit:r.ShaderFitOptions[m],u_scale:p,u_rotation:d,u_offsetX:v,u_offsetY:x,u_originX:g,u_originY:h,u_worldWidth:_,u_worldHeight:b};return(0,c.jsx)(t.ShaderMount,{...y,speed:e,frame:o,fragmentShader:eO,uniforms:w})}),eG={maxColorCount:7},eY=`#version 300 es
precision lowp float;

uniform mediump float u_time;
uniform mediump vec2 u_resolution;
uniform mediump float u_pixelRatio;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${eG.maxColorCount}];
uniform float u_colorsCount;
uniform float u_softness;
uniform float u_intensity;
uniform float u_noise;
uniform float u_shape;

uniform mediump float u_originX;
uniform mediump float u_originY;
uniform mediump float u_worldWidth;
uniform mediump float u_worldHeight;
uniform mediump float u_fit;

uniform mediump float u_scale;
uniform mediump float u_rotation;
uniform mediump float u_offsetX;
uniform mediump float u_offsetY;

${r.sizingVariablesDeclaration}
${r.sizingDebugVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.simplexNoise}
${s.rotation2}
${s.proceduralHash21}
${s.textureRandomizerR}

float valueNoiseR(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomR(i);
  float b = randomR(i + vec2(1.0, 0.0));
  float c = randomR(i + vec2(0.0, 1.0));
  float d = randomR(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}
float fbmR(vec2 n) {
  float total = 0.;
  float amplitude = .2;
  for (int i = 0; i < 3; i++) {
    n = rotate(n, .3);
    total += valueNoiseR(n) * amplitude;
    n *= 1.99;
    amplitude *= 0.6;
  }
  return total;
}

${s.proceduralHash11}

vec2 truchet(vec2 uv, float idx){
    idx = fract(((idx - .5) * 2.));
    if (idx > 0.75) {
        uv = vec2(1.0) - uv;
    } else if (idx > 0.5) {
        uv = vec2(1.0 - uv.x, uv.y);
    } else if (idx > 0.25) {
        uv = 1.0 - vec2(1.0 - uv.x, uv.y);
    }
    return uv;
}

void main() {

  const float firstFrameOffset = 7.;
  float t = .1 * (u_time + firstFrameOffset);

  vec2 shape_uv = vec2(0.);
  vec2 grain_uv = vec2(0.);

  if (u_shape > 3.5) {
    shape_uv = v_objectUV;
    grain_uv = shape_uv;

    // apply inverse transform to grain_uv so it respects the originXY
    float r = u_rotation * 3.14159265358979323846 / 180.;
    mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
    vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);
    grain_uv = transpose(graphicRotation) * grain_uv;
    grain_uv *= u_scale;
    grain_uv -= graphicOffset;
    grain_uv *= v_objectBoxSize;
    grain_uv *= .7;
  } else {
    shape_uv = .5 * v_patternUV;
    grain_uv = 100. * v_patternUV;

    // apply inverse transform to grain_uv so it respects the originXY
    float r = u_rotation * 3.14159265358979323846 / 180.;
    mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
    vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);
    grain_uv = transpose(graphicRotation) * grain_uv;
    grain_uv *= u_scale;
    if (u_fit > 0.) {
      vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
      givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
      float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
      vec2 patternBoxGivenSize = vec2(
        (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
        (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
      );
      patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;
      float patternBoxNoFitBoxWidth = patternBoxRatio * min(patternBoxGivenSize.x / patternBoxRatio, patternBoxGivenSize.y);
      grain_uv /= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
    }
    vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;
    grain_uv -= graphicOffset / patternBoxScale;
    grain_uv *= 1.6;
  }


  float shape = 0.;

  if (u_shape < 1.5) {
    // Sine wave

    float wave = cos(.5 * shape_uv.x - 4. * t) * sin(1.5 * shape_uv.x + 2. * t) * (.75 + .25 * cos(6. * t));
    shape = 1. - smoothstep(-1., 1., shape_uv.y + wave);

  } else if (u_shape < 2.5) {
    // Grid (dots)

    float stripeIdx = floor(2. * shape_uv.x / TWO_PI);
    float rand = hash11(stripeIdx * 100.);
    rand = sign(rand - .5) * pow(4. * abs(rand), .3);
    shape = sin(shape_uv.x) * cos(shape_uv.y - 5. * rand * t);
    shape = pow(abs(shape), 4.);

  } else if (u_shape < 3.5) {
    // Truchet pattern

    float n2 = valueNoiseR(shape_uv * .4 - 3.75 * t);
    shape_uv.x += 10.;
    shape_uv *= .6;

    vec2 tile = truchet(fract(shape_uv), randomR(floor(shape_uv)));

    float distance1 = length(tile);
    float distance2 = length(tile - vec2(1.));

    n2 -= .5;
    n2 *= .1;
    shape = smoothstep(.2, .55, distance1 + n2) * (1. - smoothstep(.45, .8, distance1 - n2));
    shape += smoothstep(.2, .55, distance2 + n2) * (1. - smoothstep(.45, .8, distance2 - n2));

    shape = pow(shape, 1.5);

  } else if (u_shape < 4.5) {
    // Corners

    shape_uv *= .6;
    vec2 outer = vec2(.5);

    vec2 bl = smoothstep(vec2(0.), outer, shape_uv + vec2(.1 + .1 * sin(3. * t), .2 - .1 * sin(5.25 * t)));
    vec2 tr = smoothstep(vec2(0.), outer, 1. - shape_uv);
    shape = 1. - bl.x * bl.y * tr.x * tr.y;

    shape_uv = -shape_uv;
    bl = smoothstep(vec2(0.), outer, shape_uv + vec2(.1 + .1 * sin(3. * t), .2 - .1 * cos(5.25 * t)));
    tr = smoothstep(vec2(0.), outer, 1. - shape_uv);
    shape -= bl.x * bl.y * tr.x * tr.y;

    shape = 1. - smoothstep(0., 1., shape);

  } else if (u_shape < 5.5) {
    // Ripple

    shape_uv *= 2.;
    float dist = length(.4 * shape_uv);
    float waves = sin(pow(dist, 1.2) * 5. - 3. * t) * .5 + .5;
    shape = waves;

  } else if (u_shape < 6.5) {
    // Blob

    t *= 2.;

    vec2 f1_traj = .25 * vec2(1.3 * sin(t), .2 + 1.3 * cos(.6 * t + 4.));
    vec2 f2_traj = .2 * vec2(1.2 * sin(-t), 1.3 * sin(1.6 * t));
    vec2 f3_traj = .25 * vec2(1.7 * cos(-.6 * t), cos(-1.6 * t));
    vec2 f4_traj = .3 * vec2(1.4 * cos(.8 * t), 1.2 * sin(-.6 * t - 3.));

    shape = .5 * pow(1. - clamp(0., 1., length(shape_uv + f1_traj)), 5.);
    shape += .5 * pow(1. - clamp(0., 1., length(shape_uv + f2_traj)), 5.);
    shape += .5 * pow(1. - clamp(0., 1., length(shape_uv + f3_traj)), 5.);
    shape += .5 * pow(1. - clamp(0., 1., length(shape_uv + f4_traj)), 5.);

    shape = smoothstep(.0, .9, shape);
    float edge = smoothstep(.25, .3, shape);
    shape = mix(.0, shape, edge);

  } else {
    // Sphere

    shape_uv *= 2.;
    float d = 1. - pow(length(shape_uv), 2.);
    vec3 pos = vec3(shape_uv, sqrt(max(d, 0.)));
    vec3 lightPos = normalize(vec3(cos(1.5 * t), .8, sin(1.25 * t)));
    shape = .5 + .5 * dot(lightPos, pos);
    shape *= step(0., d);
  }

  float simplex = snoise(grain_uv * .5);
  float grainDist = simplex * snoise(grain_uv * .2) - fbmR(.002 * grain_uv + 10.) - fbmR(.003 * grain_uv);
  float rawNoise = .75 * simplex - fbmR(rotate(.4 * grain_uv, 2.)) - fbmR(.001 * grain_uv);
  float noise = clamp(rawNoise, 0., 1.);

  shape += u_intensity * 2. / u_colorsCount * (grainDist + .5);
  shape += u_noise * 10. / u_colorsCount * noise;

  float aa = fwidth(shape);

  shape = clamp(shape - .5 / u_colorsCount, 0., 1.);
  float totalShape = smoothstep(0., u_softness + 2. * aa, clamp(shape * u_colorsCount, 0., 1.));
  float mixer = shape * (u_colorsCount - 1.);

  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  for (int i = 1; i < ${eG.maxColorCount}; i++) {
    if (i > int(u_colorsCount) - 1) break;

    float localT = clamp(mixer - float(i - 1), 0., 1.);
    localT = smoothstep(.5 - .5 * u_softness - aa, .5 + .5 * u_softness + aa, localT);

    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, localT);
  }

  vec3 color = gradient.rgb * totalShape;
  float opacity = gradient.a * totalShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  fragColor = vec4(color, opacity);
}
`,eQ={wave:1,dots:2,truchet:3,corners:4,ripple:5,blob:6,sphere:7},eH={name:"Default",params:{...r.defaultObjectSizing,speed:1,frame:0,colorBack:"#000000",colors:["#7300ff","#eba8ff","#00bfff","#2a00ff"],softness:.5,intensity:.5,noise:.25,shape:"corners"}},eL=[eH,{name:"Wave",params:{...r.defaultPatternSizing,speed:1,frame:0,colorBack:"#000a0f",colors:["#c4730b","#bdad5f","#d8ccc7"],softness:.7,intensity:.15,noise:.5,shape:"wave"}},{name:"Dots",params:{...r.defaultPatternSizing,scale:.6,speed:1,frame:0,colorBack:"#0a0000",colors:["#6f0000","#0080ff","#f2ebc9","#33cc33"],softness:1,intensity:1,noise:.7,shape:"dots"}},{name:"Truchet",params:{...r.defaultPatternSizing,speed:1,frame:0,colorBack:"#0a0000",colors:["#6f2200","#eabb7c","#39b523"],softness:0,intensity:.2,noise:1,shape:"truchet"}},{name:"Ripple",params:{...r.defaultObjectSizing,scale:.5,speed:1,frame:0,colorBack:"#140a00",colors:["#6f2d00","#88ddae","#2c0b1d"],softness:.5,intensity:.5,noise:.5,shape:"ripple"}},{name:"Blob",params:{...r.defaultObjectSizing,scale:1.3,speed:1,frame:0,colorBack:"#0f0e18",colors:["#3e6172","#a49b74","#568c50"],softness:0,intensity:.15,noise:.5,shape:"blob"}}],eX=(0,o.memo)(function({speed:e=eH.params.speed,frame:o=eH.params.frame,colorBack:a=eH.params.colorBack,colors:s=eH.params.colors,softness:n=eH.params.softness,intensity:l=eH.params.intensity,noise:u=eH.params.noise,shape:f=eH.params.shape,fit:m=eH.params.fit,scale:p=eH.params.scale,rotation:d=eH.params.rotation,originX:h=eH.params.originX,originY:v=eH.params.originY,offsetX:x=eH.params.offsetX,offsetY:_=eH.params.offsetY,worldWidth:b=eH.params.worldWidth,worldHeight:y=eH.params.worldHeight,...w}){let S={u_colorBack:(0,i.getShaderColorFromString)(a),u_colors:s.map(i.getShaderColorFromString),u_colorsCount:s.length,u_softness:n,u_intensity:l,u_noise:u,u_shape:eQ[f],u_noiseTexture:(0,g.getShaderNoiseTexture)(),u_fit:r.ShaderFitOptions[m],u_scale:p,u_rotation:d,u_offsetX:x,u_offsetY:_,u_originX:h,u_originY:v,u_worldWidth:b,u_worldHeight:y};return(0,c.jsx)(t.ShaderMount,{...w,speed:e,frame:o,fragmentShader:eY,uniforms:S})});var eq=e.i(95272);let eJ={maxColorCount:7},eK=`#version 300 es
precision lowp float;

uniform float u_time;
uniform mediump float u_scale;

uniform vec4 u_colors[${eJ.maxColorCount}];
uniform float u_colorsCount;
uniform vec4 u_colorBack;
uniform float u_density;
uniform float u_angle1;
uniform float u_angle2;
uniform float u_length;
uniform bool u_edges;
uniform float u_blur;
uniform float u_fadeIn;
uniform float u_fadeOut;
uniform float u_gradient;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}

const float zLimit = .5;

vec2 getPanel(float angle, vec2 uv, float invLength, float aa) {
  float sinA = sin(angle);
  float cosA = cos(angle);

  float denom = sinA - uv.y * cosA;
  if (abs(denom) < .01) return vec2(0.);
  
  float z = uv.y / denom;

  if (z <= 0. || z > zLimit) return vec2(0.);

  float zRatio = z / zLimit;
  float panelMap = 1. - zRatio;
  float x = uv.x * (cosA * z + 1.) * invLength;

  float zOffset = zRatio - .5;
  float left = -.5 + zOffset * u_angle1;
  float right = .5 - zOffset * u_angle2;
  float blurX = aa + 2. * panelMap * u_blur;

  float leftEdge1 = left - blurX;
  float leftEdge2 = left + .25 * blurX;
  float rightEdge1 = right - .25 * blurX;
  float rightEdge2 = right + blurX;

  float panel = smoothstep(leftEdge1, leftEdge2, x) * (1.0 - smoothstep(rightEdge1, rightEdge2, x));
  panel *= mix(0., panel, smoothstep(0., .01 / max(u_scale, 1e-6), panelMap));

  float midScreen = abs(sinA);
  if (u_edges == true) {
    panelMap = mix(.99, panelMap, panel * clamp(panelMap / (.15 * (1. - pow(midScreen, .1))), 0.0, 1.0));
  } else if (midScreen < .07) {
    panel *= (midScreen * 15.);
  }
  
  return vec2(panel, panelMap);
}

vec4 blendColor(vec4 colorA, float panelMask, float panelMap) {
  float fade = 1. - smoothstep(.97 - .97 * u_fadeIn, 1., panelMap);
  
  fade *= smoothstep(-.2 * (1. - u_fadeOut), u_fadeOut, panelMap);

  vec3 blendedRGB = mix(vec3(0.), colorA.rgb, fade);
  float blendedAlpha = mix(0., colorA.a, fade);

  return vec4(blendedRGB, blendedAlpha) * panelMask;
}

void main() {
  vec2 uv = v_objectUV;
  uv *= 1.25;

  float t = .02 * u_time;
  t = fract(t);
  bool reverseTime = (t < 0.5);

  vec3 color = vec3(0.);
  float opacity = 0.;

  float aa = .005 / u_scale;
  int colorsCount = int(u_colorsCount);

  vec4 premultipliedColors[${eJ.maxColorCount}];
  for (int i = 0; i < ${eJ.maxColorCount}; i++) {
    if (i >= colorsCount) break;
    vec4 c = u_colors[i];
    c.rgb *= c.a;
    premultipliedColors[i] = c;
  }

  float invLength = 1.5 / max(u_length, .001);

  float totalColorWeight = 0.;
  int panelsNumber = 12;

  float densityNormalizer = 1.;
  if (colorsCount == 4) {
    panelsNumber = 16;
    densityNormalizer = 1.34;
  } else if (colorsCount == 5) {
    panelsNumber = 20;
    densityNormalizer = 1.67;
  } else if (colorsCount == 7) {
    panelsNumber = 14;
    densityNormalizer = 1.17;
  }

  float fPanelsNumber = float(panelsNumber);

  float totalPanelsShape = 0.;
  float panelGrad = 1. - clamp(u_gradient, 0., 1.);

  for (int set = 0; set < 2; set++) {
    bool isForward = (set == 0 && !reverseTime) || (set == 1 && reverseTime);
    if (!isForward) continue;

    for (int i = 0; i <= 20; i++) {
      if (i >= panelsNumber) break;

      int idx = panelsNumber - 1 - i;

      float offset = float(idx) / fPanelsNumber;
      if (set == 1) {
        offset += .5;
      }

      float densityFract = densityNormalizer * fract(t + offset);
      float angleNorm = densityFract / u_density;
      if (densityFract >= .5 || angleNorm >= .3) continue;

      float smoothDensity = clamp((.5 - densityFract) / .1, 0., 1.) * clamp(densityFract / .01, 0., 1.);
      float smoothAngle = clamp((.3 - angleNorm) / .05, 0., 1.);
      if (smoothDensity * smoothAngle < .001) continue;

      if (angleNorm > .5) {
        angleNorm = 0.5;
      }
      vec2 panel = getPanel(angleNorm * TWO_PI + PI, uv, invLength, aa);
      if (panel[0] <= .001) continue;
      float panelMask = panel[0] * smoothDensity * smoothAngle;
      float panelMap = panel[1];

      int colorIdx = idx % colorsCount;
      int nextColorIdx = (idx + 1) % colorsCount;

      vec4 colorA = premultipliedColors[colorIdx];
      vec4 colorB = premultipliedColors[nextColorIdx];

      colorA = mix(colorA, colorB, max(0., smoothstep(.0, .45, panelMap) - panelGrad));
      vec4 blended = blendColor(colorA, panelMask, panelMap);
      color = blended.rgb + color * (1. - blended.a);
      opacity = blended.a + opacity * (1. - blended.a);
    }


    for (int i = 0; i <= 20; i++) {
      if (i >= panelsNumber) break;

      int idx = panelsNumber - 1 - i;

      float offset = float(idx) / fPanelsNumber;
      if (set == 0) {
        offset += .5;
      }

      float densityFract = densityNormalizer * fract(-t + offset);
      float angleNorm = -densityFract / u_density;
      if (densityFract >= .5 || angleNorm < -.3) continue;

      float smoothDensity = clamp((.5 - densityFract) / .1, 0., 1.) * clamp(densityFract / .01, 0., 1.);
      float smoothAngle = clamp((angleNorm + .3) / .05, 0., 1.);
      if (smoothDensity * smoothAngle < .001) continue;

      vec2 panel = getPanel(angleNorm * TWO_PI + PI, uv, invLength, aa);
      float panelMask = panel[0] * smoothDensity * smoothAngle;
      if (panelMask <= .001) continue;
      float panelMap = panel[1];

      int colorIdx = (colorsCount - (idx % colorsCount)) % colorsCount;
      if (colorIdx < 0) colorIdx += colorsCount;
      int nextColorIdx = (colorIdx + 1) % colorsCount;

      vec4 colorA = premultipliedColors[colorIdx];
      vec4 colorB = premultipliedColors[nextColorIdx];

      colorA = mix(colorA, colorB, max(0., smoothstep(.0, .45, panelMap) - panelGrad));
      vec4 blended = blendColor(colorA, panelMask, panelMap);
      color = blended.rgb + color * (1. - blended.a);
      opacity = blended.a + opacity * (1. - blended.a);
    }
  }

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  ${s.colorBandingFix}

  fragColor = vec4(color, opacity);
}
`,eZ={name:"Default",params:{...r.defaultObjectSizing,speed:.5,frame:0,colors:["#ff9d00","#fd4f30","#809bff","#6d2eff","#333aff","#f15cff","#ffd557"],colorBack:"#000000",angle1:0,angle2:0,length:1.1,edges:!1,blur:0,fadeIn:1,fadeOut:.3,gradient:0,density:3,scale:.8}},e$=[eZ,{name:"Glass",params:{...r.defaultObjectSizing,rotation:112,speed:1,frame:0,colors:["#00cfff","#ff2d55","#34c759","#af52de"],colorBack:"#ffffff00",angle1:.3,angle2:.3,length:1,edges:!0,blur:.25,fadeIn:.85,fadeOut:.3,gradient:0,density:1.6}},{name:"Gradient",params:{...r.defaultObjectSizing,speed:.5,frame:0,colors:["#f2ff00","#00000000","#00000000","#5a0283","#005eff"],colorBack:"#8ffff2",angle1:.4,angle2:.4,length:3,edges:!1,blur:.5,fadeIn:1,fadeOut:.39,gradient:.78,density:1.65,scale:1.72,rotation:270,offsetX:.18}},{name:"Opening",params:{...r.defaultObjectSizing,speed:2,frame:0,colors:["#00ffff"],colorBack:"#570044",angle1:-1,angle2:-1,length:.52,edges:!1,blur:0,fadeIn:0,fadeOut:1,gradient:0,density:2.21,scale:2.32,rotation:360,offsetX:-.3,offsetY:.6}}],e0=(0,o.memo)(function({speed:e=eZ.params.speed,frame:o=eZ.params.frame,colors:a=eZ.params.colors,colorBack:s=eZ.params.colorBack,angle1:n=eZ.params.angle1,angle2:l=eZ.params.angle2,length:u=eZ.params.length,edges:f=eZ.params.edges,blur:m=eZ.params.blur,fadeIn:p=eZ.params.fadeIn,fadeOut:d=eZ.params.fadeOut,density:g=eZ.params.density,gradient:h=eZ.params.gradient,fit:v=eZ.params.fit,scale:x=eZ.params.scale,rotation:_=eZ.params.rotation,originX:b=eZ.params.originX,originY:y=eZ.params.originY,offsetX:w=eZ.params.offsetX,offsetY:S=eZ.params.offsetY,worldWidth:A=eZ.params.worldWidth,worldHeight:C=eZ.params.worldHeight,...B}){let k={u_colors:a.map(i.getShaderColorFromString),u_colorsCount:a.length,u_colorBack:(0,i.getShaderColorFromString)(s),u_angle1:n,u_angle2:l,u_length:u,u_edges:f,u_blur:m,u_fadeIn:p,u_fadeOut:d,u_density:g,u_gradient:h,u_fit:r.ShaderFitOptions[v],u_scale:x,u_rotation:_,u_offsetX:w,u_offsetY:S,u_originX:b,u_originY:y,u_worldWidth:A,u_worldHeight:C};return(0,c.jsx)(t.ShaderMount,{...B,speed:e,frame:o,fragmentShader:eK,uniforms:k})},a.colorPropsAreEqual),e1={maxColorCount:10},e2=`#version 300 es
precision mediump float;

uniform vec4 u_colors[${e1.maxColorCount}];
uniform float u_colorsCount;

uniform float u_positions;
uniform float u_waveX;
uniform float u_waveXShift;
uniform float u_waveY;
uniform float u_waveYShift;
uniform float u_mixing;
uniform float u_grainMixer;
uniform float u_grainOverlay;

${r.sizingVariablesDeclaration}
${r.sizingDebugVariablesDeclaration}
${r.sizingUniformsDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.rotation2}
${s.proceduralHash21}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + mod(float(i), 3.) * .3;
  float c = .8 + mod(float(i + 1), 4.) * 0.25;

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 uv = v_objectUV;
  uv += .5;

  vec2 grainUV = v_objectUV;
  // apply inverse transform to grain_uv so it respects the originXY
  float grainUVRot = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(grainUVRot), sin(grainUVRot), -sin(grainUVRot), cos(grainUVRot));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);
  grainUV = transpose(graphicRotation) * grainUV;
  grainUV *= u_scale;
  grainUV *= .7;
  grainUV -= graphicOffset;
  grainUV *= v_objectBoxSize;

  float grain = noise(grainUV, vec2(0.));
  float mixerGrain = .4 * u_grainMixer * (grain - .5);

  float radius = smoothstep(0., 1., length(uv - .5));
  float center = 1. - radius;
  for (float i = 1.; i <= 2.; i++) {
    uv.x += u_waveX * center / i * cos(TWO_PI * u_waveXShift + i * 2. * smoothstep(.0, 1., uv.y));
    uv.y += u_waveY * center / i * cos(TWO_PI * u_waveYShift + i * 2. * smoothstep(.0, 1., uv.x));
  }
  
  vec3 color = vec3(0.);
  float opacity = 0.;
  float totalWeight = 0.;
  float positionSeed = 25. + .33 * u_positions;

  for (int i = 0; i < ${e1.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 pos = getPosition(i, positionSeed) + mixerGrain;
    float dist = length(uv - pos);
    dist = length(uv - pos);

    vec3 colorFraction = u_colors[i].rgb * u_colors[i].a;
    float opacityFraction = u_colors[i].a;

    float power = 4.;
    if (u_mixing > .5) {
      power = mix(power, .75, 2. * (u_mixing - .5));
    }
    dist = pow(dist, power);

    float w = 1. / (dist + 1e-3);
    if (u_mixing < .5) {
      w = pow(w, mix(mix(.01, 5., clamp(w, 0., 1.)), 1., 2. * u_mixing));
    }
    color += colorFraction * w;
    opacity += opacityFraction * w;
    totalWeight += w;
  }

  color /= max(0.001, totalWeight);
  opacity /= max(0.001, totalWeight);

  float rr = noise(rotate(grainUV, 1.), vec2(3.));
  float gg = noise(rotate(grainUV, 2.) + 10., vec2(-1.));
  float bb = noise(grainUV - 2., vec2(5.));
  vec3 grainColor = vec3(rr, gg, bb);
  color = mix(color, grainColor, .01 + .3 * u_grainOverlay);
  
  fragColor = vec4(color, opacity);
}
`,e5={name:"Default",params:{...r.defaultObjectSizing,rotation:270,speed:0,frame:0,colors:["#ffad0a","#6200ff","#e2a3ff","#ff99fd"],positions:2,waveX:1,waveXShift:.6,waveY:1,waveYShift:.21,mixing:.93,grainMixer:0,grainOverlay:0}},e3={name:"Sea",params:{...r.defaultObjectSizing,speed:0,frame:0,colors:["#013b65","#03738c","#a3d3ff","#f2faef"],positions:0,waveX:.53,waveXShift:0,waveY:.95,waveYShift:.64,mixing:.5,grainMixer:0,grainOverlay:0}},e4=[e5,{name:"1960s",params:{...r.defaultObjectSizing,speed:0,frame:0,colors:["#000000","#082400","#b1aa91","#8e8c15"],positions:42,waveX:.45,waveXShift:0,waveY:1,waveYShift:0,mixing:0,grainMixer:.37,grainOverlay:.78}},{name:"Sunset",params:{...r.defaultObjectSizing,speed:0,frame:0,colors:["#264653","#9c2b2b","#f4a261","#ffffff"],positions:0,waveX:.6,waveXShift:.7,waveY:.7,waveYShift:.7,mixing:.5,grainMixer:0,grainOverlay:0}},e3],e8=(0,o.memo)(function({speed:e=e5.params.speed,frame:o=e5.params.frame,colors:a=e5.params.colors,positions:s=e5.params.positions,waveX:n=e5.params.waveX,waveXShift:l=e5.params.waveXShift,waveY:u=e5.params.waveY,waveYShift:f=e5.params.waveYShift,mixing:m=e5.params.mixing,grainMixer:p=e5.params.grainMixer,grainOverlay:d=e5.params.grainOverlay,fit:g=e5.params.fit,rotation:h=e5.params.rotation,scale:v=e5.params.scale,originX:x=e5.params.originX,originY:_=e5.params.originY,offsetX:b=e5.params.offsetX,offsetY:y=e5.params.offsetY,worldWidth:w=e5.params.worldWidth,worldHeight:S=e5.params.worldHeight,...A}){let C={u_colors:a.map(i.getShaderColorFromString),u_colorsCount:a.length,u_positions:s,u_waveX:n,u_waveXShift:l,u_waveY:u,u_waveYShift:f,u_mixing:m,u_grainMixer:p,u_grainOverlay:d,u_fit:r.ShaderFitOptions[g],u_rotation:h,u_scale:v,u_offsetX:b,u_offsetY:y,u_originX:x,u_originY:_,u_worldWidth:w,u_worldHeight:S};return(0,c.jsx)(t.ShaderMount,{...A,speed:e,frame:o,fragmentShader:e2,uniforms:C})},a.colorPropsAreEqual),e6={maxColorCount:10},e9=`#version 300 es
precision mediump float;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${e6.maxColorCount}];
uniform float u_colorsCount;

uniform float u_radius;
uniform float u_focalDistance;
uniform float u_focalAngle;
uniform float u_falloff;
uniform float u_mixing;
uniform float u_distortion;
uniform float u_distortionShift;
uniform float u_distortionFreq;
uniform float u_grainMixer;
uniform float u_grainOverlay;

${r.sizingVariablesDeclaration}
${r.sizingDebugVariablesDeclaration}
${r.sizingUniformsDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.rotation2}
${s.proceduralHash21}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + mod(float(i), 3.) * .3;
  float c = .8 + mod(float(i + 1), 4.) * 0.25;

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 uv = 2. * v_objectUV;

  vec2 grainUV = v_objectUV;
  // apply inverse transform to grain_uv so it respects the originXY
  float grainUVRot = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(grainUVRot), sin(grainUVRot), -sin(grainUVRot), cos(grainUVRot));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);
  grainUV = transpose(graphicRotation) * grainUV;
  grainUV *= u_scale;
  grainUV *= .7;
  grainUV -= graphicOffset;
  grainUV *= v_objectBoxSize;

  vec2 center = vec2(0.);
  float angleRad = -radians(u_focalAngle + 90.);
  vec2 focalPoint = vec2(cos(angleRad), sin(angleRad)) * u_focalDistance;
  float radius = u_radius;
  
  vec2 c_to_uv = uv - center;
  vec2 f_to_uv = uv - focalPoint;
  vec2 f_to_c = center - focalPoint;
  float r = length(c_to_uv);
  
  float fragAngle = atan(c_to_uv.y, c_to_uv.x);
  float angleDiff = fract((fragAngle - angleRad + PI) / TWO_PI) * TWO_PI - PI;

  float halfAngle = acos(clamp(radius / max(u_focalDistance, 1e-4), 0.0, 1.0));
  float e0 = 0.6 * PI, e1 = halfAngle;
  float lo = min(e0, e1), hi = max(e0, e1);
  float s  = smoothstep(lo, hi, abs(angleDiff));
  float isInSector = (e1 >= e0) ? (1.0 - s) : s;
  
  float a = dot(f_to_uv, f_to_uv);
  float b = -2.0 * dot(f_to_uv, f_to_c);
  float c = dot(f_to_c, f_to_c) - radius * radius;

  float discriminant = b * b - 4.0 * a * c;
  float t = 1.0;

  if (discriminant >= 0.0) {
    float sqrtD = sqrt(discriminant);
    float div = max(1e-4, 2.0 * a);
    float t0 = (-b - sqrtD) / div;
    float t1 = (-b + sqrtD) / div;
    t = max(t0, t1);
    if (t < 0.0) t = 0.0;
  }

  float dist = length(f_to_uv);
  float normalized = dist / max(1e-4, length(f_to_uv * t));
  float shape = clamp(normalized, 0.0, 1.0);

  float falloffMapped = mix(.2 + .8 * max(0., u_falloff + 1.), mix(1., 15., u_falloff * u_falloff), step(.0, u_falloff));
  
  float falloffExp = mix(falloffMapped, 1., shape);
  shape = pow(shape, falloffExp);
  shape = 1. - clamp(shape, 0., 1.);


  float outerMask = .002;
  float outer = 1.0 - smoothstep(radius - outerMask, radius + outerMask, r);
  outer = mix(outer, 1., isInSector);
  
  shape = mix(0., shape, outer);
  shape *= 1. - smoothstep(radius - .01, radius, r);

  float angle = atan(f_to_uv.y, f_to_uv.x);
  shape -= pow(u_distortion, 2.) * shape * pow(abs(sin(PI * clamp(length(f_to_uv) - 0.2 + u_distortionShift, 0.0, 1.0))), 4.0) * (sin(u_distortionFreq * angle) + cos(floor(0.65 * u_distortionFreq) * angle));

  float grain = noise(grainUV, vec2(0.));
  float mixerGrain = .4 * u_grainMixer * (grain - .5);

  float mixer = shape * u_colorsCount + mixerGrain;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  
  float outerShape = 0.;
  for (int i = 1; i < ${e6.maxColorCount+1}; i++) {
    if (i > int(u_colorsCount)) break;
    float mLinear = clamp(mixer - float(i - 1), 0.0, 1.0);
    
    float m = 0.;
    float mixing = u_mixing * 3.;
    if (mixing > 2.) {
      float tt = mLinear * mLinear;
      m = mix(mLinear, tt, .5 * clamp((mixing - 2.), 0., 1.));
    } else if (mixing > 1.) {
      m = mix(smoothstep(0., 1., mLinear), mLinear, clamp((mixing - 1.), 0., 1.));
    } else {
      float aa = fwidth(mLinear);
      m = smoothstep(.5 - .5 * mixing - aa, .5 + .5 * mixing + aa, mLinear);
    }
    
    if (i == 1) {
      outerShape = m;
    }

    vec4 c = u_colors[i - 1];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  vec3 color = gradient.rgb * outerShape;
  float opacity = gradient.a * outerShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  float rr = noise(rotate(grainUV, 1.), vec2(3.));
  float gg = noise(rotate(grainUV, 2.) + 10., vec2(-1.));
  float bb = noise(grainUV - 2., vec2(5.));
  vec3 grainColor = vec3(rr, gg, bb);
  color = mix(color, grainColor, .01 + .3 * u_grainOverlay);
  opacity += u_grainOverlay * grain;
  
  fragColor = vec4(color, opacity);
}
`,e7={name:"Default",params:{...r.defaultObjectSizing,scale:1,speed:0,frame:0,colorBack:"#000000",colors:["#00bbff","#00ffe1","#ffffff"],radius:.8,focalDistance:.99,focalAngle:0,falloff:.24,mixing:.35,distortion:0,distortionShift:0,distortionFreq:12,grainMixer:0,grainOverlay:0}},te={name:"Cross Section",params:{...r.defaultObjectSizing,scale:1,speed:0,frame:0,colorBack:"#3d348b",colors:["#7678ed","#f7b801","#f18701","#37a066"],radius:1,focalDistance:0,focalAngle:0,falloff:0,mixing:0,distortion:1,distortionShift:0,distortionFreq:12,grainMixer:0,grainOverlay:0}},tt={name:"Radial",params:{...r.defaultObjectSizing,scale:1,speed:0,frame:0,colorBack:"#264653",colors:["#9c2b2b","#f4a261","#ffffff"],radius:1,focalDistance:0,focalAngle:0,falloff:0,mixing:.7,distortion:0,distortionShift:0,distortionFreq:12,grainMixer:0,grainOverlay:0}},to=[e7,{name:"Lo-Fi",params:{...r.defaultObjectSizing,speed:0,frame:0,colorBack:"#2e1f27",colors:["#d72638","#3f88c5","#f49d37"],radius:1,focalDistance:0,focalAngle:0,falloff:.9,mixing:.5,distortion:0,distortionShift:0,distortionFreq:12,grainMixer:1,grainOverlay:.5}},te,tt],ta=(0,o.memo)(function({speed:e=e7.params.speed,frame:o=e7.params.frame,colorBack:a=e7.params.colorBack,colors:s=e7.params.colors,radius:n=e7.params.radius,focalDistance:l=e7.params.focalDistance,focalAngle:u=e7.params.focalAngle,falloff:f=e7.params.falloff,grainMixer:m=e7.params.grainMixer,mixing:p=e7.params.mixing,distortion:d=e7.params.distortion,distortionShift:g=e7.params.distortionShift,distortionFreq:h=e7.params.distortionFreq,grainOverlay:v=e7.params.grainOverlay,fit:x=e7.params.fit,rotation:_=e7.params.rotation,scale:b=e7.params.scale,originX:y=e7.params.originX,originY:w=e7.params.originY,offsetX:S=e7.params.offsetX,offsetY:A=e7.params.offsetY,worldWidth:C=e7.params.worldWidth,worldHeight:B=e7.params.worldHeight,...k}){let z={u_colorBack:(0,i.getShaderColorFromString)(a),u_colors:s.map(i.getShaderColorFromString),u_colorsCount:s.length,u_radius:n,u_focalDistance:l,u_focalAngle:u,u_falloff:f,u_mixing:p,u_distortion:d,u_distortionShift:g,u_distortionFreq:h,u_grainMixer:m,u_grainOverlay:v,u_fit:r.ShaderFitOptions[x],u_rotation:_,u_scale:b,u_offsetX:S,u_offsetY:A,u_originX:y,u_originY:w,u_worldWidth:C,u_worldHeight:B};return(0,c.jsx)(t.ShaderMount,{...k,speed:e,frame:o,fragmentShader:e9,uniforms:z})},a.colorPropsAreEqual),tr=`#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_contrast;
uniform float u_roughness;
uniform float u_fiber;
uniform float u_fiberSize;
uniform float u_crumples;
uniform float u_crumpleSize;
uniform float u_folds;
uniform float u_foldCount;
uniform float u_drops;
uniform float u_seed;
uniform float u_fade;

uniform sampler2D u_noiseTexture;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

float getUvFrame(vec2 uv) {
  float aax = 2. * fwidth(uv.x);
  float aay = 2. * fwidth(uv.y);

  float left   = smoothstep(0., aax, uv.x);
  float right = 1. - smoothstep(1. - aax, 1., uv.x);
  float bottom = smoothstep(0., aay, uv.y);
  float top = 1. - smoothstep(1. - aay, 1., uv.y);

  return left * right * bottom * top;
}

${s.declarePI}
${s.rotation2}
${s.textureRandomizerR}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomR(i);
  float b = randomR(i + vec2(1.0, 0.0));
  float c = randomR(i + vec2(0.0, 1.0));
  float d = randomR(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}
float fbm(vec2 n) {
  float total = 0.0, amplitude = .4;
  for (int i = 0; i < 3; i++) {
    total += valueNoise(n) * amplitude;
    n *= 1.99;
    amplitude *= 0.65;
  }
  return total;
}


float randomG(vec2 p) {
  vec2 uv = floor(p) / 50. + .5;
  return texture(u_noiseTexture, fract(uv)).g;
}
float roughness(vec2 p) {
  p *= .1;
  float o = 0.;
  for (float i = 0.; ++i < 4.; p *= 2.1) {
    vec4 w = vec4(floor(p), ceil(p));
    vec2 f = fract(p);
    o += mix(
      mix(randomG(w.xy), randomG(w.xw), f.y),
      mix(randomG(w.zy), randomG(w.zw), f.y),
      f.x);
    o += .2 / exp(2. * abs(sin(.2 * p.x + .5 * p.y)));
  }
  return o / 3.;
}

${s.fiberNoise}

vec2 randomGB(vec2 p) {
  vec2 uv = floor(p) / 50. + .5;
  return texture(u_noiseTexture, fract(uv)).gb;
}
float crumpledNoise(vec2 t, float pw) {
  vec2 p = floor(t);
  float wsum = 0.;
  float cl = 0.;
  for (int y = -1; y < 2; y += 1) {
    for (int x = -1; x < 2; x += 1) {
      vec2 b = vec2(float(x), float(y));
      vec2 q = b + p;
      vec2 q2 = q - floor(q / 8.) * 8.;
      vec2 c = q + randomGB(q2);
      vec2 r = c - t;
      float w = pow(smoothstep(0., 1., 1. - abs(r.x)), pw) * pow(smoothstep(0., 1., 1. - abs(r.y)), pw);
      cl += (.5 + .5 * sin((q2.x + q2.y * 5.) * 8.)) * w;
      wsum += w;
    }
  }
  return pow(wsum != 0.0 ? cl / wsum : 0.0, .5) * 2.;
}
float crumplesShape(vec2 uv) {
  return crumpledNoise(uv * .25, 16.) * crumpledNoise(uv * .5, 2.);
}


vec2 folds(vec2 uv) {
    vec3 pp = vec3(0.);
    float l = 9.;
    for (float i = 0.; i < 15.; i++) {
      if (i >= u_foldCount) break;
      vec2 rand = randomGB(vec2(i, i * u_seed));
      float an = rand.x * TWO_PI;
      vec2 p = vec2(cos(an), sin(an)) * rand.y;
      float dist = distance(uv, p);
      l = min(l, dist);

      if (l == dist) {
        pp.xy = (uv - p.xy);
        pp.z = dist;
      }
    }
    return mix(pp.xy, vec2(0.), pow(pp.z, .25));
}

float drops(vec2 uv) {
  vec2 iDropsUV = floor(uv);
  vec2 fDropsUV = fract(uv);
  float dropsMinDist = 1.;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 neighbor = vec2(float(i), float(j));
      vec2 offset = randomGB(iDropsUV + neighbor);
      offset = .5 + .5 * sin(10. * u_seed + TWO_PI * offset);
      vec2 pos = neighbor + offset - fDropsUV;
      float dist = length(pos);
      dropsMinDist = min(dropsMinDist, dropsMinDist*dist);
    }
  }
  return 1. - smoothstep(.05, .09, pow(dropsMinDist, .5));
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {

  vec2 imageUV = v_imageUV;
  vec2 patternUV = v_imageUV - .5;
  patternUV = 5. * (patternUV * vec2(u_imageAspectRatio, 1.));

  vec2 roughnessUv = 1.5 * (gl_FragCoord.xy - .5 * u_resolution) / u_pixelRatio;
  float roughness = roughness(roughnessUv + vec2(1., 0.)) - roughness(roughnessUv - vec2(1., 0.));

  vec2 crumplesUV = fract(patternUV * .02 / u_crumpleSize - u_seed) * 32.;
  float crumples = u_crumples * (crumplesShape(crumplesUV + vec2(.05, 0.)) - crumplesShape(crumplesUV));

  vec2 fiberUV = 2. / u_fiberSize * patternUV;
  float fiber = fiberNoise(fiberUV, vec2(0.));
  fiber = .5 * u_fiber * (fiber - 1.);

  vec2 normal = vec2(0.);
  vec2 normalImage = vec2(0.);

  vec2 foldsUV = patternUV * .12;
  foldsUV = rotate(foldsUV, 4. * u_seed);
  vec2 w = folds(foldsUV);
  foldsUV = rotate(foldsUV + .007 * cos(u_seed), .01 * sin(u_seed));
  vec2 w2 = folds(foldsUV);

  float drops = u_drops * drops(patternUV * 2.);

  float fade = u_fade * fbm(.17 * patternUV + 10. * u_seed);
  fade = clamp(8. * fade * fade * fade, 0., 1.);

  w = mix(w, vec2(0.), fade);
  w2 = mix(w2, vec2(0.), fade);
  crumples = mix(crumples, 0., fade);
  drops = mix(drops, 0., fade);
  fiber *= mix(1., .5, fade);
  roughness *= mix(1., .5, fade);

  normal.xy += u_folds * min(5. * u_contrast, 1.) * 4. * max(vec2(0.), w + w2);
  normalImage.xy += u_folds * 2. * w;

  normal.xy += crumples;
  normalImage.xy += 1.5 * crumples;

  normal.xy += 3. * drops;
  normalImage.xy += .2 * drops;

  normal.xy += u_roughness * 1.5 * roughness;
  normal.xy += fiber;

  normalImage += u_roughness * .75 * roughness;
  normalImage += .2 * fiber;

  vec3 lightPos = vec3(1., 2., 1.);
  float res = dot(normalize(vec3(normal, 9.5 - 9. * pow(u_contrast, .1))), normalize(lightPos));

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  imageUV += .02 * normalImage;
  float frame = getUvFrame(imageUV);
  vec4 image = texture(u_image, imageUV);
  image.rgb += .6 * pow(u_contrast, .4) * (res - .7);

  frame *= image.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);
  opacity = mix(opacity, 1., frame);

  color -= .007 * drops;

  color.rgb = mix(color, image.rgb, frame);

  fragColor = vec4(color, opacity);
}
`,ti={name:"Default",params:{...r.defaultObjectSizing,fit:"cover",scale:.6,speed:0,frame:0,colorFront:"#9fadbc",colorBack:"#ffffff",contrast:.3,roughness:.4,fiber:.3,fiberSize:.2,crumples:.3,crumpleSize:.35,folds:.65,foldCount:5,fade:0,drops:.2,seed:5.8}},ts={name:"Abstract",params:{...r.defaultObjectSizing,fit:"cover",speed:0,frame:0,scale:.6,colorFront:"#00eeff",colorBack:"#ff0a81",contrast:.85,roughness:0,fiber:.1,fiberSize:.2,crumples:0,crumpleSize:.3,folds:1,foldCount:3,fade:0,drops:.2,seed:2.2}},tn=[ti,{name:"Cardboard",params:{...r.defaultObjectSizing,fit:"cover",speed:0,frame:0,scale:.6,colorFront:"#c7b89e",colorBack:"#999180",contrast:.4,roughness:0,fiber:.35,fiberSize:.14,crumples:.7,crumpleSize:.1,folds:0,foldCount:1,fade:0,drops:.1,seed:1.6}},ts,{name:"Details",params:{...r.defaultObjectSizing,speed:0,frame:0,fit:"cover",scale:3,colorFront:"#00000000",colorBack:"#00000000",contrast:0,roughness:1,fiber:.27,fiberSize:.22,crumples:1,crumpleSize:.5,folds:1,foldCount:15,fade:0,drops:0,seed:6}}],tl=(0,o.memo)(function({speed:e=ti.params.speed,frame:o=ti.params.frame,colorFront:a=ti.params.colorFront,colorBack:s=ti.params.colorBack,image:n="",contrast:l=ti.params.contrast,roughness:u=ti.params.roughness,fiber:f=ti.params.fiber,crumples:m=ti.params.crumples,folds:p=ti.params.folds,drops:d=ti.params.drops,seed:h=ti.params.seed,fiberScale:v,fiberSize:x=void 0===v?ti.params.fiberSize:.2/v,crumplesScale:_,crumpleSize:b=void 0===_?ti.params.crumpleSize:.2/_,blur:y,fade:w=void 0===y?ti.params.fade:y,foldsNumber:S,foldCount:A=void 0===S?ti.params.foldCount:S,fit:C=ti.params.fit,scale:B=ti.params.scale,rotation:k=ti.params.rotation,originX:z=ti.params.originX,originY:R=ti.params.originY,offsetX:F=ti.params.offsetX,offsetY:U=ti.params.offsetY,worldWidth:E=ti.params.worldWidth,worldHeight:O=ti.params.worldHeight,...M}){let P="undefined"!=typeof window&&{u_noiseTexture:(0,g.getShaderNoiseTexture)()},I={u_image:n,u_colorFront:(0,i.getShaderColorFromString)(a),u_colorBack:(0,i.getShaderColorFromString)(s),u_contrast:l,u_roughness:u,u_fiber:f,u_fiberSize:x,u_crumples:m,u_crumpleSize:b,u_foldCount:A,u_folds:p,u_fade:w,u_drops:d,u_seed:h,...P,u_fit:r.ShaderFitOptions[C],u_scale:B,u_rotation:k,u_offsetX:F,u_offsetY:U,u_originX:z,u_originY:R,u_worldWidth:E,u_worldHeight:O};return(0,c.jsx)(t.ShaderMount,{...M,speed:e,frame:o,fragmentShader:tr,mipmaps:["u_image"],uniforms:I})},a.colorPropsAreEqual),tc=`#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
${r.sizingUniformsDeclaration}

uniform vec4 u_colorBack;
uniform vec4 u_colorShadow;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_size;
uniform float u_shadows;
uniform float u_angle;
uniform float u_stretch;
uniform float u_shape;
uniform float u_distortion;
uniform float u_highlights;
uniform float u_distortionShape;
uniform float u_shift;
uniform float u_blur;
uniform float u_edges;
uniform float u_marginLeft;
uniform float u_marginRight;
uniform float u_marginTop;
uniform float u_marginBottom;
uniform float u_grainMixer;
uniform float u_grainOverlay;

out vec4 fragColor;

${s.declarePI}
${s.rotation2}
${s.proceduralHash21}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}


vec2 getImageUV(vec2 uv, vec2 extraScale) {
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  float r = u_rotation * PI / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  vec2 imageBoxSize;
  if (u_fit == 1.) {
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  vec2 imageUV = uv;
  imageUV *= imageBoxScale;
  imageUV += boxOrigin * (imageBoxScale - 1.);
  imageUV += graphicOffset;
  imageUV /= u_scale;
  imageUV *= extraScale;
  imageUV.x *= u_imageAspectRatio;
  imageUV = graphicRotation * imageUV;
  imageUV.x /= u_imageAspectRatio;

  imageUV += .5;
  imageUV.y = 1. - imageUV.y;

  return imageUV;
}

float getUvFrame(vec2 uv, float softness) {
  float aax = 2. * fwidth(uv.x);
  float aay = 2. * fwidth(uv.y);
  float left   = smoothstep(0., aax + softness, uv.x);
  float right  = 1. - smoothstep(1. - softness - aax, 1., uv.x);
  float bottom = smoothstep(0., aay + softness, uv.y);
  float top    = 1. - smoothstep(1. - softness - aay, 1., uv.y);
  return left * right * bottom * top;
}

const int MAX_RADIUS = 50;
vec4 getBlur(sampler2D tex, vec2 uv, vec2 texelSize, vec2 dir, float sigma) {
  if (sigma <= .5) return texture(tex, uv);
  int radius = int(min(float(MAX_RADIUS), ceil(3.0 * sigma)));

  float twoSigma2 = 2.0 * sigma * sigma;
  float gaussianNorm = 1.0 / sqrt(TWO_PI * sigma * sigma);

  vec4 sum = texture(tex, uv) * gaussianNorm;
  float weightSum = gaussianNorm;

  for (int i = 1; i <= MAX_RADIUS; i++) {
    if (i > radius) break;

    float x = float(i);
    float w = exp(-(x * x) / twoSigma2) * gaussianNorm;

    vec2 offset = dir * texelSize * x;
    vec4 s1 = texture(tex, uv + offset);
    vec4 s2 = texture(tex, uv - offset);

    sum += (s1 + s2) * w;
    weightSum += 2.0 * w;
  }
  return sum / weightSum;
}

vec2 rotateAspect(vec2 p, float a, float aspect) {
  p.x *= aspect;
  p = rotate(p, a);
  p.x /= aspect;
  return p;
}

float smoothFract(float x) {
  float f = fract(x);
  float w = fwidth(x);

  float edge = abs(f - 0.5) - 0.5;
  float band = smoothstep(-w, w, edge);

  return mix(f, 1.0 - f, band);
}

float blendOverlay(float base, float blend) {
  return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}
vec3 blendOverlay(vec3 base, vec3 blend) {
  return vec3(blendOverlay(base.r, blend.r), blendOverlay(base.g, blend.g), blendOverlay(base.b, blend.b));
}
vec3 blendHardLight(vec3 base, vec3 blend) {
  return blendOverlay(blend, base);
}
vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
  return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}


void main() {

  vec2 uvNormalised = (gl_FragCoord.xy - .5 * u_resolution) / u_resolution.xy;
  vec2 uvOriginal = getImageUV(uvNormalised, vec2(1.));

  float patternRotation = -u_angle * PI / 180.;
  float patternSize = mix(200., 5., u_size);

  vec2 uv = uvOriginal;

  vec2 uvMask = gl_FragCoord.xy / u_resolution.xy;
  vec2 sw = vec2(.005);
  vec4 margins = vec4(u_marginLeft, u_marginTop, u_marginRight, u_marginBottom);
  float mask =
    smoothstep(margins[0], margins[0] + sw.x, uvMask.x + sw.x) *
    smoothstep(margins[2], margins[2] + sw.x, 1.0 - uvMask.x + sw.x) *
    smoothstep(margins[1], margins[1] + sw.y, uvMask.y + sw.y) *
    smoothstep(margins[3], margins[3] + sw.y, 1.0 - uvMask.y + sw.y);
  float maskOuter =
  smoothstep(margins[0] - sw.x, margins[0], uvMask.x + sw.x) *
  smoothstep(margins[2] - sw.x, margins[2], 1.0 - uvMask.x + sw.x) *
  smoothstep(margins[1] - sw.y, margins[1], uvMask.y + sw.y) *
  smoothstep(margins[3] - sw.y, margins[3], 1.0 - uvMask.y + sw.y);
  float maskStroke = maskOuter - mask;
  float maskInner =
    smoothstep(margins[0] - 2. * sw.x, margins[0], uvMask.x) *
    smoothstep(margins[2] - 2. * sw.x, margins[2], 1.0 - uvMask.x) *
    smoothstep(margins[1] - 2. * sw.y, margins[1], uvMask.y) *
    smoothstep(margins[3] - 2. * sw.y, margins[3], 1.0 - uvMask.y);
  float maskStrokeInner = maskInner - mask;

  uv -= .5;
  uv *= patternSize;
  uv = rotateAspect(uv, patternRotation, u_imageAspectRatio);

  float curve = 0.;
  float patternY = uv.y / u_imageAspectRatio;
  if (u_shape > 4.5) {
    // pattern
    curve = .5 + .5 * sin(.5 * PI * uv.x) * cos(.5 * PI * patternY);
  } else if (u_shape > 3.5) {
    // zigzag
    curve = 10. * abs(fract(.1 * patternY) - .5);
  } else if (u_shape > 2.5) {
    // wave
    curve = 4. * sin(.23 * patternY);
  } else if (u_shape > 1.5) {
    // lines irregular
    curve = .5 + .5 * sin(.5 * uv.x) * sin(1.7 * uv.x);
  } else {
    // lines
  }

  vec2 UvToFract = uv + curve;
  vec2 fractOrigUV = fract(uv);
  vec2 floorOrigUV = floor(uv);

  float x = smoothFract(UvToFract.x);
  float xNonSmooth = fract(UvToFract.x) + .0001;

  float highlightsWidth = 2. * max(.001, fwidth(UvToFract.x));
  highlightsWidth += 2. * maskStrokeInner;
  float highlights = smoothstep(0., highlightsWidth, xNonSmooth);
  highlights *= smoothstep(1., 1. - highlightsWidth, xNonSmooth);
  highlights = 1. - highlights;
  highlights *= u_highlights;
  highlights = clamp(highlights, 0., 1.);
  highlights *= mask;

  float shadows = pow(x, 1.3);
  float distortion = 0.;
  float fadeX = 1.;
  float frameFade = 0.;

  float aa = fwidth(xNonSmooth);
  aa = max(aa, fwidth(uv.x));
  aa = max(aa, fwidth(UvToFract.x));
  aa = max(aa, .0001);

  if (u_distortionShape == 1.) {
    distortion = -pow(1.5 * x, 3.);
    distortion += (.5 - u_shift);

    frameFade = pow(1.5 * x, 3.);
    aa = max(.2, aa);
    aa += mix(.2, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    distortion = mix(.5, distortion, fadeX);
  } else if (u_distortionShape == 2.) {
    distortion = 2. * pow(x, 2.);
    distortion -= (.5 + u_shift);

    frameFade = pow(abs(x - .5), 4.);
    aa = max(.2, aa);
    aa += mix(.2, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    distortion = mix(.5, distortion, fadeX);
    frameFade = mix(1., frameFade, .5 * fadeX);
  } else if (u_distortionShape == 3.) {
    distortion = pow(2. * (xNonSmooth - .5), 6.);
    distortion -= .25;
    distortion -= u_shift;

    frameFade = 1. - 2. * pow(abs(x - .4), 2.);
    aa = .15;
    aa += mix(.1, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    frameFade = mix(1., frameFade, fadeX);

  } else if (u_distortionShape == 4.) {
    x = xNonSmooth;
    distortion = sin((x + .25) * TWO_PI);
    shadows = .5 + .5 * asin(distortion) / (.5 * PI);
    distortion *= .5;
    distortion -= u_shift;
    frameFade = .5 + .5 * sin(x * TWO_PI);
  } else if (u_distortionShape == 5.) {
    distortion -= pow(abs(x), .2) * x;
    distortion += .33;
    distortion -= 3. * u_shift;
    distortion *= .33;

    frameFade = .3 * (smoothstep(.0, 1., x));
    shadows = pow(x, 2.5);

    aa = max(.1, aa);
    aa += mix(.1, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    distortion *= fadeX;
  }

  vec2 dudx = dFdx(uvOriginal);
  vec2 dudy = dFdy(uvOriginal);
  vec2 grainUV = getImageUV(uvNormalised, .8 / vec2(length(dudx), length(dudy)));
  float grain = valueNoise(grainUV);
  grain = smoothstep(.4, .7, grain);
  grain *= u_grainMixer;
  distortion = mix(distortion, 0., grain);

  shadows = min(shadows, 1.);
  shadows += maskStrokeInner;
  shadows *= mask;
  shadows = min(shadows, 1.);
  shadows *= pow(u_shadows, 2.);
  shadows = clamp(shadows, 0., 1.);

  distortion *= 3. * u_distortion;
  frameFade *= u_distortion;

  fractOrigUV.x += distortion;
  floorOrigUV = rotateAspect(floorOrigUV, -patternRotation, u_imageAspectRatio);
  fractOrigUV = rotateAspect(fractOrigUV, -patternRotation, u_imageAspectRatio);

  uv = (floorOrigUV + fractOrigUV) / patternSize;
  uv += pow(maskStroke, 4.);

  uv += vec2(.5);

  uv = mix(uvOriginal, uv, smoothstep(0., .7, mask));
  float blur = mix(0., 50., u_blur);
  blur = mix(0., blur, smoothstep(.5, 1., mask));

  float edgeDistortion = mix(.0, .04, u_edges);
  edgeDistortion += .06 * frameFade * u_edges;
  edgeDistortion *= mask;
  float frame = getUvFrame(uv, edgeDistortion);

  float stretch = 1. - smoothstep(0., .5, xNonSmooth) * smoothstep(1., 1. - .5, xNonSmooth);
  stretch = pow(stretch, 2.);
  stretch *= mask;
  stretch *= getUvFrame(uv, .1 + .05 * mask * frameFade);
  uv.y = mix(uv.y, .5, u_stretch * stretch);

  vec4 image = getBlur(u_image, uv, 1. / u_resolution / u_pixelRatio, vec2(0., 1.), blur);
  vec4 backColor = u_colorBack;
  backColor.rgb *= backColor.a;
  vec4 highlightColor = u_colorHighlight;
  highlightColor.rgb *= highlightColor.a;
  vec4 shadowColor = u_colorShadow;

  vec3 color = highlightColor.rgb * highlights;
  float opacity = highlightColor.a * highlights;

  shadows = mix(shadows * shadowColor.a, 0., highlights);
  color = mix(color, shadowColor.rgb * shadowColor.a, .5 * shadows);
  color += .5 * pow(shadows, .5) * shadowColor.rgb;
  opacity += shadows;
  color = clamp(color, vec3(0.), vec3(1.));
  opacity = clamp(opacity, 0., 1.);

  color += image.rgb * (1. - opacity) * frame;
  opacity += image.a * (1. - opacity) * frame;

  color += backColor.rgb * (1. - opacity);
  opacity += backColor.a * (1. - opacity);

  float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
  grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
  grainOverlay = pow(grainOverlay, 2.);
  vec3 grainOverlayColor = vec3(grainOverlay);
  color = mix(color, blendHardLight(color, grainOverlayColor, .5 * u_grainOverlay), mask);
  
  fragColor = vec4(color, opacity);
}
`,tu={lines:1,linesIrregular:2,wave:3,zigzag:4,pattern:5},tf={prism:1,lens:2,contour:3,cascade:4,flat:5},tm={name:"Default",params:{...r.defaultObjectSizing,fit:"cover",scale:1.1,speed:0,frame:0,colorBack:"#00000000",colorShadow:"#000000",colorHighlight:"#ffffff",shadows:.25,size:.5,angle:0,distortionShape:"prism",highlights:.1,shape:"lines",distortion:.5,shift:0,blur:0,edges:.25,stretch:0,margin:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,grainMixer:0,grainOverlay:0}},tp={name:"Waves",params:{...r.defaultObjectSizing,fit:"cover",scale:1.2,speed:0,frame:0,colorBack:"#00000000",colorShadow:"#000000",colorHighlight:"#ffffff",shadows:0,size:.9,angle:0,distortionShape:"contour",highlights:0,shape:"wave",distortion:.5,shift:0,blur:.1,edges:.5,stretch:1,margin:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,grainMixer:0,grainOverlay:.05}},td=[tm,{name:"Abstract",params:{...r.defaultObjectSizing,fit:"cover",scale:4,speed:0,frame:0,colorBack:"#00000000",colorShadow:"#000000",colorHighlight:"#ffffff",shadows:0,size:.7,angle:30,distortionShape:"flat",highlights:0,shape:"linesIrregular",distortion:1,shift:0,blur:1,edges:.5,stretch:1,margin:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,grainMixer:.1,grainOverlay:.1}},tp,{name:"Folds",params:{...r.defaultObjectSizing,fit:"cover",speed:0,frame:0,colorBack:"#00000000",colorShadow:"#000000",colorHighlight:"#ffffff",shadows:.4,size:.4,angle:0,distortionShape:"cascade",highlights:0,shape:"lines",distortion:.75,shift:0,blur:.25,edges:.5,stretch:0,margin:.1,marginLeft:.1,marginRight:.1,marginTop:.1,marginBottom:.1,grainMixer:0,grainOverlay:0}}],tg=(0,o.memo)(function({speed:e=tm.params.speed,frame:o=tm.params.frame,colorBack:a=tm.params.colorBack,colorShadow:s=tm.params.colorShadow,colorHighlight:n=tm.params.colorHighlight,image:l="",shadows:u=tm.params.shadows,angle:f=tm.params.angle,distortion:m=tm.params.distortion,distortionShape:p=tm.params.distortionShape,highlights:d=tm.params.highlights,shape:g=tm.params.shape,shift:h=tm.params.shift,blur:v=tm.params.blur,edges:x=tm.params.edges,margin:_,marginLeft:b=_??tm.params.marginLeft,marginRight:y=_??tm.params.marginRight,marginTop:w=_??tm.params.marginTop,marginBottom:S=_??tm.params.marginBottom,grainMixer:A=tm.params.grainMixer,grainOverlay:C=tm.params.grainOverlay,stretch:B=tm.params.stretch,count:k,size:z=void 0===k?tm.params.size:Math.pow(1/(1.6*k),1/6)/.7-.5,fit:R=tm.params.fit,scale:F=tm.params.scale,rotation:U=tm.params.rotation,originX:E=tm.params.originX,originY:O=tm.params.originY,offsetX:M=tm.params.offsetX,offsetY:P=tm.params.offsetY,worldWidth:I=tm.params.worldWidth,worldHeight:V=tm.params.worldHeight,...D}){let T={u_image:l,u_colorBack:(0,i.getShaderColorFromString)(a),u_colorShadow:(0,i.getShaderColorFromString)(s),u_colorHighlight:(0,i.getShaderColorFromString)(n),u_shadows:u,u_size:z,u_angle:f,u_distortion:m,u_shift:h,u_blur:v,u_edges:x,u_stretch:B,u_distortionShape:tf[p],u_highlights:d,u_shape:tu[g],u_marginLeft:b,u_marginRight:y,u_marginTop:w,u_marginBottom:S,u_grainMixer:A,u_grainOverlay:C,u_fit:r.ShaderFitOptions[R],u_scale:F,u_rotation:U,u_offsetX:M,u_offsetY:P,u_originX:E,u_originY:O,u_worldWidth:I,u_worldHeight:V};return(0,c.jsx)(t.ShaderMount,{...D,speed:e,frame:o,fragmentShader:tc,mipmaps:["u_image"],uniforms:T})}),th=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_size;
uniform float u_highlights;
uniform float u_layering;
uniform float u_edges;
uniform float u_caustic;
uniform float u_waves;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.rotation2}
${s.simplexNoise}

float getUvFrame(vec2 uv) {
  float aax = 2. * fwidth(uv.x);
  float aay = 2. * fwidth(uv.y);

  float left   = smoothstep(0., aax, uv.x);
  float right = 1.0 - smoothstep(1. - aax, 1., uv.x);
  float bottom = smoothstep(0., aay, uv.y);
  float top = 1.0 - smoothstep(1. - aay, 1., uv.y);

  return left * right * bottom * top;
}

mat2 rotate2D(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

float getCausticNoise(vec2 uv, float t, float scale) {
  vec2 n = vec2(.1);
  vec2 N = vec2(.1);
  mat2 m = rotate2D(.5);
  for (int j = 0; j < 6; j++) {
    uv *= m;
    n *= m;
    vec2 q = uv * scale + float(j) + n + (.5 + .5 * float(j)) * (mod(float(j), 2.) - 1.) * t;
    n += sin(q);
    N += cos(q) / scale;
    scale *= 1.1;
  }
  return (N.x + N.y + 1.);
}

void main() {
  vec2 imageUV = v_imageUV;
  vec2 patternUV = v_imageUV - .5;
  patternUV = (patternUV * vec2(u_imageAspectRatio, 1.));
  patternUV /= (.01 + .09 * u_size);

  float t = u_time;

  float wavesNoise = snoise((.3 + .1 * sin(t)) * .1 * patternUV + vec2(0., .4 * t));

  float causticNoise = getCausticNoise(patternUV + u_waves * vec2(1., -1.) * wavesNoise, 2. * t, 1.5);

  causticNoise += u_layering * getCausticNoise(patternUV + 2. * u_waves * vec2(1., -1.) * wavesNoise, 1.5 * t, 2.);
  causticNoise = causticNoise * causticNoise;

  float edgesDistortion = smoothstep(0., .1, imageUV.x);
  edgesDistortion *= smoothstep(0., .1, imageUV.y);
  edgesDistortion *= (smoothstep(1., 1.1, imageUV.x) + (1.0 - smoothstep(.8, .95, imageUV.x)));
  edgesDistortion *= (1.0 - smoothstep(.9, 1., imageUV.y));
  edgesDistortion = mix(edgesDistortion, 1., u_edges);

  float causticNoiseDistortion = .02 * causticNoise * edgesDistortion;

  float wavesDistortion = .1 * u_waves * wavesNoise;

  imageUV += vec2(wavesDistortion, -wavesDistortion);
  imageUV += (u_caustic * causticNoiseDistortion);

  float frame = getUvFrame(imageUV);

  vec4 image = texture(u_image, imageUV);
  vec4 backColor = u_colorBack;
  backColor.rgb *= backColor.a;

  vec3 color = mix(backColor.rgb, image.rgb, image.a * frame);
  float opacity = backColor.a + image.a * frame;

  causticNoise = max(-.2, causticNoise);

  float hightlight = .025 * u_highlights * causticNoise;
  hightlight *= u_colorHighlight.a;
  color = mix(color, u_colorHighlight.rgb, .05 * u_highlights * causticNoise);
  opacity += hightlight;

  color += hightlight * (.5 + .5 * wavesNoise);
  opacity += hightlight * (.5 + .5 * wavesNoise);

  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,tv={name:"Default",params:{...r.defaultObjectSizing,scale:.8,speed:1,frame:0,colorBack:"#909090",colorHighlight:"#ffffff",highlights:.07,layering:.5,edges:.8,waves:.3,caustic:.1,size:1}},tx={name:"Abstract",params:{...r.defaultObjectSizing,fit:"cover",scale:3,speed:1,frame:0,colorBack:"#909090",colorHighlight:"#ffffff",highlights:0,layering:0,edges:1,waves:1,caustic:.4,size:.15}},t_={name:"Streaming",params:{...r.defaultObjectSizing,fit:"contain",scale:.4,speed:2,frame:0,colorBack:"#909090",colorHighlight:"#ffffff",highlights:0,layering:0,edges:0,waves:.5,caustic:0,size:.5}},tb=[tv,{name:"Slow-mo",params:{...r.defaultObjectSizing,fit:"cover",scale:1,speed:.1,frame:0,colorBack:"#909090",colorHighlight:"#ffffff",highlights:.4,layering:0,edges:0,waves:0,caustic:.2,size:.7}},tx,t_],ty=(0,o.memo)(function({speed:e=tv.params.speed,frame:o=tv.params.frame,colorBack:a=tv.params.colorBack,colorHighlight:s=tv.params.colorHighlight,image:n="",highlights:l=tv.params.highlights,layering:u=tv.params.layering,waves:f=tv.params.waves,edges:m=tv.params.edges,caustic:p=tv.params.caustic,effectScale:d,size:g=void 0===d?tv.params.size:10/9/d-1/9,fit:h=tv.params.fit,scale:v=tv.params.scale,rotation:x=tv.params.rotation,originX:_=tv.params.originX,originY:b=tv.params.originY,offsetX:y=tv.params.offsetX,offsetY:w=tv.params.offsetY,worldWidth:S=tv.params.worldWidth,worldHeight:A=tv.params.worldHeight,...C}){let B={u_image:n,u_colorBack:(0,i.getShaderColorFromString)(a),u_colorHighlight:(0,i.getShaderColorFromString)(s),u_highlights:l,u_layering:u,u_waves:f,u_edges:m,u_caustic:p,u_size:g,u_fit:r.ShaderFitOptions[h],u_rotation:x,u_scale:v,u_offsetX:y,u_offsetY:w,u_originX:_,u_originY:b,u_worldWidth:S,u_worldHeight:A};return(0,c.jsx)(t.ShaderMount,{...C,speed:e,frame:o,fragmentShader:th,mipmaps:["u_image"],uniforms:B})},a.colorPropsAreEqual),tw=`#version 300 es
precision mediump float;

uniform mediump vec2 u_resolution;
uniform mediump float u_pixelRatio;
uniform mediump float u_originX;
uniform mediump float u_originY;
uniform mediump float u_worldWidth;
uniform mediump float u_worldHeight;
uniform mediump float u_fit;

uniform mediump float u_scale;
uniform mediump float u_rotation;
uniform mediump float u_offsetX;
uniform mediump float u_offsetY;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform mediump float u_imageAspectRatio;

uniform float u_type;
uniform float u_pxSize;
uniform bool u_originalColors;
uniform float u_colorSteps;

out vec4 fragColor;

float getUvFrame(vec2 uv, vec2 px) {
  float left   = step(-px.x, uv.x);
  float right  = step(uv.x, 1.);
  float bottom = step(-px.y, uv.y);
  float top    = step(uv.y, 1. + px.y);

  return left * right * bottom * top;
}

${s.proceduralHash21}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
  0,  8,  2, 10,
 12,  4, 14,  6,
  3, 11,  1,  9,
 15,  7, 13,  5
);

const int bayer8x8[64] = int[64](
   0, 32,  8, 40,  2, 34, 10, 42,
  48, 16, 56, 24, 50, 18, 58, 26,
  12, 44,  4, 36, 14, 46,  6, 38,
  60, 28, 52, 20, 62, 30, 54, 22,
   3, 35, 11, 43,  1, 33,  9, 41,
  51, 19, 59, 27, 49, 17, 57, 25,
  15, 47,  7, 39, 13, 45,  5, 37,
  63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(fract(uv / float(size)) * float(size));
  int index = pos.y * size + pos.x;

  if (size == 2) {
    return float(bayer2x2[index]) / 4.0;
  } else if (size == 4) {
    return float(bayer4x4[index]) / 16.0;
  } else if (size == 8) {
    return float(bayer8x8[index]) / 64.0;
  }
  return 0.0;
}


void main() {

  #define USE_IMAGE_SIZING
  #define USE_PIXELIZATION
  ${r.sizingUV}

  vec2 dithering_uv = pxSizeUv;
  vec2 ditheringNoise_uv = u_resolution * uv;
  vec4 image = texture(u_image, imageUV);
  float frame = getUvFrame(imageUV, pxSize / u_resolution.xy);

  int type = int(floor(u_type));
  float dithering = 0.0;

  float lum = dot(vec3(.2126, .7152, .0722), image.rgb);

  switch (type) {
    case 1: {
      dithering = step(hash21(ditheringNoise_uv), lum);
    } break;
    case 2:
      dithering = getBayerValue(dithering_uv, 2);
      break;
    case 3:
      dithering = getBayerValue(dithering_uv, 4);
      break;
    default:
      dithering = getBayerValue(dithering_uv, 8);
      break;
  }


  float steps = max(floor(u_colorSteps), 1.);
  float ditherAmount = 1.0 / (steps);

  vec3 color = vec3(0.0);
  float opacity = 1.;

  dithering -= .5;
  float brightness = clamp(lum + dithering * ditherAmount, 0.0, 1.0);
  brightness = mix(0.0, brightness, frame);
  float quantLum = floor(brightness * steps + 0.5) / steps;

  if (u_originalColors == true) {
    vec3 normColor = image.rgb / max(lum, 0.001);
    color = normColor * quantLum;

    float quantAlpha = floor(image.a * steps + 0.5) / steps;
    opacity = mix(quantLum, 1., quantAlpha);
  } else {
    vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
    float fgOpacity = u_colorFront.a;
    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    float bgOpacity = u_colorBack.a;
    vec3 hlColor = u_colorHighlight.rgb * u_colorHighlight.a;
    float hlOpacity = u_colorHighlight.a;

    fgColor = mix(fgColor, hlColor, step(1.02 - .02 * u_colorSteps, brightness));
    fgOpacity = mix(fgOpacity, hlOpacity, step(1.02 - .02 * u_colorSteps, brightness));

    color = fgColor * quantLum;
    opacity = fgOpacity * quantLum;
    color += bgColor * (1.0 - opacity);
    opacity += bgOpacity * (1.0 - opacity);
  }


  fragColor = vec4(color, opacity);
}
`,tS={name:"Default",params:{...r.defaultObjectSizing,fit:"cover",speed:0,frame:0,colorFront:"#94ffaf",colorBack:"#000c38",colorHighlight:"#eaff94",type:"8x8",size:2,colorSteps:2,originalColors:!1}},tA={name:"Retro",params:{...r.defaultObjectSizing,fit:"cover",speed:0,frame:0,colorFront:"#eeeeee",colorBack:"#5452ff",colorHighlight:"#eeeeee",type:"2x2",size:3,colorSteps:1,originalColors:!0}},tC=[tS,{name:"Noise",params:{...r.defaultObjectSizing,fit:"cover",speed:0,frame:0,colorFront:"#a2997c",colorBack:"#000000",colorHighlight:"#ededed",type:"random",size:1,colorSteps:1,originalColors:!1}},tA,{name:"Natural",params:{...r.defaultObjectSizing,fit:"cover",speed:0,frame:0,colorFront:"#ffffff",colorBack:"#000000",colorHighlight:"#ffffff",type:"8x8",size:2,colorSteps:5,originalColors:!0}}],tB=(0,o.memo)(function({speed:e=tS.params.speed,frame:o=tS.params.frame,colorFront:a=tS.params.colorFront,colorBack:s=tS.params.colorBack,colorHighlight:n=tS.params.colorHighlight,image:l="",type:u=tS.params.type,colorSteps:f=tS.params.colorSteps,originalColors:m=tS.params.originalColors,pxSize:p,size:d=void 0===p?tS.params.size:p,fit:g=tS.params.fit,scale:h=tS.params.scale,rotation:v=tS.params.rotation,originX:x=tS.params.originX,originY:_=tS.params.originY,offsetX:b=tS.params.offsetX,offsetY:y=tS.params.offsetY,worldWidth:w=tS.params.worldWidth,worldHeight:S=tS.params.worldHeight,...A}){let C={u_image:l,u_colorFront:(0,i.getShaderColorFromString)(a),u_colorBack:(0,i.getShaderColorFromString)(s),u_colorHighlight:(0,i.getShaderColorFromString)(n),u_type:eP[u],u_pxSize:d,u_colorSteps:f,u_originalColors:m,u_fit:r.ShaderFitOptions[g],u_rotation:v,u_scale:h,u_offsetX:b,u_offsetY:y,u_originX:x,u_originY:_,u_worldWidth:w,u_worldHeight:S};return(0,c.jsx)(t.ShaderMount,{...A,speed:e,frame:o,fragmentShader:tw,uniforms:C})},a.colorPropsAreEqual),tk={maxColorCount:10},tz=`#version 300 es
precision highp float;

in mediump vec2 v_imageUV;
in mediump vec2 v_objectUV;
out vec4 fragColor;

uniform sampler2D u_image;
uniform float u_time;
uniform mediump float u_imageAspectRatio;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${tk.maxColorCount}];
uniform float u_colorsCount;

uniform float u_angle;
uniform float u_noise;
uniform float u_innerGlow;
uniform float u_outerGlow;
uniform float u_contour;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1. - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1. - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float circle(vec2 uv, vec2 c, vec2 r) {
  return 1. - smoothstep(r[0], r[1], length(uv - c));
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

float shadowShape(vec2 uv, float t, float contour) {
  vec2 scaledUV = uv;

  // base shape tranjectory
  float posY = mix(-1., 2., t);

  // scaleX when it's moving down
  scaledUV.y -= .5;
  float mainCircleScale = sst(0., .8, posY) * lst(1.4, .9, posY);
  scaledUV *= vec2(1., 1. + 1.5 * mainCircleScale);
  scaledUV.y += .5;

  // base shape
  float innerR = .4;
  float outerR = 1. - .3 * (sst(.1, .2, t) * (1. - sst(.2, .5, t)));
  float s = circle(scaledUV, vec2(.5, posY - .2), vec2(innerR, outerR));
  float shapeSizing = sst(.2, .3, t) * sst(.6, .3, t);
  s = pow(s, 1.4);
  s *= 1.2;

  // flat gradient to take over the shadow shape
  float topFlattener = 0.;
  {
    float pos = posY - uv.y;
    float edge = 1.2;
    topFlattener = lst(-.4, 0., pos) * (1. - sst(.0, edge, pos));
    topFlattener = pow(topFlattener, 3.);
    float topFlattenerMixer = (1. - sst(.0, .3, pos));
    s = mix(topFlattener, s, topFlattenerMixer);
  }

  // apple right circle
  {
    float visibility = sst(.6, .7, t) * (1. - sst(.8, .9, t));
    float angle = -2. -t * TWO_PI;
    float rightCircle = circle(uv, vec2(.95 - .2 * cos(angle), .4 - .1 * sin(angle)), vec2(.15, .3));
    rightCircle *= visibility;
    s = mix(s, 0., rightCircle);
  }

  // apple top circle
  {
    float topCircle = circle(uv, vec2(.5, .19), vec2(.05, .25));
    topCircle += 2. * contour * circle(uv, vec2(.5, .19), vec2(.2, .5));
    float visibility = .55 * sst(.2, .3, t) * (1. - sst(.3, .45, t));
    topCircle *= visibility;
    s = mix(s, 0., topCircle);
  }

  float leafMask = circle(uv, vec2(.53, .13), vec2(.08, .19));
  leafMask = mix(leafMask, 0., 1. - sst(.4, .54, uv.x));
  leafMask = mix(0., leafMask, sst(.0, .2, uv.y));
  leafMask *= (sst(.5, 1.1, posY) * sst(1.5, 1.3, posY));
  s += leafMask;

  // apple bottom circle
  {
    float visibility = sst(.0, .4, t) * (1. - sst(.6, .8, t));
    s = mix(s, 0., visibility * circle(uv, vec2(.52, .92), vec2(.09, .25)));
  }

  // random balls that are invisible if apple logo is selected
  {
    float pos = sst(.0, .6, t) * (1. - sst(.6, 1., t));
    s = mix(s, .5, circle(uv, vec2(.0, 1.2 - .5 * pos), vec2(.1, .3)));
    s = mix(s, .0, circle(uv, vec2(1., .5 + .5 * pos), vec2(.1, .3)));

    s = mix(s, 1., circle(uv, vec2(.95, .2 + .2 * sst(.3, .4, t) * sst(.7, .5, t)), vec2(.07, .22)));
    s = mix(s, 1., circle(uv, vec2(.95, .2 + .2 * sst(.3, .4, t) * (1. - sst(.5, .7, t))), vec2(.07, .22)));
    s /= max(1e-4, sst(1., .85, uv.y));
  }

  s = clamp(0., 1., s);
  return s;
}


void main() {
  vec2 uv = v_objectUV + .5;
  uv.y = 1. - uv.y;

  vec2 imgUV = v_imageUV;
  imgUV -= .5;
  imgUV *= 0.5714285714285714;
  imgUV += .5;
  float imgSoftFrame = getImgFrame(imgUV, .03);

  vec4 img = texture(u_image, imgUV);
  if (img.a == 0.) {
    fragColor = u_colorBack;
    return;
  }

  float t = .1 * u_time;
  t -= .3;

  float tCopy = t + 1. / 3.;
  float tCopy2 = t + 2. / 3.;

  t = mod(t, 1.);
  tCopy = mod(tCopy, 1.);
  tCopy2 = mod(tCopy2, 1.);

  vec2 animationUV = imgUV - vec2(.5);
  float angle = -u_angle * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  animationUV = vec2(
  animationUV.x * cosA - animationUV.y * sinA,
  animationUV.x * sinA + animationUV.y * cosA
  ) + vec2(.5);

  float shape = img[0];
  float outerBlur = 1. - mix(1., img[1], shape);
  float innerBlur = mix(img[1], 0., shape);
  float contour = mix(img[2], 0., shape);

  outerBlur *= imgSoftFrame;

  float shadow = shadowShape(animationUV, t, innerBlur);
  float shadowCopy = shadowShape(animationUV, tCopy, innerBlur);
  float shadowCopy2 = shadowShape(animationUV, tCopy2, innerBlur);

  float inner = .8 + .8 * innerBlur;
  inner = mix(inner, 0., shadow);
  inner = mix(inner, 0., shadowCopy);
  inner = mix(inner, 0., shadowCopy2);

  inner *= mix(0., 2., u_innerGlow);

  inner += (u_contour * 2.) * contour;
  inner = min(1., inner);
  inner *= (1. - shape);

  float outer = 0.;
  {
    t *= 3.;
    t = mod(t - .1, 1.);

    outer = .9 * pow(outerBlur, .8);
    float y = mod(animationUV.y - t, 1.);
    float animatedMask = sst(.3, .65, y) * (1. - sst(.65, 1., y));
    animatedMask = .5 + animatedMask;
    outer *= animatedMask;
    outer *= mix(0., 5., pow(u_outerGlow, 2.));
    outer *= imgSoftFrame;
  }

  inner = pow(inner, 1.2);
  float heat = clamp(inner + outer, 0., 1.);

  heat += (.005 + .35 * u_noise) * (fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453123) - .5);

  float mixer = heat * u_colorsCount;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  float outerShape = 0.;
  for (int i = 1; i < ${tk.maxColorCount+1}; i++) {
    if (i > int(u_colorsCount)) break;
    float m = clamp(mixer - float(i - 1), 0., 1.);
    if (i == 1) {
      outerShape = m;
    }
    vec4 c = u_colors[i - 1];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  vec3 color = gradient.rgb * outerShape;
  float opacity = gradient.a * outerShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  color += .02 * (fract(sin(dot(uv + 1., vec2(12.9898, 78.233))) * 43758.5453123) - .5);

  fragColor = vec4(color, opacity);
}
`;function tR(e){let t=document.createElement("canvas");return new Promise((o,a)=>{let r=new Image;r.crossOrigin="anonymous",r.addEventListener("load",()=>{("string"==typeof e?e.endsWith(".svg"):"image/svg+xml"===e.type)&&(r.width=1e3,r.height=1e3);let i=r.naturalWidth/r.naturalHeight,s=Math.floor(150),n=Math.ceil(2.5*s),l=1e3,c=1e3;i>1?c=Math.floor(1e3/i):l=Math.floor(1e3*i),t.width=l+2*n,t.height=c+2*n;let u=t.getContext("2d",{willReadFrequently:!0});if(!u)throw Error("Failed to get canvas 2d context");u.fillStyle="white",u.fillRect(0,0,t.width,t.height),u.filter="grayscale(100%) blur("+s+"px)",u.drawImage(r,n,n,l,c);let f=u.getImageData(0,0,t.width,t.height).data;u.fillRect(0,0,t.width,t.height),u.filter="grayscale(100%) blur("+Math.round(.12*s)+"px)",u.drawImage(r,n,n,l,c);let m=u.getImageData(0,0,t.width,t.height).data;u.fillRect(0,0,t.width,t.height),u.filter="grayscale(100%) blur(5px)",u.drawImage(r,n,n,l,c);let p=u.getImageData(0,0,t.width,t.height).data,d=u.createImageData(t.width,t.height),g=t.width*t.height;for(let e=0;e<g;e++){let t=4*e;d.data[t]=p[t],d.data[t+1]=f[t],d.data[t+2]=m[t],d.data[t+3]=255}u.putImageData(d,0,0),t.toBlob(e=>{e?o({blob:e}):a(Error("Failed to create PNG blob"))},"image/png")}),r.addEventListener("error",()=>{a(Error("Failed to load image"))}),r.src="string"==typeof e?e:URL.createObjectURL(e)})}let tF="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",tU=[],tE=(e,t)=>(function(e,t=null){for(let o of(null===t&&(t=[e]),tU))if(function(e,t){if(e===t)return!0;if(!e||!t)return!1;let o=e.length;if(t.length!==o)return!1;for(let a=0;a<o;a++)if(e[a]!==t[a])return!1;return!0}(t,o.keys)){if(Object.prototype.hasOwnProperty.call(o,"error"))throw o.error;if(Object.prototype.hasOwnProperty.call(o,"response"))return o.response;throw o.promise}let o={keys:t,promise:("object"==typeof e&&"function"==typeof e.then?e:e(...t)).then(e=>{o.response=e}).catch(e=>o.error=e)};throw tU.push(o),o.promise})(e,t),tO={name:"Default",params:{...r.defaultObjectSizing,scale:.75,speed:1,frame:0,contour:.5,angle:0,noise:0,innerGlow:.5,outerGlow:.5,colorBack:"#000000",colors:["#11206a","#1f3ba2","#2f63e7","#6bd7ff","#ffe679","#ff991e","#ff4c00"]}},tM=[tO,{name:"Sepia",params:{...r.defaultObjectSizing,scale:.75,speed:.5,frame:0,contour:.5,angle:0,noise:.75,innerGlow:.5,outerGlow:.5,colorBack:"#000000",colors:["#997F45","#ffffff"]}}],tP=(0,o.memo)(function({speed:e=tO.params.speed,frame:a=tO.params.frame,image:s="",contour:n=tO.params.contour,angle:l=tO.params.angle,noise:u=tO.params.noise,innerGlow:f=tO.params.innerGlow,outerGlow:m=tO.params.outerGlow,colorBack:p=tO.params.colorBack,colors:d=tO.params.colors,suspendWhenProcessingImage:g=!1,fit:h=tO.params.fit,offsetX:v=tO.params.offsetX,offsetY:x=tO.params.offsetY,originX:_=tO.params.originX,originY:b=tO.params.originY,rotation:y=tO.params.rotation,scale:w=tO.params.scale,worldHeight:S=tO.params.worldHeight,worldWidth:A=tO.params.worldWidth,...C}){let B,k="string"==typeof s?s:s.src,[z,R]=(0,o.useState)(tF);B=g&&"undefined"!=typeof window?tE(()=>tR(k).then(e=>URL.createObjectURL(e.blob)),[k,"heatmap"]):z,(0,o.useLayoutEffect)(()=>{if(g)return;if(!k)return void R(tF);let e=!0;return tR(k).then(t=>{e&&R(URL.createObjectURL(t.blob))}),()=>{e=!1}},[k,g]);let F=(0,o.useMemo)(()=>({u_image:B,u_contour:n,u_angle:l,u_noise:u,u_innerGlow:f,u_outerGlow:m,u_colorBack:(0,i.getShaderColorFromString)(p),u_colors:d.map(i.getShaderColorFromString),u_colorsCount:d.length,u_fit:r.ShaderFitOptions[h],u_offsetX:v,u_offsetY:x,u_originX:_,u_originY:b,u_rotation:y,u_scale:w,u_worldHeight:S,u_worldWidth:A}),[e,a,n,l,u,f,m,d,p,B,h,v,x,_,b,y,w,S,A]);return(0,c.jsx)(t.ShaderMount,{...C,speed:e,frame:a,fragmentShader:tz,mipmaps:["u_image"],uniforms:F})},a.colorPropsAreEqual),tI=`#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform vec2 u_resolution;
uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorTint;

uniform float u_softness;
uniform float u_repetition;
uniform float u_shiftRed;
uniform float u_shiftBlue;
uniform float u_distortion;
uniform float u_contour;
uniform float u_angle;

uniform float u_shape;
uniform bool u_isImage;

${r.sizingVariablesDeclaration}

out vec4 fragColor;

${s.declarePI}
${s.rotation2}
${s.simplexNoise}

float getColorChanges(float c1, float c2, float stripe_p, vec3 w, float blur, float bump, float tint) {

  float ch = mix(c2, c1, smoothstep(.0, 2. * blur, stripe_p));

  float border = w[0];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  if (u_isImage == true) {
    bump = smoothstep(.2, .8, bump);
  }
  border = w[0] + .4 * (1. - bump) * w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + .5 * (1. - bump) * w[1];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  float gradient_t = (stripe_p - w[0] - w[1]) / w[2];
  float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));
  ch = mix(ch, gradient, smoothstep(border, border + .5 * blur, stripe_p));

  // Tint color is applied with color burn blending
  ch = mix(ch, 1. - min(1., (1. - ch) / max(tint, 0.0001)), u_colorTint.a);
  return ch;
}

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;

  float w1 = 1.0, w2 = 2.0, w4 = 4.0;
  float norm = 16.0;
  float sum = w4 * centerSample;

  sum += w2 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).r;

  sum += w1 * textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).r;

  return sum / norm;
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {

  const float firstFrameOffset = 2.8;
  float t = .3 * (u_time + firstFrameOffset);

  vec2 uv = v_imageUV;
  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec4 img = textureGrad(u_image, uv, dudx, dudy);

  if (u_isImage == false) {
    uv = v_objectUV + .5;
    uv.y = 1. - uv.y;
  }

  float cycleWidth = u_repetition;
  float edge = 0.;
  float contOffset = 1.;

  vec2 rotatedUV = uv - vec2(.5);
  float angle = (-u_angle + 70.) * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  rotatedUV = vec2(
  rotatedUV.x * cosA - rotatedUV.y * sinA,
  rotatedUV.x * sinA + rotatedUV.y * cosA
  ) + vec2(.5);

  if (u_isImage == true) {
    float edgeRaw = img.r;
    edge = blurEdge3x3(u_image, uv, dudx, dudy, 6., edgeRaw);
    edge = pow(edge, 1.6);
    edge *= mix(0.0, 1.0, smoothstep(0.0, 0.4, u_contour));
  } else {
    if (u_shape < 1.) {
      // full-fill on canvas
      vec2 borderUV = v_responsiveUV + .5;
      float ratio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
      vec2 mask = min(borderUV, 1. - borderUV);
      vec2 pixel_thickness = 250. / v_responsiveBoxGivenSize;
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);

      uv = v_responsiveUV;
      if (ratio > 1.) {
        uv.y /= ratio;
      } else {
        uv.x *= ratio;
      }
      uv += .5;
      uv.y = 1. - uv.y;

      cycleWidth *= 2.;
      contOffset = 1.5;

    } else if (u_shape < 2.) {
      // circle
      vec2 shapeUV = uv - .5;
      shapeUV *= .67;
      edge = pow(clamp(3. * length(shapeUV), 0., 1.), 18.);
    } else if (u_shape < 3.) {
      // daisy
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.68;

      float r = length(shapeUV) * 2.;
      float a = atan(shapeUV.y, shapeUV.x) + .2;
      r *= (1. + .05 * sin(3. * a + 2. * t));
      float f = abs(cos(a * 3.));
      edge = smoothstep(f, f + .7, r);
      edge *= edge;

      uv *= .8;
      cycleWidth *= 1.6;

    } else if (u_shape < 4.) {
      // diamond
      vec2 shapeUV = uv - .5;
      shapeUV = rotate(shapeUV, .25 * PI);
      shapeUV *= 1.42;
      shapeUV += .5;
      vec2 mask = min(shapeUV, 1. - shapeUV);
      vec2 pixel_thickness = vec2(.15);
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 5.) {
      // metaballs
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.3;
      edge = 0.;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        float speed = 1.5 + 2./3. * sin(fi * 12.345);
        float angle = -fi * 1.5;
        vec2 dir1 = vec2(cos(angle), sin(angle));
        vec2 dir2 = vec2(cos(angle + 1.57), sin(angle + 1.));
        vec2 traj = .4 * (dir1 * sin(t * speed + fi * 1.23) + dir2 * cos(t * (speed * 0.7) + fi * 2.17));
        float d = length(shapeUV + traj);
        edge += pow(1.0 - clamp(d, 0.0, 1.0), 4.0);
      }
      edge = 1. - smoothstep(.65, .9, edge);
      edge = pow(edge, 4.);
    }

    edge = mix(smoothstep(.9 - 2. * fwidth(edge), .9, edge), edge, smoothstep(0.0, 0.4, u_contour));

  }

  float opacity = 0.;
  if (u_isImage == true) {
    opacity = img.g;
    float frame = getImgFrame(v_imageUV, 0.);
    opacity *= frame;
  } else {
    opacity = 1. - smoothstep(.9 - 2. * fwidth(edge), .9, edge);
    if (u_shape < 2.) {
      edge = 1.2 * edge;
    } else if (u_shape < 5.) {
      edge = 1.8 * pow(edge, 1.5);
    }
  }

  float diagBLtoTR = rotatedUV.x - rotatedUV.y;
  float diagTLtoBR = rotatedUV.x + rotatedUV.y;

  vec3 color = vec3(0.);
  vec3 color1 = vec3(.98, 0.98, 1.);
  vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, diagTLtoBR));

  vec2 grad_uv = uv - .5;

  float dist = length(grad_uv + vec2(0., .2 * diagBLtoTR));
  grad_uv = rotate(grad_uv, (.25 - .2 * diagBLtoTR) * PI);
  float direction = grad_uv.x;

  float bump = pow(1.8 * dist, 1.2);
  bump = 1. - bump;
  bump *= pow(uv.y, .3);


  float thin_strip_1_ratio = .12 / cycleWidth * (1. - .4 * bump);
  float thin_strip_2_ratio = .07 / cycleWidth * (1. + .4 * bump);
  float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);

  float thin_strip_1_width = cycleWidth * thin_strip_1_ratio;
  float thin_strip_2_width = cycleWidth * thin_strip_2_ratio;

  float noise = snoise(uv - t);

  edge += (1. - edge) * u_distortion * noise;

  direction += diagBLtoTR;
  float contour = 0.;
  direction -= 2. * noise * diagBLtoTR * (smoothstep(0., 1., edge) * (1.0 - smoothstep(0., 1., edge)));
  direction *= mix(1., 1. - edge, smoothstep(.5, 1., u_contour));
  direction -= 1.7 * edge * smoothstep(.5, 1., u_contour);
  direction += .2 * pow(u_contour, 4.) * (1.0 - smoothstep(0., 1., edge));

  bump *= clamp(pow(uv.y, .1), .3, 1.);
  direction *= (.1 + (1.1 - edge) * bump);

  direction *= (.4 + .6 * (1.0 - smoothstep(.5, 1., edge)));
  direction += .18 * (smoothstep(.1, .2, uv.y) * (1.0 - smoothstep(.2, .4, uv.y)));
  direction += .03 * (smoothstep(.1, .2, 1. - uv.y) * (1.0 - smoothstep(.2, .4, 1. - uv.y)));

  direction *= (.5 + .5 * pow(uv.y, 2.));
  direction *= cycleWidth;
  direction -= t;


  float colorDispersion = (1. - bump);
  colorDispersion = clamp(colorDispersion, 0., 1.);
  float dispersionRed = colorDispersion;
  dispersionRed += .03 * bump * noise;
  dispersionRed += 5. * (smoothstep(-.1, .2, uv.y) * (1.0 - smoothstep(.1, .5, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, 1., bump)));
  dispersionRed -= diagBLtoTR;

  float dispersionBlue = colorDispersion;
  dispersionBlue *= 1.3;
  dispersionBlue += (smoothstep(0., .4, uv.y) * (1.0 - smoothstep(.1, .8, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, .8, bump)));
  dispersionBlue -= .2 * edge;

  dispersionRed *= (u_shiftRed / 20.);
  dispersionBlue *= (u_shiftBlue / 20.);

  float blur = 0.;
  float rExtraBlur = 0.;
  float gExtraBlur = 0.;
  if (u_isImage == true) {
    float softness = 0.05 * u_softness;
    blur = softness + .5 * smoothstep(1., 10., u_repetition) * smoothstep(.0, 1., edge);
    float smallCanvasT = 1.0 - smoothstep(100., 500., min(u_resolution.x, u_resolution.y));
    blur += smallCanvasT * smoothstep(.0, 1., edge);
    rExtraBlur = softness * (0.05 + .1 * (u_shiftRed / 20.) * bump);
    gExtraBlur = softness * 0.05 / max(0.001, abs(1. - diagBLtoTR));
  } else {
    blur = u_softness / 15. + .3 * contour;
  }

  vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);
  w[1] -= .02 * smoothstep(.0, 1., edge + bump);
  float stripe_r = fract(direction + dispersionRed);
  float r = getColorChanges(color1.r, color2.r, stripe_r, w, blur + fwidth(stripe_r) + rExtraBlur, bump, u_colorTint.r);
  float stripe_g = fract(direction);
  float g = getColorChanges(color1.g, color2.g, stripe_g, w, blur + fwidth(stripe_g) + gExtraBlur, bump, u_colorTint.g);
  float stripe_b = fract(direction - dispersionBlue);
  float b = getColorChanges(color1.b, color2.b, stripe_b, w, blur + fwidth(stripe_b), bump, u_colorTint.b);

  color = vec3(r, g, b);
  color *= opacity;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${s.colorBandingFix}

  fragColor = vec4(color, opacity);
}
`;function tV(e){let t=document.createElement("canvas"),o=t.getContext("2d"),a="string"==typeof e&&e.startsWith("blob:");return new Promise((r,i)=>{if(!e||!o)return void i(Error("Invalid file or canvas context"));let s=a&&fetch(e).then(e=>e.headers.get("Content-Type")),n=new Image;n.crossOrigin="anonymous";let l=performance.now();n.onload=async()=>{let a,l=await s;a=l?"image/svg+xml"===l:"string"==typeof e?e.endsWith(".svg")||e.startsWith("data:image/svg+xml"):"image/svg+xml"===e.type;let c=n.width||n.naturalWidth,u=n.height||n.naturalHeight;if(a){let e=c/u;c>u?(c=4096,u=4096/e):(u=4096,c=4096*e),n.width=c,n.height=u}let f=512/Math.min(c,u),m=Math.round(c*f),p=Math.round(u*f);t.width=c,t.height=u;let d=document.createElement("canvas");d.width=m,d.height=p;let g=d.getContext("2d");g.drawImage(n,0,0,m,p);let h=performance.now(),v=g.getImageData(0,0,m,p).data,x=new Uint8Array(m*p),_=new Uint8Array(m*p),b=0;for(let e=0,t=0;e<v.length;e+=4,t++){let o=+(0!==v[e+3]);x[t]=o,b+=o}let y=[],w=[];for(let e=0;e<p;e++)for(let t=0;t<m;t++){let o=e*m+t;if(x[o])0!==t&&t!==m-1&&0!==e&&e!==p-1&&x[o-1]&&x[o+1]&&x[o-m]&&x[o+m]&&x[o-m-1]&&x[o-m+1]&&x[o+m-1]&&x[o+m+1]?w.push(o):(_[o]=1,y.push(o))}let S=function(e,t,o,a,r,i){let s=o.length,n=new Int32Array(4*s);for(let t=0;t<s;t++){let a=o[t],s=a%r,l=Math.floor(a/r);n[4*t+0]=s<r-1&&e[a+1]?a+1:-1,n[4*t+1]=s>0&&e[a-1]?a-1:-1,n[4*t+2]=l>0&&e[a-r]?a-r:-1,n[4*t+3]=l<i-1&&e[a+r]?a+r:-1}return{interiorPixels:o,boundaryPixels:a,pixelCount:s,neighborIndices:n}}(x,0,new Uint32Array(w),new Uint32Array(y),m,p),A=performance.now(),C=function(e,t,o,a,r){let i=new Float32Array(a*r),{interiorPixels:s,neighborIndices:n,pixelCount:l}=e,c=performance.now(),u=[],f=[];for(let e=0;e<l;e++){let t=s[e];(t%a+Math.floor(t/a))%2==0?u.push(e):f.push(e)}for(let e=0;e<40;e++){for(let e of u){let t=s[e],o=n[4*e+0],a=n[4*e+1],r=n[4*e+2],l=n[4*e+3],c=0;o>=0&&(c+=i[o]),a>=0&&(c+=i[a]),r>=0&&(c+=i[r]),l>=0&&(c+=i[l]);let u=(.01+c)/4;i[t]=1.9*u+-.8999999999999999*i[t]}for(let e of f){let t=s[e],o=n[4*e+0],a=n[4*e+1],r=n[4*e+2],l=n[4*e+3],c=0;o>=0&&(c+=i[o]),a>=0&&(c+=i[a]),r>=0&&(c+=i[r]),l>=0&&(c+=i[l]);let u=(.01+c)/4;i[t]=1.9*u+-.8999999999999999*i[t]}}0;return i}(S,0,0,m,p);let B=0;for(let e=0;e<w.length;e++){let t=w[e];C[t]>B&&(B=C[t])}let k=document.createElement("canvas");k.width=m,k.height=p;let z=k.getContext("2d"),R=z.createImageData(m,p);for(let e=0;e<p;e++)for(let t=0;t<m;t++){let o=e*m+t,a=4*o;if(x[o]){let e=255*(1-C[o]/B);R.data[a]=e,R.data[a+1]=e,R.data[a+2]=e,R.data[a+3]=255}else R.data[a]=255,R.data[a+1]=255,R.data[a+2]=255,R.data[a+3]=0}z.putImageData(R,0,0),o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",o.drawImage(k,0,0,m,p,0,0,c,u);let F=o.getImageData(0,0,c,u),U=document.createElement("canvas");U.width=c,U.height=u;let E=U.getContext("2d");E.drawImage(n,0,0,c,u);let O=E.getImageData(0,0,c,u);for(let e=0;e<F.data.length;e+=4){let t=O.data[e+3],o=F.data[e+3];0===t?(F.data[e]=255,F.data[e+1]=0):(F.data[e]=0===o?0:F.data[e],F.data[e+1]=t),F.data[e+2]=255,F.data[e+3]=255}o.putImageData(F,0,0),t.toBlob(e=>{if(!e)return void i(Error("Failed to create PNG blob"));0;r({imageData:F,pngBlob:e})},"image/png")},n.onerror=()=>i(Error("Failed to load image")),n.src="string"==typeof e?e:URL.createObjectURL(e)})}let tD={none:0,circle:1,daisy:2,diamond:3,metaballs:4},tT={name:"Default",params:{...r.defaultObjectSizing,scale:.6,speed:1,frame:0,colorBack:"#AAAAAC",colorTint:"#ffffff",distortion:.07,repetition:2,shiftRed:.3,shiftBlue:.3,contour:.4,softness:.1,angle:70,shape:"diamond"}},tN=[tT,{name:"Noir",params:{...r.defaultObjectSizing,scale:.6,speed:1,frame:0,colorBack:"#000000",colorTint:"#606060",softness:.45,repetition:1.5,shiftRed:0,shiftBlue:0,distortion:0,contour:0,angle:90,shape:"diamond"}},{name:"Backdrop",params:{...r.defaultObjectSizing,speed:1,frame:0,scale:1.5,colorBack:"#AAAAAC",colorTint:"#ffffff",softness:.05,repetition:1.5,shiftRed:.3,shiftBlue:.3,distortion:.1,contour:.4,shape:"none",angle:90,worldWidth:0,worldHeight:0}},{name:"Stripes",params:{...r.defaultObjectSizing,speed:1,frame:0,scale:.6,colorBack:"#000000",colorTint:"#2c5d72",softness:.8,repetition:6,shiftRed:1,shiftBlue:-1,distortion:.4,contour:.4,shape:"circle",angle:0}}],tj=(0,o.memo)(function({colorBack:e=tT.params.colorBack,colorTint:a=tT.params.colorTint,speed:s=tT.params.speed,frame:n=tT.params.frame,image:l="",contour:u=tT.params.contour,distortion:f=tT.params.distortion,softness:m=tT.params.softness,repetition:p=tT.params.repetition,shiftRed:d=tT.params.shiftRed,shiftBlue:g=tT.params.shiftBlue,angle:h=tT.params.angle,shape:v=tT.params.shape,suspendWhenProcessingImage:x=!1,fit:_=tT.params.fit,scale:b=tT.params.scale,rotation:y=tT.params.rotation,originX:w=tT.params.originX,originY:S=tT.params.originY,offsetX:A=tT.params.offsetX,offsetY:C=tT.params.offsetY,worldWidth:B=tT.params.worldWidth,worldHeight:k=tT.params.worldHeight,...z}){let R,F="string"==typeof l?l:l.src,[U,E]=(0,o.useState)(tF);R=x&&"undefined"!=typeof window&&F?tE(()=>tV(F).then(e=>URL.createObjectURL(e.pngBlob)),[F,"liquid-metal"]):U,(0,o.useLayoutEffect)(()=>{if(x)return;if(!F)return void E(tF);let e=!0;return tV(F).then(t=>{e&&E(URL.createObjectURL(t.pngBlob))}),()=>{e=!1}},[F,x]);let O={u_colorBack:(0,i.getShaderColorFromString)(e),u_colorTint:(0,i.getShaderColorFromString)(a),u_image:R,u_contour:u,u_distortion:f,u_softness:m,u_repetition:p,u_shiftRed:d,u_shiftBlue:g,u_angle:h,u_isImage:!!l,u_shape:tD[v],u_fit:r.ShaderFitOptions[_],u_scale:b,u_rotation:y,u_offsetX:A,u_offsetY:C,u_originX:w,u_originY:S,u_worldWidth:B,u_worldHeight:k};return(0,c.jsx)(t.ShaderMount,{...z,speed:s,frame:n,fragmentShader:tI,mipmaps:["u_image"],uniforms:O})}),tW=`#version 300 es
precision mediump float;

uniform mediump vec2 u_resolution;
uniform mediump float u_pixelRatio;
uniform mediump float u_originX;
uniform mediump float u_originY;
uniform mediump float u_fit;

uniform mediump float u_scale;
uniform mediump float u_rotation;
uniform mediump float u_offsetX;
uniform mediump float u_offsetY;

uniform float u_time;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform float u_radius;
uniform float u_contrast;

uniform sampler2D u_image;
uniform mediump float u_imageAspectRatio;

uniform float u_size;
uniform float u_grainMixer;
uniform float u_grainOverlay;
uniform float u_grainSize;
uniform float u_grid;
uniform bool u_originalColors;
uniform bool u_inverted;
uniform float u_type;

out vec4 fragColor;

${s.declarePI}
${s.rotation2}
${s.proceduralHash21}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

vec2 getImageUV(vec2 uv, vec2 extraScale) {
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  float r = u_rotation * PI / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  vec2 imageBoxSize;
  if (u_fit == 1.) {
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  vec2 imageUV = uv;
  imageUV *= imageBoxScale;
  imageUV += boxOrigin * (imageBoxScale - 1.);
  imageUV += graphicOffset;
  imageUV /= u_scale;
  imageUV *= extraScale;
  imageUV.x *= u_imageAspectRatio;
  imageUV = graphicRotation * imageUV;
  imageUV.x /= u_imageAspectRatio;

  imageUV += .5;
  imageUV.y = 1. - imageUV.y;
  
  return imageUV;
}

float getCircle(vec2 uv, float r, float baseR) {
  r = mix(.25 * baseR, 0., r);
  float d = length(uv - .5);
  float aa = fwidth(d);
  return 1. - smoothstep(r - aa, r + aa, d);
}

float getCell(vec2 uv) {
  float insideX = step(0.0, uv.x) * (1.0 - step(1.0, uv.x));
  float insideY = step(0.0, uv.y) * (1.0 - step(1.0, uv.y));
  return insideX * insideY;
}

float getCircleWithHole(vec2 uv, float r, float baseR) {
  float cell = getCell(uv);

  r = mix(.75 * baseR, 0., r);
  float rMod = mod(r, .5);
  
  float d = length(uv - .5);
  float aa = fwidth(d);
  float circle = 1. - smoothstep(rMod - aa, rMod + aa, d);
  if (r < .5) {
    return circle;
  } else {
    return cell - circle;
  }
}

float getGooeyBall(vec2 uv, float r, float baseR) {
  float d = length(uv - .5);
  float sizeRadius = .3;
  if (u_grid == 1.) {
    sizeRadius = .42;
  }
  sizeRadius = mix(sizeRadius * baseR, 0., r);
  d = 1. - sst(0., sizeRadius, d);
  
  d = pow(d, 2. + baseR);
  return d;
}

float getSoftBall(vec2 uv, float r, float baseR) {
  float d = length(uv - .5);
  float sizeRadius = clamp(baseR, 0., 1.);
  sizeRadius = mix(.5 * sizeRadius, 0., r);
  d = 1. - lst(0., sizeRadius, d);
  float powRadius = 1. - lst(0., 2., baseR);
  d = pow(d, 4. + 3. * powRadius);
  return d;
}

float getUvFrame(vec2 uv, vec2 pad) {
  float aa = 0.0001;

  float left   = smoothstep(-pad.x, -pad.x + aa, uv.x);
  float right  = smoothstep(1.0 + pad.x, 1.0 + pad.x - aa, uv.x);
  float bottom = smoothstep(-pad.y, -pad.y + aa, uv.y);
  float top    = smoothstep(1.0 + pad.y, 1.0 + pad.y - aa, uv.y);

  return left * right * bottom * top;
}

float sigmoid(float x, float k) {
  return 1.0 / (1.0 + exp(-k * (x - 0.5)));
}

float getLumAtPx(vec2 uv, float contrast) {
  vec4 tex = texture(u_image, uv);
  vec3 color = vec3(
  sigmoid(tex.r, contrast),
  sigmoid(tex.g, contrast),
  sigmoid(tex.b, contrast)
  );
  float lum = dot(vec3(0.2126, 0.7152, 0.0722), color);
  lum = mix(1., lum, tex.a);
  lum = u_inverted ? (1. - lum) : lum;
  return lum;
}

float getLumBall(vec2 p, vec2 pad, vec2 inCellOffset, float contrast, float baseR, float stepSize, out vec4 ballColor) {
  p += inCellOffset;
  vec2 uv_i = floor(p);
  vec2 uv_f = fract(p);
  vec2 samplingUV = (uv_i + .5 - inCellOffset) * pad + vec2(.5);
  float outOfFrame = getUvFrame(samplingUV, pad * stepSize);
  
  float lum = getLumAtPx(samplingUV, contrast);
  ballColor = texture(u_image, samplingUV);
  ballColor.rgb *= ballColor.a;
  ballColor *= outOfFrame;

  float ball = 0.;
  if (u_type == 0.) {
    // classic
    ball = getCircle(uv_f, lum, baseR);
  } else if (u_type == 1.) {
    // gooey
    ball = getGooeyBall(uv_f, lum, baseR);
  } else if (u_type == 2.) {
    // holes
    ball = getCircleWithHole(uv_f, lum, baseR);
  } else if (u_type == 3.) {
    // soft
    ball = getSoftBall(uv_f, lum, baseR);
  }

  return ball * outOfFrame;
}

float blendOverlay(float base, float blend) { 
  return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) { 
  return vec3(blendOverlay(base.r, blend.r), blendOverlay(base.g, blend.g), blendOverlay(base.b, blend.b));
}

vec3 blendHardLight(vec3 base, vec3 blend) { 
  return blendOverlay(blend, base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) { 
  return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}

void main() {
  
  float stepMultiplier = 1.;
  if (u_type == 0.) {
    // classic
    stepMultiplier = 2.;
  } else if (u_type == 1. || u_type == 3.) {
    // gooey & soft
    stepMultiplier = 6.;
  }
  
  float cellsPerSide = mix(200., 7., pow(u_size, .7));
  cellsPerSide /= stepMultiplier;
  float cellSizeY = 1. / cellsPerSide;
  vec2 pad = cellSizeY * vec2(1. / u_imageAspectRatio, 1.);
  if (u_type == 1. && u_grid == 1.) {
    // gooey diagonal grid works differently
    pad *= .7;
  }

  vec2 uvNormalised = (gl_FragCoord.xy - .5 * u_resolution) / u_resolution.xy;
  vec2 uv = getImageUV(uvNormalised, vec2(1.));
  uv -= vec2(.5);
  uv /= pad;

  float contrast = mix(0., 15., pow(u_contrast, 1.5));
  float baseRadius = u_radius;
  if (u_originalColors == true) {
    contrast = mix(.1, 4., pow(u_contrast, 2.));
    baseRadius = 2. * pow(.5 * u_radius, .3);
  }

  float totalShape = 0.;
  vec3 totalColor = vec3(0.);
  float totalOpacity = 0.;

  vec4 ballColor;
  float shape;
  float stepSize = 1. / stepMultiplier;
  for (float x = -0.5; x < 0.5; x += stepSize) {
    for (float y = -0.5; y < 0.5; y += stepSize) {
      vec2 offset = vec2(x, y);

      if (u_grid == 1.) {
        float rowIndex = floor((y + .5) / stepSize);
        float colIndex = floor((x + .5) / stepSize);
        if (stepSize == 1.) {
          rowIndex = floor(uv.y + y + 1.);
          if (u_type == 1.) {
            colIndex = floor(uv.x + x + 1.);
          }
        }
        if (u_type == 1.) {
          if (mod(rowIndex + colIndex, 2.) == 1.) {
            continue;
          }
        } else {
          if (mod(rowIndex, 2.) == 1.) {
            offset.x += .5 * stepSize;
          }
        }
      }

      shape = getLumBall(uv, pad, offset, contrast, baseRadius, stepSize, ballColor);
      totalColor   += ballColor.rgb * shape;
      totalShape   += shape;
      totalOpacity += shape;
    }
  }
  
  const float eps = 1e-4;
  
  totalColor /= max(totalShape, eps);
  totalOpacity /= max(totalShape, eps);

  float finalShape = 0.;
  if (u_type == 0.) {
    finalShape = min(1., totalShape);
  } else if (u_type == 1.) {
    float aa = fwidth(totalShape);
    float th = .5;
    finalShape = smoothstep(th - aa, th + aa, totalShape);
  } else if (u_type == 2.) {
    finalShape = min(1., totalShape);
  } else if (u_type == 3.) {
    finalShape = totalShape;
  }

  vec2 grainSize = mix(2000., 200., u_grainSize) * vec2(1., 1. / u_imageAspectRatio);
  vec2 grainUV = getImageUV(uvNormalised, grainSize);
  float grain = valueNoise(grainUV);
  grain = smoothstep(.55, .7 + .2 * u_grainMixer, grain);
  grain *= u_grainMixer;
  finalShape = mix(finalShape, 0., grain);

  vec3 color = vec3(0.);
  float opacity = 0.;
  
  if (u_originalColors == true) {
    color = totalColor * finalShape;
    opacity = totalOpacity * finalShape;

    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    color = color + bgColor * (1. - opacity);
    opacity = opacity + u_colorBack.a * (1. - opacity);
  } else {
    vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
    float fgOpacity = u_colorFront.a;
    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    float bgOpacity = u_colorBack.a;

    color = fgColor * finalShape;
    opacity = fgOpacity * finalShape;
    color += bgColor * (1. - opacity);
    opacity += bgOpacity * (1. - opacity);
  }

  float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
  grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
  grainOverlay = pow(grainOverlay, 2.);
  vec3 grainOverlayColor = vec3(grainOverlay);
  color = blendHardLight(color, grainOverlayColor, .5 * u_grainOverlay);

  fragColor = vec4(color, opacity);
}
`,tG={classic:0,gooey:1,holes:2,soft:3},tY={square:0,hex:1},tQ={name:"Default",params:{...r.defaultObjectSizing,fit:"cover",speed:0,frame:0,colorBack:"#f2f1e8",colorFront:"#2b2b2b",size:.3,radius:1.25,contrast:.4,originalColors:!1,inverted:!1,grainMixer:.2,grainOverlay:.2,grainSize:.5,grid:"hex",type:"gooey"}},tH=[tQ,{name:"LED screen",params:{...r.defaultObjectSizing,fit:"cover",speed:0,frame:0,colorBack:"#000000",colorFront:"#29ff7b",size:.5,radius:1.5,contrast:.3,originalColors:!1,inverted:!1,grainMixer:0,grainOverlay:0,grainSize:.5,grid:"square",type:"soft"}},{name:"Mosaic",params:{...r.defaultObjectSizing,fit:"cover",speed:0,frame:0,colorBack:"#000000",colorFront:"#b2aeae",size:.6,radius:2,contrast:.01,originalColors:!0,inverted:!1,grainMixer:0,grainOverlay:0,grainSize:.5,grid:"hex",type:"classic"}},{name:"Round and square",params:{...r.defaultObjectSizing,fit:"cover",speed:0,frame:0,colorBack:"#141414",colorFront:"#ff8000",size:.8,radius:1,contrast:1,originalColors:!1,inverted:!0,grainMixer:.05,grainOverlay:.3,grainSize:.5,grid:"square",type:"holes"}}],tL=(0,o.memo)(function({speed:e=tQ.params.speed,frame:o=tQ.params.frame,colorFront:a=tQ.params.colorFront,colorBack:s=tQ.params.colorBack,image:n="",size:l=tQ.params.size,radius:u=tQ.params.radius,contrast:f=tQ.params.contrast,originalColors:m=tQ.params.originalColors,inverted:p=tQ.params.inverted,grainMixer:d=tQ.params.grainMixer,grainOverlay:g=tQ.params.grainOverlay,grainSize:h=tQ.params.grainSize,grid:v=tQ.params.grid,type:x=tQ.params.type,fit:_=tQ.params.fit,scale:b=tQ.params.scale,rotation:y=tQ.params.rotation,originX:w=tQ.params.originX,originY:S=tQ.params.originY,offsetX:A=tQ.params.offsetX,offsetY:C=tQ.params.offsetY,worldWidth:B=tQ.params.worldWidth,worldHeight:k=tQ.params.worldHeight,...z}){let R={u_image:n,u_colorFront:(0,i.getShaderColorFromString)(a),u_colorBack:(0,i.getShaderColorFromString)(s),u_size:l,u_radius:u,u_contrast:f,u_originalColors:m,u_inverted:p,u_grainMixer:d,u_grainOverlay:g,u_grainSize:h,u_grid:tY[v],u_type:tG[x],u_fit:r.ShaderFitOptions[_],u_rotation:y,u_scale:b,u_offsetX:A,u_offsetY:C,u_originX:w,u_originY:S,u_worldWidth:B,u_worldHeight:k};return(0,c.jsx)(t.ShaderMount,{...z,speed:e,frame:o,fragmentShader:tW,uniforms:R})},a.colorPropsAreEqual);var tX=e.i(26726),tq=e.i(27064);e.s([],63967),e.i(63967),e.s(["ColorPanels",()=>e0,"Dithering",()=>eW,"DotGrid",()=>I,"DotOrbit",()=>U,"FlutedGlass",()=>tg,"GodRays",()=>ey,"GrainGradient",()=>eX,"HalftoneDots",()=>tL,"Heatmap",()=>tP,"ImageDithering",()=>tB,"LiquidMetal",()=>tj,"MeshGradient",()=>d,"Metaballs",()=>q,"NeuroNoise",()=>C,"PaperTexture",()=>tl,"PerlinNoise",()=>ea,"PulsingBorder",()=>eq.PulsingBorder,"ShaderMount",()=>t.ShaderMount,"SimplexNoise",()=>W,"SmokeRing",()=>y,"Spiral",()=>eB,"StaticMeshGradient",()=>e8,"StaticRadialGradient",()=>ta,"Swirl",()=>eE,"Voronoi",()=>eu,"Warp",()=>eh,"Water",()=>ty,"Waves",()=>$,"colorPanelsMeta",()=>eJ,"colorPanelsPresets",()=>e$,"ditheringPresets",()=>ej,"dotGridPresets",()=>P,"dotOrbitMeta",()=>B,"dotOrbitPresets",()=>F,"flutedGlassPresets",()=>td,"getShaderColorFromString",()=>i.getShaderColorFromString,"godRaysMeta",()=>ev,"godRaysPresets",()=>eb,"grainGradientMeta",()=>eG,"grainGradientPresets",()=>eL,"halftoneDotsPresets",()=>tH,"heatmapMeta",()=>tk,"heatmapPresets",()=>tM,"imageDitheringPresets",()=>tC,"isPaperShaderElement",()=>tX.isPaperShaderElement,"liquidMetalPresets",()=>tN,"meshGradientMeta",()=>n,"meshGradientPresets",()=>p,"metaballsMeta",()=>G,"metaballsPresets",()=>X,"neuroNoisePresets",()=>A,"paperTexturePresets",()=>tn,"perlinNoisePresets",()=>eo,"pulsingBorderMeta",()=>tq.pulsingBorderMeta,"pulsingBorderPresets",()=>eq.pulsingBorderPresets,"simplexNoiseMeta",()=>V,"simplexNoisePresets",()=>j,"smokeRingMeta",()=>h,"smokeRingPresets",()=>b,"spiralPresets",()=>eC,"staticMeshGradientMeta",()=>e1,"staticMeshGradientPresets",()=>e4,"staticRadialGradientMeta",()=>e6,"staticRadialGradientPresets",()=>to,"swirlMeta",()=>ek,"swirlPresets",()=>eU,"voronoiMeta",()=>er,"voronoiPresets",()=>ec,"warpMeta",()=>ef,"warpPresets",()=>eg,"waterPresets",()=>tb,"wavesPresets",()=>Z],3226)},19783,e=>{"use strict";let t;var o=e.i(43476),a=e.i(71645),r=["x","y","z"],i=function(e){Object.assign(this,{uniforms:{},geometry:{vertices:[{x:0,y:0,z:0}]},mode:0,modifiers:{},attributes:[],multiplier:1,buffers:[]}),Object.assign(this,e),this.prepareProgram(),this.prepareUniforms(),this.prepareAttributes()};i.prototype.compileShader=function(e,t){var o=this.gl.createShader(e);return this.gl.shaderSource(o,t),this.gl.compileShader(o),o},i.prototype.prepareProgram=function(){var e=this.gl,t=this.vertex,o=this.fragment,a=e.createProgram();e.attachShader(a,this.compileShader(35633,t)),e.attachShader(a,this.compileShader(35632,o)),e.linkProgram(a),e.useProgram(a),this.program=a},i.prototype.prepareUniforms=function(){for(var e=Object.keys(this.uniforms),t=0;t<e.length;t+=1){var o=this.gl.getUniformLocation(this.program,e[t]);this.uniforms[e[t]].location=o}},i.prototype.prepareAttributes=function(){void 0!==this.geometry.vertices&&this.attributes.push({name:"aPosition",size:3}),void 0!==this.geometry.normal&&this.attributes.push({name:"aNormal",size:3}),this.attributeKeys=[];for(var e=0;e<this.attributes.length;e+=1)this.attributeKeys.push(this.attributes[e].name),this.prepareAttribute(this.attributes[e])},i.prototype.prepareAttribute=function(e){for(var t=this.geometry,o=this.multiplier,a=t.vertices,i=t.normal,s=new Float32Array(o*a.length*e.size),n=0;n<o;n+=1)for(var l=e.data&&e.data(n,o),c=n*a.length*e.size,u=0;u<a.length;u+=1)for(var f=0;f<e.size;f+=1){var m=this.modifiers[e.name];s[c]=void 0!==m?m(l,u,f,this):"aPosition"===e.name?a[u][r[f]]:"aNormal"===e.name?i[u][r[f]]:l[f],c+=1}this.attributes[this.attributeKeys.indexOf(e.name)].data=s,this.prepareBuffer(this.attributes[this.attributeKeys.indexOf(e.name)])},i.prototype.prepareBuffer=function(e){var t=e.data,o=e.name,a=e.size,r=this.gl.createBuffer();this.gl.bindBuffer(34962,r),this.gl.bufferData(34962,t,35044);var i=this.gl.getAttribLocation(this.program,o);this.gl.enableVertexAttribArray(i),this.gl.vertexAttribPointer(i,a,5126,!1,0,0),this.buffers[this.attributeKeys.indexOf(e.name)]={buffer:r,location:i,size:a}},i.prototype.render=function(e){var t=this,o=this.uniforms,a=this.multiplier,r=this.gl;r.useProgram(this.program);for(var i=0;i<this.buffers.length;i+=1){var s=this.buffers[i],n=s.location,l=s.buffer,c=s.size;r.enableVertexAttribArray(n),r.bindBuffer(34962,l),r.vertexAttribPointer(n,c,5126,!1,0,0)}Object.keys(e).forEach(function(t){o[t].value=e[t].value}),Object.keys(o).forEach(function(e){var a=o[e];t.uniformMap[a.type](a.location,a.value)}),r.drawArrays(this.mode,0,a*this.geometry.vertices.length),this.onRender&&this.onRender(this)},i.prototype.destroy=function(){for(var e=0;e<this.buffers.length;e+=1)this.gl.deleteBuffer(this.buffers[e].buffer);this.gl.deleteProgram(this.program),this.gl=null};var s=function(e){var t=this,o=e||{},a=o.canvas;void 0===a&&(a=document.querySelector("canvas"));var r=o.context;void 0===r&&(r={});var i=o.contextType;void 0===i&&(i="experimental-webgl");var s=o.settings;void 0===s&&(s={});var n=a.getContext(i,Object.assign({alpha:!1,antialias:!1},r));Object.assign(this,{gl:n,canvas:a,uniforms:{},instances:new Map,shouldRender:!0}),Object.assign(this,{devicePixelRatio:1,clearColor:[1,1,1,1],position:{x:0,y:0,z:2},clip:[.001,100]}),Object.assign(this,s),this.uniformMap={float:function(e,t){return n.uniform1f(e,t)},vec2:function(e,t){return n.uniform2fv(e,t)},vec3:function(e,t){return n.uniform3fv(e,t)},vec4:function(e,t){return n.uniform4fv(e,t)},mat2:function(e,t){return n.uniformMatrix2fv(e,!1,t)},mat3:function(e,t){return n.uniformMatrix3fv(e,!1,t)},mat4:function(e,t){return n.uniformMatrix4fv(e,!1,t)}},n.enable(n.DEPTH_TEST),n.depthFunc(n.LEQUAL),!1===n.getContextAttributes().alpha&&(n.clearColor.apply(n,this.clearColor),n.clearDepth(1)),this.onSetup&&this.onSetup(n),window.addEventListener("resize",function(){return t.resize()}),this.resize(),this.render()};s.prototype.resize=function(){var e=this.gl,t=this.canvas,o=this.devicePixelRatio,a=this.position;t.width=t.clientWidth*o,t.height=t.clientHeight*o;var r=e.drawingBufferWidth,i=e.drawingBufferHeight,s=r/i;e.viewport(0,0,r,i);var n=Math.tan(Math.PI/180*22.5),l=[1,0,0,0,0,1,0,0,0,0,1,0,a.x,a.y,-((s<1?1:s)*a.z),1];this.uniforms.uProjectionMatrix={type:"mat4",value:[.5/n,0,0,0,0,s/n*.5,0,0,0,0,-(this.clip[1]+this.clip[0])/(this.clip[1]-this.clip[0]),-1,0,0,-2*this.clip[1]*(this.clip[0]/(this.clip[1]-this.clip[0])),0]},this.uniforms.uViewMatrix={type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},this.uniforms.uModelMatrix={type:"mat4",value:l}},s.prototype.toggle=function(e){e!==this.shouldRender&&(this.shouldRender=void 0!==e?e:!this.shouldRender,this.shouldRender&&this.render())},s.prototype.render=function(){var e=this;this.gl.clear(16640),this.instances.forEach(function(t){t.render(e.uniforms)}),this.onRender&&this.onRender(this),this.shouldRender&&requestAnimationFrame(function(){return e.render()})},s.prototype.add=function(e,t){void 0===t&&(t={uniforms:{}}),void 0===t.uniforms&&(t.uniforms={}),Object.assign(t.uniforms,JSON.parse(JSON.stringify(this.uniforms))),Object.assign(t,{gl:this.gl,uniformMap:this.uniformMap});var o=new i(t);return this.instances.set(e,o),o},s.prototype.remove=function(e){var t=this.instances.get(e);void 0!==t&&(t.destroy(),this.instances.delete(e))},s.prototype.destroy=function(){var e=this;this.instances.forEach(function(t,o){t.destroy(),e.instances.delete(o)}),this.toggle(!1)};var n="theta",l="mapSamples",c="mapBrightness",u="baseColor",f="markerColor",m="glowColor",p="markers",d="diffuse",g="devicePixelRatio",h="dark",v="offset",x="scale",_="opacity",b="mapBaseBrightness",y={phi:"z",[n]:"A",[l]:"k",[c]:"D",[u]:"S",[f]:"T",[m]:"y",[d]:"E",[h]:"F",[v]:"x",[x]:"B",[_]:"U",[b]:"G"},{PI:w,sin:S,cos:A,sqrt:C,atan2:B,floor:k,max:z,pow:R,log2:F}=Math,U=(e,t)=>[].concat(...e.map(e=>{let[o,a]=e.location;o=o*w/180,a=a*w/180-w;let r=A(o);return[...((e,t)=>{let o=[e[0],e[2],e[1]],a=1/t,r=R(1.618033988749895,z(2,k(.7202100452062783*F(2.23606797749979*t*w*(1-o[2]*o[2])))))/2.23606797749979,i=[k(r+.5),k(1.618033988749895*r+.5)],s=[(i[0]+1)*.618033988749895%1*6.283185307179586-3.8832220774509327,(i[1]+1)*.618033988749895%1*6.283185307179586-3.8832220774509327],n=[-2*i[0],-2*i[1]],l=[B(o[1],o[0]),o[2]-1],c=s[0]*n[1]-n[0]*s[1],u=[k((n[1]*l[0]-s[1]*(l[1]*t+1))/c),k((-n[0]*l[0]+s[0]*(l[1]*t+1))/c)],f=w,m=[0,0,0];for(let e=0;e<4;e++){let r=i[0]*(u[0]+e%2)+i[1]*(u[1]+k(.5*e));if(r>t)continue;let s=.618033988749895*r%1*6.283185307179586,n=1-2*r*a,l=C(1-n*n),c=[A(s)*l,S(s)*l,n],p=C((o[0]-c[0])**2+(o[1]-c[1])**2+(o[2]-c[2])**2);p<f&&(f=p,m=c)}return[m[0],m[2],m[1]]})([-r*A(a),S(o),r*S(a)],t),e.size,...e.color?[...e.color,1]:[0,0,0,0]]}),[0,0,0,0,0,0,0,0]);e.i(47167);class E{constructor(){this.subscriptions=[]}add(e){var t;return t=this.subscriptions,-1===t.indexOf(e)&&t.push(e),()=>{var t;let o;return t=this.subscriptions,void((o=t.indexOf(e))>-1&&t.splice(o,1))}}notify(e,t,o){let a=this.subscriptions.length;if(a)if(1===a)this.subscriptions[0](e,t,o);else for(let r=0;r<a;r++){let a=this.subscriptions[r];a&&a(e,t,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}let O={},M=e=>e,P=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],{schedule:I,cancel:V,state:D}=function(e,t){let o=!1,a=!0,r={delta:0,timestamp:0,isProcessing:!1},i=()=>o=!0,s=P.reduce((e,o)=>(e[o]=function(e,t){let o=new Set,a=new Set,r=!1,i=!1,s=new WeakSet,n={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){s.has(t)&&(u.schedule(t),e()),l++,t(n)}let u={schedule:(e,t=!1,i=!1)=>{let n=i&&r?o:a;return t&&s.add(e),n.has(e)||n.add(e),e},cancel:e=>{a.delete(e),s.delete(e)},process:e=>{if(n=e,r){i=!0;return}r=!0,[o,a]=[a,o],o.forEach(c),t,l=0,o.clear(),r=!1,i&&(i=!1,u.process(e))}};return u}(i,t?o:void 0),e),{}),{setup:n,read:l,resolveKeyframes:c,preUpdate:u,update:f,preRender:m,render:p,postRender:d}=s,g=()=>{let i=O.useManualTiming?r.timestamp:performance.now();o=!1,O.useManualTiming||(r.delta=a?1e3/60:Math.max(Math.min(i-r.timestamp,40),1)),r.timestamp=i,r.isProcessing=!0,n.process(r),l.process(r),c.process(r),u.process(r),f.process(r),m.process(r),p.process(r),d.process(r),r.isProcessing=!1,o&&t&&(a=!1,e(g))};return{schedule:P.reduce((t,i)=>{let n=s[i];return t[i]=(t,i=!1,s=!1)=>(!o&&(o=!0,a=!0,r.isProcessing||e(g)),n.schedule(t,i,s)),t},{}),cancel:e=>{for(let t=0;t<P.length;t++)s[P[t]].cancel(e)},state:r,steps:s}}("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:M,!0);function T(){t=void 0}let N={now:()=>(void 0===t&&N.set(D.isProcessing||O.useManualTiming?D.timestamp:performance.now()),t),set:e=>{t=e,queueMicrotask(T)}},j={current:void 0};class W{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=N.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=N.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=!isNaN(parseFloat(this.current)))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new E);let o=this.events[e].add(t);return"change"===e?()=>{o(),I.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,o){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-o}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return j.current&&j.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){var e;let t=N.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;let o=Math.min(this.updatedAt-this.prevUpdatedAt,30);return e=parseFloat(this.current)-parseFloat(this.prevFrameValue),o?1e3/o*e:0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}let G=(0,a.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Y(e){let t=(0,a.useRef)(null);return null===t.current&&(t.current=e()),t.current}function Q(e){let t=Y(()=>new W(e,void 0)),{isStatic:o}=(0,a.useContext)(G);if(o){let[,o]=(0,a.useState)(e);(0,a.useEffect)(()=>t.on("change",o),[])}return t}let H=(e,t)=>o=>t(e(o)),L=(...e)=>e.reduce(H),X=(e,t,o)=>o>t?t:o<e?e:o,q={mainThread:0},J=()=>{},K=()=>{},Z=e=>"string"==typeof e&&e.startsWith("var(--"),$=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ee={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},et={...ee,transform:e=>X(0,1,e)};({...ee,default:1});let eo=e=>Math.round(1e5*e)/1e5,ea=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,er=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ei=(e,t)=>o=>!!("string"==typeof o&&er.test(o)&&o.startsWith(e)||t&&null!=o&&Object.prototype.hasOwnProperty.call(o,t)),es=(e,t,o)=>a=>{if("string"!=typeof a)return a;let[r,i,s,n]=a.match(ea);return{[e]:parseFloat(r),[t]:parseFloat(i),[o]:parseFloat(s),alpha:void 0!==n?parseFloat(n):1}},en={...ee,transform:e=>Math.round(X(0,255,e))},el={test:ei("rgb","red"),parse:es("red","green","blue"),transform:({red:e,green:t,blue:o,alpha:a=1})=>"rgba("+en.transform(e)+", "+en.transform(t)+", "+en.transform(o)+", "+eo(et.transform(a))+")"},ec={test:ei("#"),parse:function(e){let t="",o="",a="",r="";return e.length>5?(t=e.substring(1,3),o=e.substring(3,5),a=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),o=e.substring(2,3),a=e.substring(3,4),r=e.substring(4,5),t+=t,o+=o,a+=a,r+=r),{red:parseInt(t,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:r?parseInt(r,16)/255:1}},transform:el.transform},eu={test:e=>"string"==typeof e&&e.endsWith("%")&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}%`},ef={test:ei("hsl","hue"),parse:es("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:o,alpha:a=1})=>"hsla("+Math.round(e)+", "+eu.transform(eo(t))+", "+eu.transform(eo(o))+", "+eo(et.transform(a))+")"},em={test:e=>el.test(e)||ec.test(e)||ef.test(e),parse:e=>el.test(e)?el.parse(e):ef.test(e)?ef.parse(e):ec.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?el.transform(e):ef.transform(e),getAnimatableNone:e=>{let t=em.parse(e);return t.alpha=0,em.transform(t)}},ep="number",ed="color",eg=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function eh(e){let t=e.toString(),o=[],a={color:[],number:[],var:[]},r=[],i=0,s=t.replace(eg,e=>(em.test(e)?(a.color.push(i),r.push(ed),o.push(em.parse(e))):e.startsWith("var(")?(a.var.push(i),r.push("var"),o.push(e)):(a.number.push(i),r.push(ep),o.push(parseFloat(e))),++i,"${}")).split("${}");return{values:o,split:s,indexes:a,types:r}}let ev=function(e){let{split:t,types:o}=eh(e),a=t.length;return e=>{let r="";for(let i=0;i<a;i++)if(r+=t[i],void 0!==e[i]){let t=o[i];t===ep?r+=eo(e[i]):t===ed?r+=em.transform(e[i]):r+=e[i]}return r}};function ex(e,t,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}function e_(e,t){return o=>o>0?t:e}let eb=(e,t,o)=>e+(t-e)*o,ey=(e,t,o)=>{let a=e*e,r=o*(t*t-a)+a;return r<0?0:Math.sqrt(r)},ew=[ec,el,ef];function eS(e){let t=ew.find(t=>t.test(e));if(J(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!t)return!1;let o=t.parse(e);return t===ef&&(o=function({hue:e,saturation:t,lightness:o,alpha:a}){e/=360,o/=100;let r=0,i=0,s=0;if(t/=100){let a=o<.5?o*(1+t):o+t-o*t,n=2*o-a;r=ex(n,a,e+1/3),i=ex(n,a,e),s=ex(n,a,e-1/3)}else r=i=s=o;return{red:Math.round(255*r),green:Math.round(255*i),blue:Math.round(255*s),alpha:a}}(o)),o}let eA=(e,t)=>{let o=eS(e),a=eS(t);if(!o||!a)return e_(e,t);let r={...o};return e=>(r.red=ey(o.red,a.red,e),r.green=ey(o.green,a.green,e),r.blue=ey(o.blue,a.blue,e),r.alpha=eb(o.alpha,a.alpha,e),el.transform(r))},eC=new Set(["none","hidden"]);function eB(e,t){return o=>eb(e,t,o)}function ek(e){if("number"==typeof e)return eB;if("string"==typeof e)return Z(e)&&$.test(e.split("/*")[0].trim())?e_:em.test(e)?eA:eF;return Array.isArray(e)?ez:"object"==typeof e?em.test(e)?eA:eR:e_}function ez(e,t){let o=[...e],a=o.length,r=e.map((e,o)=>ek(e)(e,t[o]));return e=>{for(let t=0;t<a;t++)o[t]=r[t](e);return o}}function eR(e,t){let o={...e,...t},a={};for(let r in o)void 0!==e[r]&&void 0!==t[r]&&(a[r]=ek(e[r])(e[r],t[r]));return e=>{for(let t in a)o[t]=a[t](e);return o}}let eF=(e,t)=>{let o=ev(t),a=eh(e),r=eh(t);if(!(a.indexes.var.length===r.indexes.var.length&&a.indexes.color.length===r.indexes.color.length&&a.indexes.number.length>=r.indexes.number.length))return J(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),e_(e,t);if(eC.has(e)&&!r.values.length||eC.has(t)&&!a.values.length)return eC.has(e)?o=>o<=0?e:t:o=>o>=1?t:e;return L(ez(function(e,t){let o=[],a={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){let i=t.types[r],s=e.indexes[i][a[i]],n=e.values[s]??0;o[r]=n,a[i]++}return o}(a,r),r.values),o)};function eU(e,t,o){return"number"==typeof e&&"number"==typeof t&&"number"==typeof o?eb(e,t,o):ek(e)(e,t)}let eE=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>I.update(t,e),stop:()=>V(t),now:()=>D.isProcessing?D.timestamp:N.now()}};function eO(e){let t=0,o=e.next(t);for(;!o.done&&t<2e4;)t+=50,o=e.next(t);return t>=2e4?1/0:t}function eM(e,t,o){var a,r;let i=Math.max(t-5,0);return a=o-e(i),(r=t-i)?1e3/r*a:0}let eP=.01,eI=2,eV=.005,eD=.5;function eT(e,t){return e*Math.sqrt(1-t*t)}let eN=["duration","bounce"],ej=["stiffness","damping","mass"];function eW(e,t){return t.some(t=>void 0!==e[t])}function eG(e=.3,t=.3){let o,a="object"!=typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e,{restSpeed:r,restDelta:i}=a,s=a.keyframes[0],n=a.keyframes[a.keyframes.length-1],l={done:!1,value:s},{stiffness:c,damping:u,mass:f,duration:m,velocity:p,isResolvedFromDuration:d}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!eW(e,ej)&&eW(e,eN))if(e.visualDuration){let o=2*Math.PI/(1.2*e.visualDuration),a=o*o,r=2*X(.05,1,1-(e.bounce||0))*Math.sqrt(a);t={...t,mass:1,stiffness:a,damping:r}}else{let o=function({duration:e=800,bounce:t=.3,velocity:o=0,mass:a=1}){let r,i;J(e<=1e4,"Spring duration must be 10 seconds or less","spring-duration-limit");let s=1-t;s=X(.05,1,s),e=X(.01,10,e/1e3),s<1?(r=t=>{let a=t*s,r=a*e;return .001-(a-o)/eT(t,s)*Math.exp(-r)},i=t=>{let a=t*s*e,i=Math.pow(s,2)*Math.pow(t,2)*e,n=Math.exp(-a),l=eT(Math.pow(t,2),s);return(a*o+o-i)*n*(-r(t)+.001>0?-1:1)/l}):(r=t=>-.001+Math.exp(-t*e)*((t-o)*e+1),i=t=>e*e*(o-t)*Math.exp(-t*e));let n=function(e,t,o){let a=o;for(let o=1;o<12;o++)a-=e(a)/t(a);return a}(r,i,5/e);if(e*=1e3,isNaN(n))return{stiffness:100,damping:10,duration:e};{let t=Math.pow(n,2)*a;return{stiffness:t,damping:2*s*Math.sqrt(a*t),duration:e}}}(e);(t={...t,...o,mass:1}).isResolvedFromDuration=!0}return t}({...a,velocity:-((a.velocity||0)/1e3)}),g=p||0,h=u/(2*Math.sqrt(c*f)),v=n-s,x=Math.sqrt(c/f)/1e3,_=5>Math.abs(v);if(r||(r=_?eP:eI),i||(i=_?eV:eD),h<1){let e=eT(x,h);o=t=>n-Math.exp(-h*x*t)*((g+h*x*v)/e*Math.sin(e*t)+v*Math.cos(e*t))}else if(1===h)o=e=>n-Math.exp(-x*e)*(v+(g+x*v)*e);else{let e=x*Math.sqrt(h*h-1);o=t=>{let o=Math.exp(-h*x*t),a=Math.min(e*t,300);return n-o*((g+h*x*v)*Math.sinh(a)+e*v*Math.cosh(a))/e}}let b={calculatedDuration:d&&m||null,next:e=>{let t=o(e);if(d)l.done=e>=m;else{let a=0===e?g:0;h<1&&(a=0===e?1e3*g:eM(o,e,t));let s=Math.abs(n-t)<=i;l.done=Math.abs(a)<=r&&s}return l.value=l.done?n:t,l},toString:()=>{let e=Math.min(eO(b),2e4),t=((e,t,o=10)=>{let a="",r=Math.max(Math.round(t/o),2);for(let t=0;t<r;t++)a+=Math.round(1e4*e(t/(r-1)))/1e4+", ";return`linear(${a.substring(0,a.length-2)})`})(t=>b.next(e*t).value,e,30);return e+"ms "+t},toTransition:()=>{}};return b}function eY({keyframes:e,velocity:t=0,power:o=.8,timeConstant:a=325,bounceDamping:r=10,bounceStiffness:i=500,modifyTarget:s,min:n,max:l,restDelta:c=.5,restSpeed:u}){let f,m,p=e[0],d={done:!1,value:p},g=o*t,h=p+g,v=void 0===s?h:s(h);v!==h&&(g=v-p);let x=e=>-g*Math.exp(-e/a),_=e=>v+x(e),b=e=>{let t=x(e),o=_(e);d.done=Math.abs(t)<=c,d.value=d.done?v:o},y=e=>{let t;if(t=d.value,void 0!==n&&t<n||void 0!==l&&t>l){var o;f=e,m=eG({keyframes:[d.value,(o=d.value,void 0===n?l:void 0===l||Math.abs(n-o)<Math.abs(l-o)?n:l)],velocity:eM(_,e,d.value),damping:r,stiffness:i,restDelta:c,restSpeed:u})}};return y(0),{calculatedDuration:null,next:e=>{let t=!1;return(m||void 0!==f||(t=!0,b(e),y(e)),void 0!==f&&e>=f)?m.next(e-f):(t||b(e),d)}}}eG.applyToOptions=e=>{let t=function(e,t=100,o){let a=o({...e,keyframes:[0,t]}),r=Math.min(eO(a),2e4);return{type:"keyframes",ease:e=>a.next(r*e).value/t,duration:r/1e3}}(e,100,eG);return e.ease=t.ease,e.duration=1e3*t.duration,e.type="keyframes",e};let eQ=(e,t,o)=>(((1-3*o+3*t)*e+(3*o-6*t))*e+3*t)*e;function eH(e,t,o,a){return e===t&&o===a?M:r=>0===r||1===r?r:eQ(function(e,t,o,a,r){let i,s,n=0;do(i=eQ(s=t+(o-t)/2,a,r)-e)>0?o=s:t=s;while(Math.abs(i)>1e-7&&++n<12)return s}(r,0,1,e,o),t,a)}let eL=eH(.42,0,1,1),eX=eH(0,0,.58,1),eq=eH(.42,0,.58,1),eJ=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,eK=e=>t=>1-e(1-t),eZ=eH(.33,1.53,.69,.99),e$=eK(eZ),e0=eJ(e$),e1=e=>1-Math.sin(Math.acos(e)),e2=eK(e1),e5=eJ(e1),e3={linear:M,easeIn:eL,easeInOut:eq,easeOut:eX,circIn:e1,circInOut:e5,circOut:e2,backIn:e$,backInOut:e0,backOut:eZ,anticipate:e=>(e*=2)<1?.5*e$(e):.5*(2-Math.pow(2,-10*(e-1)))},e4=e=>{if(Array.isArray(e)&&"number"==typeof e[0]){K(4===e.length,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");let[t,o,a,r]=e;return eH(t,o,a,r)}return"string"==typeof e?(K(void 0!==e3[e],`Invalid easing type '${e}'`,"invalid-easing-type"),e3[e]):e},e8=(e,t,o)=>{let a=t-e;return 0===a?1:(o-e)/a};function e6(e,t,{clamp:o=!0,ease:a,mixer:r}={}){let i=e.length;if(K(i===t.length,"Both input and output ranges must be the same length","range-length"),1===i)return()=>t[0];if(2===i&&t[0]===t[1])return()=>t[1];let s=e[0]===e[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());let n=function(e,t,o){let a=[],r=o||O.mix||eU,i=e.length-1;for(let o=0;o<i;o++){let i=r(e[o],e[o+1]);t&&(i=L(Array.isArray(t)?t[o]||M:t,i)),a.push(i)}return a}(t,a,r),l=n.length,c=o=>{if(s&&o<e[0])return t[0];let a=0;if(l>1)for(;a<e.length-2&&!(o<e[a+1]);a++);let r=e8(e[a],e[a+1],o);return n[a](r)};return o?t=>c(X(e[0],e[i-1],t)):c}function e9({duration:e=300,keyframes:t,times:o,ease:a="easeInOut"}){var r;let i,s=Array.isArray(a)&&"number"!=typeof a[0]?a.map(e4):e4(a),n={done:!1,value:t[0]},l=e6((r=o&&o.length===t.length?o:(!function(e,t){let o=e[e.length-1];for(let a=1;a<=t;a++){let r=e8(0,t,a);e.push(eb(o,1,r))}}(i=[0],t.length-1),i),r.map(t=>t*e)),t,{ease:Array.isArray(s)?s:t.map(()=>s||eq).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(n.value=l(t),n.done=t>=e,n)}}let e7=e=>null!==e,te={decay:eY,inertia:eY,tween:e9,keyframes:e9,spring:eG};class tt{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}let to=e=>e/100;class ta extends tt{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==N.now()&&this.tick(N.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},q.mainThread++,this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()}initAnimation(){let{options:e}=this;"string"==typeof e.type&&(e.type=te[e.type]);let{type:t=e9,repeat:o=0,repeatDelay:a=0,repeatType:r,velocity:i=0}=e,{keyframes:s}=e,n=t||e9;n!==e9&&"number"!=typeof s[0]&&(this.mixKeyframes=L(to,eU(s[0],s[1])),s=[0,100]);let l=n({...e,keyframes:s});"mirror"===r&&(this.mirroredGenerator=n({...e,keyframes:[...s].reverse(),velocity:-i})),null===l.calculatedDuration&&(l.calculatedDuration=eO(l));let{calculatedDuration:c}=l;this.calculatedDuration=c,this.resolvedDuration=c+a,this.totalDuration=this.resolvedDuration*(o+1)-a,this.generator=l}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){let{generator:o,totalDuration:a,mixKeyframes:r,mirroredGenerator:i,resolvedDuration:s,calculatedDuration:n}=this;if(null===this.startTime)return o.next(0);let{delay:l=0,keyframes:c,repeat:u,repeatType:f,repeatDelay:m,type:p,onUpdate:d,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-a/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let h=this.currentTime-l*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?h<0:h>a;this.currentTime=Math.max(h,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=a);let x=this.currentTime,_=o;if(u){let e=Math.min(this.currentTime,a)/s,t=Math.floor(e),o=e%1;!o&&e>=1&&(o=1),1===o&&t--,(t=Math.min(t,u+1))%2&&("reverse"===f?(o=1-o,m&&(o-=m/s)):"mirror"===f&&(_=i)),x=X(0,1,o)*s}let b=v?{done:!1,value:c[0]}:_.next(x);r&&(b.value=r(b.value));let{done:y}=b;v||null===n||(y=this.playbackSpeed>=0?this.currentTime>=a:this.currentTime<=0);let w=null===this.holdTime&&("finished"===this.state||"running"===this.state&&y);return w&&p!==eY&&(b.value=function(e,{repeat:t,repeatType:o="loop"},a,r=1){let i=e.filter(e7),s=r<0||t&&"loop"!==o&&t%2==1?0:i.length-1;return s&&void 0!==a?a:i[s]}(c,this.options,g,this.speed)),d&&d(b.value),w&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return this.calculatedDuration/1e3}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+e/1e3}get time(){return this.currentTime/1e3}set time(e){e*=1e3,this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(N.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=this.currentTime/1e3)}play(){if(this.isStopped)return;let{driver:e=eE,startTime:t}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),this.options.onPlay?.();let o=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=o):null!==this.holdTime?this.startTime=o-this.holdTime:this.startTime||(this.startTime=t??o),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(N.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,q.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function tr(e){return"number"==typeof e?e:parseFloat(e)}let ti="undefined"!=typeof window?a.useLayoutEffect:a.useEffect;function ts(e,t){let o=Q(t()),a=()=>o.set(t());return a(),ti(()=>{let t=()=>I.preRender(a,!1,!0),o=e.map(e=>e.on("change",t));return()=>{o.forEach(e=>e()),V(a)}}),o}function tn(e,t){let o=Y(()=>[]);return ts(e,()=>{o.length=0;let a=e.length;for(let t=0;t<a;t++)o[t]=e[t].get();return t(o)})}var tl=e.i(75157);let tc={width:800,height:800,onRender:()=>{},devicePixelRatio:2,phi:0,theta:.3,dark:0,diffuse:.4,mapSamples:32e3,mapBrightness:1.2,baseColor:[1,1,1],markerColor:[13/193,193/255,1],glowColor:[1,1,1],markers:[]};function tu({className:e,config:t=tc}){let r=0,i=0,w=(0,a.useRef)(null),S=(0,a.useRef)(null),A=(0,a.useRef)(0),C=Q(0),B=function(e,t={}){let{isStatic:o}=(0,a.useContext)(G),r=()=>e&&e.getVelocity?e.get():e;if(o)return function(e,t,o,a){if("function"==typeof e){let t;return j.current=[],e(),t=ts(j.current,e),j.current=void 0,t}let r=function(...e){let t=!Array.isArray(e[0]),o=t?0:-1,a=e[0+o],r=e6(e[1+o],e[2+o],e[3+o]);return t?r(a):r}(void 0,void 0,void 0);return Array.isArray(e)?tn(e,r):tn([e],([e])=>r(e))}(r);let i=Q(r());return(0,a.useInsertionEffect)(()=>(function(e,t,o){let a,r=e.get(),i=null,s=r,n="string"==typeof r?r.replace(/[\d.-]/g,""):void 0,l=()=>{i&&(i.stop(),i=null)},c=()=>{l(),i=new ta({keyframes:[tr(e.get()),tr(s)],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...o,onUpdate:a})};if(e.attach((e,t)=>{s=e,a=e=>{var o,a;return t((o=e,(a=n)?o+a:o))},I.postRender(c)},l),t&&t.getVelocity){let o=t.on("change",t=>{var o,a;return e.set((o=t,(a=n)?o+a:o))}),a=e.on("destroy",o);return()=>{o(),a()}}return l})(i,e,t),[i,JSON.stringify(t)]),i}(C,{mass:1,damping:30,stiffness:100}),k=e=>{S.current=e,w.current&&(w.current.style.cursor=null!==e?"grabbing":"grab")},z=e=>{if(null!==S.current){let t=e-S.current;A.current=t,C.set(C.get()+t/1400)}};return(0,a.useEffect)(()=>{var e,o;let a,A,C,k=()=>{w.current&&(i=w.current.offsetWidth)};window.addEventListener("resize",k),k();let z=(e=w.current,o={...t,width:2*i,height:2*i,onRender:e=>{S.current||(r+=.005),e.phi=r+B.get(),e.width=2*i,e.height=2*i}},a=(e,t,a)=>({type:e,value:void 0===o[t]?a:o[t]}),A=e.getContext("webgl2")?"webgl2":e.getContext("webgl")?"webgl":"experimental-webgl",(C=new s({canvas:e,contextType:A,context:{alpha:!0,stencil:!1,antialias:!0,depth:!1,preserveDrawingBuffer:!1,...o.context},settings:{[g]:o[g]||1,onSetup:e=>{let t=e.RGB,o=e.UNSIGNED_BYTE,a=e.TEXTURE_2D,r=e.createTexture();e.bindTexture(a,r),e.texImage2D(a,0,t,1,1,0,t,o,new Uint8Array([0,0,0,0]));let i=new Image;i.onload=()=>{e.bindTexture(a,r),e.texImage2D(a,0,t,t,o,i),e.generateMipmap(a);let s=e.getParameter(e.CURRENT_PROGRAM),n=e.getUniformLocation(s,"H");e.texParameteri(a,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(a,e.TEXTURE_MAG_FILTER,e.NEAREST),e.uniform1i(n,0)},i.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAAAXNSR0IArs4c6QAABA5JREFUeNrV179uHEUAx/Hf3JpbF+E2VASBsmVKTBcpKJs3SMEDcDwBiVJAAewYEBUivIHT0uUBIt0YCovKD0CRjUC4QfHYh8hYXu+P25vZ2Zm9c66gMd/GJ/tz82d3bk8GN4SrByYF2366FNTACIAkivVAAazQdnf3MvAlbNUQfOPAdQDvSAimMWhwy4I2g4SU+Kp04ISLpPBAKLxPyic3O/CCi+Y7rUJbiodcpDOFY7CgxCEXmdYD2EYK2s5lApOx5pEDDYCUwM1XdJUwBV11QQMg59kePSCaPAASQMEL2hwo6TJFgxpg+TgC2ymXPbuvc40awr3D1QCFfbH9kcoqAOkZozpQo0aqAGQRKCog/+tjkgbNFEtg2FffBvBGlSxHoAaAa1u6X4PBAwDiR8FFsrQgeUhfJTSALaB9jy5NCybJPn1SVFiWk7ywN+KzhH1aKAuydhGkbEF4lWohLXDXavlyFgHY7LBnLRdlAP6BS5Cc8RfVDXbkwN/oIvmY+6obbNeBP0JwTuMGu9gTzy1Q4RS/cWpfzszeYwd+CAFrtBW/Hur0gLbJGlD+/OjVwe/drfBxkbbg63dndEDfiEBlAd7ac0BPe1D6Jd8dfbLH+RI0OzseFB5s01/M+gMdAeluLOCAuaUA9Lezo/vSgXoCX9rtEiXnp7Q1W/CNyWcd8DXoS6jH/YZ5vAJEWY2dXFQe2TUgaFaNejCzJ98g6HnlVrsE58sDcYqg+9XY75fPqdoh/kRQWiXKg8MWlJQxUFMPjqnyujhFBE7UxIMjyszk0QwQlFsezImsyvUYYYVED2pk6m0Tg8T04Fwjk2kdAwSACqlM6gRRt3vQYAFGX0Ah7Ebx1H+MDRI5ui0QldH4j7FGcm90XdxD2Jg1AOEAVAKhEFXSn4cKUELurIAKwJ3MArypPscQaLhJFICJ0ohjDySAdH8AhDtCiTuMycH8CXzhH9jUACAO5uMhoAwA5i+T6WAKmmAqnLy80wxHqIPFYpqCwxGaYLt4Dyievg5kEoVEUAhs6pqKgFtDQYOuaXypaWKQfIuwwoGSZgfLsu/XAtI8cGN+h7Cc1A5oLOMhwlIPXuhu48AIvsSBkvtV9wsJRKCyYLfq5lTrQMFd1a262oqBck9K1V0YjQg0iEYYgpS1A9GlXQV5cykwm4A7BzVsxQqo7E+zCegO7Ma7yKgsuOcfKbMBwLC8wvVNYDsANYalEpOAa6zpWjTeMKGwEwC1CiQewJc5EKfgy7GmRAZA4vUVGwE2dPM/g0xuAInE/yG5aZ8ISxWGfYigUVbdyBElTHh2uCwGdfCkOLGgQVBh3Ewp+/QK4CDlR5Ws/Zf7yhCf8pH7vinWAvoVCQ6zz0NX5V/6GkAVV+2/5qsJ/gU8bsxpM8IeAQAAAABJRU5ErkJggg=="}}})).add("",{vertex:"attribute vec3 aPosition;uniform mat4 uProjectionMatrix;uniform mat4 uModelMatrix;uniform mat4 uViewMatrix;void main(){gl_Position=uProjectionMatrix*uModelMatrix*uViewMatrix*vec4(aPosition,1.);}",fragment:"precision highp float;uniform vec2 w,x;uniform vec3 S,T,y;uniform vec4 u[64*2];uniform float z,A,k,B,C,D,E,F,U,G;uniform sampler2D H;float I=1./k;mat3 J(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0.,c,e,f,d*-e,d*c);}vec3 K(vec3 c,out float v){c=c.xzy;float p=max(2.,floor(log2(2.236068*k*3.141593*(1.-c.z*c.z))*.72021));vec2 g=floor(pow(1.618034,p)/2.236068*vec2(1,1.618034)+.5),d=fract((g+1.)*.618034)*6.283185-3.883222,e=-2.*g,f=vec2(atan(c.y,c.x),c.z-1.),q=floor(vec2(e.y*f.x-d.y*(f.y*k+1.),-e.x*f.x+d.x*(f.y*k+1.))/(d.x*e.y-e.x*d.y));float n=3.141593;vec3 r;for(float h=0.;h<4.;h+=1.){vec2 s=vec2(mod(h,2.),floor(h*.5));float j=dot(g,q+s);if(j>k)continue;float a=j,b=0.;if(a>=524288.)a-=524288.,b+=.803894;if(a>=262144.)a-=262144.,b+=.901947;if(a>=131072.)a-=131072.,b+=.950973;if(a>=65536.)a-=65536.,b+=.475487;if(a>=32768.)a-=32768.,b+=.737743;if(a>=16384.)a-=16384.,b+=.868872;if(a>=8192.)a-=8192.,b+=.934436;if(a>=4096.)a-=4096.,b+=.467218;if(a>=2048.)a-=2048.,b+=.733609;if(a>=1024.)a-=1024.,b+=.866804;if(a>=512.)a-=512.,b+=.433402;if(a>=256.)a-=256.,b+=.216701;if(a>=128.)a-=128.,b+=.108351;if(a>=64.)a-=64.,b+=.554175;if(a>=32.)a-=32.,b+=.777088;if(a>=16.)a-=16.,b+=.888544;if(a>=8.)a-=8.,b+=.944272;if(a>=4.)a-=4.,b+=.472136;if(a>=2.)a-=2.,b+=.236068;if(a>=1.)a-=1.,b+=.618034;float l=fract(b)*6.283185,i=1.-2.*j*I,m=sqrt(1.-i*i);vec3 o=vec3(cos(l)*m,sin(l)*m,i);float t=length(c-o);if(t<n)n=t,r=o;}v=n;return r.xzy;}void main(){vec2 f=1./w,a=(gl_FragCoord.xy*f*2.-1.)/B-x*vec2(1,-1)*f;a.x*=w.x*f.y;float c=dot(a,a);vec4 t=vec4(0);float j=0.;int V=int(C);if(c<=.64){float b;vec4 e=vec4(0);vec3 v=vec3(0,0,1),l=normalize(vec3(a,sqrt(.64-c)));mat3 L=J(A,z);float g=dot(l,v);vec3 m=l*L,h=K(m,b);float n=asin(h.y),i=acos(-h.x/cos(n));i=h.z<0.?-i:i;float M=max(texture2D(H,vec2(i*.5/3.141593,-(n/3.141593+.5))).x,G),N=smoothstep(8e-3,0.,b),o=pow(g,E)*D,p=M*N*o,W=mix((1.-p)*pow(g,.4),p,F)+.1;e+=vec4(S*W,1.);float X=0.;for(int d=0;d<128;d+=2){if(d>=V)break;vec4 q=u[d],O=u[d+1];vec3 P=q.xyz;float r=q.w;vec3 Y=P-m;b=length(Y);if(b<r){float Q=r*.5,s=smoothstep(Q,0.,b);X+=s,e.xyz=O.w>.5?mix(e.xyz,O.xyz,s*o):mix(e.xyz,T,s*o);}}e.xyz+=pow(1.-g,4.)*y,t+=e*(1.+U)*.5,j=pow(dot(normalize(vec3(-a,sqrt(1.-c))),vec3(0,0,1)),4.)*smoothstep(0.,1.,.2/(c-.64));}else{float R=sqrt(.2/(c-.64));j=smoothstep(.5,1.,R/(R+1.));}gl_FragColor=t+vec4(j*y,j);}",uniforms:{w:{type:"vec2",value:[o.width,o.height]},z:a("float","phi"),A:a("float",n),k:a("float",l),D:a("float",c),G:a("float",b),S:a("vec3",u),T:a("vec3",f),E:a("float",d),y:a("vec3",m),F:a("float",h),u:{type:"vec4",value:U(o[p],o[l])},C:{type:"float",value:2*o[p].length},x:a("vec2",v,[0,0]),B:a("float",x,1),U:a("float",_,1)},mode:4,geometry:{vertices:[{x:-100,y:100,z:0},{x:-100,y:-100,z:0},{x:100,y:100,z:0},{x:100,y:-100,z:0},{x:-100,y:-100,z:0},{x:100,y:100,z:0}]},onRender:({uniforms:e})=>{let t={};if(o.onRender){for(let a in t=o.onRender(t)||t,y)void 0!==t[a]&&(e[y[a]].value=t[a]);if(void 0!==t[p]){let o=void 0!==t[l]?t[l]:e.k.value;e.u.value=U(t[p],o),e.C.value=t[p].length}t.width&&t.height&&(e.w.value=[t.width,t.height]),void 0!==t[l]&&(e.u.value=U(t[p]||o[p],t[l]))}}}),C);return setTimeout(()=>w.current.style.opacity="1",0),()=>{z.destroy(),window.removeEventListener("resize",k)}},[B,t]),(0,o.jsx)("div",{className:(0,tl.cn)("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",e),children:(0,o.jsx)("canvas",{className:(0,tl.cn)("size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"),ref:w,onPointerDown:e=>{S.current=e.clientX,k(e.clientX)},onPointerUp:()=>k(null),onPointerOut:()=>k(null),onMouseMove:e=>z(e.clientX),onTouchMove:e=>e.touches[0]&&z(e.touches[0].clientX)})})}e.s(["Globe",()=>tu],19783)}]);