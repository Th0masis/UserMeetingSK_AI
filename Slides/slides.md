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
*Záměr a čas: 30 sekund. Uveďte téma jako cestu od jazykových modelů k ověřitelné práci na automatizačním projektu.*

*Počáteční stav: titul, podtitul a celková plánovaná délka programu; nic se neodhaluje.*

Dnes projdeme cestu od jazykových modelů k agentům, kteří pracují s konkrétním automatizačním projektem. Nebudeme hodnotit jen to, zda odpověď zní přesvědčivě, ale také zda odpovídá projektu a lze ji ověřit.

Nejdřív si ukažme, jak je rozdělený čas.
-->

---
layout: default
class: agenda-slide
---

# Osnova

<div class="talk-agenda">
  <div><i class="ot-icon"><mdi-hand-wave-outline /></i><span>01</span><strong>Úvod</strong></div>
  <div><i class="ot-icon" style="--accent: var(--flow-blue);"><mdi-brain /></i><span>02</span><strong>Základy LLM</strong></div>
  <div><i class="ot-icon" style="--accent: var(--flow-cyan);"><mdi-cog-play-outline /></i><span>03</span><strong>Agentic Engineering</strong></div>
  <div><i class="ot-icon" style="--accent: var(--flow-purple);"><mdi-bridge /></i><span>04</span><strong>Automation Studio Agentic Bridge</strong></div>
  <div><i class="ot-icon" style="--accent: var(--flow-green);"><mdi-face-agent /></i><span>05</span><strong>Support Agent</strong></div>
</div>

<!--
*Záměr a čas: 30 sekund. Orientujte publikum v pěti částech programu.*

*Počáteční stav: všech pět očíslovaných částí programu je viditelných; nic se neodhaluje.*

Začneme úvodem a základy LLM, potom přejdeme k Agentic Engineeringu, Agentic Bridge a Support Agentu. Na závěr pozvu zájemce na AI event v Telči nebo na workshop k vybranému tématu.

Začněme otázkou: podle čeho poznáme, že je návrh AI použitelný?
-->

---
layout: default
class: ot-slide
---

<h1>AI znovu rozevírá rozdíl mezi IT a OT</h1>

<div class="it-ot-gap-slide">
  <div class="it-ot-toolchain" aria-label="Nástroje společné pro IT a OT">
    <strong class="it-ot-toolchain-label">Nástroje se sbližují</strong>
    <div class="it-ot-toolchain-items">
      <span><mdi-source-branch />Git</span>
      <span><mdi-code-braces />VS Code</span>
      <span><mdi-docker />Docker</span>
      <span><mdi-console />CLI</span>
      <span><mdi-api />API</span>
    </div>
  </div>

  <div class="it-ot-gap-grid">
    <div class="it-ot-points">
      <div class="it-ot-point">
        <span class="it-ot-number">01</span>
        <p><strong>Nástroje se sbližují.</strong><span>Automation Studio dnes používáme i ve VS Code a Dockeru.</span></p>
      </div>
      <div class="it-ot-point">
        <span class="it-ot-number">02</span>
        <p><strong>AI náskok IT znovu zvětšuje.</strong><span>Otevřené projekty dávají modelům bohatší kontext i zpětnou vazbu.</span></p>
      </div>
      <div class="it-ot-point">
        <span class="it-ot-number">03</span>
        <p><strong>V OT musíme kontext zpřístupnit.</strong><span>Platformu, know-how stroje, hardware, verze i bezpečnost.</span></p>
      </div>
    </div>

  <div class="it-ot-context" aria-label="Rozdíl v kontextu dostupném pro AI">
    <p class="it-ot-context-title">Z jakého kontextu AI vychází?</p>
    <div class="it-ot-domains">
      <section class="it-ot-domain is-it">
        <div class="it-ot-domain-heading"><mdi-cloud-outline /><strong>IT</strong></div>
        <p>Veřejné projekty<br>Standardní API a CLI<br>Sdílená diagnostika</p>
        <strong class="it-ot-domain-summary">Otevřený ekosystém</strong>
      </section>
      <div class="it-ot-context-link" aria-hidden="true"><span>AI</span><mdi-arrow-left-right /></div>
      <section class="it-ot-domain is-ot">
        <div class="it-ot-domain-heading"><mdi-factory /><strong>OT</strong></div>
        <p>Uzavřená platforma<br>Konkrétní stroj a proces<br>Hardware a bezpečnost</p>
        <strong class="it-ot-domain-summary">Kontext je třeba dodat</strong>
      </section>
    </div>
  </div>
  </div>

  <div class="it-ot-thesis"><p>Úkolem není zavést AI do OT. <strong>Úkolem je zpřístupnit OT pro AI.</strong></p></div>
</div>

<!--
*Záměr a čas: 2 minuty. Vysvětlete, že nástroje IT a OT se sbližují, ale otevřený ekosystém dává AI v IT náskok.*
*Počáteční stav: řádek společných nástrojů, tři tvrzení a srovnání kontextu IT/OT jsou viditelné; nic se neodhaluje.*

Už řadu let se mluví o tom, že se IT a OT budou prolínat. V nástrojích se to skutečně děje: automatizační projekty dnes vyvíjíme i ve VS Code a Dockeru. K cíli ale ještě nejsme.

S nástupem AI se IT znovu vzdaluje. Ne proto, že bychom v OT neměli stejné schopnosti, ale protože vývoj v IT a open source ekosystém postupují velmi rychle. Modely mohou čerpat z rozsáhlého množství veřejných projektů a jejich zavedených nástrojů: verzování, API, CLI i diagnostiky. To jim dává kontext a zpětnou vazbu už přímo ve vývojovém prostředí.

V OT bývá platforma i znalost konkrétního stroje uzavřená. Model sám neví, jak funguje slévací nebo lisovací stroj. Navíc pracujeme s hardwarem, verzemi, dlouhými životními cykly, bezpečností a fyzickými důsledky změn.

Nejde tedy o nedostatek dovedností ani o pouhé zavedení AI do OT. Potřebujeme zpřístupnit OT platformu, projektový a doménový kontext i ověřitelnou zpětnou vazbu.

Největší propast není v tom, zda AI dokáže kód vygenerovat, ale zda má správný kontext a jak výsledek ověříme. Abychom pochopili roli kontextu, podívejme se nejprve, jak jazykový model zpracovává vstup a vytváří odpověď.

*Konečný stav: společné nástroje, rozdílný kontext IT/OT a hlavní sdělení jsou viditelné.*
*Inspirace: slide 11 prezentace EventAiAndDevOps. Obsah přizpůsoben této prezentaci; nejde o garanci produktových funkcí.*
-->

---
layout: default
class: ot-slide chapter-slide
---

<img class="chapter-image" src="/topics/proc-ai/chapter.jpg" alt="" style="position: absolute; top: 0; left: 0; width: 1280px; height: 485px; object-fit: cover;">
<div style="position: absolute; top: 457px; left: 0; width: min(335px, 27%); height: 28px; background: var(--br-orange);"></div>

<h1 style="position: absolute; top: 535px; left: 35px; max-width: 1050px;">Základy LLM</h1>

<!--
*Záměr a čas: 30 sekund. Rozdělte úvod a základní vysvětlení LLM na samostatnou kapitolu.*

Nejprve si ujasníme, jak jazykový model zpracovává vstup a vytváří odpověď.
-->

---
layout: default
class: ot-slide
---

<script setup>
import { ref } from 'vue'

