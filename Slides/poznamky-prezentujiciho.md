## Slide 1

Dnes projdeme cestu od jazykových modelů k agentům, kteří pracují s konkrétním automatizačním projektem. Nebudeme hodnotit jen to, zda odpověď zní přesvědčivě, ale také zda odpovídá projektu a lze ji ověřit.

Nejdřív si ukažme, jak je rozdělený čas.

## Slide 2

Začneme úvodem a základy LLM, potom přejdeme k Agentic Engineeringu, Agentic Bridge a Support Agentu. Na závěr pozvu zájemce na AI event v Telči nebo na workshop k vybranému tématu.

Začněme otázkou: podle čeho poznáme, že je návrh AI použitelný?

## Slide 3

Už řadu let se mluví o tom, že se IT a OT budou prolínat. V nástrojích se to skutečně děje: automatizační projekty dnes vyvíjíme i ve VS Code a Dockeru. K cíli ale ještě nejsme.

S nástupem AI se IT znovu vzdaluje. Ne proto, že bychom v OT neměli stejné schopnosti, ale protože vývoj v IT a open source ekosystém postupují velmi rychle. Modely mohou čerpat z rozsáhlého množství veřejných projektů a jejich zavedených nástrojů: verzování, API, CLI i diagnostiky. To jim dává kontext a zpětnou vazbu už přímo ve vývojovém prostředí.

V OT bývá platforma i znalost konkrétního stroje uzavřená. Model sám neví, jak funguje slévací nebo lisovací stroj. Navíc pracujeme s hardwarem, verzemi, dlouhými životními cykly, bezpečností a fyzickými důsledky změn.

Nejde tedy o nedostatek dovedností ani o pouhé zavedení AI do OT. Potřebujeme zpřístupnit OT platformu, projektový a doménový kontext i ověřitelnou zpětnou vazbu.

Největší propast není v tom, zda AI dokáže kód vygenerovat, ale zda má správný kontext a jak výsledek ověříme. Abychom pochopili roli kontextu, podívejme se nejprve, jak jazykový model zpracovává vstup a vytváří odpověď.

## Slide 4

Nejprve si ujasníme, jak jazykový model zpracovává vstup a vytváří odpověď.

## Slide 5

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

## Slide 6

Instrukce určují pravidla práce, skills přidávají oborový postup a relevantní projektový kontext zpřesňuje zadání. Tím vedeme záměr a postup, negarantujeme totožnou odpověď.

Build, test nebo kontrola schématu vrací konkrétní signál. Při neúspěchu agent dostane chybu zpět do kontextu a může připravit další změnu. Člověk určuje cíl, vybírá kritéria a přijímá výsledek.

Teď uvidíme, proč ani vyhledání v dokumentaci nezaručuje správnou odpověď.

## Slide 7

[Klik]

Nejprve vágní dotaz: „Je v AS6 podporován C30?“

[Klik]

Agent prohledal Help a odpověděl sebejistým „ano“. Volání nástroje i počet výsledků ukazují, že hledal; nedokazují, že závěr správně vyložil.

[Klik]

Uživatel namítá, že Help uvádí C30 mezi nepodporovanými. Následuje další hledání a načtení stránky. Počet výsledků ani breadcrumb nejsou nezávislým potvrzením závěru. Asistent se omluví, ale ve screenshotu ověřený verdikt chybí.

*[Otevřete postupně tři záznamy Search help / Get page by id a znovu je zavřete. Neodvozujte z nich argumenty ani obsah stránky, které screenshot neukazuje.]*

[Klik]

V samostatném chatu se uživatel ptá konkrétněji na řady 4PPC30 a 4PPC70. Odpověď zmiňuje výjimky, ale sama nedokládá podporu konkrétního objednacího čísla ani verze.

Zprávy pocházejí ze dvou samostatných chatů; nejde o jeden souvislý běh ani kontrolovaný experiment. Odpovědi jsou ilustrací nutnosti ověření, ne zdrojem pravdy.

## Slide 8

[Klik]

Autocomplete navrhne další řádek nebo blok a vývojář rozhoduje o každém dalším kroku.

[Klik]

Chatový asistent odpoví nebo připraví ukázku, kterou člověk sám přenese do projektu.

[Klik]

Agent může pracovat s poskytnutým kontextem projektu, plánovat změny a volat povolené nástroje. Konkrétní rozsah závisí na prostředí a oprávněních.

Taková spolupráce má smysl, když máme jasná kritéria a ověřování.

## Slide 9

