import{_ as s,c as a,o as n,a as l}from"./app.a31b0557.js";const d=JSON.parse('{"title":"isValid","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"numbers/is-valid.md"}'),e={name:"numbers/is-valid.md"},p=l(`<h1 id="isvalid" tabindex="-1">isValid <a class="header-anchor" href="#isvalid" aria-hidden="true">#</a></h1><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isValid</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Returns false for <em>null</em>, <em>undefined</em> and <em>NaN</em>. Returns true otherwise.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">numbers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isValid</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; false</span></span>
<span class="line"><span style="color:#A6ACCD;">numbers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isValid</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; false</span></span>
<span class="line"><span style="color:#A6ACCD;">numbers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isValid</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; false</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">numbers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isValid</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; true</span></span>
<span class="line"><span style="color:#A6ACCD;">numbers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isValid</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; true</span></span>
<span class="line"><span style="color:#A6ACCD;">numbers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isValid</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">Infinity</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; true</span></span>
<span class="line"></span></code></pre></div>`,6),o=[p];function t(c,r,i,A,y,C){return n(),a("div",null,o)}const F=s(e,[["render",t]]);export{d as __pageData,F as default};