const selectedMechanism = ref(null)
const contextBudget = ref(8)
const generationStep = ref(0)
const promptTokens = [
  { text: 'Customer', key: true }, { text: 'shared' },
  { text: 'logger', key: true }, { text: 'output', key: true },
  { text: 'with' }, { text: 'support', key: true },
  { text: 'engineer', key: true }, { text: '.' }, { text: 'Is' },
  { text: 'trace', key: true }, { text: 'still' },
  { text: 'needed', key: true }, { text: '?' },
]
const vectorDimensions = [
  { name: 'Osoba', before: 0.92, after: 0.54 },
  { name: 'Důkaz', before: 0.16, after: 0.22 },
  { name: 'Diagnóza', before: 0.24, after: 0.28 },
  { name: 'Akce', before: 0.16, after: 0.17 },
]
const contextLabels = ['logger output', 'reviewing', 'trace needed', 'ostatní']
const generationFrames = [
  { weights: [34, 22, 18, 26], words: [], next: 'Prosím' },
  { weights: [26, 18, 30, 26], words: ['Prosím'], next: 'pošlete' },
  { weights: [18, 14, 42, 26], words: ['Prosím', 'pošlete'], next: 'trace' },
  { weights: [18, 14, 42, 26], words: ['Prosím', 'pošlete', 'trace'], next: null },
]
const mechanismTitles = {
  tokens: 'Od věty k dostupnému kontextu',
  attention: 'Významy, váhy a změna vektoru',
  output: 'Kontext se mění s každým dalším tokenem',
}
</script>
<h1>{{ selectedMechanism === null ? 'LLM není kouzelná skříňka' : mechanismTitles[selectedMechanism] }}</h1>
<p v-if="selectedMechanism === null" class="ot-lead">Od rozdělení textu na tokeny přes update jejich reprezentace až po generování odpovědi.</p>
<div class="ot-stage" :class="{ 'ot-mechanism-stage': selectedMechanism !== null }">
<div v-if="selectedMechanism === null" class="ot-grid ot-flow cols-3" style="--link-y: 56px;">
  <button type="button" class="ot-card is-feature ot-mechanism-card" @click="selectedMechanism = 'tokens'"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-text-box-outline /></span><span class="ot-step">01 · TOKENIZACE · OTEVŘÍT DETAIL</span></div><h2>Tokeny a kontext</h2><p>Tokenizer rozdělí vstup na tokeny; model zpracuje prompt i dostupný kontext konverzace.</p><div class="ot-chips"><span class="ot-chip">customer</span><span class="ot-chip">logger</span><span class="ot-chip">support</span><span class="ot-chip">trace</span></div><p class="t-command" style="color: var(--ink);">Prompt → tokenizer → tokeny</p></button>
  <button type="button" class="ot-card is-feature ot-mechanism-card" style="--accent: var(--flow-blue);" @click="selectedMechanism = 'attention'"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-chart-bar /></span><span class="ot-step">02 · TRANSFORMER · OTEVŘÍT DETAIL</span></div><h2>Váha a update</h2><p>Self-attention váží souvislosti a aktualizuje reprezentaci zpracovávaného tokenu.</p><p class="t-caption">Váha pro token „support“ · ilustrace</p><div class="ot-prob" style="--p: 13.7%; --accent: var(--flow-blue);"><span class="t-command">engineer</span><i></i><span class="t-command">13,7 %</span></div><div class="ot-prob" style="--p: 8.3%; --accent: var(--flow-blue);"><span class="t-command">reviewing</span><i></i><span class="t-command">8,3 %</span></div><div class="ot-prob" style="--p: 6.3%; --accent: var(--flow-blue);"><span class="t-command">needed</span><i></i><span class="t-command">6,3 %</span></div></button>
  <button type="button" class="ot-card is-feature ot-mechanism-card" style="--accent: var(--flow-green);" @click="selectedMechanism = 'output'"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-message-text-outline /></span><span class="ot-step">03 · GENEROVÁNÍ · OTEVŘÍT DETAIL</span></div><h2>Výstup: od váženého kontextu k odpovědi</h2><p>Model odhadne další token, přidá ho do kontextu a pokračuje.</p><div class="ot-prob" style="--p: 34%;"><span class="t-command">logger output</span><i></i><span class="t-command">34 %</span></div><div class="ot-prob" style="--p: 22%;"><span class="t-command">reviewing</span><i></i><span class="t-command">22 %</span></div><div class="ot-prob" style="--p: 18%;"><span class="t-command">trace needed</span><i></i><span class="t-command">18 %</span></div><p class="t-command" style="color: var(--ink);">Prosím → pošlete → trace</p></button>
</div>
<section v-else class="ot-mechanism-detail" :data-mechanism="selectedMechanism" aria-label="Grafický detail fungování LLM">
  <div class="ot-mechanism-key" aria-label="Přiřazení diagramu ke kartám">
    <span class="t-caption" :aria-current="selectedMechanism === 'tokens' ? 'step' : null" style="--accent: var(--br-orange);">01 · Tokeny a kontext</span>
    <span class="t-caption" :aria-current="selectedMechanism === 'attention' ? 'step' : null" style="--accent: var(--flow-blue);">02 · Transformer</span>
    <span class="t-caption" :aria-current="selectedMechanism === 'output' ? 'step' : null" style="--accent: var(--flow-green);">03 · Generování odpovědi</span>
  </div>
  <div class="ot-mechanism-toolbar">
  <button type="button" class="ot-mechanism-back" @click="selectedMechanism = null"><mdi-arrow-left /> Zpět na přehled</button>
  <div v-if="selectedMechanism === 'tokens'" class="ot-mechanism-controls" role="group" aria-label="Rozpočet kontextu">
    <span class="t-caption">Rozpočet</span>
    <button v-for="budget in [8, 13]" :key="budget" type="button" :aria-pressed="contextBudget === budget" @click="contextBudget = budget">{{ budget }} tokenů</button>
  </div>
  </div>
  <div v-if="selectedMechanism === 'tokens'" class="ot-token-diagram">
    <p class="ot-mechanism-sentence">Customer shared logger output with support engineer. Is trace still needed?</p>
    <div class="ot-mechanism-direction"><mdi-arrow-down /><span>Rozpad věty · 13 slovních tokenů v této ukázce</span></div>
    <div class="ot-token-stream" aria-label="Tokeny věty podle rozpočtu">
      <span v-for="(token, index) in promptTokens" :key="index" class="ot-token" :class="{ 'is-key': token.key, 'is-outside': index < promptTokens.length - contextBudget }" :data-in-context="index >= promptTokens.length - contextBudget"><small>{{ index + 1 }}</small>{{ token.text }}</span>
    </div>
    <div class="ot-context-window">
      <div class="ot-mechanism-toolbar"><h2>V kontextu zůstává</h2><strong class="ot-context-count">{{ contextBudget }} / {{ promptTokens.length }}</strong></div>
      <div class="ot-context-meter"><i :style="{ width: `${contextBudget / promptTokens.length * 100}%` }"></i></div>
      <div class="ot-chips"><span v-for="(token, index) in promptTokens.slice(-contextBudget)" :key="index" class="ot-chip" :class="{ 'is-key': token.key }">{{ token.text }}</span></div>
    </div>
    <p class="t-caption"><strong>Oranžově: významová vodítka.</strong> Limit nevybírá důležitá slova; zde pro ilustraci ponecháváme konec věty.</p>
  </div>
  <div v-else-if="selectedMechanism === 'attention'" class="ot-mechanism-columns">
    <section class="ot-mechanism-panel"><h2>1 · Podobné významy</h2>
      <div class="ot-chips"><span class="ot-chip">customer · support</span><span class="ot-chip is-key">logger · trace</span></div>
      <svg class="ot-vector-map" viewBox="0 0 340 230" role="img" aria-label="Zjednodušené vektory: customer a support leží blízko v dimenzi Osoba; logger a trace v dimenzi Důkaz.">
        <path d="M30 185H325M30 185V15" class="ot-vector-axis" />
        <path d="M30 185L267 157M30 185L257 160" class="ot-vector-person" />
        <path d="M30 185L59 39M30 185L54 51" class="ot-vector-evidence" />
        <circle cx="267" cy="157" r="5" fill="var(--ink)" /><circle cx="257" cy="160" r="5" fill="var(--flow-blue)" />
        <circle cx="59" cy="39" r="5" fill="var(--br-orange)" /><circle cx="54" cy="51" r="5" fill="var(--br-orange)" />
        <text x="220" y="140">customer</text><text x="225" y="183">support</text><text x="72" y="37">logger</text><text x="72" y="61">trace</text>
        <text x="270" y="218">Osoba</text><text x="4" y="14">Důkaz</text>
      </svg>
      <p class="t-caption">Embedding = vektor. Blízkost zachycuje podobnost, ještě ne konkrétní roli.</p>
    </section>
    <section class="ot-mechanism-panel"><h2>2 · Kam míří váha</h2>
      <div class="ot-mechanism-focus">support <mdi-arrow-right /></div>
      <div class="ot-attention-row"><strong>engineer</strong><span>13,7 %</span><div><i style="width: 13.7%;"></i></div></div>
      <div class="ot-attention-row"><strong>reviewing</strong><span>8,3 %</span><div><i style="width: 8.3%;"></i></div></div>
      <div class="ot-attention-row"><strong>needed</strong><span>6,3 %</span><div><i style="width: 6.3%;"></i></div></div>
      <p class="t-caption">Nejsilnější vazby jedné ukázkové vrstvy. Zbytek váhy míří na další tokeny.</p>
    </section>
    <section class="ot-mechanism-panel"><h2>3 · Update vektoru</h2>
      <div class="ot-vector-row t-caption"><span>support</span><span>Před</span><span>Po</span></div>
      <div v-for="dimension in vectorDimensions" :key="dimension.name" class="ot-vector-row">
        <span>{{ dimension.name }}</span><div><b>{{ dimension.before.toFixed(2) }}</b><i :style="{ width: `${dimension.before * 100}%` }"></i></div><div class="is-updated"><b>{{ dimension.after.toFixed(2) }}</b><i :style="{ width: `${dimension.after * 100}%` }"></i></div>
      </div>
      <p class="t-caption">Méně obecná „osoba“, více role spojené s důkazem a diagnózou.</p>
    </section>
  </div>
  <div v-else class="ot-generation-diagram">
    <div class="ot-mechanism-columns">
      <section class="ot-mechanism-panel"><h2>1 · Dostupný kontext</h2>
        <div class="ot-context-stack"><span class="ot-chip">logger output</span><span class="ot-chip">support engineer</span><span class="ot-chip">trace still needed</span></div>
        <div class="ot-mechanism-direction"><mdi-arrow-down /><span>+ dosavadní odpověď</span></div>
        <div class="ot-generated-context" aria-live="polite"><span v-if="generationFrames[generationStep].words.length === 0" class="t-caption">Zatím prázdná</span><span v-for="word in generationFrames[generationStep].words" :key="word" class="ot-chip is-key">{{ word }}</span></div>
      </section>
      <section class="ot-mechanism-panel"><h2>2 · Nové váhy</h2>
        <div v-for="(weight, index) in generationFrames[generationStep].weights" :key="contextLabels[index]" class="ot-attention-row" :data-weight="weight"><strong>{{ contextLabels[index] }}</strong><span>{{ weight }} %</span><div><i :style="{ width: `${weight}%` }"></i></div></div>
        <p class="t-caption">S přidanými tokeny se vážený pohled znovu přepočítá.</p>
      </section>
      <section class="ot-mechanism-panel"><h2>3 · Další token</h2>
        <div class="ot-next-token" aria-live="polite">{{ generationFrames[generationStep].next ?? 'Hotovo' }}</div>
        <div class="ot-mechanism-direction"><mdi-arrow-down /><span>Připojit k odpovědi</span></div>
        <p class="ot-generation-answer" aria-live="polite">{{ generationFrames[generationStep].words.join(' ') || '…' }}</p>
      </section>
    </div>
    <div class="ot-generation-controls ot-mechanism-controls">
      <button type="button" @click="generationStep = 0" :disabled="generationStep === 0">Od začátku</button>
      <span class="t-caption">Krok {{ generationStep }} / 3</span>
      <button type="button" @click="generationStep++" :disabled="generationStep === 3">Přidat token <mdi-arrow-right /></button>
    </div>
  </div>
  <p class="t-caption">Zjednodušená výuková ilustrace: slovní tokeny, pojmenované dimenze i změny vah nejsou měřením skutečného LLM.</p>
