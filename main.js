
    const clipboard = new ClipboardJS(".copy-button");
    clipboard.on("success", function(e) {
        if (document.querySelector(".copied")) {
            document.querySelector(".copied").classList.remove("copied");
        }

        e.trigger.classList.add("copied");
        e.trigger.textContent = "copiado";
    });
    var input = document.querySelector("#input");
    var output = document.querySelector("#output");
    ("use strict");

    function _typeof(obj) {
        if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
        ) {
            _typeof = function _typeof(obj) {
                return typeof obj;
            };
        } else {
            _typeof = function _typeof(obj) {
                return obj &&
                    typeof Symbol === "function" &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
            };
        }
        return _typeof(obj);
    }

        output.style.whiteSpace = "pre-wrap";
        var genTimeout;
        input.addEventListener("keyup", function() {
            clearTimeout(genTimeout);
            genTimeout = setTimeout(generate, 200);
        });
        input.addEventListener("paste", generate);
        var luni = new Lunicode();
        luni.tools.creepify.options.maxHeight = 10;

        function createMap(chars) {
            var alphanum = [
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
            ];
            var i = 0;
            var map = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (
                    var _iterator = chars[Symbol.iterator](), _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next())
                        .done);
                    _iteratorNormalCompletion = true
                ) {
                    var c = _step.value;
                    map[alphanum[i]] = c;
                    i++;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (
                        !_iteratorNormalCompletion &&
                        _iterator.return != null
                    ) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return JSON.stringify(map);
        } //createMap("𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡")

        function addText(text) {
            const container = document.createElement("section");
            const exemple = document.createElement("span");
            exemple.innerHTML = text;

            const copyButton = document.createElement("button");

            copyButton.innerHTML = `copiar`;
            copyButton.setAttribute("data-clipboard-text", text);
            copyButton.classList.add("copy-button");

            container.append(exemple);
            container.append(copyButton);

            return container.outerHTML;
        }
        function generate() {
            var text = input.value.trim();

            if (text === "") {
                output.innerHTML = "";
                return;
            }

            var finalText = "";
            addText(applyCharMap(oldEnglishCharMap, text));
            finalText += addText(applyCharMap(medievalCharMap, text));
            finalText += addText(fullCrazy(text));
            finalText += addText(applyCharMap(cursiveCharMap, text));
            finalText += addText(scriptify(text));
            finalText += addText(applyCharMap(doubleStruckCharMap, text));
            finalText += addText(applyCharMap(wideTextCharMap, text));
            finalText += addText(cuteText(text));
            finalText += addText(luni.tools.tiny.encode(text));
            finalText += addText(luni.tools.flip.encode(text));
            finalText += addText(luni.tools.roundsquares.encode(text));
            finalText += addText(luni.tools.squares.encode(text));
            finalText += addText(applyCharMap(squaresCharMap, text));
            finalText += addText(luni.tools.mirror.encode(text));
            finalText += addText(luni.tools.creepify.encode(text));
            finalText += addText(applyCharMap(invertedSquaresCharMap, text));
            finalText += addText(applyCharMap(subscriptCharMap, text));
            finalText += addText(applyCharMap(superscriptCharMap, text));
            finalText += addText(luni.tools.bubbles.encode(text));
            finalText += addText(applyCharMap(squiggleCharMap, text));
            finalText += addText(applyCharMap(squiggle2CharMap, text));
            finalText += addText(applyCharMap(squiggle3CharMap, text));
            finalText += addText(applyCharMap(squiggle4CharMap, text));
            finalText += addText(applyCharMap(squiggle5CharMap, text));
            finalText += addText(applyCharMap(squiggle6CharMap, text));
            finalText += addText(applyCharMap(boldCharMap, text));
            finalText += addText(applyCharMap(boldSansCharMap, text));
            finalText += addText(applyCharMap(italicCharMap, text));
            finalText += addText(applyCharMap(boldItalicCharMap, text));
            finalText += addText(applyCharMap(boldItalicSerifCharMap, text));
            finalText += addText(applyCharMap(monospaceCharMap, text));
            finalText += addText(applyCharMap(upperAnglesCharMap, text));
            finalText += addText(applyCharMap(greekCharMap, text));
            finalText += addText(applyCharMap(symbolsCharMap, text));
            finalText += addText(applyCharMap(currencyCharMap, text));
            finalText += addText(applyCharMap(asianStyleCharMap, text));
            finalText += addText(applyCharMap(asianStyle2CharMap, text));
            finalText += addText(thickBlockFramed(text));
            finalText += addText(diametricAngleFrame(text));
            finalText += addText(wavyJoiner(text));
            finalText += addText(dottyJoiner(text));
            finalText += addText(kirbyHug(text));
            finalText += addText(vaporwaveText(text));
            finalText += addText(littleSparkles(text));
            finalText += addText(weirdBox(text));
            finalText += addText(firework(text));
            finalText += addText(applyCharMap(bentTextCharMap, text));
            finalText += addText(applyCharMap(neonCharMap, text));
            finalText += addText(applyCharMap(futureAlienCharMap, text));
            finalText += addText(strikeThrough(text));
            finalText += addText(tildeStrikeThrough(text));
            finalText += addText(slashThrough(text));
            finalText += addText(underline(text));
            finalText += addText(doubleUnderline(text));
            finalText += addText(stinky(text));
            finalText += addText(heartsBetween(text));
            finalText += addText(arrowBelow(text));
            finalText += addText(crossAboveBelow(text));
            finalText += addText("Wingdings: " + wingdings(text));
            finalText += addText(cuteText(text));
            finalText += addText(cuteText(text));
            finalText += addText(cuteText(text));
            finalText += addText(cuteText(text));
            finalText += addText(cuteText(text));
            finalText += addText(fullCrazy(text));
            finalText += addText(fullCrazy(text));
            finalText += addText(fullCrazy(text));
            finalText += addText(fullCrazy(text));
            finalText += addText(fullCrazy(text));
            finalText += '<div id="moreFontsCtn"></div>';
            finalText += "<button onclick=\"moreFontsCtn.innerHTML += loadMoreFonts('".concat(
                text,
                "')\" class='load-more'>Cargar más tipos de letras</button>"
            );
            output.innerHTML = finalText.trim();
        }

        window.loadMoreFonts = function(text) {
            var out = "";

            for (var _i = 0; _i < 15; _i++) {
                var res = void 0;
                if (Math.random() < 0.7)
                    res = wrapInSymbols(crazifyText(text), 2);
                else res = wrapInFlourish(crazifyText(text), 2);
                out += addText(res);
            }

            return out;
        };

        generate();
