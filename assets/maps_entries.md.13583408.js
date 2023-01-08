import{_ as s,c as a,o as n,a as l}from"./app.af403a0a.js";const F=JSON.parse('{"title":"entries","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"maps/entries.md"}'),p={name:"maps/entries.md"},o=l(`<h1 id="entries" tabindex="-1">entries <a class="header-anchor" href="#entries" aria-hidden="true">#</a></h1><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">entries</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">V</span><span style="color:#89DDFF;">&gt;(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;font-style:italic;">map</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Map</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">V</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">V</span><span style="color:#A6ACCD;">])[]</span></span>
<span class="line"></span></code></pre></div><p>Returns the entries of the Map instance.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">maps</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">()) </span><span style="color:#676E95;font-style:italic;">// =&gt; []</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">maps</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">        [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Paul McCartney</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        [</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">George Harrison</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ])</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">/* =&gt; [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    [1, { name: &#39;Paul McCartney&#39; }],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    [2, { name: &#39;George Harrison&#39; }],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">] */</span></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function t(c,r,y,C,D,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
