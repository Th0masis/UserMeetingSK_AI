# User Meeting - AI přednáška
Repozit85 obsahuje prezentaci a podklady pro vystoupení.
Prezentace se skládá ze zdrojů v `Slides/`

Cela prezentace má trvat 50 min a jednotliva temata jsou rozdělan časově takto:
uvod			2
Zákaldy LLM			5
agentic engenering			15
agentic bridge			15
support agent			10
sucess přiklady			5

Cílem je zákazníky informvoat a inspirovat, není třeba zacházet do hlubokých detailů, i když převážne budou posluchačí vývojaří v průmyslové automatizaci.
Chci představit koncept a produkty, které budeme zákazníkům poskytovat.
POkud se chtějí dozvědět více mohou se registrovat na AI event v Telči, kde tytto témata rozvedeme více do detailu, Nebo následně si mohou domluvit workshop na konkrétní téma.

V rámaci agentic egeneering bych rád zmínil témata jako:
- od autocomplete k aagentům
- Vibe coding vs agentic enegeneering
- agentic workflow
- close the gap (znalost práce s B&R sw, kontext projektu, ověření, guardrails)
- čas vývojáře se přesmerováváv ze samotného psaní kodu na zkepšovaní kvality
- kdo co nabízi (LLM, harnes, mcp, skills, ...)
- Agent je probalisticky, jeho výstup není stejný. našim cílem je ho usmerit tak aby výstup byl konstní. [output = (Model + promt)*/(base hanres + domain harnes)]

## Zdroj informací
hlavní zdroj informací:
C:\100_Projects\as-docs\agentic-engineering-in-automation-studio\docs
C:\Users\miculkat\OneDrive - ABB\Projects\AI_Event_CZ
https://github.com/Th0masis/EventAiAndDevOps.git

Zároveň jako doplnující infomrace můžeš hledat na internetu.


## Publikace prezentace

Prezentace se publikuje na [th0masis.github.io/]
pomocí workflow [Deploy Slidev to GitHub Pages](.github/workflows/deploy-pages.yml).
Workflow při pushi do `main` sestaví obsah z `Slides/` a nasadí výstup `Slides/dist/`;
lze ho spustit také ručně v GitHub Actions.

Práce nyní probíhá pouze lokálně. Neprovádějte `git fetch`, `git pull`,
`git push`, nenastavujte remote a nezakládejte pull request, dokud k tomu
nedostanete výslovný pokyn. Push do `main` zároveň spouští publikaci prezentace.

V nastavení repozitáře **Settings → Pages** musí být jako zdroj zvoleno
**GitHub Actions**. Prostředí `github-pages` musí povolovat nasazení z větve
`main`; jinak sestavení projde, ale nasazení bude zablokováno. Publikování přímo
z větve místo tohoto workflow může zobrazit README repozitáře namísto prezentace.

## Kde pracovat

- `Slides/slides.md` je hlavní soubor pro prezentaci
- `Slides/style.css` obsahuje CSS,
- `Slides/`obsahuje  Vue komponenty a případné skripty
- pravidla vlastnictví,layout a namespace popisuje [grafický kontrakt](docs/graphic-notes.md).
- `Slides/public/topics` obsahuje obrázky a další podklady
- `docs/graphic-notes.md` popisuje pravidla pro grafiku, barvy, písmo a layout.
- `Slides/README.md` obsahuje poznámky k návrhu Slidev prezentace.

## Lokální náhled a kontrola

Použijte Node.js 22 stejně jako CI a npm. Pro požadovaný vzhled musí být
nainstalované licencované písmo ABBvoice; není součástí repozitáře. Podrobnosti
jsou v [grafických poznámkách](docs/graphic-notes.md#typography).
Před `npm.cmd ci` zastavte běžící dev/preview servery tohoto projektu;
ve Windows mohou držet načtené soubory v `node_modules`.

V PowerShellu přejděte do složky `Slides/`. Pokud PowerShell blokuje `npm`,
použijte příkaz `npm.cmd`:

```powershell
cd Slides
npm.cmd ci
npx.cmd playwright install chromium
npm.cmd run test:content
npm.cmd run test:topic-styles
npm.cmd run test:topic-code
npm.cmd run test:duplicates
npm.cmd run build
```

Pro kontrolu v prohlížeči spusťte prezentaci v jednom terminálu:

```powershell
cd Slides
npm.cmd run start -- --port 3030
```

Nechte ji běžet a v druhém terminálu spusťte:

```powershell
cd Slides
npm.cmd run test:smoke
```

Smoke test projde slidy na desktopovém i mobilním rozlišení a uloží screenshoty
do `Slides/artifacts/slides/`. Před PR také ručně zkontrolujte odhalování
obsahu, interakce, poznámky prezentujícího, obrázky a délku vystoupení.
Duplicate checker kontroluje topicové i sdílené zdroje, CSS a testovací skripty;
závislosti a generované výstupy ignoruje. Jeho dočasný report se po běhu odstraní.

Pro kontrolu produkčního buildu stejně jako v CI spusťte místo dev serveru
`npm.cmd run preview` po úspěšném `npm.cmd run build`. V druhém terminálu,
ve složce `Slides/`, spusťte:

```powershell
$env:SLIDES_URL = 'http://127.0.0.1:4173'
npm.cmd run test:smoke
Remove-Item Env:SLIDES_URL
```

Při jiné adrese náhledu upravte `SLIDES_URL`. Pro návrat k dev serveru proměnnou
odstraňte, aby test opět použil výchozí port 3030.