Začíná část o Agentic Engineeringu. Nejprve rozlišíme neformální práci s AI od řízeného workflow, potom projdeme samotnou pracovní smyčku.

## Slide 10

[Klik]

V prvním řádku je rozdíl v řízení dalších kroků: člověk je může zadávat jednotlivě, zatímco agent může provádět ty, které mu prostředí povolí.

[Klik]

Druhý řádek porovnává kontext dodávaný v dialogu s kontextem projektu, který má agent skutečně k dispozici.

[Klik]

Ve třetím řádku porovnáváme ruční spouštění kontrol s možností, aby agent spustil ty povolené. Vibe coding a Agentic Engineering nejsou pevné kategorie: o vhodnosti pro produkci rozhoduje ověření a lidské review, ne nálepka.

Teď tyto kroky propojíme do jedné pracovní smyčky.

## Slide 11

[Klik]

Nejprve vymezíme cíl, rozsah a postup. Člověk může plán schválit ještě před změnou.

[Klik]

Potom agent provede změnu v projektu.

[Klik]

Ve fázi Verify kontrolujeme sestavení a konfiguraci. Tím ověříme technickou konzistenci, ne ještě očekávané chování.

[Klik]

Test prověřuje očekávané chování. Výsledek nebo chyba se vrací do kontextu agenta k dalšímu kroku.

[Klik]

Nakonec člověk posoudí změnu i důkazy z kontrol. Build, test a lidské review odpovídají na různé otázky.

Aby taková smyčka fungovala, potřebuje odborné znalosti, skutečný projekt a jasné kontrolní hranice.

## Slide 12

[Klik]

Začněme doménovou znalostí: agent musí rozumět B&R platformě i specifikům projektu výrobce stroje.

[Klik]

Dále potřebuje skutečný projektový kontext: programy, konfiguraci, hardware, verze a závislosti.

[Klik]

Source control umožňuje změny dohledat, porovnat a případně vrátit.

[Klik]

Nástroje mohou zpřístupnit build, diagnostiku nebo testy, ale jejich rozsah závisí na konkrétním prostředí.

[Klik]

Guardrails vymezují rozsah změn, ochranu dat a schvalování člověkem. Samotná textová instrukce ale bezpečnostní hranici technicky nevynucuje.

[Klik]

Když se spojí kontext, kontrola a zpětná vazba, může agent pracovat na konkrétním inženýrském úkolu, ne jen odpovídat obecně.

Pojďme si rozdělit, které vrstvy tyto funkce dodávají.

## Slide 13

[Klik]

Jazykový model vytváří návrh. Uvedení dodavatelé jsou příklady, nikoli úplný seznam ani doporučení.

[Klik]

Harness řídí běh agenta, například dostupný kontext, nástroje a schvalování. Uvedená prostředí nejsou automaticky zaměnitelná.

[Klik]

Nástroje mohou být MCP servery, příkazové nástroje nebo jazykové servery. MCP je způsob propojení, ne další druh nástroje.

[Klik]

Přizpůsobení mohou dodat B&R, vlastní tým i komunita. Skills popisují pracovní postupy, ale samy o sobě neudělují bezpečnostní oprávnění.

[Klik]

Agentic Bridge má propojit Automation Studio s harnessy podle volby zákazníka. Rozsah podpory závisí na konfiguraci; neznamená to, že každý harness funguje bez integrace.

Jak může kombinace těchto vrstev zlepšit opakovatelnost, aniž bychom slibovali totožný text?

## Slide 14

Po obecném agentním workflow se teď podíváme na Automation Studio Agentic Bridge. Na následujícím slidu si představíme jeho tři části.

## Slide 15

[Klik]

Knowledge Hub dohledává odborné podklady a vrací je se zdroji. Jejich relevanci je třeba posoudit pro konkrétní dotaz a verzi.

[Klik]

AS Repository dodává instrukce, skills a pracovní postup pro projekt. Nejde o nový jazykový model.

[Klik]

AS CLI zpřístupňuje podporované operace a vrací jejich výsledky. Dostupnost závisí na konkrétním prostředí.

Začněme znalostní částí a rozlišme propojení MCP od vyhledávání RAG.

## Slide 16

Agent rozhodne, co potřebuje dohledat. MCP předá požadavek službě a RAG vyhledá podklady, které se zdroji vrátí do kontextu. Agent připraví odpověď, ale člověk stále posuzuje relevanci i verzi. MCP je rozhraní pro propojení, nikoli vyhledávač. Příklad s X20, který po přenosu startuje do SERVICE místo RUN, je pouze ilustrativní otázka ze školení, ne živé hledání ani ověřený diagnostický postup.

