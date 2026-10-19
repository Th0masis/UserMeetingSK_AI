---
theme: default
title: AI v průmyslové automatizaci
titleTemplate: '%s | B&R Industrial Automation'
author: B&R Industrial Automation
colorSchema: light
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
drawings:
  enabled: true
  persist: false
fonts:
  sans: ABBvoice
  serif: ABBvoice
  mono: IBM Plex Mono
  provider: google
  local: ABBvoice
defaults:
  layout: default
  class: ot-slide
layout: cover
---
<!-- markdownlint-disable MD003 MD022 MD024 MD025 MD033 -->

<img class="cover-logo" src="/br-template-logo.svg" alt="B&amp;R Industrial Automation">

# AI v průmyslové automatizaci

<p class="cover-sub">Od jazykových modelů k Agentic Engineeringu</p>
<div class="cover-event"><span>B&amp;R Industrial Automation</span><span>50 minut</span></div>

<!--
Záměr a čas: 30 sekund. Uveďte téma jako cestu od jazykových modelů k ověřitelné práci na automatizačním projektu.
Počáteční stav: titul, podtitul a celková plánovaná délka programu; nic se neodhaluje.
Řečový tah: AI zde nebudeme hodnotit podle přesvědčivosti textu, ale podle toho, jak zapadá do inženýrského pracovního postupu.
Přechod: nejprve ukázat, jak je čas rozdělen mezi aktivní obsah a rezervované části.
-->

---
layout: default
class: agenda-slide
---

# Osnova

<div class="talk-agenda">
  <div class="has-bar"><i class="ot-icon"><mdi-hand-wave-outline /></i><span>03 min</span><strong>Úvod</strong><i class="agenda-bar" style="--m: 3;"></i></div>
  <div class="has-bar"><i class="ot-icon" style="--accent: var(--flow-blue);"><mdi-brain /></i><span>05 min</span><strong>Základy LLM</strong><i class="agenda-bar" style="--m: 5;"></i></div>
  <div class="has-bar"><i class="ot-icon" style="--accent: var(--flow-cyan);"><mdi-cog-play-outline /></i><span>14 min</span><strong>Agentic Engineering</strong><i class="agenda-bar" style="--m: 14;"></i></div>
  <div class="has-bar"><i class="ot-icon" style="--accent: var(--flow-purple);"><mdi-bridge /></i><span>14 min</span><strong>Automation Studio Agentic Bridge</strong><i class="agenda-bar" style="--m: 14;"></i></div>
  <div class="has-bar"><i class="ot-icon" style="--accent: var(--flow-green);"><mdi-face-agent /></i><span>08 min</span><strong>Support Agent</strong><i class="agenda-bar" style="--m: 8;"></i></div>
  <div class="has-bar"><i class="ot-icon" style="--accent: var(--flow-amber);"><mdi-factory /></i><span>06 min</span><strong>Příklady z praxe <span class="agenda-reservation">rezervace 4:30</span> + pozvánka 1:30</strong><i class="agenda-bars"><i class="agenda-bar is-reserve" style="--m: 4.5;"></i><i class="agenda-bar" style="--m: 1.5;"></i></i></div>
</div>

<p class="agenda-total">50 minut celkem · aktivní část 45:30 · rezervace 4:30</p>

<!--
Záměr a čas: 30 sekund. Orientujte publikum v šestidílném programu a ukažte, že 4:30 zůstává rezervováno.
Počáteční stav: všech šest řádků a součet 50 minut jsou viditelné; nic se neodhaluje.
Řečový tah: titul i agenda jsou započítané. Support Agent má aktivních 8 minut; příklady z praxe zůstávají rezervované na 4:30 a aktivní pozvánka zabere posledních 1:30. Aktivní obsah proto trvá 45:30; plných 50 minut je dosaženo pouze s doplněním příkladů.
Přechod: začít otázkou, podle čeho poznáme použitelnost návrhu AI.
-->

---
layout: default
class: ot-slide
---

<h1>AI se z IT dostává do světa OT</h1>

<div style="display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: start; margin-top: 40px;">
  <div>
    <div class="ot-chips" style="margin-bottom: 24px;"><span class="ot-chip"><mdi-cloud-outline />IT</span><mdi-arrow-right /><span class="ot-chip"><mdi-factory />OT</span></div>
    <h2 style="margin: 0;">Od textu k průmyslovému projektu</h2>
    <p style="margin-top: 16px; color: var(--steel);">Jazykové modely a agenti vstupují i do práce s automatizačními projekty. V OT ale nestačí odpověď, která zní správně:</p>
    <div style="margin-top: 16px;">
      <div class="ot-row"><span class="ot-icon"><mdi-target /></span><p><strong>musí sedět na konkrétní projekt</strong></p></div>
      <div class="ot-row" style="--accent: var(--flow-green);"><span class="ot-icon"><mdi-check-decagram-outline /></span><p><strong>a projít ověřením.</strong></p></div>
    </div>
  </div>
  <div class="ot-photo" style="height: 400px;"><img src="/topics/agentic-engineering/chapter.jpg" alt="Vývojář pracuje s automatizačním softwarem a AI asistentem"></div>
</div>

<!--
Záměr a čas: 2 minuty. Přesuňte AI z obecného světa IT do prostředí průmyslové automatizace.
Počáteční stav: titulek, sdělení i ilustrativní fotografie jsou viditelné; nic se neodhaluje.
Řečový tah: inspirací je slide 10 prezentace EventAiAndDevOps. Vysvětlete, proč používání AI v OT vyžaduje znalost konkrétního projektu a ověřitelnou kontrolu; fotografie je ilustrace, nikoli důkaz schopností produktu.
Přechod: než probereme agenty, podívejme se, jak jazykový model vytváří odpověď.
-->

---
layout: default
class: ot-slide
---

<h1>LLM není kouzelná skříňka</h1>
<p class="ot-lead">Statisticky odhaduje pravděpodobnost dalšího tokenu podle zadání a dostupného kontextu.</p>
<div class="ot-stage">
<div class="ot-grid ot-flow" style="grid-template-columns: 0.9fr 1.3fr 0.9fr; --link-y: 56px;">
  <section class="ot-card is-feature"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-text-box-outline /></span><span class="ot-step">01 · VSTUP</span></div><h2>Cíl a kontext</h2><p>Prompt, podklady a dosavadní průběh konverzace.</p><p class="t-command" style="color: var(--ink);">„Po přenosu startuje CPU do …“</p></section>
  <section class="ot-card is-feature" style="--accent: var(--flow-blue);"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-chart-bar /></span><span class="ot-step">02 · ODHAD</span></div><h2>Další token</h2>
    <div v-click="1" style="display: grid; gap: 8px;">
      <div class="ot-prob" style="--p: 46%; --accent: var(--flow-blue);"><span class="t-command">SERVICE</span><i></i><span class="t-command">46 %</span></div>
      <div class="ot-prob" style="--p: 31%; --accent: var(--flow-blue);"><span class="t-command">RUN</span><i></i><span class="t-command">31 %</span></div>
      <div class="ot-prob is-low" style="--p: 9%;"><span class="t-command">BOOT</span><i></i><span class="t-command">9 %</span></div>
      <p class="t-caption">Ilustrační hodnoty, nikoli výstup konkrétního modelu.</p>
    </div>
  </section>
  <section class="ot-card is-feature"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-message-text-outline /></span><span class="ot-step">03 · VÝSTUP</span></div><h2>Odpověď</h2><p>Opakováním vzniká text, který může znít přesvědčivě, ale není tím ověřený.</p></section>
</div>
<div class="ot-callout"><mdi-alert-circle-outline /><p>Model předpovídá pokračování textu; sám tím nepotvrzuje pravdivost odpovědi.</p></div>
</div>

<!--
Záměr a čas: 1:30. Vysvětlete statistickou predikci dalšího tokenu a proč nejde o magickou ani ověřující schopnost.
Počáteční stav: titulek, vysvětlení a tři části toku jsou viditelné; pravděpodobnosti kandidátních tokenů jsou skryté.
Řečový tah: model generuje text token po tokenu na základě promptu a kontextu, který má k dispozici.
[click]
Sloupce ukazují ilustrační rozdělení pravděpodobnosti pro další slovo. Model vybere pravděpodobné pokračování; nejpravděpodobnější token ještě není ověřený fakt.
Konečný stav: celý tok včetně ilustračních pravděpodobností.
Přechod: proto záleží na cíli, který zadáme, i na kontextu, který modelu dodáme.
-->

