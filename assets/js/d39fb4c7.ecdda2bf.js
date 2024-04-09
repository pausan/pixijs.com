"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8637],{2983:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={},s="Graphics",o={unversionedId:"guides/components/graphics",id:"guides/components/graphics",title:"Graphics",description:"Graphics is a complex and much misunderstood tool in the PixiJS toolbox.  At first glance, it looks like a tool for drawing shapes.  And it is!  But it can also be used to generate masks.  How does that work?",source:"@site/docs/guides/components/graphics.md",sourceDirName:"guides/components",slug:"/guides/components/graphics",permalink:"/8.x/guides/components/graphics",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/components/graphics.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Containers",permalink:"/8.x/guides/components/containers"},next:{title:"Interaction",permalink:"/8.x/guides/components/interaction"}},l={},p=[{value:"Graphics Is About Building - Not Drawing",id:"graphics-is-about-building---not-drawing",level:2},{value:"Types of Primitives",id:"types-of-primitives",level:2},{value:"The GraphicsContext",id:"the-graphicscontext",level:2},{value:"Graphics For Display",id:"graphics-for-display",level:2},{value:"Graphics as a Mask",id:"graphics-as-a-mask",level:2},{value:"Caveats and Gotchas",id:"caveats-and-gotchas",level:2}],c={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graphics"},"Graphics"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/scene.Graphics.html"},"Graphics")," is a complex and much misunderstood tool in the PixiJS toolbox.  At first glance, it looks like a tool for drawing shapes.  And it is!  But it can also be used to generate masks.  How does that work?"),(0,i.kt)("p",null,"In this guide, we're going to de-mystify the ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," object, starting with how to think about what it does."),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"../../examples/graphics/simple"},"graphics example code"),"."),(0,i.kt)("h2",{id:"graphics-is-about-building---not-drawing"},"Graphics Is About Building - Not Drawing"),(0,i.kt)("p",null,"First-time users of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," class often struggle with how it works.  Let's look at an example snippet that creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," object and draws a rectangle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a Graphics object, draw a rectangle and fill it\nlet obj = new Graphics()\n  .rect(0, 0, 200, 100)\n  .fill(0xff0000);\n\n// Add it to the stage to render\napp.stage.addChild(obj);\n")),(0,i.kt)("p",null,"That code will work - you'll end up with a red rectangle on the screen.  But it's pretty confusing when you start to think about it.  Why am I drawing a rectangle when ",(0,i.kt)("em",{parentName:"p"},"constructing")," the object?  Isn't drawing something a one-time action?  How does the rectangle get drawn the ",(0,i.kt)("em",{parentName:"p"},"second")," frame?  And it gets even weirder when you create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," object with a bunch of drawThis and drawThat calls, and then you use it as a ",(0,i.kt)("em",{parentName:"p"},"mask"),".  What???"),(0,i.kt)("p",null,"The problem is that the function names are centered around ",(0,i.kt)("em",{parentName:"p"},"drawing"),", which is an action that puts pixels on the screen.  But in spite of that, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," object is really about ",(0,i.kt)("em",{parentName:"p"},"building"),"."),(0,i.kt)("p",null,"Let's look a bit deeper at that ",(0,i.kt)("inlineCode",{parentName:"p"},"rect()")," call.  When you call ",(0,i.kt)("inlineCode",{parentName:"p"},"rect()"),', PixiJS doesn\'t actually draw anything.  Instead, it stores the rectangle you "drew" into a list of geometry for later use.  If you then add the ',(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," object to the scene, the renderer will come along, and ask the ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," object to render itself.  At that point, your rectangle actually gets drawn - along with any other shapes, lines, etc. that you've added to the geometry list."),(0,i.kt)("p",null,"Once you understand what's going on, things start to make a lot more sense.  When you use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," object as a mask, for example, the masking system uses that list of graphics primitives in the geometry list to constrain which pixels make it to the screen.  There's no drawing involved."),(0,i.kt)("p",null,"That's why it helps to think of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," class not as a drawing tool, but as a geometry building tool."),(0,i.kt)("h2",{id:"types-of-primitives"},"Types of Primitives"),(0,i.kt)("p",null,"There are a lot of functions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," class, but as a quick orientation, here's the list of basic primitives you can add:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Line"),(0,i.kt)("li",{parentName:"ul"},"Rect"),(0,i.kt)("li",{parentName:"ul"},"RoundRect"),(0,i.kt)("li",{parentName:"ul"},"Circle"),(0,i.kt)("li",{parentName:"ul"},"Ellipse"),(0,i.kt)("li",{parentName:"ul"},"Arc"),(0,i.kt)("li",{parentName:"ul"},"Bezier and Quadratic Curve")),(0,i.kt)("p",null,"In addition, you have access to the following complex primitives:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Torus"),(0,i.kt)("li",{parentName:"ul"},"Chamfer Rect"),(0,i.kt)("li",{parentName:"ul"},"Fillet Rect"),(0,i.kt)("li",{parentName:"ul"},"Regular Polygon"),(0,i.kt)("li",{parentName:"ul"},"Star"),(0,i.kt)("li",{parentName:"ul"},"Rounded Polygon")),(0,i.kt)("p",null,"There is also support for svg. But due to the nature of how PixiJS renders holes (it favours performance) Some complex hole shapes may render incorrectly. But for the majority of shapes, this will do the trick!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},' let mySvg = new Graphics().svg(`\n   <svg>\n     <path d="M 100 350 q 150 -300 300 0" stroke="blue" />\n   </svg>\n  `);\n')),(0,i.kt)("h2",{id:"the-graphicscontext"},"The GraphicsContext"),(0,i.kt)("p",null,"Understanding the relationship between Sprites and their shared Texture can help grasp the concept of a ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphicsContext"),". Just as multiple Sprites can utilize a single Texture, saving memory by not duplicating pixel data, a GraphicsContext can be shared across multiple Graphics objects."),(0,i.kt)("p",null,"This sharing of a ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphicsContext")," means that the intensive task of converting graphics instructions into GPU-ready geometry is done once, and the results are reused, much like textures. Consider the difference in efficiency between these approaches:"),(0,i.kt)("p",null,"Creating individual circles without sharing a context:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Create 5 circles\nfor (let i = 0; i < 5; i++) {\n  let circle = new Graphics()\n    .circle(100, 100, 50)\n    .fill('red');\n}\n")),(0,i.kt)("p",null,"Versus sharing a GraphicsContext:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Create a master Graphicscontext\nlet circleContext = new GraphicsContext()\n  .circle(100, 100, 50)\n  .fill('red')\n\n// Create 5 duplicate objects\nfor (let i = 0; i < 5; i++) {\n  // Initialize the duplicate using our circleContext\n  let duplicate = new Graphics(circleContext);\n}\n")),(0,i.kt)("p",null,"Now, this might not be a huge deal for circles and squares, but when you are using SVGs, it becomes quite important to not have to rebuild each time and instead share a ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphicsContext"),". It's recommended for maximum performance to create your contexts upfront and reuse them, just like textures!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let circleContext = new GraphicsContext()\n  .circle(100, 100, 50)\n  .fill('red')\n\nlet rectangleContext = new GraphicsContext()\n  .rect(0, 0, 50, 50)\n  .fill('red')\n\nlet frames = [circleContext, rectangleContext];\nlet frameIndex = 0;\n\nconst graphics = new Graphics(frames[frameIndex]);\n\n// animate from square to circle:\n\nfunction update()\n{\n  // swap the context - this is a very cheap operation!\n  // much cheaper than clearing it each frame.\n  graphics.context = frames[frameIndex++%frames.length];\n}\n")),(0,i.kt)("p",null,"If you don't explicitly pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphicsContext")," when creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," object, then internally, it will have its own context, accessible via ",(0,i.kt)("inlineCode",{parentName:"p"},"myGraphics.context"),". The ",(0,i.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/scene.GraphicsContext.html"},"GraphicsContext")," class manages the list of geometry primitives created by the Graphics parent object. Graphics functions are literally passed through to the internal contexts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let circleGraphics = new Graphics()\n  .circle(100, 100, 50)\n  .fill('red')\n")),(0,i.kt)("p",null,"same as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let circleGraphics = new Graphics()\n\ncircleGraphics.context\n  .circle(100, 100, 50)\n  .fill('red')\n")),(0,i.kt)("p",null,"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics.destroy()")," will destroy the graphics. If a context was passed to it via the constructor then it will leave the destruction the that context to you. However if the context is internally created (the default), when destroyed the Graphics object will destroy its internal ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphicsContext"),"."),(0,i.kt)("h2",{id:"graphics-for-display"},"Graphics For Display"),(0,i.kt)("p",null,"OK, so now that we've covered how the ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," class works, let's look at how you use it.  The most obvious use of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," object is to draw dynamically generated shapes to the screen."),(0,i.kt)("p",null,"Doing so is simple.  Create the object, call the various builder functions to add your custom primitives, then add the object to the scene graph.  Each frame, the renderer will come along, ask the ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," object to render itself, and each primitive, with associated line and fill styles, will be drawn to the screen."),(0,i.kt)("h2",{id:"graphics-as-a-mask"},"Graphics as a Mask"),(0,i.kt)("p",null,"You can also use a Graphics object as a complex mask.  To do so, build your object and primitives as usual.  Next create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," object that will contain the masked content, and set its ",(0,i.kt)("inlineCode",{parentName:"p"},"mask")," property to your Graphics object.  The children of the container will now be clipped to only show through inside the geometry you've created.  This technique works for both WebGL and Canvas-based rendering."),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"../../examples/graphics/simple"},"masking example code"),"."),(0,i.kt)("h2",{id:"caveats-and-gotchas"},"Caveats and Gotchas"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," class is a complex beast, and so there are a number of things to be aware of when using it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Memory Leaks"),": Call ",(0,i.kt)("inlineCode",{parentName:"p"},"destroy()")," on any ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," object you no longer need to avoid memory leaks."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Holes"),": Holes you create have to be completely contained in the shape or else it may not be able to triangulate correctly. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Changing Geometry"),": If you want to change the shape of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," object, you don't need to delete and recreate it.  Instead you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"clear()")," function to reset the contents of the geometry list, then add new primitives as desired.  Be careful of performance when doing this every frame."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Performance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," objects are generally quite performant.  However, if you build highly complex geometry, you may pass the threshold that permits batching during rendering, which can negatively impact performance. It's better for batching to use many ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," objects instead of a single ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," with many shapes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transparency"),": Because the ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," object renders its primitives sequentially, be careful when using blend modes or partial transparency with overlapping geometry.  Blend modes like ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MULTIPLY")," will work ",(0,i.kt)("em",{parentName:"p"},"on each primitive"),", not on the final composite image.  Similarly, partially transparent ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," objects will show primitives overlapping. To apply transparency or blend modes to a single flattened surface, consider using AlphaFilter or RenderTexture."))}h.isMDXComponent=!0}}]);