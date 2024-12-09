"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8112],{39823:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={},i="Containers",s={unversionedId:"guides/components/containers",id:"guides/components/containers",title:"Containers",description:"The Container class provides a simple display object that does what its name implies - collect a set of child objects together.  But beyond grouping objects, containers have a few uses that you should be aware of.",source:"@site/docs/guides/components/containers.md",sourceDirName:"guides/components",slug:"/guides/components/containers",permalink:"/8.x/guides/components/containers",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/components/containers.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Assets",permalink:"/8.x/guides/components/assets"},next:{title:"Graphics",permalink:"/8.x/guides/components/graphics"}},l={},d=[{value:"Commonly Used Attributes",id:"commonly-used-attributes",level:2},{value:"Containers as Groups",id:"containers-as-groups",level:2},{value:"Masking",id:"masking",level:2},{value:"Filtering",id:"filtering",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"containers"},"Containers"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/scene.Container.html"},"Container")," class provides a simple display object that does what its name implies - collect a set of child objects together.  But beyond grouping objects, containers have a few uses that you should be aware of."),(0,r.kt)("h2",{id:"commonly-used-attributes"},"Commonly Used Attributes"),(0,r.kt)("p",null,"The most common attributes you'll use when laying out and animating content in PixiJS are provided by the Container class:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"position")),(0,r.kt)("td",{parentName:"tr",align:null},"X- and Y-position are given in pixels and change the position of the object relative to its parent, also available directly as ",(0,r.kt)("inlineCode",{parentName:"td"},"object.x")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"object.y"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"rotation")),(0,r.kt)("td",{parentName:"tr",align:null},"Rotation is specified in radians, and turns an object clockwise (0.0 - 2 * Math.PI)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"angle")),(0,r.kt)("td",{parentName:"tr",align:null},"Angle is an alias for rotation that is specified in degrees instead of radians (0.0 - 360.0)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"pivot")),(0,r.kt)("td",{parentName:"tr",align:null},"Point the object rotates around, in pixels - also sets origin for child objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"alpha")),(0,r.kt)("td",{parentName:"tr",align:null},"Opacity from 0.0 (fully transparent) to 1.0 (fully opaque), inherited by children")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"scale")),(0,r.kt)("td",{parentName:"tr",align:null},"Scale is specified as a percent with 1.0 being 100% or actual-size, and can be set independently for the x and y axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"skew")),(0,r.kt)("td",{parentName:"tr",align:null},"Skew transforms the object in x and y similar to the CSS skew() function, and is specified in radians")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"visible")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the object is visible or not, as a boolean value - prevents updating and rendering object and children")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"renderable")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the object should be rendered - when ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", object will still be updated, but won't be rendered, doesn't affect children")))),(0,r.kt)("h2",{id:"containers-as-groups"},"Containers as Groups"),(0,r.kt)("p",null,"Almost every type of display object is also derived from Container!  This means that in many cases you can create a parent-child hierarchy with the objects you want to render."),(0,r.kt)("p",null,"However, it's a good idea ",(0,r.kt)("em",{parentName:"p"},"not")," to do this.  Standalone Container objects are ",(0,r.kt)("strong",{parentName:"p"},"very")," cheap to render, and having a proper hierarchy of Container objects, each containing one or more renderable objects, provides flexibility in rendering order.  It also future-proofs your code, as when you need to add an additional object to a branch of the tree, your animation logic doesn't need to change - just drop the new object into the proper Container, and your logic moves the Container with no changes to your code."),(0,r.kt)("p",null,"So that's the primary use for Containers - as groups of renderable objects in a hierarchy."),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"../../examples/basic/container"},"container example code"),"."),(0,r.kt)("h2",{id:"masking"},"Masking"),(0,r.kt)("p",null,'Another common use for Container objects is as hosts for masked content.  "Masking" is a technique where parts of your scene graph are only visible within a given area.'),(0,r.kt)("p",null,"Think of a pop-up window.  It has a frame made of one or more Sprites, then has a scrollable content area that hides content outside the frame.  A Container plus a mask makes that scrollable area easy to implement.  Add the Container, set its ",(0,r.kt)("inlineCode",{parentName:"p"},"mask")," property to a Graphics object with a rect, and add the text, image, etc. content you want to display as children of that masked Container.  Any content that extends beyond the rectangular mask will simply not be drawn.  Move the contents of the Container to scroll as desired."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Create the application helper and add its render target to the page\nlet app = new Application({ width: 640, height: 360 });\ndocument.body.appendChild(app.view);\n\n// Create window frame\nlet frame = new Graphics({\n  x:320 - 104,\n  y:180 - 104\n})\n.rect(0, 0, 208, 208)\n.fill(0x666666)\n.stroke({ color: 0xffffff, width: 4, alignment: 0 })\n\napp.stage.addChild(frame);\n\n// Create a graphics object to define our mask\nlet mask = new Graphics()\n// Add the rectangular area to show\n .rect(0,0,200,200)\n .fill(0xffffff);\n\n// Add container that will hold our masked content\nlet maskContainer = new Container();\n// Set the mask to use our graphics object from above\nmaskContainer.mask = mask;\n// Add the mask as a child, so that the mask is positioned relative to its parent\nmaskContainer.addChild(mask);\n// Offset by the window's frame width\nmaskContainer.position.set(4,4);\n// And add the container to the window!\nframe.addChild(maskContainer);\n\n// Create contents for the masked container\nlet text = new Text({\n  text:'This text will scroll up and be masked, so you can see how masking works.  Lorem ipsum and all that.\\n\\n' +\n  'You can put anything in the container and it will be masked!',\n  style:{\n    fontSize: 24,\n    fill: 0x1010ff,\n    wordWrap: true,\n    wordWrapWidth: 180\n  },\n  x:10\n});\n\nmaskContainer.addChild(text);\n\n// Add a ticker callback to scroll the text up and down\nlet elapsed = 0.0;\napp.ticker.add((ticker) => {\n  // Update the text's y coordinate to scroll it\n  elapsed += ticker.deltaTime;\n  text.y = 10 + -100.0 + Math.cos(elapsed/50.0) * 100.0;\n});\n")),(0,r.kt)("p",null,"There are two types of masks supported by PixiJS:"),(0,r.kt)("p",null,"Use a ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/scene.Graphics.html"},"Graphics")," object to create a mask with an arbitrary shape - powerful, but doesn't support anti-aliasing"),(0,r.kt)("p",null,"Sprite: Use the alpha channel from a ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/scene.Sprite.html"},"Sprite")," as your mask, providing anti-aliased edging - ",(0,r.kt)("em",{parentName:"p"},"not")," supported on the Canvas renderer"),(0,r.kt)("h2",{id:"filtering"},"Filtering"),(0,r.kt)("p",null,"Another common use for Container objects is as hosts for filtered content.  Filters are an advanced, WebGL/WebGPU-only feature that allows PixiJS to perform per-pixel effects like blurring and displacements.  By setting a filter on a Container, the area of the screen the Container encompasses will be processed by the filter after the Container's contents have been rendered."),(0,r.kt)("p",null,"Below are list of filters available by default in PixiJS. There is, however, a community repository with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pixijs/filters"},"many more filters"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Filter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AlphaFilter"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar to setting ",(0,r.kt)("inlineCode",{parentName:"td"},"alpha")," property, but flattens the Container instead of applying to children individually.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BlurFilter"),(0,r.kt)("td",{parentName:"tr",align:null},"Apply a blur effect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ColorMatrixFilter"),(0,r.kt)("td",{parentName:"tr",align:null},"A color matrix is a flexible way to apply more complex tints or color transforms (e.g., sepia tone).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisplacementFilter"),(0,r.kt)("td",{parentName:"tr",align:null},"Displacement maps create visual offset pixels, for instance creating a wavy water effect.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NoiseFilter"),(0,r.kt)("td",{parentName:"tr",align:null},"Create random noise (e.g., grain effect).")))),(0,r.kt)("p",null,"Under the hood, each Filter we offer out of the box is written in both glsl (for WebGL) and wgsl (for WebGPU). This means all filters should work on both renderers."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Important:")," Filters should be used somewhat sparingly. They can slow performance and increase memory usage if used too often in a scene.")))}c.isMDXComponent=!0}}]);