## 01-Typescript
> TypeScript 是什么  

[TypeScript](https://www.typescriptlang.org/) 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

TypeScript 扩展了 JavaScript 的句法，所以任何现有的 JavaScript 程序可以不加改变的在 TypeScript 下工作。TypeScript 是为大型应用之开发而设计，而编译时它产生 JavaScript 以确保兼容性。

1.  安装 TypeScript

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="meta">$</span><span class="bash"> npm install -g typescript</span></span><br></pre></td></tr></tbody></table>

2.  编译 TypeScript 文件

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="meta">$</span><span class="bash"> tsc app.ts <span class="comment"># app.ts =&gt; app.js</span></span></span><br></pre></td></tr></tbody></table>

### [](#TypeScript-基础类型 "TypeScript 基础类型")TypeScript 基础类型

#### [](#Boolean-类型 "Boolean 类型")Boolean 类型

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> isDone: <span class="built_in">boolean</span> = <span class="literal">false</span>; <span class="comment">// tsc =&gt; var isDone = false;</span></span><br></pre></td></tr></tbody></table>

#### [](#Number-类型 "Number 类型")Number 类型

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> count: <span class="built_in">number</span> = <span class="number">10</span>;  <span class="comment">// tsc =&gt; var count = 10</span></span><br></pre></td></tr></tbody></table>

#### [](#String-类型 "String 类型")String 类型

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> name: <span class="built_in">string</span> = <span class="string">'Semliker'</span>; <span class="comment">// tsc =&gt; var name = 'Semlinker'</span></span><br></pre></td></tr></tbody></table>

#### [](#Array-类型 "Array 类型")Array 类型

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> list: <span class="built_in">number</span>[] = [<span class="number">1</span>,<span class="number">2</span>,<span class="number">3</span>]; <span class="comment">// tsc =&gt; var list = [1,2,3];   </span></span><br><span class="line"></span><br><span class="line"><span class="keyword">let</span> list: <span class="built_in">Array</span>&lt;<span class="built_in">number</span>&gt; = [<span class="number">1</span>,<span class="number">2</span>,<span class="number">3</span>]; </span><br><span class="line"><span class="comment">// tsc =&gt; var list = [1,2,3];</span></span><br></pre></td></tr></tbody></table>

#### [](#Enum-类型 "Enum 类型")Enum 类型

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">enum</span> Direction {</span><br><span class="line">    NORTH,</span><br><span class="line">    SOUTH,</span><br><span class="line">    EAST,</span><br><span class="line">    WEST</span><br><span class="line">};</span><br><span class="line"></span><br><span class="line"><span class="keyword">let</span> dir: Direction = Direction.NORTH;</span><br></pre></td></tr></tbody></table>

默认情况下，NORTH 的初始值为 0，其余的成员会从 1 开始自动增长。换句话说，Direction.SOUTH 的值为 1，Direction.EAST 的值为 2，Direction.WEST 的值为 3。

当然我们也可以设置 NORTH 的初始值，比如：

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">enum</span> Direction {</span><br><span class="line">    NORTH = <span class="number">3</span>,</span><br><span class="line">  SOUTH,</span><br><span class="line">  EAST,</span><br><span class="line">  WEST</span><br><span class="line">};</span><br></pre></td></tr></tbody></table>

在 TypeScript 2.4 版本，允许我们使用字符串枚举。在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">enum</span> Direction {</span><br><span class="line">  NORTH = <span class="string">'NORTH'</span>,</span><br><span class="line">  SOUTH = <span class="string">'SOUTH'</span>,</span><br><span class="line">  EAST = <span class="string">'EAST'</span>,</span><br><span class="line">  WEST = <span class="string">'WEST'</span>,</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

#### [](#Any-动态类型 "Any (动态类型)")Any (动态类型)

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> notSure: <span class="built_in">any</span> = <span class="number">4</span>;</span><br><span class="line">notSure = <span class="string">"maybe a string instead"</span>;</span><br><span class="line">notSure = <span class="literal">false</span>; </span><br><span class="line"></span><br><span class="line">=&gt; <span class="function"><span class="params">tsc</span> =&gt;</span>  </span><br><span class="line"></span><br><span class="line"><span class="keyword">var</span> notSure = <span class="number">4</span>;</span><br><span class="line">notSure = <span class="string">"maybe a string instead"</span>;</span><br><span class="line">notSure = <span class="literal">false</span>;</span><br></pre></td></tr></tbody></table>

#### [](#Tuple "Tuple")Tuple

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。比如，你可以定义一对值分别为 `string` 和 `number` 类型的元组。

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> x: [<span class="built_in">string</span>, <span class="built_in">number</span>];</span><br><span class="line"></span><br><span class="line">x = [<span class="string">'semlinker'</span>, <span class="number">10</span>]; <span class="comment">// 正常赋值</span></span><br><span class="line"></span><br><span class="line">x = [<span class="number">10</span>, <span class="string">'semlinker'</span>]; <span class="comment">// 类型不匹配</span></span><br></pre></td></tr></tbody></table>

当访问一个已知索引的元素，会得到正确的类型：

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line"><span class="built_in">console</span>.log(x[<span class="number">0</span>].substr(<span class="number">1</span>)); <span class="comment">// OK</span></span><br><span class="line"></span><br><span class="line"><span class="comment">// Error, 'number' does not have 'substr' method</span></span><br><span class="line"><span class="built_in">console</span>.log(x[<span class="number">1</span>].substr(<span class="number">1</span>));</span><br></pre></td></tr></tbody></table>

当访问一个越界的元素，会使用联合类型替代：

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br></pre></td><td class="code"><pre><span class="line">x[<span class="number">3</span>] = <span class="string">'world'</span>; <span class="comment">// OK, 字符串可以赋值给(string | number) 类型</span></span><br><span class="line"></span><br><span class="line"><span class="built_in">console</span>.log(x[<span class="number">5</span>].toString()); <span class="comment">// OK, 'string' 和 'number' 都有 toString 方法</span></span><br><span class="line"></span><br><span class="line">x[<span class="number">6</span>] = <span class="literal">true</span>; <span class="comment">// Error, 布尔不是(string | number) 类型</span></span><br></pre></td></tr></tbody></table>

#### [](#Void "Void")Void

某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值类型是 void：

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br></pre></td><td class="code"><pre><span class="line"><span class="comment">// 声明函数返回值为void</span></span><br><span class="line"><span class="function"><span class="keyword">function</span> <span class="title">warnUser</span>(<span class="params"></span>): <span class="title">void</span> </span>{ </span><br><span class="line">    <span class="built_in">console</span>.log(<span class="string">"This is my warning message"</span>);</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line">=&gt; <span class="function"><span class="params">tsc</span> =&gt;</span>  </span><br><span class="line"></span><br><span class="line"><span class="function"><span class="keyword">function</span> <span class="title">warnUser</span>(<span class="params"></span>) </span>{</span><br><span class="line">    <span class="built_in">console</span>.log(<span class="string">"This is my warning message"</span>);</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

需要注意的是，声明一个 void 类型的变量没有什么作用，因为它的值只能为 `undefined` 或 `null`：

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> unusable: <span class="built_in">void</span> = <span class="literal">undefined</span>;</span><br></pre></td></tr></tbody></table>

#### [](#Null-and-Undefined "Null and Undefined")Null and Undefined

TypeScript 里，`undefined` 和`null` 两者各自有自己的类型分别叫做 `undefined` 和`null`。

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> u: <span class="literal">undefined</span> = <span class="literal">undefined</span>;</span><br><span class="line"><span class="keyword">let</span> n: <span class="literal">null</span> = <span class="literal">null</span>;</span><br></pre></td></tr></tbody></table>

默认情况下 `null` 和 `undefined` 是所有类型的子类型。 就是说你可以把 `null` 和 `undefined` 赋值给 `number` 类型的变量。然而，当你指定了`--strictNullChecks` 标记，`null` 和 `undefined` 只能赋值给 `void` 和它们各自。

#### [](#Never "Never")Never

`never` 类型表示的是那些永不存在的值的类型。 例如，`never` 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br></pre></td><td class="code"><pre><span class="line"><span class="comment">// 返回never的函数必须存在无法达到的终点</span></span><br><span class="line"><span class="function"><span class="keyword">function</span> <span class="title">error</span>(<span class="params">message: <span class="built_in">string</span></span>): <span class="title">never</span> </span>{</span><br><span class="line">    <span class="keyword">throw</span> <span class="keyword">new</span> <span class="built_in">Error</span>(message);</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="comment">// 返回never的函数必须存在无法达到的终点</span></span><br><span class="line"><span class="function"><span class="keyword">function</span> <span class="title">infiniteLoop</span>(<span class="params"></span>): <span class="title">never</span> </span>{</span><br><span class="line">    <span class="keyword">while</span> (<span class="literal">true</span>) {}</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

### [](#TypeScript-Assertion "TypeScript Assertion")TypeScript Assertion

有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过类型断言这种方式可以告诉编译器，”相信我，我知道自己在干什么”。类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。

类型断言有两种形式：

*   “尖括号”语法

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> someValue: <span class="built_in">any</span> = <span class="string">"this is a string"</span>;</span><br><span class="line"><span class="keyword">let</span> strLength: <span class="built_in">number</span> = (&lt;<span class="built_in">string</span>&gt;someValue).length;</span><br></pre></td></tr></tbody></table>

*   as 语法

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> someValue: <span class="built_in">any</span> = <span class="string">"this is a string"</span>;</span><br><span class="line"><span class="keyword">let</span> strLength: <span class="built_in">number</span> = (someValue <span class="keyword">as</span> <span class="built_in">string</span>).length;</span><br></pre></td></tr></tbody></table>

### [](#TypeScript-Union-Types-and-Type-Aliases "TypeScript Union Types and Type Aliases")TypeScript Union Types and Type Aliases

#### [](#Union-Types "Union Types")Union Types

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> greet = <span class="function">(<span class="params">message: <span class="built_in">string</span> | <span class="built_in">string</span>[]</span>) =&gt;</span> {</span><br><span class="line">  <span class="keyword">if</span>(message <span class="keyword">instanceof</span> <span class="built_in">Array</span>) {</span><br><span class="line">    <span class="keyword">let</span> messages = <span class="string">""</span>;</span><br><span class="line">    message.forEach(<span class="function">(<span class="params">msg</span>) =&gt;</span> {</span><br><span class="line">      messages += <span class="string">` <span class="subst">${msg}</span>`</span>;</span><br><span class="line">    });</span><br><span class="line">    <span class="built_in">console</span>.log(<span class="string">"Received messages "</span>, messages);</span><br><span class="line">  } <span class="keyword">else</span> {</span><br><span class="line">    <span class="built_in">console</span>.log(<span class="string">"Received message = "</span>, message);</span><br><span class="line">  }</span><br><span class="line">};</span><br><span class="line"></span><br><span class="line">greet(<span class="string">'semlinker'</span>);</span><br><span class="line">greet([<span class="string">'Hello'</span>, <span class="string">'Angular'</span>]);</span><br></pre></td></tr></tbody></table>

#### [](#Type-Aliases "Type Aliases")Type Aliases

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">type</span> Message = <span class="built_in">string</span> | <span class="built_in">string</span>[];</span><br><span class="line"><span class="keyword">let</span> greet = <span class="function">(<span class="params">message: Message</span>) =&gt;</span> { </span><br><span class="line">  <span class="comment">// ... </span></span><br><span class="line">};</span><br></pre></td></tr></tbody></table>

### [](#TypeScript-Function "TypeScript Function")TypeScript Function

#### [](#TypeScript-函数与-JavaScript-函数的区别 "TypeScript 函数与 JavaScript 函数的区别")TypeScript 函数与 JavaScript 函数的区别

<table><thead><tr><th>TypeScript</th><th>JavaScript</th></tr></thead><tbody><tr><td>Types</td><td>No types</td></tr><tr><td>Arrow function</td><td>Arrow function (ES2015)</td></tr><tr><td>Function types</td><td>No Function types</td></tr><tr><td>Required and Optional parameters</td><td>All parameters are optional</td></tr><tr><td>Default parameters</td><td>Default parameters</td></tr><tr><td>Rest parameters</td><td>Rest parameters</td></tr><tr><td>Overloaded function</td><td>No overloaded functions</td></tr></tbody></table>

#### [](#箭头函数 "箭头函数")箭头函数

*   常见语法

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br></pre></td><td class="code"><pre><span class="line">myBooks.forEach(<span class="function"><span class="params">()</span> =&gt;</span> <span class="built_in">console</span>.log(<span class="string">'Done reading'</span>));</span><br><span class="line"></span><br><span class="line">myBooks.forEach(<span class="function"><span class="params">title</span> =&gt;</span> <span class="built_in">console</span>.log(title));</span><br><span class="line"></span><br><span class="line">myBooks.forEach(<span class="function">(<span class="params">title, idx, arr</span>) =&gt;</span> </span><br><span class="line">  <span class="built_in">console</span>.log(idx + <span class="string">'-'</span> + title);</span><br><span class="line">);</span><br><span class="line"></span><br><span class="line">myBooks.forEach(<span class="function">(<span class="params">title, idx, arr</span>) =&gt;</span> {</span><br><span class="line">  <span class="built_in">console</span>.log(idx + <span class="string">'-'</span> + title);</span><br><span class="line">});</span><br></pre></td></tr></tbody></table>

*   使用示例

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br></pre></td><td class="code"><pre><span class="line"><span class="comment">// 未使用箭头函数</span></span><br><span class="line"><span class="function"><span class="keyword">function</span> <span class="title">Book</span>(<span class="params"></span>) </span>{</span><br><span class="line">  <span class="keyword">let</span> self = <span class="keyword">this</span>;</span><br><span class="line">  self.publishDate = <span class="number">2016</span>;</span><br><span class="line">  setInterval(<span class="function"><span class="keyword">function</span>(<span class="params"></span>) </span>{</span><br><span class="line">    <span class="built_in">console</span>.log(self.publishDate);</span><br><span class="line">  }, <span class="number">1000</span>);</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="comment">// 使用箭头函数</span></span><br><span class="line"><span class="function"><span class="keyword">function</span> <span class="title">Book</span>(<span class="params"></span>) </span>{</span><br><span class="line">  <span class="keyword">this</span>.publishDate = <span class="number">2016</span>;</span><br><span class="line">  setInterval(<span class="function"><span class="params">()</span> =&gt;</span> {</span><br><span class="line">    <span class="built_in">console</span>.log(<span class="keyword">this</span>.publishDate);</span><br><span class="line">  }, <span class="number">1000</span>);</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

#### [](#参数类型和返回类型 "参数类型和返回类型")参数类型和返回类型

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line"><span class="function"><span class="keyword">function</span> <span class="title">createUserId</span>(<span class="params">name: <span class="built_in">string</span>, id: <span class="built_in">number</span></span>): <span class="title">string</span> </span>{</span><br><span class="line">  <span class="keyword">return</span> name + id;</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

#### [](#函数类型 "函数类型")函数类型

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> IdGenerator: <span class="function">(<span class="params">chars: <span class="built_in">string</span>, nums: <span class="built_in">number</span></span>) =&gt;</span> <span class="built_in">string</span>;</span><br><span class="line"></span><br><span class="line"><span class="function"><span class="keyword">function</span> <span class="title">createUserId</span>(<span class="params">name: <span class="built_in">string</span>, id: <span class="built_in">number</span></span>): <span class="title">string</span> </span>{</span><br><span class="line">  <span class="keyword">return</span> name + id;</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line">IdGenerator = createUserId;</span><br></pre></td></tr></tbody></table>

#### [](#可选参数及默认参数 "可选参数及默认参数")可选参数及默认参数

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br></pre></td><td class="code"><pre><span class="line"><span class="comment">// 可选参数</span></span><br><span class="line"><span class="function"><span class="keyword">function</span> <span class="title">createUserId</span>(<span class="params">name: <span class="built_in">string</span>, age?: <span class="built_in">number</span>, </span></span></span><br><span class="line"><span class="function"><span class="params">  id: <span class="built_in">number</span></span>): <span class="title">string</span> </span>{</span><br><span class="line">    <span class="keyword">return</span> name + id;</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="comment">// 默认参数</span></span><br><span class="line">function createUserId(name: string = 'Semlinker', age?: number, </span><br><span class="line">  id: <span class="built_in">number</span>): <span class="built_in">string</span> {</span><br><span class="line">    <span class="keyword">return</span> name + id;</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

#### [](#剩余参数 "剩余参数")剩余参数

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br></pre></td><td class="code"><pre><span class="line"><span class="function"><span class="keyword">function</span> <span class="title">push</span>(<span class="params">array, ...items</span>) </span>{</span><br><span class="line">  items.forEach(<span class="function"><span class="keyword">function</span>(<span class="params">item</span>) </span>{</span><br><span class="line">    array.push(item);</span><br><span class="line">  });</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="keyword">let</span> a = [];</span><br><span class="line">push(a, <span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>);</span><br></pre></td></tr></tbody></table>

### [](#TypeScript-Array "TypeScript Array")TypeScript Array

#### [](#数组解构 "数组解构")数组解构

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> x: <span class="built_in">number</span>, <span class="keyword">let</span> y: <span class="built_in">number</span> ,<span class="keyword">let</span> z: <span class="built_in">number</span>;</span><br><span class="line"><span class="keyword">let</span> five_array = [<span class="number">0</span>,<span class="number">1</span>,<span class="number">2</span>,<span class="number">3</span>,<span class="number">4</span>];</span><br><span class="line">[x,y,z] = five_array;</span><br></pre></td></tr></tbody></table>

#### [](#数组展开运算符 "数组展开运算符")数组展开运算符

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> two_array = [<span class="number">0</span>,<span class="number">1</span>];</span><br><span class="line"><span class="keyword">let</span> five_array = [...two_array,<span class="number">2</span>,<span class="number">3</span>,<span class="number">4</span>];</span><br></pre></td></tr></tbody></table>

#### [](#数组循环 "数组循环")数组循环

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> colors: <span class="built_in">string</span>[] = [<span class="string">"red"</span>, <span class="string">"green"</span>, <span class="string">"blue"</span>];</span><br><span class="line"><span class="keyword">for</span>(<span class="keyword">let</span> i <span class="keyword">in</span> colors) {</span><br><span class="line">  <span class="built_in">console</span>.log(i);</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

### [](#TypeScript-Object "TypeScript Object")TypeScript Object

#### [](#对象解构 "对象解构")对象解构

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> person = {</span><br><span class="line">  name: <span class="string">'Semlinker'</span>,</span><br><span class="line">  gender: <span class="string">'male'</span></span><br><span class="line">};</span><br><span class="line"></span><br><span class="line"><span class="keyword">let</span> {name, gender} = person;</span><br></pre></td></tr></tbody></table>

#### [](#对象展开运算符 "对象展开运算符")对象展开运算符

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> person = {</span><br><span class="line">  name: <span class="string">'Semlinker'</span>,</span><br><span class="line">  gender: <span class="string">'male'</span>,</span><br><span class="line">  address: <span class="string">'Xiamen'</span></span><br><span class="line">};</span><br><span class="line"></span><br><span class="line"><span class="comment">// 组装对象</span></span><br><span class="line"><span class="keyword">let</span> personWithAge = {...person, age: <span class="number">31</span>};</span><br><span class="line"></span><br><span class="line"><span class="comment">// 获取除了某些项外的其它项</span></span><br><span class="line"><span class="keyword">let</span> {name, ...rest} = person;</span><br></pre></td></tr></tbody></table>

### [](#TypeScript-Interface "TypeScript Interface")TypeScript Interface

在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implements）。

TypeScript 中的接口是一个非常灵活的概念，除了可用于[对类的一部分行为进行抽象](https://ts.xcatliu.com/advanced/class-and-interfaces.html#%E7%B1%BB%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3)以外，也常用于对「对象的形状（Shape）」进行描述。

#### [](#对象的形状 "对象的形状")对象的形状

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">interface</span> Person {</span><br><span class="line">  name: <span class="built_in">string</span>;</span><br><span class="line">  age: <span class="built_in">number</span>;</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="keyword">let</span> semlinker: Person = {</span><br><span class="line">  name: <span class="string">'Semlinker'</span>,</span><br><span class="line">  age: <span class="number">31</span></span><br><span class="line">};</span><br></pre></td></tr></tbody></table>

#### [](#可选-只读属性 "可选 | 只读属性")可选 | 只读属性

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">interface</span> Person {</span><br><span class="line">  readonly name: <span class="built_in">string</span>;</span><br><span class="line">  age?: <span class="built_in">number</span>;</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

只读属性用于限制只能在对象刚刚创建的时候修改其值。此外 TypeScript 还提供了 `ReadonlyArray<T>` 类型，它与 `Array<T>` 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> a: <span class="built_in">number</span>[] = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>];</span><br><span class="line"><span class="keyword">let</span> ro: ReadonlyArray&lt;<span class="built_in">number</span>&gt; = a;</span><br><span class="line">ro[<span class="number">0</span>] = <span class="number">12</span>; <span class="comment">// error!</span></span><br><span class="line">ro.push(<span class="number">5</span>); <span class="comment">// error!</span></span><br><span class="line">ro.length = <span class="number">100</span>; <span class="comment">// error!</span></span><br><span class="line">a = ro; <span class="comment">// error!</span></span><br></pre></td></tr></tbody></table>

### [](#TypeScript-Class "TypeScript Class")TypeScript Class

在面向对象语言中，类是一种面向对象计算机编程语言的构造，是创建对象的蓝图，描述了所创建的对象共同的属性和方法。

在 TypeScript 中，我们可以通过 `Class` 关键字来定义一个类：

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br><span class="line">18</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">class</span> Greeter {</span><br><span class="line">   <span class="keyword">static</span> cname: <span class="built_in">string</span> = <span class="string">'Greeter'</span>; <span class="comment">// 静态属性</span></span><br><span class="line">   greeting: <span class="built_in">string</span>; <span class="comment">// 成员属行</span></span><br><span class="line"></span><br><span class="line">   <span class="keyword">constructor</span>(<span class="params">message: <span class="built_in">string</span></span>) { <span class="comment">// 构造函数 - 执行初始化操作</span></span><br><span class="line">     <span class="keyword">this</span>.greeting = message;</span><br><span class="line">   }</span><br><span class="line"></span><br><span class="line">    <span class="keyword">static</span> getClassName() { <span class="comment">// 静态方法</span></span><br><span class="line">      <span class="keyword">return</span> <span class="string">'Class name is Greeter'</span>;</span><br><span class="line">    }</span><br><span class="line">    </span><br><span class="line">    greet() { <span class="comment">// 成员方法</span></span><br><span class="line">      <span class="keyword">return</span> <span class="string">"Hello, "</span> + <span class="keyword">this</span>.greeting;</span><br><span class="line">    }</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="keyword">let</span> greeter = <span class="keyword">new</span> Greeter(<span class="string">"world"</span>);</span><br></pre></td></tr></tbody></table>

### [](#TypeScript-Accessors "TypeScript Accessors")TypeScript Accessors

在 TypeScript 中，我们可以通过 `getter` 和 `setter` 方法来实现数据的封装和有效性校验，防止出现异常数据。

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br><span class="line">18</span><br><span class="line">19</span><br><span class="line">20</span><br><span class="line">21</span><br><span class="line">22</span><br><span class="line">23</span><br><span class="line">24</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> passcode = <span class="string">"hello angular 5"</span>;</span><br><span class="line"></span><br><span class="line"><span class="keyword">class</span> Employee {</span><br><span class="line">    <span class="keyword">private</span> _fullName: <span class="built_in">string</span>;</span><br><span class="line"></span><br><span class="line">    <span class="keyword">get</span> fullName(): <span class="built_in">string</span> {</span><br><span class="line">        <span class="keyword">return</span> <span class="keyword">this</span>._fullName;</span><br><span class="line">    }</span><br><span class="line"></span><br><span class="line">    <span class="keyword">set</span> fullName(newName: <span class="built_in">string</span>) {</span><br><span class="line">        <span class="keyword">if</span> (passcode &amp;&amp; passcode == <span class="string">"hello angular 5"</span>) {</span><br><span class="line">            <span class="keyword">this</span>._fullName = newName;</span><br><span class="line">        }</span><br><span class="line">        <span class="keyword">else</span> {</span><br><span class="line">            <span class="built_in">console</span>.log(<span class="string">"Error: Unauthorized update of employee!"</span>);</span><br><span class="line">        }</span><br><span class="line">    }</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="keyword">let</span> employee = <span class="keyword">new</span> Employee();</span><br><span class="line">employee.fullName = <span class="string">"Bob Smith"</span>;</span><br><span class="line"><span class="keyword">if</span> (employee.fullName) {</span><br><span class="line">    <span class="built_in">console</span>.log(employee.fullName);</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

### [](#TypeScript-Inheritance "TypeScript Inheritance")TypeScript Inheritance

继承 (Inheritance) 是一种联结类与类的层次模型。指的是一个类 (称为子类、子接口) 继承另外的一个类 (称为父类、父接口) 的功能，并可以增加它自己的新功能的能力，继承是类与类或者接口与接口之间最常见的关系；继承是一种 [is-a](https://zh.wikipedia.org/wiki/Is-a) 关系。

![class-inheritance](https://camo.githubusercontent.com/4321ff71038b66bff7ab3f1affe8cb96a88e8487/68747470733a2f2f7365676d656e746661756c742e636f6d2f2f696d672f62564c50756e3f773d32393326683d323034)

在 TypeScripe 中，我们可以通过 `extends` 关键字来实现继承：

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br><span class="line">18</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">class</span> Animal {</span><br><span class="line">    name: <span class="built_in">string</span>;</span><br><span class="line">    <span class="keyword">constructor</span>(<span class="params">theName: <span class="built_in">string</span></span>) { <span class="keyword">this</span>.name = theName; }</span><br><span class="line">    move(distanceInMeters: <span class="built_in">number</span> = <span class="number">0</span>) {</span><br><span class="line">        <span class="built_in">console</span>.log(<span class="string">`<span class="subst">${this.name}</span> moved <span class="subst">${distanceInMeters}</span>m.`</span>);</span><br><span class="line">    }</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="keyword">class</span> Snake <span class="keyword">extends</span> Animal {</span><br><span class="line">    <span class="keyword">constructor</span>(<span class="params">name: <span class="built_in">string</span></span>) { <span class="keyword">super</span>(name); }</span><br><span class="line">    move(distanceInMeters = <span class="number">5</span>) {</span><br><span class="line">        <span class="built_in">console</span>.log(<span class="string">"Slithering..."</span>);</span><br><span class="line">        <span class="keyword">super</span>.move(distanceInMeters);</span><br><span class="line">    }</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="keyword">let</span> sam = <span class="keyword">new</span> Snake(<span class="string">"Sammy the Python"</span>);</span><br><span class="line">sam.move();</span><br></pre></td></tr></tbody></table>

### [](#TypeScript-Generics "TypeScript Generics")TypeScript Generics

泛型（Generics）是允许同一个函数接受不同类型参数的一种模板。相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。

#### [](#泛型接口 "泛型接口")泛型接口

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">interface</span> GenericIdentityFn&lt;T&gt; {</span><br><span class="line">    (arg: T): T;</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

#### [](#泛型类 "泛型类")泛型类

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">class</span> GenericNumber&lt;T&gt; {</span><br><span class="line">    zeroValue: T;</span><br><span class="line">    add: <span class="function">(<span class="params">x: T, y: T</span>) =&gt;</span> T;</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="keyword">let</span> myGenericNumber = <span class="keyword">new</span> GenericNumber&lt;<span class="built_in">number</span>&gt;();</span><br><span class="line">myGenericNumber.zeroValue = <span class="number">0</span>;</span><br><span class="line">myGenericNumber.add = <span class="function"><span class="keyword">function</span>(<span class="params">x, y</span>) </span>{ <span class="keyword">return</span> x + y; };</span><br></pre></td></tr></tbody></table>

#### [](#使用示例 "使用示例")使用示例

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">interface</span> Hero { <span class="comment">// Hero 接口</span></span><br><span class="line">    id: <span class="built_in">number</span>;</span><br><span class="line">    name: <span class="built_in">string</span>;</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line">getHeroes(): Observable&lt;Hero[]&gt; {</span><br><span class="line">  <span class="keyword">return</span> Observable.of([</span><br><span class="line">     { id: <span class="number">1</span>, name: <span class="string">'Windstorm'</span> },</span><br><span class="line">     { id: <span class="number">13</span>, name: <span class="string">'Bombasto'</span> },</span><br><span class="line">     { id: <span class="number">15</span>, name: <span class="string">'Magneta'</span> },</span><br><span class="line">     { id: <span class="number">20</span>, name: <span class="string">'Tornado'</span> }</span><br><span class="line">  ]);</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

上面 `getHeroes(): Observable<Hero[]>` 表示调用 `getHeroes()` 方法后返回的是一个 Observable 对象，`<Hero[]>` 用于表示该 Observable 对象的观察者，将会收到的数据类型。示例中表示将会返回 `<Hero[]>` 英雄列表。

### [](#tsconfig-json-简介 "tsconfig.json 简介")tsconfig.json 简介

#### [](#tsconfig-json-的作用 "tsconfig.json 的作用")tsconfig.json 的作用

*   用于标识 TypeScript 项目的根路径；
*   用于配置 TypeScript 编译器；
*   用于指定编译的文件。

#### [](#tsconfig-json-重要字段 "tsconfig.json 重要字段")tsconfig.json 重要字段

*   files - 设置要编译的文件的名称；
*   include - 设置需要进行编译的文件，支持路径模式匹配；
*   exclude - 设置无需进行编译的文件，支持路径模式匹配；
*   compilerOptions - 设置与编译流程相关的选项。

compilerOptions 支持很多选项，常见的有 `baseUrl`、 `target`、`baseUrl`、 `moduleResolution` 和 `lib` 等。若想进一步了解更多选项说明，可浏览 [handbook - 编译选项](https://www.tslang.cn/docs/handbook/compiler-options.html) 。

#### [](#tsconfig-json-示例 "tsconfig.json 示例")tsconfig.json 示例

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br><span class="line">18</span><br><span class="line">19</span><br><span class="line">20</span><br><span class="line">21</span><br><span class="line">22</span><br><span class="line">23</span><br><span class="line">24</span><br><span class="line">25</span><br><span class="line">26</span><br><span class="line">27</span><br><span class="line">28</span><br></pre></td><td class="code"><pre><span class="line">{</span><br><span class="line">  <span class="attr">"compileOnSave"</span>: <span class="literal">false</span>,</span><br><span class="line">  <span class="attr">"compilerOptions"</span>: {</span><br><span class="line">    <span class="attr">"baseUrl"</span>: <span class="string">"./"</span>,</span><br><span class="line">    <span class="attr">"outDir"</span>: <span class="string">"./dist/out-tsc"</span>,</span><br><span class="line">    <span class="attr">"sourceMap"</span>: <span class="literal">true</span>,</span><br><span class="line">    <span class="attr">"declaration"</span>: <span class="literal">false</span>,</span><br><span class="line">    <span class="attr">"moduleResolution"</span>: <span class="string">"node"</span>,</span><br><span class="line">    <span class="attr">"emitDecoratorMetadata"</span>: <span class="literal">true</span>,</span><br><span class="line">    <span class="attr">"experimentalDecorators"</span>: <span class="literal">true</span>,</span><br><span class="line">    <span class="attr">"target"</span>: <span class="string">"es5"</span>,</span><br><span class="line">    <span class="attr">"typeRoots"</span>: [</span><br><span class="line">      <span class="string">"node_modules/@types"</span></span><br><span class="line">    ],</span><br><span class="line">    <span class="attr">"lib"</span>: [</span><br><span class="line">      <span class="string">"es2017"</span>,</span><br><span class="line">      <span class="string">"dom"</span></span><br><span class="line">    ],</span><br><span class="line">    <span class="attr">"paths"</span>: {</span><br><span class="line">      <span class="attr">"ngx-example-library"</span>: [</span><br><span class="line">        <span class="string">"dist/ngx-example-library"</span></span><br><span class="line">      ]</span><br><span class="line">    }</span><br><span class="line">  },</span><br><span class="line">  <span class="attr">"angularCompilerOptions"</span>: {</span><br><span class="line">    <span class="attr">"preserveWhitespaces"</span>: <span class="literal">false</span></span><br><span class="line">  }</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

### [](#编码规范 "编码规范")编码规范

#### [](#变量和函数 "变量和函数")变量和函数

使用驼峰（camelCase）命名变量和函数名

**Bad**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">var</span> FooVar;</span><br><span class="line"><span class="function"><span class="keyword">function</span> <span class="title">BarFunc</span>(<span class="params"></span>) </span>{ }</span><br></pre></td></tr></tbody></table>

**Good**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">var</span> fooVar;</span><br><span class="line"><span class="function"><span class="keyword">function</span> <span class="title">barFunc</span>(<span class="params"></span>) </span>{ }</span><br></pre></td></tr></tbody></table>

#### [](#类 "类")类

使用帕斯卡（PascalCase）命名类名

**Bad**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">class</span> foo { }</span><br></pre></td></tr></tbody></table>

**Good**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">class</span> Foo { }</span><br></pre></td></tr></tbody></table>

使用帕斯卡（PascalCase）命名类成员与方法

**Bad**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">class</span> Foo {</span><br><span class="line">    Bar: <span class="built_in">number</span>;</span><br><span class="line">    Baz() { }</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

**Good**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">class</span> Foo {</span><br><span class="line">    bar: <span class="built_in">number</span>;</span><br><span class="line">    baz() { }</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

#### [](#接口 "接口")接口

*   使用帕斯卡（PascalCase）命名接口
*   使用驼峰（camelCase）命令成员
*   误使用 `I` 前缀

**Bad**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">interface</span> IFoo { }</span><br></pre></td></tr></tbody></table>

**Good**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">interface</span> Foo { }</span><br></pre></td></tr></tbody></table>

#### [](#类型 "类型")类型

*   使用帕斯卡（PascalCase）命名
*   使用驼峰（camelCase）命令成员

#### [](#命名空间 "命名空间")命名空间

使用帕斯卡（PascalCase）命名

**Bad**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">namespace</span> foo { }</span><br></pre></td></tr></tbody></table>

**Good**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">namespace</span> Foo { }</span><br></pre></td></tr></tbody></table>

#### [](#枚举 "枚举")枚举

使用帕斯卡（PascalCase）命名枚举

**Bad**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">enum</span> color { }</span><br></pre></td></tr></tbody></table>

**Good**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">enum</span> Color { }</span><br></pre></td></tr></tbody></table>

使用帕斯卡（PascalCase）命名枚举成员

**Bad**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">enum</span> Color {</span><br><span class="line">    red</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

**Good**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">enum</span> Color {</span><br><span class="line">    Red</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

#### [](#Null-vs-Undefined "Null vs Undefined")Null vs Undefined

最好不好显式使用不可用的值

**Bad**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> foo = { x:<span class="number">123</span>, y:<span class="literal">undefined</span> };</span><br></pre></td></tr></tbody></table>

**Good**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">let</span> foo: { x:<span class="built_in">number</span>, y?:<span class="built_in">number</span> } = { x:<span class="number">123</span> };</span><br></pre></td></tr></tbody></table>

通常使用 undefined（ 而不是返回一个类似于 { valid:boolean, value?:Foo } 的对象 ）

**Bad**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">return</span> <span class="literal">null</span>;</span><br></pre></td></tr></tbody></table>

**Good**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">return</span> <span class="literal">undefined</span>;</span><br></pre></td></tr></tbody></table>

参考 Node.js 回调函数 Error First 风格（若未发生异常，error 参数值设置为 null）

**Bad**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">cb(<span class="literal">undefined</span>)</span><br></pre></td></tr></tbody></table>

**Good**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">cb(<span class="literal">null</span>)</span><br></pre></td></tr></tbody></table>

避免使用值比较判断对象是否为 null 或 undefined

**Bad**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">if</span> (error === <span class="literal">null</span>)</span><br></pre></td></tr></tbody></table>

**Good**

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">if</span> (error)</span><br></pre></td></tr></tbody></table>

#### [](#数组 "数组")数组

声明数组时使用 `foos:Foo[]` 而不是 `foos:Array<Foo>`，便于阅读

#### [](#类型-vs-接口 "类型 vs 接口")类型 vs 接口

当你需要复合类型时，使用 type

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">type</span> Foo = <span class="built_in">number</span> | { someProperty: <span class="built_in">number</span> }</span><br></pre></td></tr></tbody></table>

当你需要继承或实现时，使用 interface

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">interface</span> Foo {</span><br><span class="line">  foo: <span class="built_in">string</span>;</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="keyword">interface</span> FooBar <span class="keyword">extends</span> Foo {</span><br><span class="line">  bar: <span class="built_in">string</span>;</span><br><span class="line">}</span><br><span class="line"></span><br><span class="line"><span class="keyword">class</span> X <span class="keyword">implements</span> FooBar {</span><br><span class="line">  foo: <span class="built_in">string</span>;</span><br><span class="line">  bar: <span class="built_in">string</span>;</span><br><span class="line">}</span><br></pre></td></tr></tbody></table>

### [](#风格指南 "风格指南")风格指南

1.  使用箭头函数代替匿名函数表达式。
2.  只要需要的时候才把箭头函数的参数括起来。比如，`(x) => x + x` 是错误的，下面是正确的做法：
    *   `x => x + x`
    *   `(x,y) => x + y`
    *   `<T>(x: T, y: T) => x === y`
3.  总是使用 `{}` 把循环体和条件语句括起来。
4.  小括号里开始不要有空白。逗号，冒号，分号后要有一个空格。比如：
    *   `for (let i = 0, n = str.length; i < 10; i++) { }`
    *   `if (x < 10) { }`
    *   `function f(x: number, y: string): void { }`
5.  每个变量声明语句只声明一个变量 。比如：使用 `let x = 1; var y = 2;` 而不是 `let x = 1, y = 2;`）。
6.  如果函数没有返回值，最好使用 `void`