---
layout: default
class: ot-slide
---

<h1>Od promptingu ke kontext engineeringu</h1>
<p class="ot-lead">Jasný cíl a relevantní kontext pomáhají model navést k užitečnější odpovědi.</p>
<div class="ot-stage">
<div style="display: grid; grid-template-columns: minmax(0, 1fr) 64px minmax(0, 1fr); align-items: stretch;">
  <section class="ot-card is-muted is-feature"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-help-circle-outline /></span><span class="ot-step">ŠIROKÝ DOTAZ</span></div><h2>„Je v AS6 podporován C30?“</h2><div class="ot-chips" style="margin-top: 8px;"><span class="ot-chip"><mdi-help /> Který model?</span><span class="ot-chip"><mdi-help /> Jaká konfigurace?</span><span class="ot-chip"><mdi-help /> Která verze AS?</span></div></section>
  <span style="display: grid; place-items: center; color: var(--br-orange);"><mdi-arrow-right-bold style="width: 40px; height: 40px;" /></span>
  <section class="ot-card is-feature"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-target /></span><span class="ot-step">ZPŘESNĚNÝ CÍL</span></div><h2>„Najdi mi případy a konfigurace, kdy C30 není v AS6 podporován.“</h2><div class="ot-chips" style="margin-top: 8px;"><span class="ot-chip"><mdi-chip /> konkrétní HW</span><span class="ot-chip"><mdi-tag-outline /> verze AS</span><span class="ot-chip"><mdi-link-variant /> odkazy ke zdrojům</span></div></section>
</div>
<div class="ot-callout"><mdi-information-outline /><p>Přesnější zadání mění hledaný rozsah; samo o sobě ale správnost odpovědi nezaručuje.</p></div>
</div>

<!--
Záměr a čas: 2 minuty. Na příkladu C30 ukažte rozdíl mezi krátkým promptem a úkolem s konkrétním cílem a kontextem.
Počáteční stav: oba dotazy a doplňující informace jsou viditelné; nic se neodhaluje.
Řečový tah: první otázka neříká, zda jde o konkrétní typ panelu, HW konfiguraci ani verzi. Upravený dotaz mění cíl z obecného ano/ne na hledání výjimek. Doporučení doplnit model, verzi a zdroje je návrh pro lepší ověřitelnost; přesnější prompt není zárukou správné odpovědi.
Přechod: podívejme se, proč odpověď na takový dotaz musíme dále ověřit.
-->

---
layout: default
class: ot-slide
---

# Ověřujme fakta i kód
<p class="ot-lead">Jistý tón ani úspěšný build samy o sobě nedokazují správnost.</p>
<div class="ot-stage">
<div class="ot-grid cols-3 ot-flow" style="--link-y: 56px;">
  <section v-click="1" class="ot-card is-muted is-feature"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-message-question-outline /></span><span class="ot-step">01 · PRVNÍ DOTAZ</span></div><h2>„Ano, C30 je podporován.“</h2><p>Odpověď zní rozhodně, ale otázka nevymezuje přesný model ani konfiguraci.</p></section>
  <section v-click="2" class="ot-card is-feature" style="--accent: var(--flow-blue);"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-magnify /></span><span class="ot-step">02 · DOPTÁNÍ</span></div><h2>Hledej případy, kdy podporován není.</h2><p>Odpověď pak rozlišuje standardní C30, upravené panely a C70. To je vodítko k ověření, ne důkaz.</p></section>
  <section v-click="3" class="ot-card is-feature" style="--accent: var(--flow-green);"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-check-decagram-outline /></span><span class="ot-step">03 · OVĚŘENÍ</span></div><h2>Zkontroluj zdroj i výsledek.</h2><div class="ot-chips"><span class="ot-chip"><mdi-book-open-variant /> Help</span><span class="ot-chip"><mdi-forum-outline /> Community</span><span class="ot-chip"><mdi-hammer-wrench /> build</span><span class="ot-chip"><mdi-test-tube /> test</span><span class="ot-chip"><mdi-account-check-outline /> review</span></div></section>
</div>
</div>

<!--
Záměr a čas: 1:30. Použijte anonymizovaný příklad z Teams k ukázce, že ověřování patří k odpovědím AI i ke kódu.
Počáteční stav: titulek a úvodní věta; tři kroky jsou skryté.
[click]
Původní otázka „Je v AS6 podporován C30?“ dostala sebejisté „Ano“. To nemusí být celé nepravdivé; bez přesného HW a konfigurace je ale odpověď příliš široká.
[click]
Požadavek hledat případy, kdy C30 podporován není, vedl k odpovědi, která rozlišovala standardní a upravené panely i C70. Změnil se rozsah otázky; novou odpověď stále ověřujeme.
[click]
U technické informace ověřte Help/Community, konkrétní HW a verzi. U kódu ověřte build i chování testem a člověkem.
Konečný stav: viditelné tři kroky Dotaz → Doptání → Ověření; paralela mezi technickou informací a kódem je vyslovená.
Přechod: od kontroly jednoho výstupu k agentnímu workflow.
-->

---

<h1>Od autocomplete k agentovi</h1>
<p class="ot-lead">Postupně přibývá práce s projektem a nástroji; cíl i kontrola zůstávají u člověka.</p>

<div class="ot-stage">
<div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 32px; align-items: center;">
  <div class="ot-photo" style="height: 400px; background: #f7f7f5;"><img src="/evolution.png" alt="Ilustrace vývoje od AI asistenta přes AI agenta k agentní AI" style="object-fit: contain;"></div>
  <div>
    <section v-click="1" class="ot-row" style="--accent: var(--steel);"><span class="ot-icon"><mdi-keyboard-outline /></span><div><p class="t-block">Autocomplete</p><p>Navrhuje další řádek nebo blok. Každý krok řídí vývojář.</p></div></section>
    <section v-click="2" class="ot-row" style="--accent: var(--flow-amber);"><span class="ot-icon"><mdi-chat-processing-outline /></span><div><p class="t-block">Chat asistent</p><p>Odpovídá nebo vytvoří ukázku; člověk ji přenese do projektu.</p></div></section>
    <section v-click="3" class="ot-row"><span class="ot-icon"><mdi-robot-outline /></span><div><p class="t-block">Agent</p><p>Pracuje s kontextem projektu, plánuje, mění soubory a volá povolené nástroje.</p></div></section>
  </div>
</div>
<div class="ot-callout"><mdi-account-check-outline /><p><strong>Člověk stanoví cíl a posuzuje výsledek.</strong></p></div>
</div>

<!--
Záměr a čas: 2 minuty. Vysvětlete posun rozsahu práce, nikoli žebříček kvality nástrojů.
Počáteční stav: titulek, podtitul a ilustrace vývoje; tři stupně vpravo jsou skryté. Ilustrace je obecná metafora, nikoli srovnání konkrétních produktů.
[click]
Autocompletion nabízí další řádek či blok; člověk rozhoduje o každém kroku.
[click]
Chat asistent odpovídá nebo generuje ukázku, kterou člověk sám přenáší do projektu.
[click]
Agent může číst poskytnutý projektový kontext, plánovat změny a volat povolené nástroje. Rozsah závisí na prostředí a oprávněních.
Konečný stav: všechny tři stupně jsou viditelné; člověk dál určuje cíl a posuzuje výsledek.
Přechod: tento posun dává smysl jen tehdy, když máme jasná kritéria a ověřování.
Zdroj pro přípravu: agentic-bridge/slides/s1/03-evolution.js.
-->

---


# Kvalitu určuje postup, ne nálepka
<p class="ot-lead">„Vibe coding“ a Agentic Engineering nejsou ostrým protikladem; liší se tím, kolik kroků po zadání řídí agent.</p>

