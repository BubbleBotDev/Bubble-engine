# Bubble Engine

Silnik bota Bubble, na którym możesz zbudować swojego własnego bota
w discord.js.

Kontakt: titondesign.kontakt@gmail.com

[![](https://bubble.tk/bubble.png)](https://bubble.tk)

# Dokumentacja

## Konfiguracja

### Krok 1.
W folderze src/config utwórz plik o nazwie ".env"
Przykład uzupełnienia pliku:

```env
token=WKLEJ_TU_TOKEN_TWOJEGO_BOTA
mongoUrl=JEŚLI_KORZYSTASZ_Z_BAZY_DANYCH_MONGODB_WKLEJ_TU_LINK
```

Jeśli nie korzystasz z bazy danych MongoDB, lub korzystasz z niej lokalnie,
w miejsce tego parametru wklej `mongodb://localhost:27017`

### Krok 2.
W folderze src/config przejdź do pliku config.js
Uzupełnij go w ten sposób:

```js
require("dotenv").config({
    path: __dirname + "/.env"
})
    

module.exports = {
    prefix:"-",
    programers: ["0123456789"], // tu zamiast "0123456789" wklej swoje ID i/lub ID innych osób które mają mieć pełną kontrolę nad botem!
    testers: ["0123456789"], // tutaj MOŻESZ (nie musisz) wkleić id "testerów" Twojego bota. Ich uprawnienia będa ograniczone
}

```

## Tworzenie komendy

Aby utworzyć nową komendę, przejdź do folderu src/cmds, a następnie utworz
plik "nazwakomendy.cmd.js", oczywiście bez cudzysłowów i ze zmianą "nazwakomendy"
na nazwę Twojej komendy.

Następnie, zdefiniuj informacje o swojej komendzie. Niżej zamieszczam wzór:

```js
module.exports = {
    name: "nazwakomendy", // NAZWA KOMENDY
    args: 1, // ILOSC ARGUMENTOW NIEZBĘDNA DO WYKONANIA KOMENDY
    ussage: "@wzmianka", // SPOSÓB UŻYCIA KOMENDY
    
    run(msg, args) {
      // Tutaj umieść swój kod
    }
```

## Uruchamianie bota

W programie Visual Studio Code wystarczy nacisnąć przycisk ▶ przy skrypcie NPM "start"
lub "dev:watch"

W przypadku uruchamiania bota przez konsolę komend, wpisz w głównej lokalizacji bota
"node src/index.js"

------------------------------------------------------------------------------------
### Pełną dokumentacją znajdziesz na https://github.com/Titon191/Bubble-engine/wiki/Dokumentacja
------------------------------------------------------------------------------------

Licencja
--------------------------------------------------------------------------------------
LICENCJA MIT - WYMAGANA WZMIANKA AUTORA

Licencja szczegółowa tej usługi zawarta jest w pliku LICENSE


Wspomóż nas!
-------------------------------------------------------------------------------------
Aby bot Bubble lepiej i szybciej się rozwijał, wpłać dotację na konto podane
poniżej:

https://paypal.me/natanlipinski