</section>
</div>

<!--
*Záměr a čas: přibližně 4 minuty včetně tří grafických detailů.*
*Mapa interakcí: zpočátku jsou vidět všechny tři karty. Nejsou zde sekvenční v-click odhalení. Karta otevře detail; barevné pruhy nad ním označují fáze a zvýrazněný název aktuální kartu. Rozpočet má stavy 8 a 13 tokenů, generování kroky 0 až 3. „Zpět na přehled“ zachovává stav. Před opakováním ukázky nastavte 8 tokenů a generování vraťte tlačítkem „Od začátku“. Konečný stav výkladu: návrat ke třem kartám. Pokyny v hranatých závorkách se nečtou nahlas.*

Než se pustíme do agentů, pojďme si jednoduše ukázat, co se děje uvnitř jazykového modelu. Není to kouzelná skříňka, která najednou vymyslí celou odpověď. Projdeme tři kroky: oranžově vstup a kontext, modře práci se souvislostmi a zeleně vznik odpovědi. Stejné barvy najdete i v detailech.

*[Otevřít oranžovou kartu Tokeny a kontext; rozpočet 8.]*

Máme zákazníka, který poslal logger podpoře a ptá se, zda je ještě potřeba trace. Model ale nepracuje přímo s větou tak, jak ji čteme my. Tokenizer ji převede na menší části, tokeny. Pro přehlednost tu používáme slova a interpunkci; skutečný tokenizer může jedno slovo rozdělit i na několik částí.

Teď máme třináct těchto výukových tokenů, ale rozpočet jen osm. V této ukázce ponecháváme konec věty. Podívejte se na přeškrtnutý začátek: vypadl zákazník i informace o loggeru. To jsou přitom důležité údaje. Limit kontextu tedy neznamená, že se automaticky vyberou nejdůležitější slova. Oranžově jsme významová vodítka zvýraznili my, abychom se v příkladu lépe orientovali.

*[Přepnout rozpočet na 13 tokenů.]*

S větším rozpočtem se vejde celý vstup. To je první praktická věc: model může pracovat jen s tím, co má skutečně k dispozici. A do kontextu nepatří jen naše poslední věta, ale také historie, instrukce nebo dodané podklady.

*[Zpět na přehled; otevřít modrou kartu Transformer.]*

Teď už máme text uvnitř modelu. Každý token dostane číselnou reprezentaci, vektor. Vlevo je zjednodušená mapa: customer a support mají blízko k osobám, logger a trace k důkazům. Osy jsme pojmenovali pro výuku; skutečný model nemá takto jednoduše popsané přihrádky.

Samotná podobnost ale ještě neříká, kdo v našem příběhu co dělá. Proto se podívejme doprostřed na token support. Attention propojuje jeho reprezentaci s dalšími tokeny. Tady má nejsilnější zobrazenou vazbu na engineer, potom reviewing a needed. Díky souvislostem se upřesňuje, že jde o podporu, která něco kontroluje a rozhoduje o potřebě dalšího důkazu.

Vpravo vidíte výsledek jedné takové aktualizace: vektor před a po vrstvě. V našem výukovém příkladu slábne obecný signál osoby a trochu sílí důkaz a diagnóza. Nejde o přepis slova, ale o změnu jeho reprezentace v daném kontextu. Skutečný transformer takových operací dělá mnoho, v mnoha vrstvách. Tato čísla jsou ilustrace, ne měření konkrétního modelu.

*[Zpět na přehled; otevřít zelenou kartu Generování. Je-li potřeba, stisknout „Od začátku“.]*

A teď z tohoto kontextu vzniká odpověď. Vlevo máme dostupné podklady, uprostřed jejich ilustrační váhy a vpravo další navržený token. Na začátku je odpověď prázdná a dalším tokenem je Prosím.

*[Stisknout „Přidat token“ jednou.]*

Prosím se připojilo k odpovědi a zároveň se stalo součástí kontextu pro další krok. Všimněte si, že se změnily i prostřední pruhy. Dalším tokenem je teď pošlete.

*[Stisknout „Přidat token“ podruhé.]*

Teď už model pokračuje za textem Prosím pošlete. Znovu pracuje s rozšířeným kontextem a dalším tokenem je trace.

*[Stisknout „Přidat token“ potřetí.]*

Takto postupně vzniklo Prosím pošlete trace. Tady ukázku zastavujeme. Skutečný model by mohl pokračovat dál až k ukončení odpovědi. Prostřední procenta jsou ručně sestavené váhy pro názornost, ne pravděpodobnosti správnosti ani skutečný záznam výpočtu modelu.

Podstatná je ta smyčka: další token se přidá k dosavadnímu textu a ovlivní následující krok. Model nepíše odpověď celou najednou. A to, že takto vzniklá věta zní přesvědčivě, ještě neověřuje její pravdivost.

*[Zpět na přehled.]*

Zapamatujme si tedy tři věci: co se do kontextu nedostane, s tím model nemůže pracovat; souvislosti mění reprezentaci tokenů; a odpověď vzniká postupně. Na dalším slidu si ukážeme, jak postup agenta vedeme instrukcemi, skills a kontextem a jak výsledek ověřujeme.
-->

---
layout: default
class: ot-slide agent-stability-slide
---

<h1>Pravděpodobnostní návrhy, ověřitelné kontroly</h1>
<p class="ot-lead">Stejný text negarantujeme. Vedeme záměr a ověřujeme výsledek.</p>