<div class="ot-stage">
<div style="display: grid; gap: 16px;">
  <div class="ot-compare-row">
    <div class="ot-compare-cell is-muted"><mdi-weather-windy /><h2 style="margin: 0; color: var(--ink);">Vibe coding</h2></div>
    <span></span>
    <div class="ot-compare-cell is-accent"><mdi-cog-play-outline /><h2 style="margin: 0;">Agentic Engineering</h2></div>
  </div>
  <div v-click="1" class="ot-compare-row">
    <div class="ot-compare-cell is-muted"><mdi-account-arrow-right-outline /><p class="t-block">Člověk zadává další krok</p></div>
    <div class="ot-compare-label"><mdi-target /><span class="t-caption">WORKFLOW</span></div>
    <div class="ot-compare-cell is-accent"><mdi-robot-outline /><p class="t-block">Agent může provádět povolené kroky</p></div>
  </div>
  <div v-click="2" class="ot-compare-row">
    <div class="ot-compare-cell is-muted"><mdi-head-lightbulb-outline /><p class="t-block">Kontext dodává člověk v dialogu</p></div>
    <div class="ot-compare-label"><mdi-folder-text-outline /><span class="t-caption">KONTEXT</span></div>
    <div class="ot-compare-cell is-accent"><mdi-file-send-outline /><p class="t-block">Agent pracuje s dostupným kontextem projektu</p></div>
  </div>
  <div v-click="3" class="ot-compare-row">
    <div class="ot-compare-cell is-muted"><mdi-account-cog-outline /><p class="t-block">Člověk spouští build a testy</p></div>
    <div class="ot-compare-label"><mdi-shield-check-outline /><span class="t-caption">KONTROLY</span></div>
    <div class="ot-compare-cell is-accent"><mdi-test-tube /><p class="t-block">Agent může spustit povolené kontroly</p></div>
  </div>
</div>

<div class="ot-callout"><mdi-account-check-outline /><p>Odpovědnost za výsledek zůstává člověku; <strong>produkční vhodnost určuje ověření, ne nálepka.</strong></p></div>
</div>

