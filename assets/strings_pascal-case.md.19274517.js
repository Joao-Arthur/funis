import{_ as s,c as a,o as n,a as l}from"./app.fa7e24c1.js";const F=JSON.parse('{"title":"pascalCase","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"strings/pascal-case.md"}'),p={name:"strings/pascal-case.md"},e=l(`<h1 id="pascalcase" tabindex="-1">pascalCase <a class="header-anchor" href="#pascalcase" aria-hidden="true">#</a></h1><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pascalCase</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">str</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span></code></pre></div><p>Transforms a sequence of words into pascal case.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">strings</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pascalCase</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hey</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; &#39;Hey&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">strings</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pascalCase</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">j S o N</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; &#39;JSON&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">strings</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pascalCase</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">j_S_o_N</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; &#39;JSON&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">strings</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pascalCase</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">j-S-o-N</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; &#39;JSON&#39;</span></span>
<span class="line"></span></code></pre></div>`,5),o=[e];function t(c,r,i,y,C,D){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};