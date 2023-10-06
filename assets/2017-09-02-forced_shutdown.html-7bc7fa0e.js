import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as o}from"./app-9bee90f7.js";const i={},n=o(`<p>晚上明明按下电脑的关机键，第二天早上却发现电脑开了一晚上？这是因为后台和 GUI 应用程序在阻止或取消关机，使得系统无法正常关机。为解决此问题，可以按照以下方法授予系统自动关机权限。</p><h2 id="手工操作" tabindex="-1"><a class="header-anchor" href="#手工操作" aria-hidden="true">#</a> 手工操作</h2><ol><li><p>点击「开始菜单」，搜索「Regedit」，进入注册表编辑器。</p></li><li><p>打开窗口后，向注册表上方菜单输入路径 <code>计算机\\HKEY_CURRENT_USER\\Control Panel\\Desktop</code>。</p></li><li><p>在右侧窗格中找到 <code>AutoEndTasks</code> 键值。若不存在，则新建一个名为 <code>AutoEndTasks</code> 的「字符串值」，并将键值的数值设为 <code>1</code>。AutoEndTasks 表示自动结束失去响应的程序任务。<code>0</code> 表示 false（默认值），而 <code>1</code> 表示 true，电脑会自动结束失去响应的程序。</p><figure><img src="https://pic3.zhimg.com/v2-c643b9737b35f9dd9a8382c5653e3d3e_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>查找或创建 <code>WaitToKillAppTimeout</code> 字符串值，并设定其数值为 2000。2000 以毫秒计，表示在程序失去响应后，系统将等待 2 秒后自动结束相应程序。</p></li></ol><p>按照以上步骤操作，即可设置电脑默认为强制关机。</p><h2 id="通过脚本修改" tabindex="-1"><a class="header-anchor" href="#通过脚本修改" aria-hidden="true">#</a> 通过脚本修改</h2><p>如果你不愿手动修改注册表，可以选择以下三种脚本之一进行操作。</p><h3 id="注册表脚本修改" tabindex="-1"><a class="header-anchor" href="#注册表脚本修改" aria-hidden="true">#</a> 注册表脚本修改</h3><p>复制下列命令并粘贴至文本编辑器（如记事本）中，保存文件，扩展名为 <code>.reg</code>，如 settings.reg。双击该文件即可将修改应用到注册表中。（脚本由 @daxixi 提供）</p><div class="language-reg line-numbers-mode" data-ext="reg"><pre class="language-reg"><code>Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\\Control Panel\\Desktop]
&quot;AutoEndTasks&quot;=&quot;1&quot;
&quot;WaitToKillAppTimeout&quot;=&quot;2000&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cmd-修改" tabindex="-1"><a class="header-anchor" href="#cmd-修改" aria-hidden="true">#</a> cmd 修改</h3><p>以管理员权限运行 cmd（命令提示符），输入以下命令：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>reg add &quot;HKEY_CURRENT_USER\\Control Panel\\Desktop&quot; /v AutoEndTasks /t REG_SZ /d 1 /f

reg add &quot;HKEY_CURRENT_USER\\Control Panel\\Desktop&quot; /v WaitToKillAppTimeout /t REG_SZ /d 2000 /f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="powershell-修改" tabindex="-1"><a class="header-anchor" href="#powershell-修改" aria-hidden="true">#</a> PowerShell 修改</h3><p>以管理员权限运行 PowerShell，输入以下命令：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>cmd <span class="token operator">/</span>c reg add <span class="token string">&quot;HKEY_CURRENT_USER\\Control Panel\\Desktop&quot;</span> <span class="token operator">/</span>v AutoEndTasks <span class="token operator">/</span>t REG_SZ <span class="token operator">/</span>d 1 <span class="token operator">/</span>f

cmd <span class="token operator">/</span>c reg add <span class="token string">&quot;HKEY_CURRENT_USER\\Control Panel\\Desktop&quot;</span> <span class="token operator">/</span>v WaitToKillAppTimeout <span class="token operator">/</span>t REG_SZ <span class="token operator">/</span>d 2000 <span class="token operator">/</span>f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>——————————</p><p>网上流行一种通过修改「gpedit.msc」达到快速关机的方法，但实际测试结果表明，这种方法并<strong>不能实现强制关机</strong>。以下为这种方法的操作流程记录，仅供参考：</p><ol><li><p>点击桌面左下角“windows”图标，选择“运行”选项；</p></li><li><p>进入运行窗口，输入“gpedit.msc”命令，按下回车键确定；</p></li><li><p>打开本地组策略编辑器界面，依次展开“计算机配置——管理模板——系统——关机选项”文件夹；鼠标右击右侧“关闭会阻止或取消关机的应用程序的自动终止功能”选项，接着选择“编辑”功能；将弹出窗口选项更改成“已启用”，然后点击“应用——确定”按钮。</p><figure><img src="https://pic4.zhimg.com/v2-4b736585b25509b036935a2f9c37d843_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但开启后，提示程序没有响应，无法关机。</p><figure><img src="https://pic4.zhimg.com/v2-46fafee0cb6e212e793fc80268ab0917_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><p>修改“gpedit.msc”虽然可以撤销程序阻止关机的权限，但它并没有赋予关机进程对程序的关闭权限，因此并不能达到强制关机的效果。</p>`,19),d=[n];function t(r,l){return a(),s("div",null,d)}const u=e(i,[["render",t],["__file","2017-09-02-forced_shutdown.html.vue"]]);export{u as default};
