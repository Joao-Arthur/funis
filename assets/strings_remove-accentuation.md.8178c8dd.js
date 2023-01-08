import{_ as s,c as a,o as n,a as e}from"./app.af403a0a.js";const F=JSON.parse('{"title":"removeAccentuation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"strings/remove-accentuation.md"}'),o={name:"strings/remove-accentuation.md"},l=e(`<h1 id="removeaccentuation" tabindex="-1">removeAccentuation <a class="header-anchor" href="#removeaccentuation" aria-hidden="true">#</a></h1><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">removeAccentuation</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">str</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span></code></pre></div><p>Remove accentuated characters.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">strings</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeAccentuation</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">loção</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; loo</span></span>
<span class="line"><span style="color:#A6ACCD;">strings</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeAccentuation</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fianceé</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; fiance</span></span>
<span class="line"><span style="color:#A6ACCD;">strings</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeAccentuation</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Äpfel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; pfel</span></span>
<span class="line"><span style="color:#A6ACCD;">strings</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeAccentuation</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">këndon</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; kndon</span></span>
<span class="line"><span style="color:#A6ACCD;">strings</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeAccentuation</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pálmafák</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; plmafk</span></span>
<span class="line"></span></code></pre></div>`,5),t=[l];function p(c,r,i,y,A,D){return n(),a("div",null,t)}const d=s(o,[["render",p]]);export{F as __pageData,d as default};
