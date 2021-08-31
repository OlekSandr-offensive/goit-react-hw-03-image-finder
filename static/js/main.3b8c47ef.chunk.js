(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),o=(a(17),a(3)),s=a(4),l=a(6),m=a(5),u=a(8),h=(a(11),a(18),a(1)),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSabmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):u.b.error("Enter a name for the picture!")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSabmit,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",name:"imageName",placeholder:"Search images and photos",value:this.state.imageName,onChange:this.handleNameChange})]})})}}]),a}(n.Component),j=a(10),d=a(12),p=a.n(d),b=(a(40),function(e){var t=e.onClick;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{className:"Button",onClick:t,children:"Load more"})})}),f=function(e){var t=e.image,a=e.largeImg,n=t.webformatURL,r=t.tags;return Object(h.jsx)("li",{onClick:a,className:"ImageGalleryItem",children:Object(h.jsx)("img",{src:n,alt:r,className:"ImageGalleryItem-image"})})},O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.images,a=e.largeImg;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(h.jsx)(f,{image:e,largeImg:function(){a(e.largeImageURL)}},e.id)}))})})}}]),a}(n.Component),v=a.p+"static/media/Cat-cry.554e214c.jpg",y=(a(41),function(e){var t=e.message;return Object(h.jsxs)("div",{role:"alert",className:"image-error",children:[Object(h.jsx)("img",{src:v,width:"240",alt:"Cat-cry"}),Object(h.jsx)("p",{children:t})]})}),x=document.querySelector("#modal-root"),N=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBlackDropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(h.jsx)("div",{className:"Overlay",onClick:this.handleBlackDropClick,children:Object(h.jsx)("div",{className:"Modal",children:this.props.children})}),x)}}]),a}(n.Component),S="21988624-a694c57feb3b9caad270c2fa0",w="https://pixabay.com/api",k=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,largeImg:null,page:1,status:"idle"},e.handlerClickImage=function(t){return e.setState({largeImg:t})},e.fetchImage=function(){fetch("".concat(w,"/?q=").concat(e.props.imageName,"&page=").concat(e.state.page,"&key=").concat(S,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json().then((function(e){return e.hits})):Promise.reject(new Error("No picture with name ".concat(e.props.imageName)))})).then((function(t){if(e.setState((function(e){return{images:[].concat(Object(j.a)(e.images),Object(j.a)(t)),page:e.page+1,status:"resolved"}})),!t.length)return Promise.reject(new Error(" No picture with name  ".concat(e.props.imageName)));e.setState({error:null})})).catch((function(t){return e.setState({error:t,status:"rejected"})})).finally((function(){return e.myScroll()}))},e.myScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.imageName!==this.props.imageName&&(this.setState({status:"pending",images:[],page:1}),this.fetchImage())}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.error,r=t.status;return"idle"===r?Object(h.jsx)("div",{children:"Enter a name for the picture"}):"pending"===r?Object(h.jsx)(p.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}):"rejected"===r?Object(h.jsx)(y,{message:n.message}):"resolved"===r?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{images:a,largeImg:this.handlerClickImage}),Object(h.jsx)(b,{onClick:this.fetchImage}),this.state.largeImg&&Object(h.jsx)(N,{onClose:function(){e.setState({largeImg:null})},children:Object(h.jsx)("img",{src:this.state.largeImg,alt:""})})]}):void 0}}]),a}(n.Component),C=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageName:[]},e.handleSearchFormSubmit=function(t){e.setState({imageName:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(g,{onSubmit:this.handleSearchFormSubmit}),Object(h.jsx)(k,{imageName:this.state.imageName}),Object(h.jsx)(u.a,{autoClose:3e3})]})}}]),a}(n.Component);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3b8c47ef.chunk.js.map