<div class="ot-stage agent-stability-stage">
  <div class="ot-grid cols-2 agent-stability-contrast">
    <section>
      <h2>Agent tvoří pravděpodobný návrh</h2>
      <ul>
        <li>Stejný prompt může přinést různé výsledky.</li>
        <li><strong>Instrukce, skills a relevantní kontext</strong> vedou jeho postup.</li>
        <li>Jistý tón sám o sobě není důkaz.</li>
      </ul>
    </section>
    <section>
      <h2>Nástroje dávají ověřitelný signál</h2>
      <ul>
        <li>Build, test a kontrola schématu vrací konkrétní výsledek.</li>
        <li>Chyby a stav kontroly lze předat zpět agentovi.</li>
        <li>Kontrolní kritérium určíme předem.</li>
      </ul>
    </section>
  </div>

  <div class="ot-grid cols-4 ot-flow agent-stability-loop">
    <section class="ot-card"><span class="ot-icon"><mdi-bullseye-arrow /></span><h3>Cíl a kontext</h3><p>Instrukce · skills · projekt</p></section>
    <section class="ot-card" style="--accent: var(--flow-blue);"><span class="ot-icon"><mdi-lightbulb-on-outline /></span><h3>Návrh agenta</h3><p>Pravděpodobný další krok</p></section>
    <section class="ot-card" style="--accent: var(--flow-green);"><span class="ot-icon"><mdi-test-tube /></span><h3>Spustit kontrolu</h3><p>Build · test · schéma</p></section>
    <section class="ot-card" style="--accent: var(--flow-amber);"><span class="ot-icon"><mdi-backup-restore /></span><h3>Vrátit a opakovat</h3><p>Chyba do kontextu; člověk posoudí výsledek</p></section>
  </div>

  <div class="ot-callout agent-stability-principle">
    <mdi-link-variant />
    <p><strong>Instrukce a skills vedou práci. Kontext ji zpřesní. Testy ověřují výsledek.</strong></p>
  </div>
</div>

<!--
*Záměr a čas: 2 minuty. Ukažte, jak vedeme postup agenta a ověřujeme jeho výstup, aniž bychom slibovali totožný text.*
*Počáteční stav: rozdíl mezi pravděpodobným návrhem a ověřitelnými kontrolami, všechny čtyři kroky smyčky i závěrečný princip jsou viditelné; nic se neodhaluje.*

Instrukce určují pravidla práce, skills přidávají oborový postup a relevantní projektový kontext zpřesňuje zadání. Tím vedeme záměr a postup, negarantujeme totožnou odpověď.

Build, test nebo kontrola schématu vrací konkrétní signál. Při neúspěchu agent dostane chybu zpět do kontextu a může připravit další změnu. Člověk určuje cíl, vybírá kritéria a přijímá výsledek.

*Konečný stav: rozlišené vedení modelu (instrukce, skills, kontext) a ověřování výstupu (nástroje, testy, lidské rozhodnutí).*

Teď uvidíme, proč ani vyhledání v dokumentaci nezaručuje správnou odpověď.
-->

---
layout: default
class: ot-slide support-chat-slide
---

<h1>Od vágní otázky k ověření</h1>
<p class="ot-lead">Dva samostatné chaty ze screenshotů. Hledání ani přesnější dotaz nepotvrzují podporu HW.</p>

<div class="ot-stage ot-chat-stage">
  <div class="ot-grid cols-2 support-chat-comparison">
    <section class="ot-chat" aria-label="Chat s otázkou na C30 a následnou námitkou">
      <header class="ot-chat-header"><mdi-chat-outline /><strong>B&amp;R Support Agent</strong><span class="t-caption">konverzace</span></header>
      <div class="ot-chat-body">
        <div class="ot-chat-user"><span class="ot-chat-author">Vy</span><p>Je v AS6 podporován C30?</p></div>
        <div v-click="1" class="ot-chat-agent support-chat-first-answer">
          <span class="ot-chat-author"><img src="/br-template-logo.svg" alt="">B&amp;R Support Agent</span>
          <details class="ot-chat-tool" @click.stop @keydown.stop><summary>as-help-6 / Search help <span>10 výsledků</span></summary><p>Počet výsledků závěr nepotvrzuje.</p></details>
          <p>Výborně! <strong>Ano, C30 je v Automation Studio 6 podporován.</strong></p>
        </div>
        <div v-click="2" class="ot-chat-user support-chat-objection"><span class="ot-chat-author">Vy</span><p>Jak to, že je podporovaný? V Helpu je C30 uveden mezi HW, který podporovaný není.</p></div>
        <div class="ot-chat-agent">
          <span v-click="3" class="ot-chat-author"><img src="/br-template-logo.svg" alt="">B&amp;R Support Agent</span>
          <div v-click="3" class="ot-chat-tools support-chat-tools">
            <details class="ot-chat-tool" @click.stop @keydown.stop><summary>as-help-6 / Search help <span>10 výsledků</span></summary><p>Argumenty hledání nejsou na screenshotu vidět.</p></details>
            <details class="ot-chat-tool" @click.stop @keydown.stop><summary>as-help-6 / Get page by id <span>3 breadcrumb</span></summary><p>Breadcrumb je údaj rozhraní, ne potvrzení.</p></details>
          </div>
          <p v-click="3">Máte pravdu, omlouvám se. Ověřím podporu HW.</p>
        </div>
      </div>
    </section>
    <section class="ot-chat support-chat-specific" aria-label="Samostatný konkrétnější dotaz">
      <header class="ot-chat-header"><mdi-chat-outline /><strong>Konkrétnější dotaz</strong><span class="t-caption">samostatný chat</span></header>
      <div class="ot-chat-body">
        <div v-click="4" class="ot-chat-user"><span class="ot-chat-author">Vy</span><p>Jsou 4PPC30.xxx a 4PPC70.xxx podporovány v Automation Studio 6?</p></div>
        <div v-click="4" class="ot-chat-agent">
          <span class="ot-chat-author"><img src="/br-template-logo.svg" alt="">AI asistent</span>
          <p><strong>Obě řady jsou podporovány…</strong><br>Některé varianty 4PPC70 ale již nejsou podporované v AS 6.x.</p>
        </div>
      </div>
    </section>
  </div>
</div>

<!--
*Záměr a čas: 3:30 minuty. Spojte obecný dotaz, námitku z dokumentace a samostatný konkrétnější prompt do jedné ukázky hranic odpovědi agenta.*
*Počáteční stav: úvodní C30 dotaz v levém chatu a hlavičky obou chatů. Skupina 1 odhalí první hledání i příliš širokou odpověď. Skupina 2 odhalí námitku uživatele. Skupina 3 současně odhalí další hledání, načtení stránky a omluvu. Skupina 4 odhalí zprávy v samostatném chatu s konkrétnějším dotazem. Tři záznamy nástrojů lze rozbalit bez posunu slidu. Konečný stav obsahuje oba průběhy; výsledky zůstávají neověřené.*

[CLICK]

Nejprve vágní dotaz: „Je v AS6 podporován C30?“
[CLICK]

Agent prohledal Help a odpověděl sebejistým „ano“. Volání nástroje i počet výsledků ukazují, že hledal; nedokazují, že závěr správně vyložil.
[CLICK]

Uživatel namítá, že Help uvádí C30 mezi nepodporovanými. Následuje další hledání a načtení stránky. Počet výsledků ani breadcrumb nejsou nezávislým potvrzením závěru. Asistent se omluví, ale ve screenshotu ověřený verdikt chybí.

*[Otevřete postupně tři záznamy Search help / Get page by id a znovu je zavřete. Neodvozujte z nich argumenty ani obsah stránky, které screenshot neukazuje.]*
[CLICK]

V samostatném chatu se uživatel ptá konkrétněji na řady 4PPC30 a 4PPC70. Odpověď zmiňuje výjimky, ale sama nedokládá podporu konkrétního objednacího čísla ani verze.

*Konečný stav: vidět je první odpověď i její oprava po námitce a samostatný konkrétnější dotaz. Hledání ani konkrétnější prompt samy o sobě nepotvrzují technický fakt.*

Zprávy pocházejí ze dvou samostatných chatů; nejde o jeden souvislý běh ani kontrolovaný experiment. Odpovědi jsou ilustrací nutnosti ověření, ne zdrojem pravdy.
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
*Záměr a čas: 2 minuty. Vysvětlete posun rozsahu práce, nikoli žebříček kvality nástrojů.*
*Počáteční stav: titulek, podtitul a ilustrace vývoje; tři stupně vpravo jsou skryté. Ilustrace je obecná metafora, nikoli srovnání konkrétních produktů.*

[CLICK]

Autocomplete navrhne další řádek nebo blok a vývojář rozhoduje o každém dalším kroku.
[CLICK]

Chatový asistent odpoví nebo připraví ukázku, kterou člověk sám přenese do projektu.
[CLICK]

