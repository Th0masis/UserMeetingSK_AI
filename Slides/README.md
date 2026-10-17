# Práce na prezentaci

`slides.md` je jediný zdroj obsahu prezentace. Sdílený vzhled je v
[`style.css`](style.css); obrázky a další podklady patří do `public/`.
Témata jsou zatím přímo v hlavním souboru. Nezakládejte topicové Vue
komponenty ani styly, dokud pro ně není konkrétní potřeba.

## Git workflow

Práce zatím probíhá pouze lokálně. Neupravujte konfiguraci remote a
nespouštějte `git fetch`, `git pull` ani `git push`. Nezakládejte pull request
ani nespouštějte publikaci přes GitHub Actions, dokud k tomu nedostanete
výslovný pokyn. Push do `main` publikuje prezentaci na GitHub Pages.

Změny připravujte lokálně a ověřujte podle [TESTING.md](TESTING.md). O dalším
postupu s větvemi, commity a remote rozhodněte až po samostatném pokynu.

## Design

- Před grafickými změnami se řiďte [grafickými poznámkami](../docs/graphic-notes.md).
- Zachovejte B&R typografii ABBvoice, oranžové akcenty, bílé pozadí a logo.
- Písmo ABBvoice není součástí repozitáře; vyžaduje organizační licenci.
- Náhled, testy a sestavení popisuje [TESTING.md](TESTING.md).