<!--
Záměr a čas: 2 minuty. Srovnávejte pracovní postupy bez zesměšňování neformálního přístupu.
Počáteční stav: titulek, vysvětlení, záhlaví obou přístupů a závěrečné upozornění; tři řádky srovnání jsou skryté.
[click]
První skupina porovná člověkem řízený další krok s kroky, které může agent provádět v rámci svých oprávnění.
[click]
Druhá skupina porovná kontext zadávaný v dialogu s projektovým kontextem dostupným agentovi.
[click]
Třetí skupina porovná ruční spouštění buildů a testů s možností, aby agent spustil povolené kontroly. Názvy přístupů nejsou pevné kategorie: i vibe coding může být použit v produkci, pokud následuje odpovídající ověření a lidské review.
Konečný stav: všechny tři páry jsou viditelné.
Přechod: automatizované kroky se propojí do pracovní smyčky.
Zdroj pro přípravu: agentic-bridge/slides/s1/04-agentic-engineering.js; [B&R Community: Vibe Coding vs. Agentic Engineering](https://community.br-automation.com/t/vibe-coding-vs-agentic-engineering-what-is-the-difference/12094).
-->

---
layout: default
class: ot-slide
---

# Agentic workflow
<p class="ot-lead">Plan → Implement → Verify → Test, s průběžným dohledem člověka.</p>

<div class="ot-stage" style="gap: 0;">
<div class="ot-grid cols-4 ot-flow" style="--link-y: 56px;">
  <section v-click="1" class="ot-card is-feature"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-map-marker-path /></span><span class="ot-step">01</span></div><h2>Plan</h2><p>Vymezit cíl, rozsah a postup.</p></section>
  <section v-click="2" class="ot-card is-feature" style="--accent: var(--flow-blue);"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-code-braces /></span><span class="ot-step">02</span></div><h2>Implement</h2><p>Provést změnu v projektu.</p></section>
  <section v-click="3" class="ot-card is-feature" style="--accent: var(--flow-cyan);"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-hammer-wrench /></span><span class="ot-step">03</span></div><h2>Verify</h2><p>Ověřit sestavení a konfiguraci.</p></section>
  <section v-click="4" class="ot-card is-feature" style="--accent: var(--flow-green);"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-test-tube /></span><span class="ot-step">04</span></div><h2>Test</h2><p>Prověřit očekávané chování.</p></section>
</div>

<div v-click="4" class="ot-loop" style="margin: 0 11%;"><span class="ot-loop-label"><mdi-backup-restore />Chyba nebo výsledek testu se vrací do kontextu agenta.</span></div>
<div v-click="5" class="ot-callout" style="margin-top: 48px;"><mdi-account-check-outline /><p><strong>Člověk může schválit plán a po testu kontroluje změnu i důkazy.</strong></p></div>
</div>

<!--
Záměr a čas: 3 minuty. Projděte řízenou smyčku a odlište Verify od Test.
Počáteční stav: titulek, pořadí kroků v podtitulu; podrobnosti jsou skryté.
[click]
Plan: vymezí se cíl, rozsah a postup; člověk může plán schválit.
[click]
Implement: agent provede změnu v projektu.
[click]
Verify: build a kontrola konfigurace ověřují technickou konzistenci, ne chování.
[click]
Test: ověřuje očekávané chování. Chyba či výsledek testu se vrací do kontextu; oba prvky se odhalují společně jako jedna skupina.
[click]
Lidské review posoudí změnu i důkazy po testu. Konečný stav: celý tok včetně návratu a lidského review.
Přechod: k agentní smyčce je potřeba dodat odborné znalosti, skutečný projekt a kontrolní hranice.
Zdroj pro přípravu: agentic-bridge/slides/s2/07-agent-workflows.js a s5/11-full-loop.js.
-->

---
layout: default
class: ot-slide
---

# Close the gap
<p class="ot-lead">Od obecného modelu k řízené práci na konkrétním automatizačním projektu.</p>

<div style="display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(0, 0.9fr); gap: 40px; margin-top: 28px; align-items: stretch;">
  <div>
    <p class="t-caption" style="margin-bottom: 4px; color: var(--steel); font-weight: 700;">CO POTŘEBUJE PROCES</p>
    <div>
      <section v-click="1" class="ot-row"><span class="ot-icon"><mdi-book-open-variant /></span><div><p style="font-weight: 700;">Doménová znalost</p><p>B&amp;R software, platforma a znalost OEM projektu.</p></div></section>
      <section v-click="2" class="ot-row" style="--accent: var(--flow-blue);"><span class="ot-icon"><mdi-folder-cog-outline /></span><div><p style="font-weight: 700;">Kontext projektu</p><p>Programy, konfigurace, hardware, verze a závislosti.</p></div></section>
      <section v-click="3" class="ot-row" style="--accent: var(--flow-green);"><span class="ot-icon"><mdi-source-branch /></span><div><p style="font-weight: 700;">Git / source control</p><p>Změny lze dohledat, porovnat a vrátit.</p></div></section>
      <section v-click="4" class="ot-row" style="--accent: var(--flow-cyan);"><span class="ot-icon"><mdi-tools /></span><div><p style="font-weight: 700;">Nástroje platformy</p><p>Dostupné akce pro build, diagnostiku a testy.</p></div></section>
      <section v-click="5" class="ot-row" style="--accent: var(--flow-amber);"><span class="ot-icon"><mdi-shield-check-outline /></span><div><p style="font-weight: 700;">Guardrails</p><p>Rozsah změn, ochrana dat a lidské schválení.</p></div></section>
    </div>
  </div>
  <section class="ot-card" style="padding: 16px;">
    <div class="ot-card-head" style="justify-content: flex-start;"><span class="ot-icon"><mdi-file-sign /></span><h3>Engineering contract</h3></div>
    <div class="ot-band" style="justify-content: flex-start;"><mdi-robot-outline /><span>Agent pracuje v určených mezích</span></div>
    <div>
      <div class="ot-row" style="grid-template-columns: 24px 84px 1fr; gap: 12px;"><mdi-eye-outline style="width: 22px; height: 22px; color: var(--br-orange);" /><strong>READ</strong><span>Kontext v rozsahu projektu</span></div>
      <div class="ot-row" style="grid-template-columns: 24px 84px 1fr; gap: 12px;"><mdi-pencil-outline style="width: 22px; height: 22px; color: var(--br-orange);" /><strong>CHANGE</strong><span>Řízené akce nad platformou</span></div>
      <div class="ot-row" style="grid-template-columns: 24px 84px 1fr; gap: 12px;"><mdi-check-circle-outline style="width: 22px; height: 22px; color: var(--br-orange);" /><strong>VERIFY</strong><span>Testy, diagnostika a zpětná vazba</span></div>
    </div>
    <p style="margin-top: 8px; color: var(--ink);">Stejný inženýrský princip jako v IT. <strong>Jiná doménová hranice.</strong></p>
  </section>
</div>
<div v-click="6" class="ot-callout" style="justify-content: center; margin-top: 20px;"><mdi-link-variant /><p><strong>Kontext + kontrola + zpětná vazba</strong></p></div>

<!--
Záměr a čas: 3 minuty. Ukažte, co musí být přítomno, aby agent mohl užitečně pracovat na skutečném B&R projektu; nic z toho samo nezaručuje správnost.
Počáteční stav: titulek, stručné sdělení a pravý panel kontraktu READ → CHANGE → VERIFY jsou viditelné; pět předpokladů vlevo a závěrečná syntéza jsou skryté.
[click]
Doménová znalost: doplňte informace o B&R platformě i specifika OEM projektu.
[click]
Projektový kontext: agent potřebuje skutečné programy, konfiguraci, hardware, verze a závislosti.
[click]
Git/source control: verzování umožní změny dohledat, porovnat a vrátit.
[click]
Nástroje platformy: dostupné akce mohou zahrnovat build, diagnostiku nebo test; rozsah závisí na konkrétním prostředí.
[click]
Guardrails: pravidla omezují rozsah změny, chrání data a ponechávají schválení člověku. Samotná textová instrukce bezpečnostní hranici nevynucuje.
[click]
Syntéza: kontext, kontrola a zpětná vazba společně uzavírají rozdíl mezi obecným modelem a konkrétní inženýrskou prací.
Konečný stav: viditelných je všech pět předpokladů, celý kontrakt i shrnující princip.
Přechod: pojmenujme vrstvy, které dodávají tyto různé funkce.
Inspirace: slide 11 prezentace EventAiAndDevOps. Obsah přizpůsoben této prezentaci; nejde o garanci produktových funkcí.
Zdroj pro postup: AI_Event_CZ/Slides/topics/as-repository.md, část „Od požadavku k ověřené změně“.
-->

---
layout: default
class: dark-slide ot-slide
---

# Model, harness, MCP a skills
<p class="ot-lead">Čtyři různé role v agentním pracovním prostředí.</p>

<div class="ot-stage">
<div style="display: grid; gap: 12px;">
  <section v-click="1" class="ot-layer"><span class="ot-icon is-lg"><mdi-brain /></span><div><p class="t-caption" style="font-weight: 700;">MODEL</p><h3 style="margin: 0;">Tvoří návrh</h3></div><p>Vychází z dostupného zadání a kontextu.</p></section>
  <section v-click="2" class="ot-layer" style="--accent: var(--flow-blue);"><span class="ot-icon is-lg"><mdi-cog-transfer-outline /></span><div><p class="t-caption" style="font-weight: 700;">HARNESS</p><h3 style="margin: 0;">Řídí práci agenta</h3></div><p>Předává kontext, zprostředkuje povolená volání a vrací výsledky.</p></section>
  <section v-click="3" class="ot-layer" style="--accent: var(--flow-green);"><span class="ot-icon is-lg"><mdi-connection /></span><div><p class="t-caption" style="font-weight: 700;">MCP</p><h3 style="margin: 0;">Propojuje nástroje a zdroje</h3></div><p>Je přístupové rozhraní, nikoli model ani znalostní báze.</p></section>
  <section v-click="4" class="ot-layer" style="--accent: var(--flow-purple);"><span class="ot-icon is-lg"><mdi-school-outline /></span><div><p class="t-caption" style="font-weight: 700;">SKILLS</p><h3 style="margin: 0;">Dodávají odborný postup</h3></div><p>Instrukce a reference pro konkrétní typ úlohy.</p></section>
</div>
</div>

<!--
Záměr a čas: 2 minuty. Oddělte funkce vrstev a nepřidávejte neověřený přehled dodavatelů.
Počáteční stav: titulek a společný popis; čtyři vrstvy jsou skryté.
[click]
Model vytváří návrh z poskytnutého zadání a kontextu.
[click]
Harness organizuje běh agenta: předává kontext, zprostředkuje povolená volání a vrací výsledky.
[click]
MCP zpřístupňuje nástroje a zdroje. V příkladu Bridge propojuje agenta se znalostní službou; MCP samo nevyhledává jako RAG.
[click]
Skills přidávají postup a reference pro typ úlohy. Nejde o přeučení modelu ani o bezpečnostní oprávnění.
Konečný stav: všechny čtyři role jsou viditelné a odlišené.
Přechod: jak jejich kombinace omezuje variabilitu bez slibu totožného textu?
Zdroj pro přípravu: agentic-bridge/slides/s1/05-who-offers-what.js, s3/02-mcp.js a s4/07-skills-what.js.
-->

---
layout: default
class: ot-slide
---

# Jak vést k opakovatelnému výsledku
<p class="ot-lead">Nezaručujeme totožný text modelu; zpřesňujeme proces a ověřujeme výsledek.</p>

<div class="ot-stage" style="gap: 0;">
<div class="ot-grid cols-3 ot-flow" style="--link-y: 56px;">
  <section v-click="1" class="ot-card is-feature" style="--accent: var(--flow-blue);"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-lightbulb-on-outline /></span><span class="ot-step">01</span></div><h2>Pravděpodobný návrh</h2><p>Jasné zadání a relevantní projektový kontext.</p></section>
  <section v-click="2" class="ot-card is-feature" style="--accent: var(--flow-green);"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-ruler-square /></span><span class="ot-step">02</span></div><h2>Pevné kritérium</h2><p>Build, test nebo jiný kontrolovatelný výsledek nástroje.</p></section>
  <section v-click="3" class="ot-card is-feature"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-account-check-outline /></span><span class="ot-step">03</span></div><h2>Oprava a přijetí</h2><p>Chyba se vrátí do kontextu; člověk posoudí změnu podle cíle.</p></section>
</div>

<div v-click="3" class="ot-loop" style="margin: 0 15%;"><span class="ot-loop-label"><mdi-backup-restore />Chyba → zpět do kontextu</span></div>
</div>

<!--
Záměr a čas: 2 minuty. Vysvětlete, jak proces pracuje s variabilitou, aniž by sliboval deterministický text.
Počáteční stav: titulek a upozornění; tři kroky jsou skryté.
[click]
Model vytvoří pravděpodobný návrh podle zadání a dodaného projektového kontextu.
[click]
Kontrolní kritérium vrátí opakovatelný signál, například výsledek buildu nebo testu; samo nevyřeší všechny otázky kvality.
[click]
Chyba se vrací do kontextu k opravě a člověk rozhoduje o přijetí změny podle cíle a důkazů.
Konečný stav: tři kroky tvoří krátkou smyčku řízení variability.
Přechod: tyto vrstvy konkrétně propojuje Automation Studio Agentic Bridge.
Zdroj pro přípravu: agentic-bridge/slides/s5/03-deterministic-vs-probabilistic.js a AI_Event_CZ/Slides/topics/as-repository.md.
-->

---
layout: default
class: ot-slide chapter-slide
---

<img class="chapter-image" src="/topics/as-agentic-bridge/chapter.jpg" alt="" style="position: absolute; top: 0; left: 0; width: 1280px; height: 485px; object-fit: cover;">
<div style="position: absolute; top: 457px; left: 0; width: min(335px, 27%); height: 28px; background: var(--br-orange);"></div>

<h1 style="position: absolute; top: 535px; left: 35px; max-width: 1050px;">Automation Studio Agentic Bridge</h1>

<p style="position: absolute; top: 590px; left: 35px; color: var(--steel);">Propojení agenta s odbornými znalostmi, projektovým postupem a nástroji Automation Studia.</p>

<!--
Záměr a čas: 1 minuta. Uveďte roli Bridge po obecném agentním workflow.
Počáteční stav: název, podtitul a existující tematický obraz; nic se neodhaluje.
Řečový tah: Bridge propojuje vybrané agentní prostředí s workflow, znalostmi a akcemi pro práci s Automation Studiem. Není to nový jazykový model. Konkrétní konfigurace a dostupnost závisí na prostředí.
Přechod: rozdělit tuto roli na tři konkrétní části.
Zdroj pro přípravu: AI_Event_CZ/Slides/topics/as-agentic-bridge.md, architektura Bridge.
-->
---
layout: default
class: ot-slide
---

<h1>Agentic Bridge: tři propojené části</h1>
<div class="ot-stage" style="gap: 0;">
<div class="ot-band"><mdi-robot-outline /><span>Agent + zvolený model a harness</span></div>
<p class="t-caption" style="margin-top: 8px; text-align: center; color: var(--steel);">využívá podle potřeby</p>

<div class="ot-grid cols-3 ot-linked-v" style="margin-top: 28px;">
  <section v-click="1" class="ot-card is-feature" style="--accent: var(--flow-blue);"><div class="ot-card-head" style="justify-content: flex-start;"><span class="ot-icon is-lg"><mdi-book-search-outline /></span><h2>Knowledge Hub</h2></div><p>Odborné podklady dohledané pro dotaz, včetně zdrojů.</p></section>
  <section v-click="2" class="ot-card is-feature" style="--accent: var(--flow-purple);"><div class="ot-card-head" style="justify-content: flex-start;"><span class="ot-icon is-lg"><mdi-source-repository /></span><h2>AS Repository</h2></div><p>Instrukce, skills a postup pro práci na projektu.</p></section>
  <section v-click="3" class="ot-card is-feature" style="--accent: var(--flow-green);"><div class="ot-card-head" style="justify-content: flex-start;"><span class="ot-icon is-lg"><mdi-console /></span><h2>AS CLI</h2></div><p>Podporované operace a návrat výsledků nástrojů.</p></section>
</div>

<div class="ot-band is-light" style="margin-top: 28px;"><mdi-factory /><span>Automation Studio + konkrétní projekt</span></div>
</div>

<!--
Záměr a čas: 1 minuta. Pojmenujte části Bridge jejich skutečnými názvy; role jsou vysvětlení pod názvy.
Počáteční stav: agent s vybraným modelem a harness plus projekt Automation Studio; tři části jsou skryté.
[click]
Knowledge Hub dodává dohledané podklady se zdroji; relevance se posuzuje pro konkrétní dotaz a verzi.
[click]
AS Repository předává instrukce, skills a pracovní postup; nejde o nový model.
[click]
AS CLI poskytuje podporované operace a vrací jejich výsledky. Konkrétní konfigurace závisí na prostředí.
Konečný stav: všechny tři části jsou zobrazené mezi agentem a projektem; diagram neslibuje jejich jednotnou dostupnost ve všech instalacích.
Přechod: začít znalostní částí a oddělit MCP propojení od RAG vyhledávání.
Zdroj pro přípravu: AI_Event_CZ/Slides/topics/as-agentic-bridge.md, „Agentic Bridge: tři propojené části“.
-->

---
layout: default
class: ot-slide
---

<h1>Knowledge Hub: odborné podklady se zdrojem</h1>
<p class="ot-lead">Online vyhledávání technologických znalostí B&amp;R · MCP propojuje, RAG dohledává podklady.</p>

<div class="ot-grid ot-flow is-nodes" style="grid-template-columns: repeat(6, minmax(0, 1fr)); margin-top: 28px;">
  <section class="ot-node"><span class="ot-icon"><mdi-account-question-outline /></span><p style="font-weight: 700;">Dotaz</p><p>Otázka uživatele</p></section>
  <section class="ot-node"><span class="ot-icon"><mdi-robot-outline /></span><p style="font-weight: 700;">Agent</p><p>Rozhodne, co dohledat</p></section>
  <section class="ot-node"><span class="ot-icon" style="--accent: var(--flow-green);"><mdi-connection /></span><p style="font-weight: 700;">MCP nástroj</p><p>Předá požadavek službě</p></section>
  <section class="ot-node"><span class="ot-icon" style="--accent: var(--flow-blue);"><mdi-database-search-outline /></span><p style="font-weight: 700;">RAG</p><p>Vyhledá podklady</p></section>
  <section class="ot-node"><span class="ot-icon" style="--accent: var(--flow-blue);"><mdi-file-document-multiple-outline /></span><p style="font-weight: 700;">Zdroje</p><p>Vrátí se do kontextu agenta</p></section>
  <section class="ot-node"><span class="ot-icon"><mdi-account-check-outline /></span><p style="font-weight: 700;">Odpověď</p><p>Posoudí ji člověk</p></section>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 28px;">
  <section>
    <h3 style="margin: 0;">Vyhledávané zdroje</h3>
    <div class="ot-chips" style="margin-top: 12px;">
      <span class="ot-chip"><mdi-help-circle-outline />Automation Help</span>
      <span class="ot-chip"><mdi-forum-outline />B&amp;R Community: příspěvky a komentáře</span>
      <span class="ot-chip"><mdi-tag-multiple-outline />Informace o verzích</span>
      <span class="ot-chip"><mdi-code-tags />Schválený interní zdrojový kód</span>
    </div>
  </section>
  <section class="ot-callout" style="align-items: flex-start;">
    <mdi-chat-question-outline />
    <div>
      <p class="t-caption" style="font-weight: 700; color: var(--steel);">ILUSTRAČNÍ DOTAZ</p>
      <p style="margin-top: 4px;">„Po přenosu projektu startuje X20 CPU do SERVICE místo RUN. Jaké mohou být příčiny?“</p>
      <p class="t-caption" style="margin-top: 4px; color: var(--steel);">Příklad dotazu, nikoli živé vyhledávání ani ověřený diagnostický postup.</p>
    </div>
  </section>
</div>

<p class="t-caption" style="margin-top: 20px; color: var(--steel);">Dle interního podkladu: v produkci od červnového vydání Automation Studio Code · aktualizace čtvrtletně (rok vydání v podkladu neuveden).</p>
<p class="t-caption" style="margin-top: 4px;"><strong>Zatím nezahrnuto:</strong> SAP support tickety. Aktualizace neznamená živou synchronizaci ani úplnost; zdroj i relevanci musí posoudit člověk.</p>

<!--
Záměr a čas: 2 minuty. Vysvětlete tok dotazu, roli MCP a RAG, zdroje služby a provozní hranice.
Počáteční stav: celý statický tok, seznam zdrojů, ilustrativní dotaz a omezení jsou viditelné; nic se neodhaluje.
Řečový tah: agent vybere, co hledat; MCP předá volání službě a RAG dohledá podklady, které se zdroji vrátí do kontextu. Agent sestaví odpověď a člověk posoudí relevanci i verzi. MCP je protokol/rozhraní, ne vyhledávač; přesné interní kroky RAG nepředjímat.
Ilustrační otázka X20 SERVICE místo RUN pochází z podkladů ke školení; není to živé vyhledávání ani doložený diagnostický postup.
Zdroje: Automation Help, příspěvky a komentáře B&R Community, informace o verzích a schválený interní zdrojový kód; nejde o libovolný interní nebo zákaznický kód.
Interní podklady uvádějí produkci od červnového vydání Automation Studio Code a čtvrtletní aktualizace. Rok vydání není uveden; čtvrtletní aktualizace neznamená živou synchronizaci ani úplnost. SAP support tickety nejsou zahrnuté.
Konečný stav: je vidět celý tok, typy zdrojů, příklad dotazu i hranice služby; žádná odpověď asistenta není vydávána za ověřený fakt.
Přechod: statický postup a kontext projektu dodává AS Repository.
Zdroj pro přípravu: AI_Event_CZ/Slides/topics/as-agentic-bridge.md, část „MCP Knowledge Hub: znalosti se zdrojem“.
-->

---
layout: default
class: ot-slide
---

<h1>AS Repository: postup pro projekt</h1>
<p class="ot-lead">Šablona projektu a sdílené B&amp;R dovednosti dávají agentovi správný pracovní kontext.</p>

<div class="ot-grid cols-2" style="margin-top: 28px;">
  <section v-click="1" class="ot-card">
    <div class="ot-card-head" style="justify-content: flex-start;"><span class="ot-icon"><mdi-folder-cog-outline /></span><div><p class="t-caption" style="font-weight: 700;">ŠABLONA V PROJEKTU</p><h3>Pravidla + konfigurace</h3></div></div>
    <pre class="ot-code">AGENTS.md                 architektura, zásady, routing
.vscode/mcp.json          konfigurace MCP serverů
.gitignore / .gitattributes
Logical/ · Physical/ · *.apj</pre>
    <p style="color: var(--ink);">AGENTS.md popisuje projekt, pravidla a který skill použít pro práci.</p>
    <p class="t-caption">MCP servery se instalují samostatně; jejich konfigurace sama je nespouští.</p>
  </section>
  <section v-click="2" class="ot-card" style="--accent: var(--flow-purple);">
    <div class="ot-card-head" style="justify-content: flex-start;"><span class="ot-icon"><mdi-puzzle-outline /></span><div><p class="t-caption" style="font-weight: 700;">PLUGIN PRO AGENTNÍ PROSTŘEDÍ</p><h3>as-skills</h3></div></div>
    <p style="color: var(--ink);">Specializované postupy a reference pro práci s Automation Studiem.</p>
    <div class="ot-chips"><span class="ot-chip">Structured Text</span><span class="ot-chip">ANSI C</span><span class="ot-chip">Physical konfigurace</span><span class="ot-chip">OPC UA</span><span class="ot-chip">mapp a motion</span></div>
    <p>Skill se přibírá podle úlohy; šablona projektu žádné skills nekopíruje.</p>
    <p class="t-caption">Repozitář obsahuje také projektového agenta, příkaz pro review větve, MCP návody, nástroje a školení.</p>
  </section>
</div>
<div v-click="3" style="margin-top: 24px;">
  <div class="ot-chips"><span class="ot-chip"><mdi-file-document-outline />Projektová pravidla</span><mdi-arrow-right /><span class="ot-chip"><mdi-puzzle-outline />Odpovídající skill</span><mdi-arrow-right /><span class="ot-chip"><mdi-check-decagram-outline />Ověřená práce</span></div>
  <p class="t-caption" style="margin-top: 8px; color: var(--steel);">as-cli je samostatný nástroj, ne součást projektové šablony. Instrukce nejsou oprávnění ani bezpečnostní kontrola.</p>
</div>

<!--
Záměr a čas: 2 minuty. Ukažte, co AS Repository skutečně dodává: šablonu pro projekt, sdílené agentní pluginy a související nástroje/podklady.
Počáteční stav: titulek a vysvětlení jsou viditelné; dvě obsahové části a závěrečné shrnutí jsou skryté.
[click]
Projektová šablona se kopíruje vedle Logical/, Physical/ a *.apj. AGENTS.md popisuje architekturu, neměnné zásady a směrování na odpovídající skill; .vscode/mcp.json nastavuje připojení, ale MCP servery je nutné instalovat samostatně.
[click]
Plugin as-skills poskytuje postupy a reference pro konkrétní B&R technologie, například Structured Text, ANSI C, Physical konfiguraci, OPC UA a mapp. Skills se vybírají podle práce; nejsou kopírovány do projektové šablony. Repo obsahuje také projektového agenta a příkaz pro review větve. Je zde rovněž MCP dokumentace, nástroje a školení.
[click]
Shrnutí: projektová pravidla směrují k odpovídajícímu skillu; harness podle něj pracuje s kontextem projektu. as-cli je samostatný nástroj. Dostupnost skillů/MCP závisí na instalaci a konfiguraci; textové instrukce samy nevynucují oprávnění ani bezpečnost. Lokální zdrojový README ještě uvádí as-script-task-skills, jeho README jej ale označuje za nahrazený as-cli; tuto starší větev proto nevydávat za aktuální doporučení.
Konečný stav: rozlišena projektová šablona, pluginy a samostatný CLI nástroj bez tvrzení, že repo obsahuje nebo automaticky aktivuje vše v každém prostředí.
Přechod: podívejme se na samostatný nástroj as-cli.
Zdroj pro přípravu: C:\100_Projects\as-docs\agentic-engineering-in-automation-studio\README.md; plugins\as-skills\README.md; template\AGENTS.md; docs\agentic-bridge\slides\s4\03-project-structure.js.
-->

---
layout: default
class: ot-slide
---

<h1>Co je as-cli?</h1>
<div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 32px; margin-top: 28px;">
  <section>
    <div class="ot-callout"><mdi-console /><p><strong>AS: Automation Studio na příkazové řádce.</strong> CLI pro práci s projekty; příkazy zadává člověk nebo agent místo proklikávání GUI.</p></div>
    <p style="margin-top: 12px; color: var(--steel);">AS CLI nabízí příkazy pro změny projektu, sestavení a další operace v podporovaných oblastech.</p>
    <table class="ot-table" style="margin-top: 16px;">
      <thead><tr><th>Problém pro agenta</th><th>Jak as-cli pomáhá</th></tr></thead>
      <tbody>
        <tr><td><mdi-link-variant />Křížové odkazy</td><td>Změny provádí Automation Studio, které spravuje související objekty.</td></tr>
        <tr><td><mdi-file-tree-outline />Neznalost struktury</td><td>Čte schémata a metadata instalované verze AS.</td></tr>
        <tr><td><mdi-check-circle-outline />Ověřování</td><td>Zpřístupňuje diagnostiku buildu a další příkazy pro ověření.</td></tr>
        <tr><td><mdi-cursor-default-click-outline />Kroky jen v GUI</td><td>Příkazy lze použít v automatizaci, agentem i člověkem.</td></tr>
      </tbody>
    </table>
  </section>
  <section>
    <p class="t-caption" style="color: var(--steel); font-weight: 700;">PŘÍKLADY OBLASTÍ NÁSTROJOVÉ VRSTVY</p>
    <div class="ot-grid cols-2" style="gap: 16px; margin-top: 12px;">
      <div class="ot-card"><span class="ot-icon"><mdi-file-cog-outline /></span><h3>AS</h3><p>Změny projektu</p></div>
      <div class="ot-card" style="--accent: var(--flow-blue);"><span class="ot-icon"><mdi-hammer-wrench /></span><h3>Build &amp; Transfer</h3><p>Sestavení, simulace a přenos</p></div>
      <div class="ot-card" style="--accent: var(--flow-green);"><span class="ot-icon"><mdi-chip /></span><h3>PLC</h3><p>Online proměnné</p></div>
      <div class="ot-card" style="--accent: var(--flow-purple);"><span class="ot-icon"><mdi-book-open-page-variant-outline /></span><h3>Znalosti</h3><p>Schémata a metadata</p></div>
    </div>
    <p class="t-caption" style="margin-top: 16px; color: var(--steel);">Agent komunikuje přes rozhraní Automation Studia; konkrétní podporu a rozsah ověřte pro instalovanou verzi.</p>
  </section>
</div>
<p class="t-caption" style="margin-top: 16px; color: var(--steel);">Přehled a příklady převzaté z podkladů S5; dostupnost příkazů se může lišit podle verze.</p>

<!--
Záměr a čas: 1 minuta. Představte as-cli jako příkazové rozhraní k práci s projektem Automation Studia.
Počáteční stav: vysvětlení, tabulka problémů a příkladové oblasti jsou viditelné; nic se neodhaluje.
Řečový tah: CLI umožňuje zadávat příkazy člověkem nebo agentem. S5 zdůrazňuje, že práci s projektem zprostředkuje Automation Studio a as-cli čte schémata instalované verze. Neznamená to, že každý příkaz nebo změna jsou bez kontroly správné.
Přechod: ukázat konkrétní příklady příkazových skupin.
Zdroj pro přípravu: agentic-engineering-in-automation-studio/docs/agentic-bridge/slides/s5/07-what-is-as-cli.js.
-->

---
layout: default
class: dark-slide ot-slide
---

<h1>Co umí as-cli?</h1>
<div class="ot-stage" style="gap: 20px;">
  <div class="ot-cli-groups">
    <section class="ot-card is-feature ot-cli-group" style="--accent: var(--flow-blue);">
      <div class="ot-card-head" style="justify-content: flex-start;"><span class="ot-icon is-lg"><mdi-file-cog-outline /></span><h2>Projekt a tvorba</h2></div>
      <div class="ot-cli-command-list">
        <div class="ot-cli-command-row"><span>Projekt / konfigurace</span><code>as project status</code></div>
        <div class="ot-cli-command-row"><span>Logical view</span><code>as logical add StProgram Conveyor --parent Machine</code></div>
        <div class="ot-cli-command-row"><span>Hardware</span><code>as hardware module list</code></div>
        <div class="ot-cli-command-row"><span>Technologie</span><code>as config schema read .axis</code></div>
        <div class="ot-cli-command-row"><span>mappView HMI</span><code>as mappview widget add</code></div>
        <div class="ot-cli-command-row"><span>Symboly</span><code>as symbol search motor</code></div>
      </div>
    </section>
    <section class="ot-card is-feature ot-cli-group" style="--accent: var(--flow-green);">
      <div class="ot-card-head" style="justify-content: flex-start;"><span class="ot-icon is-lg"><mdi-hammer-wrench /></span><h2>Build a provoz</h2></div>
      <div class="ot-cli-command-list">
        <div class="ot-cli-command-row"><span>Build</span><code>as build --filter errors</code></div>
        <div class="ot-cli-command-row"><span>Simulace (ARsim)</span><code>as sim enable</code></div>
        <div class="ot-cli-command-row"><span>Transfer</span><code>as transfer online --ip &lt;PLC_IP&gt;</code></div>
        <div class="ot-cli-command-row"><span>Online PLC (PVI)</span><code>as plc var read gLift.Status</code></div>
        <div class="ot-cli-command-row"><span>Síť</span><code>as network scan</code></div>
      </div>
    </section>
  </div>
  <div class="ot-callout"><mdi-console /><p>Přesný a aktuální seznam příkazů zjistíte pomocí <code class="t-command">as --help</code>.</p></div>
</div>

<!--
Záměr a čas: 1 minuta. Ukažte šíři příkazových skupin a jeden příklad jejich zápisu.
Počáteční stav: obě tematické skupiny a všech jedenáct příkladů jsou viditelné; nic se neodhaluje.
Řečový tah: Projekt a tvorba pokrývá projekt, Logical view, hardware, konfiguraci technologií, mappView a symboly. Build a provoz zahrnuje ARsim, transfer, online PLC a síť. Příklady jsou převzaté z materiálů S5; nejde o příkazy skutečně spuštěné ani o záruku dostupnosti ve všech verzích. Transfer používá zástupný symbol adresy, nikoli skutečnou PLC adresu.
Závěr: před použitím ověřit přesnou syntaxi a dostupné možnosti přes `as --help`.
Přechod: od přehledu možností k plánované ukázce, jejíž běh stále není doložen.
Zdroj pro přípravu: agentic-engineering-in-automation-studio/docs/agentic-bridge/slides/s5/09-capabilities.js.
-->

---
layout: default
class: ot-slide
---

# Bridge demo: plán, ne důkaz běhu

<div class="ot-callout is-danger" style="margin-top: 16px;"><mdi-alert-outline /><p><strong>Plán demonstrace · běh zatím neověřen</strong></p></div>
<p style="margin-top: 16px;">Ilustrační zadání z podkladů: <strong>„Přidej počítadlo hotových kusů a ověř reset.“</strong></p>

<div class="ot-grid cols-5 ot-flow" style="margin-top: 36px;">
  <section class="ot-card"><div class="ot-card-head"><span class="ot-icon"><mdi-file-document-outline /></span><span class="ot-step">1</span></div><h3>Kontext</h3><p>Projektová pravidla a potřebná dokumentace.</p></section>
  <section class="ot-card" style="--accent: var(--flow-blue);"><div class="ot-card-head"><span class="ot-icon"><mdi-code-braces /></span><span class="ot-step">2</span></div><h3>Změna</h3><p>Agent připraví implementaci v projektu.</p></section>
  <section class="ot-card" style="--accent: var(--flow-cyan);"><div class="ot-card-head"><span class="ot-icon"><mdi-hammer-wrench /></span><span class="ot-step">3</span></div><h3>Build</h3><p>Zaznamenat skutečný výsledek sestavení.</p></section>
  <section class="ot-card" style="--accent: var(--flow-green);"><div class="ot-card-head"><span class="ot-icon"><mdi-play-circle-outline /></span><span class="ot-step">4</span></div><h3>Test</h3><p>V ARsim ověřit přírůstek a reset na nulu.</p></section>
  <section class="ot-card"><div class="ot-card-head"><span class="ot-icon"><mdi-account-check-outline /></span><span class="ot-step">5</span></div><h3>Review</h3><p>Člověk porovná změnu i důkazy s cílem.</p></section>
</div>

<div class="ot-callout" style="margin-top: 32px;"><mdi-information-outline /><p>Bez ověřeného běhu neukazujeme úspěch ani simulované výstupy.</p></div>

<!--
Záměr a čas: 5 minut vyhrazených pro demonstraci; tento slide je zatím plán, nikoli dokončené demo.
Počáteční stav: štítek „plán, běh neověřen“, ilustrační zadání a všech pět kroků jsou viditelné. Nic se neodhaluje.
Příprava: potřebný skutečný Automation Studio projekt, ověřená verze AS CLI, připravené ARsim, přístupová oprávnění a předem definovaná očekávání.
Řečový tah: postupně předat kontext, navrhnout změnu, sestavit projekt a pak samostatně testovat chování. Očekávání z podkladů je, že počítadlo po události vzroste a po resetu bude nula; dokud to neproběhne, jde jen o kritérium, ne výsledek.
Ověřitelný výsledek: autentický výpis buildu a skutečné runtime hodnoty před i po resetu; člověk následně kontroluje změnu a test.
Plán B: pokud není připravený projekt, CLI nebo ARsim, zůstat u tohoto plánu a vysvětlit kontroly. Nepoužívat statické výstupy z ukázkové komponenty jako důkaz.
Přechod: ani úspěšný build a test samy neznamenají bezpečné nasazení.
Zdroj pro přípravu: AI_Event_CZ/Slides/topics/as-agentic-bridge.md; scénář je tam výslovně ilustrační.
-->

---
layout: default
class: ot-slide
---

# Co Bridge nezaručuje

<div class="ot-stage">
<div class="ot-grid cols-2">
  <section class="ot-card is-feature"><div class="ot-neq"><span><mdi-package-variant-closed />Build</span><span class="ot-neq-sign"><mdi-not-equal-variant /></span><span><mdi-play-circle-outline />Runtime test</span></div><p>Sestavitelný projekt ještě nedokazuje očekávané chování.</p></section>
  <section class="ot-card is-feature" style="--accent: var(--flow-blue);"><div class="ot-neq"><span><mdi-file-document-outline />Instrukce</span><span class="ot-neq-sign"><mdi-not-equal-variant /></span><span><mdi-file-lock-outline />Oprávnění</span></div><p>Textová pravidla sama nevynucují přístup ani ochranu dat.</p></section>
  <section class="ot-card is-feature" style="--accent: var(--flow-green);"><div class="ot-neq"><span><mdi-test-tube />Test</span><span class="ot-neq-sign"><mdi-not-equal-variant /></span><span><mdi-rocket-launch-outline />Schválení nasazení</span></div><p>Výsledek platí pro ověřené podmínky a rozsah testu.</p></section>
  <section class="ot-card is-feature" style="--accent: var(--flow-purple);"><div class="ot-neq"><span><mdi-robot-outline />Agent</span><span class="ot-neq-sign"><mdi-not-equal-variant /></span><span><mdi-account-tie-outline />Odpovědnost</span></div><p>Člověk kontroluje změnu, důkazy a rozhoduje o dalším použití.</p></section>
</div>

<div class="ot-callout"><mdi-school-outline /><p>Pro hlubší práci lze navázat workshopem na konkrétní téma.</p></div>
</div>

<!--
Záměr a čas: 1 minuta. Vymezte limity pracovního postupu bez nepodložených produktových slibů.
Počáteční stav: všechny čtyři kontrolní výroky a obecná nabídka workshopu jsou viditelné; bez odhalení.
Řečový tah: build kontroluje sestavení, nikoli automaticky runtime chování. Instrukce pomáhají vést agenta, ale samy nevynucují oprávnění nebo ochranu dat. I po testu člověk posuzuje jeho rozsah, změnu a rozhodnutí o nasazení. Jde o procesní hranice, ne o vyčerpávající seznam produktových limitů.
Workshop nabídnout jako možnost navázat na konkrétní téma; cenu, termín ani obsah nespecifikovat.
Přechod: další příležitostí k hlubšímu setkání je AI & Agentic Engineering Day v Telči.
Zdroj pro přípravu: AI_Event_CZ/Slides/topics/as-repository.md, část „Guardrails“; nabídka workshopu vychází z README zadání.
-->

---
layout: default
class: ot-slide chapter-slide
---

<img class="chapter-image" src="/topics/support-agent/chapter.jpg" alt="">
<div style="position: absolute; top: 457px; left: 0; width: min(335px, 27%); height: 28px; background: var(--br-orange);"></div>

<h1 style="position: absolute; top: 535px; left: 35px; max-width: 1050px;">B&amp;R Support Agent</h1>

<p style="position: absolute; top: 590px; left: 35px; color: var(--steel);">Interní AI asistent pro práci B&amp;R support inženýrů</p>

<!--
Záměr a čas: 30 sekund. Uveďte konkrétní interní nástroj jako příklad AI v práci podpory.
Počáteční stav: obraz, název a podtitul jsou viditelné; nic se neodhaluje.
Řečový tah: nejde o produkt nabízený zákazníkům ani o návod k instalaci. Ukážeme schválenou ukázku rozhraní a pracovní možnosti podpory, ne přístup k nástroji.
Přechod: začít tím, jaké typy dotazů lze z úvodní obrazovky otevřít.
-->

---
layout: default
class: ot-slide
---

<h1>Od dotazu k prvnímu vodítku</h1>
<p class="ot-lead">Asistent nabízí startovní body pro běžná témata B&amp;R automatizace.</p>

<div style="display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 32px; align-items: center; margin-top: 28px;">
  <div>
    <h2 style="margin: 0;">Příklady v rozhraní</h2>
    <div class="ot-row" style="margin-top: 16px;"><span class="ot-icon"><mdi-cog-outline /></span><p>Konfigurace ACOPOS servo drive</p></div>
    <div class="ot-row"><span class="ot-icon"><mdi-file-tree-outline /></span><p>Struktura projektu Automation Studio 6</p></div>
    <div class="ot-row"><span class="ot-icon"><mdi-bug-outline /></span><p>Ladění programu řízení pohybu</p></div>
    <div class="ot-row"><span class="ot-icon"><mdi-forum-outline /></span><p>Hledání v B&amp;R Community</p></div>
    <p class="t-caption" style="margin-top: 16px; color: var(--steel);">Jde o návrhy na úvodní obrazovce, nikoli o skutečné odpovědi nebo doklad vyřešeného případu.</p>
  </div>
  <div class="ot-photo" style="height: 410px;"><img src="/topics/support-agent/support-agent-start-screen.png" alt="Úvodní obrazovka B&amp;R Support Agentu s návrhy témat pro nové dotazy"></div>
</div>

<!--
Záměr a čas: 2 minuty. Ukázkou schváleného screenshotu vysvětlete, jak support inženýr zahájí práci s asistentem.
Počáteční stav: čtyři příklady témat i celý screenshot jsou viditelné; nic se neodhaluje.
Řečový tah: rozhraní nabízí dotazy k ACOPOS servopohonu, struktuře AS6, ladění motion programu a hledání ve fóru. Jsou to pouze předsazené návrhy; screenshot neukazuje konverzaci, správnost odpovědi ani úspěšný výsledek.
Hranice: použít pouze screenshot schválený zadavatelem pro externí prezentaci. Nezobrazovat ani nesdílet přístup, instalátor nebo interní oznámení.
Přechod: přínos pracovního postupu spočívá také v kontextu, který může inženýr předat.
-->

---
layout: default
class: ot-slide
---

<h1>Odpověď získává kontext z více míst</h1>
<p class="ot-lead">K lokální nápovědě lze přidat zkušenosti komunity i konkrétní projekt.</p>

<div class="ot-stage">
<div class="ot-grid cols-3 ot-flow" style="--link-y: 56px;">
  <section class="ot-card is-feature"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-book-open-page-variant-outline /></span><span class="t-caption">DOKUMENTACE</span></div><h2>Help AS4 / AS6</h2><p>Nápověda se indexuje lokálně z vlastní instalace Automation Studia.</p></section>
  <section class="ot-card is-feature" style="--accent: var(--flow-blue);"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-forum-outline /></span><span class="t-caption">KOMUNITA</span></div><h2>B&amp;R Community</h2><p>Odpovědi odkazují také na zkušenosti sdílené ve fóru.</p></section>
  <section class="ot-card is-feature" style="--accent: var(--flow-green);"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-folder-open-outline /></span><span class="t-caption">PROJEKT</span></div><h2>Workspace</h2><p>Inženýr může připojit projekt AS jako kontext pro konkrétnější dotaz.</p></section>
</div>

<div class="ot-callout"><mdi-information-outline /><p>Rozsah odpovědi závisí na dotazu a předaném kontextu; výsledek je nutné ověřit vůči projektu a verzi.</p></div>
</div>

<!--
Záměr a čas: 3 minuty. Vysvětlete tři zdroje kontextu uvedené v interním oznámení Support Agenta.
Počáteční stav: všechny tři zdroje a upozornění jsou viditelné; nic se neodhaluje.
Řečový tah: nápověda AS4/AS6 se indexuje z lokální instalace; nástroj také křížově odkazuje Community a lze mu připojit AS projekt. Nezaměňujte tyto možnosti za garanci úplnosti či správnosti. Volitelnou integraci WorkIQ zde neukazujeme.
Přechod: i s více kontextem zůstává odborné posouzení na člověku.
-->

---
layout: default
class: ot-slide
---

<h1>AI pomáhá hledat. Inženýr rozhoduje.</h1>

<div class="ot-stage">
<div class="ot-grid cols-2">
  <section class="ot-card" style="--accent: var(--flow-blue);">
    <div class="ot-card-head" style="justify-content: flex-start;"><span class="ot-icon"><mdi-robot-outline /></span><h2>Asistent pomáhá</h2></div>
    <div class="ot-row"><span class="ot-icon"><mdi-magnify /></span><p>Dohledat relevantní místa v dokumentaci.</p></div>
    <div class="ot-row"><span class="ot-icon"><mdi-forum-outline /></span><p>Najít související zkušenosti z Community.</p></div>
    <div class="ot-row"><span class="ot-icon"><mdi-folder-search-outline /></span><p>Vztáhnout otázku k připojenému projektu.</p></div>
  </section>
  <section class="ot-card" style="--accent: var(--flow-green);">
    <div class="ot-card-head" style="justify-content: flex-start;"><span class="ot-icon"><mdi-account-check-outline /></span><h2>Inženýr ověřuje</h2></div>
    <div class="ot-row"><span class="ot-icon"><mdi-tag-search-outline /></span><p>Verzi Automation Studia a konfiguraci.</p></div>
    <div class="ot-row"><span class="ot-icon"><mdi-check-decagram-outline /></span><p>Zda podklad odpovídá konkrétnímu případu.</p></div>
    <div class="ot-row"><span class="ot-icon"><mdi-shield-check-outline /></span><p>Jakou odpověď a další krok lze bezpečně doporučit.</p></div>
  </section>
</div>

<div class="ot-callout"><mdi-chart-box-outline /><p>Ukázka popisuje pracovní postup; neobsahuje měření úspory času, přesnosti ani úspěšnosti.</p></div>
</div>

<!--
Záměr a čas: 2:30. Uzavřete téma přínosem v pracovním postupu a jasnou odpovědností inženýra.
Počáteční stav: obě strany rozdělení a upozornění na chybějící metriky jsou viditelné; nic se neodhaluje.
Řečový tah: asistent zjednodušuje dohledání materiálů a práci s kontextem; inženýr dál posuzuje verzi, relevanci, bezpečnost doporučení i další postup. Neuvádět konkrétní úsporu nebo úspěšnost — zdrojové materiály je neměří a screenshot neukazuje výsledek.
Přechod: po příkladu interního nástroje se vraťte k pozvánce na AI & Agentic Engineering Day.
-->

---
layout: default
class: ot-slide
---

# Další akce <span style="color: var(--br-orange);">2026</span>

<div class="ot-stage" style="gap: 32px;">
  <div class="ot-photo" style="height: 320px;"><img src="/topics/ai-management/chapter.jpg" alt="Ilustrační fotografie: dva kolegové spolupracují u počítače"></div>
  <div style="display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 32px; align-items: center;">
    <div>
      <h2 style="margin: 0;">AI & Agentic Engineering Day</h2>
      <div style="display: flex; gap: 40px; margin-top: 12px;">
        <div><p class="t-caption">Datum</p><p class="t-block">4. listopadu 2026</p></div>
        <div><p class="t-caption">Místo</p><p class="t-block">Panský dvůr · Telč</p></div>
      </div>
    </div>
    <div class="ot-row" style="max-width: 340px; border: 0;">
      <span class="ot-icon"><mdi-qrcode /></span>
      <div><p style="font-weight: 700;">Registrace</p><p>Odkaz nebo QR čeká na potvrzení pořadatelem.</p></div>
    </div>
  </div>
</div>

<!--
Záměr a čas: 1:30. Pozvěte publikum na navazující event a stručně zopakujte ověřené údaje.
Počáteční stav: název akce, datum, místo a otevřený registrační údaj; bez odhalení.
Řečový tah: AI & Agentic Engineering Day se podle schváleného banneru a programu koná 4. listopadu 2026 v Panském dvoře v Telči. Registrační adresu ani QR nezobrazujeme, dokud je nepotvrdí pořadatel.
Přechod: poděkovat publiku a případné otázky směřovat k navazujícímu eventu nebo workshopu; bez tvrzení, že rezervované bloky prezentace byly dopracovány.
Otevřená příprava: dodat oficiální URL/QR a banner umístěný v Slides/public. Současná grafika z lokálních podkladů leží mimo tento repozitář a není zde přibalená.
Zdroj pro přípravu: AI_Event_CZ/Slides/slides.md, program 4. 11. 2026; schválený event banner.
-->