Agent může pracovat s poskytnutým kontextem projektu, plánovat změny a volat povolené nástroje. Konkrétní rozsah závisí na prostředí a oprávněních.

*Konečný stav: všechny tři stupně jsou viditelné; člověk dál stanovuje cíl a posuzuje výsledek.*

Taková spolupráce má smysl, když máme jasná kritéria a ověřování.
*Zdroj pro přípravu: agentic-bridge/slides/s1/03-evolution.js.*
-->

---
layout: default
class: ot-slide chapter-slide
---

<img class="chapter-image" src="/topics/agentic-engineering/chapter.jpg" alt="" style="position: absolute; top: 0; left: 0; width: 1280px; height: 485px; object-fit: cover;">
<div style="position: absolute; top: 457px; left: 0; width: min(335px, 27%); height: 28px; background: var(--br-orange);"></div>

<h1 style="position: absolute; top: 535px; left: 35px; max-width: 1050px;">Agentic Engineering</h1>

<!--
*Záměr a čas: 30 sekund. Zahajte část Agentic Engineering a připravte publikum na porovnání stylů práce.*
*Počáteční stav: obraz a název kapitoly jsou viditelné; nic se neodhaluje.*

Začíná část o Agentic Engineeringu. Nejprve rozlišíme neformální práci s AI od řízeného workflow, potom projdeme samotnou pracovní smyčku.
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
*Záměr a čas: 2 minuty. Srovnávejte pracovní postupy bez zesměšňování neformálního přístupu.*
*Počáteční stav: titulek, vysvětlení, záhlaví obou přístupů a závěrečné upozornění; tři řádky srovnání jsou skryté.*

[CLICK]

V prvním řádku je rozdíl v řízení dalších kroků: člověk je může zadávat jednotlivě, zatímco agent může provádět ty, které mu prostředí povolí.
[CLICK]

Druhý řádek porovnává kontext dodávaný v dialogu s kontextem projektu, který má agent skutečně k dispozici.
[CLICK]

Ve třetím řádku porovnáváme ruční spouštění kontrol s možností, aby agent spustil ty povolené. Vibe coding a Agentic Engineering nejsou pevné kategorie: o vhodnosti pro produkci rozhoduje ověření a lidské review, ne nálepka.

*Konečný stav: všechny tři dvojice jsou viditelné.*