Znalostní část doplňuje AS Repository, které dodává postup a kontext projektu.

## Slide 17

AS Repository obsahuje tři samostatně instalovatelné pluginy. První, as-skills, pokrývá čtrnáct oblastí od Structured Textu a konfigurace po motion a mapp služby. Druhý vede návrhem a převodem průmyslového HMI. Třetí zpřístupňuje agentovi jazykový server pro navigaci ve Structured Text projektu.

Podrobnosti si můžeme otevřít přímo v kartách. Jejich dostupnost závisí na instalaci a harnessu; například rename přes LSP nepodporují všechny harnessy. Skills popisují postup, ale sama o sobě nevynucují oprávnění ani bezpečnostní pravidla.

Vedle těchto pluginů je samostatným nástrojem také as-cli.

## Slide 18

as-cli je příkazové rozhraní pro práci s projektem Automation Studia. Příkazy může zadávat člověk i agent a změny zprostředkovává Automation Studio, které pracuje se schématy instalované verze. Ani to ale neznamená, že každý příkaz nebo výsledek je automaticky správný.

Na dalším slidu uvidíme příklady oblastí, které příkazy pokrývají.

## Slide 19

Příkazy pokrývají tvorbu projektu, Logical view, hardware, konfiguraci technologií, mappView i symboly. Druhá skupina se týká buildu, simulace, transferu, online PLC a sítě. Jsou to příklady z materiálů, nikoli příkazy, které jsme zde spustili. Dostupnost se může lišit podle verze.

Před použitím ověřte aktuální syntaxi přes `as --help`. Adresa PLC v příkladu je jen zástupný symbol.

Následující slide popisuje plán ukázky, nikoli důkaz, že už proběhla.

## Slide 20

Build ověřuje sestavení, ne automaticky chování za běhu. Instrukce pomáhají agenta vést, ale samy nevynucují oprávnění ani ochranu dat. I po testu člověk posoudí rozsah kontroly, provedenou změnu a rozhodne o nasazení. Jsou to hranice pracovního postupu, nikoli úplný seznam limitů produktu. Pokud chcete některé téma rozpracovat pro svůj projekt, můžeme navázat workshopem.

Další příležitostí k setkání je AI & Agentic Engineering Day v Telči.

## Slide 21

Teď se podívejme na interního Support Agenta jako příklad AI v práci podpory. Nejde o produkt nabízený zákazníkům ani o návod k instalaci; ukážeme pouze schválenou ukázku rozhraní.

Začněme tím, jaké typy dotazů nabízí úvodní obrazovka.

## Slide 22

Úvodní obrazovka nabízí čtyři návrhy: otázku k ACOPOS servopohonu, strukturu Automation Studia 6, ladění motion programu nebo hledání ve fóru. Nejde o skutečné odpovědi ani doklad vyřešených případů. Dalším možným zdrojem mohou být interní tickety, pokud je schválené napojení a dostupné potřebné API a oprávnění; screenshot tuto integraci neukazuje.

Důležitou součástí postupu je také kontext, který může inženýr asistentovi předat.

## Slide 23

Podle interního oznámení může Support Agent využít nápovědu AS4 a AS6 indexovanou z lokální instalace, odkazy do B&R Community a připojený projekt Automation Studia. Dalším zamýšleným zdrojem jsou interní tickety s historií incidentů a řešení. Z dostupných podkladů ale nemáme potvrzenou hotovou integraci; její dostupnost závisí na rozhraní a oprávněních.

Všechny tyto zdroje mohou rozšířit kontext, ale nezaručují úplnost ani správnost odpovědi. Odborné posouzení zůstává na inženýrovi.

## Slide 24

Asistent může usnadnit dohledání materiálů a práci s kontextem. Inženýr ale dál posuzuje verzi, relevanci a bezpečnost doporučení a rozhoduje o dalším kroku. Nemáme zde doložené metriky úspory ani úspěšnosti a screenshot neukazuje výsledek konkrétního řešení, proto je nebudu tvrdit.

Po příkladu z interní podpory se vraťme k pozvánce na AI & Agentic Engineering Day.

## Slide 25

Pokud vás témata zaujala, navazující AI & Agentic Engineering Day se podle schváleného banneru a programu koná 4. listopadu 2026 v Panském dvoře v Telči. Registrovat se můžete naskenováním QR kódu nebo otevřením odkazu na slidu. Děkuji za pozornost; případné otázky můžeme navázat na tuto akci nebo na workshop ke konkrétnímu tématu.