Teď tyto kroky propojíme do jedné pracovní smyčky.
*Zdroj pro přípravu: agentic-bridge/slides/s1/04-agentic-engineering.js; [B&R Community: Vibe Coding vs. Agentic Engineering](https://community.br-automation.com/t/vibe-coding-vs-agentic-engineering-what-is-the-difference/12094).*
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
*Záměr a čas: 3 minuty. Projděte řízenou smyčku a odlište Verify od Test.*
*Počáteční stav: titulek, pořadí kroků v podtitulu; podrobnosti jsou skryté.*

[CLICK]

Nejprve vymezíme cíl, rozsah a postup. Člověk může plán schválit ještě před změnou.
[CLICK]

Potom agent provede změnu v projektu.
[CLICK]

Ve fázi Verify kontrolujeme sestavení a konfiguraci. Tím ověříme technickou konzistenci, ne ještě očekávané chování.
[CLICK]

Test prověřuje očekávané chování. Výsledek nebo chyba se vrací do kontextu agenta k dalšímu kroku.
[CLICK]

Nakonec člověk posoudí změnu i důkazy z kontrol. Build, test a lidské review odpovídají na různé otázky.

*Konečný stav: viditelný je celý tok včetně návratu chyby či výsledku testu a lidského review.*

Aby taková smyčka fungovala, potřebuje odborné znalosti, skutečný projekt a jasné kontrolní hranice.
*Zdroj pro přípravu: agentic-bridge/slides/s2/07-agent-workflows.js a s5/11-full-loop.js.*
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
*Záměr a čas: 3 minuty. Ukažte, co musí být přítomno, aby agent mohl užitečně pracovat na skutečném B&R projektu; nic z toho samo nezaručuje správnost.*
*Počáteční stav: titulek, stručné sdělení a pravý panel kontraktu READ → CHANGE → VERIFY jsou viditelné; pět předpokladů vlevo a závěrečná syntéza jsou skryté.*

[CLICK]

Začněme doménovou znalostí: agent musí rozumět B&R platformě i specifikům projektu výrobce stroje.
[CLICK]

Dále potřebuje skutečný projektový kontext: programy, konfiguraci, hardware, verze a závislosti.
[CLICK]

Source control umožňuje změny dohledat, porovnat a případně vrátit.
[CLICK]

Nástroje mohou zpřístupnit build, diagnostiku nebo testy, ale jejich rozsah závisí na konkrétním prostředí.
[CLICK]

Guardrails vymezují rozsah změn, ochranu dat a schvalování člověkem. Samotná textová instrukce ale bezpečnostní hranici technicky nevynucuje.
[CLICK]

Když se spojí kontext, kontrola a zpětná vazba, může agent pracovat na konkrétním inženýrském úkolu, ne jen odpovídat obecně.

*Konečný stav: viditelných je všech pět předpokladů, celý kontrakt i shrnující princip.*

Pojďme si rozdělit, které vrstvy tyto funkce dodávají.
*Inspirace: slide 11 prezentace EventAiAndDevOps. Obsah přizpůsoben této prezentaci; nejde o garanci produktových funkcí.*
*Zdroj pro postup: AI_Event_CZ/Slides/topics/as-repository.md, část „Od požadavku k ověřené změně“.*
-->

---
layout: default
class: ot-slide agent-layers-slide
---

# Model, harness, tools a skills
<p class="ot-lead">Čtyři vrstvy agentního prostředí — a kdo je dodává.</p>

<div class="ot-stage agent-layers-stage">
  <table class="ot-table agent-layers-table">
    <colgroup><col><col><col><col></colgroup>
    <thead><tr><th>Vrstva</th><th>Co to je</th><th>Kdo to dodává</th><th>Příspěvek B&amp;R</th></tr></thead>
    <tbody>
      <tr v-click="1"><th scope="row">LLM</th><td>Jazykový model, který uvažuje a píše.</td><td>OpenAI · Anthropic · Google · Mistral · DeepSeek · Qwen · …</td><td>—</td></tr>
      <tr v-click="2"><th scope="row">Harness</th><td>Aplikace agenta: kontext, nástroje, schvalování.</td><td>GitHub Copilot · Claude Code · Codex · Cursor · OpenCode · …</td><td>—</td></tr>
      <tr v-click="3"><th scope="row">Nástroje</th><td>MCP servery · CLI nástroje · jazykové servery (LSP).</td><td>B&amp;R · dodavatelé harnessů · komunita</td><td>as-cli · B&amp;R MCP Server (RAG) · jazykový server Structured Text</td></tr>
      <tr v-click="4"><th scope="row">Přizpůsobení</th><td>Agents · AGENTS.md · skills · příkazy · plugins.</td><td>B&amp;R · váš tým · komunita</td><td>Skills, agenti a šablony projektů Automation Studio dodávané jako plugins</td></tr>
    </tbody>
  </table>
  <div v-click="5" class="ot-callout agent-layers-promise">
    <div><strong>Agentic Bridge slibuje</strong><p>Používáte harness dle vlastního výběru. Zajistíme, aby s Automation Studio fungoval.</p></div>
  </div>
</div>

<!--
*Záměr a čas: 2 minuty. Rozlište role i dodavatele jednotlivých vrstev; Bridge je příspěvek B&R nad touto skladbou.*
*Mapa odhalování: před prvním klikem viditelné jsou nadpis, popis a hlavička tabulky. Skupiny 1–4 odhalují po jednom řádku: LLM, harness, nástroje, přizpůsobení. Skupina 5 odhalí spodní sdělení Bridge. Konečný stav: tabulka čtyř vrstev, dodavatelů i příspěvku B&R a spodní sdělení.*

[CLICK]

Jazykový model vytváří návrh. Uvedení dodavatelé jsou příklady, nikoli úplný seznam ani doporučení.
[CLICK]

Harness řídí běh agenta, například dostupný kontext, nástroje a schvalování. Uvedená prostředí nejsou automaticky zaměnitelná.
[CLICK]

Nástroje mohou být MCP servery, příkazové nástroje nebo jazykové servery. MCP je způsob propojení, ne další druh nástroje.
[CLICK]

Přizpůsobení mohou dodat B&R, vlastní tým i komunita. Skills popisují pracovní postupy, ale samy o sobě neudělují bezpečnostní oprávnění.
[CLICK]

Agentic Bridge má propojit Automation Studio s harnessy podle volby zákazníka. Rozsah podpory závisí na konfiguraci; neznamená to, že každý harness funguje bez integrace.

Jak může kombinace těchto vrstev zlepšit opakovatelnost, aniž bychom slibovali totožný text?
*Zdroj pro přípravu: agentic-bridge/slides/s1/05-who-offers-what.js, s3/02-mcp.js a s4/07-skills-what.js.*
-->

---
layout: default
class: ot-slide chapter-slide
---

<img class="chapter-image" src="/topics/as-agentic-bridge/chapter.jpg" alt="" style="position: absolute; top: 0; left: 0; width: 1280px; height: 485px; object-fit: cover;">
<div style="position: absolute; top: 457px; left: 0; width: min(335px, 27%); height: 28px; background: var(--br-orange);"></div>

<h1 style="position: absolute; top: 535px; left: 35px; max-width: 1050px;">Automation Studio Agentic Bridge</h1>

<!--
*Záměr a čas: 30 sekund. Uveďte novou kapitolu bez opakování jejího obsahu.*
*Počáteční stav: název a existující tematický obraz; nic se neodhaluje.*

Po obecném agentním workflow se teď podíváme na Automation Studio Agentic Bridge. Na následujícím slidu si představíme jeho tři části.
*Zdroj pro přípravu: AI_Event_CZ/Slides/topics/as-agentic-bridge.md, architektura Bridge.*
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
*Záměr a čas: 1 minuta. Pojmenujte části Bridge jejich skutečnými názvy; role jsou vysvětlení pod názvy.*
*Počáteční stav: agent s vybraným modelem a harness plus projekt Automation Studio; tři části jsou skryté.*

[CLICK]

Knowledge Hub dohledává odborné podklady a vrací je se zdroji. Jejich relevanci je třeba posoudit pro konkrétní dotaz a verzi.
[CLICK]

AS Repository dodává instrukce, skills a pracovní postup pro projekt. Nejde o nový jazykový model.
[CLICK]

AS CLI zpřístupňuje podporované operace a vrací jejich výsledky. Dostupnost závisí na konkrétním prostředí.

*Konečný stav: všechny tři části jsou zobrazené mezi agentem a projektem; diagram neslibuje stejnou dostupnost ve všech instalacích.*

Začněme znalostní částí a rozlišme propojení MCP od vyhledávání RAG.
*Zdroj pro přípravu: AI_Event_CZ/Slides/topics/as-agentic-bridge.md, „Agentic Bridge: tři propojené části“.*
-->

---
layout: default
class: ot-slide knowledge-hub-slide
---

<h1>Knowledge Hub: odborné podklady se zdrojem</h1>
<p class="ot-lead">Online vyhledávání technologických znalostí B&amp;R · MCP propojuje, RAG dohledává podklady.</p>

<div class="ot-grid ot-flow is-nodes" style="grid-template-columns: repeat(6, minmax(0, 1fr)); margin-top: 28px;">
  <section class="ot-node"><span class="ot-icon"><mdi-account-question-outline /></span><p style="font-weight: 700;">Dotaz</p><p>Otázka uživatele</p></section>
  <section class="ot-node"><span class="ot-icon"><mdi-robot-outline /></span><p style="font-weight: 700;">Agent</p><p>Rozhodne, co dohledat</p></section>
  <section class="ot-node has-example" data-example="mcp">
    <span class="ot-icon" tabindex="0" aria-label="Příklad MCP volání" aria-describedby="mcp-example" style="--accent: var(--flow-green);"><mdi-connection /></span>
    <p style="font-weight: 700;">MCP nástroj</p><p>Předá požadavek službě</p>
    <div id="mcp-example" class="ot-node-example" role="tooltip">
      <p class="t-caption"><strong>Ukázka argumentů MCP volání</strong></p>
      <p class="t-caption"><span class="t-command">bnr_knowledge_base_rag</span></p>
      <pre class="t-command"><code>{
  "query": "X20 PLC starts in SERVICE after transfer to project causes possible reasons",
  "top_k": 5,
  "include_images": false
}</code></pre>
      <p class="t-caption">Hodnoty z dodaného snímku, nikoli živé volání.</p>
    </div>
  </section>
  <section class="ot-node has-example" data-example="rag">
    <span class="ot-icon" tabindex="0" aria-label="Příklad pasáží nalezených pomocí RAG" aria-describedby="rag-example" style="--accent: var(--flow-blue);"><mdi-database-search-outline /></span>
    <p style="font-weight: 700;">RAG</p><p>Vyhledá podklady</p>
    <div id="rag-example" class="ot-node-example" role="tooltip">
      <p class="t-caption"><strong>Ukázka vyhledaných pasáží, ne hotové odpovědi</strong></p>
      <p class="t-caption"><strong>Source 2 · Rebuilding the active configuration</strong><br>Relevantní k transferu: před přenosem projektu má být PLC přepnuto do HALT režimu, zde kvůli sdíleným globálním proměnným ve více taskech.</p>
      <p class="t-caption"><strong>Source 1 · The axis isn't ready for power on anymore</strong><br>Chyba osy sama nedokládá příčinu SERVICE na CPU.</p>
      <p class="t-caption">Příklad z dodaného snímku vyhledávání; ne živý výsledek ani diagnóza.</p>
    </div>
  </section>
  <section class="ot-node"><span class="ot-icon" style="--accent: var(--flow-blue);"><mdi-file-document-multiple-outline /></span><p style="font-weight: 700;">Zdroje</p><p>Vrátí se do kontextu agenta</p></section>
  <section class="ot-node"><span class="ot-icon"><mdi-account-check-outline /></span><p style="font-weight: 700;">Odpověď</p><p>Posoudí ji člověk</p></section>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 78px;">
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

<p class="t-caption" style="margin-top: 20px; color: var(--steel);">V produkci od červnového vydání Automation Studio Code · aktualizace čtvrtletně</p>
<p class="t-caption" style="margin-top: 4px;"><strong>V plánu :</strong> SAP support tickety</p>

<!--
*Záměr a čas: 2 minuty. Vysvětlete tok dotazu, roli MCP a RAG, zdroje služby a provozní hranice.*
*Počáteční stav: celý statický tok, seznam zdrojů, ilustrativní dotaz a omezení jsou viditelné; detaily MCP a RAG jsou zavřené. Hover nebo fokus na jejich ikoně otevře příklad.*

Agent rozhodne, co potřebuje dohledat. MCP předá požadavek službě a RAG vyhledá podklady, které se zdroji vrátí do kontextu. Agent připraví odpověď, ale člověk stále posuzuje relevanci i verzi. MCP je rozhraní pro propojení, nikoli vyhledávač. Příklad s X20, který po přenosu startuje do SERVICE místo RUN, je pouze ilustrativní otázka ze školení, ne živé hledání ani ověřený diagnostický postup.

*Zdroje a hranice: k dispozici jsou Automation Help, B&R Community, informace o verzích a schválený interní zdrojový kód; nejde o libovolný interní nebo zákaznický kód. Interní podklady uvádějí produkci od červnového vydání Automation Studio Code a čtvrtletní aktualizace, bez uvedení roku. Čtvrtletní aktualizace neznamenají živou synchronizaci ani úplnost; SAP support tickety nejsou zahrnuté.*

*Konečný stav: je vidět celý tok, typy zdrojů, příklad dotazu i hranice služby; žádný detail není otevřený a žádná odpověď asistenta není vydávána za ověřený fakt.*

Znalostní část doplňuje AS Repository, které dodává postup a kontext projektu.
*Zdroj pro přípravu: AI_Event_CZ/Slides/topics/as-agentic-bridge.md, část „MCP Knowledge Hub: znalosti se zdrojem“.*
-->

---
layout: default
class: ot-slide
---

<h1>AS Repository: postup pro projekt</h1>
<p class="ot-lead">Tři pluginy rozšiřují agentní prostředí o doménové skills, HMI workflow a práci se Structured Text.</p>

<div class="repo-plugin-grid">
  <article class="ot-card repo-plugin-card" style="--accent: var(--br-orange);">
    <div class="ot-card-head" style="justify-content: flex-start;"><span class="ot-icon"><mdi-puzzle-outline /></span><div><p class="t-caption">ENGINEERING SKILLS</p><h2>as-skills</h2></div></div>
    <p>Postupy pro vývoj a konfiguraci projektů Automation Studia.</p>
    <details class="repo-plugin-details" @click.stop @keydown.esc.stop.prevent="$event.currentTarget.open = false; $event.currentTarget.querySelector('summary').focus()">
      <summary class="t-caption"><mdi-text-box-search-outline />Skills a schopnosti</summary>
      <div class="repo-plugin-popover">
        <button type="button" class="repo-plugin-close" aria-label="Zavřít detail" @click.stop="$event.currentTarget.closest('details').open = false; $event.currentTarget.closest('details').querySelector('summary').focus()"><mdi-close /></button>
        <p><strong>as-skills · 14 doménových skills</strong></p>
        <div class="repo-plugin-skill-groups">
          <section class="repo-plugin-skill-group"><p class="t-caption repo-plugin-skill-group-title">Jazyky a konfigurace</p><div class="repo-plugin-skill-list"><span class="t-caption">Structured Text</span><span class="t-caption">ANSI C</span><span class="t-caption">Physical konfigurace</span><span class="t-caption">OPC UA</span></div></section>
          <section class="repo-plugin-skill-group"><p class="t-caption repo-plugin-skill-group-title">HMI a motion</p><div class="repo-plugin-skill-list"><span class="t-caption">mappView</span><span class="t-caption">mapp Motion</span><span class="t-caption">mapp6D</span><span class="t-caption">mappTrak</span><span class="t-caption">SuperTrak</span></div></section>
          <section class="repo-plugin-skill-group"><p class="t-caption repo-plugin-skill-group-title">mapp služby</p><div class="repo-plugin-skill-list"><span class="t-caption">AlarmX</span><span class="t-caption">Audit</span><span class="t-caption">mapp IO</span><span class="t-caption">Recipe</span><span class="t-caption">UserX</span></div></section>
        </div>
        <p>Pomáhají vybrat správnou oblast, popisují vlastnictví souborů a vedou k ověřitelným postupům. Plugin obsahuje také projektového agenta a příkaz pro review větve. Operace s projektem využívají samostatný as-cli.</p>
      </div>
    </details>
  </article>

  <article class="ot-card repo-plugin-card" style="--accent: var(--flow-blue);">
    <div class="ot-card-head" style="justify-content: flex-start;"><span class="ot-icon"><mdi-monitor-dashboard /></span><div><p class="t-caption">HMI WORKFLOW</p><h2>mappView HMI Design</h2></div></div>
    <p>Specializovaný postup pro návrh, převod a posouzení HMI.</p>
    <details class="repo-plugin-details" @click.stop @keydown.esc.stop.prevent="$event.currentTarget.open = false; $event.currentTarget.querySelector('summary').focus()">
      <summary class="t-caption"><mdi-text-box-search-outline />Skills a schopnosti</summary>
      <div class="repo-plugin-popover">
        <button type="button" class="repo-plugin-close" aria-label="Zavřít detail" @click.stop="$event.currentTarget.closest('details').open = false; $event.currentTarget.closest('details').querySelector('summary').focus()"><mdi-close /></button>
        <p><strong>1 skill:</strong> mappView HMI Design and Conversion.</p>
        <div class="repo-plugin-skill-list"><span class="t-caption">HMI design</span><span class="t-caption">HTML → mappView</span><span class="t-caption">Build validace</span><span class="t-caption">Runtime assessment</span></div>
        <p>Provází návrhem průmyslového HMI, převodem schváleného HTML do existující vizualizace a kontrolou buildu. Nasazené HMI umí posoudit pouze read-only. Pro build validaci vyžaduje as-cli.</p>
      </div>
    </details>
  </article>

  <article class="ot-card repo-plugin-card" style="--accent: var(--flow-green);">
    <div class="ot-card-head" style="justify-content: flex-start;"><span class="ot-icon"><mdi-code-braces /></span><div><p class="t-caption">LANGUAGE SERVER</p><h2>as-lsp</h2></div></div>
    <p>Strukturovaná navigace ve Structured Text projektu.</p>
    <details class="repo-plugin-details" @click.stop @keydown.esc.stop.prevent="$event.currentTarget.open = false; $event.currentTarget.querySelector('summary').focus()">
      <summary class="t-caption"><mdi-text-box-search-outline />Skills a schopnosti</summary>
      <div class="repo-plugin-popover">
        <button type="button" class="repo-plugin-close" aria-label="Zavřít detail" @click.stop="$event.currentTarget.closest('details').open = false; $event.currentTarget.closest('details').querySelector('summary').focus()"><mdi-close /></button>
        <p><strong>1 skill:</strong> as-lsp.</p>
        <div class="repo-plugin-skill-list"><span class="t-caption">Definice</span><span class="t-caption">Reference</span><span class="t-caption">Hover a typy</span><span class="t-caption">Symbol search</span><span class="t-caption">Rename*</span></div>
        <p>Napojí agenta na B&amp;R Structured Text language server. Zpřístupní goToDefinition, findReferences, hover a symbol search; přejmenování závisí na schopnostech harnessu.</p>
        <p class="t-caption">* Některé harnessy podporují pouze čtení. Vyžaduje Windows, rozšíření br-automation.st-lsp, Node.js a projekt po buildu.</p>
      </div>
    </details>
  </article>
</div>
<div class="repo-plugin-footnote"><mdi-information-outline /><p>Pluginy se instalují do agentního prostředí samostatně. Skills předávají postupy; samy o sobě nejsou oprávnění ani bezpečnostní kontrola.</p></div>

<!--
*Záměr a čas: 2 minuty. Rozlište tři pluginy podle jejich skutečné role a ukažte jejich podrobnosti na vyžádání.*
*Počáteční stav: tři pluginy a jejich stručné zaměření jsou viditelné; podrobnosti se otevřou aktivací ovládacího prvku v kartě.*

AS Repository obsahuje tři samostatně instalovatelné pluginy. První, as-skills, pokrývá čtrnáct oblastí od Structured Textu a konfigurace po motion a mapp služby. Druhý vede návrhem a převodem průmyslového HMI. Třetí zpřístupňuje agentovi jazykový server pro navigaci ve Structured Text projektu.

Podrobnosti si můžeme otevřít přímo v kartách. Jejich dostupnost závisí na instalaci a harnessu; například rename přes LSP nepodporují všechny harnessy. Skills popisují postup, ale sama o sobě nevynucují oprávnění ani bezpečnostní pravidla.

*Poznámka: zdrojový README ještě uvádí as-script-task-skills, jeho vlastní README ale označuje tento postup za nahrazený as-cli. Neuvádějte jej jako aktuální doporučení.*

*Konečný stav: jsou viditelné tři pluginy; jejich popisy zůstávají zavřené, dokud si je publikum neotevře.*

Vedle těchto pluginů je samostatným nástrojem také as-cli.
*Zdroj pro přípravu: C:\100_Projects\as-docs\agentic-engineering-in-automation-studio\README.md; plugins\as-skills\README.md; template\AGENTS.md; docs\agentic-bridge\slides\s4\03-project-structure.js.*
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
*Záměr a čas: 1 minuta. Představte as-cli jako příkazové rozhraní k práci s projektem Automation Studia.*

*Počáteční stav: vysvětlení, tabulka problémů a příkladové oblasti jsou viditelné; nic se neodhaluje.*

as-cli je příkazové rozhraní pro práci s projektem Automation Studia. Příkazy může zadávat člověk i agent a změny zprostředkovává Automation Studio, které pracuje se schématy instalované verze. Ani to ale neznamená, že každý příkaz nebo výsledek je automaticky správný.

Na dalším slidu uvidíme příklady oblastí, které příkazy pokrývají.
*Zdroj pro přípravu: agentic-engineering-in-automation-studio/docs/agentic-bridge/slides/s5/07-what-is-as-cli.js.*
-->

---
layout: default
class: dark-slide ot-slide
---

<h1>Co umí as-cli?</h1>
<div class="ot-stage" style="gap: 20px;">
  <div class="ot-cli-groups has-large-commands">
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
*Záměr a čas: 1 minuta. Ukažte šíři příkazových skupin a jeden příklad jejich zápisu.*

*Počáteční stav: obě tematické skupiny a všech jedenáct příkladů jsou viditelné; nic se neodhaluje.*

Příkazy pokrývají tvorbu projektu, Logical view, hardware, konfiguraci technologií, mappView i symboly. Druhá skupina se týká buildu, simulace, transferu, online PLC a sítě. Jsou to příklady z materiálů, nikoli příkazy, které jsme zde spustili. Dostupnost se může lišit podle verze.

Před použitím ověřte aktuální syntaxi přes `as --help`. Adresa PLC v příkladu je jen zástupný symbol.

Následující slide popisuje plán ukázky, nikoli důkaz, že už proběhla.
*Zdroj pro přípravu: agentic-engineering-in-automation-studio/docs/agentic-bridge/slides/s5/09-capabilities.js.*
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
*Záměr a čas: 1 minuta. Vymezte limity pracovního postupu bez nepodložených produktových slibů.*

*Počáteční stav: všechny čtyři kontrolní výroky a obecná nabídka workshopu jsou viditelné; bez odhalení.*

Build ověřuje sestavení, ne automaticky chování za běhu. Instrukce pomáhají agenta vést, ale samy nevynucují oprávnění ani ochranu dat. I po testu člověk posoudí rozsah kontroly, provedenou změnu a rozhodne o nasazení. Jsou to hranice pracovního postupu, nikoli úplný seznam limitů produktu. Pokud chcete některé téma rozpracovat pro svůj projekt, můžeme navázat workshopem.

Další příležitostí k setkání je AI & Agentic Engineering Day v Telči.
*Zdroj pro přípravu: AI_Event_CZ/Slides/topics/as-repository.md, část „Guardrails“; nabídka workshopu vychází z README zadání.*
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
*Záměr a čas: 30 sekund. Uveďte konkrétní interní nástroj jako příklad AI v práci podpory.*

*Počáteční stav: obraz, název a podtitul jsou viditelné; nic se neodhaluje.*

Teď se podívejme na interního Support Agenta jako příklad AI v práci podpory. Nejde o produkt nabízený zákazníkům ani o návod k instalaci; ukážeme pouze schválenou ukázku rozhraní.

Začněme tím, jaké typy dotazů nabízí úvodní obrazovka.
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
    <div class="ot-row"><span class="ot-icon"><mdi-clipboard-text-clock-outline /></span><p>Historie interních ticketů (možné napojení)</p></div>
    <p class="t-caption" style="margin-top: 16px; color: var(--steel);">Čtyři návrhy jsou na screenshotu. Ticketing je možné rozšíření; vyžaduje dostupné API a oprávnění.</p>
  </div>
  <div class="ot-photo" style="height: 410px;"><img src="/topics/support-agent/support-agent-start-screen.png" alt="Úvodní obrazovka B&amp;R Support Agentu s návrhy témat pro nové dotazy"></div>
</div>

<!--
*Záměr a čas: 2 minuty. Ukázkou schváleného screenshotu vysvětlete, jak support inženýr zahájí práci s asistentem.*

*Počáteční stav: čtyři témata ze screenshotu, možné napojení ticketingu i celý obrázek jsou viditelné; nic se neodhaluje.*

Úvodní obrazovka nabízí čtyři návrhy: otázku k ACOPOS servopohonu, strukturu Automation Studia 6, ladění motion programu nebo hledání ve fóru. Nejde o skutečné odpovědi ani doklad vyřešených případů. Dalším možným zdrojem mohou být interní tickety, pokud je schválené napojení a dostupné potřebné API a oprávnění; screenshot tuto integraci neukazuje.

*Hranice: používejte pouze screenshot schválený pro externí prezentaci. Nezobrazujte přístup, instalátor ani interní oznámení.*

Důležitou součástí postupu je také kontext, který může inženýr asistentovi předat.
-->

---
layout: default
class: ot-slide
---

<h1>Odpověď získává kontext z více míst</h1>
<p class="ot-lead">K lokální nápovědě lze přidat zkušenosti komunity i konkrétní projekt.</p>

<div class="ot-stage">
<div class="ot-grid cols-4">
  <section class="ot-card is-feature"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-book-open-page-variant-outline /></span><span class="t-caption">DOKUMENTACE</span></div><h2>Help AS4 / AS6</h2><p>Nápověda se indexuje lokálně z vlastní instalace Automation Studia.</p></section>
  <section class="ot-card is-feature" style="--accent: var(--flow-blue);"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-forum-outline /></span><span class="t-caption">KOMUNITA</span></div><h2>B&amp;R Community</h2><p>Odpovědi odkazují také na zkušenosti sdílené ve fóru.</p></section>
  <section class="ot-card is-feature" style="--accent: var(--flow-green);"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-folder-open-outline /></span><span class="t-caption">PROJEKT</span></div><h2>Workspace</h2><p>Inženýr může připojit projekt AS jako kontext pro konkrétnější dotaz.</p></section>
  <section class="ot-card is-feature" style="--accent: var(--flow-purple);"><div class="ot-card-head"><span class="ot-icon is-lg"><mdi-clipboard-text-clock-outline /></span><span class="t-caption">INTERNÍ TICKETY</span></div><h2>Historie incidentů</h2><p>Kontext z dřívějších hlášení a ověřených řešení.</p></section>
</div>

<div class="ot-callout"><mdi-information-outline /><p>Ticketing je další možný zdroj. Skutečné napojení vyžaduje dostupné rozhraní, oprávnění a potvrzenou integraci.</p></div>
</div>

<!--
*Záměr a čas: 3 minuty. Vysvětlete tři zdroje kontextu uvedené v interním oznámení Support Agenta.*

*Počáteční stav: všechny čtyři zdroje a upozornění na stav integrace jsou viditelné; nic se neodhaluje.*

Podle interního oznámení může Support Agent využít nápovědu AS4 a AS6 indexovanou z lokální instalace, odkazy do B&R Community a připojený projekt Automation Studia. Dalším zamýšleným zdrojem jsou interní tickety s historií incidentů a řešení. Z dostupných podkladů ale nemáme potvrzenou hotovou integraci; její dostupnost závisí na rozhraní a oprávněních.

Všechny tyto zdroje mohou rozšířit kontext, ale nezaručují úplnost ani správnost odpovědi. Odborné posouzení zůstává na inženýrovi.
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
*Záměr a čas: 2:30. Uzavřete téma přínosem v pracovním postupu a jasnou odpovědností inženýra.*

*Počáteční stav: obě strany rozdělení a upozornění na chybějící metriky jsou viditelné; nic se neodhaluje.*

Asistent může usnadnit dohledání materiálů a práci s kontextem. Inženýr ale dál posuzuje verzi, relevanci a bezpečnost doporučení a rozhoduje o dalším kroku. Nemáme zde doložené metriky úspory ani úspěšnosti a screenshot neukazuje výsledek konkrétního řešení, proto je nebudu tvrdit.

Po příkladu z interní podpory se vraťme k pozvánce na AI & Agentic Engineering Day.
-->

---
layout: default
class: ot-slide
---

# Další akce <span style="color: var(--br-orange);">2026</span>

<div class="ot-stage">
  <div style="display: grid; grid-template-columns: minmax(0, 1fr) 420px; gap: 32px; align-items: center;">
    <div>
      <div class="ot-photo" style="height: 320px;"><img src="/topics/ai-management/chapter.jpg" alt="Ilustrační fotografie: dva kolegové spolupracují u počítače"></div>
      <h2 style="margin: 24px 0 0;">AI & Agentic Engineering Day</h2>
      <div style="display: flex; gap: 40px; margin-top: 12px;">
        <div><p class="t-caption">Datum</p><p class="t-block">4. listopadu 2026</p></div>
        <div><p class="t-caption">Místo</p><p class="t-block">Panský dvůr · Telč</p></div>
      </div>
    </div>
    <div style="display: grid; justify-items: center; gap: 12px;">
      <a href="https://events.bizzabo.com/AgenticEngineeringDay" target="_blank" rel="noreferrer" aria-label="Otevřít registraci na AI &amp; Agentic Engineering Day">
        <img src="/topics/zaver/agentic-engineering-day-registration.svg" alt="QR kód pro registraci na AI &amp; Agentic Engineering Day" style="display: block; width: 450px; height: 450px;">
      </a>
      <p><a href="https://events.bizzabo.com/AgenticEngineeringDay" target="_blank" rel="noreferrer">Otevřít registraci</a></p>
    </div>
  </div>
</div>

<!--
*Záměr a čas: 1:30. Pozvěte publikum na navazující event a stručně zopakujte ověřené údaje.*

*Počáteční stav: název akce, datum, místo a velký registrační QR kód; bez odhalení.*

Pokud vás témata zaujala, navazující AI & Agentic Engineering Day se podle schváleného banneru a programu koná 4. listopadu 2026 v Panském dvoře v Telči. Registrovat se můžete naskenováním QR kódu nebo otevřením odkazu na slidu. Děkuji za pozornost; případné otázky můžeme navázat na tuto akci nebo na workshop ke konkrétnímu tématu.

*Zdroj pro přípravu: AI_Event_CZ/Slides/slides.md, program 4. 11. 2026; schválený event banner.*
-->
