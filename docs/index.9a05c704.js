(function () {
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireaa66"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireaa66"] = parcelRequire;
}
parcelRequire.register("52Krb", function(module, exports) {
//     wink-tokenizer
//     Multilingual tokenizer that automatically tags each token with its type.
//
//     Copyright (C) GRAYPE Systems Private Limited
//
//     This file is part of “wink-tokenizer”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.
//

var $bsaG1 = parcelRequire("bsaG1");

var $437sR = parcelRequire("437sR");
var $3ac1292ee1d714fc$var$rgxSpaces = /\s+/g;
// Ordinals only for Latin like 1st, 2nd or 12th or 33rd.
var $3ac1292ee1d714fc$var$rgxOrdinalL1 = /1\dth|[04-9]th|1st|2nd|3rd|[02-9]1st|[02-9]2nd|[02-9]3rd|[02-9][04-9]th|\d+\d[04-9]th|\d+\d1st|\d+\d2nd|\d+\d3rd/g;
// Apart from detecting pure integers or decimals, also detect numbers containing
// `. - / ,` so that dates, ip address, fractions and things like codes or part
// numbers are also detected as numbers only. These regex will therefore detected
// 8.8.8.8 or 12-12-1924 or 1,1,1,1.00 or 1/4 or 1/4/66/777 as numbers.
// Latin-1 Numbers.
var $3ac1292ee1d714fc$var$rgxNumberL1 = /\d+\/\d+|\d(?:[\.,-\/]?\d)*(?:\.\d+)?/g;
// Devanagari Numbers.
var $3ac1292ee1d714fc$var$rgxNumberDV = /[\u0966-\u096F]+\/[\u0966-\u096F]+|[\u0966-\u096F](?:[\.,-\/]?[\u0966-\u096F])*(?:\.[\u0966-\u096F]+)?/g;
var $3ac1292ee1d714fc$var$rgxMention = /@\w+/g;
// Latin-1 Hashtags.
// Include entire Latin-1 script and not just English alphas.
var $3ac1292ee1d714fc$var$rgxHashtagL1 = /#[a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF_][a-z0-9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF_]*/gi;
// Devanagari Hashtags
var $3ac1292ee1d714fc$var$rgxHashtagDV = /#[\u0900-\u0963\u0970-\u097F_][\u0900-\u0963\u0970-\u097F\u0966-\u096F0-9_]*/gi;
// EMail is EN character set.
var $3ac1292ee1d714fc$var$rgxEmail = /[-!#$%&'*+\/=?^\w{|}~](?:\.?[-!#$%&'*+\/=?^\w`{|}~])*@[a-z0-9](?:-?\.?[a-z0-9])*(?:\.[a-z](?:-?[a-z0-9])*)+/gi;
// Bitcoin, Ruble, Indian Rupee, Other Rupee, Dollar, Pound, Yen, Euro, Wong.
var $3ac1292ee1d714fc$var$rgxCurrency = /[₿₽₹₨$£¥€₩]/g;
// These include both the punctuations: Latin-1 & Devanagari.
var $3ac1292ee1d714fc$var$rgxPunctuation = /[’'‘’`“”"\[\]\(\){}…,\.!;\?\-:\u0964\u0965]/g;
var $3ac1292ee1d714fc$var$rgxQuotedPhrase = /"[^"]*"/g;
// NOTE: URL will support only EN character set for now.
var $3ac1292ee1d714fc$var$rgxURL = /(?:https?:\/\/)(?:[\da-z\.-]+)\.(?:[a-z\.]{2,6})(?:[\/\w\.\-\?#=]*)*\/?/gi;
var $3ac1292ee1d714fc$var$rgxEmoji = $bsaG1();
var $3ac1292ee1d714fc$var$rgxEmoticon = /:-?[dps\*\/\[\]{}\(\)]|;-?[/(/)d]|<3/gi;
var $3ac1292ee1d714fc$var$rgxTime = /(?:\d|[01]\d|2[0-3]):?(?:[0-5][0-9])?\s?(?:[ap]\.?m\.?|hours|hrs)/gi;
// Inlcude [Latin-1 Supplement Unicode Block](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block))
var $3ac1292ee1d714fc$var$rgxWordL1 = /[a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF][a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF']*/gi;
// Define [Devanagari Unicode Block](https://unicode.org/charts/PDF/U0900.pdf)
var $3ac1292ee1d714fc$var$rgxWordDV = /[\u0900-\u094F\u0951-\u0963\u0970-\u097F]+/gi;
// Symbols go here; including Om.
var $3ac1292ee1d714fc$var$rgxSymbol = /[\u0950~@#%\^\+=\*\|\/<>&]/g;
// For detecting if the word is a potential contraction.
var $3ac1292ee1d714fc$var$rgxContraction = /'/;
// Singular & Plural possessive
var $3ac1292ee1d714fc$var$rgxPosSingular = /([a-z]+)('s)$/i;
var $3ac1292ee1d714fc$var$rgxPosPlural = /([a-z]+s)(')$/i;
// Regexes and their categories; used for tokenizing via match/split. The
// sequence is *critical* for correct tokenization.
var $3ac1292ee1d714fc$var$rgxsMaster = [
    {
        regex: $3ac1292ee1d714fc$var$rgxQuotedPhrase,
        category: "quoted_phrase"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxURL,
        category: "url"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxEmail,
        category: "email"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxMention,
        category: "mention"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxHashtagL1,
        category: "hashtag"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxHashtagDV,
        category: "hashtag"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxEmoji,
        category: "emoji"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxEmoticon,
        category: "emoticon"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxTime,
        category: "time"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxOrdinalL1,
        category: "ordinal"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxNumberL1,
        category: "number"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxNumberDV,
        category: "number"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxCurrency,
        category: "currency"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxWordL1,
        category: "word"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxWordDV,
        category: "word"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxPunctuation,
        category: "punctuation"
    },
    {
        regex: $3ac1292ee1d714fc$var$rgxSymbol,
        category: "symbol"
    }
];
// Used to generate finger print from the tokens.
// NOTE: this variable is being reset in `defineConfig()`.
var $3ac1292ee1d714fc$var$fingerPrintCodes = {
    emoticon: "c",
    email: "e",
    emoji: "j",
    hashtag: "h",
    mention: "m",
    number: "n",
    ordinal: "o",
    quoted_phrase: "q",
    currency: "r",
    // symbol: 's',
    time: "t",
    url: "u",
    word: "w",
    alien: "z"
};
// ### tokenizer
/**
 *
 * Creates an instance of {@link Tokenizer}.
 *
 * @return {Tokenizer} object conatining set of API methods for tokenizing a sentence
 * and defining configuration, plugin etc.
 * @example
 * // Load wink tokenizer.
 * var tokenizer = require( 'wink-tokenizer' );
 * // Create your instance of wink tokenizer.
 * var myTokenizer = tokenizer();
*/ var $3ac1292ee1d714fc$var$tokenizer = function() {
    // Default configuration: most comprehensive tokenization. Make deep copy!
    var rgxs = $3ac1292ee1d714fc$var$rgxsMaster.slice(0);
    // The result of last call to `tokenize()` is retained here.
    var finalTokens = [];
    // Returned!
    /**
   * @classdesc Tokenizer class
   * @class Tokenizer
   * @hideconstructor
   */ var methods = Object.create(null);
    // ### manageContraction
    /**
   *
   * Splits a contractions into words by first trying a lookup in strandard
   * `contractions`; if the lookup fails, it checks for possessive in `'s` or
   * `s'` forms and separates the possesive part from the word. Otherwise the
   * contraction is treated as a normal word and no splitting occurs.
   *
   * @param {string} word that could be a potential conraction.
   * @param {object[]} tokens where the outcome is pushed.
   * @return {object[]} updated tokens according to the `word.`
   * @private
  */ var manageContraction = function(word, tokens) {
        var ct = $437sR[word];
        var matches;
        if (ct === undefined) {
            // Try possesive of sigular & plural forms
            matches = word.match($3ac1292ee1d714fc$var$rgxPosSingular);
            if (matches) {
                tokens.push({
                    value: matches[1],
                    tag: "word"
                });
                tokens.push({
                    value: matches[2],
                    tag: "word"
                });
            } else {
                matches = word.match($3ac1292ee1d714fc$var$rgxPosPlural);
                if (matches) {
                    tokens.push({
                        value: matches[1],
                        tag: "word"
                    });
                    tokens.push({
                        value: matches[2],
                        tag: "word"
                    });
                } else tokens.push({
                    value: word,
                    tag: "word"
                });
            }
        } else {
            // Manage via lookup; ensure cloning!
            tokens.push(Object.assign({}, ct[0]));
            tokens.push(Object.assign({}, ct[1]));
            if (ct[2]) tokens.push(Object.assign({}, ct[2]));
        }
        return tokens;
    }; // manageContraction()
    // ### tokenizeTextUnit
    /**
   *
   * Attempts to tokenize the input `text` using the `rgxSplit`. The tokenization
   * is carried out by combining the regex matches and splits in the right sequence.
   * The matches are the *real tokens*, whereas splits are text units that are
   * tokenized in later rounds! The real tokens (i.e. matches) are pushed as
   * `object` and splits as `string`.
   *
   * @param {string} text unit that is to be tokenized.
   * @param {object} rgxSplit object containing the regex and it's category.
   * @return {array} of tokens.
   * @private
  */ var tokenizeTextUnit = function(text, rgxSplit) {
        // Regex matches go here; note each match is a token and has the same tag
        // as of regex's category.
        var matches = text.match(rgxSplit.regex);
        // Balance is "what needs to be tokenized".
        var balance = text.split(rgxSplit.regex);
        // The result, in form of combination of tokens & matches, is captured here.
        var tokens = [];
        // The tag;
        var tag = rgxSplit.category;
        // Helper variables.
        var aword, i, imax, k = 0, t;
        // Combine tokens & matches in the following pattern [ b0 m0 b1 m1 ... ]
        matches = matches ? matches : [];
        for(i = 0, imax = balance.length; i < imax; i += 1){
            t = balance[i];
            t = t.trim();
            if (t) tokens.push(t);
            if (k < matches.length) {
                if (tag === "word") {
                    // Tag type `word` token may have a contraction.
                    aword = matches[k];
                    if ($3ac1292ee1d714fc$var$rgxContraction.test(aword)) tokens = manageContraction(aword, tokens);
                    else // Means there is no contraction.
                    tokens.push({
                        value: aword,
                        tag: tag
                    });
                } else tokens.push({
                    value: matches[k],
                    tag: tag
                });
            }
            k += 1;
        }
        return tokens;
    }; // tokenizeTextUnit()
    // ### tokenizeTextRecursively
    /**
   *
   * Tokenizes the input text recursively using the array of `regexes` and then
   * the `tokenizeTextUnit()` function. If (or whenever) the `regexes` becomes
   * empty, it simply splits the text on non-word characters instead of using
   * the `tokenizeTextUnit()` function.
   *
   * @param {string} text unit that is to be tokenized.
   * @param {object} regexes object containing the regex and it's category.
   * @return {undefined} nothing!
   * @private
  */ var tokenizeTextRecursively = function(text, regexes) {
        var sentence = text.trim();
        var tokens = [];
        var i, imax;
        if (!regexes.length) {
            // No regex left, split on `spaces` and tag every token as **alien**.
            text.split($3ac1292ee1d714fc$var$rgxSpaces).forEach(function(tkn) {
                finalTokens.push({
                    value: tkn.trim(),
                    tag: "alien"
                });
            });
            return;
        }
        var rgx = regexes[0];
        tokens = tokenizeTextUnit(sentence, rgx);
        for(i = 0, imax = tokens.length; i < imax; i += 1)if (typeof tokens[i] === "string") // Strings become candidates for further tokenization.
        tokenizeTextRecursively(tokens[i], regexes.slice(1));
        else finalTokens.push(tokens[i]);
    }; // tokenizeTextRecursively()
    // ### defineConfig
    /**
   *
   * Defines the configuration in terms of the types of token that will be
   * extracted by [`tokenize()`](#tokenize) method. Note by default, all types
   * of tokens will be detected and tagged automatically.
   *
   * @method Tokenizer#defineConfig
   * @param {object} config It defines 0 or more properties from the list of
   * **14** properties. A true value for a property ensures tokenization
   * for that type of text; whereas false value will mean that the tokenization of that
   * type of text will not be attempted. It also **resets** the effect of any previous
   * call(s) to the [`addRegex()`](#addregex) API.
   *
   * *An empty config object is equivalent to splitting on spaces. Whatever tokens
   * are created like this are tagged as **alien** and **`z`** is the
   * [finger print](#gettokensfp) code of this token type.*
   *
   * The table below gives the name of each property and it's description including
   * examples. The character with in paranthesis is the [finger print](#gettokensfp) code for the
   * token of that type.
   * @param {boolean} [config.currency=true] such as **$** or **£** symbols (**`r`**)
   * @param {boolean} [config.email=true] for example **john@acme.com** or **superman1@gmail.com** (**`e`**)
   * @param {boolean} [config.emoji=true] any standard unicode emojis e.g. 😊 or 😂 or 🎉 (**`j`**)
   * @param {boolean} [config.emoticon=true] common emoticons such as **`:-)`** or **`:D`** (**`c`**)
   * @param {boolean} [config.hashtag=true] hash tags such as **`#happy`** or **`#followme`** (**`h`**)
   * @param {boolean} [config.number=true] any integer, decimal number, fractions such as **19**, **2.718**
   * or **1/4** and numerals containing "**`, - / .`**", for example 12-12-1924 (**`n`**)
   * @param {boolean} [config.ordinal=true] ordinals like **1st**, **2nd**, **3rd**, **4th** or **12th** or **91st** (**`o`**)
   * @param {boolean} [config.punctuation=true] common punctuation such as **`?`** or **`,`**
   * ( token becomes fingerprint )
   * @param {boolean} [config.quoted_phrase=false] any **"quoted text"** in the sentence. _Note: its default value is **false**._ (**`q`**)
   * @param {boolean} [config.symbol=true] for example **`~`** or **`+`** or **`&`** or **`%`** or **`/`** ( token becomes fingerprint )
   * @param {boolean} [config.time=true] common representation of time such as **4pm** or **16:00 hours** (**`t`**)
   * @param {boolean} [config.mention=true] **@mention**  as in github or twitter (**`m`**)
   * @param {boolean} [config.url=true] URL such as **https://github.com** (**`u`**)
   * @param {boolean} [config.word=true] word such as **faster** or **résumé** or **prévenir** (**`w`**)
   * @return {number} number of properties set to true from the list of above 13.
   * @example
   * // Do not tokenize & tag @mentions.
   * var myTokenizer.defineConfig( { mention: false } );
   * // -> 13
   * // Only tokenize words as defined above.
   * var myTokenizer.defineConfig( {} );
   * // -> 0
  */ var defineConfig = function(config) {
        if (typeof config === "object" && Object.keys(config).length) rgxs = $3ac1292ee1d714fc$var$rgxsMaster.filter(function(rgx) {
            // Config for the Category of `rgx`.
            var cc = config[rgx.category];
            // Means `undefined` & `null` values are taken as true; otherwise
            // standard **truthy** and **falsy** interpretation applies!!
            return cc === undefined || cc === null || !!cc;
        });
        else rgxs = [];
        // Count normalized length i.e. ignore multi-script entries.
        const uniqueCats = Object.create(null);
        rgxs.forEach(function(rgx) {
            uniqueCats[rgx.category] = true;
        });
        // Reset the `fingerPrintCodes` variable.
        $3ac1292ee1d714fc$var$fingerPrintCodes = {
            emoticon: "c",
            email: "e",
            emoji: "j",
            hashtag: "h",
            mention: "m",
            number: "n",
            ordinal: "o",
            quoted_phrase: "q",
            currency: "r",
            // symbol: 's',
            time: "t",
            url: "u",
            word: "w",
            alien: "z"
        };
        return Object.keys(uniqueCats).length;
    }; // defineConfig()
    // ### tokenize
    /**
   *
   * Tokenizes the input `sentence` using the configuration specified via
   * [`defineConfig()`](#defineconfig).
   * Common contractions and possessive nouns are split into 2 separate tokens;
   * for example **I'll** splits as `'I'` and `'\'ll'` or **won't** splits as
   * `'wo'` and `'n\'t'`.
   *
   * @method Tokenizer#tokenize
   * @param {string} sentence the input sentence.
   * @return {object[]} of tokens; each one of them is an object with 2-keys viz.
   * `value` and its `tag` identifying the type of the token.
   * @example
   * var s = 'For detailed API docs, check out http://winkjs.org/wink-regression-tree/ URL!';
   * myTokenizer.tokenize( s );
   * // -> [ { value: 'For', tag: 'word' },
   * //      { value: 'detailed', tag: 'word' },
   * //      { value: 'API', tag: 'word' },
   * //      { value: 'docs', tag: 'word' },
   * //      { value: ',', tag: 'punctuation' },
   * //      { value: 'check', tag: 'word' },
   * //      { value: 'out', tag: 'word' },
   * //      { value: 'http://winkjs.org/wink-regression-tree/', tag: 'url' },
   * //      { value: 'URL', tag: 'word' },
   * //      { value: '!', tag: 'punctuation' } ]
  */ var tokenize = function(sentence) {
        finalTokens = [];
        tokenizeTextRecursively(sentence, rgxs);
        return finalTokens;
    }; // tokenize()
    // ### getTokensFP
    /**
   *
   * Returns the finger print of the tokens generated by the last call to
   * [`tokenize()`](#tokenize). A finger print is a string created by sequentially
   * joining the unique code of each token's type. Refer to table given under
   * [`defineConfig()`](#defineconfig) for values of these codes.
   *
   * A finger print is extremely useful in spotting patterns present in the sentence
   * using `regexes`, which is otherwise a complex and time consuming task.
   *
   * @method Tokenizer#getTokensFP
   * @return {string} finger print of tokens generated by the last call to `tokenize()`.
   * @example
   * // Generate finger print of sentence given in the previous example
   * // under tokenize().
   * myTokenizer.getTokensFP();
   * // -> 'wwww,wwuw!'
  */ var getTokensFP = function() {
        var fp = [];
        finalTokens.forEach(function(t) {
            fp.push($3ac1292ee1d714fc$var$fingerPrintCodes[t.tag] ? $3ac1292ee1d714fc$var$fingerPrintCodes[t.tag] : t.value);
        });
        return fp.join("");
    }; // getFingerprint()
    // ### addTag
    var addTag = function(name, fingerprintCode) {
        if ($3ac1292ee1d714fc$var$fingerPrintCodes[name]) throw new Error("Tag " + name + " already exists");
        $3ac1292ee1d714fc$var$fingerPrintCodes[name] = fingerprintCode;
    }; // addTag()
    // ### addRegex
    /**
   * Adds a regex for parsing a new type of token. This regex can either be mapped
   * to an existing tag or it allows creation of a new tag along with its finger print.
   * The uniqueness of the [finger prints](#defineconfig) have to ensured by the user.
   *
   * *The added regex(s) will supersede the internal parsing.*
   *
   * @method Tokenizer#addRegex
   * @param {RegExp} regex the new regular expression.
   * @param {string} tag tokens matching the `regex` will be assigned this tag.
   * @param {string} [fingerprintCode=undefined] required if adding a new
   * tag; ignored if using an existing tag.
   * @return {void} nothing!
   * @example
   * // Adding a regex for an existing tag
   * myTokenizer.addRegex( /\(oo\)/gi, 'emoticon' );
   * myTokenizer.tokenize( '(oo) Hi!' )
   * // -> [ { value: '(oo)', tag: 'emoticon' },
   * //      { value: 'Hi', tag: 'word' },
   * //      { value: '!', tag: 'punctuation' } ]
   *
   * // Adding a regex to parse a new token type
   * myTokenizer.addRegex( /hello/gi, 'greeting', 'g' );
   * myTokenizer.tokenize( 'hello, how are you?' );
   * // -> [ { value: 'hello', tag: 'greeting' },
   * //      { value: ',', tag: 'punctuation' },
   * //      { value: 'how', tag: 'word' },
   * //      { value: 'are', tag: 'word' },
   * //      { value: 'you', tag: 'word' },
   * //      { value: '?', tag: 'punctuation' } ]
   * // Notice how "hello" is now tagged as "greeting" and not as "word".
   *
   * // Using definConfig will reset the above!
   * myTokenizer.defineConfig( { word: true } );
   * myTokenizer.tokenize( 'hello, how are you?' );
   * // -> [ { value: 'hello', tag: 'word' },
   * //      { value: ',', tag: 'punctuation' },
   * //      { value: 'how', tag: 'word' },
   * //      { value: 'are', tag: 'word' },
   * //      { value: 'you', tag: 'word' },
   * //      { value: '?', tag: 'punctuation' } ]
  */ var addRegex = function(regex, tag, fingerprintCode) {
        if (!$3ac1292ee1d714fc$var$fingerPrintCodes[tag] && !fingerprintCode) throw new Error("Tag " + tag + " doesn't exist; Provide a 'fingerprintCode' to add it as a tag.");
        else if (!$3ac1292ee1d714fc$var$fingerPrintCodes[tag]) addTag(tag, fingerprintCode);
        rgxs.unshift({
            regex: regex,
            category: tag
        });
    }; // addRegex()
    // Set quoted_phrase as false becuase mostly it is not required.
    defineConfig({
        quoted_phrase: false
    }); // eslint-disable-line camelcase
    methods.defineConfig = defineConfig;
    methods.tokenize = tokenize;
    methods.getTokensFP = getTokensFP;
    methods.addTag = addTag;
    methods.addRegex = addRegex;
    return methods;
};
module.exports = $3ac1292ee1d714fc$var$tokenizer;

});
parcelRequire.register("bsaG1", function(module, exports) {
"use strict";
module.exports = function() {
    // https://mths.be/emoji
    return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};

});

parcelRequire.register("437sR", function(module, exports) {
//     wink-tokenizer
//     Multilingual tokenizer that automatically tags each token with its type.
//
//     Copyright (C) GRAYPE Systems Private Limited
//
//     This file is part of “wink-tokenizer”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.
var $2f2d3b8e015ddf9a$var$contractions = Object.create(null);
// Tag - word.
var $2f2d3b8e015ddf9a$var$word = "word";
// Verbs.
$2f2d3b8e015ddf9a$var$contractions["can't"] = [
    {
        value: "ca",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["CAN'T"] = [
    {
        value: "CA",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Can't"] = [
    {
        value: "Ca",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Couldn't"] = [
    {
        value: "could",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["COULDN'T"] = [
    {
        value: "COULD",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Couldn't"] = [
    {
        value: "Could",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["don't"] = [
    {
        value: "do",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["DON'T"] = [
    {
        value: "DO",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Don't"] = [
    {
        value: "Do",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["doesn't"] = [
    {
        value: "does",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["DOESN'T"] = [
    {
        value: "DOES",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Doesn't"] = [
    {
        value: "Does",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["didn't"] = [
    {
        value: "did",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["DIDN'T"] = [
    {
        value: "DID",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Didn't"] = [
    {
        value: "Did",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["hadn't"] = [
    {
        value: "had",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["HADN'T"] = [
    {
        value: "HAD",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Hadn't"] = [
    {
        value: "Had",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["mayn't"] = [
    {
        value: "may",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["MAYN'T"] = [
    {
        value: "MAY",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Mayn't"] = [
    {
        value: "May",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["mightn't"] = [
    {
        value: "might",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["MIGHTN'T"] = [
    {
        value: "MIGHT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Mightn't"] = [
    {
        value: "Might",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["mustn't"] = [
    {
        value: "must",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["MUSTN'T"] = [
    {
        value: "MUST",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Mustn't"] = [
    {
        value: "Must",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["needn't"] = [
    {
        value: "need",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["NEEDN'T"] = [
    {
        value: "NEED",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Needn't"] = [
    {
        value: "Need",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["oughtn't"] = [
    {
        value: "ought",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["OUGHTN'T"] = [
    {
        value: "OUGHT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Oughtn't"] = [
    {
        value: "Ought",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["shan't"] = [
    {
        value: "sha",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["SHAN'T"] = [
    {
        value: "SHA",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Shan't"] = [
    {
        value: "Sha",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["shouldn't"] = [
    {
        value: "should",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["SHOULDN'T"] = [
    {
        value: "SHOULD",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Shouldn't"] = [
    {
        value: "Should",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["won't"] = [
    {
        value: "wo",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WON'T"] = [
    {
        value: "WO",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Won't"] = [
    {
        value: "Wo",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["wouldn't"] = [
    {
        value: "would",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WOULDN'T"] = [
    {
        value: "WOULD",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Wouldn't"] = [
    {
        value: "Would",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["ain't"] = [
    {
        value: "ai",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["AIN'T"] = [
    {
        value: "AI",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Ain't"] = [
    {
        value: "Ai",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["aren't"] = [
    {
        value: "are",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["AREN'T"] = [
    {
        value: "ARE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Aren't"] = [
    {
        value: "Are",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["isn't"] = [
    {
        value: "is",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["ISN'T"] = [
    {
        value: "IS",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Isn't"] = [
    {
        value: "Is",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["wasn't"] = [
    {
        value: "was",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WASN'T"] = [
    {
        value: "WAS",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Wasn't"] = [
    {
        value: "Was",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["weren't"] = [
    {
        value: "were",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WEREN'T"] = [
    {
        value: "WERE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Weren't"] = [
    {
        value: "Were",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["haven't"] = [
    {
        value: "have",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["HAVEN'T"] = [
    {
        value: "HAVE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Haven't"] = [
    {
        value: "Have",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["hasn't"] = [
    {
        value: "has",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["HASN'T"] = [
    {
        value: "HAS",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Hasn't"] = [
    {
        value: "Has",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["daren't"] = [
    {
        value: "dare",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["DAREN'T"] = [
    {
        value: "DARE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Daren't"] = [
    {
        value: "Dare",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
// Pronouns like I, you, they, we, she, and he.
$2f2d3b8e015ddf9a$var$contractions["i'm"] = [
    {
        value: "i",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'m",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["I'M"] = [
    {
        value: "I",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'M",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["I'm"] = [
    {
        value: "I",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'m",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["i've"] = [
    {
        value: "i",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["I'VE"] = [
    {
        value: "I",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["I've"] = [
    {
        value: "I",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["i'd"] = [
    {
        value: "i",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["I'D"] = [
    {
        value: "I",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["I'd"] = [
    {
        value: "I",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["i'll"] = [
    {
        value: "i",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["I'LL"] = [
    {
        value: "I",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["I'll"] = [
    {
        value: "I",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["you've"] = [
    {
        value: "you",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["YOU'VE"] = [
    {
        value: "YOU",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["You've"] = [
    {
        value: "You",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["you'd"] = [
    {
        value: "you",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["YOU'D"] = [
    {
        value: "YOU",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["You'd"] = [
    {
        value: "You",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["you'll"] = [
    {
        value: "you",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["YOU'LL"] = [
    {
        value: "YOU",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["You'll"] = [
    {
        value: "You",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
// they - 've, 'd, 'll, 're
$2f2d3b8e015ddf9a$var$contractions["they've"] = [
    {
        value: "they",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THEY'VE"] = [
    {
        value: "THEY",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["They've"] = [
    {
        value: "They",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["they'd"] = [
    {
        value: "they",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THEY'D"] = [
    {
        value: "THEY",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["They'd"] = [
    {
        value: "They",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["they'll"] = [
    {
        value: "they",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THEY'LL"] = [
    {
        value: "THEY",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["They'll"] = [
    {
        value: "They",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["they're"] = [
    {
        value: "they",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THEY'RE"] = [
    {
        value: "THEY",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'RE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["They're"] = [
    {
        value: "They",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["we've"] = [
    {
        value: "we",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WE'VE"] = [
    {
        value: "WE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["We've"] = [
    {
        value: "We",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["we'd"] = [
    {
        value: "we",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WE'D"] = [
    {
        value: "WE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["We'd"] = [
    {
        value: "We",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["we'll"] = [
    {
        value: "we",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WE'LL"] = [
    {
        value: "WE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["We'll"] = [
    {
        value: "We",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["we're"] = [
    {
        value: "we",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WE'RE"] = [
    {
        value: "WE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'RE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["We're"] = [
    {
        value: "We",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["she'd"] = [
    {
        value: "she",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["SHE'D"] = [
    {
        value: "SHE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["She'd"] = [
    {
        value: "She",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["she'll"] = [
    {
        value: "she",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["SHE'LL"] = [
    {
        value: "SHE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["She'll"] = [
    {
        value: "She",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["she's"] = [
    {
        value: "she",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'s",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["SHE'S"] = [
    {
        value: "SHE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'S",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["She's"] = [
    {
        value: "She",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'s",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["he'd"] = [
    {
        value: "he",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["HE'D"] = [
    {
        value: "HE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["He'd"] = [
    {
        value: "He",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["he'll"] = [
    {
        value: "he",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["HE'LL"] = [
    {
        value: "HE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["He'll"] = [
    {
        value: "He",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["he's"] = [
    {
        value: "he",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'s",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["HE'S"] = [
    {
        value: "HE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'S",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["He's"] = [
    {
        value: "He",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'s",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["it'd"] = [
    {
        value: "it",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["IT'D"] = [
    {
        value: "IT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["It'd"] = [
    {
        value: "It",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["it'll"] = [
    {
        value: "it",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["IT'LL"] = [
    {
        value: "IT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["It'll"] = [
    {
        value: "It",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["it's"] = [
    {
        value: "it",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'s",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["IT'S"] = [
    {
        value: "IT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'S",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["It's"] = [
    {
        value: "It",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'s",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
// Wh Pronouns - what, who, when, where, why, how, there, that
$2f2d3b8e015ddf9a$var$contractions["what've"] = [
    {
        value: "what",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHAT'VE"] = [
    {
        value: "WHAT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["What've"] = [
    {
        value: "What",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["what'd"] = [
    {
        value: "what",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHAT'D"] = [
    {
        value: "WHAT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["What'd"] = [
    {
        value: "What",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["what'll"] = [
    {
        value: "what",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHAT'LL"] = [
    {
        value: "WHAT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["What'll"] = [
    {
        value: "What",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["what're"] = [
    {
        value: "what",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHAT'RE"] = [
    {
        value: "WHAT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'RE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["What're"] = [
    {
        value: "What",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["who've"] = [
    {
        value: "who",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHO'VE"] = [
    {
        value: "WHO",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Who've"] = [
    {
        value: "Who",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["who'd"] = [
    {
        value: "who",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHO'D"] = [
    {
        value: "WHO",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Who'd"] = [
    {
        value: "Who",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["who'll"] = [
    {
        value: "who",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHO'LL"] = [
    {
        value: "WHO",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Who'll"] = [
    {
        value: "Who",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["who're"] = [
    {
        value: "who",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHO'RE"] = [
    {
        value: "WHO",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'RE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Who're"] = [
    {
        value: "Who",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["when've"] = [
    {
        value: "when",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHEN'VE"] = [
    {
        value: "WHEN",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["When've"] = [
    {
        value: "When",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["when'd"] = [
    {
        value: "when",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHEN'D"] = [
    {
        value: "WHEN",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["When'd"] = [
    {
        value: "When",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["when'll"] = [
    {
        value: "when",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHEN'LL"] = [
    {
        value: "WHEN",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["When'll"] = [
    {
        value: "When",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["when're"] = [
    {
        value: "when",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHEN'RE"] = [
    {
        value: "WHEN",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'RE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["When're"] = [
    {
        value: "When",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["where've"] = [
    {
        value: "where",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHERE'VE"] = [
    {
        value: "WHERE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Where've"] = [
    {
        value: "Where",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["where'd"] = [
    {
        value: "where",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHERE'D"] = [
    {
        value: "WHERE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Where'd"] = [
    {
        value: "Where",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["where'll"] = [
    {
        value: "where",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHERE'LL"] = [
    {
        value: "WHERE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Where'll"] = [
    {
        value: "Where",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["where're"] = [
    {
        value: "where",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHERE'RE"] = [
    {
        value: "WHERE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'RE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Where're"] = [
    {
        value: "Where",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["why've"] = [
    {
        value: "why",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHY'VE"] = [
    {
        value: "WHY",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Why've"] = [
    {
        value: "Why",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["why'd"] = [
    {
        value: "why",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHY'D"] = [
    {
        value: "WHY",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Why'd"] = [
    {
        value: "Why",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["why'll"] = [
    {
        value: "why",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHY'LL"] = [
    {
        value: "WHY",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Why'll"] = [
    {
        value: "Why",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["why're"] = [
    {
        value: "why",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WHY'RE"] = [
    {
        value: "WHY",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'RE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Why're"] = [
    {
        value: "Why",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["how've"] = [
    {
        value: "how",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["HOW'VE"] = [
    {
        value: "HOW",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["How've"] = [
    {
        value: "How",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["how'd"] = [
    {
        value: "how",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["HOW'D"] = [
    {
        value: "HOW",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["How'd"] = [
    {
        value: "How",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["how'll"] = [
    {
        value: "how",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["HOW'LL"] = [
    {
        value: "HOW",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["How'll"] = [
    {
        value: "How",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["how're"] = [
    {
        value: "how",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["HOW'RE"] = [
    {
        value: "HOW",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'RE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["How're"] = [
    {
        value: "How",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["there've"] = [
    {
        value: "there",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THERE'VE"] = [
    {
        value: "THERE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["There've"] = [
    {
        value: "There",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["there'd"] = [
    {
        value: "there",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THERE'D"] = [
    {
        value: "THERE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["There'd"] = [
    {
        value: "There",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["there'll"] = [
    {
        value: "there",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THERE'LL"] = [
    {
        value: "THERE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["There'll"] = [
    {
        value: "There",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["there're"] = [
    {
        value: "there",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THERE'RE"] = [
    {
        value: "THERE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'RE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["There're"] = [
    {
        value: "There",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["that've"] = [
    {
        value: "that",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THAT'VE"] = [
    {
        value: "THAT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["That've"] = [
    {
        value: "That",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["that'd"] = [
    {
        value: "that",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THAT'D"] = [
    {
        value: "THAT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["That'd"] = [
    {
        value: "That",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["that'll"] = [
    {
        value: "that",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THAT'LL"] = [
    {
        value: "THAT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["That'll"] = [
    {
        value: "That",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["that're"] = [
    {
        value: "that",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THAT'RE"] = [
    {
        value: "THAT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'RE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["That're"] = [
    {
        value: "That",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'re",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
// Let us!
$2f2d3b8e015ddf9a$var$contractions["let's"] = [
    {
        value: "let",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'s",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["LET'S"] = [
    {
        value: "THAT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'S",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Let's"] = [
    {
        value: "Let",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'s",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["could've"] = [
    {
        value: "could",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["COULD'VE"] = [
    {
        value: "COULD",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Could've"] = [
    {
        value: "Could",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["should've"] = [
    {
        value: "should",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["SHOULD'VE"] = [
    {
        value: "SHOULD",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Should've"] = [
    {
        value: "Should",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["would've"] = [
    {
        value: "would",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WOULD'VE"] = [
    {
        value: "WOULD",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Would've"] = [
    {
        value: "Would",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["i'll've"] = [
    {
        value: "i",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["I'LL'VE"] = [
    {
        value: "I",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["I'll've"] = [
    {
        value: "I",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["you'll've"] = [
    {
        value: "you",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["YOU'LL'VE"] = [
    {
        value: "YOU",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["You'll've"] = [
    {
        value: "You",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["they'll've"] = [
    {
        value: "they",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THEY'LL'VE"] = [
    {
        value: "THEY",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["They'll've"] = [
    {
        value: "They",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["it'll've"] = [
    {
        value: "it",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["IT'LL'VE"] = [
    {
        value: "IT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["It'll've"] = [
    {
        value: "It",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["he'll've"] = [
    {
        value: "he",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["HE'LL'VE"] = [
    {
        value: "HE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["He'll've"] = [
    {
        value: "He",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["she'll've"] = [
    {
        value: "she",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["SHE'LL'VE"] = [
    {
        value: "SHE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'LL",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["She'll've"] = [
    {
        value: "She",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ll",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["shouldn't've"] = [
    {
        value: "should",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["SHOULDN'T'VE"] = [
    {
        value: "SHOULD",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Shouldn't've"] = [
    {
        value: "Should",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["couldn't've"] = [
    {
        value: "could",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["COULDN'T'VE"] = [
    {
        value: "COULD",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Couldn't've"] = [
    {
        value: "Could",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["wouldn't've"] = [
    {
        value: "would",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["WOULDN'T'VE"] = [
    {
        value: "WOULD",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "N'T",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["Wouldn't've"] = [
    {
        value: "Would",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "n't",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["i'd've"] = [
    {
        value: "i",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["I'D'VE"] = [
    {
        value: "I",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["I'd've"] = [
    {
        value: "I",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["you'd've"] = [
    {
        value: "you",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["YOU'D'VE"] = [
    {
        value: "YOU",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["You'd've"] = [
    {
        value: "You",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["he'd've"] = [
    {
        value: "he",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["HE'D'VE"] = [
    {
        value: "HE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["He'd've"] = [
    {
        value: "He",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["she'd've"] = [
    {
        value: "she",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["SHE'D'VE"] = [
    {
        value: "SHE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["She'd've"] = [
    {
        value: "She",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["you'd've"] = [
    {
        value: "you",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["YOU'D'VE"] = [
    {
        value: "YOU",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["You'd've"] = [
    {
        value: "You",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["they'd've"] = [
    {
        value: "they",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THEY'D'VE"] = [
    {
        value: "THEY",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["They'd've"] = [
    {
        value: "They",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["there'd've"] = [
    {
        value: "there",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["THERE'D'VE"] = [
    {
        value: "THERE",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["There'd've"] = [
    {
        value: "There",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["it'd've"] = [
    {
        value: "it",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["IT'D'VE"] = [
    {
        value: "IT",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'D",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'VE",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
$2f2d3b8e015ddf9a$var$contractions["It'd've"] = [
    {
        value: "It",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'d",
        tag: $2f2d3b8e015ddf9a$var$word
    },
    {
        value: "'ve",
        tag: $2f2d3b8e015ddf9a$var$word
    }
];
module.exports = $2f2d3b8e015ddf9a$var$contractions;

});


parcelRequire.register("68hxX", function(module, exports) {
module.exports = JSON.parse('{"af":["\'n","aan","af","al","as","baie","by","daar","dag","dat","die","dit","een","ek","en","gaan","ges\xea","haar","het","hom","hulle","hy","in","is","jou","jy","kan","kom","ma","maar","met","my","na","nie","om","ons","op","saam","sal","se","sien","so","sy","te","toe","uit","van","vir","was","wat","ŉ"],"ar":["،","آض","آمينَ","آه","آهاً","آي","أ","أب","أجل","أجمع","أخ","أخذ","أصبح","أضحى","أقبل","أقل","أكثر","ألا","أم","أما","أمامك","أمامكَ","أمسى","أمّا","أن","أنا","أنت","أنتم","أنتما","أنتن","أنتِ","أنشأ","أنّى","أو","أوشك","أولئك","أولئكم","أولاء","أولالك","أوّهْ","أي","أيا","أين","أينما","أيّ","أَنَّ","أََيُّ","أُفٍّ","إذ","إذا","إذاً","إذما","إذن","إلى","إليكم","إليكما","إليكنّ","إليكَ","إلَيْكَ","إلّا","إمّا","إن","إنّما","إي","إياك","إياكم","إياكما","إياكن","إيانا","إياه","إياها","إياهم","إياهما","إياهن","إياي","إيهٍ","إِنَّ","ا","ابتدأ","اثر","اجل","احد","اخرى","اخلولق","اذا","اربعة","ارتدّ","استحال","اطار","اعادة","اعلنت","اف","اكثر","اكد","الألاء","الألى","الا","الاخيرة","الان","الاول","الاولى","التى","التي","الثاني","الثانية","الذاتي","الذى","الذي","الذين","السابق","الف","اللائي","اللاتي","اللتان","اللتيا","اللتين","اللذان","اللذين","اللواتي","الماضي","المقبل","الوقت","الى","اليوم","اما","امام","امس","ان","انبرى","انقلب","انه","انها","او","اول","اي","ايار","ايام","ايضا","ب","بات","باسم","بان","بخٍ","برس","بسبب","بسّ","بشكل","بضع","بطآن","بعد","بعض","بك","بكم","بكما","بكن","بل","بلى","بما","بماذا","بمن","بن","بنا","به","بها","بي","بيد","بين","بَسْ","بَلْهَ","بِئْسَ","تانِ","تانِك","تبدّل","تجاه","تحوّل","تلقاء","تلك","تلكم","تلكما","تم","تينك","تَيْنِ","تِه","تِي","ثلاثة","ثم","ثمّ","ثمّة","ثُمَّ","جعل","جلل","جميع","جير","حار","حاشا","حاليا","حاي","حتى","حرى","حسب","حم","حوالى","حول","حيث","حيثما","حين","حيَّ","حَبَّذَا","حَتَّى","حَذارِ","خلا","خلال","دون","دونك","ذا","ذات","ذاك","ذانك","ذانِ","ذلك","ذلكم","ذلكما","ذلكن","ذو","ذوا","ذواتا","ذواتي","ذيت","ذينك","ذَيْنِ","ذِه","ذِي","راح","رجع","رويدك","ريث","رُبَّ","زيارة","سبحان","سرعان","سنة","سنوات","سوف","سوى","سَاءَ","سَاءَمَا","شبه","شخصا","شرع","شَتَّانَ","صار","صباح","صفر","صهٍ","صهْ","ضد","ضمن","طاق","طالما","طفق","طَق","ظلّ","عاد","عام","عاما","عامة","عدا","عدة","عدد","عدم","عسى","عشر","عشرة","علق","على","عليك","عليه","عليها","علًّ","عن","عند","عندما","عوض","عين","عَدَسْ","عَمَّا","غدا","غير","ـ","ف","فان","فلان","فو","فى","في","فيم","فيما","فيه","فيها","قال","قام","قبل","قد","قطّ","قلما","قوة","كأنّما","كأين","كأيّ","كأيّن","كاد","كان","كانت","كذا","كذلك","كرب","كل","كلا","كلاهما","كلتا","كلم","كليكما","كليهما","كلّما","كلَّا","كم","كما","كي","كيت","كيف","كيفما","كَأَنَّ","كِخ","لئن","لا","لات","لاسيما","لدن","لدى","لعمر","لقاء","لك","لكم","لكما","لكن","لكنَّما","لكي","لكيلا","للامم","لم","لما","لمّا","لن","لنا","له","لها","لو","لوكالة","لولا","لوما","لي","لَسْتَ","لَسْتُ","لَسْتُم","لَسْتُمَا","لَسْتُنَّ","لَسْتِ","لَسْنَ","لَعَلَّ","لَكِنَّ","لَيْتَ","لَيْسَ","لَيْسَا","لَيْسَتَا","لَيْسَتْ","لَيْسُوا","لَِسْنَا","ما","ماانفك","مابرح","مادام","ماذا","مازال","مافتئ","مايو","متى","مثل","مذ","مساء","مع","معاذ","مقابل","مكانكم","مكانكما","مكانكنّ","مكانَك","مليار","مليون","مما","ممن","من","منذ","منها","مه","مهما","مَنْ","مِن","نحن","نحو","نعم","نفس","نفسه","نهاية","نَخْ","نِعِمّا","نِعْمَ","ها","هاؤم","هاكَ","هاهنا","هبّ","هذا","هذه","هكذا","هل","هلمَّ","هلّا","هم","هما","هن","هنا","هناك","هنالك","هو","هي","هيا","هيت","هيّا","هَؤلاء","هَاتانِ","هَاتَيْنِ","هَاتِه","هَاتِي","هَجْ","هَذا","هَذانِ","هَذَيْنِ","هَذِه","هَذِي","هَيْهَاتَ","و","و6","وا","واحد","واضاف","واضافت","واكد","وان","واهاً","واوضح","وراءَك","وفي","وقال","وقالت","وقد","وقف","وكان","وكانت","ولا","ولم","ومن","وهو","وهي","ويكأنّ","وَيْ","وُشْكَانََ","يكون","يمكن","يوم","ّأيّان"],"hy":["այդ","այլ","այն","այս","դու","դուք","եմ","են","ենք","ես","եք","է","էի","էին","էինք","էիր","էիք","էր","ըստ","թ","ի","ին","իսկ","իր","կամ","համար","հետ","հետո","մենք","մեջ","մի","ն","նա","նաև","նրա","նրանք","որ","որը","որոնք","որպես","ու","ում","պիտի","վրա","և"],"eu":["al","anitz","arabera","asko","baina","bat","batean","batek","bati","batzuei","batzuek","batzuetan","batzuk","bera","beraiek","berau","berauek","bere","berori","beroriek","beste","bezala","da","dago","dira","ditu","du","dute","edo","egin","ere","eta","eurak","ez","gainera","gu","gutxi","guzti","haiei","haiek","haietan","hainbeste","hala","han","handik","hango","hara","hari","hark","hartan","hau","hauei","hauek","hauetan","hemen","hemendik","hemengo","hi","hona","honek","honela","honetan","honi","hor","hori","horiei","horiek","horietan","horko","horra","horrek","horrela","horretan","horri","hortik","hura","izan","ni","noiz","nola","non","nondik","nongo","nor","nora","ze","zein","zen","zenbait","zenbat","zer","zergatik","ziren","zituen","zu","zuek","zuen","zuten"],"bn":["অতএব","অথচ","অথবা","অনুযায়ী","অনেক","অনেকে","অনেকেই","অন্তত","অন্য","অবধি","অবশ্য","অর্থাত","আই","আগামী","আগে","আগেই","আছে","আজ","আদ্যভাগে","আপনার","আপনি","আবার","আমরা","আমাকে","আমাদের","আমার","আমি","আর","আরও","ই","ইত্যাদি","ইহা","উচিত","উত্তর","উনি","উপর","উপরে","এ","এঁদের","এঁরা","এই","একই","একটি","একবার","একে","এক্","এখন","এখনও","এখানে","এখানেই","এটা","এটাই","এটি","এত","এতটাই","এতে","এদের","এব","এবং","এবার","এমন","এমনকী","এমনি","এর","এরা","এল","এস","এসে","ঐ","ও","ওঁদের","ওঁর","ওঁরা","ওই","ওকে","ওখানে","ওদের","ওর","ওরা","কখনও","কত","কবে","কমনে","কয়েক","কয়েকটি","করছে","করছেন","করতে","করবে","করবেন","করলে","করলেন","করা","করাই","করায়","করার","করি","করিতে","করিয়া","করিয়ে","করে","করেই","করেছিলেন","করেছে","করেছেন","করেন","কাউকে","কাছ","কাছে","কাজ","কাজে","কারও","কারণ","কি","কিংবা","কিছু","কিছুই","কিন্তু","কী","কে","কেউ","কেউই","কেখা","কেন","কোটি","কোন","কোনও","কোনো","ক্ষেত্রে","কয়েক","খুব","গিয়ে","গিয়েছে","গিয়ে","গুলি","গেছে","গেল","গেলে","গোটা","চলে","চান","চায়","চার","চালু","চেয়ে","চেষ্টা","ছাড়া","ছাড়াও","ছিল","ছিলেন","জন","জনকে","জনের","জন্য","জন্যওজে","জানতে","জানা","জানানো","জানায়","জানিয়ে","জানিয়েছে","জে","জ্নজন","টি","ঠিক","তখন","তত","তথা","তবু","তবে","তা","তাঁকে","তাঁদের","তাঁর","তাঁরা","তাঁাহারা","তাই","তাও","তাকে","তাতে","তাদের","তার","তারপর","তারা","তারৈ","তাহলে","তাহা","তাহাতে","তাহার","তিনঐ","তিনি","তিনিও","তুমি","তুলে","তেমন","তো","তোমার","থাকবে","থাকবেন","থাকা","থাকায়","থাকে","থাকেন","থেকে","থেকেই","থেকেও","দিকে","দিতে","দিন","দিয়ে","দিয়েছে","দিয়েছেন","দিলেন","দু","দুই","দুটি","দুটো","দেওয়া","দেওয়ার","দেওয়া","দেখতে","দেখা","দেখে","দেন","দেয়","দ্বারা","ধরা","ধরে","ধামার","নতুন","নয়","না","নাই","নাকি","নাগাদ","নানা","নিজে","নিজেই","নিজেদের","নিজের","নিতে","নিয়ে","নিয়ে","নেই","নেওয়া","নেওয়ার","নেওয়া","নয়","পক্ষে","পর","পরে","পরেই","পরেও","পর্যন্ত","পাওয়া","পাচ","পারি","পারে","পারেন","পি","পেয়ে","পেয়্র্","প্রতি","প্রথম","প্রভৃতি","প্রযন্ত","প্রাথমিক","প্রায়","প্রায়","ফলে","ফিরে","ফের","বক্তব্য","বদলে","বন","বরং","বলতে","বলল","বললেন","বলা","বলে","বলেছেন","বলেন","বসে","বহু","বা","বাদে","বার","বি","বিনা","বিভিন্ন","বিশেষ","বিষয়টি","বেশ","বেশি","ব্যবহার","ব্যাপারে","ভাবে","ভাবেই","মতো","মতোই","মধ্যভাগে","মধ্যে","মধ্যেই","মধ্যেও","মনে","মাত্র","মাধ্যমে","মোট","মোটেই","যখন","যত","যতটা","যথেষ্ট","যদি","যদিও","যা","যাঁর","যাঁরা","যাওয়া","যাওয়ার","যাওয়া","যাকে","যাচ্ছে","যাতে","যাদের","যান","যাবে","যায়","যার","যারা","যিনি","যে","যেখানে","যেতে","যেন","যেমন","র","রকম","রয়েছে","রাখা","রেখে","লক্ষ","শুধু","শুরু","সঙ্গে","সঙ্গেও","সব","সবার","সমস্ত","সম্প্রতি","সহ","সহিত","সাধারণ","সামনে","সি","সুতরাং","সে","সেই","সেখান","সেখানে","সেটা","সেটাই","সেটাও","সেটি","স্পষ্ট","স্বয়ং","হইতে","হইবে","হইয়া","হওয়া","হওয়ায়","হওয়ার","হচ্ছে","হত","হতে","হতেই","হন","হবে","হবেন","হয়","হয়তো","হয়নি","হয়ে","হয়েই","হয়েছিল","হয়েছে","হয়েছেন","হল","হলে","হলেই","হলেও","হলো","হাজার","হিসাবে","হৈলে","হোক","হয়"],"br":["\'blam","\'d","\'m","\'r","\'ta","\'vat","\'z","\'zo","a","a:","aba","abalamour","abaoe","ac\'hane","ac\'hanoc\'h","ac\'hanomp","ac\'hanon","ac\'hanout","adal","adalek","adarre","ae","aec\'h","aed","aemp","aen","aent","aes","afe","afec\'h","afed","afemp","afen","afent","afes","ag","ah","aimp","aint","aio","aiou","aje","ajec\'h","ajed","ajemp","ajen","ajent","ajes","al","alato","alies","aliesa\xf1","alkent","all","allas","allo","all\xf4","am","ama\xf1","amzer","an","anezha\xf1","anezhe","anezhi","anezho","anvet","aon","aotren","ar","arall","araok","araoki","araoza\xf1","araozo","araozoc\'h","araozomp","araozon","araozor","araozout","arbenn","arre","atalek","atav","az","azalek","aziraza\xf1","azirazi","azirazo","azirazoc\'h","azirazomp","azirazon","azirazor","azirazout","b:","ba","ba\'l","ba\'n","ba\'r","bad","bah","bal","ban","bar","basta\xf1","befe","bell","benaos","benn","bennag","bennak","bennozh","bep","bepred","berr","berzh","bet","betek","betra","bev","bevet","bez","beza\xf1","beze","bezent","bezet","bezh","bezit","bezomp","bihan","bije","biou","biskoazh","blam","bo","boa","bominapl","boudoudom","bouez","boull","boum","bout","bras","brasa\xf1","brav","bravo","brema\xf1","bres","brokenn","bronn","brrr","brutal","buhezek","c\'h:","c\'haout","c\'he","c\'hem","c\'herz","c\'he\xf1ver","c\'hichen","c\'hiz","c\'hoazh","c\'horre","c\'houde","c\'houst","c\'hreiz","c\'hwec\'h","c\'hwec\'hvet","c\'hwezek","c\'hwi","ch:","chaous","chik","chit","chom","chut","d\'","d\'al","d\'an","d\'ar","d\'az","d\'e","d\'he","d\'ho","d\'hol","d\'hon","d\'hor","d\'o","d\'ober","d\'ul","d\'un","d\'ur","d:","da","dak","daka","dal","dalbezh","dalc\'hmat","dalit","damdost","damhe\xf1vel","damm","dan","danvez","dao","daol","daonet","daou","daoust","daouzek","daouzekvet","darn","dastrewi\xf1","dav","davedoc\'h","davedomp","davedon","davedor","davedout","davet","daveta\xf1","davete","daveti","daveto","defe","dehou","dek","dekvet","den","deoc\'h","deomp","deor","derc\'hel","deus","dez","deze","dezha\xf1","dezhe","dezhi","dezho","di","diabarzh","diagent","diar","diaraok","diavaez","dibaoe","dibaot","dibar","dic\'hala\xf1","didiac\'h","dienn","difer","diganeoc\'h","diganeomp","diganeor","diganimp","diganin","diganit","digant","diganta\xf1","digante","diganti","diganto","digemmesk","diget","digor","digoret","dija","dije","dimp","din","dinaou","dindan","dindana\xf1","dindani","dindano","dindanoc\'h","dindanomp","dindanon","dindanor","dindanout","diouta\xf1","dioute","diouti","diouto","diouzh","diouzhin","diouzhit","diouzhoc\'h","diouzhomp","diouzhor","dirak","diraza\xf1","dirazi","dirazo","dirazoc\'h","dirazomp","dirazon","dirazor","dirazout","dishe\xf1vel","dispar","distank","dister","distera\xf1","disterig","distro","dit","divaez","diwar","diwezhat","diwezha\xf1","do","doa","doare","dont","dost","doue","douetus","douez","doug","draou","drao\xf1","dre","drede","dreist","dreista\xf1","dreisti","dreisto","dreistoc\'h","dreistomp","dreiston","dreistor","dreistout","drek","dre\xf1v","dring","dro","du","e","e:","eas","ebet","ec\'h","edo","edoc\'h","edod","edomp","edon","edont","edos","eer","eeun","efed","egedoc\'h","egedomp","egedon","egedor","egedout","eget","egeta\xf1","egete","egeti","egeto","eh","eil","eilvet","eizh","eizhvet","ejoc\'h","ejod","ejomp","ejont","ejout","el","em","emaint","emaoc\'h","emaomp","emaon","emaout","ema\xf1","eme","emeur","emeza\xf1","emezi","emezo","emezoc\'h","emezomp","emezon","emezout","emporzhia\xf1","en","end","endan","endra","enep","enna\xf1","enni","enno","ennoc\'h","ennomp","ennon","ennor","ennout","enta","eo","eomp","eont","eor","eot","er","erbet","erfin","esa","esae","espar","estlamm","estra\xf1j","eta","etre","etreoc\'h","etrezo","etrezoc\'h","etrezomp","etrezor","euh","eur","eus","evel","evelato","eveldoc\'h","eveldomp","eveldon","eveldor","eveldout","evelkent","evelta\xf1","evelte","evelti","evelto","evidoc\'h","evidomp","evidon","evidor","evidout","evit","evita\xf1","evite","eviti","evito","ez","e\xf1","f:","fac\'h","fall","fed","feiz","fenn","fezh","fin","finsalvet","foei","fouilheza\xf1","g:","gallout","ganeoc\'h","ganeomp","ganin","ganit","gant","ganta\xf1","ganti","ganto","gaout","gast","gein","gellout","genndost","genta\xf1","ger","gerz","get","ge\xf1ver","gichen","gin","giz","glan","gloev","goll","gorre","goude","gouez","gouezit","gouezomp","goulz","gounnar","gour","goust","gouze","gouzout","gra","grak","grec\'h","greiz","grenn","greomp","grit","gro\xf1s","gutez","gwall","gwashoc\'h","gwazh","gwech","gwechall","gwecho\xf9","gwell","gwezh","gwezhall","gwezharall","gwezho\xf9","gwig","gwirionez","gwitibunan","g\xear","h:","ha","hag","han","hanter","hanterc\'hantad","hanterkantved","harz","ha\xf1","ha\xf1val","he","hebio\xf9","hec\'h","hei","hein","hem","hema\xf1","hen","hend","henhont","henn","hennezh","hent","hep","hervez","herveza\xf1","hervezi","hervezo","hervezoc\'h","hervezomp","hervezon","hervezor","hervezout","heul","heulia\xf1","hevelep","heverk","he\xf1vel","he\xf1velat","he\xf1vela\xf1","he\xf1veli\xf1","he\xf1veloc\'h","he\xf1velout","hi","hilh","hini","hirie","hirio","hiziv","hiziviken","ho","hoali\xf1","hoc\'h","hogen","hogos","hogozik","hol","holl","hol\xe0","homa\xf1","hon","honhont","honnezh","hont","hop","hopala","hor","hou","houp","hudu","hue","hui","hum","hurrah","i","i:","in","int","is","ispisial","isurzhiet","it","ivez","izela\xf1","j:","just","k:","kae","kaer","kalon","kalz","kant","kaout","kar","kazi","keid","kein","keit","kel","kellies","kelo\xf9","kement","ken","kenkent","kenkoulz","kenment","kent","kenta\xf1","kentizh","kentoc\'h","kentre","ker","kerkent","kerz","kerzh","ket","keta","ke\xf1ver","ke\xf1verel","ke\xf1verius","kichen","kichenik","kit","kiz","klak","klek","klik","komprenet","komz","kont","korf","korre","koulskoude","koulz","koust","krak","krampouezh","krec\'h","kreiz","kuit","kwir","l:","la","laez","laoskel","laouen","lavar","lavaret","lavarout","lec\'h","lein","leizh","lerc\'h","leun","leuskel","lew","lies","liesa\xf1","lod","lusk","l\xe2r","l\xe2rout","m:","ma","ma\'z","mac\'h","mac\'hat","mac\'ha\xf1","mac\'hoc\'h","mad","maez","maksimal","mann","mar","mard","marg","marzh","mat","ma\xf1","me","memes","memestra","merkapl","mersi","mes","mesk","met","meur","mil","minimal","moan","moaniaat","mod","mont","mout","mui","muia\xf1","muioc\'h","n","n\'","n:","na","nag","naontek","naturel","nav","navet","ne","nebeudig","nebeut","nebeuta\xf1","nebeutoc\'h","neketa","nemedoc\'h","nemedomp","nemedon","nemedor","nemedout","nemet","nemeta\xf1","nemete","nemeti","nemeto","nemeur","neoac\'h","nepell","nerzh","nes","neseser","netra","neubeudo\xf9","neuhe","neuze","nevez","newazh","nez","ni","nikun","niverus","nul","o","o:","oa","oac\'h","oad","oamp","oan","oant","oar","oas","ober","oc\'h","oc\'ho","oc\'hola","oc\'hpenn","oh","ohe","oll\xe9","olole","ol\xe9","omp","on","ordin","ordinal","ouejoc\'h","ouejod","ouejomp","ouejont","ouejout","ouek","ouezas","ouezi","ouezimp","ouezin","ouezint","ouezis","ouezo","ouezoc\'h","ouezor","ouf","oufe","oufec\'h","oufed","oufemp","oufen","oufent","oufes","ouie","ouiec\'h","ouied","ouiemp","ouien","ouient","ouies","ouije","ouijec\'h","ouijed","ouijemp","ouijen","ouijent","ouijes","out","outa\xf1","outi","outo","ouzer","ouzh","ouzhin","ouzhit","ouzhoc\'h","ouzhomp","ouzhor","ouzhpenn","ouzhpennik","ouzoc\'h","ouzomp","ouzon","ouzont","ouzout","p\'","p:","pa","pad","padal","paf","pan","panevedeoc\'h","panevedo","panevedomp","panevedon","panevedout","panevet","paneveta\xf1","paneveti","pas","paseet","pe","peadra","peder","pedervet","pedervetvet","pefe","pegeit","pegement","pegen","pegiz","pegoulz","pehini","pelec\'h","pell","pemod","pemp","pempved","pemzek","penaos","penn","peogwir","peotramant","pep","perak","perc\'henna\xf1","pergen","permeti\xf1","peseurt","pet","petiaoul","petoare","petra","peur","peurgetket","peurhe\xf1vel","peurliesa\xf1","peurvuia\xf1","peus","peustost","peuz","pevar","pevare","pevarevet","pevarzek","pez","peze","pezh","pff","pfft","pfut","picher","pif","pife","pign","pije","pikol","pitiaoul","piv","plaouf","plok","plouf","po","poa","poelladus","pof","pok","posupl","pouah","pourc\'henn","prest","prestik","prim","prin","provostapl","pst","pu","pur","r:","ra","rae","raec\'h","raed","raemp","raen","raent","raes","rafe","rafec\'h","rafed","rafemp","rafen","rafent","rafes","rag","raimp","raint","raio","raje","rajec\'h","rajed","rajemp","rajen","rajent","rajes","rak","ral","ran","rankout","raok","razh","re","reas","reer","regenno\xf9","rei\xf1","rejoc\'h","rejod","rejomp","rejont","rejout","rener","renta\xf1","reoc\'h","reomp","reont","reor","reot","resis","ret","reve","rez","ri","rik","rin","ris","rit","rouez","s:","sac\'h","sant","sav","sa\xf1set","se","sed","seitek","seizh","seizhvet","sell","sellit","ser","setu","seul","seurt","siwazh","skigna\xf1","skoaz","skouer","sort","souden","souvita\xf1","so\xf1j","speria\xf1","spriri\xf1","stad","stlabeza\xf1","stop","strana\xf1","strewi\xf1","strishaat","stumm","sujed","surtoud","t:","ta","taer","tailh","tak","tal","talvoudegezh","tamm","tanav","taol","te","techet","teir","teirvet","telt","teltenn","teus","teut","teuteu","ti","tik","toa","tok","tost","tostig","toud","touesk","touez","toull","tra","trantenn","trao\xf1","trawalc\'h","tre","trede","tregont","tremenet","tri","trivet","triwec\'h","trizek","tro","trugarez","trumm","tsoin","tsouin","tu","tud","u:","ugent","uhel","uhela\xf1","ul","un","unan","unanez","unanig","unnek","unnekvet","ur","urzh","us","v:","va","vale","van","vare","vat","vefe","vefec\'h","vefed","vefemp","vefen","vefent","vefes","vesk","vete","vez","vezan","veza\xf1","veze","vezec\'h","vezed","vezemp","vezen","vezent","vezer","vezes","vezez","vezit","vezomp","vezont","vi","vihan","vihana\xf1","vije","vijec\'h","vijed","vijemp","vijen","vijent","vijes","viken","vimp","vin","vint","vior","viot","virviken","viskoazh","vlan","vlaou","vo","vod","voe","voec\'h","voed","voemp","voen","voent","voes","vont","vostapl","vrac\'h","vrasa\xf1","vrema\xf1","w:","walc\'h","war","warna\xf1","warni","warno","warnoc\'h","warnomp","warnon","warnor","warnout","wazh","wech","wecho\xf9","well","y:","you","youadenn","youc\'hadenn","youc\'hou","z:","za","zan","zaw","zeu","zi","ziar","zigarez","ziget","zindan","zioc\'h","ziouzh","zirak","zivout","ziwar","ziwezha\xf1","zo","zoken","zokenoc\'h","zouesk","zouez","zro","zu"],"bg":["а","автентичен","аз","ако","ала","бе","без","беше","би","бивш","бивша","бившо","бил","била","били","било","благодаря","близо","бъдат","бъде","бяха","в","вас","ваш","ваша","вероятно","вече","взема","ви","вие","винаги","внимава","време","все","всеки","всички","всичко","всяка","във","въпреки","върху","г","ги","главен","главна","главно","глас","го","година","години","годишен","д","да","дали","два","двама","двамата","две","двете","ден","днес","дни","до","добра","добре","добро","добър","докато","докога","дори","досега","доста","друг","друга","други","е","евтин","едва","един","една","еднаква","еднакви","еднакъв","едно","екип","ето","живот","за","забавям","зад","заедно","заради","засега","заспал","затова","защо","защото","и","из","или","им","има","имат","иска","й","каза","как","каква","какво","както","какъв","като","кога","когато","което","които","кой","който","колко","която","къде","където","към","лесен","лесно","ли","лош","м","май","малко","ме","между","мек","мен","месец","ми","много","мнозина","мога","могат","може","мокър","моля","момента","му","н","на","над","назад","най","направи","напред","например","нас","не","него","нещо","нея","ни","ние","никой","нито","нищо","но","нов","нова","нови","новина","някои","някой","няколко","няма","обаче","около","освен","особено","от","отгоре","отново","още","пак","по","повече","повечето","под","поне","поради","после","почти","прави","пред","преди","през","при","пък","първата","първи","първо","пъти","равен","равна","с","са","сам","само","се","сега","си","син","скоро","след","следващ","сме","смях","според","сред","срещу","сте","съм","със","също","т","т.н.","тази","така","такива","такъв","там","твой","те","тези","ти","то","това","тогава","този","той","толкова","точно","три","трябва","тук","тъй","тя","тях","у","утре","харесва","хиляди","ч","часа","че","често","чрез","ще","щом","юмрук","я","як"],"ca":["a","abans","ac\xed","ah","aix\xed","aix\xf2","al","aleshores","algun","alguna","algunes","alguns","alhora","all\xe0","all\xed","all\xf2","als","altra","altre","altres","amb","ambdues","ambd\xf3s","anar","ans","apa","aquell","aquella","aquelles","aquells","aquest","aquesta","aquestes","aquests","aqu\xed","baix","bastant","b\xe9","cada","cadascuna","cadascunes","cadascuns","cadasc\xfa","com","consegueixo","conseguim","conseguir","consigueix","consigueixen","consigueixes","contra","d\'un","d\'una","d\'unes","d\'uns","dalt","de","del","dels","des","des de","despr\xe9s","dins","dintre","donat","doncs","durant","e","eh","el","elles","ells","els","em","en","encara","ens","entre","era","erem","eren","eres","es","esta","estan","estat","estava","estaven","estem","esteu","estic","est\xe0","est\xe0vem","est\xe0veu","et","etc","ets","fa","faig","fan","fas","fem","fer","feu","fi","fins","fora","gaireb\xe9","ha","han","has","haver","havia","he","hem","heu","hi","ho","i","igual","iguals","incl\xf2s","ja","jo","l\'hi","la","les","li","li\'n","llarg","llavors","m\'he","ma","mal","malgrat","mateix","mateixa","mateixes","mateixos","me","mentre","meu","meus","meva","meves","mode","molt","molta","moltes","molts","mon","mons","m\xe9s","n\'he","n\'hi","ne","ni","no","nogensmenys","nom\xe9s","nosaltres","nostra","nostre","nostres","o","oh","oi","on","pas","pel","pels","per","per que","perqu\xe8","per\xf2","poc","poca","pocs","podem","poden","poder","podeu","poques","potser","primer","propi","puc","qual","quals","quan","quant","que","quelcom","qui","quin","quina","quines","quins","qu\xe8","s\'ha","s\'han","sa","sabem","saben","saber","sabeu","sap","saps","semblant","semblants","sense","ser","ses","seu","seus","seva","seves","si","sobre","sobretot","soc","solament","sols","som","son","sons","sota","sou","s\xf3c","s\xf3n","t\'ha","t\'han","t\'he","ta","tal","tamb\xe9","tampoc","tan","tant","tanta","tantes","te","tene","tenim","tenir","teniu","teu","teus","teva","teves","tinc","ton","tons","tot","tota","totes","tots","un","una","unes","uns","us","va","vaig","vam","van","vas","veu","vosaltres","vostra","vostre","vostres","\xe9rem","\xe9reu","\xe9s","\xe9ssent","\xfaltim","\xfas"],"zh":["、","。","〈","〉","《","》","一","一个","一些","一何","一切","一则","一方面","一旦","一来","一样","一种","一般","一转眼","七","万一","三","上","上下","下","不","不仅","不但","不光","不单","不只","不外乎","不如","不妨","不尽","不尽然","不得","不怕","不惟","不成","不拘","不料","不是","不比","不然","不特","不独","不管","不至于","不若","不论","不过","不问","与","与其","与其说","与否","与此同时","且","且不说","且说","两者","个","个别","中","临","为","为了","为什么","为何","为止","为此","为着","乃","乃至","乃至于","么","之","之一","之所以","之类","乌乎","乎","乘","九","也","也好","也罢","了","二","二来","于","于是","于是乎","云云","云尔","五","些","亦","人","人们","人家","什","什么","什么样","今","介于","仍","仍旧","从","从此","从而","他","他人","他们","他们们","以","以上","以为","以便","以免","以及","以故","以期","以来","以至","以至于","以致","们","任","任何","任凭","会","似的","但","但凡","但是","何","何以","何况","何处","何时","余外","作为","你","你们","使","使得","例如","依","依据","依照","便于","俺","俺们","倘","倘使","倘或","倘然","倘若","借","借傥然","假使","假如","假若","做","像","儿","先不先","光","光是","全体","全部","八","六","兮","共","关于","关于具体地说","其","其一","其中","其二","其他","其余","其它","其次","具体地说","具体说来","兼之","内","再","再其次","再则","再有","再者","再者说","再说","冒","冲","况且","几","几时","凡","凡是","凭","凭借","出于","出来","分","分别","则","则甚","别","别人","别处","别是","别的","别管","别说","到","前后","前此","前者","加之","加以","区","即","即令","即使","即便","即如","即或","即若","却","去","又","又及","及","及其","及至","反之","反而","反过来","反过来说","受到","另","另一方面","另外","另悉","只","只当","只怕","只是","只有","只消","只要","只限","叫","叮咚","可","可以","可是","可见","各","各个","各位","各种","各自","同","同时","后","后者","向","向使","向着","吓","吗","否则","吧","吧哒","含","吱","呀","呃","呕","呗","呜","呜呼","呢","呵","呵呵","呸","呼哧","咋","和","咚","咦","咧","咱","咱们","咳","哇","哈","哈哈","哉","哎","哎呀","哎哟","哗","哟","哦","哩","哪","哪个","哪些","哪儿","哪天","哪年","哪怕","哪样","哪边","哪里","哼","哼唷","唉","唯有","啊","啐","啥","啦","啪达","啷当","喂","喏","喔唷","喽","嗡","嗡嗡","嗬","嗯","嗳","嘎","嘎登","嘘","嘛","嘻","嘿","嘿嘿","四","因","因为","因了","因此","因着","因而","固然","在","在下","在于","地","基于","处在","多","多么","多少","大","大家","她","她们","好","如","如上","如上所述","如下","如何","如其","如同","如是","如果","如此","如若","始而","孰料","孰知","宁","宁可","宁愿","宁肯","它","它们","对","对于","对待","对方","对比","将","小","尔","尔后","尔尔","尚且","就","就是","就是了","就是说","就算","就要","尽","尽管","尽管如此","岂但","己","已","已矣","巴","巴巴","年","并","并且","庶乎","庶几","开外","开始","归","归齐","当","当地","当然","当着","彼","彼时","彼此","往","待","很","得","得了","怎","怎么","怎么办","怎么样","怎奈","怎样","总之","总的来看","总的来说","总的说来","总而言之","恰恰相反","您","惟其","慢说","我","我们","或","或则","或是","或曰","或者","截至","所","所以","所在","所幸","所有","才","才能","打","打从","把","抑或","拿","按","按照","换句话说","换言之","据","据此","接着","故","故此","故而","旁人","无","无宁","无论","既","既往","既是","既然","日","时","时候","是","是以","是的","更","曾","替","替代","最","月","有","有些","有关","有及","有时","有的","望","朝","朝着","本","本人","本地","本着","本身","来","来着","来自","来说","极了","果然","果真","某","某个","某些","某某","根据","欤","正值","正如","正巧","正是","此","此地","此处","此外","此时","此次","此间","毋宁","每","每当","比","比及","比如","比方","没奈何","沿","沿着","漫说","点","焉","然则","然后","然而","照","照着","犹且","犹自","甚且","甚么","甚或","甚而","甚至","甚至于","用","用来","由","由于","由是","由此","由此可见","的","的确","的话","直到","相对而言","省得","看","眨眼","着","着呢","矣","矣乎","矣哉","离","秒","称","竟而","第","等","等到","等等","简言之","管","类如","紧接着","纵","纵令","纵使","纵然","经","经过","结果","给","继之","继后","继而","综上所述","罢了","者","而","而且","而况","而后","而外","而已","而是","而言","能","能否","腾","自","自个儿","自从","自各儿","自后","自家","自己","自打","自身","至","至于","至今","至若","致","般的","若","若夫","若是","若果","若非","莫不然","莫如","莫若","虽","虽则","虽然","虽说","被","要","要不","要不是","要不然","要么","要是","譬喻","譬如","让","许多","论","设使","设或","设若","诚如","诚然","该","说","说来","请","诸","诸位","诸如","谁","谁人","谁料","谁知","贼死","赖以","赶","起","起见","趁","趁着","越是","距","跟","较","较之","边","过","还","还是","还有","还要","这","这一来","这个","这么","这么些","这么样","这么点儿","这些","这会儿","这儿","这就是说","这时","这样","这次","这般","这边","这里","进而","连","连同","逐步","通过","遵循","遵照","那","那个","那么","那么些","那么样","那些","那会儿","那儿","那时","那样","那般","那边","那里","都","鄙人","鉴于","针对","阿","除","除了","除外","除开","除此之外","除非","随","随后","随时","随着","难道说","零","非","非但","非徒","非特","非独","靠","顺","顺着","首先","︿","！","＃","＄","％","＆","（","）","＊","＋","，","０","１","２","３","４","５","６","７","８","９","：","；","＜","＞","？","＠","［","］","｛","｜","｝","～","￥"],"hr":["a","ako","ali","bi","bih","bila","bili","bilo","bio","bismo","biste","biti","bumo","da","do","duž","ga","hoće","hoćemo","hoćete","hoćeš","hoću","i","iako","ih","ili","iz","ja","je","jedna","jedne","jedno","jer","jesam","jesi","jesmo","jest","jeste","jesu","jim","joj","još","ju","kada","kako","kao","koja","koje","koji","kojima","koju","kroz","li","me","mene","meni","mi","mimo","moj","moja","moje","mu","na","nad","nakon","nam","nama","nas","naš","naša","naše","našeg","ne","nego","neka","neki","nekog","neku","nema","netko","neće","nećemo","nećete","nećeš","neću","nešto","ni","nije","nikoga","nikoje","nikoju","nisam","nisi","nismo","niste","nisu","njega","njegov","njegova","njegovo","njemu","njezin","njezina","njezino","njih","njihov","njihova","njihovo","njim","njima","njoj","nju","no","o","od","odmah","on","ona","oni","ono","ova","pa","pak","po","pod","pored","prije","s","sa","sam","samo","se","sebe","sebi","si","smo","ste","su","sve","svi","svog","svoj","svoja","svoje","svom","ta","tada","taj","tako","te","tebe","tebi","ti","to","toj","tome","tu","tvoj","tvoja","tvoje","u","uz","vam","vama","vas","vaš","vaša","vaše","već","vi","vrlo","za","zar","će","ćemo","ćete","ćeš","ću","što"],"cs":["a","aby","ahoj","aj","ale","anebo","ani","aniž","ano","asi","aspoň","atd","atp","az","ačkoli","až","bez","beze","bl\xedzko","bohužel","brzo","bude","budem","budeme","budes","budete","budeš","budou","budu","by","byl","byla","byli","bylo","byly","bys","byt","b\xfdt","během","chce","chceme","chcete","chceš","chci","cht\xedt","chtěj\xed","chut\'","chuti","ci","clanek","clanku","clanky","co","coz","což","cz","daleko","dalsi","dalš\xed","den","deset","design","devaten\xe1ct","devět","dnes","do","dobr\xfd","docela","dva","dvacet","dvan\xe1ct","dvě","d\xe1l","d\xe1le","děkovat","děkujeme","děkuji","email","ho","hodně","i","jak","jakmile","jako","jakož","jde","je","jeden","jeden\xe1ct","jedna","jedno","jednou","jedou","jeho","jehož","jej","jeji","jejich","jej\xed","jelikož","jemu","jen","jenom","jenž","jeste","jestli","jestliže","ještě","jež","ji","jich","jimi","jinak","jine","jin\xe9","jiz","již","jsem","jses","jseš","jsi","jsme","jsou","jste","j\xe1","j\xed","j\xedm","j\xedž","jšte","k","kam","každ\xfd","kde","kdo","kdy","kdyz","když","ke","kolik","kromě","ktera","ktere","kteri","kterou","ktery","kter\xe1","kter\xe9","kter\xfd","kteři","kteř\xed","ku","kvůli","ma","maj\xed","mate","me","mezi","mi","mit","mne","mnou","mně","moc","mohl","mohou","moje","moji","možn\xe1","muj","mus\xed","muze","my","m\xe1","m\xe1lo","m\xe1m","m\xe1me","m\xe1te","m\xe1š","m\xe9","m\xed","m\xedt","mě","můj","může","na","nad","nade","nam","napiste","napište","naproti","nas","nasi","načež","naše","naši","ne","nebo","nebyl","nebyla","nebyli","nebyly","nechť","nedělaj\xed","neděl\xe1","neděl\xe1m","neděl\xe1me","neděl\xe1te","neděl\xe1š","neg","nejsi","nejsou","nemaj\xed","nem\xe1me","nem\xe1te","neměl","neni","nen\xed","nestač\xed","nevad\xed","nez","než","nic","nich","nimi","nove","novy","nov\xe9","nov\xfd","nula","n\xe1","n\xe1m","n\xe1mi","n\xe1s","n\xe1š","n\xed","n\xedm","ně","něco","nějak","někde","někdo","němu","němuž","o","od","ode","on","ona","oni","ono","ony","osm","osmn\xe1ct","pak","patn\xe1ct","po","pod","podle","pokud","potom","pouze","pozdě","poř\xe1d","prave","prav\xe9","pred","pres","pri","pro","proc","prostě","pros\xedm","proti","proto","protoze","protože","proč","prvni","prvn\xed","pr\xe1ve","pta","pět","před","přede","přes","přese","při","přičemž","re","rovně","s","se","sedm","sedmn\xe1ct","si","sice","skoro","sm\xed","směj\xed","snad","spolu","sta","sto","strana","st\xe9","sve","svych","svym","svymi","sv\xe9","sv\xfdch","sv\xfdm","sv\xfdmi","svůj","ta","tady","tak","take","takhle","taky","takze","tak\xe9","takže","tam","tamhle","tamhleto","tamto","tato","te","tebe","tebou","ted\'","tedy","tema","ten","tento","teto","ti","tim","timto","tipy","tis\xedc","tis\xedce","to","tobě","tohle","toho","tohoto","tom","tomto","tomu","tomuto","toto","trošku","tu","tuto","tvoje","tv\xe1","tv\xe9","tvůj","ty","tyto","t\xe9ma","t\xe9to","t\xedm","t\xedmto","tě","těm","těma","těmu","třeba","tři","třin\xe1ct","u","určitě","uz","už","v","vam","vas","vase","vaše","vaši","ve","vedle","večer","vice","vlastně","vsak","vy","v\xe1m","v\xe1mi","v\xe1s","v\xe1š","v\xedce","však","všechen","všechno","všichni","vůbec","vždy","z","za","zat\xedmco","zač","zda","zde","ze","zpet","zpravy","zpr\xe1vy","zpět","čau","či","čl\xe1nek","čl\xe1nku","čl\xe1nky","čtrn\xe1ct","čtyři","šest","šestn\xe1ct","že"],"da":["ad","af","aldrig","alle","alt","anden","andet","andre","at","bare","begge","blev","blive","bliver","da","de","dem","den","denne","der","deres","det","dette","dig","din","dine","disse","dit","dog","du","efter","ej","eller","en","end","ene","eneste","enhver","er","et","far","fem","fik","fire","flere","fleste","for","fordi","forrige","fra","f\xe5","f\xe5r","f\xf8r","god","godt","ham","han","hans","har","havde","have","hej","helt","hende","hendes","her","hos","hun","hvad","hvem","hver","hvilken","hvis","hvor","hvordan","hvorfor","hvorn\xe5r","i","ikke","ind","ingen","intet","ja","jeg","jer","jeres","jo","kan","kom","komme","kommer","kun","kunne","lad","lav","lidt","lige","lille","man","mand","mange","med","meget","men","mens","mere","mig","min","mine","mit","mod","m\xe5","ned","nej","ni","nogen","noget","nogle","nu","ny","nyt","n\xe5r","n\xe6r","n\xe6ste","n\xe6sten","og","ogs\xe5","okay","om","op","os","otte","over","p\xe5","se","seks","selv","ser","ses","sig","sige","sin","sine","sit","skal","skulle","som","stor","store","syv","s\xe5","s\xe5dan","tag","tage","thi","ti","til","to","tre","ud","under","var","ved","vi","vil","ville","vor","vores","v\xe6re","v\xe6ret"],"nl":["aan","aangaande","aangezien","achte","achter","achterna","af","afgelopen","al","aldaar","aldus","alhoewel","alias","alle","allebei","alleen","alles","als","alsnog","altijd","altoos","ander","andere","anders","anderszins","beetje","behalve","behoudens","beide","beiden","ben","beneden","bent","bepaald","betreffende","bij","bijna","bijv","binnen","binnenin","blijkbaar","blijken","boven","bovenal","bovendien","bovengenoemd","bovenstaand","bovenvermeld","buiten","bv","daar","daardoor","daarheen","daarin","daarna","daarnet","daarom","daarop","daaruit","daarvanlangs","dan","dat","de","deden","deed","der","derde","derhalve","dertig","deze","dhr","die","dikwijls","dit","doch","doe","doen","doet","door","doorgaand","drie","duizend","dus","echter","een","eens","eer","eerdat","eerder","eerlang","eerst","eerste","eigen","eigenlijk","elk","elke","en","enig","enige","enigszins","enkel","er","erdoor","erg","ergens","etc","etcetera","even","eveneens","evenwel","gauw","ge","gedurende","geen","gehad","gekund","geleden","gelijk","gemoeten","gemogen","genoeg","geweest","gewoon","gewoonweg","haar","haarzelf","had","hadden","hare","heb","hebben","hebt","hedden","heeft","heel","hem","hemzelf","hen","het","hetzelfde","hier","hierbeneden","hierboven","hierin","hierna","hierom","hij","hijzelf","hoe","hoewel","honderd","hun","hunne","ieder","iedere","iedereen","iemand","iets","ik","ikzelf","in","inderdaad","inmiddels","intussen","inzake","is","ja","je","jezelf","jij","jijzelf","jou","jouw","jouwe","juist","jullie","kan","klaar","kon","konden","krachtens","kun","kunnen","kunt","laatst","later","liever","lijken","lijkt","maak","maakt","maakte","maakten","maar","mag","maken","me","meer","meest","meestal","men","met","mevr","mezelf","mij","mijn","mijnent","mijner","mijzelf","minder","miss","misschien","missen","mits","mocht","mochten","moest","moesten","moet","moeten","mogen","mr","mrs","mw","na","naar","nadat","nam","namelijk","nee","neem","negen","nemen","nergens","net","niemand","niet","niets","niks","noch","nochtans","nog","nogal","nooit","nu","nv","of","ofschoon","om","omdat","omhoog","omlaag","omstreeks","omtrent","omver","ondanks","onder","ondertussen","ongeveer","ons","onszelf","onze","onzeker","ooit","ook","op","opnieuw","opzij","over","overal","overeind","overige","overigens","paar","pas","per","precies","recent","redelijk","reeds","rond","rondom","samen","sedert","sinds","sindsdien","slechts","sommige","spoedig","steeds","tamelijk","te","tegen","tegenover","tenzij","terwijl","thans","tien","tiende","tijdens","tja","toch","toe","toen","toenmaals","toenmalig","tot","totdat","tussen","twee","tweede","u","uit","uitgezonderd","uw","vaak","vaakwat","van","vanaf","vandaan","vanuit","vanwege","veel","veeleer","veertig","verder","verscheidene","verschillende","vervolgens","via","vier","vierde","vijf","vijfde","vijftig","vol","volgend","volgens","voor","vooraf","vooral","vooralsnog","voorbij","voordat","voordezen","voordien","voorheen","voorop","voorts","vooruit","vrij","vroeg","waar","waarom","waarschijnlijk","wanneer","want","waren","was","wat","we","wederom","weer","weg","wegens","weinig","wel","weldra","welk","welke","werd","werden","werder","wezen","whatever","wie","wiens","wier","wij","wijzelf","wil","wilden","willen","word","worden","wordt","zal","ze","zei","zeker","zelf","zelfde","zelfs","zes","zeven","zich","zichzelf","zij","zijn","zijne","zijzelf","zo","zoals","zodat","zodra","zonder","zou","zouden","zowat","zulk","zulke","zullen","zult"],"en":["\'ll","\'tis","\'twas","\'ve","10","39","a","a\'s","able","ableabout","about","above","abroad","abst","accordance","according","accordingly","across","act","actually","ad","added","adj","adopted","ae","af","affected","affecting","affects","after","afterwards","ag","again","against","ago","ah","ahead","ai","ain\'t","aint","al","all","allow","allows","almost","alone","along","alongside","already","also","although","always","am","amid","amidst","among","amongst","amoungst","amount","an","and","announce","another","any","anybody","anyhow","anymore","anyone","anything","anyway","anyways","anywhere","ao","apart","apparently","appear","appreciate","appropriate","approximately","aq","ar","are","area","areas","aren","aren\'t","arent","arise","around","arpa","as","aside","ask","asked","asking","asks","associated","at","au","auth","available","aw","away","awfully","az","b","ba","back","backed","backing","backs","backward","backwards","bb","bd","be","became","because","become","becomes","becoming","been","before","beforehand","began","begin","beginning","beginnings","begins","behind","being","beings","believe","below","beside","besides","best","better","between","beyond","bf","bg","bh","bi","big","bill","billion","biol","bj","bm","bn","bo","both","bottom","br","brief","briefly","bs","bt","but","buy","bv","bw","by","bz","c","c\'mon","c\'s","ca","call","came","can","can\'t","cannot","cant","caption","case","cases","cause","causes","cc","cd","certain","certainly","cf","cg","ch","changes","ci","ck","cl","clear","clearly","click","cm","cmon","cn","co","co.","com","come","comes","computer","con","concerning","consequently","consider","considering","contain","containing","contains","copy","corresponding","could","could\'ve","couldn","couldn\'t","couldnt","course","cr","cry","cs","cu","currently","cv","cx","cy","cz","d","dare","daren\'t","darent","date","de","dear","definitely","describe","described","despite","detail","did","didn","didn\'t","didnt","differ","different","differently","directly","dj","dk","dm","do","does","doesn","doesn\'t","doesnt","doing","don","don\'t","done","dont","doubtful","down","downed","downing","downs","downwards","due","during","dz","e","each","early","ec","ed","edu","ee","effect","eg","eh","eight","eighty","either","eleven","else","elsewhere","empty","end","ended","ending","ends","enough","entirely","er","es","especially","et","et-al","etc","even","evenly","ever","evermore","every","everybody","everyone","everything","everywhere","ex","exactly","example","except","f","face","faces","fact","facts","fairly","far","farther","felt","few","fewer","ff","fi","fifteen","fifth","fifty","fify","fill","find","finds","fire","first","five","fix","fj","fk","fm","fo","followed","following","follows","for","forever","former","formerly","forth","forty","forward","found","four","fr","free","from","front","full","fully","further","furthered","furthering","furthermore","furthers","fx","g","ga","gave","gb","gd","ge","general","generally","get","gets","getting","gf","gg","gh","gi","give","given","gives","giving","gl","gm","gmt","gn","go","goes","going","gone","good","goods","got","gotten","gov","gp","gq","gr","great","greater","greatest","greetings","group","grouped","grouping","groups","gs","gt","gu","gw","gy","h","had","hadn\'t","hadnt","half","happens","hardly","has","hasn","hasn\'t","hasnt","have","haven","haven\'t","havent","having","he","he\'d","he\'ll","he\'s","hed","hell","hello","help","hence","her","here","here\'s","hereafter","hereby","herein","heres","hereupon","hers","herself","herse”","hes","hi","hid","high","higher","highest","him","himself","himse”","his","hither","hk","hm","hn","home","homepage","hopefully","how","how\'d","how\'ll","how\'s","howbeit","however","hr","ht","htm","html","http","hu","hundred","i","i\'d","i\'ll","i\'m","i\'ve","i.e.","id","ie","if","ignored","ii","il","ill","im","immediate","immediately","importance","important","in","inasmuch","inc","inc.","indeed","index","indicate","indicated","indicates","information","inner","inside","insofar","instead","int","interest","interested","interesting","interests","into","invention","inward","io","iq","ir","is","isn","isn\'t","isnt","it","it\'d","it\'ll","it\'s","itd","itll","its","itself","itse”","ive","j","je","jm","jo","join","jp","just","k","ke","keep","keeps","kept","keys","kg","kh","ki","kind","km","kn","knew","know","known","knows","kp","kr","kw","ky","kz","l","la","large","largely","last","lately","later","latest","latter","latterly","lb","lc","least","length","less","lest","let","let\'s","lets","li","like","liked","likely","likewise","line","little","lk","ll","long","longer","longest","look","looking","looks","low","lower","lr","ls","lt","ltd","lu","lv","ly","m","ma","made","mainly","make","makes","making","man","many","may","maybe","mayn\'t","maynt","mc","md","me","mean","means","meantime","meanwhile","member","members","men","merely","mg","mh","microsoft","might","might\'ve","mightn\'t","mightnt","mil","mill","million","mine","minus","miss","mk","ml","mm","mn","mo","more","moreover","most","mostly","move","mp","mq","mr","mrs","ms","msie","mt","mu","much","mug","must","must\'ve","mustn\'t","mustnt","mv","mw","mx","my","myself","myse”","mz","n","na","name","namely","nay","nc","nd","ne","near","nearly","necessarily","necessary","need","needed","needing","needn\'t","neednt","needs","neither","net","netscape","never","neverf","neverless","nevertheless","new","newer","newest","next","nf","ng","ni","nine","ninety","nl","no","no-one","nobody","non","none","nonetheless","noone","nor","normally","nos","not","noted","nothing","notwithstanding","novel","now","nowhere","np","nr","nu","null","number","numbers","nz","o","obtain","obtained","obviously","of","off","often","oh","ok","okay","old","older","oldest","om","omitted","on","once","one","one\'s","ones","only","onto","open","opened","opening","opens","opposite","or","ord","order","ordered","ordering","orders","org","other","others","otherwise","ought","oughtn\'t","oughtnt","our","ours","ourselves","out","outside","over","overall","owing","own","p","pa","page","pages","part","parted","particular","particularly","parting","parts","past","pe","per","perhaps","pf","pg","ph","pk","pl","place","placed","places","please","plus","pm","pmid","pn","point","pointed","pointing","points","poorly","possible","possibly","potentially","pp","pr","predominantly","present","presented","presenting","presents","presumably","previously","primarily","probably","problem","problems","promptly","proud","provided","provides","pt","put","puts","pw","py","q","qa","que","quickly","quite","qv","r","ran","rather","rd","re","readily","really","reasonably","recent","recently","ref","refs","regarding","regardless","regards","related","relatively","research","reserved","respectively","resulted","resulting","results","right","ring","ro","room","rooms","round","ru","run","rw","s","sa","said","same","saw","say","saying","says","sb","sc","sd","se","sec","second","secondly","seconds","section","see","seeing","seem","seemed","seeming","seems","seen","sees","self","selves","sensible","sent","serious","seriously","seven","seventy","several","sg","sh","shall","shan\'t","shant","she","she\'d","she\'ll","she\'s","shed","shell","shes","should","should\'ve","shouldn","shouldn\'t","shouldnt","show","showed","showing","shown","showns","shows","si","side","sides","significant","significantly","similar","similarly","since","sincere","site","six","sixty","sj","sk","sl","slightly","sm","small","smaller","smallest","sn","so","some","somebody","someday","somehow","someone","somethan","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specifically","specified","specify","specifying","sr","st","state","states","still","stop","strongly","su","sub","substantially","successfully","such","sufficiently","suggest","sup","sure","sv","sy","system","sz","t","t\'s","take","taken","taking","tc","td","tell","ten","tends","test","text","tf","tg","th","than","thank","thanks","thanx","that","that\'ll","that\'s","that\'ve","thatll","thats","thatve","the","their","theirs","them","themselves","then","thence","there","there\'d","there\'ll","there\'re","there\'s","there\'ve","thereafter","thereby","thered","therefore","therein","therell","thereof","therere","theres","thereto","thereupon","thereve","these","they","they\'d","they\'ll","they\'re","they\'ve","theyd","theyll","theyre","theyve","thick","thin","thing","things","think","thinks","third","thirty","this","thorough","thoroughly","those","thou","though","thoughh","thought","thoughts","thousand","three","throug","through","throughout","thru","thus","til","till","tip","tis","tj","tk","tm","tn","to","today","together","too","took","top","toward","towards","tp","tr","tried","tries","trillion","truly","try","trying","ts","tt","turn","turned","turning","turns","tv","tw","twas","twelve","twenty","twice","two","tz","u","ua","ug","uk","um","un","under","underneath","undoing","unfortunately","unless","unlike","unlikely","until","unto","up","upon","ups","upwards","us","use","used","useful","usefully","usefulness","uses","using","usually","uucp","uy","uz","v","va","value","various","vc","ve","versus","very","vg","vi","via","viz","vn","vol","vols","vs","vu","w","want","wanted","wanting","wants","was","wasn","wasn\'t","wasnt","way","ways","we","we\'d","we\'ll","we\'re","we\'ve","web","webpage","website","wed","welcome","well","wells","went","were","weren","weren\'t","werent","weve","wf","what","what\'d","what\'ll","what\'s","what\'ve","whatever","whatll","whats","whatve","when","when\'d","when\'ll","when\'s","whence","whenever","where","where\'d","where\'ll","where\'s","whereafter","whereas","whereby","wherein","wheres","whereupon","wherever","whether","which","whichever","while","whilst","whim","whither","who","who\'d","who\'ll","who\'s","whod","whoever","whole","wholl","whom","whomever","whos","whose","why","why\'d","why\'ll","why\'s","widely","width","will","willing","wish","with","within","without","won","won\'t","wonder","wont","words","work","worked","working","works","world","would","would\'ve","wouldn","wouldn\'t","wouldnt","ws","www","x","y","ye","year","years","yes","yet","you","you\'d","you\'ll","you\'re","you\'ve","youd","youll","young","younger","youngest","your","youre","yours","yourself","yourselves","youve","yt","yu","z","za","zero","zm","zr"],"eo":["adiaŭ","ajn","al","ankoraŭ","antaŭ","aŭ","bonan","bonvole","bonvolu","bv","ci","cia","cian","cin","d-ro","da","de","dek","deka","do","doktor\'","doktoro","du","dua","dum","eble","ekz","ekzemple","en","estas","estis","estos","estu","estus","eĉ","f-no","feliĉan","for","fraŭlino","ha","havas","havis","havos","havu","havus","he","ho","hu","ili","ilia","ilian","ilin","inter","io","ion","iu","iujn","iun","ja","jam","je","jes","k","kaj","ke","kio","kion","kiu","kiujn","kiun","kvankam","kvar","kvara","kvazaŭ","kvin","kvina","la","li","lia","lian","lin","malantaŭ","male","malgraŭ","mem","mi","mia","mian","min","minus","naŭ","naŭa","ne","nek","nenio","nenion","neniu","neniun","nepre","ni","nia","nian","nin","nu","nun","nur","ok","oka","oni","onia","onian","onin","plej","pli","plu","plus","por","post","preter","s-no","s-ro","se","sed","sep","sepa","ses","sesa","si","sia","sian","sin","sinjor\'","sinjorino","sinjoro","sub","super","supren","sur","tamen","tio","tion","tiu","tiujn","tiun","tra","tri","tria","tuj","tute","unu","unua","ve","verŝajne","vi","via","vian","vin","ĉi","ĉio","ĉion","ĉiu","ĉiujn","ĉiun","ĉu","ĝi","ĝia","ĝian","ĝin","ĝis","ĵus","ŝi","ŝia","ŝin"],"et":["aga","ei","et","ja","jah","kas","kui","k\xf5ik","ma","me","mida","midagi","mind","minu","mis","mu","mul","mulle","nad","nii","oled","olen","oli","oma","on","pole","sa","seda","see","selle","siin","siis","ta","te","\xe4ra"],"fi":["aiemmin","aika","aikaa","aikaan","aikaisemmin","aikaisin","aikajen","aikana","aikoina","aikoo","aikovat","aina","ainakaan","ainakin","ainoa","ainoat","aiomme","aion","aiotte","aist","aivan","ajan","alas","alemmas","alkuisin","alkuun","alla","alle","aloitamme","aloitan","aloitat","aloitatte","aloitattivat","aloitettava","aloitettevaksi","aloitettu","aloitimme","aloitin","aloitit","aloititte","aloittaa","aloittamatta","aloitti","aloittivat","alta","aluksi","alussa","alusta","annettavaksi","annetteva","annettu","ansiosta","antaa","antamatta","antoi","aoua","apu","asia","asiaa","asian","asiasta","asiat","asioiden","asioihin","asioita","asti","avuksi","avulla","avun","avutta","edelle","edelleen","edell\xe4","edelt\xe4","edemm\xe4s","edes","edess\xe4","edest\xe4","ehk\xe4","ei","eik\xe4","eilen","eiv\xe4t","eli","ellei","elleiv\xe4t","ellemme","ellen","ellet","ellette","emme","en","enemm\xe4n","eniten","ennen","ensi","ensimm\xe4inen","ensimm\xe4iseksi","ensimm\xe4isen","ensimm\xe4isen\xe4","ensimm\xe4iset","ensimm\xe4isiksi","ensimm\xe4isin\xe4","ensimm\xe4isi\xe4","ensimm\xe4ist\xe4","ensin","entinen","entisen","entisi\xe4","entisten","entist\xe4","en\xe4\xe4","eri","eritt\xe4in","erityisesti","er\xe4iden","er\xe4s","er\xe4\xe4t","esi","esiin","esill\xe4","esimerkiksi","et","eteen","etenkin","etessa","ette","ettei","ett\xe4","haikki","halua","haluaa","haluamatta","haluamme","haluan","haluat","haluatte","haluavat","halunnut","halusi","halusimme","halusin","halusit","halusitte","halusivat","halutessa","haluton","he","hei","heid\xe4n","heid\xe4t","heihin","heille","heill\xe4","heilt\xe4","heiss\xe4","heist\xe4","heit\xe4","helposti","heti","hetkell\xe4","hieman","hitaasti","hoikein","huolimatta","huomenna","hyvien","hyviin","hyviksi","hyville","hyvilt\xe4","hyvin","hyvin\xe4","hyviss\xe4","hyvist\xe4","hyvi\xe4","hyv\xe4","hyv\xe4t","hyv\xe4\xe4","h\xe4n","h\xe4neen","h\xe4nelle","h\xe4nell\xe4","h\xe4nelt\xe4","h\xe4nen","h\xe4ness\xe4","h\xe4nest\xe4","h\xe4net","h\xe4nt\xe4","ihan","ilman","ilmeisesti","itse","itsens\xe4","itse\xe4\xe4n","ja","jo","johon","joiden","joihin","joiksi","joilla","joille","joilta","joina","joissa","joista","joita","joka","jokainen","jokin","joko","joksi","joku","jolla","jolle","jolloin","jolta","jompikumpi","jona","jonka","jonkin","jonne","joo","jopa","jos","joskus","jossa","josta","jota","jotain","joten","jotenkin","jotenkuten","jotka","jotta","jouduimme","jouduin","jouduit","jouduitte","joudumme","joudun","joudutte","joukkoon","joukossa","joukosta","joutua","joutui","joutuivat","joutumaan","joutuu","joutuvat","juuri","j\xe4lkeen","j\xe4lleen","j\xe4\xe4","kahdeksan","kahdeksannen","kahdella","kahdelle","kahdelta","kahden","kahdessa","kahdesta","kahta","kahteen","kai","kaiken","kaikille","kaikilta","kaikkea","kaikki","kaikkia","kaikkiaan","kaikkialla","kaikkialle","kaikkialta","kaikkien","kaikkin","kaksi","kannalta","kannattaa","kanssa","kanssaan","kanssamme","kanssani","kanssanne","kanssasi","kauan","kauemmas","kaukana","kautta","kehen","keiden","keihin","keiksi","keille","keill\xe4","keilt\xe4","kein\xe4","keiss\xe4","keist\xe4","keitten","keitt\xe4","keit\xe4","keneen","keneksi","kenelle","kenell\xe4","kenelt\xe4","kenen","kenen\xe4","keness\xe4","kenest\xe4","kenet","kenett\xe4","kenness\xe4st\xe4","kenties","kerran","kerta","kertaa","keskell\xe4","kesken","keskim\xe4\xe4rin","ketk\xe4","ket\xe4","kiitos","kohti","koko","kokonaan","kolmas","kolme","kolmen","kolmesti","koska","koskaan","kovin","kuin","kuinka","kuinkan","kuitenkaan","kuitenkin","kuka","kukaan","kukin","kukka","kumpainen","kumpainenkaan","kumpi","kumpikaan","kumpikin","kun","kuten","kuuden","kuusi","kuutta","kylliksi","kyll\xe4","kymmenen","kyse","liian","liki","lis\xe4ksi","lis\xe4\xe4","lla","luo","luona","l\xe4hekk\xe4in","l\xe4helle","l\xe4hell\xe4","l\xe4helt\xe4","l\xe4hemm\xe4s","l\xe4hes","l\xe4hinn\xe4","l\xe4htien","l\xe4pi","mahdollisimman","mahdollista","me","meid\xe4n","meid\xe4t","meihin","meille","meill\xe4","meilt\xe4","meiss\xe4","meist\xe4","meit\xe4","melkein","melko","menee","meneet","menemme","menen","menet","menette","menev\xe4t","meni","menimme","menin","menit","meniv\xe4t","menness\xe4","mennyt","menossa","mihin","mikin","miksi","mik\xe4","mik\xe4li","mik\xe4\xe4n","mille","milloin","milloinkan","mill\xe4","milt\xe4","mink\xe4","minne","minua","minulla","minulle","minulta","minun","minussa","minusta","minut","minuun","min\xe4","miss\xe4","mist\xe4","miten","mitk\xe4","mit\xe4","mit\xe4\xe4n","moi","molemmat","mones","monesti","monet","moni","moniaalla","moniaalle","moniaalta","monta","muassa","muiden","muita","muka","mukaan","mukaansa","mukana","mutta","muu","muualla","muualle","muualta","muuanne","muulloin","muun","muut","muuta","muutama","muutaman","muuten","my\xf6hemmin","my\xf6s","my\xf6skin","my\xf6sk\xe4\xe4n","my\xf6t\xe4","ne","nelj\xe4","nelj\xe4n","nelj\xe4\xe4","niiden","niihin","niiksi","niille","niill\xe4","niilt\xe4","niin","niin\xe4","niiss\xe4","niist\xe4","niit\xe4","noiden","noihin","noiksi","noilla","noille","noilta","noin","noina","noissa","noista","noita","nopeammin","nopeasti","nopeiten","nro","nuo","nyt","n\xe4iden","n\xe4ihin","n\xe4iksi","n\xe4ille","n\xe4ill\xe4","n\xe4ilt\xe4","n\xe4in","n\xe4in\xe4","n\xe4iss\xe4","n\xe4iss\xe4hin","n\xe4iss\xe4lle","n\xe4iss\xe4lt\xe4","n\xe4iss\xe4st\xe4","n\xe4ist\xe4","n\xe4it\xe4","n\xe4m\xe4","ohi","oikea","oikealla","oikein","ole","olemme","olen","olet","olette","oleva","olevan","olevat","oli","olimme","olin","olisi","olisimme","olisin","olisit","olisitte","olisivat","olit","olitte","olivat","olla","olleet","olli","ollut","oma","omaa","omaan","omaksi","omalle","omalta","oman","omassa","omat","omia","omien","omiin","omiksi","omille","omilta","omissa","omista","on","onkin","onko","ovat","paikoittain","paitsi","pakosti","paljon","paremmin","parempi","parhaillaan","parhaiten","perusteella","per\xe4ti","pian","pieneen","pieneksi","pienelle","pienell\xe4","pienelt\xe4","pienempi","pienest\xe4","pieni","pienin","poikki","puolesta","puolestaan","p\xe4\xe4lle","runsaasti","saakka","sadam","sama","samaa","samaan","samalla","samallalta","samallassa","samallasta","saman","samat","samoin","sata","sataa","satojen","se","seitsem\xe4n","sek\xe4","sen","seuraavat","siell\xe4","sielt\xe4","siihen","siin\xe4","siis","siit\xe4","sijaan","siksi","sille","silloin","sill\xe4","silti","silt\xe4","sinne","sinua","sinulla","sinulle","sinulta","sinun","sinussa","sinusta","sinut","sinuun","sin\xe4","sis\xe4kk\xe4in","sis\xe4ll\xe4","siten","sitten","sit\xe4","ssa","sta","suoraan","suuntaan","suuren","suuret","suuri","suuria","suurin","suurten","taa","taas","taemmas","tahansa","tai","takaa","takaisin","takana","takia","tall\xe4","tapauksessa","tarpeeksi","tavalla","tavoitteena","te","teid\xe4n","teid\xe4t","teihin","teille","teill\xe4","teilt\xe4","teiss\xe4","teist\xe4","teit\xe4","tietysti","todella","toinen","toisaalla","toisaalle","toisaalta","toiseen","toiseksi","toisella","toiselle","toiselta","toisemme","toisen","toisensa","toisessa","toisesta","toista","toistaiseksi","toki","tosin","tuhannen","tuhat","tule","tulee","tulemme","tulen","tulet","tulette","tulevat","tulimme","tulin","tulisi","tulisimme","tulisin","tulisit","tulisitte","tulisivat","tulit","tulitte","tulivat","tulla","tulleet","tullut","tuntuu","tuo","tuohon","tuoksi","tuolla","tuolle","tuolloin","tuolta","tuon","tuona","tuonne","tuossa","tuosta","tuota","tuot\xe4","tuskin","tyk\xf6","t\xe4h\xe4n","t\xe4ksi","t\xe4lle","t\xe4ll\xe4","t\xe4ll\xf6in","t\xe4lt\xe4","t\xe4m\xe4","t\xe4m\xe4n","t\xe4nne","t\xe4n\xe4","t\xe4n\xe4\xe4n","t\xe4ss\xe4","t\xe4st\xe4","t\xe4ten","t\xe4t\xe4","t\xe4ysin","t\xe4ytyv\xe4t","t\xe4ytyy","t\xe4\xe4ll\xe4","t\xe4\xe4lt\xe4","ulkopuolella","usea","useasti","useimmiten","usein","useita","uudeksi","uudelleen","uuden","uudet","uusi","uusia","uusien","uusinta","uuteen","uutta","vaan","vahemm\xe4n","vai","vaiheessa","vaikea","vaikean","vaikeat","vaikeilla","vaikeille","vaikeilta","vaikeissa","vaikeista","vaikka","vain","varmasti","varsin","varsinkin","varten","vasen","vasenmalla","vasta","vastaan","vastakkain","vastan","verran","viel\xe4","vierekk\xe4in","vieress\xe4","vieri","viiden","viime","viimeinen","viimeisen","viimeksi","viisi","voi","voidaan","voimme","voin","voisi","voit","voitte","voivat","vuoden","vuoksi","vuosi","vuosien","vuosina","vuotta","v\xe4hemm\xe4n","v\xe4hint\xe4\xe4n","v\xe4hiten","v\xe4h\xe4n","v\xe4lill\xe4","yhdeks\xe4n","yhden","yhdess\xe4","yhteen","yhteens\xe4","yhteydess\xe4","yhteyteen","yht\xe4","yht\xe4\xe4lle","yht\xe4\xe4ll\xe4","yht\xe4\xe4lt\xe4","yht\xe4\xe4n","yh\xe4","yksi","yksin","yksitt\xe4in","yleens\xe4","ylemm\xe4s","yli","yl\xf6s","ymp\xe4ri","\xe4lk\xf6\xf6n","\xe4l\xe4"],"fr":["a","abord","absolument","afin","ah","ai","aie","aient","aies","ailleurs","ainsi","ait","allaient","allo","allons","all\xf4","alors","anterieur","anterieure","anterieures","apres","apr\xe8s","as","assez","attendu","au","aucun","aucune","aucuns","aujourd","aujourd\'hui","aupres","auquel","aura","aurai","auraient","aurais","aurait","auras","aurez","auriez","aurions","aurons","auront","aussi","autant","autre","autrefois","autrement","autres","autrui","aux","auxquelles","auxquels","avaient","avais","avait","avant","avec","avez","aviez","avions","avoir","avons","ayant","ayez","ayons","b","bah","bas","basee","bat","beau","beaucoup","bien","bigre","bon","boum","bravo","brrr","c","car","ce","ceci","cela","celle","celle-ci","celle-l\xe0","celles","celles-ci","celles-l\xe0","celui","celui-ci","celui-l\xe0","cel\xe0","cent","cependant","certain","certaine","certaines","certains","certes","ces","cet","cette","ceux","ceux-ci","ceux-l\xe0","chacun","chacune","chaque","cher","chers","chez","chiche","chut","ch\xe8re","ch\xe8res","ci","cinq","cinquantaine","cinquante","cinquanti\xe8me","cinqui\xe8me","clac","clic","combien","comme","comment","comparable","comparables","compris","concernant","contre","couic","crac","d","da","dans","de","debout","dedans","dehors","deja","del\xe0","depuis","dernier","derniere","derriere","derri\xe8re","des","desormais","desquelles","desquels","dessous","dessus","deux","deuxi\xe8me","deuxi\xe8mement","devant","devers","devra","devrait","different","differentes","differents","diff\xe9rent","diff\xe9rente","diff\xe9rentes","diff\xe9rents","dire","directe","directement","dit","dite","dits","divers","diverse","diverses","dix","dix-huit","dix-neuf","dix-sept","dixi\xe8me","doit","doivent","donc","dont","dos","douze","douzi\xe8me","dring","droite","du","duquel","durant","d\xe8s","d\xe9but","d\xe9sormais","e","effet","egale","egalement","egales","eh","elle","elle-m\xeame","elles","elles-m\xeames","en","encore","enfin","entre","envers","environ","es","essai","est","et","etant","etc","etre","eu","eue","eues","euh","eurent","eus","eusse","eussent","eusses","eussiez","eussions","eut","eux","eux-m\xeames","exactement","except\xe9","extenso","exterieur","e\xfbmes","e\xfbt","e\xfbtes","f","fais","faisaient","faisant","fait","faites","fa\xe7on","feront","fi","flac","floc","fois","font","force","furent","fus","fusse","fussent","fusses","fussiez","fussions","fut","f\xfbmes","f\xfbt","f\xfbtes","g","gens","h","ha","haut","hein","hem","hep","hi","ho","hol\xe0","hop","hormis","hors","hou","houp","hue","hui","huit","huiti\xe8me","hum","hurrah","h\xe9","h\xe9las","i","ici","il","ils","importe","j","je","jusqu","jusque","juste","k","l","la","laisser","laquelle","las","le","lequel","les","lesquelles","lesquels","leur","leurs","longtemps","lors","lorsque","lui","lui-meme","lui-m\xeame","l\xe0","l\xe8s","m","ma","maint","maintenant","mais","malgre","malgr\xe9","maximale","me","meme","memes","merci","mes","mien","mienne","miennes","miens","mille","mince","mine","minimale","moi","moi-meme","moi-m\xeame","moindres","moins","mon","mot","moyennant","multiple","multiples","m\xeame","m\xeames","n","na","naturel","naturelle","naturelles","ne","neanmoins","necessaire","necessairement","neuf","neuvi\xe8me","ni","nombreuses","nombreux","nomm\xe9s","non","nos","notamment","notre","nous","nous-m\xeames","nouveau","nouveaux","nul","n\xe9anmoins","n\xf4tre","n\xf4tres","o","oh","oh\xe9","oll\xe9","ol\xe9","on","ont","onze","onzi\xe8me","ore","ou","ouf","ouias","oust","ouste","outre","ouvert","ouverte","ouverts","o|","o\xf9","p","paf","pan","par","parce","parfois","parle","parlent","parler","parmi","parole","parseme","partant","particulier","particuli\xe8re","particuli\xe8rement","pas","pass\xe9","pendant","pense","permet","personne","personnes","peu","peut","peuvent","peux","pff","pfft","pfut","pif","pire","pi\xe8ce","plein","plouf","plupart","plus","plusieurs","plut\xf4t","possessif","possessifs","possible","possibles","pouah","pour","pourquoi","pourrais","pourrait","pouvait","prealable","precisement","premier","premi\xe8re","premi\xe8rement","pres","probable","probante","procedant","proche","pr\xe8s","psitt","pu","puis","puisque","pur","pure","q","qu","quand","quant","quant-\xe0-soi","quanta","quarante","quatorze","quatre","quatre-vingt","quatri\xe8me","quatri\xe8mement","que","quel","quelconque","quelle","quelles","quelqu\'un","quelque","quelques","quels","qui","quiconque","quinze","quoi","quoique","r","rare","rarement","rares","relative","relativement","remarquable","rend","rendre","restant","reste","restent","restrictif","retour","revoici","revoil\xe0","rien","s","sa","sacrebleu","sait","sans","sapristi","sauf","se","sein","seize","selon","semblable","semblaient","semble","semblent","sent","sept","septi\xe8me","sera","serai","seraient","serais","serait","seras","serez","seriez","serions","serons","seront","ses","seul","seule","seulement","si","sien","sienne","siennes","siens","sinon","six","sixi\xe8me","soi","soi-m\xeame","soient","sois","soit","soixante","sommes","son","sont","sous","souvent","soyez","soyons","specifique","specifiques","speculatif","stop","strictement","subtiles","suffisant","suffisante","suffit","suis","suit","suivant","suivante","suivantes","suivants","suivre","sujet","superpose","sur","surtout","t","ta","tac","tandis","tant","tardive","te","tel","telle","tellement","telles","tels","tenant","tend","tenir","tente","tes","tic","tien","tienne","tiennes","tiens","toc","toi","toi-m\xeame","ton","touchant","toujours","tous","tout","toute","toutefois","toutes","treize","trente","tres","trois","troisi\xe8me","troisi\xe8mement","trop","tr\xe8s","tsoin","tsouin","tu","t\xe9","u","un","une","unes","uniformement","unique","uniques","uns","v","va","vais","valeur","vas","vers","via","vif","vifs","vingt","vivat","vive","vives","vlan","voici","voie","voient","voil\xe0","voire","vont","vos","votre","vous","vous-m\xeames","vu","v\xe9","v\xf4tre","v\xf4tres","w","x","y","z","zut","\xe0","\xe2","\xe7a","\xe8s","\xe9taient","\xe9tais","\xe9tait","\xe9tant","\xe9tat","\xe9tiez","\xe9tions","\xe9t\xe9","\xe9t\xe9e","\xe9t\xe9es","\xe9t\xe9s","\xeates","\xeatre","\xf4"],"gl":["a","al\xed","ao","aos","aquel","aquela","aquelas","aqueles","aquilo","aqu\xed","as","as\xed","a\xednda","ben","cando","che","co","coa","coas","comigo","con","connosco","contigo","convosco","cos","cun","cunha","cunhas","cuns","da","dalgunha","dalgunhas","dalg\xfan","dalg\xfans","das","de","del","dela","delas","deles","desde","deste","do","dos","dun","dunha","dunhas","duns","e","el","ela","elas","eles","en","era","eran","esa","esas","ese","eses","esta","estaba","estar","este","estes","estiven","estou","est\xe1","est\xe1n","eu","facer","foi","foron","fun","hab\xeda","hai","iso","isto","la","las","lle","lles","lo","los","mais","me","meu","meus","min","mi\xf1a","mi\xf1as","moi","na","nas","neste","nin","no","non","nos","nosa","nosas","noso","nosos","nun","nunha","nunhas","nuns","n\xf3s","o","os","ou","para","pero","pode","pois","pola","polas","polo","polos","por","que","se","sen\xf3n","ser","seu","seus","sexa","sido","sobre","s\xfaa","s\xfaas","tam\xe9n","tan","te","ten","ter","teu","teus","te\xf1en","te\xf1o","ti","tido","tiven","ti\xf1a","t\xfaa","t\xfaas","un","unha","unhas","uns","vos","vosa","vosas","voso","vosos","v\xf3s","\xe1","\xe9","\xf3","\xf3s"],"de":["a","ab","aber","ach","acht","achte","achten","achter","achtes","ag","alle","allein","allem","allen","aller","allerdings","alles","allgemeinen","als","also","am","an","ander","andere","anderem","anderen","anderer","anderes","anderm","andern","anderr","anders","au","auch","auf","aus","ausser","ausserdem","au\xdfer","au\xdferdem","b","bald","bei","beide","beiden","beim","beispiel","bekannt","bereits","besonders","besser","besten","bin","bis","bisher","bist","c","d","d.h","da","dabei","dadurch","daf\xfcr","dagegen","daher","dahin","dahinter","damals","damit","danach","daneben","dank","dann","daran","darauf","daraus","darf","darfst","darin","darum","darunter","dar\xfcber","das","dasein","daselbst","dass","dasselbe","davon","davor","dazu","dazwischen","da\xdf","dein","deine","deinem","deinen","deiner","deines","dem","dementsprechend","demgegen\xfcber","demgem\xe4ss","demgem\xe4\xdf","demselben","demzufolge","den","denen","denn","denselben","der","deren","derer","derjenige","derjenigen","dermassen","derma\xdfen","derselbe","derselben","des","deshalb","desselben","dessen","deswegen","dich","die","diejenige","diejenigen","dies","diese","dieselbe","dieselben","diesem","diesen","dieser","dieses","dir","doch","dort","drei","drin","dritte","dritten","dritter","drittes","du","durch","durchaus","durfte","durften","d\xfcrfen","d\xfcrft","e","eben","ebenso","ehrlich","ei","ei,","eigen","eigene","eigenen","eigener","eigenes","ein","einander","eine","einem","einen","einer","eines","einig","einige","einigem","einigen","einiger","einiges","einmal","eins","elf","en","ende","endlich","entweder","er","ernst","erst","erste","ersten","erster","erstes","es","etwa","etwas","euch","euer","eure","eurem","euren","eurer","eures","f","folgende","fr\xfcher","f\xfcnf","f\xfcnfte","f\xfcnften","f\xfcnfter","f\xfcnftes","f\xfcr","g","gab","ganz","ganze","ganzen","ganzer","ganzes","gar","gedurft","gegen","gegen\xfcber","gehabt","gehen","geht","gekannt","gekonnt","gemacht","gemocht","gemusst","genug","gerade","gern","gesagt","geschweige","gewesen","gewollt","geworden","gibt","ging","gleich","gott","gross","grosse","grossen","grosser","grosses","gro\xdf","gro\xdfe","gro\xdfen","gro\xdfer","gro\xdfes","gut","gute","guter","gutes","h","hab","habe","haben","habt","hast","hat","hatte","hatten","hattest","hattet","heisst","her","heute","hier","hin","hinter","hoch","h\xe4tte","h\xe4tten","i","ich","ihm","ihn","ihnen","ihr","ihre","ihrem","ihren","ihrer","ihres","im","immer","in","indem","infolgedessen","ins","irgend","ist","j","ja","jahr","jahre","jahren","je","jede","jedem","jeden","jeder","jedermann","jedermanns","jedes","jedoch","jemand","jemandem","jemanden","jene","jenem","jenen","jener","jenes","jetzt","k","kam","kann","kannst","kaum","kein","keine","keinem","keinen","keiner","keines","kleine","kleinen","kleiner","kleines","kommen","kommt","konnte","konnten","kurz","k\xf6nnen","k\xf6nnt","k\xf6nnte","l","lang","lange","leicht","leide","lieber","los","m","machen","macht","machte","mag","magst","mahn","mal","man","manche","manchem","manchen","mancher","manches","mann","mehr","mein","meine","meinem","meinen","meiner","meines","mensch","menschen","mich","mir","mit","mittel","mochte","mochten","morgen","muss","musst","musste","mussten","mu\xdf","mu\xdft","m\xf6chte","m\xf6gen","m\xf6glich","m\xf6gt","m\xfcssen","m\xfcsst","m\xfc\xdft","n","na","nach","nachdem","nahm","nat\xfcrlich","neben","nein","neue","neuen","neun","neunte","neunten","neunter","neuntes","nicht","nichts","nie","niemand","niemandem","niemanden","noch","nun","nur","o","ob","oben","oder","offen","oft","ohne","ordnung","p","q","r","recht","rechte","rechten","rechter","rechtes","richtig","rund","s","sa","sache","sagt","sagte","sah","satt","schlecht","schluss","schon","sechs","sechste","sechsten","sechster","sechstes","sehr","sei","seid","seien","sein","seine","seinem","seinen","seiner","seines","seit","seitdem","selbst","sich","sie","sieben","siebente","siebenten","siebenter","siebentes","sind","so","solang","solche","solchem","solchen","solcher","solches","soll","sollen","sollst","sollt","sollte","sollten","sondern","sonst","soweit","sowie","sp\xe4ter","startseite","statt","steht","suche","t","tag","tage","tagen","tat","teil","tel","tritt","trotzdem","tun","u","uhr","um","und","uns","unse","unsem","unsen","unser","unsere","unserer","unses","unter","v","vergangenen","viel","viele","vielem","vielen","vielleicht","vier","vierte","vierten","vierter","viertes","vom","von","vor","w","wahr","wann","war","waren","warst","wart","warum","was","weg","wegen","weil","weit","weiter","weitere","weiteren","weiteres","welche","welchem","welchen","welcher","welches","wem","wen","wenig","wenige","weniger","weniges","wenigstens","wenn","wer","werde","werden","werdet","weshalb","wessen","wie","wieder","wieso","will","willst","wir","wird","wirklich","wirst","wissen","wo","woher","wohin","wohl","wollen","wollt","wollte","wollten","worden","wurde","wurden","w\xe4hrend","w\xe4hrenddem","w\xe4hrenddessen","w\xe4re","w\xfcrde","w\xfcrden","x","y","z","z.b","zehn","zehnte","zehnten","zehnter","zehntes","zeit","zu","zuerst","zugleich","zum","zun\xe4chst","zur","zur\xfcck","zusammen","zwanzig","zwar","zwei","zweite","zweiten","zweiter","zweites","zwischen","zw\xf6lf","\xfcber","\xfcberhaupt","\xfcbrigens"],"el":["ένα","έναν","ένας","αι","ακομα","ακομη","ακριβως","αληθεια","αληθινα","αλλα","αλλαχου","αλλες","αλλη","αλλην","αλλης","αλλιως","αλλιωτικα","αλλο","αλλοι","αλλοιως","αλλοιωτικα","αλλον","αλλος","αλλοτε","αλλου","αλλους","αλλων","αμα","αμεσα","αμεσως","αν","ανα","αναμεσα","αναμεταξυ","ανευ","αντι","αντιπερα","αντις","ανω","ανωτερω","αξαφνα","απ","απεναντι","απο","αποψε","από","αρα","αραγε","αργα","αργοτερο","αριστερα","αρκετα","αρχικα","ας","αυριο","αυτα","αυτες","αυτεσ","αυτη","αυτην","αυτης","αυτο","αυτοι","αυτον","αυτος","αυτοσ","αυτου","αυτους","αυτουσ","αυτων","αφοτου","αφου","αἱ","αἳ","αἵ","αὐτόσ","αὐτὸς","αὖ","α∆ιακοπα","βεβαια","βεβαιοτατα","γάρ","γα","γα^","γε","γι","για","γοῦν","γρηγορα","γυρω","γὰρ","δ\'","δέ","δή","δαί","δαίσ","δαὶ","δαὶς","δε","δεν","δι","δι\'","διά","δια","διὰ","δὲ","δὴ","δ’","εαν","εαυτο","εαυτον","εαυτου","εαυτους","εαυτων","εγκαιρα","εγκαιρως","εγω","ειθε","ειμαι","ειμαστε","ειναι","εις","εισαι","εισαστε","ειστε","ειτε","ειχα","ειχαμε","ειχαν","ειχατε","ειχε","ειχες","ει∆εμη","εκ","εκαστα","εκαστες","εκαστη","εκαστην","εκαστης","εκαστο","εκαστοι","εκαστον","εκαστος","εκαστου","εκαστους","εκαστων","εκει","εκεινα","εκεινες","εκεινεσ","εκεινη","εκεινην","εκεινης","εκεινο","εκεινοι","εκεινον","εκεινος","εκεινοσ","εκεινου","εκεινους","εκεινουσ","εκεινων","εκτος","εμας","εμεις","εμενα","εμπρος","εν","ενα","εναν","ενας","ενος","εντελως","εντος","εντωμεταξυ","ενω","ενός","εξ","εξαφνα","εξης","εξισου","εξω","επ","επί","επανω","επειτα","επει∆η","επι","επισης","επομενως","εσας","εσεις","εσενα","εστω","εσυ","ετερα","ετεραι","ετερας","ετερες","ετερη","ετερης","ετερο","ετεροι","ετερον","ετερος","ετερου","ετερους","ετερων","ετουτα","ετουτες","ετουτη","ετουτην","ετουτης","ετουτο","ετουτοι","ετουτον","ετουτος","ετουτου","ετουτους","ετουτων","ετσι","ευγε","ευθυς","ευτυχως","εφεξης","εχει","εχεις","εχετε","εχθες","εχομε","εχουμε","εχουν","εχτες","εχω","εως","εἰ","εἰμί","εἰμὶ","εἰς","εἰσ","εἴ","εἴμι","εἴτε","ε∆ω","η","ημασταν","ημαστε","ημουν","ησασταν","ησαστε","ησουν","ηταν","ητανε","ητοι","ηττον","η∆η","θα","ι","ιι","ιιι","ισαμε","ισια","ισως","ισωσ","ι∆ια","ι∆ιαν","ι∆ιας","ι∆ιες","ι∆ιο","ι∆ιοι","ι∆ιον","ι∆ιος","ι∆ιου","ι∆ιους","ι∆ιων","ι∆ιως","κ","καί","καίτοι","καθ","καθε","καθεμια","καθεμιας","καθενα","καθενας","καθενος","καθετι","καθολου","καθως","και","κακα","κακως","καλα","καλως","καμια","καμιαν","καμιας","καμποσα","καμποσες","καμποση","καμποσην","καμποσης","καμποσο","καμποσοι","καμποσον","καμποσος","καμποσου","καμποσους","καμποσων","κανεις","κανεν","κανενα","κανεναν","κανενας","κανενος","καποια","καποιαν","καποιας","καποιες","καποιο","καποιοι","καποιον","καποιος","καποιου","καποιους","καποιων","καποτε","καπου","καπως","κατ","κατά","κατα","κατι","κατιτι","κατοπιν","κατω","κατὰ","καὶ","κι","κιολας","κλπ","κοντα","κτλ","κυριως","κἀν","κἂν","λιγακι","λιγο","λιγωτερο","λογω","λοιπα","λοιπον","μέν","μέσα","μή","μήτε","μία","μα","μαζι","μακαρι","μακρυα","μαλιστα","μαλλον","μας","με","μεθ","μεθαυριο","μειον","μελει","μελλεται","μεμιας","μεν","μερικα","μερικες","μερικοι","μερικους","μερικων","μεσα","μετ","μετά","μετα","μεταξυ","μετὰ","μεχρι","μη","μην","μηπως","μητε","μη∆ε","μιά","μια","μιαν","μιας","μολις","μολονοτι","μοναχα","μονες","μονη","μονην","μονης","μονο","μονοι","μονομιας","μονος","μονου","μονους","μονων","μου","μπορει","μπορουν","μπραβο","μπρος","μἐν","μὲν","μὴ","μὴν","να","ναι","νωρις","ξανα","ξαφνικα","ο","οι","ολα","ολες","ολη","ολην","ολης","ολο","ολογυρα","ολοι","ολον","ολονεν","ολος","ολοτελα","ολου","ολους","ολων","ολως","ολως∆ιολου","ομως","ομωσ","οποια","οποιαν","οποιαν∆ηποτε","οποιας","οποιας∆ηποτε","οποια∆ηποτε","οποιες","οποιες∆ηποτε","οποιο","οποιοι","οποιον","οποιον∆ηποτε","οποιος","οποιος∆ηποτε","οποιου","οποιους","οποιους∆ηποτε","οποιου∆ηποτε","οποιο∆ηποτε","οποιων","οποιων∆ηποτε","οποι∆ηποτε","οποτε","οποτε∆ηποτε","οπου","οπου∆ηποτε","οπως","οπωσ","ορισμενα","ορισμενες","ορισμενων","ορισμενως","οσα","οσα∆ηποτε","οσες","οσες∆ηποτε","οση","οσην","οσην∆ηποτε","οσης","οσης∆ηποτε","οση∆ηποτε","οσο","οσοι","οσοι∆ηποτε","οσον","οσον∆ηποτε","οσος","οσος∆ηποτε","οσου","οσους","οσους∆ηποτε","οσου∆ηποτε","οσο∆ηποτε","οσων","οσων∆ηποτε","οταν","οτι","οτι∆ηποτε","οτου","ου","ουτε","ου∆ε","οχι","οἱ","οἳ","οἷς","οὐ","οὐδ","οὐδέ","οὐδείσ","οὐδεὶς","οὐδὲ","οὐδὲν","οὐκ","οὐχ","οὐχὶ","οὓς","οὔτε","οὕτω","οὕτως","οὕτωσ","οὖν","οὗ","οὗτος","οὗτοσ","παλι","παντοτε","παντου","παντως","παρ","παρά","παρα","παρὰ","περί","περα","περι","περιπου","περισσοτερο","περσι","περυσι","περὶ","πια","πιθανον","πιο","πισω","πλαι","πλεον","πλην","ποια","ποιαν","ποιας","ποιες","ποιεσ","ποιο","ποιοι","ποιον","ποιος","ποιοσ","ποιου","ποιους","ποιουσ","ποιων","πολυ","ποσες","ποση","ποσην","ποσης","ποσοι","ποσος","ποσους","ποτε","που","πουθε","πουθενα","ποῦ","πρεπει","πριν","προ","προκειμενου","προκειται","προπερσι","προς","προσ","προτου","προχθες","προχτες","πρωτυτερα","πρόσ","πρὸ","πρὸς","πως","πωσ","σαν","σας","σε","σεις","σημερα","σιγα","σου","στα","στη","στην","στης","στις","στο","στον","στου","στους","στων","συγχρονως","συν","συναμα","συνεπως","συνηθως","συχνα","συχνας","συχνες","συχνη","συχνην","συχνης","συχνο","συχνοι","συχνον","συχνος","συχνου","συχνους","συχνων","συχνως","σχε∆ον","σωστα","σόσ","σύ","σύν","σὸς","σὺ","σὺν","τά","τήν","τί","τίς","τίσ","τα","ταυτα","ταυτες","ταυτη","ταυτην","ταυτης","ταυτο,ταυτον","ταυτος","ταυτου","ταυτων","ταχα","ταχατε","ταῖς","τα∆ε","τε","τελικα","τελικως","τες","τετοια","τετοιαν","τετοιας","τετοιες","τετοιο","τετοιοι","τετοιον","τετοιος","τετοιου","τετοιους","τετοιων","τη","την","της","τησ","τι","τινα","τιποτα","τιποτε","τις","τισ","το","τοί","τοι","τοιοῦτος","τοιοῦτοσ","τον","τος","τοσα","τοσες","τοση","τοσην","τοσης","τοσο","τοσοι","τοσον","τοσος","τοσου","τοσους","τοσων","τοτε","του","τουλαχιστο","τουλαχιστον","τους","τουτα","τουτες","τουτη","τουτην","τουτης","τουτο","τουτοι","τουτοις","τουτον","τουτος","τουτου","τουτους","τουτων","τούσ","τοὺς","τοῖς","τοῦ","τυχον","των","τωρα","τό","τόν","τότε","τὰ","τὰς","τὴν","τὸ","τὸν","τῆς","τῆσ","τῇ","τῶν","τῷ","υπ","υπερ","υπο","υποψη","υποψιν","υπό","υστερα","φετος","χαμηλα","χθες","χτες","χωρις","χωριστα","ψηλα","ω","ωραια","ως","ωσ","ωσαν","ωσοτου","ωσπου","ωστε","ωστοσο","ωχ","ἀλλ\'","ἀλλά","ἀλλὰ","ἀλλ’","ἀπ","ἀπό","ἀπὸ","ἀφ","ἂν","ἃ","ἄλλος","ἄλλοσ","ἄν","ἄρα","ἅμα","ἐάν","ἐγώ","ἐγὼ","ἐκ","ἐμόσ","ἐμὸς","ἐν","ἐξ","ἐπί","ἐπεὶ","ἐπὶ","ἐστι","ἐφ","ἐὰν","ἑαυτοῦ","ἔτι","ἡ","ἢ","ἣ","ἤ","ἥ","ἧς","ἵνα","ὁ","ὃ","ὃν","ὃς","ὅ","ὅδε","ὅθεν","ὅπερ","ὅς","ὅσ","ὅστις","ὅστισ","ὅτε","ὅτι","ὑμόσ","ὑπ","ὑπέρ","ὑπό","ὑπὲρ","ὑπὸ","ὡς","ὡσ","ὥς","ὥστε","ὦ","ᾧ","∆α","∆ε","∆εινα","∆εν","∆εξια","∆ηθεν","∆ηλα∆η","∆ι","∆ια","∆ιαρκως","∆ικα","∆ικο","∆ικοι","∆ικος","∆ικου","∆ικους","∆ιολου","∆ιπλα","∆ιχως"],"gu":["અંગે","અંદર","અથવા","અને","અમને","અમારું","અમે","અહીં","આ","આગળ","આથી","આનું","આને","આપણને","આપણું","આપણે","આપી","આર","આવી","આવે","ઉપર","ઉભા","ઊંચે","ઊભું","એ","એક","એન","એના","એનાં","એની","એનું","એને","એનો","એમ","એવા","એવાં","એવી","એવું","એવો","ઓછું","કંઈક","કઈ","કયું","કયો","કરતાં","કરવું","કરી","કરીએ","કરું","કરે","કરેલું","કર્યા","કર્યાં","કર્યું","કર્યો","કાંઈ","કે","કેટલું","કેમ","કેવી","કેવું","કોઈ","કોઈક","કોણ","કોણે","કોને","ક્યાં","ક્યારે","ખૂબ","ગઈ","ગયા","ગયાં","ગયું","ગયો","ઘણું","છ","છતાં","છીએ","છું","છે","છેક","છો","જ","જાય","જી","જે","જેટલું","જેને","જેમ","જેવી","જેવું","જેવો","જો","જોઈએ","જ્યાં","જ્યારે","ઝાઝું","તને","તમને","તમારું","તમે","તા","તારાથી","તારામાં","તારું","તું","તે","તેં","તેઓ","તેણે","તેથી","તેના","તેની","તેનું","તેને","તેમ","તેમનું","તેમને","તેવી","તેવું","તો","ત્યાં","ત્યારે","થઇ","થઈ","થઈએ","થતા","થતાં","થતી","થતું","થતો","થયા","થયાં","થયું","થયેલું","થયો","થવું","થાઉં","થાઓ","થાય","થી","થોડું","દરેક","ન","નં","નં.","નથી","નહિ","નહી","નહીં","ના","ની","નીચે","નું","ને","નો","પછી","પણ","પર","પરંતુ","પહેલાં","પાછળ","પાસે","પોતાનું","પ્રત્યેક","ફક્ત","ફરી","ફરીથી","બંને","બધા","બધું","બની","બહાર","બહુ","બાદ","બે","મને","મા","માં","માટે","માત્ર","મારું","મી","મૂકવું","મૂકી","મૂક્યા","મૂક્યાં","મૂક્યું","મેં","રહી","રહે","રહેવું","રહ્યા","રહ્યાં","રહ્યો","રીતે","રૂ.","રૂા","લેતા","લેતું","લેવા","વગેરે","વધુ","શકે","શા","શું","સરખું","સામે","સુધી","હતા","હતાં","હતી","હતું","હવે","હશે","હશો","હા","હું","હો","હોઈ","હોઈશ","હોઈશું","હોય","હોવા"],"ha":["a","amma","ba","ban","ce","cikin","da","don","ga","in","ina","ita","ji","ka","ko","kuma","lokacin","ma","mai","na","ne","ni","sai","shi","su","suka","sun","ta","tafi","take","tana","wani","wannan","wata","ya","yake","yana","yi","za"],"he":["אבל","או","אולי","אותה","אותו","אותי","אותך","אותם","אותן","אותנו","אז","אחר","אחרות","אחרי","אחריכן","אחרים","אחרת","אי","איזה","איך","אין","איפה","איתה","איתו","איתי","איתך","איתכם","איתכן","איתם","איתן","איתנו","אך","אל","אלה","אלו","אם","אנחנו","אני","אס","אף","אצל","אשר","את","אתה","אתכם","אתכן","אתם","אתן","באיזומידה","באמצע","באמצעות","בגלל","בין","בלי","במידה","במקוםשבו","ברם","בשביל","בשעהש","בתוך","גם","דרך","הוא","היא","היה","היכן","היתה","היתי","הם","הן","הנה","הסיבהשבגללה","הרי","ואילו","ואת","זאת","זה","זות","יהיה","יוכל","יוכלו","יותרמדי","יכול","יכולה","יכולות","יכולים","יכל","יכלה","יכלו","יש","כאן","כאשר","כולם","כולן","כזה","כי","כיצד","כך","ככה","כל","כלל","כמו","כן","כפי","כש","לא","לאו","לאיזותכלית","לאן","לבין","לה","להיות","להם","להן","לו","לי","לכם","לכן","למה","למטה","למעלה","למקוםשבו","למרות","לנו","לעבר","לעיכן","לפיכך","לפני","מאד","מאחורי","מאיזוסיבה","מאין","מאיפה","מבלי","מבעד","מדוע","מה","מהיכן","מול","מחוץ","מי","מכאן","מכיוון","מלבד","מן","מנין","מסוגל","מעט","מעטים","מעל","מצד","מקוםבו","מתחת","מתי","נגד","נגר","נו","עד","עז","על","עלי","עליה","עליהם","עליהן","עליו","עליך","עליכם","עלינו","עם","עצמה","עצמהם","עצמהן","עצמו","עצמי","עצמם","עצמן","עצמנו","פה","רק","שוב","של","שלה","שלהם","שלהן","שלו","שלי","שלך","שלכה","שלכם","שלכן","שלנו","שם","תהיה","תחת"],"hi":["अंदर","अत","अदि","अप","अपना","अपनि","अपनी","अपने","अभि","अभी","आदि","आप","इंहिं","इंहें","इंहों","इतयादि","इत्यादि","इन","इनका","इन्हीं","इन्हें","इन्हों","इस","इसका","इसकि","इसकी","इसके","इसमें","इसि","इसी","इसे","उंहिं","उंहें","उंहों","उन","उनका","उनकि","उनकी","उनके","उनको","उन्हीं","उन्हें","उन्हों","उस","उसके","उसि","उसी","उसे","एक","एवं","एस","एसे","ऐसे","ओर","और","कइ","कई","कर","करता","करते","करना","करने","करें","कहते","कहा","का","काफि","काफ़ी","कि","किंहें","किंहों","कितना","किन्हें","किन्हों","किया","किर","किस","किसि","किसी","किसे","की","कुछ","कुल","के","को","कोइ","कोई","कोन","कोनसा","कौन","कौनसा","गया","घर","जब","जहाँ","जहां","जा","जिंहें","जिंहों","जितना","जिधर","जिन","जिन्हें","जिन्हों","जिस","जिसे","जीधर","जेसा","जेसे","जैसा","जैसे","जो","तक","तब","तरह","तिंहें","तिंहों","तिन","तिन्हें","तिन्हों","तिस","तिसे","तो","था","थि","थी","थे","दबारा","दवारा","दिया","दुसरा","दुसरे","दूसरे","दो","द्वारा","न","नहिं","नहीं","ना","निचे","निहायत","नीचे","ने","पर","पहले","पुरा","पूरा","पे","फिर","बनि","बनी","बहि","बही","बहुत","बाद","बाला","बिलकुल","भि","भितर","भी","भीतर","मगर","मानो","मे","में","यदि","यह","यहाँ","यहां","यहि","यही","या","यिह","ये","रखें","रवासा","रहा","रहे","ऱ्वासा","लिए","लिये","लेकिन","व","वगेरह","वरग","वर्ग","वह","वहाँ","वहां","वहिं","वहीं","वाले","वुह","वे","वग़ैरह","संग","सकता","सकते","सबसे","सभि","सभी","साथ","साबुत","साभ","सारा","से","सो","हि","ही","हुअ","हुआ","हुइ","हुई","हुए","हे","हें","है","हैं","हो","होता","होति","होती","होते","होना","होने"],"hu":["a","abba","abban","abb\xf3l","addig","ahhoz","ahogy","ahol","aki","akik","akkor","ak\xe1r","alapj\xe1n","alatt","alatta","alattad","alattam","alattatok","alattuk","alattunk","al\xe1","al\xe1d","al\xe1juk","al\xe1m","al\xe1nk","al\xe1tok","al\xf3l","al\xf3la","al\xf3lad","al\xf3lam","al\xf3latok","al\xf3luk","al\xf3lunk","amely","amelybol","amelyek","amelyekben","amelyeket","amelyet","amelyik","amelynek","ami","amikor","amit","amolyan","amott","am\xedg","annak","ann\xe1l","arra","arr\xf3l","att\xf3l","az","aznap","azok","azokat","azokba","azokban","azokb\xf3l","azokhoz","azokig","azokkal","azokk\xe1","azoknak","azokn\xe1l","azokon","azokra","azokr\xf3l","azokt\xf3l","azok\xe9rt","azon","azonban","azonnal","azt","azt\xe1n","azut\xe1n","azzal","azz\xe1","az\xe9rt","bal","balra","ban","be","bel\xe9","bel\xe9d","bel\xe9j\xfck","bel\xe9m","bel\xe9nk","bel\xe9tek","bel\xfcl","belőle","belőled","belőlem","belőletek","belől\xfck","belől\xfcnk","ben","benne","benned","bennem","bennetek","benn\xfck","benn\xfcnk","b\xe1r","b\xe1rcsak","b\xe1rmilyen","b\xfacs\xfa","cikk","cikkek","cikkeket","csak","csakhogy","csup\xe1n","de","dehogy","e","ebbe","ebben","ebből","eddig","egy","egyebek","egyebet","egyed\xfcl","egyelőre","egyes","egyet","egyetlen","egyik","egym\xe1s","egyre","egyszerre","egy\xe9b","egy\xfctt","eg\xe9sz","eg\xe9szen","ehhez","ekkor","el","eleinte","ellen","ellenes","elleni","ellen\xe9re","elmondta","els\xf5","első","elsők","elsősorban","elsőt","el\xe9","el\xe9d","el\xe9g","el\xe9j\xfck","el\xe9m","el\xe9nk","el\xe9tek","el\xf5","el\xf5sz\xf6r","el\xf5tt","elő","előbb","elől","előle","előled","előlem","előletek","elől\xfck","elől\xfcnk","elősz\xf6r","előtt","előtte","előtted","előttem","előttetek","előtt\xfck","előtt\xfcnk","előző","emilyen","engem","ennek","ennyi","enn\xe9l","eny\xe9m","erre","erről","esetben","ettől","ez","ezek","ezekbe","ezekben","ezekből","ezeken","ezeket","ezekhez","ezekig","ezekkel","ezekk\xe9","ezeknek","ezekn\xe9l","ezekre","ezekről","ezektől","ezek\xe9rt","ezen","ezent\xfal","ezer","ezret","ezt","ezut\xe1n","ezzel","ezz\xe9","ez\xe9rt","fel","fele","felek","felet","felett","fel\xe9","fent","fenti","f\xe9l","f\xf6l\xe9","gyakran","ha","hall\xf3","hamar","hanem","harmadik","harmadikat","harminc","hat","hatodik","hatodikat","hatot","hatvan","helyett","hetedik","hetediket","hetet","hetven","hirtelen","hiszen","hi\xe1ba","hogy","hogyan","hol","holnap","holnapot","honnan","hova","hozz\xe1","hozz\xe1d","hozz\xe1juk","hozz\xe1m","hozz\xe1nk","hozz\xe1tok","hurr\xe1","huszadik","h\xe1ny","h\xe1nyszor","h\xe1rmat","h\xe1rom","h\xe1t","h\xe1tha","h\xe1tuls\xf3","h\xe9t","h\xfasz","ide","ide-оda","id\xe9n","igaz\xe1n","igen","ill","ill.","illetve","ilyen","ilyenkor","imm\xe1r","ink\xe1bb","is","ism\xe9t","ison","itt","jelenleg","jobban","jobbra","j\xf3","j\xf3l","j\xf3lesik","j\xf3val","j\xf6vőre","kell","kellene","kellett","kelljen","keress\xfcnk","kereszt\xfcl","ketten","kettő","kettőt","kev\xe9s","ki","kiben","kiből","kicsit","kicsoda","kihez","kik","kikbe","kikben","kikből","kiken","kiket","kikhez","kikkel","kikk\xe9","kiknek","kikn\xe9l","kikre","kikről","kiktől","kik\xe9rt","kilenc","kilencedik","kilencediket","kilencet","kilencven","kin","kinek","kin\xe9l","kire","kiről","kit","kitől","kivel","kiv\xe9","ki\xe9","ki\xe9rt","kor\xe1bban","k\xe9pest","k\xe9rem","k\xe9rlek","k\xe9sz","k\xe9ső","k\xe9sőbb","k\xe9sőn","k\xe9t","k\xe9tszer","k\xedv\xfcl","k\xf6r\xfcl","k\xf6sz\xf6nhetően","k\xf6sz\xf6n\xf6m","k\xf6zben","k\xf6zel","k\xf6zepesen","k\xf6zep\xe9n","k\xf6z\xe9","k\xf6z\xf6tt","k\xf6z\xfcl","k\xfcl\xf6n","k\xfcl\xf6nben","k\xfcl\xf6nb\xf6ző","k\xfcl\xf6nb\xf6zőbb","k\xfcl\xf6nb\xf6zőek","lassan","le","legal\xe1bb","legyen","lehet","lehetetlen","lehetett","lehetőleg","lehetős\xe9g","lenne","lenni","lenn\xe9k","lenn\xe9nek","lesz","leszek","lesznek","lesz\xfcnk","lett","lettek","lettem","lett\xfcnk","l\xe9vő","ma","maga","magad","magam","magatokat","magukat","magunkat","mag\xe1t","mai","majd","majdnem","manaps\xe1g","meg","megcsin\xe1l","megcsin\xe1lnak","megint","megvan","mellett","mellette","melletted","mellettem","mellettetek","mellett\xfck","mellett\xfcnk","mell\xe9","mell\xe9d","mell\xe9j\xfck","mell\xe9m","mell\xe9nk","mell\xe9tek","mellől","mellőle","mellőled","mellőlem","mellőletek","mellől\xfck","mellől\xfcnk","mely","melyek","melyik","mennyi","mert","mi","miatt","miatta","miattad","miattam","miattatok","miattuk","miattunk","mibe","miben","miből","mihez","mik","mikbe","mikben","mikből","miken","miket","mikhez","mikkel","mikk\xe9","miknek","mikn\xe9l","mikor","mikre","mikről","miktől","mik\xe9rt","milyen","min","mind","mindegyik","mindegyiket","minden","mindenesetre","mindenki","mindent","minden\xfctt","mindig","mindketten","minek","minket","mint","mintha","min\xe9l","mire","miről","mit","mitől","mivel","miv\xe9","mi\xe9rt","mondta","most","mostan\xe1ig","m\xe1r","m\xe1s","m\xe1sik","m\xe1sikat","m\xe1snap","m\xe1sodik","m\xe1sodszor","m\xe1sok","m\xe1sokat","m\xe1st","m\xe9g","m\xe9gis","m\xedg","m\xf6g\xe9","m\xf6g\xe9d","m\xf6g\xe9j\xfck","m\xf6g\xe9m","m\xf6g\xe9nk","m\xf6g\xe9tek","m\xf6g\xf6tt","m\xf6g\xf6tte","m\xf6g\xf6tted","m\xf6g\xf6ttem","m\xf6g\xf6ttetek","m\xf6g\xf6tt\xfck","m\xf6g\xf6tt\xfcnk","m\xf6g\xfcl","m\xf6g\xfcle","m\xf6g\xfcled","m\xf6g\xfclem","m\xf6g\xfcletek","m\xf6g\xfcl\xfck","m\xf6g\xfcl\xfcnk","m\xfaltkor","m\xfalva","na","nagy","nagyobb","nagyon","naponta","napot","ne","negyedik","negyediket","negyven","neked","nekem","neki","nekik","nektek","nek\xfcnk","nem","nemcsak","nemr\xe9g","nincs","nyolc","nyolcadik","nyolcadikat","nyolcat","nyolcvan","n\xe1la","n\xe1lad","n\xe1lam","n\xe1latok","n\xe1luk","n\xe1lunk","n\xe9gy","n\xe9gyet","n\xe9ha","n\xe9h\xe1ny","n\xe9lk\xfcl","o","oda","ok","olyan","onnan","ott","pedig","persze","p\xe1r","p\xe9ld\xe1ul","rajta","rajtad","rajtam","rajtatok","rajtuk","rajtunk","rendben","rosszul","r\xe1","r\xe1d","r\xe1juk","r\xe1m","r\xe1nk","r\xe1tok","r\xe9gen","r\xe9g\xf3ta","r\xe9sz\xe9re","r\xf3la","r\xf3lad","r\xf3lam","r\xf3latok","r\xf3luk","r\xf3lunk","r\xf6gt\xf6n","s","saj\xe1t","se","sem","semmi","semmilyen","semmis\xe9g","senki","soha","sok","sokan","sokat","sokkal","sokszor","sok\xe1ig","sor\xe1n","stb.","szemben","szerbusz","szerint","szerinte","szerinted","szerintem","szerintetek","szerint\xfck","szerint\xfcnk","szervusz","szinte","sz\xe1m\xe1ra","sz\xe1z","sz\xe1zadik","sz\xe1zat","sz\xe9pen","sz\xe9t","sz\xedves","sz\xedvesen","sz\xedveskedj\xe9k","sőt","tal\xe1n","tavaly","te","tegnap","tegnapelőtt","teh\xe1t","tele","teljes","tess\xe9k","ti","tied","titeket","tizedik","tizediket","tizenegy","tizenegyedik","tizenhat","tizenh\xe1rom","tizenh\xe9t","tizenkettedik","tizenkettő","tizenkilenc","tizenk\xe9t","tizennyolc","tizenn\xe9gy","tizen\xf6t","tizet","tov\xe1bb","tov\xe1bbi","tov\xe1bb\xe1","t\xe1vol","t\xe9ged","t\xe9nyleg","t\xedz","t\xf6bb","t\xf6bbi","t\xf6bbsz\xf6r","t\xfal","tőle","tőled","tőlem","tőletek","től\xfck","től\xfcnk","ugyanakkor","ugyanez","ugyanis","ugye","urak","uram","urat","utolj\xe1ra","utols\xf3","ut\xe1n","ut\xe1na","vagy","vagyis","vagyok","vagytok","vagyunk","vajon","valahol","valaki","valakit","valamelyik","valami","valamint","val\xf3","van","vannak","vele","veled","velem","veletek","vel\xfck","vel\xfcnk","vissza","viszl\xe1t","viszont","viszontl\xe1t\xe1sra","volna","voln\xe1nak","voln\xe9k","volt","voltak","voltam","voltunk","v\xe9gre","v\xe9g\xe9n","v\xe9g\xfcl","\xe1ltal","\xe1ltal\xe1ban","\xe1m","\xe1t","\xe9ljen","\xe9n","\xe9ppen","\xe9rte","\xe9rted","\xe9rtem","\xe9rtetek","\xe9rt\xfck","\xe9rt\xfcnk","\xe9s","\xe9v","\xe9vben","\xe9ve","\xe9vek","\xe9ves","\xe9vi","\xe9vvel","\xedgy","\xf3ta","\xf5","\xf5k","\xf5ket","\xf6n","\xf6nbe","\xf6nben","\xf6nből","\xf6nh\xf6z","\xf6nnek","\xf6nnel","\xf6nn\xe9l","\xf6nre","\xf6nről","\xf6nt","\xf6ntől","\xf6n\xe9rt","\xf6n\xf6k","\xf6n\xf6kbe","\xf6n\xf6kben","\xf6n\xf6kből","\xf6n\xf6ket","\xf6n\xf6kh\xf6z","\xf6n\xf6kkel","\xf6n\xf6knek","\xf6n\xf6kn\xe9l","\xf6n\xf6kre","\xf6n\xf6kről","\xf6n\xf6ktől","\xf6n\xf6k\xe9rt","\xf6n\xf6k\xf6n","\xf6n\xf6n","\xf6ssze","\xf6t","\xf6tven","\xf6t\xf6dik","\xf6t\xf6diket","\xf6t\xf6t","\xfagy","\xfagyis","\xfagynevezett","\xfaj","\xfajabb","\xfajra","\xfar","ő","ők","őket","őt"],"id":["ada","adalah","adanya","adapun","agak","agaknya","agar","akan","akankah","akhir","akhiri","akhirnya","aku","akulah","amat","amatlah","anda","andalah","antar","antara","antaranya","apa","apaan","apabila","apakah","apalagi","apatah","artinya","asal","asalkan","atas","atau","ataukah","ataupun","awal","awalnya","bagai","bagaikan","bagaimana","bagaimanakah","bagaimanapun","bagi","bagian","bahkan","bahwa","bahwasanya","baik","bakal","bakalan","balik","banyak","bapak","baru","bawah","beberapa","begini","beginian","beginikah","beginilah","begitu","begitukah","begitulah","begitupun","bekerja","belakang","belakangan","belum","belumlah","benar","benarkah","benarlah","berada","berakhir","berakhirlah","berakhirnya","berapa","berapakah","berapalah","berapapun","berarti","berawal","berbagai","berdatangan","beri","berikan","berikut","berikutnya","berjumlah","berkali-kali","berkata","berkehendak","berkeinginan","berkenaan","berlainan","berlalu","berlangsung","berlebihan","bermacam","bermacam-macam","bermaksud","bermula","bersama","bersama-sama","bersiap","bersiap-siap","bertanya","bertanya-tanya","berturut","berturut-turut","bertutur","berujar","berupa","besar","betul","betulkah","biasa","biasanya","bila","bilakah","bisa","bisakah","boleh","bolehkah","bolehlah","buat","bukan","bukankah","bukanlah","bukannya","bulan","bung","cara","caranya","cukup","cukupkah","cukuplah","cuma","dahulu","dalam","dan","dapat","dari","daripada","datang","dekat","demi","demikian","demikianlah","dengan","depan","di","dia","diakhiri","diakhirinya","dialah","diantara","diantaranya","diberi","diberikan","diberikannya","dibuat","dibuatnya","didapat","didatangkan","digunakan","diibaratkan","diibaratkannya","diingat","diingatkan","diinginkan","dijawab","dijelaskan","dijelaskannya","dikarenakan","dikatakan","dikatakannya","dikerjakan","diketahui","diketahuinya","dikira","dilakukan","dilalui","dilihat","dimaksud","dimaksudkan","dimaksudkannya","dimaksudnya","diminta","dimintai","dimisalkan","dimulai","dimulailah","dimulainya","dimungkinkan","dini","dipastikan","diperbuat","diperbuatnya","dipergunakan","diperkirakan","diperlihatkan","diperlukan","diperlukannya","dipersoalkan","dipertanyakan","dipunyai","diri","dirinya","disampaikan","disebut","disebutkan","disebutkannya","disini","disinilah","ditambahkan","ditandaskan","ditanya","ditanyai","ditanyakan","ditegaskan","ditujukan","ditunjuk","ditunjuki","ditunjukkan","ditunjukkannya","ditunjuknya","dituturkan","dituturkannya","diucapkan","diucapkannya","diungkapkan","dong","dua","dulu","empat","enggak","enggaknya","entah","entahlah","guna","gunakan","hal","hampir","hanya","hanyalah","hari","harus","haruslah","harusnya","hendak","hendaklah","hendaknya","hingga","ia","ialah","ibarat","ibaratkan","ibaratnya","ibu","ikut","ingat","ingat-ingat","ingin","inginkah","inginkan","ini","inikah","inilah","itu","itukah","itulah","jadi","jadilah","jadinya","jangan","jangankan","janganlah","jauh","jawab","jawaban","jawabnya","jelas","jelaskan","jelaslah","jelasnya","jika","jikalau","juga","jumlah","jumlahnya","justru","kala","kalau","kalaulah","kalaupun","kalian","kami","kamilah","kamu","kamulah","kan","kapan","kapankah","kapanpun","karena","karenanya","kasus","kata","katakan","katakanlah","katanya","ke","keadaan","kebetulan","kecil","kedua","keduanya","keinginan","kelamaan","kelihatan","kelihatannya","kelima","keluar","kembali","kemudian","kemungkinan","kemungkinannya","kenapa","kepada","kepadanya","kesampaian","keseluruhan","keseluruhannya","keterlaluan","ketika","khususnya","kini","kinilah","kira","kira-kira","kiranya","kita","kitalah","kok","kurang","lagi","lagian","lah","lain","lainnya","lalu","lama","lamanya","lanjut","lanjutnya","lebih","lewat","lima","luar","macam","maka","makanya","makin","malah","malahan","mampu","mampukah","mana","manakala","manalagi","masa","masalah","masalahnya","masih","masihkah","masing","masing-masing","mau","maupun","melainkan","melakukan","melalui","melihat","melihatnya","memang","memastikan","memberi","memberikan","membuat","memerlukan","memihak","meminta","memintakan","memisalkan","memperbuat","mempergunakan","memperkirakan","memperlihatkan","mempersiapkan","mempersoalkan","mempertanyakan","mempunyai","memulai","memungkinkan","menaiki","menambahkan","menandaskan","menanti","menanti-nanti","menantikan","menanya","menanyai","menanyakan","mendapat","mendapatkan","mendatang","mendatangi","mendatangkan","menegaskan","mengakhiri","mengapa","mengatakan","mengatakannya","mengenai","mengerjakan","mengetahui","menggunakan","menghendaki","mengibaratkan","mengibaratkannya","mengingat","mengingatkan","menginginkan","mengira","mengucapkan","mengucapkannya","mengungkapkan","menjadi","menjawab","menjelaskan","menuju","menunjuk","menunjuki","menunjukkan","menunjuknya","menurut","menuturkan","menyampaikan","menyangkut","menyatakan","menyebutkan","menyeluruh","menyiapkan","merasa","mereka","merekalah","merupakan","meski","meskipun","meyakini","meyakinkan","minta","mirip","misal","misalkan","misalnya","mula","mulai","mulailah","mulanya","mungkin","mungkinkah","nah","naik","namun","nanti","nantinya","nyaris","nyatanya","oleh","olehnya","pada","padahal","padanya","pak","paling","panjang","pantas","para","pasti","pastilah","penting","pentingnya","per","percuma","perlu","perlukah","perlunya","pernah","persoalan","pertama","pertama-tama","pertanyaan","pertanyakan","pihak","pihaknya","pukul","pula","pun","punya","rasa","rasanya","rata","rupanya","saat","saatnya","saja","sajalah","saling","sama","sama-sama","sambil","sampai","sampai-sampai","sampaikan","sana","sangat","sangatlah","satu","saya","sayalah","se","sebab","sebabnya","sebagai","sebagaimana","sebagainya","sebagian","sebaik","sebaik-baiknya","sebaiknya","sebaliknya","sebanyak","sebegini","sebegitu","sebelum","sebelumnya","sebenarnya","seberapa","sebesar","sebetulnya","sebisanya","sebuah","sebut","sebutlah","sebutnya","secara","secukupnya","sedang","sedangkan","sedemikian","sedikit","sedikitnya","seenaknya","segala","segalanya","segera","seharusnya","sehingga","seingat","sejak","sejauh","sejenak","sejumlah","sekadar","sekadarnya","sekali","sekali-kali","sekalian","sekaligus","sekalipun","sekarang","sekecil","seketika","sekiranya","sekitar","sekitarnya","sekurang-kurangnya","sekurangnya","sela","selagi","selain","selaku","selalu","selama","selama-lamanya","selamanya","selanjutnya","seluruh","seluruhnya","semacam","semakin","semampu","semampunya","semasa","semasih","semata","semata-mata","semaunya","sementara","semisal","semisalnya","sempat","semua","semuanya","semula","sendiri","sendirian","sendirinya","seolah","seolah-olah","seorang","sepanjang","sepantasnya","sepantasnyalah","seperlunya","seperti","sepertinya","sepihak","sering","seringnya","serta","serupa","sesaat","sesama","sesampai","sesegera","sesekali","seseorang","sesuatu","sesuatunya","sesudah","sesudahnya","setelah","setempat","setengah","seterusnya","setiap","setiba","setibanya","setidak-tidaknya","setidaknya","setinggi","seusai","sewaktu","siap","siapa","siapakah","siapapun","sini","sinilah","soal","soalnya","suatu","sudah","sudahkah","sudahlah","supaya","tadi","tadinya","tahu","tahun","tak","tambah","tambahnya","tampak","tampaknya","tandas","tandasnya","tanpa","tanya","tanyakan","tanyanya","tapi","tegas","tegasnya","telah","tempat","tengah","tentang","tentu","tentulah","tentunya","tepat","terakhir","terasa","terbanyak","terdahulu","terdapat","terdiri","terhadap","terhadapnya","teringat","teringat-ingat","terjadi","terjadilah","terjadinya","terkira","terlalu","terlebih","terlihat","termasuk","ternyata","tersampaikan","tersebut","tersebutlah","tertentu","tertuju","terus","terutama","tetap","tetapi","tiap","tiba","tiba-tiba","tidak","tidakkah","tidaklah","tiga","tinggi","toh","tunjuk","turut","tutur","tuturnya","ucap","ucapnya","ujar","ujarnya","umum","umumnya","ungkap","ungkapnya","untuk","usah","usai","waduh","wah","wahai","waktu","waktunya","walau","walaupun","wong","yaitu","yakin","yakni","yang"],"ga":["a","ach","ag","agus","an","aon","ar","arna","as","b\'","ba","beirt","bh\xfar","caoga","ceathair","ceathrar","chomh","cht\xf3","chuig","chun","cois","c\xe9ad","c\xfaig","c\xfaigear","d\'","daichead","dar","de","deich","deichni\xfar","den","dh\xe1","do","don","dt\xed","d\xe1","d\xe1r","d\xf3","faoi","faoin","faoina","faoin\xe1r","fara","fiche","gach","gan","go","gur","haon","hocht","i","iad","idir","in","ina","ins","in\xe1r","is","le","leis","lena","len\xe1r","m\'","mar","mo","m\xe9","na","nach","naoi","naon\xfar","n\xe1","n\xed","n\xedor","n\xf3","n\xf3cha","ocht","ochtar","os","roimh","sa","seacht","seachtar","seacht\xf3","seasca","seisear","siad","sibh","sinn","sna","s\xe9","s\xed","tar","thar","th\xfa","tri\xfar","tr\xed","tr\xedna","tr\xedn\xe1r","tr\xedocha","t\xfa","um","\xe1r","\xe9","\xe9is","\xed","\xf3","\xf3n","\xf3na","\xf3n\xe1r"],"it":["a","abbastanza","abbia","abbiamo","abbiano","abbiate","accidenti","ad","adesso","affinch\xe9","agl","agli","ahime","ahim\xe8","ai","al","alcuna","alcuni","alcuno","all","alla","alle","allo","allora","altre","altri","altrimenti","altro","altrove","altrui","anche","ancora","anni","anno","ansa","anticipo","assai","attesa","attraverso","avanti","avemmo","avendo","avente","aver","avere","averlo","avesse","avessero","avessi","avessimo","aveste","avesti","avete","aveva","avevamo","avevano","avevate","avevi","avevo","avrai","avranno","avrebbe","avrebbero","avrei","avremmo","avremo","avreste","avresti","avrete","avr\xe0","avr\xf2","avuta","avute","avuti","avuto","basta","ben","bene","benissimo","brava","bravo","buono","c","caso","cento","certa","certe","certi","certo","che","chi","chicchessia","chiunque","ci","ciascuna","ciascuno","cima","cinque","cio","cioe","cio\xe8","circa","citta","citt\xe0","ci\xf2","co","codesta","codesti","codesto","cogli","coi","col","colei","coll","coloro","colui","come","cominci","comprare","comunque","con","concernente","conclusione","consecutivi","consecutivo","consiglio","contro","cortesia","cos","cosa","cosi","cos\xec","cui","d","da","dagl","dagli","dai","dal","dall","dalla","dalle","dallo","dappertutto","davanti","degl","degli","dei","del","dell","della","delle","dello","dentro","detto","deve","devo","di","dice","dietro","dire","dirimpetto","diventa","diventare","diventato","dopo","doppio","dov","dove","dovra","dovr\xe0","dovunque","due","dunque","durante","e","ebbe","ebbero","ebbi","ecc","ecco","ed","effettivamente","egli","ella","entrambi","eppure","era","erano","eravamo","eravate","eri","ero","esempio","esse","essendo","esser","essere","essi","ex","fa","faccia","facciamo","facciano","facciate","faccio","facemmo","facendo","facesse","facessero","facessi","facessimo","faceste","facesti","faceva","facevamo","facevano","facevate","facevi","facevo","fai","fanno","farai","faranno","fare","farebbe","farebbero","farei","faremmo","faremo","fareste","faresti","farete","far\xe0","far\xf2","fatto","favore","fece","fecero","feci","fin","finalmente","finche","fine","fino","forse","forza","fosse","fossero","fossi","fossimo","foste","fosti","fra","frattempo","fu","fui","fummo","fuori","furono","futuro","generale","gente","gia","giacche","giorni","giorno","giu","gi\xe0","gli","gliela","gliele","glieli","glielo","gliene","grande","grazie","gruppo","ha","haha","hai","hanno","ho","i","ie","ieri","il","improvviso","in","inc","indietro","infatti","inoltre","insieme","intanto","intorno","invece","io","l","la","lasciato","lato","le","lei","li","lo","lontano","loro","lui","lungo","luogo","l\xe0","ma","macche","magari","maggior","mai","male","malgrado","malissimo","me","medesimo","mediante","meglio","meno","mentre","mesi","mezzo","mi","mia","mie","miei","mila","miliardi","milioni","minimi","mio","modo","molta","molti","moltissimo","molto","momento","mondo","ne","negl","negli","nei","nel","nell","nella","nelle","nello","nemmeno","neppure","nessun","nessuna","nessuno","niente","no","noi","nome","non","nondimeno","nonostante","nonsia","nostra","nostre","nostri","nostro","novanta","nove","nulla","nuovi","nuovo","o","od","oggi","ogni","ognuna","ognuno","oltre","oppure","ora","ore","osi","ossia","ottanta","otto","paese","parecchi","parecchie","parecchio","parte","partendo","peccato","peggio","per","perche","perch\xe8","perch\xe9","percio","perci\xf2","perfino","pero","persino","persone","per\xf2","piedi","pieno","piglia","piu","piuttosto","pi\xf9","po","pochissimo","poco","poi","poiche","possa","possedere","posteriore","posto","potrebbe","preferibilmente","presa","press","prima","primo","principalmente","probabilmente","promesso","proprio","puo","pure","purtroppo","pu\xf2","qua","qualche","qualcosa","qualcuna","qualcuno","quale","quali","qualunque","quando","quanta","quante","quanti","quanto","quantunque","quarto","quasi","quattro","quel","quella","quelle","quelli","quello","quest","questa","queste","questi","questo","qui","quindi","quinto","realmente","recente","recentemente","registrazione","relativo","riecco","rispetto","salvo","sara","sarai","saranno","sarebbe","sarebbero","sarei","saremmo","saremo","sareste","saresti","sarete","sar\xe0","sar\xf2","scola","scopo","scorso","se","secondo","seguente","seguito","sei","sembra","sembrare","sembrato","sembrava","sembri","sempre","senza","sette","si","sia","siamo","siano","siate","siete","sig","solito","solo","soltanto","sono","sopra","soprattutto","sotto","spesso","sta","stai","stando","stanno","starai","staranno","starebbe","starebbero","starei","staremmo","staremo","stareste","staresti","starete","star\xe0","star\xf2","stata","state","stati","stato","stava","stavamo","stavano","stavate","stavi","stavo","stemmo","stessa","stesse","stessero","stessi","stessimo","stesso","steste","stesti","stette","stettero","stetti","stia","stiamo","stiano","stiate","sto","su","sua","subito","successivamente","successivo","sue","sugl","sugli","sui","sul","sull","sulla","sulle","sullo","suo","suoi","tale","tali","talvolta","tanto","te","tempo","terzo","th","ti","titolo","tra","tranne","tre","trenta","triplo","troppo","trovato","tu","tua","tue","tuo","tuoi","tutta","tuttavia","tutte","tutti","tutto","uguali","ulteriore","ultimo","un","una","uno","uomo","va","vai","vale","vari","varia","varie","vario","verso","vi","vicino","visto","vita","voi","volta","volte","vostra","vostre","vostri","vostro","\xe8"],"ja":["あそこ","あっ","あの","あのかた","あの人","あり","あります","ある","あれ","い","いう","います","いる","う","うち","え","お","および","おり","おります","か","かつて","から","が","き","ここ","こちら","こと","この","これ","これら","さ","さらに","し","しかし","する","ず","せ","せる","そこ","そして","その","その他","その後","それ","それぞれ","それで","た","ただし","たち","ため","たり","だ","だっ","だれ","つ","て","で","でき","できる","です","では","でも","と","という","といった","とき","ところ","として","とともに","とも","と共に","どこ","どの","な","ない","なお","なかっ","ながら","なく","なっ","など","なに","なら","なり","なる","なん","に","において","における","について","にて","によって","により","による","に対して","に対する","に関する","の","ので","のみ","は","ば","へ","ほか","ほとんど","ほど","ます","また","または","まで","も","もの","ものの","や","よう","より","ら","られ","られる","れ","れる","を","ん","何","及び","彼","彼女","我々","特に","私","私達","貴方","貴方方"],"ko":["!","\\"","$","%","&","\'","(",")","*","+",",","-",".","...","0","1","2","3","4","5","6","7","8","9",";","<","=",">","?","@","\\\\","^","_","`","|","~","\xb7","—","——","‘","’","“","”","…","、","。","〈","〉","《","》","가","가까스로","가령","각","각각","각자","각종","갖고말하자면","같다","같이","개의치않고","거니와","거바","거의","것","것과 같이","것들","게다가","게우다","겨우","견지에서","결과에 이르다","결국","결론을 낼 수 있다","겸사겸사","고려하면","고로","곧","공동으로","과","과연","관계가 있다","관계없이","관련이 있다","관하여","관한","관해서는","구","구체적으로","구토하다","그","그들","그때","그래","그래도","그래서","그러나","그러니","그러니까","그러면","그러므로","그러한즉","그런 까닭에","그런데","그런즉","그럼","그럼에도 불구하고","그렇게 함으로써","그렇지","그렇지 않다면","그렇지 않으면","그렇지만","그렇지않으면","그리고","그리하여","그만이다","그에 따르는","그위에","그저","그중에서","그치지 않다","근거로","근거하여","기대여","기점으로","기준으로","기타","까닭으로","까악","까지","까지 미치다","까지도","꽈당","끙끙","끼익","나","나머지는","남들","남짓","너","너희","너희들","네","넷","년","논하지 않다","놀라다","누가 알겠는가","누구","다른","다른 방면으로","다만","다섯","다소","다수","다시 말하자면","다시말하면","다음","다음에","다음으로","단지","답다","당신","당장","대로 하다","대하면","대하여","대해 말하자면","대해서","댕그","더구나","더군다나","더라도","더불어","더욱더","더욱이는","도달하다","도착하다","동시에","동안","된바에야","된이상","두번째로","둘","둥둥","뒤따라","뒤이어","든간에","들","등","등등","딩동","따라","따라서","따위","따지지 않다","딱","때","때가 되어","때문에","또","또한","뚝뚝","라 해도","령","로","로 인하여","로부터","로써","륙","를","마음대로","마저","마저도","마치","막론하고","만 못하다","만약","만약에","만은 아니다","만이 아니다","만일","만큼","말하자면","말할것도 없고","매","매번","메쓰겁다","몇","모","모두","무렵","무릎쓰고","무슨","무엇","무엇때문에","물론","및","바꾸어말하면","바꾸어말하자면","바꾸어서 말하면","바꾸어서 한다면","바꿔 말하면","바로","바와같이","밖에 안된다","반대로","반대로 말하자면","반드시","버금","보는데서","보다더","보드득","본대로","봐","봐라","부류의 사람들","부터","불구하고","불문하고","붕붕","비걱거리다","비교적","비길수 없다","비로소","비록","비슷하다","비추어 보아","비하면","뿐만 아니라","뿐만아니라","뿐이다","삐걱","삐걱거리다","사","삼","상대적으로 말하자면","생각한대로","설령","설마","설사","셋","소생","소인","솨","쉿","습니까","습니다","시각","시간","시작하여","시초에","시키다","실로","심지어","아","아니","아니나다를가","아니라면","아니면","아니었다면","아래윗","아무거나","아무도","아야","아울러","아이","아이고","아이구","아이야","아이쿠","아하","아홉","안 그러면","않기 위하여","않기 위해서","알 수 있다","알았어","앗","앞에서","앞의것","야","약간","양자","어","어기여차","어느","어느 년도","어느것","어느곳","어느때","어느쪽","어느해","어디","어때","어떠한","어떤","어떤것","어떤것들","어떻게","어떻해","어이","어째서","어쨋든","어쩔수 없다","어찌","어찌됏든","어찌됏어","어찌하든지","어찌하여","언제","언젠가","얼마","얼마 안 되는 것","얼마간","얼마나","얼마든지","얼마만큼","얼마큼","엉엉","에","에 가서","에 달려 있다","에 대해","에 있다","에 한하다","에게","에서","여","여기","여덟","여러분","여보시오","여부","여섯","여전히","여차","연관되다","연이서","영","영차","옆사람","예","예를 들면","예를 들자면","예컨대","예하면","오","오로지","오르다","오자마자","오직","오호","오히려","와","와 같은 사람들","와르르","와아","왜","왜냐하면","외에도","요만큼","요만한 것","요만한걸","요컨대","우르르","우리","우리들","우선","우에 종합한것과같이","운운","월","위에서 서술한바와같이","위하여","위해서","윙윙","육","으로","으로 인하여","으로서","으로써","을","응","응당","의","의거하여","의지하여","의해","의해되다","의해서","이","이 되다","이 때문에","이 밖에","이 외에","이 정도의","이것","이곳","이때","이라면","이래","이러이러하다","이러한","이런","이럴정도로","이렇게 많은 것","이렇게되면","이렇게말하자면","이렇구나","이로 인하여","이르기까지","이리하여","이만큼","이번","이봐","이상","이어서","이었다","이와 같다","이와 같은","이와 반대로","이와같다면","이외에도","이용하여","이유만으로","이젠","이지만","이쪽","이천구","이천육","이천칠","이천팔","인 듯하다","인젠","일","일것이다","일곱","일단","일때","일반적으로","일지라도","임에 틀림없다","입각하여","입장에서","잇따라","있다","자","자기","자기집","자마자","자신","잠깐","잠시","저","저것","저것만큼","저기","저쪽","저희","전부","전자","전후","점에서 보아","정도에 이르다","제","제각기","제외하고","조금","조차","조차도","졸졸","좀","좋아","좍좍","주룩주룩","주저하지 않고","줄은 몰랏다","줄은모른다","중에서","중의하나","즈음하여","즉","즉시","지든지","지만","지말고","진짜로","쪽으로","차라리","참","참나","첫번째로","쳇","총적으로","총적으로 말하면","총적으로 보면","칠","콸콸","쾅쾅","쿵","타다","타인","탕탕","토하다","통하여","툭","퉤","틈타","팍","팔","퍽","펄렁","하","하게될것이다","하게하다","하겠는가","하고 있다","하고있었다","하곤하였다","하구나","하기 때문에","하기 위하여","하기는한데","하기만 하면","하기보다는","하기에","하나","하느니","하는 김에","하는 편이 낫다","하는것도","하는것만 못하다","하는것이 낫다","하는바","하더라도","하도다","하도록시키다","하도록하다","하든지","하려고하다","하마터면","하면 할수록","하면된다","하면서","하물며","하여금","하여야","하자마자","하지 않는다면","하지 않도록","하지마","하지마라","하지만","하하","한 까닭에","한 이유는","한 후","한다면","한다면 몰라도","한데","한마디","한적이있다","한켠으로는","한항목","할 따름이다","할 생각이다","할 줄 안다","할 지경이다","할 힘이 있다","할때","할만하다","할망정","할뿐","할수있다","할수있어","할줄알다","할지라도","할지언정","함께","해도된다","해도좋다","해봐요","해서는 안된다","해야한다","해요","했어요","향하다","향하여","향해서","허","허걱","허허","헉","헉헉","헐떡헐떡","형식으로 쓰여","혹시","혹은","혼자","훨씬","휘익","휴","흐흐","흥","힘입어","︿","！","＃","＄","％","＆","（","）","＊","＋","，","０","１","２","３","４","５","６","７","８","９","：","；","＜","＞","？","＠","［","］","｛","｜","｝","～","￥"],"ku":["ئێمە","ئێوە","ئەم","ئەو","ئەوان","ئەوەی","بۆ","بێ","بێجگە","بە","بەبێ","بەدەم","بەردەم","بەرلە","بەرەوی","بەرەوە","بەلای","بەپێی","تۆ","تێ","جگە","دوای","دوو","دە","دەکات","دەگەڵ","سەر","لێ","لە","لەبابەت","لەباتی","لەبارەی","لەبرێتی","لەبن","لەبەر","لەبەینی","لەدەم","لەرێ","لەرێگا","لەرەوی","لەسەر","لەلایەن","لەناو","لەنێو","لەو","لەپێناوی","لەژێر","لەگەڵ","من","ناو","نێوان","هەر","هەروەها","و","وەک","پاش","پێ","پێش","چەند","کرد","کە","ی"],"la":["a","ab","ac","ad","at","atque","aut","autem","cum","de","dum","e","erant","erat","est","et","etiam","ex","haec","hic","hoc","in","ita","me","nec","neque","non","per","qua","quae","quam","qui","quibus","quidem","quo","quod","re","rebus","rem","res","sed","si","sic","sunt","tamen","tandem","te","ut","vel"],"lt":["abi","abidvi","abiejose","abiejuose","abiej\xf8","abiem","abigaliai","abipus","abu","abudu","ai","ana","anaiptol","anaisiais","anajai","anajam","anajame","anapus","anas","anasai","anasis","anei","aniedvi","anieji","aniesiems","anoji","anojo","anojoje","anokia","anoks","anosiomis","anosioms","anosios","anosiose","anot","ant","antai","anuodu","anuoju","anuosiuose","anuosius","an\xe0ja","an\xe0j\xe0","an\xe0j\xe1","an\xe0sias","an\xf8j\xf8","apie","aplink","ar","arba","argi","arti","auk\xf0\xe8iau","a\xf0","be","bei","beje","bema\xfe","bent","bet","betgi","beveik","dar","dargi","daugma\xfe","deja","d\xebka","d\xebl","d\xeblei","d\xeblto","ech","et","gal","galb\xfbt","galgi","gan","gana","gi","greta","idant","iki","ir","irgi","it","itin","i\xf0","i\xf0ilgai","i\xf0vis","jaisiais","jajai","jajam","jajame","jei","jeigu","ji","jiedu","jiedvi","jieji","jiesiems","jinai","jis","jisai","jog","joji","jojo","jojoje","jokia","joks","josiomis","josioms","josios","josiose","judu","judvi","juk","jumis","jums","jumyse","juodu","juoju","juosiuose","juosius","jus","j\xe0ja","j\xe0j\xe0","j\xe0sias","j\xe1j\xe1","j\xf8j\xf8","j\xfbs","j\xfbsi\xf0kis","j\xfbsi\xf0k\xeb","j\xfbs\xf8","kad","kada","kadangi","kai","kaip","kaipgi","kas","katra","katras","katriedvi","katruodu","ka\xfein","ka\xfekas","ka\xfekatra","ka\xfekatras","ka\xfekokia","ka\xfekoks","ka\xfekuri","ka\xfekuris","kiaurai","kiek","kiekvienas","kieno","kita","kitas","kitokia","kitoks","kod\xebl","kokia","koks","kol","kolei","kone","kuomet","kur","kurgi","kuri","kuriedvi","kuris","kuriuodu","lai","lig","ligi","link","lyg","man","manaisiais","manajai","manajam","manajame","manas","manasai","manasis","mane","manieji","maniesiems","manim","manimi","mani\xf0kis","mani\xf0k\xeb","mano","manoji","manojo","manojoje","manosiomis","manosioms","manosios","manosiose","manuoju","manuosiuose","manuosius","manyje","man\xe0ja","man\xe0j\xe0","man\xe0j\xe1","man\xe0sias","man\xe6s","man\xf8j\xf8","mat","ma\xfedaug","ma\xfene","mes","mudu","mudvi","mumis","mums","mumyse","mus","m\xfbsi\xf0kis","m\xfbsi\xf0k\xeb","m\xfbs\xf8","na","nagi","ne","nebe","nebent","negi","negu","nei","nejau","nejaugi","nekaip","nelyginant","nes","net","netgi","netoli","neva","nors","nuo","n\xeb","o","ogi","oi","paeiliui","pagal","pakeliui","palaipsniui","palei","pas","pasak","paskos","paskui","paskum","pat","pati","patiems","paties","pats","patys","pat\xe1","pa\xe8iais","pa\xe8iam","pa\xe8iame","pa\xe8iu","pa\xe8iuose","pa\xe8ius","pa\xe8i\xf8","per","pernelyg","pirm","pirma","pirmiau","po","prie","prie\xf0","prie\xf0ais","pro","pusiau","rasi","rodos","sau","savaisiais","savajai","savajam","savajame","savas","savasai","savasis","save","savieji","saviesiems","savimi","savi\xf0kis","savi\xf0k\xeb","savo","savoji","savojo","savojoje","savosiomis","savosioms","savosios","savosiose","savuoju","savuosiuose","savuosius","savyje","sav\xe0ja","sav\xe0j\xe0","sav\xe0j\xe1","sav\xe0sias","sav\xe6s","sav\xf8j\xf8","skersai","skrad\xfeiai","sta\xe8iai","su","sulig","ta","tad","tai","taigi","taip","taipogi","taisiais","tajai","tajam","tajame","tamsta","tarp","tarsi","tartum","tarytum","tas","tasai","tau","tavaisiais","tavajai","tavajam","tavajame","tavas","tavasai","tavasis","tave","tavieji","taviesiems","tavimi","tavi\xf0kis","tavi\xf0k\xeb","tavo","tavoji","tavojo","tavojoje","tavosiomis","tavosioms","tavosios","tavosiose","tavuoju","tavuosiuose","tavuosius","tavyje","tav\xe0ja","tav\xe0j\xe0","tav\xe0j\xe1","tav\xe0sias","tav\xe6s","tav\xf8j\xf8","ta\xe8iau","te","tegu","tegul","tiedvi","tieji","ties","tiesiems","tiesiog","tik","tikriausiai","tiktai","toji","tojo","tojoje","tokia","toks","tol","tolei","toliau","tosiomis","tosioms","tosios","tosiose","tu","tuodu","tuoju","tuosiuose","tuosius","turb\xfbt","t\xe0ja","t\xe0j\xe0","t\xe0j\xe1","t\xe0sias","t\xf8j\xf8","t\xfblas","u\xfe","u\xfetat","u\xfevis","va","vai","viduj","vidury","vien","vienas","vienokia","vienoks","vietoj","vir\xf0","vir\xf0uj","vir\xf0um","vis","vis d\xeblto","visa","visas","visgi","visokia","visoks","vos","v\xebl","v\xeblgi","ypa\xe8","\xe1","\xe1kypai","\xe1stri\xfeai","\xf0alia","\xf0e","\xf0i","\xf0iaisiais","\xf0iajai","\xf0iajam","\xf0iajame","\xf0iapus","\xf0iedvi","\xf0ieji","\xf0iesiems","\xf0ioji","\xf0iojo","\xf0iojoje","\xf0iokia","\xf0ioks","\xf0iosiomis","\xf0iosioms","\xf0iosios","\xf0iosiose","\xf0is","\xf0isai","\xf0it","\xf0ita","\xf0itas","\xf0itiedvi","\xf0itokia","\xf0itoks","\xf0ituodu","\xf0iuodu","\xf0iuoju","\xf0iuosiuose","\xf0iuosius","\xf0i\xe0ja","\xf0i\xe0j\xe0","\xf0i\xe0sias","\xf0i\xf8j\xf8","\xf0tai","\xf0\xe1j\xe1","\xfeemiau"],"lv":["aiz","ap","apakš","apakšpus","ar","arī","augšpus","bet","bez","bija","biji","biju","bijām","bijāt","būs","būsi","būsiet","būsim","būt","būšu","caur","diemžēl","diezin","droši","dēļ","esam","esat","esi","esmu","gan","gar","iekam","iekams","iekām","iekāms","iekš","iekšpus","ik","ir","it","itin","iz","ja","jau","jeb","jebšu","jel","jo","jā","ka","kamēr","kaut","kolīdz","kopš","kā","kļuva","kļuvi","kļuvu","kļuvām","kļuvāt","kļūs","kļūsi","kļūsiet","kļūsim","kļūst","kļūstam","kļūstat","kļūsti","kļūstu","kļūt","kļūšu","labad","lai","lejpus","līdz","līdzko","ne","nebūt","nedz","nekā","nevis","nezin","no","nu","nē","otrpus","pa","par","pat","pie","pirms","pret","priekš","pār","pēc","starp","tad","tak","tapi","taps","tapsi","tapsiet","tapsim","tapt","tapāt","tapšu","taču","te","tiec","tiek","tiekam","tiekat","tieku","tik","tika","tikai","tiki","tikko","tiklab","tiklīdz","tiks","tiksiet","tiksim","tikt","tiku","tikvien","tikām","tikāt","tikšu","tomēr","topat","turpretim","turpretī","tā","tādēļ","tālab","tāpēc","un","uz","vai","var","varat","varēja","varēji","varēju","varējām","varējāt","varēs","varēsi","varēsiet","varēsim","varēt","varēšu","vien","virs","virspus","vis","viņpus","zem","ārpus","šaipus"],"ms":["abdul","abdullah","acara","ada","adalah","ahmad","air","akan","akhbar","akhir","aktiviti","alam","amat","amerika","anak","anggota","antara","antarabangsa","apa","apabila","april","as","asas","asean","asia","asing","atas","atau","australia","awal","awam","bagaimanapun","bagi","bahagian","bahan","baharu","bahawa","baik","bandar","bank","banyak","barangan","baru","baru-baru","bawah","beberapa","bekas","beliau","belum","berada","berakhir","berbanding","berdasarkan","berharap","berikutan","berjaya","berjumlah","berkaitan","berkata","berkenaan","berlaku","bermula","bernama","bernilai","bersama","berubah","besar","bhd","bidang","bilion","bn","boleh","bukan","bulan","bursa","cadangan","china","dagangan","dalam","dan","dana","dapat","dari","daripada","dasar","datang","datuk","demikian","dengan","depan","derivatives","dewan","di","diadakan","dibuka","dicatatkan","dijangka","diniagakan","dis","disember","ditutup","dolar","dr","dua","dunia","ekonomi","eksekutif","eksport","empat","enam","faedah","feb","global","hadapan","hanya","harga","hari","hasil","hingga","hubungan","ia","iaitu","ialah","indeks","india","indonesia","industri","ini","islam","isnin","isu","itu","jabatan","jalan","jan","jawatan","jawatankuasa","jepun","jika","jualan","juga","julai","jumaat","jumlah","jun","juta","kadar","kalangan","kali","kami","kata","katanya","kaunter","kawasan","ke","keadaan","kecil","kedua","kedua-dua","kedudukan","kekal","kementerian","kemudahan","kenaikan","kenyataan","kepada","kepentingan","keputusan","kerajaan","kerana","kereta","kerja","kerjasama","kes","keselamatan","keseluruhan","kesihatan","ketika","ketua","keuntungan","kewangan","khamis","kini","kira-kira","kita","klci","klibor","komposit","kontrak","kos","kuala","kuasa","kukuh","kumpulan","lagi","lain","langkah","laporan","lebih","lepas","lima","lot","luar","lumpur","mac","mahkamah","mahu","majlis","makanan","maklumat","malam","malaysia","mana","manakala","masa","masalah","masih","masing-masing","masyarakat","mata","media","mei","melalui","melihat","memandangkan","memastikan","membantu","membawa","memberi","memberikan","membolehkan","membuat","mempunyai","menambah","menarik","menawarkan","mencapai","mencatatkan","mendapat","mendapatkan","menerima","menerusi","mengadakan","mengambil","mengenai","menggalakkan","menggunakan","mengikut","mengumumkan","mengurangkan","meningkat","meningkatkan","menjadi","menjelang","menokok","menteri","menunjukkan","menurut","menyaksikan","menyediakan","mereka","merosot","merupakan","mesyuarat","minat","minggu","minyak","modal","mohd","mudah","mungkin","naik","najib","nasional","negara","negara-negara","negeri","niaga","nilai","nov","ogos","okt","oleh","operasi","orang","pada","pagi","paling","pameran","papan","para","paras","parlimen","parti","pasaran","pasukan","pegawai","pejabat","pekerja","pelabur","pelaburan","pelancongan","pelanggan","pelbagai","peluang","pembangunan","pemberita","pembinaan","pemimpin","pendapatan","pendidikan","penduduk","penerbangan","pengarah","pengeluaran","pengerusi","pengguna","pengurusan","peniaga","peningkatan","penting","peratus","perdagangan","perdana","peringkat","perjanjian","perkara","perkhidmatan","perladangan","perlu","permintaan","perniagaan","persekutuan","persidangan","pertama","pertubuhan","pertumbuhan","perusahaan","peserta","petang","pihak","pilihan","pinjaman","polis","politik","presiden","prestasi","produk","program","projek","proses","proton","pukul","pula","pusat","rabu","rakan","rakyat","ramai","rantau","raya","rendah","ringgit","rumah","sabah","sahaja","saham","sama","sarawak","satu","sawit","saya","sdn","sebagai","sebahagian","sebanyak","sebarang","sebelum","sebelumnya","sebuah","secara","sedang","segi","sehingga","sejak","sekarang","sektor","sekuriti","selain","selama","selasa","selatan","selepas","seluruh","semakin","semalam","semasa","sementara","semua","semula","sen","sendiri","seorang","sepanjang","seperti","sept","september","serantau","seri","serta","sesi","setiap","setiausaha","sidang","singapura","sini","sistem","sokongan","sri","sudah","sukan","suku","sumber","supaya","susut","syarikat","syed","tahap","tahun","tan","tanah","tanpa","tawaran","teknologi","telah","tempat","tempatan","tempoh","tenaga","tengah","tentang","terbaik","terbang","terbesar","terbuka","terdapat","terhadap","termasuk","tersebut","terus","tetapi","thailand","tiada","tidak","tiga","timbalan","timur","tindakan","tinggi","tun","tunai","turun","turut","umno","unit","untuk","untung","urus","usaha","utama","walaupun","wang","wanita","wilayah","yang"],"mr":["अधिक","अनेक","अशी","असलयाचे","असलेल्या","असा","असून","असे","आज","आणि","आता","आपल्या","आला","आली","आले","आहे","आहेत","एक","एका","कमी","करणयात","करून","का","काम","काय","काही","किवा","की","केला","केली","केले","कोटी","गेल्या","घेऊन","जात","झाला","झाली","झाले","झालेल्या","टा","डॉ","तर","तरी","तसेच","ता","ती","तीन","ते","तो","त्या","त्याचा","त्याची","त्याच्या","त्याना","त्यानी","त्यामुळे","त्री","दिली","दोन","न","नाही","निर्ण्य","पण","पम","परयतन","पाटील","म","मात्र","माहिती","मी","मुबी","म्हणजे","म्हणाले","म्हणून","या","याचा","याची","याच्या","याना","यानी","येणार","येत","येथील","येथे","लाख","व","व्यकत","सर्व","सागित्ले","सुरू","हजार","हा","ही","हे","होणार","होत","होता","होती","होते"],"no":["alle","andre","arbeid","at","av","bare","begge","ble","blei","bli","blir","blitt","bort","bra","bruke","b\xe5de","b\xe5e","da","de","deg","dei","deim","deira","deires","dem","den","denne","der","dere","deres","det","dette","di","din","disse","ditt","du","dykk","dykkar","d\xe5","eg","ein","eit","eitt","eller","elles","en","ene","eneste","enhver","enn","er","et","ett","etter","folk","for","fordi","fors\xfbke","fra","f\xe5","f\xf8r","f\xfbr","f\xfbrst","gjorde","gj\xfbre","god","g\xe5","ha","hadde","han","hans","har","hennar","henne","hennes","her","hj\xe5","ho","hoe","honom","hoss","hossen","hun","hva","hvem","hver","hvilke","hvilken","hvis","hvor","hvordan","hvorfor","i","ikke","ikkje","ingen","ingi","inkje","inn","innen","inni","ja","jeg","kan","kom","korleis","korso","kun","kunne","kva","kvar","kvarhelst","kven","kvi","kvifor","lage","lang","lik","like","makt","man","mange","me","med","medan","meg","meget","mellom","men","mens","mer","mest","mi","min","mine","mitt","mot","mye","mykje","m\xe5","m\xe5te","navn","ned","nei","no","noe","noen","noka","noko","nokon","nokor","nokre","ny","n\xe5","n\xe5r","og","ogs\xe5","om","opp","oss","over","part","punkt","p\xe5","rett","riktig","samme","sant","seg","selv","si","sia","sidan","siden","sin","sine","sist","sitt","sj\xf8l","skal","skulle","slik","slutt","so","som","somme","somt","start","stille","s\xe5","s\xe5nn","tid","til","tilbake","tilstand","um","under","upp","ut","uten","var","vart","varte","ved","verdi","vere","verte","vi","vil","ville","vite","vore","vors","vort","v\xe5r","v\xe6re","v\xe6rt","v\xf6re","v\xf6rt","\xe5"],"fa":["!",",",".",":",";","،","؛","؟","آباد","آره","آری","آمد","آمده","آن","آنان","آنجا","آنطور","آنقدر","آنكه","آنها","آنچه","آنکه","آورد","آورده","آيد","آی","آیا","آیند","اتفاقا","اثرِ","احتراما","احتمالا","اخیر","اری","از","ازجمله","اساسا","است","استفاد","استفاده","اش","اشکارا","اصلا","اصولا","اعلام","اغلب","اكنون","الان","البته","البتّه","ام","اما","امروز","امروزه","امسال","امشب","امور","ان","انجام","اند","انشاالله","انصافا","انطور","انقدر","انها","انچنان","انکه","انگار","او","اول","اولا","اي","ايشان","ايم","اين","اينكه","اکثرا","اکنون","اگر","ای","ایا","اید","ایشان","ایم","این","اینجا","ایند","اینطور","اینقدر","اینها","اینچنین","اینک","اینکه","اینگونه","با","بار","بارة","باره","بارها","باز","بازهم","باش","باشد","باشم","باشند","باشيم","باشی","باشید","باشیم","بالا","بالاخره","بالایِ","بالطبع","بايد","باید","بتوان","بتواند","بتوانی","بتوانیم","بخش","بخشی","بخواه","بخواهد","بخواهم","بخواهند","بخواهی","بخواهید","بخواهیم","بد","بدون","بر","برابر","برابرِ","براحتی","براساس","براستی","براي","برای","برایِ","برخوردار","برخي","برخی","برداري","برعکس","بروز","بزرگ","بزودی","بسا","بسيار","بسياري","بسیار","بسیاری","بطور","بعد","بعدا","بعدها","بعری","بعضا","بعضي","بلافاصله","بلكه","بله","بلکه","بلی","بنابراين","بنابراین","بندي","به","بهتر","بهترين","بود","بودم","بودن","بودند","بوده","بودی","بودید","بودیم","بویژه","بي","بيست","بيش","بيشتر","بيشتري","بين","بکن","بکند","بکنم","بکنند","بکنی","بکنید","بکنیم","بگو","بگوید","بگویم","بگویند","بگویی","بگویید","بگوییم","بگیر","بگیرد","بگیرم","بگیرند","بگیری","بگیرید","بگیریم","بی","بیا","بیاب","بیابد","بیابم","بیابند","بیابی","بیابید","بیابیم","بیاور","بیاورد","بیاورم","بیاورند","بیاوری","بیاورید","بیاوریم","بیاید","بیایم","بیایند","بیایی","بیایید","بیاییم","بیرون","بیرونِ","بیش","بیشتر","بیشتری","بین","ت","تا","تازه","تاكنون","تان","تاکنون","تحت","تر","تر  براساس","ترين","تقریبا","تلویحا","تمام","تماما","تمامي","تنها","تو","تواند","توانست","توانستم","توانستن","توانستند","توانسته","توانستی","توانستیم","توانم","توانند","توانی","توانید","توانیم","توسط","تولِ","تویِ","ثانیا","جا","جاي","جايي","جای","جدا","جديد","جدید","جريان","جریان","جز","جلوگيري","جلویِ","جمعا","جناح","جهت","حاضر","حال","حالا","حتما","حتي","حتی","حداکثر","حدودا","حدودِ","حق","خارجِ","خب","خدمات","خصوصا","خلاصه","خواست","خواستم","خواستن","خواستند","خواسته","خواستی","خواستید","خواستیم","خواهد","خواهم","خواهند","خواهيم","خواهی","خواهید","خواهیم","خوب","خود","خودت","خودتان","خودش","خودشان","خودم","خودمان","خوشبختانه","خويش","خویش","خویشتن","خیاه","خیر","خیلی","داد","دادم","دادن","دادند","داده","دادی","دادید","دادیم","دار","دارد","دارم","دارند","داريم","داری","دارید","داریم","داشت","داشتم","داشتن","داشتند","داشته","داشتی","داشتید","داشتیم","دانست","دانند","دایم","دایما","در","درباره","درمجموع","درون","دریغ","دقیقا","دنبالِ","ده","دهد","دهم","دهند","دهی","دهید","دهیم","دو","دوباره","دوم","ديده","ديروز","ديگر","ديگران","ديگري","دیر","دیروز","دیگر","دیگران","دیگری","را","راحت","راسا","راستی","راه","رسما","رسید","رفت","رفته","رو","روب","روز","روزانه","روزهاي","روي","روی","رویِ","ريزي","زمان","زمانی","زمینه","زود","زياد","زير","زيرا","زیر","زیرِ","سابق","ساخته","سازي","سالانه","سالیانه","سایر","سراسر","سرانجام","سریعا","سریِ","سعي","سمتِ","سوم","سوي","سوی","سویِ","سپس","شان","شايد","شاید","شخصا","شد","شدم","شدن","شدند","شده","شدی","شدید","شدیدا","شدیم","شش","شش  نداشته","شما","شناسي","شود","شوم","شوند","شونده","شوی","شوید","شویم","صرفا","صورت","ضدِّ","ضدِّ","ضمن","طبعا","طبقِ","طبیعتا","طرف","طريق","طریق","طور","طي","طی","ظاهرا","عدم","عقبِ","علّتِ","علیه","عمدا","عمدتا","عمل","عملا","عنوان","عنوانِ","غالبا","غير","غیر","فردا","فعلا","فقط","فكر","فوق","قابل","قبل","قبلا","قدری","قصدِ","قطعا","كرد","كردم","كردن","كردند","كرده","كسي","كل","كمتر","كند","كنم","كنند","كنيد","كنيم","كه","لااقل","لطفا","لطفاً","ما","مان","مانند","مانندِ","مبادا","متاسفانه","متعاقبا","مثل","مثلا","مثلِ","مجانی","مجددا","مجموعا","مختلف","مدام","مدت","مدّتی","مردم","مرسی","مستقیما","مسلما","مطمینا","معمولا","مقابل","ممکن","من","موارد","مورد","موقتا","مي","ميليارد","ميليون","مگر","می","می شود","میان","می‌رسد","می‌رود","می‌شود","می‌کنیم","ناشي","نام","ناگاه","ناگهان","ناگهانی","نبايد","نباید","نبود","نخست","نخستين","نخواهد","نخواهم","نخواهند","نخواهی","نخواهید","نخواهیم","ندارد","ندارم","ندارند","نداری","ندارید","نداریم","نداشت","نداشتم","نداشتند","نداشته","نداشتی","نداشتید","نداشتیم","نزديك","نزدِ","نزدیکِ","نسبتا","نشان","نشده","نظير","نظیر","نكرده","نمايد","نمي","نمی","نمی‌شود","نه","نهایتا","نوع","نوعي","نوعی","نيز","نيست","نگاه","نیز","نیست","ها","هاي","هايي","های","هایی","هبچ","هر","هرچه","هرگز","هزار","هست","هستم","هستند","هستيم","هستی","هستید","هستیم","هفت","هم","همان","همه","همواره","همين","همچنان","همچنين","همچنین","همچون","همیشه","همین","هنوز","هنگام","هنگامِ","هنگامی","هيچ","هیچ","هیچگاه","و","واقعا","واقعی","وجود","وسطِ","وضع","وقتي","وقتی","وقتیکه","ولی","وي","وگو","وی","ویژه","يا","يابد","يك","يكديگر","يكي","ّه","٪","پارسال","پاعینِ","پس","پنج","پيش","پیدا","پیش","پیشاپیش","پیشتر","پیشِ","چرا","چطور","چقدر","چنان","چنانچه","چنانکه","چند","چندین","چنين","چنین","چه","چهار","چو","چون","چيزي","چگونه","چیز","چیزی","چیست","کاش","کامل","کاملا","کتبا","کجا","کجاست","کدام","کرد","کردم","کردن","کردند","کرده","کردی","کردید","کردیم","کس","کسانی","کسی","کل","کلا","کم","کماکان","کمتر","کمتری","کمی","کن","کنار","کنارِ","کند","کنم","کنند","کننده","کنون","کنونی","کنی","کنید","کنیم","که","کو","کَی","کی","گاه","گاهی","گذاري","گذاشته","گذشته","گردد","گرفت","گرفتم","گرفتن","گرفتند","گرفته","گرفتی","گرفتید","گرفتیم","گروهي","گفت","گفتم","گفتن","گفتند","گفته","گفتی","گفتید","گفتیم","گه","گهگاه","گو","گويد","گويند","گویا","گوید","گویم","گویند","گویی","گویید","گوییم","گيرد","گيري","گیرد","گیرم","گیرند","گیری","گیرید","گیریم","ی","یا","یابد","یابم","یابند","یابی","یابید","یابیم","یافت","یافتم","یافتن","یافته","یافتی","یافتید","یافتیم","یعنی","یقینا","یه","یک","یکی","۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],"pl":["a","aby","ach","acz","aczkolwiek","aj","albo","ale","ależ","ani","aż","bardziej","bardzo","bez","bo","bowiem","by","byli","bym","bynajmniej","być","był","była","było","były","będzie","będą","cali","cała","cały","chce","choć","ci","ciebie","cię","co","cokolwiek","coraz","coś","czasami","czasem","czemu","czy","czyli","często","daleko","dla","dlaczego","dlatego","do","dobrze","dokąd","dość","dr","dużo","dwa","dwaj","dwie","dwoje","dzisiaj","dziś","gdy","gdyby","gdyż","gdzie","gdziekolwiek","gdzieś","go","godz","hab","i","ich","ii","iii","ile","im","inna","inne","inny","innych","inż","iv","ix","iż","ja","jak","jakaś","jakby","jaki","jakichś","jakie","jakiś","jakiż","jakkolwiek","jako","jakoś","je","jeden","jedna","jednak","jednakże","jedno","jednym","jedynie","jego","jej","jemu","jest","jestem","jeszcze","jeśli","jeżeli","już","ją","każdy","kiedy","kierunku","kilka","kilku","kimś","kto","ktokolwiek","ktoś","kt\xf3ra","kt\xf3re","kt\xf3rego","kt\xf3rej","kt\xf3ry","kt\xf3rych","kt\xf3rym","kt\xf3rzy","ku","lat","lecz","lub","ma","mają","mam","mamy","mało","mgr","mi","miał","mimo","między","mnie","mną","mogą","moi","moim","moja","moje","może","możliwe","można","mu","musi","my","m\xf3j","na","nad","nam","nami","nas","nasi","nasz","nasza","nasze","naszego","naszych","natomiast","natychmiast","nawet","nic","nich","nie","niech","niego","niej","niemu","nigdy","nim","nimi","nią","niż","no","nowe","np","nr","o","o.o.","obok","od","ok","około","on","ona","one","oni","ono","oraz","oto","owszem","pan","pana","pani","pl","po","pod","podczas","pomimo","ponad","ponieważ","powinien","powinna","powinni","powinno","poza","prawie","prof","przecież","przed","przede","przedtem","przez","przy","raz","razie","roku","r\xf3wnież","sam","sama","się","skąd","sobie","sobą","spos\xf3b","swoje","są","ta","tak","taka","taki","takich","takie","także","tam","te","tego","tej","tel","temu","ten","teraz","też","to","tobie","tobą","toteż","totobą","trzeba","tu","tutaj","twoi","twoim","twoja","twoje","twym","tw\xf3j","ty","tych","tylko","tym","tys","tzw","tę","u","ul","vi","vii","viii","vol","w","wam","wami","was","wasi","wasz","wasza","wasze","we","według","wie","wiele","wielu","więc","więcej","wszyscy","wszystkich","wszystkie","wszystkim","wszystko","wtedy","www","wy","właśnie","wśr\xf3d","xi","xii","xiii","xiv","xv","z","za","zapewne","zawsze","zaś","ze","zeznowu","znowu","zn\xf3w","został","zł","żaden","żadna","żadne","żadnych","że","żeby"],"pt":["a","acerca","adeus","agora","ainda","alem","algmas","algo","algumas","alguns","ali","al\xe9m","ambas","ambos","ano","anos","antes","ao","aonde","aos","apenas","apoio","apontar","apos","ap\xf3s","aquela","aquelas","aquele","aqueles","aqui","aquilo","as","assim","atrav\xe9s","atr\xe1s","at\xe9","a\xed","baixo","bastante","bem","boa","boas","bom","bons","breve","cada","caminho","catorze","cedo","cento","certamente","certeza","cima","cinco","coisa","com","como","comprido","conhecido","conselho","contra","contudo","corrente","cuja","cujas","cujo","cujos","custa","c\xe1","da","daquela","daquelas","daquele","daqueles","dar","das","de","debaixo","dela","delas","dele","deles","demais","dentro","depois","desde","desligado","dessa","dessas","desse","desses","desta","destas","deste","destes","deve","devem","dever\xe1","dez","dezanove","dezasseis","dezassete","dezoito","dia","diante","direita","dispoe","dispoem","diversa","diversas","diversos","diz","dizem","dizer","do","dois","dos","doze","duas","durante","d\xe1","d\xe3o","d\xfavida","e","ela","elas","ele","eles","em","embora","enquanto","entao","entre","ent\xe3o","era","eram","essa","essas","esse","esses","esta","estado","estamos","estar","estar\xe1","estas","estava","estavam","este","esteja","estejam","estejamos","estes","esteve","estive","estivemos","estiver","estivera","estiveram","estiverem","estivermos","estivesse","estivessem","estiveste","estivestes","estiv\xe9ramos","estiv\xe9ssemos","estou","est\xe1","est\xe1s","est\xe1vamos","est\xe3o","eu","exemplo","falta","far\xe1","favor","faz","fazeis","fazem","fazemos","fazer","fazes","fazia","fa\xe7o","fez","fim","final","foi","fomos","for","fora","foram","forem","forma","formos","fosse","fossem","foste","fostes","fui","f\xf4ramos","f\xf4ssemos","geral","grande","grandes","grupo","ha","haja","hajam","hajamos","havemos","havia","hei","hoje","hora","horas","houve","houvemos","houver","houvera","houveram","houverei","houverem","houveremos","houveria","houveriam","houvermos","houver\xe1","houver\xe3o","houver\xedamos","houvesse","houvessem","houv\xe9ramos","houv\xe9ssemos","h\xe1","h\xe3o","iniciar","inicio","ir","ir\xe1","isso","ista","iste","isto","j\xe1","lado","lhe","lhes","ligado","local","logo","longe","lugar","l\xe1","maior","maioria","maiorias","mais","mal","mas","me","mediante","meio","menor","menos","meses","mesma","mesmas","mesmo","mesmos","meu","meus","mil","minha","minhas","momento","muito","muitos","m\xe1ximo","m\xeas","na","nada","nao","naquela","naquelas","naquele","naqueles","nas","nem","nenhuma","nessa","nessas","nesse","nesses","nesta","nestas","neste","nestes","no","noite","nome","nos","nossa","nossas","nosso","nossos","nova","novas","nove","novo","novos","num","numa","numas","nunca","nuns","n\xe3o","n\xedvel","n\xf3s","n\xfamero","o","obra","obrigada","obrigado","oitava","oitavo","oito","onde","ontem","onze","os","ou","outra","outras","outro","outros","para","parece","parte","partir","paucas","pegar","pela","pelas","pelo","pelos","perante","perto","pessoas","pode","podem","poder","poder\xe1","podia","pois","ponto","pontos","por","porque","porqu\xea","portanto","posi\xe7\xe3o","possivelmente","posso","poss\xedvel","pouca","pouco","poucos","povo","primeira","primeiras","primeiro","primeiros","promeiro","propios","proprio","pr\xf3pria","pr\xf3prias","pr\xf3prio","pr\xf3prios","pr\xf3xima","pr\xf3ximas","pr\xf3ximo","pr\xf3ximos","puderam","p\xf4de","p\xf5e","p\xf5em","quais","qual","qualquer","quando","quanto","quarta","quarto","quatro","que","quem","quer","quereis","querem","queremas","queres","quero","quest\xe3o","quieto","quinta","quinto","quinze","qu\xe1is","qu\xea","rela\xe7\xe3o","sabe","sabem","saber","se","segunda","segundo","sei","seis","seja","sejam","sejamos","sem","sempre","sendo","ser","serei","seremos","seria","seriam","ser\xe1","ser\xe3o","ser\xedamos","sete","seu","seus","sexta","sexto","sim","sistema","sob","sobre","sois","somente","somos","sou","sua","suas","s\xe3o","s\xe9tima","s\xe9timo","s\xf3","tal","talvez","tambem","tamb\xe9m","tanta","tantas","tanto","tarde","te","tem","temos","tempo","tendes","tenha","tenham","tenhamos","tenho","tens","tentar","tentaram","tente","tentei","ter","terceira","terceiro","terei","teremos","teria","teriam","ter\xe1","ter\xe3o","ter\xedamos","teu","teus","teve","tinha","tinham","tipo","tive","tivemos","tiver","tivera","tiveram","tiverem","tivermos","tivesse","tivessem","tiveste","tivestes","tiv\xe9ramos","tiv\xe9ssemos","toda","todas","todo","todos","trabalhar","trabalho","treze","tr\xeas","tu","tua","tuas","tudo","t\xe3o","t\xe9m","t\xeam","t\xednhamos","um","uma","umas","uns","usa","usar","vai","vais","valor","veja","vem","vens","ver","verdade","verdadeiro","vez","vezes","viagem","vindo","vinte","voc\xea","voc\xeas","vos","vossa","vossas","vosso","vossos","v\xe1rios","v\xe3o","v\xeam","v\xf3s","zero","\xe0","\xe0s","\xe1rea","\xe9","\xe9ramos","\xe9s","\xfaltimo"],"ro":["a","abia","acea","aceasta","această","aceea","aceeasi","acei","aceia","acel","acela","acelasi","acele","acelea","acest","acesta","aceste","acestea","acestei","acestia","acestui","aceşti","aceştia","acolo","acord","acum","adica","ai","aia","aibă","aici","aiurea","al","ala","alaturi","ale","alea","alt","alta","altceva","altcineva","alte","altfel","alti","altii","altul","am","anume","apoi","ar","are","as","asa","asemenea","asta","astazi","astea","astfel","astăzi","asupra","atare","atat","atata","atatea","atatia","ati","atit","atita","atitea","atitia","atunci","au","avea","avem","aveţi","avut","azi","aş","aşadar","aţi","b","ba","bine","bucur","bună","c","ca","cam","cand","capat","care","careia","carora","caruia","cat","catre","caut","ce","cea","ceea","cei","ceilalti","cel","cele","celor","ceva","chiar","ci","cinci","cind","cine","cineva","cit","cita","cite","citeva","citi","citiva","conform","contra","cu","cui","cum","cumva","cur\xe2nd","cur\xeend","c\xe2nd","c\xe2t","c\xe2te","c\xe2tva","c\xe2ţi","c\xeend","c\xeet","c\xeete","c\xeetva","c\xeeţi","că","căci","cărei","căror","cărui","către","d","da","daca","dacă","dar","dat","datorită","dată","dau","de","deasupra","deci","decit","degraba","deja","deoarece","departe","desi","despre","deşi","din","dinaintea","dintr","dintr-","dintre","doar","doi","doilea","două","drept","dupa","după","dă","e","ea","ei","el","ele","era","eram","este","eu","exact","eşti","f","face","fara","fata","fel","fi","fie","fiecare","fii","fim","fiu","fiţi","foarte","fost","frumos","fără","g","geaba","graţie","h","halbă","i","ia","iar","ieri","ii","il","imi","in","inainte","inapoi","inca","incit","insa","intr","intre","isi","iti","j","k","l","la","le","li","lor","lui","l\xe2ngă","l\xeengă","m","ma","mai","mare","mea","mei","mele","mereu","meu","mi","mie","mine","mod","mult","multa","multe","multi","multă","mulţi","mulţumesc","m\xe2ine","m\xeeine","mă","n","ne","nevoie","ni","nici","niciodata","nicăieri","nimeni","nimeri","nimic","niste","nişte","noastre","noastră","noi","noroc","nostri","nostru","nou","noua","nouă","noştri","nu","numai","o","opt","or","ori","oricare","orice","oricine","oricum","oric\xe2nd","oric\xe2t","oric\xeend","oric\xeet","oriunde","p","pai","parca","patra","patru","patrulea","pe","pentru","peste","pic","pina","plus","poate","pot","prea","prima","primul","prin","printr-","putini","puţin","puţina","puţină","p\xe2nă","p\xeenă","r","rog","s","sa","sa-mi","sa-ti","sai","sale","sau","se","si","sint","sintem","spate","spre","sub","sunt","suntem","sunteţi","sus","sută","s\xeent","s\xeentem","s\xeenteţi","să","săi","său","t","ta","tale","te","ti","timp","tine","toata","toate","toată","tocmai","tot","toti","totul","totusi","totuşi","toţi","trei","treia","treilea","tu","tuturor","tăi","tău","u","ul","ului","un","una","unde","undeva","unei","uneia","unele","uneori","unii","unor","unora","unu","unui","unuia","unul","v","va","vi","voastre","voastră","voi","vom","vor","vostru","vouă","voştri","vreme","vreo","vreun","vă","x","z","zece","zero","zi","zice","\xeei","\xeel","\xeemi","\xeempotriva","\xeen","\xeenainte","\xeenaintea","\xeencotro","\xeenc\xe2t","\xeenc\xeet","\xeentre","\xeentruc\xe2t","\xeentruc\xeet","\xeeţi","ăla","ălea","ăsta","ăstea","ăştia","şapte","şase","şi","ştiu","ţi","ţie"],"ru":["c","а","алло","без","белый","близко","более","больше","большой","будем","будет","будете","будешь","будто","буду","будут","будь","бы","бывает","бывь","был","была","были","было","быть","в","важная","важное","важные","важный","вам","вами","вас","ваш","ваша","ваше","ваши","вверх","вдали","вдруг","ведь","везде","вернуться","весь","вечер","взгляд","взять","вид","видел","видеть","вместе","вне","вниз","внизу","во","вода","война","вокруг","вон","вообще","вопрос","восемнадцатый","восемнадцать","восемь","восьмой","вот","впрочем","времени","время","все","все еще","всегда","всего","всем","всеми","всему","всех","всею","всю","всюду","вся","всё","второй","вы","выйти","г","где","главный","глаз","говорил","говорит","говорить","год","года","году","голова","голос","город","да","давать","давно","даже","далекий","далеко","дальше","даром","дать","два","двадцатый","двадцать","две","двенадцатый","двенадцать","дверь","двух","девятнадцатый","девятнадцать","девятый","девять","действительно","дел","делал","делать","делаю","дело","день","деньги","десятый","десять","для","до","довольно","долго","должен","должно","должный","дом","дорога","друг","другая","другие","других","друго","другое","другой","думать","душа","е","его","ее","ей","ему","если","есть","еще","ещё","ею","её","ж","ждать","же","жена","женщина","жизнь","жить","за","занят","занята","занято","заняты","затем","зато","зачем","здесь","земля","знать","значит","значить","и","иди","идти","из","или","им","имеет","имел","именно","иметь","ими","имя","иногда","их","к","каждая","каждое","каждые","каждый","кажется","казаться","как","какая","какой","кем","книга","когда","кого","ком","комната","кому","конец","конечно","которая","которого","которой","которые","который","которых","кроме","кругом","кто","куда","лежать","лет","ли","лицо","лишь","лучше","любить","люди","м","маленький","мало","мать","машина","между","меля","менее","меньше","меня","место","миллионов","мимо","минута","мир","мира","мне","много","многочисленная","многочисленное","многочисленные","многочисленный","мной","мною","мог","могу","могут","мож","может","может быть","можно","можхо","мои","мой","мор","москва","мочь","моя","моё","мы","на","наверху","над","надо","назад","наиболее","найти","наконец","нам","нами","народ","нас","начала","начать","наш","наша","наше","наши","не","него","недавно","недалеко","нее","ней","некоторый","нельзя","нем","немного","нему","непрерывно","нередко","несколько","нет","нею","неё","ни","нибудь","ниже","низко","никакой","никогда","никто","никуда","ним","ними","них","ничего","ничто","но","новый","нога","ночь","ну","нужно","нужный","нх","о","об","оба","обычно","один","одиннадцатый","одиннадцать","однажды","однако","одного","одной","оказаться","окно","около","он","она","они","оно","опять","особенно","остаться","от","ответить","отец","откуда","отовсюду","отсюда","очень","первый","перед","писать","плечо","по","под","подойди","подумать","пожалуйста","позже","пойти","пока","пол","получить","помнить","понимать","понять","пор","пора","после","последний","посмотреть","посреди","потом","потому","почему","почти","правда","прекрасно","при","про","просто","против","процентов","путь","пятнадцатый","пятнадцать","пятый","пять","работа","работать","раз","разве","рано","раньше","ребенок","решить","россия","рука","русский","ряд","рядом","с","с кем","сам","сама","сами","самим","самими","самих","само","самого","самой","самом","самому","саму","самый","свет","свое","своего","своей","свои","своих","свой","свою","сделать","сеаой","себе","себя","сегодня","седьмой","сейчас","семнадцатый","семнадцать","семь","сидеть","сила","сих","сказал","сказала","сказать","сколько","слишком","слово","случай","смотреть","сначала","снова","со","собой","собою","советский","совсем","спасибо","спросить","сразу","стал","старый","стать","стол","сторона","стоять","страна","суть","считать","т","та","так","такая","также","таки","такие","такое","такой","там","твои","твой","твоя","твоё","те","тебе","тебя","тем","теми","теперь","тех","то","тобой","тобою","товарищ","тогда","того","тоже","только","том","тому","тот","тою","третий","три","тринадцатый","тринадцать","ту","туда","тут","ты","тысяч","у","увидеть","уж","уже","улица","уметь","утро","хороший","хорошо","хотел бы","хотеть","хоть","хотя","хочешь","час","часто","часть","чаще","чего","человек","чем","чему","через","четвертый","четыре","четырнадцатый","четырнадцать","что","чтоб","чтобы","чуть","шестнадцатый","шестнадцать","шестой","шесть","эта","эти","этим","этими","этих","это","этого","этой","этом","этому","этот","эту","я","являюсь"],"sk":["a","aby","aj","ak","akej","akejže","ako","akom","akomže","akou","akouže","akože","ak\xe1","ak\xe1že","ak\xe9","ak\xe9ho","ak\xe9hože","ak\xe9mu","ak\xe9muže","ak\xe9že","ak\xfa","ak\xfaže","ak\xfd","ak\xfdch","ak\xfdchže","ak\xfdm","ak\xfdmi","ak\xfdmiže","ak\xfdmže","ak\xfdže","ale","alebo","ani","asi","avšak","až","ba","bez","bezo","bol","bola","boli","bolo","bude","budem","budeme","budete","budeš","bud\xfa","buď","by","byť","cez","cezo","dnes","do","ešte","ho","hoci","i","iba","ich","im","inej","inom","in\xe1","in\xe9","in\xe9ho","in\xe9mu","in\xed","in\xfa","in\xfd","in\xfdch","in\xfdm","in\xfdmi","ja","je","jeho","jej","jemu","ju","k","kam","kamže","každou","každ\xe1","každ\xe9","každ\xe9ho","každ\xe9mu","každ\xed","každ\xfa","každ\xfd","každ\xfdch","každ\xfdm","každ\xfdmi","kde","kej","kejže","keď","keďže","kie","kieho","kiehože","kiemu","kiemuže","kieže","koho","kom","komu","kou","kouže","kto","ktorej","ktorou","ktor\xe1","ktor\xe9","ktor\xed","ktor\xfa","ktor\xfd","ktor\xfdch","ktor\xfdm","ktor\xfdmi","ku","k\xe1","k\xe1že","k\xe9","k\xe9že","k\xfa","k\xfaže","k\xfd","k\xfdho","k\xfdhože","k\xfdm","k\xfdmu","k\xfdmuže","k\xfdže","lebo","leda","ledaže","len","ma","maj\xfa","mal","mala","mali","mať","medzi","mi","mne","mnou","moja","moje","mojej","mojich","mojim","mojimi","mojou","moju","možno","mu","musia","musieť","mus\xed","mus\xedm","mus\xedme","mus\xedte","mus\xedš","my","m\xe1","m\xe1m","m\xe1me","m\xe1te","m\xe1š","m\xf4cť","m\xf4j","m\xf4jho","m\xf4že","m\xf4žem","m\xf4žeme","m\xf4žete","m\xf4žeš","m\xf4žu","mňa","na","nad","nado","najm\xe4","nami","naša","naše","našej","naši","našich","našim","našimi","našou","ne","nech","neho","nej","nejakej","nejakom","nejakou","nejak\xe1","nejak\xe9","nejak\xe9ho","nejak\xe9mu","nejak\xfa","nejak\xfd","nejak\xfdch","nejak\xfdm","nejak\xfdmi","nemu","než","nich","nie","niektorej","niektorom","niektorou","niektor\xe1","niektor\xe9","niektor\xe9ho","niektor\xe9mu","niektor\xfa","niektor\xfd","niektor\xfdch","niektor\xfdm","niektor\xfdmi","nielen","niečo","nim","nimi","nič","ničoho","ničom","ničomu","nič\xedm","no","n\xe1m","n\xe1s","n\xe1š","n\xe1šho","n\xedm","o","od","odo","on","ona","oni","ono","ony","oň","oňho","po","pod","podo","podľa","pokiaľ","popod","popri","potom","poza","pre","pred","predo","preto","pretože","prečo","pri","pr\xe1ve","s","sa","seba","sebe","sebou","sem","si","sme","so","som","ste","svoj","svoja","svoje","svojho","svojich","svojim","svojimi","svojou","svoju","svoj\xedm","s\xfa","ta","tak","takej","takejto","tak\xe1","tak\xe1to","tak\xe9","tak\xe9ho","tak\xe9hoto","tak\xe9mu","tak\xe9muto","tak\xe9to","tak\xed","tak\xfa","tak\xfato","tak\xfd","tak\xfdto","takže","tam","teba","tebe","tebou","teda","tej","tejto","ten","tento","ti","tie","tieto","tiež","to","toho","tohoto","tohto","tom","tomto","tomu","tomuto","toto","tou","touto","tu","tvoj","tvoja","tvoje","tvojej","tvojho","tvoji","tvojich","tvojim","tvojimi","tvoj\xedm","ty","t\xe1","t\xe1to","t\xed","t\xedto","t\xfa","t\xfato","t\xfdch","t\xfdm","t\xfdmi","t\xfdmto","u","už","v","vami","vaša","vaše","vašej","vaši","vašich","vašim","vaš\xedm","veď","viac","vo","vy","v\xe1m","v\xe1s","v\xe1š","v\xe1šho","však","všetci","všetka","všetko","všetky","všetok","z","za","začo","začože","zo","\xe1no","čej","či","čia","čie","čieho","čiemu","čiu","čo","čoho","čom","čomu","čou","čože","č\xed","č\xedm","č\xedmi","ďalšia","ďalšie","ďalšieho","ďalšiemu","ďalšiu","ďalšom","ďalšou","ďalš\xed","ďalš\xedch","ďalš\xedm","ďalš\xedmi","ňom","ňou","ňu","že"],"sl":["a","ali","april","avgust","b","bi","bil","bila","bile","bili","bilo","biti","blizu","bo","bodo","bojo","bolj","bom","bomo","boste","bova","boš","brez","c","cel","cela","celi","celo","d","da","daleč","dan","danes","datum","december","deset","deseta","deseti","deseto","devet","deveta","deveti","deveto","do","dober","dobra","dobri","dobro","dokler","dol","dolg","dolga","dolgi","dovolj","drug","druga","drugi","drugo","dva","dve","e","eden","en","ena","ene","eni","enkrat","eno","etc.","f","februar","g","g.","ga","ga.","gor","gospa","gospod","h","halo","i","idr.","ii","iii","in","iv","ix","iz","j","januar","jaz","je","ji","jih","jim","jo","julij","junij","jutri","k","kadarkoli","kaj","kajti","kako","kakor","kamor","kamorkoli","kar","karkoli","katerikoli","kdaj","kdo","kdorkoli","ker","ki","kje","kjer","kjerkoli","ko","koder","koderkoli","koga","komu","kot","kratek","kratka","kratke","kratki","l","lahka","lahke","lahki","lahko","le","lep","lepa","lepe","lepi","lepo","leto","m","maj","majhen","majhna","majhni","malce","malo","manj","marec","me","med","medtem","mene","mesec","mi","midva","midve","mnogo","moj","moja","moje","mora","morajo","moram","moramo","morate","moraš","morem","mu","n","na","nad","naj","najina","najino","najmanj","naju","največ","nam","narobe","nas","nato","nazaj","naš","naša","naše","ne","nedavno","nedelja","nek","neka","nekaj","nekatere","nekateri","nekatero","nekdo","neke","nekega","neki","nekje","neko","nekoga","nekoč","ni","nikamor","nikdar","nikjer","nikoli","nič","nje","njega","njegov","njegova","njegovo","njej","njemu","njen","njena","njeno","nji","njih","njihov","njihova","njihovo","njiju","njim","njo","njun","njuna","njuno","no","nocoj","november","npr.","o","ob","oba","obe","oboje","od","odprt","odprta","odprti","okoli","oktober","on","onadva","one","oni","onidve","osem","osma","osmi","osmo","oz.","p","pa","pet","peta","petek","peti","peto","po","pod","pogosto","poleg","poln","polna","polni","polno","ponavadi","ponedeljek","ponovno","potem","povsod","pozdravljen","pozdravljeni","prav","prava","prave","pravi","pravo","prazen","prazna","prazno","prbl.","precej","pred","prej","preko","pri","pribl.","približno","primer","pripravljen","pripravljena","pripravljeni","proti","prva","prvi","prvo","r","ravno","redko","res","reč","s","saj","sam","sama","same","sami","samo","se","sebe","sebi","sedaj","sedem","sedma","sedmi","sedmo","sem","september","seveda","si","sicer","skoraj","skozi","slab","smo","so","sobota","spet","sreda","srednja","srednji","sta","ste","stran","stvar","sva","t","ta","tak","taka","take","taki","tako","takoj","tam","te","tebe","tebi","tega","težak","težka","težki","težko","ti","tista","tiste","tisti","tisto","tj.","tja","to","toda","torek","tretja","tretje","tretji","tri","tu","tudi","tukaj","tvoj","tvoja","tvoje","u","v","vaju","vam","vas","vaš","vaša","vaše","ve","vedno","velik","velika","veliki","veliko","vendar","ves","več","vi","vidva","vii","viii","visok","visoka","visoke","visoki","vsa","vsaj","vsak","vsaka","vsakdo","vsake","vsaki","vsakomur","vse","vsega","vsi","vso","včasih","včeraj","x","z","za","zadaj","zadnji","zakaj","zaprta","zaprti","zaprto","zdaj","zelo","zunaj","č","če","često","četrta","četrtek","četrti","četrto","čez","čigav","š","šest","šesta","šesti","šesto","štiri","ž","že"],"so":["aad","albaabkii","atabo","ay","ayaa","ayee","ayuu","dhan","hadana","in","inuu","isku","jiray","jirtay","ka","kale","kasoo","ku","kuu","lakin","markii","oo","si","soo","uga","ugu","uu","waa","waxa","waxuu"],"st":["a","ba","bane","bona","e","ea","eaba","empa","ena","ha","hae","hape","ho","hore","ka","ke","la","le","li","me","mo","moo","ne","o","oa","re","sa","se","tloha","tsa","tse"],"es":["0","1","2","3","4","5","6","7","8","9","_","a","actualmente","acuerdo","adelante","ademas","adem\xe1s","adrede","afirm\xf3","agreg\xf3","ahi","ahora","ah\xed","al","algo","alguna","algunas","alguno","algunos","alg\xfan","alli","all\xed","alrededor","ambos","ampleamos","antano","anta\xf1o","ante","anterior","antes","apenas","aproximadamente","aquel","aquella","aquellas","aquello","aquellos","aqui","aqu\xe9l","aqu\xe9lla","aqu\xe9llas","aqu\xe9llos","aqu\xed","arriba","arribaabajo","asegur\xf3","asi","as\xed","atras","aun","aunque","ayer","a\xf1adi\xf3","a\xfan","b","bajo","bastante","bien","breve","buen","buena","buenas","bueno","buenos","c","cada","casi","cerca","cierta","ciertas","cierto","ciertos","cinco","claro","coment\xf3","como","con","conmigo","conocer","conseguimos","conseguir","considera","consider\xf3","consigo","consigue","consiguen","consigues","contigo","contra","cosas","creo","cual","cuales","cualquier","cuando","cuanta","cuantas","cuanto","cuantos","cuatro","cuenta","cu\xe1l","cu\xe1les","cu\xe1ndo","cu\xe1nta","cu\xe1ntas","cu\xe1nto","cu\xe1ntos","c\xf3mo","d","da","dado","dan","dar","de","debajo","debe","deben","debido","decir","dej\xf3","del","delante","demasiado","dem\xe1s","dentro","deprisa","desde","despacio","despues","despu\xe9s","detras","detr\xe1s","dia","dias","dice","dicen","dicho","dieron","diferente","diferentes","dijeron","dijo","dio","donde","dos","durante","d\xeda","d\xedas","d\xf3nde","e","ejemplo","el","ella","ellas","ello","ellos","embargo","empleais","emplean","emplear","empleas","empleo","en","encima","encuentra","enfrente","enseguida","entonces","entre","era","erais","eramos","eran","eras","eres","es","esa","esas","ese","eso","esos","esta","estaba","estabais","estaban","estabas","estad","estada","estadas","estado","estados","estais","estamos","estan","estando","estar","estaremos","estar\xe1","estar\xe1n","estar\xe1s","estar\xe9","estar\xe9is","estar\xeda","estar\xedais","estar\xedamos","estar\xedan","estar\xedas","estas","este","estemos","esto","estos","estoy","estuve","estuviera","estuvierais","estuvieran","estuvieras","estuvieron","estuviese","estuvieseis","estuviesen","estuvieses","estuvimos","estuviste","estuvisteis","estuvi\xe9ramos","estuvi\xe9semos","estuvo","est\xe1","est\xe1bamos","est\xe1is","est\xe1n","est\xe1s","est\xe9","est\xe9is","est\xe9n","est\xe9s","ex","excepto","existe","existen","explic\xf3","expres\xf3","f","fin","final","fue","fuera","fuerais","fueran","fueras","fueron","fuese","fueseis","fuesen","fueses","fui","fuimos","fuiste","fuisteis","fu\xe9ramos","fu\xe9semos","g","general","gran","grandes","gueno","h","ha","haber","habia","habida","habidas","habido","habidos","habiendo","habla","hablan","habremos","habr\xe1","habr\xe1n","habr\xe1s","habr\xe9","habr\xe9is","habr\xeda","habr\xedais","habr\xedamos","habr\xedan","habr\xedas","hab\xe9is","hab\xeda","hab\xedais","hab\xedamos","hab\xedan","hab\xedas","hace","haceis","hacemos","hacen","hacer","hacerlo","haces","hacia","haciendo","hago","han","has","hasta","hay","haya","hayamos","hayan","hayas","hay\xe1is","he","hecho","hemos","hicieron","hizo","horas","hoy","hube","hubiera","hubierais","hubieran","hubieras","hubieron","hubiese","hubieseis","hubiesen","hubieses","hubimos","hubiste","hubisteis","hubi\xe9ramos","hubi\xe9semos","hubo","i","igual","incluso","indic\xf3","informo","inform\xf3","intenta","intentais","intentamos","intentan","intentar","intentas","intento","ir","j","junto","k","l","la","lado","largo","las","le","lejos","les","lleg\xf3","lleva","llevar","lo","los","luego","lugar","m","mal","manera","manifest\xf3","mas","mayor","me","mediante","medio","mejor","mencion\xf3","menos","menudo","mi","mia","mias","mientras","mio","mios","mis","misma","mismas","mismo","mismos","modo","momento","mucha","muchas","mucho","muchos","muy","m\xe1s","m\xed","m\xeda","m\xedas","m\xedo","m\xedos","n","nada","nadie","ni","ninguna","ningunas","ninguno","ningunos","ning\xfan","no","nos","nosotras","nosotros","nuestra","nuestras","nuestro","nuestros","nueva","nuevas","nuevo","nuevos","nunca","o","ocho","os","otra","otras","otro","otros","p","pais","para","parece","parte","partir","pasada","pasado","pa\xecs","peor","pero","pesar","poca","pocas","poco","pocos","podeis","podemos","poder","podria","podriais","podriamos","podrian","podrias","podr\xe1","podr\xe1n","podr\xeda","podr\xedan","poner","por","por qu\xe9","porque","posible","primer","primera","primero","primeros","principalmente","pronto","propia","propias","propio","propios","proximo","pr\xf3ximo","pr\xf3ximos","pudo","pueda","puede","pueden","puedo","pues","q","qeu","que","qued\xf3","queremos","quien","quienes","quiere","quiza","quizas","quiz\xe1","quiz\xe1s","qui\xe9n","qui\xe9nes","qu\xe9","r","raras","realizado","realizar","realiz\xf3","repente","respecto","s","sabe","sabeis","sabemos","saben","saber","sabes","sal","salvo","se","sea","seamos","sean","seas","segun","segunda","segundo","seg\xfan","seis","ser","sera","seremos","ser\xe1","ser\xe1n","ser\xe1s","ser\xe9","ser\xe9is","ser\xeda","ser\xedais","ser\xedamos","ser\xedan","ser\xedas","se\xe1is","se\xf1al\xf3","si","sido","siempre","siendo","siete","sigue","siguiente","sin","sino","sobre","sois","sola","solamente","solas","solo","solos","somos","son","soy","soyos","su","supuesto","sus","suya","suyas","suyo","suyos","s\xe9","s\xed","s\xf3lo","t","tal","tambien","tambi\xe9n","tampoco","tan","tanto","tarde","te","temprano","tendremos","tendr\xe1","tendr\xe1n","tendr\xe1s","tendr\xe9","tendr\xe9is","tendr\xeda","tendr\xedais","tendr\xedamos","tendr\xedan","tendr\xedas","tened","teneis","tenemos","tener","tenga","tengamos","tengan","tengas","tengo","teng\xe1is","tenida","tenidas","tenido","tenidos","teniendo","ten\xe9is","ten\xeda","ten\xedais","ten\xedamos","ten\xedan","ten\xedas","tercera","ti","tiempo","tiene","tienen","tienes","toda","todas","todavia","todav\xeda","todo","todos","total","trabaja","trabajais","trabajamos","trabajan","trabajar","trabajas","trabajo","tras","trata","trav\xe9s","tres","tu","tus","tuve","tuviera","tuvierais","tuvieran","tuvieras","tuvieron","tuviese","tuvieseis","tuviesen","tuvieses","tuvimos","tuviste","tuvisteis","tuvi\xe9ramos","tuvi\xe9semos","tuvo","tuya","tuyas","tuyo","tuyos","t\xfa","u","ultimo","un","una","unas","uno","unos","usa","usais","usamos","usan","usar","usas","uso","usted","ustedes","v","va","vais","valor","vamos","van","varias","varios","vaya","veces","ver","verdad","verdadera","verdadero","vez","vosotras","vosotros","voy","vuestra","vuestras","vuestro","vuestros","w","x","y","ya","yo","z","\xe9l","\xe9ramos","\xe9sa","\xe9sas","\xe9se","\xe9sos","\xe9sta","\xe9stas","\xe9ste","\xe9stos","\xfaltima","\xfaltimas","\xfaltimo","\xfaltimos"],"sw":["akasema","alikuwa","alisema","baada","basi","bila","cha","chini","hadi","hapo","hata","hivyo","hiyo","huku","huo","ili","ilikuwa","juu","kama","karibu","katika","kila","kima","kisha","kubwa","kutoka","kuwa","kwa","kwamba","kwenda","kwenye","la","lakini","mara","mdogo","mimi","mkubwa","mmoja","moja","muda","mwenye","na","naye","ndani","ng","ni","nini","nonkungu","pamoja","pia","sana","sasa","sauti","tafadhali","tena","tu","vile","wa","wakati","wake","walikuwa","wao","watu","wengine","wote","ya","yake","yangu","yao","yeye","yule","za","zaidi","zake"],"sv":["aderton","adertonde","adj\xf6","aldrig","alla","allas","allt","alltid","allts\xe5","andra","andras","annan","annat","artonde","artonn","att","av","bakom","bara","beh\xf6va","beh\xf6vas","beh\xf6vde","beh\xf6vt","beslut","beslutat","beslutit","bland","blev","bli","blir","blivit","bort","borta","bra","b\xe4st","b\xe4ttre","b\xe5da","b\xe5das","dag","dagar","dagarna","dagen","de","del","delen","dem","den","denna","deras","dess","dessa","det","detta","dig","din","dina","dit","ditt","dock","dom","du","d\xe4r","d\xe4rf\xf6r","d\xe5","e","efter","eftersom","ej","elfte","eller","elva","emot","en","enkel","enkelt","enkla","enligt","ens","er","era","ers","ert","ett","ettusen","fanns","fem","femte","femtio","femtionde","femton","femtonde","fick","fin","finnas","finns","fjorton","fjortonde","fj\xe4rde","fler","flera","flesta","fram","framf\xf6r","fr\xe5n","fyra","fyrtio","fyrtionde","f\xe5","f\xe5r","f\xe5tt","f\xf6ljande","f\xf6r","f\xf6re","f\xf6rl\xe5t","f\xf6rra","f\xf6rsta","genast","genom","gick","gjorde","gjort","god","goda","godare","godast","gott","g\xe4lla","g\xe4ller","g\xe4llt","g\xe4rna","g\xe5","g\xe5r","g\xe5tt","g\xf6r","g\xf6ra","ha","hade","haft","han","hans","har","heller","hellre","helst","helt","henne","hennes","hit","hon","honom","hundra","hundraen","hundraett","hur","h\xe4r","h\xf6g","h\xf6ger","h\xf6gre","h\xf6gst","i","ibland","icke","idag","igen","ig\xe5r","imorgon","in","inf\xf6r","inga","ingen","ingenting","inget","innan","inne","inom","inte","inuti","ja","jag","jo","ju","just","j\xe4mf\xf6rt","kan","kanske","knappast","kom","komma","kommer","kommit","kr","kunde","kunna","kunnat","kvar","legat","ligga","ligger","lika","likst\xe4lld","likst\xe4llda","lilla","lite","liten","litet","l\xe4nge","l\xe4ngre","l\xe4ngst","l\xe4tt","l\xe4ttare","l\xe4ttast","l\xe5ngsam","l\xe5ngsammare","l\xe5ngsammast","l\xe5ngsamt","l\xe5ngt","l\xe5t","man","med","mej","mellan","men","mer","mera","mest","mig","min","mina","mindre","minst","mitt","mittemot","mot","mycket","m\xe5nga","m\xe5ste","m\xf6jlig","m\xf6jligen","m\xf6jligt","m\xf6jligtvis","ned","nederst","nedersta","nedre","nej","ner","ni","nio","nionde","nittio","nittionde","nitton","nittonde","nog","noll","nr","nu","nummer","n\xe4r","n\xe4sta","n\xe5gon","n\xe5gonting","n\xe5got","n\xe5gra","n\xe5n","n\xe5nting","n\xe5t","n\xf6dv\xe4ndig","n\xf6dv\xe4ndiga","n\xf6dv\xe4ndigt","n\xf6dv\xe4ndigtvis","och","ocks\xe5","ofta","oftast","olika","olikt","om","oss","p\xe5","rakt","redan","r\xe4tt","sa","sade","sagt","samma","sedan","senare","senast","sent","sex","sextio","sextionde","sexton","sextonde","sig","sin","sina","sist","sista","siste","sitt","sitta","sju","sjunde","sjuttio","sjuttionde","sjutton","sjuttonde","sj\xe4lv","sj\xe4tte","ska","skall","skulle","slutligen","sm\xe5","sm\xe5tt","snart","som","stor","stora","stort","st\xf6rre","st\xf6rst","s\xe4ga","s\xe4ger","s\xe4mre","s\xe4mst","s\xe5","s\xe5dan","s\xe5dana","s\xe5dant","ta","tack","tar","tidig","tidigare","tidigast","tidigt","till","tills","tillsammans","tio","tionde","tjugo","tjugoen","tjugoett","tjugonde","tjugotre","tjugotv\xe5","tjungo","tolfte","tolv","tre","tredje","trettio","trettionde","tretton","trettonde","tv\xe5","tv\xe5hundra","under","upp","ur","urs\xe4kt","ut","utan","utanf\xf6r","ute","va","vad","var","vara","varf\xf6r","varifr\xe5n","varit","varje","varken","vars","vars\xe5god","vart","vem","vems","verkligen","vi","vid","vidare","viktig","viktigare","viktigast","viktigt","vilka","vilkas","vilken","vilket","vill","v\xe4l","v\xe4nster","v\xe4nstra","v\xe4rre","v\xe5r","v\xe5ra","v\xe5rt","\xe4n","\xe4nnu","\xe4r","\xe4ven","\xe5t","\xe5tminstone","\xe5tta","\xe5ttio","\xe5ttionde","\xe5ttonde","\xf6ver","\xf6vermorgon","\xf6verst","\xf6vre"],"th":["กล่าว","กว่า","กัน","กับ","การ","ก็","ก่อน","ขณะ","ขอ","ของ","ขึ้น","คง","ครั้ง","ความ","คือ","จะ","จัด","จาก","จึง","ช่วง","ซึ่ง","ดัง","ด้วย","ด้าน","ตั้ง","ตั้งแต่","ตาม","ต่อ","ต่าง","ต่างๆ","ต้อง","ถึง","ถูก","ถ้า","ทั้ง","ทั้งนี้","ทาง","ที่","ที่สุด","ทุก","ทํา","ทําให้","นอกจาก","นัก","นั้น","นี้","น่า","นํา","บาง","ผล","ผ่าน","พบ","พร้อม","มา","มาก","มี","ยัง","รวม","ระหว่าง","รับ","ราย","ร่วม","ลง","วัน","ว่า","สุด","ส่ง","ส่วน","สําหรับ","หนึ่ง","หรือ","หลัง","หลังจาก","หลาย","หาก","อยาก","อยู่","อย่าง","ออก","อะไร","อาจ","อีก","เขา","เข้า","เคย","เฉพาะ","เช่น","เดียว","เดียวกัน","เนื่องจาก","เปิด","เปิดเผย","เป็น","เป็นการ","เพราะ","เพื่อ","เมื่อ","เรา","เริ่ม","เลย","เห็น","เอง","แต่","แบบ","แรก","และ","แล้ว","แห่ง","โดย","ใน","ให้","ได้","ไป","ไม่","ไว้","้ง"],"tl":["akin","aking","ako","alin","am","amin","aming","ang","ano","anumang","apat","at","atin","ating","ay","bababa","bago","bakit","bawat","bilang","dahil","dalawa","dapat","din","dito","doon","gagawin","gayunman","ginagawa","ginawa","ginawang","gumawa","gusto","habang","hanggang","hindi","huwag","iba","ibaba","ibabaw","ibig","ikaw","ilagay","ilalim","ilan","inyong","isa","isang","itaas","ito","iyo","iyon","iyong","ka","kahit","kailangan","kailanman","kami","kanila","kanilang","kanino","kanya","kanyang","kapag","kapwa","karamihan","katiyakan","katulad","kaya","kaysa","ko","kong","kulang","kumuha","kung","laban","lahat","lamang","likod","lima","maaari","maaaring","maging","mahusay","makita","marami","marapat","masyado","may","mayroon","mga","minsan","mismo","mula","muli","na","nabanggit","naging","nagkaroon","nais","nakita","namin","napaka","narito","nasaan","ng","ngayon","ni","nila","nilang","nito","niya","niyang","noon","o","pa","paano","pababa","paggawa","pagitan","pagkakaroon","pagkatapos","palabas","pamamagitan","panahon","pangalawa","para","paraan","pareho","pataas","pero","pumunta","pumupunta","sa","saan","sabi","sabihin","sarili","sila","sino","siya","tatlo","tayo","tulad","tungkol","una","walang"],"tr":["acaba","acep","adamakıllı","adeta","ait","altm\xfd\xfe","altmış","alt\xfd","altı","ama","amma","anca","ancak","arada","art\xfdk","aslında","aynen","ayrıca","az","a\xe7ık\xe7a","a\xe7ık\xe7ası","bana","bari","bazen","baz\xfd","bazı","başkası","baţka","belki","ben","benden","beni","benim","beri","beriki","be\xfe","beş","beţ","bilc\xfcmle","bile","bin","binaen","binaenaleyh","bir","biraz","birazdan","birbiri","birden","birdenbire","biri","birice","birileri","birisi","birka\xe7","birka\xe7ı","birkez","birlikte","bir\xe7ok","bir\xe7oğu","bir\xfeey","bir\xfeeyi","birşey","birşeyi","birţey","bitevi","biteviye","bittabi","biz","bizatihi","bizce","bizcileyin","bizden","bize","bizi","bizim","bizimki","bizzat","boşuna","bu","buna","bunda","bundan","bunlar","bunları","bunların","bunu","bunun","buracıkta","burada","buradan","burası","b\xf6yle","b\xf6ylece","b\xf6ylecene","b\xf6ylelikle","b\xf6ylemesine","b\xf6ylesine","b\xfcsb\xfct\xfcn","b\xfct\xfcn","cuk","c\xfcmlesi","da","daha","dahi","dahil","dahilen","daima","dair","dayanarak","de","defa","dek","demin","demincek","deminden","denli","derakap","derhal","derken","deđil","değil","değin","diye","diđer","diğer","diğeri","doksan","dokuz","dolayı","dolayısıyla","doğru","d\xf6rt","edecek","eden","ederek","edilecek","ediliyor","edilmesi","ediyor","elbet","elbette","elli","emme","en","enikonu","epey","epeyce","epeyi","esasen","esnasında","etmesi","etraflı","etraflıca","etti","ettiği","ettiğini","evleviyetle","evvel","evvela","evvelce","evvelden","evvelemirde","evveli","eđer","eğer","fakat","filanca","gah","gayet","gayetle","gayri","gayrı","gelgelelim","gene","gerek","ger\xe7i","ge\xe7ende","ge\xe7enlerde","gibi","gibilerden","gibisinden","gine","g\xf6re","gırla","hakeza","halbuki","halen","halihazırda","haliyle","handiyse","hangi","hangisi","hani","hari\xe7","hasebiyle","hasılı","hatta","hele","hem","hen\xfcz","hep","hepsi","her","herhangi","herkes","herkesin","hi\xe7","hi\xe7bir","hi\xe7biri","hoş","hulasaten","iken","iki","ila","ile","ilen","ilgili","ilk","illa","illaki","imdi","indinde","inen","insermi","ise","ister","itibaren","itibariyle","itibarıyla","iyi","iyice","iyicene","i\xe7in","iş","işte","iţte","kadar","kaffesi","kah","kala","kan\xfdmca","karşın","katrilyon","kaynak","ka\xe7ı","kelli","kendi","kendilerine","kendini","kendisi","kendisine","kendisini","kere","kez","keza","kezalik","keşke","keţke","ki","kim","kimden","kime","kimi","kimisi","kimse","kimsecik","kimsecikler","k\xfclliyen","k\xfdrk","k\xfdsaca","kırk","kısaca","lakin","leh","l\xfctfen","maada","madem","mademki","mamafih","mebni","međer","meğer","meğerki","meğerse","milyar","milyon","mu","m\xfc","m\xfd","mı","nas\xfdl","nasıl","nasılsa","nazaran","naşi","ne","neden","nedeniyle","nedenle","nedense","nerde","nerden","nerdeyse","nere","nerede","nereden","neredeyse","neresi","nereye","netekim","neye","neyi","neyse","nice","nihayet","nihayetinde","nitekim","niye","ni\xe7in","o","olan","olarak","oldu","olduklarını","olduk\xe7a","olduğu","olduğunu","olmadı","olmadığı","olmak","olması","olmayan","olmaz","olsa","olsun","olup","olur","olursa","oluyor","on","ona","onca","onculayın","onda","ondan","onlar","onlardan","onlari","onlar\xfdn","onları","onların","onu","onun","oracık","oracıkta","orada","oradan","oranca","oranla","oraya","otuz","oysa","oysaki","pek","pekala","peki","pek\xe7e","peyderpey","rağmen","sadece","sahi","sahiden","sana","sanki","sekiz","seksen","sen","senden","seni","senin","siz","sizden","sizi","sizin","sonra","sonradan","sonraları","sonunda","tabii","tam","tamam","tamamen","tamamıyla","tarafından","tek","trilyon","t\xfcm","var","vardı","vasıtasıyla","ve","velev","velhasıl","velhasılıkelam","veya","veyahut","ya","yahut","yakinen","yakında","yakından","yakınlarda","yalnız","yalnızca","yani","yapacak","yapmak","yaptı","yaptıkları","yaptığı","yaptığını","yapılan","yapılması","yapıyor","yedi","yeniden","yenilerde","yerine","yetmi\xfe","yetmiş","yetmiţ","yine","yirmi","yok","yoksa","yoluyla","y\xfcz","y\xfcz\xfcnden","zarfında","zaten","zati","zira","\xe7abuk","\xe7abuk\xe7a","\xe7eşitli","\xe7ok","\xe7okları","\xe7oklarınca","\xe7okluk","\xe7oklukla","\xe7ok\xe7a","\xe7oğu","\xe7oğun","\xe7oğunca","\xe7oğunlukla","\xe7\xfcnk\xfc","\xf6b\xfcr","\xf6b\xfcrk\xfc","\xf6b\xfcr\xfc","\xf6nce","\xf6nceden","\xf6nceleri","\xf6ncelikle","\xf6teki","\xf6tekisi","\xf6yle","\xf6ylece","\xf6ylelikle","\xf6ylemesine","\xf6z","\xfczere","\xfc\xe7","\xfeey","\xfeeyden","\xfeeyi","\xfeeyler","\xfeu","\xfeuna","\xfeunda","\xfeundan","\xfeunu","şayet","şey","şeyden","şeyi","şeyler","şu","şuna","şuncacık","şunda","şundan","şunlar","şunları","şunu","şunun","şura","şuracık","şuracıkta","şurası","ş\xf6yle","ţayet","ţimdi","ţu","ţ\xf6yle"],"uk":["авжеж","адже","але","б","без","був","була","були","було","бути","більш","вам","вас","весь","вздовж","ви","вниз","внизу","вона","вони","воно","все","всередині","всіх","від","він","да","давай","давати","де","дещо","для","до","з","завжди","замість","й","коли","ледве","майже","ми","навколо","навіть","нам","от","отже","отож","поза","про","під","та","так","такий","також","те","ти","тобто","тож","тощо","хоча","це","цей","чи","чого","що","як","який","якої","є","із","інших","їх","її"],"ur":["آئی","آئے","آج","آخر","آخرکبر","آدهی","آًب","آٹھ","آیب","اة","اخبزت","اختتبم","ادھر","ارد","اردگرد","ارکبى","اش","اضتعوبل","اضتعوبلات","اضطرذ","اضکب","اضکی","اضکے","اطراف","اغیب","افراد","الگ","اور","اوًچب","اوًچبئی","اوًچی","اوًچے","اى","اً","اًذر","اًہیں","اٹھبًب","اپٌب","اپٌے","اچھب","اچھی","اچھے","اکثر","اکٹھب","اکٹھی","اکٹھے","اکیلا","اکیلی","اکیلے","اگرچہ","اہن","ایطے","ایک","ب","ت","تبزٍ","تت","تر","ترتیت","تریي","تعذاد","تن","تو","توبم","توہی","توہیں","تٌہب","تک","تھب","تھوڑا","تھوڑی","تھوڑے","تھی","تھے","تیي","ثب","ثبئیں","ثبترتیت","ثبری","ثبرے","ثبعث","ثبلا","ثبلترتیت","ثبہر","ثدبئے","ثرآں","ثراں","ثرش","ثعذ","ثغیر","ثلٌذ","ثلٌذوثبلا","ثلکہ","ثي","ثٌب","ثٌبرہب","ثٌبرہی","ثٌبرہے","ثٌبًب","ثٌذ","ثٌذکرو","ثٌذکرًب","ثٌذی","ثڑا","ثڑوں","ثڑی","ثڑے","ثھر","ثھرا","ثھراہوا","ثھرپور","ثھی","ثہت","ثہتر","ثہتری","ثہتریي","ثیچ","ج","خب","خبرہب","خبرہی","خبرہے","خبهوظ","خبًب","خبًتب","خبًتی","خبًتے","خبًٌب","خت","ختن","خجکہ","خص","خططرذ","خلذی","خو","خواى","خوًہی","خوکہ","خٌبة","خگہ","خگہوں","خگہیں","خیطب","خیطبکہ","در","درخبت","درخہ","درخے","درزقیقت","درضت","دش","دفعہ","دلچطپ","دلچطپی","دلچطپیبں","دو","دور","دوراى","دوضرا","دوضروں","دوضری","دوضرے","دوًوں","دکھبئیں","دکھبتب","دکھبتی","دکھبتے","دکھبو","دکھبًب","دکھبیب","دی","دیب","دیتب","دیتی","دیتے","دیر","دیٌب","دیکھو","دیکھٌب","دیکھی","دیکھیں","دے","ر","راضتوں","راضتہ","راضتے","رریعہ","رریعے","رکي","رکھ","رکھب","رکھتب","رکھتبہوں","رکھتی","رکھتے","رکھی","رکھے","رہب","رہی","رہے","ز","زبصل","زبضر","زبل","زبلات","زبلیہ","زصوں","زصہ","زصے","زقبئق","زقیتیں","زقیقت","زکن","زکویہ","زیبدٍ","صبف","صسیر","صفر","صورت","صورتسبل","صورتوں","صورتیں","ض","ضبت","ضبتھ","ضبدٍ","ضبرا","ضبرے","ضبل","ضبلوں","ضت","ضرور","ضرورت","ضروری","ضلطلہ","ضوچ","ضوچب","ضوچتب","ضوچتی","ضوچتے","ضوچو","ضوچٌب","ضوچی","ضوچیں","ضکب","ضکتب","ضکتی","ضکتے","ضکٌب","ضکی","ضکے","ضیذھب","ضیذھی","ضیذھے","ضیکٌڈ","ضے","طرف","طریق","طریقوں","طریقہ","طریقے","طور","طورپر","ظبہر","ع","عذد","عظین","علاقوں","علاقہ","علاقے","علاوٍ","عووهی","غبیذ","غخص","غذ","غروع","غروعبت","غے","فرد","فی","ق","قجل","قجیلہ","قطن","لئے","لا","لازهی","لو","لوجب","لوجی","لوجے","لوسبت","لوسہ","لوگ","لوگوں","لڑکپي","لگتب","لگتی","لگتے","لگٌب","لگی","لگیں","لگے","لی","لیب","لیٌب","لیں","لے","ه","هتعلق","هختلف","هسترم","هسترهہ","هسطوش","هسیذ","هطئلہ","هطئلے","هطبئل","هطتعول","هطلق","هعلوم","هػتول","هلا","هوکي","هوکٌبت","هوکٌہ","هٌبضت","هڑا","هڑًب","هڑے","هکول","هگر","هہرثبى","هیرا","هیری","هیرے","هیں","و","وار","والے","وٍ","ًئی","ًئے","ًب","ًبپطٌذ","ًبگسیر","ًطجت","ًقطہ","ًو","ًوخواى","ًکبلٌب","ًکتہ","ًہ","ًہیں","ًیب","ًے","ٓ آش","ٹھیک","پبئے","پبش","پبًب","پبًچ","پر","پراًب","پطٌذ","پل","پورا","پوچھب","پوچھتب","پوچھتی","پوچھتے","پوچھو","پوچھوں","پوچھٌب","پوچھیں","پچھلا","پھر","پہلا","پہلی","پہلےضی","پہلےضے","پہلےضےہی","پیع","چبر","چبہب","چبہٌب","چبہے","چلا","چلو","چلیں","چلے","چکب","چکی","چکیں","چکے","چھوٹب","چھوٹوں","چھوٹی","چھوٹے","چھہ","چیسیں","ڈھوًڈا","ڈھوًڈلیب","ڈھوًڈو","ڈھوًڈًب","ڈھوًڈی","ڈھوًڈیں","ک","کئی","کئے","کب","کبفی","کبم","کت","کجھی","کرا","کرتب","کرتبہوں","کرتی","کرتے","کرتےہو","کررہب","کررہی","کررہے","کرو","کرًب","کریں","کرے","کطی","کل","کن","کوئی","کوتر","کورا","کوروں","کورٍ","کورے","کوطي","کوى","کوًطب","کوًطی","کوًطے","کھولا","کھولو","کھولٌب","کھولی","کھولیں","کھولے","کہ","کہب","کہتب","کہتی","کہتے","کہو","کہوں","کہٌب","کہی","کہیں","کہے","کی","کیب","کیطب","کیطرف","کیطے","کیلئے","کیوًکہ","کیوں","کیے","کے","کےثعذ","کےرریعے","گئی","گئے","گب","گرد","گروٍ","گروپ","گروہوں","گٌتی","گی","گیب","گے","ہر","ہن","ہو","ہوئی","ہوئے","ہوا","ہوبرا","ہوبری","ہوبرے","ہوتب","ہوتی","ہوتے","ہورہب","ہورہی","ہورہے","ہوضکتب","ہوضکتی","ہوضکتے","ہوًب","ہوًی","ہوًے","ہوچکب","ہوچکی","ہوچکے","ہوگئی","ہوگئے","ہوگیب","ہوں","ہی","ہیں","ہے","ی","یقیٌی","یہ","یہبں"],"vi":["a ha","a-l\xf4","ai","ai ai","ai nấy","al\xf4","amen","anh","bao giờ","bao l\xe2u","bao nhi\xeau","bao nả","bay biến","biết","biết bao","biết bao nhi\xeau","biết chừng n\xe0o","biết mấy","biết đ\xe2u","biết đ\xe2u chừng","biết đ\xe2u đấy","b\xe0","b\xe0i","b\xe1c","b\xe2y bẩy","b\xe2y chừ","b\xe2y giờ","b\xe2y nhi\xeau","b\xe8n","b\xe9ng","b\xf4ng","bạn","bản","bất chợt","bất cứ","bất gi\xe1c","bất k\xec","bất kể","bất kỳ","bất luận","bất nhược","bất qu\xe1","bất th\xecnh l\xecnh","bất tử","bất đồ","bấy","bấy chầy","bấy chừ","bấy giờ","bấy l\xe2u","bấy l\xe2u nay","bấy nay","bấy nhi\xeau","bập b\xe0 bập b\xf5m","bập b\xf5m","bắt đầu từ","bằng","bằng kh\xf4ng","bằng nấy","bằng ấy","bển","bệt","bị","bỏ mẹ","bỗng","bỗng chốc","bỗng dưng","bỗng kh\xf4ng","bỗng nhi\xean","bỗng đ\xe2u","bộ","bội phần","bớ","bởi","bởi chưng","bởi nhưng","bởi thế","bởi v\xec","bởi vậy","bức","cao","cha","cha chả","chao \xf4i","chiếc","cho","cho n\xean","cho tới","cho tới khi","cho đến","cho đến khi","choa","chu cha","chui cha","chung cục","chung qui","chung quy","chung quy lại","chuyện","ch\xe0nh chạnh","ch\xed chết","ch\xednh","ch\xednh l\xe0","ch\xednh thị","ch\xf9n ch\xf9n","ch\xf9n chũn","ch\xfa","ch\xfa m\xe0y","ch\xfa m\xecnh","ch\xfang m\xecnh","ch\xfang ta","ch\xfang t\xf4i","chăn chắn","chăng","chưa","chầm chập","chậc","chắc","chắc hẳn","chẳng lẽ","chẳng những","chẳng nữa","chẳng phải","chết nỗi","chết thật","chết tiệt","chỉ","chỉn","chốc chốc","chớ","chớ chi","chợt","chủn","chứ","chứ lị","coi bộ","coi m\xf2i","con","cu cậu","cuốn","cuộc","c\xe0ng","c\xe1c","c\xe1i","c\xe2y","c\xf2n","c\xf3","c\xf3 chăng l\xe0","c\xf3 dễ","c\xf3 thể","c\xf3 vẻ","c\xf3c kh\xf4","c\xf4","c\xf4 m\xecnh","c\xf4ng nhi\xean","c\xf9ng","c\xf9ng cực","c\xf9ng nhau","c\xf9ng với","căn","căn cắt","cũng","cũng như","cũng vậy","cũng vậy th\xf4i","cơ","cơ chừng","cơ hồ","cơ m\xe0","cơn","cả","cả thảy","cả thể","cảm ơn","cần","cật lực","cật sức","cậu","cổ lai","của","cứ","cứ việc","cực lực","do","do v\xec","do vậy","do đ\xf3","duy","d\xe0o","d\xec","d\xf9 cho","d\xf9 rằng","dưới","dạ","dần d\xe0","dần dần","dầu sao","dẫu","dẫu sao","dễ sợ","dễ thường","dở chừng","dữ","em","giữa","g\xec","hay","ho\xe0n to\xe0n","hoặc","hơn","hầu hết","họ","hỏi","khi","kh\xe1c","kh\xf4ng","lu\xf4n","l\xe0","l\xe0m","l\xean","l\xfac","lại","lần","lớn","muốn","m\xe0","m\xecnh","mỗi","một","một c\xe1ch","mới","mợ","ngay","ngay cả","ngay khi","ngay l\xfac","ngay lập tức","ngay tức khắc","ngay từ","nghe chừng","nghe đ\xe2u","nghen","nghiễm nhi\xean","nghỉm","ngo\xe0i","ngo\xe0i ra","ngoải","ng\xe0y","ng\xe0y c\xe0ng","ng\xe0y ng\xe0y","ng\xe0y xưa","ng\xe0y xửa","ng\xf4i","ng\xf5 hầu","ngăn ngắt","ngươi","người","ngọn","ngọt","ngộ nhỡ","nh","nhau","nhi\xean hậu","nhiều","nhiệt liệt","nhung nhăng","nh\xe0","nh\xe2n dịp","nh\xe2n tiện","nh\xe9","nh\xf3n nh\xe9n","như","như chơi","như kh\xf4ng","như quả","như thể","như tuồng","như vậy","nhưng","nhưng m\xe0","nhược bằng","nhất","nhất loạt","nhất luật","nhất mực","nhất nhất","nhất quyết","nhất sinh","nhất thiết","nhất t\xe2m","nhất tề","nhất đ\xe1n","nhất định","nhận","nhỉ","nhỡ ra","những","những ai","những như","n\xe0o","n\xe0y","n\xean","n\xean chi","n\xf3","n\xf3c","n\xf3i","năm","nơi","nấy","nếu","nếu như","nền","nọ","nớ","nức nở","nữa","oai o\xe1i","o\xe1i","pho","ph\xe8","ph\xf3c","ph\xf3t","phăn phắt","phương chi","phải","phải chi","phải chăng","phắt","phỉ phui","phỏng","phỏng như","phốc","phụt","phứt","qua","qua qu\xedt","qua qu\xfdt","quyết","quyết nhi\xean","quyển","qu\xe1","qu\xe1 chừng","qu\xe1 lắm","qu\xe1 s\xe1","qu\xe1 thể","qu\xe1 trời","qu\xe1 x\xe1","qu\xe1 đỗi","qu\xe1 độ","qu\xe1 ư","qu\xfd hồ","quả","quả l\xe0","quả tang","quả thật","quả t\xecnh","quả vậy","quả đ\xfang","ra","ra phết","ra sao","ra tr\xf2","ren r\xe9n","riu r\xedu","ri\xeang","riệt","r\xe0y","r\xe1o","r\xe1o trọi","r\xe9n","r\xedch","r\xf3n r\xe9n","r\xfat cục","răng","rất","rằng","rằng l\xe0","rốt cuộc","rốt cục","rồi","rứa","sa sả","sao","sau","sau ch\xf3t","sau cuối","sau c\xf9ng","sau đ\xf3","so","song le","su\xfdt","s\xec","sạch","sất","sắp","sẽ","số","số l\xe0","sốt sột","sở dĩ","sự","tanh","tha hồ","than \xf4i","thanh","theo","thi thoảng","thoạt","thoạt nhi\xean","thoắt","thuần","th\xe0","th\xe0 l\xe0","th\xe0 rằng","th\xe0nh ra","th\xe0nh thử","th\xe1i qu\xe1","th\xe1ng","th\xec","th\xec th\xf4i","th\xecnh l\xecnh","th\xedm","th\xf4i","th\xfang thắng","thương \xf4i","thường","thảo h\xe8n","thảo n\xe0o","thấy","thẩy","thậm","thậm ch\xed","thật lực","thật ra","thật vậy","thế","thế l\xe0","thế m\xe0","thế n\xe0o","thế n\xean","thế ra","thế th\xec","thế \xe0","thếch","thỉnh thoảng","thỏm","thốc","thốc th\xe1o","thốt","thốt nhi\xean","thộc","thời gian","thục mạng","thửa","thực ra","thực sự","thực vậy","tiếp theo","tiếp đ\xf3","tiện thể","to\xe0","to\xe9 kh\xf3i","toẹt","trong","tr\xean","trước","trước kia","trước nay","trước ti\xean","trước đ\xe2y","trước đ\xf3","trếu tr\xe1o","trển","trệt","trệu trạo","trỏng","trời đất ơi","trừ phi","tuy","tuy nhi\xean","tuy rằng","tuy thế","tuy vậy","tuyệt nhi\xean","tuần tự","tuốt luốt","tuốt tuồn tuột","tuốt tuột","t\xe0 t\xe0","t\xeanh","t\xedt m\xf9","t\xf2 te","t\xf4i","t\xf4ng tốc","t\xf9 t\xec","tăm tắp","tại","tại v\xec","tấm","tấn","tất cả","tất thảy","tất tần tật","tất tật","tắp","tắp lự","tọt","tỏ ra","tỏ vẻ","tốc tả","tối ư","tột","tớ","tới","tức th\xec","tức tốc","từ","từng","tự v\xec","tựu trung","veo","veo veo","việc","vung thi\xean địa","vung t\xe0n t\xe1n","vung t\xe1n t\xe0n","v\xe0","v\xe0o","v\xe2ng","v\xe8o","v\xec","v\xec chưng","v\xec thế","v\xec vậy","v\xed bằng","v\xed d\xf9","v\xed phỏng","v\xed thử","v\xf4 h\xecnh trung","v\xf4 kể","v\xf4 luận","v\xf4 v\xe0n","văng t\xea","vạn nhất","vả chăng","vả lại","vẫn","vậy","vậy l\xe0","vậy th\xec","về","vị tất","vốn dĩ","với","với lại","vở","vụt","vừa","vừa mới","xa xả","xiết bao","xon x\xf3n","xo\xe0nh xoạch","xo\xe9t","xoẳn","xoẹt","xuất k\xec bất \xfd","xuất kỳ bất \xfd","xuể","xuống","xăm x\xfai","xăm xăm","xăm xắm","xềnh xệch","xệp","\xe0","\xe0 ơi","\xe0o","\xe1","\xe1 \xe0","\xe1i","\xe1i ch\xe0","\xe1i d\xe0","\xe1ng","\xe2u l\xe0","\xf4 hay","\xf4 h\xf4","\xf4 k\xea","\xf4 k\xeca","\xf4i chao","\xf4i th\xf4i","\xf4ng","\xfai","\xfai ch\xe0","\xfai d\xe0o","\xfd","\xfd chừng","\xfd da","đang","đi","điều","đ\xe0nh đạch","đ\xe1ng l\xed","đ\xe1ng l\xfd","đ\xe1ng lẽ","đ\xe1nh đ\xf9ng","đ\xe1o để","đ\xe2y","đ\xe3","đ\xf3","được","đại loại","đại nh\xe2n","đại ph\xe0m","đại để","đến","đến nỗi","đều","để","ơ","ơ hay","ơ k\xeca","ơi","ư","ạ","ạ ơi","ấy","ầu ơ","ắt","ắt hẳn","ắt l\xe0","ối d\xe0o","ối giời","ối giời ơi","ồ","ổng","ớ","ờ","ở","ở tr\xean","ủa","ứ hự","ứ ừ","ừ","ử"],"yo":["a","an","b\xe1","b\xed","bẹ̀rẹ̀","f\xfan","fẹ́","gbogbo","in\xfa","j\xf9","jẹ","jẹ́","kan","k\xec","k\xed","k\xf2","l\xe1ti","l\xe8","lọ","mi","mo","m\xe1a","mọ̀","ni","n\xe1\xe0","n\xed","n\xedgb\xe0","n\xedtor\xed","nǹkan","o","pad\xe0","p\xe9","p\xfapọ̀","pẹ̀l\xfa","rẹ̀","s\xec","s\xed","s\xedn\xfa","ṣ","ti","t\xed","w\xe0","w\xe1","wọn","wọ́n","y\xec\xed","\xe0ti","\xe0wọn","\xe9","\xed","\xf2un","\xf3","ń","ńl\xe1","ṣe","ṣ\xe9","ṣ\xf9gbọ́n","ẹmọ́","ọjọ́","ọ̀pọ̀lọpọ̀"],"zu":["futhi","kahle","kakhulu","kanye","khona","kodwa","kungani","kusho","la","lakhe","lapho","mina","ngesikhathi","nje","phansi","phezulu","u","ukuba","ukuthi","ukuze","uma","wahamba","wakhe","wami","wase","wathi","yakhe","zakhe","zonke"]}');

});

parcelRequire.register("7ZFLE", function(module, exports) {
/* jshint maxcomplexity: 100 */ (function(window, undefined) {
    "use strict";
    var normalizeForSearch = function(s) {
        function filter(c) {
            switch(c){
                case "\xe6":
                case "\xe4":
                    return "ae";
                case "\xe5":
                    return "aa";
                case "\xe1":
                case "\xe0":
                case "\xe3":
                case "\xe2":
                    return "a";
                case "\xe7":
                case "č":
                    return "c";
                case "\xe9":
                case "\xea":
                case "\xe8":
                case "\xeb":
                case "ē":
                    return "e";
                case "\xee":
                case "\xef":
                case "\xed":
                    return "i";
                case "œ":
                case "\xf6":
                    return "oe";
                case "\xf3":
                case "\xf5":
                case "\xf4":
                    return "o";
                case "ś":
                case "š":
                    return "s";
                case "\xfc":
                    return "ue";
                case "\xf9":
                case "\xfa":
                case "ŭ":
                    return "u";
                case "\xdf":
                    return "ss";
                case "ё":
                    return "е";
                default:
                    return c;
            }
        }
        var normalized = "", i, l;
        s = s.toLowerCase();
        for(i = 0, l = s.length; i < l; i = i + 1)normalized = normalized + filter(s.charAt(i));
        return normalized;
    };
    if (module.exports) module.exports = normalizeForSearch;
    else window.normalizeForSearch = normalizeForSearch;
})(module.exports);

});

parcelRequire.register("b3s9C", function(module, exports) {
(function() {
    /** Used as a safe reference for `undefined` in pre-ES5 environments. */ var undefined;
    /** Used as the semantic version number. */ var VERSION = "4.17.21";
    /** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
    /** Error message constants. */ var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    /** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
    /** Used as the maximum memoize cache size. */ var MAX_MEMOIZE_SIZE = 500;
    /** Used as the internal argument placeholder. */ var PLACEHOLDER = "__lodash_placeholder__";
    /** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    /** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    /** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    /** Used as default options for `_.truncate`. */ var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    /** Used to detect hot functions by number of calls within a span of milliseconds. */ var HOT_COUNT = 800, HOT_SPAN = 16;
    /** Used to indicate the type of lazy iteratees. */ var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    /** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
    /** Used as references for the maximum length and index of an array. */ var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    /** Used to associate wrap methods with their bit flags. */ var wrapFlags = [
        [
            "ary",
            WRAP_ARY_FLAG
        ],
        [
            "bind",
            WRAP_BIND_FLAG
        ],
        [
            "bindKey",
            WRAP_BIND_KEY_FLAG
        ],
        [
            "curry",
            WRAP_CURRY_FLAG
        ],
        [
            "curryRight",
            WRAP_CURRY_RIGHT_FLAG
        ],
        [
            "flip",
            WRAP_FLIP_FLAG
        ],
        [
            "partial",
            WRAP_PARTIAL_FLAG
        ],
        [
            "partialRight",
            WRAP_PARTIAL_RIGHT_FLAG
        ],
        [
            "rearg",
            WRAP_REARG_FLAG
        ]
    ];
    /** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    /** Used to match empty string literals in compiled template source. */ var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    /** Used to match HTML entities and HTML characters. */ var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    /** Used to match template delimiters. */ var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    /** Used to match property names within property paths. */ var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    /** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
    /** Used to match a single whitespace character. */ var reWhitespace = /\s/;
    /** Used to match wrap detail comments. */ var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    /** Used to match words composed of alphanumeric characters. */ var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    /**
   * Used to validate the `validate` option in `_.template` variable.
   *
   * Forbids characters which could potentially change the meaning of the function argument definition:
   * - "()," (modification of function parameters)
   * - "=" (default value)
   * - "[]{}" (destructuring of function parameters)
   * - "/" (beginning of a comment)
   * - whitespace
   */ var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    /** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
    /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */ var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    /** Used to match `RegExp` flags from their coerced string values. */ var reFlags = /\w*$/;
    /** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    /** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
    /** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
    /** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
    /** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
    /** Used to match Latin Unicode letters (excluding mathematical operators). */ var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    /** Used to ensure capturing order of template delimiters. */ var reNoMatch = /($^)/;
    /** Used to match unescaped characters in compiled string literals. */ var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    /** Used to compose unicode character classes. */ var rsAstralRange = "\ud800-\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    /** Used to compose unicode capture groups. */ var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\ud83c[\udffb-\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\ud83c[\udde6-\uddff]){2}", rsSurrPair = "[\ud800-\udbff][\udc00-\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    /** Used to compose unicode regexes. */ var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [
        rsNonAstral,
        rsRegional,
        rsSurrPair
    ].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [
        rsDingbat,
        rsRegional,
        rsSurrPair
    ].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [
        rsNonAstral + rsCombo + "?",
        rsCombo,
        rsRegional,
        rsSurrPair,
        rsAstral
    ].join("|") + ")";
    /** Used to match apostrophes. */ var reApos = RegExp(rsApos, "g");
    /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */ var reComboMark = RegExp(rsCombo, "g");
    /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    /** Used to match complex or compound words. */ var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [
            rsBreak,
            rsUpper,
            "$"
        ].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [
            rsBreak,
            rsUpper + rsMiscLower,
            "$"
        ].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
    ].join("|"), "g");
    /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    /** Used to detect strings that need a more robust regexp to match words. */ var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    /** Used to assign default `context` object properties. */ var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
    ];
    /** Used to make template sourceURLs easier to identify. */ var templateCounter = -1;
    /** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    /** Used to identify `toStringTag` values supported by `_.clone`. */ var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    /** Used to map Latin Unicode letters to basic Latin letters. */ var deburredLetters = {
        // Latin-1 Supplement block.
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\xc3": "A",
        "\xc4": "A",
        "\xc5": "A",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\xe3": "a",
        "\xe4": "a",
        "\xe5": "a",
        "\xc7": "C",
        "\xe7": "c",
        "\xd0": "D",
        "\xf0": "d",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\xcb": "E",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\xeb": "e",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\xcf": "I",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\xef": "i",
        "\xd1": "N",
        "\xf1": "n",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\xd5": "O",
        "\xd6": "O",
        "\xd8": "O",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\xf5": "o",
        "\xf6": "o",
        "\xf8": "o",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\xdc": "U",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\xfc": "u",
        "\xdd": "Y",
        "\xfd": "y",
        "\xff": "y",
        "\xc6": "Ae",
        "\xe6": "ae",
        "\xde": "Th",
        "\xfe": "th",
        "\xdf": "ss",
        // Latin Extended-A block.
        "Ā": "A",
        "Ă": "A",
        "Ą": "A",
        "ā": "a",
        "ă": "a",
        "ą": "a",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "Ď": "D",
        "Đ": "D",
        "ď": "d",
        "đ": "d",
        "Ē": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ę": "E",
        "Ě": "E",
        "ē": "e",
        "ĕ": "e",
        "ė": "e",
        "ę": "e",
        "ě": "e",
        "Ĝ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ģ": "G",
        "ĝ": "g",
        "ğ": "g",
        "ġ": "g",
        "ģ": "g",
        "Ĥ": "H",
        "Ħ": "H",
        "ĥ": "h",
        "ħ": "h",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "Į": "I",
        "İ": "I",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "į": "i",
        "ı": "i",
        "Ĵ": "J",
        "ĵ": "j",
        "Ķ": "K",
        "ķ": "k",
        "ĸ": "k",
        "Ĺ": "L",
        "Ļ": "L",
        "Ľ": "L",
        "Ŀ": "L",
        "Ł": "L",
        "ĺ": "l",
        "ļ": "l",
        "ľ": "l",
        "ŀ": "l",
        "ł": "l",
        "Ń": "N",
        "Ņ": "N",
        "Ň": "N",
        "Ŋ": "N",
        "ń": "n",
        "ņ": "n",
        "ň": "n",
        "ŋ": "n",
        "Ō": "O",
        "Ŏ": "O",
        "Ő": "O",
        "ō": "o",
        "ŏ": "o",
        "ő": "o",
        "Ŕ": "R",
        "Ŗ": "R",
        "Ř": "R",
        "ŕ": "r",
        "ŗ": "r",
        "ř": "r",
        "Ś": "S",
        "Ŝ": "S",
        "Ş": "S",
        "Š": "S",
        "ś": "s",
        "ŝ": "s",
        "ş": "s",
        "š": "s",
        "Ţ": "T",
        "Ť": "T",
        "Ŧ": "T",
        "ţ": "t",
        "ť": "t",
        "ŧ": "t",
        "Ũ": "U",
        "Ū": "U",
        "Ŭ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ų": "U",
        "ũ": "u",
        "ū": "u",
        "ŭ": "u",
        "ů": "u",
        "ű": "u",
        "ų": "u",
        "Ŵ": "W",
        "ŵ": "w",
        "Ŷ": "Y",
        "ŷ": "y",
        "Ÿ": "Y",
        "Ź": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "ź": "z",
        "ż": "z",
        "ž": "z",
        "Ĳ": "IJ",
        "ĳ": "ij",
        "Œ": "Oe",
        "œ": "oe",
        "ŉ": "'n",
        "ſ": "s"
    };
    /** Used to map characters to HTML entities. */ var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    };
    /** Used to map HTML entities to characters. */ var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
    };
    /** Used to escape characters for inclusion in compiled string literals. */ var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    /** Built-in method references without a dependency on `root`. */ var freeParseFloat = parseFloat, freeParseInt = parseInt;
    /** Detect free variable `global` from Node.js. */ var freeGlobal = typeof $parcel$global == "object" && $parcel$global && $parcel$global.Object === Object && $parcel$global;
    /** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    /** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
    /** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
    /** Used to access faster Node.js helpers. */ var nodeUtil = function() {
        try {
            // Use `util.types` for Node.js 10+.
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) return types;
            // Legacy `process.binding('util')` for Node.js < 10.
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {}
    }();
    /* Node.js helper references. */ var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    /*--------------------------------------------------------------------------*/ /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */ function apply(func, thisArg, args) {
        switch(args.length){
            case 0:
                return func.call(thisArg);
            case 1:
                return func.call(thisArg, args[0]);
            case 2:
                return func.call(thisArg, args[0], args[1]);
            case 3:
                return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
    }
    /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */ function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while(++index < length){
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
    }
    /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */ function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while(++index < length){
            if (iteratee(array[index], index, array) === false) break;
        }
        return array;
    }
    /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */ function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while(length--){
            if (iteratee(array[length], length, array) === false) break;
        }
        return array;
    }
    /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */ function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while(++index < length){
            if (!predicate(array[index], index, array)) return false;
        }
        return true;
    }
    /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */ function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while(++index < length){
            var value = array[index];
            if (predicate(value, index, array)) result[resIndex++] = value;
        }
        return result;
    }
    /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */ function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
    }
    /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */ function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while(++index < length){
            if (comparator(value, array[index])) return true;
        }
        return false;
    }
    /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */ function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while(++index < length)result[index] = iteratee(array[index], index, array);
        return result;
    }
    /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */ function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while(++index < length)array[offset + index] = values[index];
        return array;
    }
    /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */ function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) accumulator = array[++index];
        while(++index < length)accumulator = iteratee(accumulator, array[index], index, array);
        return accumulator;
    }
    /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */ function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) accumulator = array[--length];
        while(length--)accumulator = iteratee(accumulator, array[length], length, array);
        return accumulator;
    }
    /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */ function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while(++index < length){
            if (predicate(array[index], index, array)) return true;
        }
        return false;
    }
    /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */ var asciiSize = baseProperty("length");
    /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */ function asciiToArray(string) {
        return string.split("");
    }
    /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */ function asciiWords(string) {
        return string.match(reAsciiWord) || [];
    }
    /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */ function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection) {
            if (predicate(value, key, collection)) {
                result = key;
                return false;
            }
        });
        return result;
    }
    /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */ function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while(fromRight ? index-- : ++index < length){
            if (predicate(array[index], index, array)) return index;
        }
        return -1;
    }
    /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */ function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */ function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while(++index < length){
            if (comparator(array[index], value)) return index;
        }
        return -1;
    }
    /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */ function baseIsNaN(value) {
        return value !== value;
    }
    /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */ function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
    }
    /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */ function baseProperty(key) {
        return function(object) {
            return object == null ? undefined : object[key];
        };
    }
    /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */ function basePropertyOf(object) {
        return function(key) {
            return object == null ? undefined : object[key];
        };
    }
    /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */ function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
    }
    /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */ function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while(length--)array[length] = array[length].value;
        return array;
    }
    /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */ function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while(++index < length){
            var current = iteratee(array[index]);
            if (current !== undefined) result = result === undefined ? current : result + current;
        }
        return result;
    }
    /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */ function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while(++index < n)result[index] = iteratee(index);
        return result;
    }
    /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */ function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
            return [
                key,
                object[key]
            ];
        });
    }
    /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */ function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */ function baseUnary(func) {
        return function(value) {
            return func(value);
        };
    }
    /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */ function baseValues(object, props) {
        return arrayMap(props, function(key) {
            return object[key];
        });
    }
    /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */ function cacheHas(cache, key) {
        return cache.has(key);
    }
    /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */ function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while(++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1);
        return index;
    }
    /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */ function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while(index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1);
        return index;
    }
    /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */ function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while(length--)if (array[length] === placeholder) ++result;
        return result;
    }
    /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */ var deburrLetter = basePropertyOf(deburredLetters);
    /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */ var escapeHtmlChar = basePropertyOf(htmlEscapes);
    /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */ function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
    }
    /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */ function getValue(object, key) {
        return object == null ? undefined : object[key];
    }
    /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */ function hasUnicode(string) {
        return reHasUnicode.test(string);
    }
    /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */ function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
    }
    /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */ function iteratorToArray(iterator) {
        var data, result = [];
        while(!(data = iterator.next()).done)result.push(data.value);
        return result;
    }
    /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */ function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
            result[++index] = [
                key,
                value
            ];
        });
        return result;
    }
    /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */ function overArg(func, transform) {
        return function(arg) {
            return func(transform(arg));
        };
    }
    /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */ function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while(++index < length){
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
                array[index] = PLACEHOLDER;
                result[resIndex++] = index;
            }
        }
        return result;
    }
    /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */ function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
            result[++index] = value;
        });
        return result;
    }
    /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */ function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
            result[++index] = [
                value,
                value
            ];
        });
        return result;
    }
    /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */ function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while(++index < length){
            if (array[index] === value) return index;
        }
        return -1;
    }
    /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */ function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while(index--){
            if (array[index] === value) return index;
        }
        return index;
    }
    /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */ function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */ function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */ function trimmedEndIndex(string) {
        var index = string.length;
        while(index-- && reWhitespace.test(string.charAt(index)));
        return index;
    }
    /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */ var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */ function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while(reUnicode.test(string))++result;
        return result;
    }
    /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */ function unicodeToArray(string) {
        return string.match(reUnicode) || [];
    }
    /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */ function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
    }
    /*--------------------------------------------------------------------------*/ /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */ var runInContext = function runInContext(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        /** Built-in constructor references. */ var Array1 = context.Array, Date = context.Date, Error = context.Error, Function1 = context.Function, Math = context.Math, Object1 = context.Object, RegExp1 = context.RegExp, String = context.String, TypeError = context.TypeError;
        /** Used for built-in method references. */ var arrayProto = Array1.prototype, funcProto = Function1.prototype, objectProto = Object1.prototype;
        /** Used to detect overreaching core-js shims. */ var coreJsData = context["__core-js_shared__"];
        /** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
        /** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
        /** Used to generate unique IDs. */ var idCounter = 0;
        /** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
        }();
        /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */ var nativeObjectToString = objectProto.toString;
        /** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object1);
        /** Used to restore the original `_` reference in `_.noConflict`. */ var oldDash = root._;
        /** Used to detect if a method is native. */ var reIsNative = RegExp1("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        /** Built-in value references. */ var Buffer = moduleExports ? context.Buffer : undefined, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined, getPrototype = overArg(Object1.getPrototypeOf, Object1), objectCreate = Object1.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined, symIterator = Symbol ? Symbol.iterator : undefined, symToStringTag = Symbol ? Symbol.toStringTag : undefined;
        var defineProperty = function() {
            try {
                var func = getNative(Object1, "defineProperty");
                func({}, "", {});
                return func;
            } catch (e) {}
        }();
        /** Mocked built-ins. */ var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        /* Built-in method references for those with the same name as other `lodash` methods. */ var nativeCeil = Math.ceil, nativeFloor = Math.floor, nativeGetSymbols = Object1.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object1.keys, Object1), nativeMax = Math.max, nativeMin = Math.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math.random, nativeReverse = arrayProto.reverse;
        /* Built-in method references that are verified to be native. */ var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object1, "create");
        /** Used to store function metadata. */ var metaMap = WeakMap && new WeakMap;
        /** Used to lookup unminified function names. */ var realNames = {};
        /** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
        /** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
        /*------------------------------------------------------------------------*/ /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */ function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
                if (value instanceof LodashWrapper) return value;
                if (hasOwnProperty.call(value, "__wrapped__")) return wrapperClone(value);
            }
            return new LodashWrapper(value);
        }
        /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */ var baseCreate = function() {
            function object() {}
            return function(proto) {
                if (!isObject(proto)) return {};
                if (objectCreate) return objectCreate(proto);
                object.prototype = proto;
                var result = new object;
                object.prototype = undefined;
                return result;
            };
        }();
        /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */ function baseLodash() {
        // No operation performed.
        }
        /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */ function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined;
        }
        /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */ lodash.templateSettings = {
            /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */ "escape": reEscape,
            /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */ "evaluate": reEvaluate,
            /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */ "interpolate": reInterpolate,
            /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */ "variable": "",
            /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */ "imports": {
                /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */ "_": lodash
            }
        };
        // Ensure wrappers are instances of `baseLodash`.
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        /*------------------------------------------------------------------------*/ /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */ function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
        }
        /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */ function lazyClone() {
            var result = new LazyWrapper(this.__wrapped__);
            result.__actions__ = copyArray(this.__actions__);
            result.__dir__ = this.__dir__;
            result.__filtered__ = this.__filtered__;
            result.__iteratees__ = copyArray(this.__iteratees__);
            result.__takeCount__ = this.__takeCount__;
            result.__views__ = copyArray(this.__views__);
            return result;
        }
        /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */ function lazyReverse() {
            if (this.__filtered__) {
                var result = new LazyWrapper(this);
                result.__dir__ = -1;
                result.__filtered__ = true;
            } else {
                result = this.clone();
                result.__dir__ *= -1;
            }
            return result;
        }
        /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */ function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) return baseWrapperValue(array, this.__actions__);
            var result = [];
            outer: while(length-- && resIndex < takeCount){
                index += dir;
                var iterIndex = -1, value = array[index];
                while(++iterIndex < iterLength){
                    var data = iteratees[iterIndex], iteratee = data.iteratee, type = data.type, computed = iteratee(value);
                    if (type == LAZY_MAP_FLAG) value = computed;
                    else if (!computed) {
                        if (type == LAZY_FILTER_FLAG) continue outer;
                        else break outer;
                    }
                }
                result[resIndex++] = value;
            }
            return result;
        }
        // Ensure `LazyWrapper` is an instance of `baseLodash`.
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        /*------------------------------------------------------------------------*/ /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */ function Hash(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while(++index < length){
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */ function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
        }
        /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ function hashDelete(key) {
            var result = this.has(key) && delete this.__data__[key];
            this.size -= result ? 1 : 0;
            return result;
        }
        /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
                var result = data[key];
                return result === HASH_UNDEFINED ? undefined : result;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }
        /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }
        /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */ function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
            return this;
        }
        // Add methods to `Hash`.
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        /*------------------------------------------------------------------------*/ /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */ function ListCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while(++index < length){
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */ function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
        }
        /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) return false;
            var lastIndex = data.length - 1;
            if (index == lastIndex) data.pop();
            else splice.call(data, index, 1);
            --this.size;
            return true;
        }
        /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? undefined : data[index][1];
        }
        /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
        }
        /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */ function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
                ++this.size;
                data.push([
                    key,
                    value
                ]);
            } else data[index][1] = value;
            return this;
        }
        // Add methods to `ListCache`.
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        /*------------------------------------------------------------------------*/ /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */ function MapCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while(++index < length){
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */ function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
                "hash": new Hash,
                "map": new (Map || ListCache),
                "string": new Hash
            };
        }
        /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ function mapCacheDelete(key) {
            var result = getMapData(this, key)["delete"](key);
            this.size -= result ? 1 : 0;
            return result;
        }
        /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ function mapCacheGet(key) {
            return getMapData(this, key).get(key);
        }
        /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ function mapCacheHas(key) {
            return getMapData(this, key).has(key);
        }
        /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */ function mapCacheSet(key, value) {
            var data = getMapData(this, key), size = data.size;
            data.set(key, value);
            this.size += data.size == size ? 0 : 1;
            return this;
        }
        // Add methods to `MapCache`.
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        /*------------------------------------------------------------------------*/ /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */ function SetCache(values) {
            var index = -1, length = values == null ? 0 : values.length;
            this.__data__ = new MapCache;
            while(++index < length)this.add(values[index]);
        }
        /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */ function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
        }
        /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */ function setCacheHas(value) {
            return this.__data__.has(value);
        }
        // Add methods to `SetCache`.
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        /*------------------------------------------------------------------------*/ /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */ function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size;
        }
        /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */ function stackClear() {
            this.__data__ = new ListCache;
            this.size = 0;
        }
        /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ function stackDelete(key) {
            var data = this.__data__, result = data["delete"](key);
            this.size = data.size;
            return result;
        }
        /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ function stackGet(key) {
            return this.__data__.get(key);
        }
        /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ function stackHas(key) {
            return this.__data__.has(key);
        }
        /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */ function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
                var pairs = data.__data__;
                if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                    pairs.push([
                        key,
                        value
                    ]);
                    this.size = ++data.size;
                    return this;
                }
                data = this.__data__ = new MapCache(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
        }
        // Add methods to `Stack`.
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        /*------------------------------------------------------------------------*/ /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */ function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
            for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) result.push(key);
            return result;
        }
        /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */ function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined;
        }
        /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */ function arraySampleSize(array, n) {
            return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */ function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
        }
        /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */ function assignMergeValue(object, key, value) {
            if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) baseAssignValue(object, key, value);
        }
        /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */ function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) baseAssignValue(object, key, value);
        }
        /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */ function assocIndexOf(array, key) {
            var length = array.length;
            while(length--){
                if (eq(array[length][0], key)) return length;
            }
            return -1;
        }
        /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */ function baseAggregator(collection, setter, iteratee, accumulator) {
            baseEach(collection, function(value, key, collection) {
                setter(accumulator, value, iteratee(value), collection);
            });
            return accumulator;
        }
        /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */ function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
        }
        /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */ function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
        }
        /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */ function baseAssignValue(object, key, value) {
            if (key == "__proto__" && defineProperty) defineProperty(object, key, {
                "configurable": true,
                "enumerable": true,
                "value": value,
                "writable": true
            });
            else object[key] = value;
        }
        /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */ function baseAt(object, paths) {
            var index = -1, length = paths.length, result = Array1(length), skip = object == null;
            while(++index < length)result[index] = skip ? undefined : get(object, paths[index]);
            return result;
        }
        /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */ function baseClamp(number, lower, upper) {
            if (number === number) {
                if (upper !== undefined) number = number <= upper ? number : upper;
                if (lower !== undefined) number = number >= lower ? number : lower;
            }
            return number;
        }
        /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */ function baseClone(value, bitmask, customizer, key, object, stack) {
            var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
            if (result !== undefined) return result;
            if (!isObject(value)) return value;
            var isArr = isArray(value);
            if (isArr) {
                result = initCloneArray(value);
                if (!isDeep) return copyArray(value, result);
            } else {
                var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
                if (isBuffer(value)) return cloneBuffer(value, isDeep);
                if (tag == objectTag || tag == argsTag || isFunc && !object) {
                    result = isFlat || isFunc ? {} : initCloneObject(value);
                    if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
                } else {
                    if (!cloneableTags[tag]) return object ? value : {};
                    result = initCloneByTag(value, tag, isDeep);
                }
            }
            // Check for circular references and return its corresponding clone.
            stack || (stack = new Stack);
            var stacked = stack.get(value);
            if (stacked) return stacked;
            stack.set(value, result);
            if (isSet(value)) value.forEach(function(subValue) {
                result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
            else if (isMap(value)) value.forEach(function(subValue, key) {
                result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
            });
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
            var props = isArr ? undefined : keysFunc(value);
            arrayEach(props || value, function(subValue, key) {
                if (props) {
                    key = subValue;
                    subValue = value[key];
                }
                // Recursively populate clone (susceptible to call stack limits).
                assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
            });
            return result;
        }
        /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */ function baseConforms(source) {
            var props = keys(source);
            return function(object) {
                return baseConformsTo(object, source, props);
            };
        }
        /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */ function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) return !length;
            object = Object1(object);
            while(length--){
                var key = props[length], predicate = source[key], value = object[key];
                if (value === undefined && !(key in object) || !predicate(value)) return false;
            }
            return true;
        }
        /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */ function baseDelay(func, wait, args) {
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            return setTimeout(function() {
                func.apply(undefined, args);
            }, wait);
        }
        /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */ function baseDifference(array, values, iteratee, comparator) {
            var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
            if (!length) return result;
            if (iteratee) values = arrayMap(values, baseUnary(iteratee));
            if (comparator) {
                includes = arrayIncludesWith;
                isCommon = false;
            } else if (values.length >= LARGE_ARRAY_SIZE) {
                includes = cacheHas;
                isCommon = false;
                values = new SetCache(values);
            }
            outer: while(++index < length){
                var value = array[index], computed = iteratee == null ? value : iteratee(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                    var valuesIndex = valuesLength;
                    while(valuesIndex--){
                        if (values[valuesIndex] === computed) continue outer;
                    }
                    result.push(value);
                } else if (!includes(values, computed, comparator)) result.push(value);
            }
            return result;
        }
        /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */ var baseEach = createBaseEach(baseForOwn);
        /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */ var baseEachRight = createBaseEach(baseForOwnRight, true);
        /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */ function baseEvery(collection, predicate) {
            var result = true;
            baseEach(collection, function(value, index, collection) {
                result = !!predicate(value, index, collection);
                return result;
            });
            return result;
        }
        /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */ function baseExtremum(array, iteratee, comparator) {
            var index = -1, length = array.length;
            while(++index < length){
                var value = array[index], current = iteratee(value);
                if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) var computed = current, result = value;
            }
            return result;
        }
        /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */ function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            if (start < 0) start = -start > length ? 0 : length + start;
            end = end === undefined || end > length ? length : toInteger(end);
            if (end < 0) end += length;
            end = start > end ? 0 : toLength(end);
            while(start < end)array[start++] = value;
            return array;
        }
        /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */ function baseFilter(collection, predicate) {
            var result = [];
            baseEach(collection, function(value, index, collection) {
                if (predicate(value, index, collection)) result.push(value);
            });
            return result;
        }
        /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */ function baseFlatten(array, depth, predicate, isStrict, result) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result || (result = []);
            while(++index < length){
                var value = array[index];
                if (depth > 0 && predicate(value)) {
                    if (depth > 1) // Recursively flatten arrays (susceptible to call stack limits).
                    baseFlatten(value, depth - 1, predicate, isStrict, result);
                    else arrayPush(result, value);
                } else if (!isStrict) result[result.length] = value;
            }
            return result;
        }
        /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */ var baseFor = createBaseFor();
        /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */ var baseForRight = createBaseFor(true);
        /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */ function baseForOwn(object, iteratee) {
            return object && baseFor(object, iteratee, keys);
        }
        /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */ function baseForOwnRight(object, iteratee) {
            return object && baseForRight(object, iteratee, keys);
        }
        /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */ function baseFunctions(object, props) {
            return arrayFilter(props, function(key) {
                return isFunction(object[key]);
            });
        }
        /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */ function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while(object != null && index < length)object = object[toKey(path[index++])];
            return index && index == length ? object : undefined;
        }
        /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result = keysFunc(object);
            return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
        }
        /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */ function baseGetTag(value) {
            if (value == null) return value === undefined ? undefinedTag : nullTag;
            return symToStringTag && symToStringTag in Object1(value) ? getRawTag(value) : objectToString(value);
        }
        /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */ function baseGt(value, other) {
            return value > other;
        }
        /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */ function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key);
        }
        /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */ function baseHasIn(object, key) {
            return object != null && key in Object1(object);
        }
        /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */ function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */ function baseIntersection(arrays, iteratee, comparator) {
            var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array1(othLength), maxLength = Infinity, result = [];
            while(othIndex--){
                var array = arrays[othIndex];
                if (othIndex && iteratee) array = arrayMap(array, baseUnary(iteratee));
                maxLength = nativeMin(array.length, maxLength);
                caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer: while(++index < length && result.length < maxLength){
                var value = array[index], computed = iteratee ? iteratee(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
                    othIndex = othLength;
                    while(--othIndex){
                        var cache = caches[othIndex];
                        if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) continue outer;
                    }
                    if (seen) seen.push(computed);
                    result.push(value);
                }
            }
            return result;
        }
        /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */ function baseInverter(object, setter, iteratee, accumulator) {
            baseForOwn(object, function(value, key, object) {
                setter(accumulator, iteratee(value), key, object);
            });
            return accumulator;
        }
        /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */ function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined : apply(func, object, args);
        }
        /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */ function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */ function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */ function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */ function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) return true;
            if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
                if (!isBuffer(other)) return false;
                objIsArr = true;
                objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
                stack || (stack = new Stack);
                return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
                if (objIsWrapped || othIsWrapped) {
                    var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                    stack || (stack = new Stack);
                    return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
                }
            }
            if (!isSameTag) return false;
            stack || (stack = new Stack);
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */ function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag;
        }
        /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */ function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) return !length;
            object = Object1(object);
            while(index--){
                var data = matchData[index];
                if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
            }
            while(++index < length){
                data = matchData[index];
                var key = data[0], objValue = object[key], srcValue = data[1];
                if (noCustomizer && data[2]) {
                    if (objValue === undefined && !(key in object)) return false;
                } else {
                    var stack = new Stack;
                    if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
                    if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false;
                }
            }
            return true;
        }
        /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */ function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) return false;
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
        }
        /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */ function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */ function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag;
        }
        /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */ function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */ function baseIteratee(value) {
            // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
            // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
            if (typeof value == "function") return value;
            if (value == null) return identity;
            if (typeof value == "object") return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            return property(value);
        }
        /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */ function baseKeys(object) {
            if (!isPrototype(object)) return nativeKeys(object);
            var result = [];
            for(var key in Object1(object))if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
            return result;
        }
        /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */ function baseKeysIn(object) {
            if (!isObject(object)) return nativeKeysIn(object);
            var isProto = isPrototype(object), result = [];
            for(var key in object)if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
            return result;
        }
        /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */ function baseLt(value, other) {
            return value < other;
        }
        /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */ function baseMap(collection, iteratee) {
            var index = -1, result = isArrayLike(collection) ? Array1(collection.length) : [];
            baseEach(collection, function(value, key, collection) {
                result[++index] = iteratee(value, key, collection);
            });
            return result;
        }
        /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */ function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            return function(object) {
                return object === source || baseIsMatch(object, source, matchData);
            };
        }
        /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */ function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
            return function(object) {
                var objValue = get(object, path);
                return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
        }
        /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */ function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) return;
            baseFor(source, function(srcValue, key) {
                stack || (stack = new Stack);
                if (isObject(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
                else {
                    var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined;
                    if (newValue === undefined) newValue = srcValue;
                    assignMergeValue(object, key, newValue);
                }
            }, keysIn);
        }
        /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */ function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
                assignMergeValue(object, key, stacked);
                return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined;
            var isCommon = newValue === undefined;
            if (isCommon) {
                var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
                newValue = srcValue;
                if (isArr || isBuff || isTyped) {
                    if (isArray(objValue)) newValue = objValue;
                    else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
                    else if (isBuff) {
                        isCommon = false;
                        newValue = cloneBuffer(srcValue, true);
                    } else if (isTyped) {
                        isCommon = false;
                        newValue = cloneTypedArray(srcValue, true);
                    } else newValue = [];
                } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                    newValue = objValue;
                    if (isArguments(objValue)) newValue = toPlainObject(objValue);
                    else if (!isObject(objValue) || isFunction(objValue)) newValue = initCloneObject(srcValue);
                } else isCommon = false;
            }
            if (isCommon) {
                // Recursively merge objects and arrays (susceptible to call stack limits).
                stack.set(srcValue, newValue);
                mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
                stack["delete"](srcValue);
            }
            assignMergeValue(object, key, newValue);
        }
        /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */ function baseNth(array, n) {
            var length = array.length;
            if (!length) return;
            n += n < 0 ? length : 0;
            return isIndex(n, length) ? array[n] : undefined;
        }
        /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */ function baseOrderBy(collection, iteratees, orders) {
            if (iteratees.length) iteratees = arrayMap(iteratees, function(iteratee) {
                if (isArray(iteratee)) return function(value) {
                    return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
                };
                return iteratee;
            });
            else iteratees = [
                identity
            ];
            var index = -1;
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            var result = baseMap(collection, function(value, key, collection) {
                var criteria = arrayMap(iteratees, function(iteratee) {
                    return iteratee(value);
                });
                return {
                    "criteria": criteria,
                    "index": ++index,
                    "value": value
                };
            });
            return baseSortBy(result, function(object, other) {
                return compareMultiple(object, other, orders);
            });
        }
        /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */ function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path) {
                return hasIn(object, path);
            });
        }
        /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */ function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result = {};
            while(++index < length){
                var path = paths[index], value = baseGet(object, path);
                if (predicate(value, path)) baseSet(result, castPath(path, object), value);
            }
            return result;
        }
        /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */ function basePropertyDeep(path) {
            return function(object) {
                return baseGet(object, path);
            };
        }
        /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */ function basePullAll(array, values, iteratee, comparator) {
            var indexOf = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values.length, seen = array;
            if (array === values) values = copyArray(values);
            if (iteratee) seen = arrayMap(array, baseUnary(iteratee));
            while(++index < length){
                var fromIndex = 0, value = values[index], computed = iteratee ? iteratee(value) : value;
                while((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1){
                    if (seen !== array) splice.call(seen, fromIndex, 1);
                    splice.call(array, fromIndex, 1);
                }
            }
            return array;
        }
        /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */ function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while(length--){
                var index = indexes[length];
                if (length == lastIndex || index !== previous) {
                    var previous = index;
                    if (isIndex(index)) splice.call(array, index, 1);
                    else baseUnset(array, index);
                }
            }
            return array;
        }
        /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */ function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */ function baseRange(start, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array1(length);
            while(length--){
                result[fromRight ? length : ++index] = start;
                start += step;
            }
            return result;
        }
        /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */ function baseRepeat(string, n) {
            var result = "";
            if (!string || n < 1 || n > MAX_SAFE_INTEGER) return result;
            // Leverage the exponentiation by squaring algorithm for a faster repeat.
            // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
            do {
                if (n % 2) result += string;
                n = nativeFloor(n / 2);
                if (n) string += string;
            }while (n);
            return result;
        }
        /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */ function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + "");
        }
        /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */ function baseSample(collection) {
            return arraySample(values(collection));
        }
        /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */ function baseSampleSize(collection, n) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */ function baseSet(object, path, value, customizer) {
            if (!isObject(object)) return object;
            path = castPath(path, object);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while(nested != null && ++index < length){
                var key = toKey(path[index]), newValue = value;
                if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
                if (index != lastIndex) {
                    var objValue = nested[key];
                    newValue = customizer ? customizer(objValue, key, nested) : undefined;
                    if (newValue === undefined) newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
                }
                assignValue(nested, key, newValue);
                nested = nested[key];
            }
            return object;
        }
        /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */ var baseSetData = !metaMap ? identity : function(func, data) {
            metaMap.set(func, data);
            return func;
        };
        /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */ var baseSetToString = !defineProperty ? identity : function(func, string) {
            return defineProperty(func, "toString", {
                "configurable": true,
                "enumerable": false,
                "value": constant(string),
                "writable": true
            });
        };
        /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */ function baseShuffle(collection) {
            return shuffleSelf(values(collection));
        }
        /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */ function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            if (start < 0) start = -start > length ? 0 : length + start;
            end = end > length ? length : end;
            if (end < 0) end += length;
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result = Array1(length);
            while(++index < length)result[index] = array[index + start];
            return result;
        }
        /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */ function baseSome(collection, predicate) {
            var result;
            baseEach(collection, function(value, index, collection) {
                result = predicate(value, index, collection);
                return !result;
            });
            return !!result;
        }
        /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */ function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
                while(low < high){
                    var mid = low + high >>> 1, computed = array[mid];
                    if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) low = mid + 1;
                    else high = mid;
                }
                return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
        }
        /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */ function baseSortedIndexBy(array, value, iteratee, retHighest) {
            var low = 0, high = array == null ? 0 : array.length;
            if (high === 0) return 0;
            value = iteratee(value);
            var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined;
            while(low < high){
                var mid = nativeFloor((low + high) / 2), computed = iteratee(array[mid]), othIsDefined = computed !== undefined, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
                if (valIsNaN) var setLow = retHighest || othIsReflexive;
                else if (valIsUndefined) setLow = othIsReflexive && (retHighest || othIsDefined);
                else if (valIsNull) setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
                else if (valIsSymbol) setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
                else if (othIsNull || othIsSymbol) setLow = false;
                else setLow = retHighest ? computed <= value : computed < value;
                if (setLow) low = mid + 1;
                else high = mid;
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
        }
        /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */ function baseSortedUniq(array, iteratee) {
            var index = -1, length = array.length, resIndex = 0, result = [];
            while(++index < length){
                var value = array[index], computed = iteratee ? iteratee(value) : value;
                if (!index || !eq(computed, seen)) {
                    var seen = computed;
                    result[resIndex++] = value === 0 ? 0 : value;
                }
            }
            return result;
        }
        /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */ function baseToNumber(value) {
            if (typeof value == "number") return value;
            if (isSymbol(value)) return NAN;
            return +value;
        }
        /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */ function baseToString(value) {
            // Exit early for strings to avoid a performance hit in some environments.
            if (typeof value == "string") return value;
            if (isArray(value)) // Recursively convert values (susceptible to call stack limits).
            return arrayMap(value, baseToString) + "";
            if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
            var result = value + "";
            return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }
        /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */ function baseUniq(array, iteratee, comparator) {
            var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
            if (comparator) {
                isCommon = false;
                includes = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE) {
                var set = iteratee ? null : createSet(array);
                if (set) return setToArray(set);
                isCommon = false;
                includes = cacheHas;
                seen = new SetCache;
            } else seen = iteratee ? [] : result;
            outer: while(++index < length){
                var value = array[index], computed = iteratee ? iteratee(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                    var seenIndex = seen.length;
                    while(seenIndex--){
                        if (seen[seenIndex] === computed) continue outer;
                    }
                    if (iteratee) seen.push(computed);
                    result.push(value);
                } else if (!includes(seen, computed, comparator)) {
                    if (seen !== result) seen.push(computed);
                    result.push(value);
                }
            }
            return result;
        }
        /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */ function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent(object, path);
            return object == null || delete object[toKey(last(path))];
        }
        /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */ function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */ function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while((fromRight ? index-- : ++index < length) && predicate(array[index], index, array));
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */ function baseWrapperValue(value, actions) {
            var result = value;
            if (result instanceof LazyWrapper) result = result.value();
            return arrayReduce(actions, function(result, action) {
                return action.func.apply(action.thisArg, arrayPush([
                    result
                ], action.args));
            }, result);
        }
        /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */ function baseXor(arrays, iteratee, comparator) {
            var length = arrays.length;
            if (length < 2) return length ? baseUniq(arrays[0]) : [];
            var index = -1, result = Array1(length);
            while(++index < length){
                var array = arrays[index], othIndex = -1;
                while(++othIndex < length)if (othIndex != index) result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
            }
            return baseUniq(baseFlatten(result, 1), iteratee, comparator);
        }
        /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */ function baseZipObject(props, values, assignFunc) {
            var index = -1, length = props.length, valsLength = values.length, result = {};
            while(++index < length){
                var value = index < valsLength ? values[index] : undefined;
                assignFunc(result, props[index], value);
            }
            return result;
        }
        /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */ function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
        }
        /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */ function castFunction(value) {
            return typeof value == "function" ? value : identity;
        }
        /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */ function castPath(value, object) {
            if (isArray(value)) return value;
            return isKey(value, object) ? [
                value
            ] : stringToPath(toString(value));
        }
        /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */ var castRest = baseRest;
        /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */ function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
        }
        /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */ var clearTimeout = ctxClearTimeout || function(id) {
            return root.clearTimeout(id);
        };
        /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */ function cloneBuffer(buffer, isDeep) {
            if (isDeep) return buffer.slice();
            var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result);
            return result;
        }
        /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */ function cloneArrayBuffer(arrayBuffer) {
            var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array(result).set(new Uint8Array(arrayBuffer));
            return result;
        }
        /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */ function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */ function cloneRegExp(regexp) {
            var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result.lastIndex = regexp.lastIndex;
            return result;
        }
        /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */ function cloneSymbol(symbol) {
            return symbolValueOf ? Object1(symbolValueOf.call(symbol)) : {};
        }
        /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */ function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */ function compareAscending(value, other) {
            if (value !== other) {
                var valIsDefined = value !== undefined, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
                var othIsDefined = other !== undefined, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
                if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
                if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
            }
            return 0;
        }
        /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */ function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while(++index < length){
                var result = compareAscending(objCriteria[index], othCriteria[index]);
                if (result) {
                    if (index >= ordersLength) return result;
                    var order = orders[index];
                    return result * (order == "desc" ? -1 : 1);
                }
            }
            // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
            // that causes it, under certain circumstances, to provide the same value for
            // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
            // for more details.
            //
            // This also ensures a stable sort in V8 and other engines.
            // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
            return object.index - other.index;
        }
        /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */ function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array1(leftLength + rangeLength), isUncurried = !isCurried;
            while(++leftIndex < leftLength)result[leftIndex] = partials[leftIndex];
            while(++argsIndex < holdersLength)if (isUncurried || argsIndex < argsLength) result[holders[argsIndex]] = args[argsIndex];
            while(rangeLength--)result[leftIndex++] = args[argsIndex++];
            return result;
        }
        /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */ function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array1(rangeLength + rightLength), isUncurried = !isCurried;
            while(++argsIndex < rangeLength)result[argsIndex] = args[argsIndex];
            var offset = argsIndex;
            while(++rightIndex < rightLength)result[offset + rightIndex] = partials[rightIndex];
            while(++holdersIndex < holdersLength)if (isUncurried || argsIndex < argsLength) result[offset + holders[holdersIndex]] = args[argsIndex++];
            return result;
        }
        /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */ function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array1(length));
            while(++index < length)array[index] = source[index];
            return array;
        }
        /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */ function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while(++index < length){
                var key = props[index];
                var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
                if (newValue === undefined) newValue = source[key];
                if (isNew) baseAssignValue(object, key, newValue);
                else assignValue(object, key, newValue);
            }
            return object;
        }
        /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */ function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
        }
        /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */ function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
        }
        /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */ function createAggregator(setter, initializer) {
            return function(collection, iteratee) {
                var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
                return func(collection, setter, getIteratee(iteratee, 2), accumulator);
            };
        }
        /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */ function createAssigner(assigner) {
            return baseRest(function(object, sources) {
                var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
                customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;
                if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                    customizer = length < 3 ? undefined : customizer;
                    length = 1;
                }
                object = Object1(object);
                while(++index < length){
                    var source = sources[index];
                    if (source) assigner(object, source, index, customizer);
                }
                return object;
            });
        }
        /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */ function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee) {
                if (collection == null) return collection;
                if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
                var length = collection.length, index = fromRight ? length : -1, iterable = Object1(collection);
                while(fromRight ? index-- : ++index < length){
                    if (iteratee(iterable[index], index, iterable) === false) break;
                }
                return collection;
            };
        }
        /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */ function createBaseFor(fromRight) {
            return function(object, iteratee, keysFunc) {
                var index = -1, iterable = Object1(object), props = keysFunc(object), length = props.length;
                while(length--){
                    var key = props[fromRight ? length : ++index];
                    if (iteratee(iterable[key], key, iterable) === false) break;
                }
                return object;
            };
        }
        /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */ function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
                var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
        }
        /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */ function createCaseFirst(methodName) {
            return function(string) {
                string = toString(string);
                var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
                var chr = strSymbols ? strSymbols[0] : string.charAt(0);
                var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
                return chr[methodName]() + trailing;
            };
        }
        /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */ function createCompounder(callback) {
            return function(string) {
                return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
            };
        }
        /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */ function createCtor(Ctor) {
            return function() {
                // Use a `switch` statement to work with class constructors. See
                // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
                // for more details.
                var args = arguments;
                switch(args.length){
                    case 0:
                        return new Ctor;
                    case 1:
                        return new Ctor(args[0]);
                    case 2:
                        return new Ctor(args[0], args[1]);
                    case 3:
                        return new Ctor(args[0], args[1], args[2]);
                    case 4:
                        return new Ctor(args[0], args[1], args[2], args[3]);
                    case 5:
                        return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                    case 6:
                        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                    case 7:
                        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
                }
                var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
                // Mimic the constructor's `return` behavior.
                // See https://es5.github.io/#x13.2.2 for more details.
                return isObject(result) ? result : thisBinding;
            };
        }
        /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */ function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
                var length = arguments.length, args = Array1(length), index = length, placeholder = getHolder(wrapper);
                while(index--)args[index] = arguments[index];
                var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
                length -= holders.length;
                if (length < arity) return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
                var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                return apply(fn, this, args);
            }
            return wrapper;
        }
        /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */ function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
                var iterable = Object1(collection);
                if (!isArrayLike(collection)) {
                    var iteratee = getIteratee(predicate, 3);
                    collection = keys(collection);
                    predicate = function(key) {
                        return iteratee(iterable[key], key, iterable);
                    };
                }
                var index = findIndexFunc(collection, predicate, fromIndex);
                return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
            };
        }
        /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */ function createFlow(fromRight) {
            return flatRest(function(funcs) {
                var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
                if (fromRight) funcs.reverse();
                while(index--){
                    var func = funcs[index];
                    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
                    if (prereq && !wrapper && getFuncName(func) == "wrapper") var wrapper = new LodashWrapper([], true);
                }
                index = wrapper ? index : length;
                while(++index < length){
                    func = funcs[index];
                    var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined;
                    if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                    else wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                }
                return function() {
                    var args = arguments, value = args[0];
                    if (wrapper && args.length == 1 && isArray(value)) return wrapper.plant(value).value();
                    var index = 0, result = length ? funcs[index].apply(this, args) : value;
                    while(++index < length)result = funcs[index].call(this, result);
                    return result;
                };
            });
        }
        /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */ function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined : createCtor(func);
            function wrapper() {
                var length = arguments.length, args = Array1(length), index = length;
                while(index--)args[index] = arguments[index];
                if (isCurried) var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
                if (partials) args = composeArgs(args, partials, holders, isCurried);
                if (partialsRight) args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
                length -= holdersCount;
                if (isCurried && length < arity) {
                    var newHolders = replaceHolders(args, placeholder);
                    return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
                }
                var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
                length = args.length;
                if (argPos) args = reorder(args, argPos);
                else if (isFlip && length > 1) args.reverse();
                if (isAry && ary < length) args.length = ary;
                if (this && this !== root && this instanceof wrapper) fn = Ctor || createCtor(fn);
                return fn.apply(thisBinding, args);
            }
            return wrapper;
        }
        /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */ function createInverter(setter, toIteratee) {
            return function(object, iteratee) {
                return baseInverter(object, setter, toIteratee(iteratee), {});
            };
        }
        /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */ function createMathOperation(operator, defaultValue) {
            return function(value, other) {
                var result;
                if (value === undefined && other === undefined) return defaultValue;
                if (value !== undefined) result = value;
                if (other !== undefined) {
                    if (result === undefined) return other;
                    if (typeof value == "string" || typeof other == "string") {
                        value = baseToString(value);
                        other = baseToString(other);
                    } else {
                        value = baseToNumber(value);
                        other = baseToNumber(other);
                    }
                    result = operator(value, other);
                }
                return result;
            };
        }
        /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */ function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
                iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
                return baseRest(function(args) {
                    var thisArg = this;
                    return arrayFunc(iteratees, function(iteratee) {
                        return apply(iteratee, thisArg, args);
                    });
                });
            });
        }
        /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */ function createPadding(length, chars) {
            chars = chars === undefined ? " " : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) return charsLength ? baseRepeat(chars, length) : chars;
            var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join("") : result.slice(0, length);
        }
        /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */ function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
                var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array1(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                while(++leftIndex < leftLength)args[leftIndex] = partials[leftIndex];
                while(argsLength--)args[leftIndex++] = arguments[++argsIndex];
                return apply(fn, isBind ? thisArg : this, args);
            }
            return wrapper;
        }
        /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */ function createRange(fromRight) {
            return function(start, end, step) {
                if (step && typeof step != "number" && isIterateeCall(start, end, step)) end = step = undefined;
                // Ensure the sign of `-0` is preserved.
                start = toFinite(start);
                if (end === undefined) {
                    end = start;
                    start = 0;
                } else end = toFinite(end);
                step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
                return baseRange(start, end, step, fromRight);
            };
        }
        /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */ function createRelationalOperation(operator) {
            return function(value, other) {
                if (!(typeof value == "string" && typeof other == "string")) {
                    value = toNumber(value);
                    other = toNumber(other);
                }
                return operator(value, other);
            };
        }
        /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */ function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined, newHoldersRight = isCurry ? undefined : holders, newPartials = isCurry ? partials : undefined, newPartialsRight = isCurry ? undefined : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            var newData = [
                func,
                bitmask,
                thisArg,
                newPartials,
                newHolders,
                newPartialsRight,
                newHoldersRight,
                argPos,
                ary,
                arity
            ];
            var result = wrapFunc.apply(undefined, newData);
            if (isLaziable(func)) setData(result, newData);
            result.placeholder = placeholder;
            return setWrapToString(result, func, bitmask);
        }
        /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */ function createRound(methodName) {
            var func = Math[methodName];
            return function(number, precision) {
                number = toNumber(number);
                precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
                if (precision && nativeIsFinite(number)) {
                    // Shift with exponential notation to avoid floating-point issues.
                    // See [MDN](https://mdn.io/round#Examples) for more details.
                    var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                    pair = (toString(value) + "e").split("e");
                    return +(pair[0] + "e" + (+pair[1] - precision));
                }
                return func(number);
            };
        }
        /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */ var createSet = !(Set && 1 / setToArray(new Set([
            ,
            -0
        ]))[1] == INFINITY) ? noop : function(values) {
            return new Set(values);
        };
        /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */ function createToPairs(keysFunc) {
            return function(object) {
                var tag = getTag(object);
                if (tag == mapTag) return mapToArray(object);
                if (tag == setTag) return setToPairs(object);
                return baseToPairs(object, keysFunc(object));
            };
        }
        /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */ function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            var length = partials ? partials.length : 0;
            if (!length) {
                bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
                partials = holders = undefined;
            }
            ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
            arity = arity === undefined ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
                var partialsRight = partials, holdersRight = holders;
                partials = holders = undefined;
            }
            var data = isBindKey ? undefined : getData(func);
            var newData = [
                func,
                bitmask,
                thisArg,
                partials,
                holders,
                partialsRight,
                holdersRight,
                argPos,
                ary,
                arity
            ];
            if (data) mergeData(newData, data);
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            if (!bitmask || bitmask == WRAP_BIND_FLAG) var result = createBind(func, bitmask, thisArg);
            else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) result = createCurry(func, bitmask, arity);
            else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) result = createPartial(func, bitmask, thisArg, partials);
            else result = createHybrid.apply(undefined, newData);
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result, newData), func, bitmask);
        }
        /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */ function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) return srcValue;
            return objValue;
        }
        /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */ function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
                // Recursively merge objects and arrays (susceptible to call stack limits).
                stack.set(srcValue, objValue);
                baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
                stack["delete"](srcValue);
            }
            return objValue;
        }
        /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */ function customOmitClone(value) {
            return isPlainObject(value) ? undefined : value;
        }
        /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
            // Check that cyclic values are equal.
            var arrStacked = stack.get(array);
            var othStacked = stack.get(other);
            if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
            var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
            stack.set(array, other);
            stack.set(other, array);
            // Ignore non-index properties.
            while(++index < arrLength){
                var arrValue = array[index], othValue = other[index];
                if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
                if (compared !== undefined) {
                    if (compared) continue;
                    result = false;
                    break;
                }
                // Recursively compare arrays (susceptible to call stack limits).
                if (seen) {
                    if (!arraySome(other, function(othValue, othIndex) {
                        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
                    })) {
                        result = false;
                        break;
                    }
                } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                    result = false;
                    break;
                }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result;
        }
        /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch(tag){
                case dataViewTag:
                    if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
                    object = object.buffer;
                    other = other.buffer;
                case arrayBufferTag:
                    if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
                    return true;
                case boolTag:
                case dateTag:
                case numberTag:
                    // Coerce booleans to `1` or `0` and dates to milliseconds.
                    // Invalid dates are coerced to `NaN`.
                    return eq(+object, +other);
                case errorTag:
                    return object.name == other.name && object.message == other.message;
                case regexpTag:
                case stringTag:
                    // Coerce regexes to strings and treat strings, primitives and objects,
                    // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
                    // for more details.
                    return object == other + "";
                case mapTag:
                    var convert = mapToArray;
                case setTag:
                    var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                    convert || (convert = setToArray);
                    if (object.size != other.size && !isPartial) return false;
                    // Assume cyclic values are equal.
                    var stacked = stack.get(object);
                    if (stacked) return stacked == other;
                    bitmask |= COMPARE_UNORDERED_FLAG;
                    // Recursively compare objects (susceptible to call stack limits).
                    stack.set(object, other);
                    var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                    stack["delete"](object);
                    return result;
                case symbolTag:
                    if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
            return false;
        }
        /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) return false;
            var index = objLength;
            while(index--){
                var key = objProps[index];
                if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
            }
            // Check that cyclic values are equal.
            var objStacked = stack.get(object);
            var othStacked = stack.get(other);
            if (objStacked && othStacked) return objStacked == other && othStacked == object;
            var result = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while(++index < objLength){
                key = objProps[index];
                var objValue = object[key], othValue = other[key];
                if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
                // Recursively compare objects (susceptible to call stack limits).
                if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                    result = false;
                    break;
                }
                skipCtor || (skipCtor = key == "constructor");
            }
            if (result && !skipCtor) {
                var objCtor = object.constructor, othCtor = other.constructor;
                // Non `Object` object instances with different constructors are not equal.
                if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
            }
            stack["delete"](object);
            stack["delete"](other);
            return result;
        }
        /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */ function flatRest(func) {
            return setToString(overRest(func, undefined, flatten), func + "");
        }
        /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */ function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
        }
        /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */ function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */ var getData = !metaMap ? noop : function(func) {
            return metaMap.get(func);
        };
        /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */ function getFuncName(func) {
            var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
            while(length--){
                var data = array[length], otherFunc = data.func;
                if (otherFunc == null || otherFunc == func) return data.name;
            }
            return result;
        }
        /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */ function getHolder(func) {
            var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
            return object.placeholder;
        }
        /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */ function getIteratee() {
            var result = lodash.iteratee || iteratee;
            result = result === iteratee ? baseIteratee : result;
            return arguments.length ? result(arguments[0], arguments[1]) : result;
        }
        /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */ function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */ function getMatchData(object) {
            var result = keys(object), length = result.length;
            while(length--){
                var key = result[length], value = object[key];
                result[length] = [
                    key,
                    value,
                    isStrictComparable(value)
                ];
            }
            return result;
        }
        /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */ function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined;
        }
        /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */ function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
                value[symToStringTag] = undefined;
                var unmasked = true;
            } catch (e) {}
            var result = nativeObjectToString.call(value);
            if (unmasked) {
                if (isOwn) value[symToStringTag] = tag;
                else delete value[symToStringTag];
            }
            return result;
        }
        /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
            if (object == null) return [];
            object = Object1(object);
            return arrayFilter(nativeGetSymbols(object), function(symbol) {
                return propertyIsEnumerable.call(object, symbol);
            });
        };
        /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */ var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
            var result = [];
            while(object){
                arrayPush(result, getSymbols(object));
                object = getPrototype(object);
            }
            return result;
        };
        /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */ var getTag = baseGetTag;
        // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) getTag = function(value) {
            var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) switch(ctorString){
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
            return result;
        };
        /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */ function getView(start, end, transforms) {
            var index = -1, length = transforms.length;
            while(++index < length){
                var data = transforms[index], size = data.size;
                switch(data.type){
                    case "drop":
                        start += size;
                        break;
                    case "dropRight":
                        end -= size;
                        break;
                    case "take":
                        end = nativeMin(end, start + size);
                        break;
                    case "takeRight":
                        start = nativeMax(start, end - size);
                        break;
                }
            }
            return {
                "start": start,
                "end": end
            };
        }
        /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */ function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
        }
        /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */ function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result = false;
            while(++index < length){
                var key = toKey(path[index]);
                if (!(result = object != null && hasFunc(object, key))) break;
                object = object[key];
            }
            if (result || ++index != length) return result;
            length = object == null ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */ function initCloneArray(array) {
            var length = array.length, result = new array.constructor(length);
            // Add properties assigned by `RegExp#exec`.
            if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
                result.index = array.index;
                result.input = array.input;
            }
            return result;
        }
        /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */ function initCloneObject(object) {
            return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */ function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch(tag){
                case arrayBufferTag:
                    return cloneArrayBuffer(object);
                case boolTag:
                case dateTag:
                    return new Ctor(+object);
                case dataViewTag:
                    return cloneDataView(object, isDeep);
                case float32Tag:
                case float64Tag:
                case int8Tag:
                case int16Tag:
                case int32Tag:
                case uint8Tag:
                case uint8ClampedTag:
                case uint16Tag:
                case uint32Tag:
                    return cloneTypedArray(object, isDeep);
                case mapTag:
                    return new Ctor;
                case numberTag:
                case stringTag:
                    return new Ctor(object);
                case regexpTag:
                    return cloneRegExp(object);
                case setTag:
                    return new Ctor;
                case symbolTag:
                    return cloneSymbol(object);
            }
        }
        /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */ function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) return source;
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
            details = details.join(length > 2 ? ", " : " ");
            return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */ function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */ function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }
        /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */ function isIterateeCall(value, index, object) {
            if (!isObject(object)) return false;
            var type = typeof index;
            if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) return eq(object[index], value);
            return false;
        }
        /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */ function isKey(value, object) {
            if (isArray(value)) return false;
            var type = typeof value;
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object1(object);
        }
        /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */ function isKeyable(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */ function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash[funcName];
            if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) return false;
            if (func === other) return true;
            var data = getData(other);
            return !!data && func === data[0];
        }
        /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */ function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
        }
        /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */ var isMaskable = coreJsData ? isFunction : stubFalse;
        /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */ function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
            return value === proto;
        }
        /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */ function isStrictComparable(value) {
            return value === value && !isObject(value);
        }
        /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */ function matchesStrictComparable(key, srcValue) {
            return function(object) {
                if (object == null) return false;
                return object[key] === srcValue && (srcValue !== undefined || key in Object1(object));
            };
        }
        /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */ function memoizeCapped(func) {
            var result = memoize(func, function(key) {
                if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
                return key;
            });
            var cache = result.cache;
            return result;
        }
        /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */ function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            // Exit early if metadata can't be merged.
            if (!(isCommon || isCombo)) return data;
            // Use source `thisArg` if available.
            if (srcBitmask & WRAP_BIND_FLAG) {
                data[2] = source[2];
                // Set when currying a bound function.
                newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            // Compose partial arguments.
            var value = source[3];
            if (value) {
                var partials = data[3];
                data[3] = partials ? composeArgs(partials, value, source[4]) : value;
                data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            // Compose partial right arguments.
            value = source[5];
            if (value) {
                partials = data[5];
                data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
                data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            // Use source `argPos` if available.
            value = source[7];
            if (value) data[7] = value;
            // Use source `ary` if it's smaller.
            if (srcBitmask & WRAP_ARY_FLAG) data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            // Use source `arity` if one is not provided.
            if (data[9] == null) data[9] = source[9];
            // Use source `func` and merge bitmasks.
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
        }
        /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */ function nativeKeysIn(object) {
            var result = [];
            if (object != null) for(var key in Object1(object))result.push(key);
            return result;
        }
        /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */ function objectToString(value) {
            return nativeObjectToString.call(value);
        }
        /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */ function overRest(func, start, transform) {
            start = nativeMax(start === undefined ? func.length - 1 : start, 0);
            return function() {
                var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array1(length);
                while(++index < length)array[index] = args[start + index];
                index = -1;
                var otherArgs = Array1(start + 1);
                while(++index < start)otherArgs[index] = args[index];
                otherArgs[start] = transform(array);
                return apply(func, this, otherArgs);
            };
        }
        /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */ function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */ function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while(length--){
                var index = indexes[length];
                array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
            }
            return array;
        }
        /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */ function safeGet(object, key) {
            if (key === "constructor" && typeof object[key] === "function") return;
            if (key == "__proto__") return;
            return object[key];
        }
        /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */ var setData = shortOut(baseSetData);
        /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */ var setTimeout = ctxSetTimeout || function(func, wait) {
            return root.setTimeout(func, wait);
        };
        /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */ var setToString = shortOut(baseSetToString);
        /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */ function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + "";
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */ function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
                var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
                lastCalled = stamp;
                if (remaining > 0) {
                    if (++count >= HOT_COUNT) return arguments[0];
                } else count = 0;
                return func.apply(undefined, arguments);
            };
        }
        /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */ function shuffleSelf(array, size) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size = size === undefined ? length : size;
            while(++index < size){
                var rand = baseRandom(index, lastIndex), value = array[rand];
                array[rand] = array[index];
                array[index] = value;
            }
            array.length = size;
            return array;
        }
        /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */ var stringToPath = memoizeCapped(function(string) {
            var result = [];
            if (string.charCodeAt(0) === 46 /* . */ ) result.push("");
            string.replace(rePropName, function(match, number, quote, subString) {
                result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            });
            return result;
        });
        /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */ function toKey(value) {
            if (typeof value == "string" || isSymbol(value)) return value;
            var result = value + "";
            return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }
        /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */ function toSource(func) {
            if (func != null) {
                try {
                    return funcToString.call(func);
                } catch (e) {}
                try {
                    return func + "";
                } catch (e1) {}
            }
            return "";
        }
        /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */ function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
                var value = "_." + pair[0];
                if (bitmask & pair[1] && !arrayIncludes(details, value)) details.push(value);
            });
            return details.sort();
        }
        /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */ function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) return wrapper.clone();
            var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result.__actions__ = copyArray(wrapper.__actions__);
            result.__index__ = wrapper.__index__;
            result.__values__ = wrapper.__values__;
            return result;
        }
        /*------------------------------------------------------------------------*/ /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */ function chunk(array, size, guard) {
            if (guard ? isIterateeCall(array, size, guard) : size === undefined) size = 1;
            else size = nativeMax(toInteger(size), 0);
            var length = array == null ? 0 : array.length;
            if (!length || size < 1) return [];
            var index = 0, resIndex = 0, result = Array1(nativeCeil(length / size));
            while(index < length)result[resIndex++] = baseSlice(array, index, index += size);
            return result;
        }
        /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */ function compact(array) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
            while(++index < length){
                var value = array[index];
                if (value) result[resIndex++] = value;
            }
            return result;
        }
        /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */ function concat() {
            var length = arguments.length;
            if (!length) return [];
            var args = Array1(length - 1), array = arguments[0], index = length;
            while(index--)args[index - 1] = arguments[index];
            return arrayPush(isArray(array) ? copyArray(array) : [
                array
            ], baseFlatten(args, 1));
        }
        /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */ var difference = baseRest(function(array, values) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
        });
        /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */ var differenceBy = baseRest(function(array, values) {
            var iteratee = last(values);
            if (isArrayLikeObject(iteratee)) iteratee = undefined;
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2)) : [];
        });
        /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */ var differenceWith = baseRest(function(array, values) {
            var comparator = last(values);
            if (isArrayLikeObject(comparator)) comparator = undefined;
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];
        });
        /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */ function drop(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            return baseSlice(array, n < 0 ? 0 : n, length);
        }
        /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */ function dropRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */ function dropRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */ function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */ function fill(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
                start = 0;
                end = length;
            }
            return baseFill(array, value, start, end);
        }
        /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */ function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) return -1;
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) index = nativeMax(length + index, 0);
            return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */ function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) return -1;
            var index = length - 1;
            if (fromIndex !== undefined) {
                index = toInteger(fromIndex);
                index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */ function flatten(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
        }
        /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */ function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
        }
        /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */ function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            depth = depth === undefined ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
        }
        /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */ function fromPairs(pairs) {
            var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
            while(++index < length){
                var pair = pairs[index];
                result[pair[0]] = pair[1];
            }
            return result;
        }
        /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */ function head(array) {
            return array && array.length ? array[0] : undefined;
        }
        /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */ function indexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) return -1;
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) index = nativeMax(length + index, 0);
            return baseIndexOf(array, value, index);
        }
        /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */ function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
        }
        /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */ var intersection = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */ var intersectionBy = baseRest(function(arrays) {
            var iteratee = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee === last(mapped)) iteratee = undefined;
            else mapped.pop();
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : [];
        });
        /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */ var intersectionWith = baseRest(function(arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == "function" ? comparator : undefined;
            if (comparator) mapped.pop();
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
        });
        /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */ function join(array, separator) {
            return array == null ? "" : nativeJoin.call(array, separator);
        }
        /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */ function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined;
        }
        /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */ function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) return -1;
            var index = length;
            if (fromIndex !== undefined) {
                index = toInteger(fromIndex);
                index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */ function nth(array, n) {
            return array && array.length ? baseNth(array, toInteger(n)) : undefined;
        }
        /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */ var pull = baseRest(pullAll);
        /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */ function pullAll(array, values) {
            return array && array.length && values && values.length ? basePullAll(array, values) : array;
        }
        /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */ function pullAllBy(array, values, iteratee) {
            return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) : array;
        }
        /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */ function pullAllWith(array, values, comparator) {
            return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;
        }
        /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */ var pullAt = flatRest(function(array, indexes) {
            var length = array == null ? 0 : array.length, result = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index) {
                return isIndex(index, length) ? +index : index;
            }).sort(compareAscending));
            return result;
        });
        /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */ function remove(array, predicate) {
            var result = [];
            if (!(array && array.length)) return result;
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while(++index < length){
                var value = array[index];
                if (predicate(value, index, array)) {
                    result.push(value);
                    indexes.push(index);
                }
            }
            basePullAt(array, indexes);
            return result;
        }
        /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */ function reverse(array) {
            return array == null ? array : nativeReverse.call(array);
        }
        /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */ function slice(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
                start = 0;
                end = length;
            } else {
                start = start == null ? 0 : toInteger(start);
                end = end === undefined ? length : toInteger(end);
            }
            return baseSlice(array, start, end);
        }
        /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */ function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
        }
        /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */ function sortedIndexBy(array, value, iteratee) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
        }
        /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */ function sortedIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
                var index = baseSortedIndex(array, value);
                if (index < length && eq(array[index], value)) return index;
            }
            return -1;
        }
        /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */ function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
        }
        /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */ function sortedLastIndexBy(array, value, iteratee) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
        }
        /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */ function sortedLastIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
                var index = baseSortedIndex(array, value, true) - 1;
                if (eq(array[index], value)) return index;
            }
            return -1;
        }
        /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */ function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : [];
        }
        /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */ function sortedUniqBy(array, iteratee) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : [];
        }
        /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */ function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
        }
        /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */ function take(array, n, guard) {
            if (!(array && array.length)) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */ function takeRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, n < 0 ? 0 : n, length);
        }
        /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */ function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */ function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */ var union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */ var unionBy = baseRest(function(arrays) {
            var iteratee = last(arrays);
            if (isArrayLikeObject(iteratee)) iteratee = undefined;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
        });
        /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */ var unionWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
        });
        /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */ function uniq(array) {
            return array && array.length ? baseUniq(array) : [];
        }
        /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */ function uniqBy(array, iteratee) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : [];
        }
        /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */ function uniqWith(array, comparator) {
            comparator = typeof comparator == "function" ? comparator : undefined;
            return array && array.length ? baseUniq(array, undefined, comparator) : [];
        }
        /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */ function unzip(array) {
            if (!(array && array.length)) return [];
            var length = 0;
            array = arrayFilter(array, function(group) {
                if (isArrayLikeObject(group)) {
                    length = nativeMax(group.length, length);
                    return true;
                }
            });
            return baseTimes(length, function(index) {
                return arrayMap(array, baseProperty(index));
            });
        }
        /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */ function unzipWith(array, iteratee) {
            if (!(array && array.length)) return [];
            var result = unzip(array);
            if (iteratee == null) return result;
            return arrayMap(result, function(group) {
                return apply(iteratee, undefined, group);
            });
        }
        /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */ var without = baseRest(function(array, values) {
            return isArrayLikeObject(array) ? baseDifference(array, values) : [];
        });
        /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */ var xor = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */ var xorBy = baseRest(function(arrays) {
            var iteratee = last(arrays);
            if (isArrayLikeObject(iteratee)) iteratee = undefined;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
        });
        /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */ var xorWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
        });
        /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */ var zip = baseRest(unzip);
        /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */ function zipObject(props, values) {
            return baseZipObject(props || [], values || [], assignValue);
        }
        /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */ function zipObjectDeep(props, values) {
            return baseZipObject(props || [], values || [], baseSet);
        }
        /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */ var zipWith = baseRest(function(arrays) {
            var length = arrays.length, iteratee = length > 1 ? arrays[length - 1] : undefined;
            iteratee = typeof iteratee == "function" ? (arrays.pop(), iteratee) : undefined;
            return unzipWith(arrays, iteratee);
        });
        /*------------------------------------------------------------------------*/ /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */ function chain(value) {
            var result = lodash(value);
            result.__chain__ = true;
            return result;
        }
        /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */ function tap(value, interceptor) {
            interceptor(value);
            return value;
        }
        /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */ function thru(value, interceptor) {
            return interceptor(value);
        }
        /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */ var wrapperAt = flatRest(function(paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
                return baseAt(object, paths);
            };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) return this.thru(interceptor);
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
                "func": thru,
                "args": [
                    interceptor
                ],
                "thisArg": undefined
            });
            return new LodashWrapper(value, this.__chain__).thru(function(array) {
                if (length && !array.length) array.push(undefined);
                return array;
            });
        });
        /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */ function wrapperChain() {
            return chain(this);
        }
        /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */ function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
        }
        /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */ function wrapperNext() {
            if (this.__values__ === undefined) this.__values__ = toArray(this.value());
            var done = this.__index__ >= this.__values__.length, value = done ? undefined : this.__values__[this.__index__++];
            return {
                "done": done,
                "value": value
            };
        }
        /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */ function wrapperToIterator() {
            return this;
        }
        /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */ function wrapperPlant(value) {
            var result, parent = this;
            while(parent instanceof baseLodash){
                var clone = wrapperClone(parent);
                clone.__index__ = 0;
                clone.__values__ = undefined;
                if (result) previous.__wrapped__ = clone;
                else result = clone;
                var previous = clone;
                parent = parent.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result;
        }
        /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */ function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
                var wrapped = value;
                if (this.__actions__.length) wrapped = new LazyWrapper(this);
                wrapped = wrapped.reverse();
                wrapped.__actions__.push({
                    "func": thru,
                    "args": [
                        reverse
                    ],
                    "thisArg": undefined
                });
                return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
        }
        /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */ function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        /*------------------------------------------------------------------------*/ /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */ var countBy = createAggregator(function(result, value, key) {
            if (hasOwnProperty.call(result, key)) ++result[key];
            else baseAssignValue(result, key, 1);
        });
        /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */ function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) predicate = undefined;
            return func(collection, getIteratee(predicate, 3));
        }
        /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */ function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
        }
        /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */ var find = createFind(findIndex);
        /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */ var findLast = createFind(findLastIndex);
        /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */ function flatMap(collection, iteratee) {
            return baseFlatten(map(collection, iteratee), 1);
        }
        /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */ function flatMapDeep(collection, iteratee) {
            return baseFlatten(map(collection, iteratee), INFINITY);
        }
        /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */ function flatMapDepth(collection, iteratee, depth) {
            depth = depth === undefined ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee), depth);
        }
        /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */ function forEach(collection, iteratee) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee, 3));
        }
        /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */ function forEachRight(collection, iteratee) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee, 3));
        }
        /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */ var groupBy = createAggregator(function(result, value, key) {
            if (hasOwnProperty.call(result, key)) result[key].push(value);
            else baseAssignValue(result, key, [
                value
            ]);
        });
        /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */ function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) fromIndex = nativeMax(length + fromIndex, 0);
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */ var invokeMap = baseRest(function(collection, path, args) {
            var index = -1, isFunc = typeof path == "function", result = isArrayLike(collection) ? Array1(collection.length) : [];
            baseEach(collection, function(value) {
                result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result;
        });
        /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */ var keyBy = createAggregator(function(result, value, key) {
            baseAssignValue(result, key, value);
        });
        /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */ function map(collection, iteratee) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee, 3));
        }
        /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */ function orderBy(collection, iteratees, orders, guard) {
            if (collection == null) return [];
            if (!isArray(iteratees)) iteratees = iteratees == null ? [] : [
                iteratees
            ];
            orders = guard ? undefined : orders;
            if (!isArray(orders)) orders = orders == null ? [] : [
                orders
            ];
            return baseOrderBy(collection, iteratees, orders);
        }
        /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */ var partition = createAggregator(function(result, value, key) {
            result[key ? 0 : 1].push(value);
        }, function() {
            return [
                [],
                []
            ];
        });
        /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */ function reduce(collection, iteratee, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
        }
        /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */ function reduceRight(collection, iteratee, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
        }
        /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */ function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
        }
        /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */ function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection);
        }
        /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */ function sampleSize(collection, n, guard) {
            if (guard ? isIterateeCall(collection, n, guard) : n === undefined) n = 1;
            else n = toInteger(n);
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n);
        }
        /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */ function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
        }
        /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */ function size(collection) {
            if (collection == null) return 0;
            if (isArrayLike(collection)) return isString(collection) ? stringSize(collection) : collection.length;
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) return collection.size;
            return baseKeys(collection).length;
        }
        /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */ function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) predicate = undefined;
            return func(collection, getIteratee(predicate, 3));
        }
        /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */ var sortBy = baseRest(function(collection, iteratees) {
            if (collection == null) return [];
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) iteratees = [];
            else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) iteratees = [
                iteratees[0]
            ];
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        /*------------------------------------------------------------------------*/ /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */ var now = ctxNow || function() {
            return root.Date.now();
        };
        /*------------------------------------------------------------------------*/ /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */ function after(n, func) {
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            n = toInteger(n);
            return function() {
                if (--n < 1) return func.apply(this, arguments);
            };
        }
        /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */ function ary(func, n, guard) {
            n = guard ? undefined : n;
            n = func && n == null ? func.length : n;
            return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
        }
        /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */ function before(n, func) {
            var result;
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            n = toInteger(n);
            return function() {
                if (--n > 0) result = func.apply(this, arguments);
                if (n <= 1) func = undefined;
                return result;
            };
        }
        /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */ var bind = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, getHolder(bind));
                bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
        });
        /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */ var bindKey = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, getHolder(bindKey));
                bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
        });
        /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */ function curry(func, arity, guard) {
            arity = guard ? undefined : arity;
            var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
            result.placeholder = curry.placeholder;
            return result;
        }
        /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */ function curryRight(func, arity, guard) {
            arity = guard ? undefined : arity;
            var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
            result.placeholder = curryRight.placeholder;
            return result;
        }
        /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */ function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
                leading = !!options.leading;
                maxing = "maxWait" in options;
                maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
                trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
                var args = lastArgs, thisArg = lastThis;
                lastArgs = lastThis = undefined;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result;
            }
            function leadingEdge(time) {
                // Reset any `maxWait` timer.
                lastInvokeTime = time;
                // Start the timer for the trailing edge.
                timerId = setTimeout(timerExpired, wait);
                // Invoke the leading edge.
                return leading ? invokeFunc(time) : result;
            }
            function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
                return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                // Either this is the first call, activity has stopped and we're at the
                // trailing edge, the system time has gone backwards and we're treating
                // it as the trailing edge, or we've hit the `maxWait` limit.
                return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
                var time = now();
                if (shouldInvoke(time)) return trailingEdge(time);
                // Restart the timer.
                timerId = setTimeout(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
                timerId = undefined;
                // Only invoke if we have `lastArgs` which means `func` has been
                // debounced at least once.
                if (trailing && lastArgs) return invokeFunc(time);
                lastArgs = lastThis = undefined;
                return result;
            }
            function cancel() {
                if (timerId !== undefined) clearTimeout(timerId);
                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = undefined;
            }
            function flush() {
                return timerId === undefined ? result : trailingEdge(now());
            }
            function debounced() {
                var time = now(), isInvoking = shouldInvoke(time);
                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;
                if (isInvoking) {
                    if (timerId === undefined) return leadingEdge(lastCallTime);
                    if (maxing) {
                        // Handle invocations in a tight loop.
                        clearTimeout(timerId);
                        timerId = setTimeout(timerExpired, wait);
                        return invokeFunc(lastCallTime);
                    }
                }
                if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
                return result;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
        }
        /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */ var defer = baseRest(function(func, args) {
            return baseDelay(func, 1, args);
        });
        /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */ var delay = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
        });
        /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */ function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
        }
        /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */ function memoize(func, resolver) {
            if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
            var memoized = function() {
                var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
                if (cache.has(key)) return cache.get(key);
                var result = func.apply(this, args);
                memoized.cache = cache.set(key, result) || cache;
                return result;
            };
            memoized.cache = new (memoize.Cache || MapCache);
            return memoized;
        }
        // Expose `MapCache`.
        memoize.Cache = MapCache;
        /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */ function negate(predicate) {
            if (typeof predicate != "function") throw new TypeError(FUNC_ERROR_TEXT);
            return function() {
                var args = arguments;
                switch(args.length){
                    case 0:
                        return !predicate.call(this);
                    case 1:
                        return !predicate.call(this, args[0]);
                    case 2:
                        return !predicate.call(this, args[0], args[1]);
                    case 3:
                        return !predicate.call(this, args[0], args[1], args[2]);
                }
                return !predicate.apply(this, args);
            };
        }
        /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */ function once(func) {
            return before(2, func);
        }
        /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */ var overArgs = castRest(function(func, transforms) {
            transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
                var index = -1, length = nativeMin(args.length, funcsLength);
                while(++index < length)args[index] = transforms[index].call(this, args[index]);
                return apply(func, this, args);
            });
        });
        /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */ var partial = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
        });
        /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */ var partialRight = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
        });
        /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */ var rearg = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
        });
        /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */ function rest(func, start) {
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            start = start === undefined ? start : toInteger(start);
            return baseRest(func, start);
        }
        /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */ function spread(func, start) {
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            start = start == null ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function(args) {
                var array = args[start], otherArgs = castSlice(args, 0, start);
                if (array) arrayPush(otherArgs, array);
                return apply(func, this, otherArgs);
            });
        }
        /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */ function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            if (isObject(options)) {
                leading = "leading" in options ? !!options.leading : leading;
                trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, {
                "leading": leading,
                "maxWait": wait,
                "trailing": trailing
            });
        }
        /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */ function unary(func) {
            return ary(func, 1);
        }
        /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */ function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
        }
        /*------------------------------------------------------------------------*/ /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */ function castArray() {
            if (!arguments.length) return [];
            var value = arguments[0];
            return isArray(value) ? value : [
                value
            ];
        }
        /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */ function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */ function cloneWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */ function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */ function cloneDeepWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */ function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys(source));
        }
        /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */ function eq(value, other) {
            return value === other || value !== value && other !== other;
        }
        /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */ var gt = createRelationalOperation(baseGt);
        /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */ var gte = createRelationalOperation(function(value, other) {
            return value >= other;
        });
        /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */ var isArguments = baseIsArguments(function() {
            return arguments;
        }()) ? baseIsArguments : function(value) {
            return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */ var isArray = Array1.isArray;
        /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */ var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */ function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
        }
        /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */ function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
        }
        /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */ function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */ var isBuffer = nativeIsBuffer || stubFalse;
        /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */ var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */ function isElement(value) {
            return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */ function isEmpty(value) {
            if (value == null) return true;
            if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) return !value.size;
            if (isPrototype(value)) return !baseKeys(value).length;
            for(var key in value){
                if (hasOwnProperty.call(value, key)) return false;
            }
            return true;
        }
        /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */ function isEqual(value, other) {
            return baseIsEqual(value, other);
        }
        /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */ function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined;
            var result = customizer ? customizer(value, other) : undefined;
            return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
        }
        /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */ function isError(value) {
            if (!isObjectLike(value)) return false;
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */ function isFinite(value) {
            return typeof value == "number" && nativeIsFinite(value);
        }
        /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */ function isFunction(value) {
            if (!isObject(value)) return false;
            // The use of `Object#toString` avoids issues with the `typeof` operator
            // in Safari 9 which returns 'object' for typed arrays and other constructors.
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */ function isInteger(value) {
            return typeof value == "number" && value == toInteger(value);
        }
        /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */ function isLength(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */ function isObject(value) {
            var type = typeof value;
            return value != null && (type == "object" || type == "function");
        }
        /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */ function isObjectLike(value) {
            return value != null && typeof value == "object";
        }
        /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */ var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */ function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */ function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined;
            return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */ function isNaN(value) {
            // An `NaN` primitive is the only value that is not equal to itself.
            // Perform the `toStringTag` check first to avoid errors with some
            // ActiveX objects in IE.
            return isNumber(value) && value != +value;
        }
        /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */ function isNative(value) {
            if (isMaskable(value)) throw new Error(CORE_ERROR_TEXT);
            return baseIsNative(value);
        }
        /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */ function isNull(value) {
            return value === null;
        }
        /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */ function isNil(value) {
            return value == null;
        }
        /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */ function isNumber(value) {
            return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */ function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
            var proto = getPrototype(value);
            if (proto === null) return true;
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */ var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */ function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */ var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */ function isString(value) {
            return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */ function isSymbol(value) {
            return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */ function isUndefined(value) {
            return value === undefined;
        }
        /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */ function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */ function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */ var lt = createRelationalOperation(baseLt);
        /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */ var lte = createRelationalOperation(function(value, other) {
            return value <= other;
        });
        /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */ function toArray(value) {
            if (!value) return [];
            if (isArrayLike(value)) return isString(value) ? stringToArray(value) : copyArray(value);
            if (symIterator && value[symIterator]) return iteratorToArray(value[symIterator]());
            var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
            return func(value);
        }
        /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */ function toFinite(value) {
            if (!value) return value === 0 ? value : 0;
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
                var sign = value < 0 ? -1 : 1;
                return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
        }
        /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */ function toInteger(value) {
            var result = toFinite(value), remainder = result % 1;
            return result === result ? remainder ? result - remainder : result : 0;
        }
        /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */ function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */ function toNumber(value) {
            if (typeof value == "number") return value;
            if (isSymbol(value)) return NAN;
            if (isObject(value)) {
                var other = typeof value.valueOf == "function" ? value.valueOf() : value;
                value = isObject(other) ? other + "" : other;
            }
            if (typeof value != "string") return value === 0 ? value : +value;
            value = baseTrim(value);
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */ function toPlainObject(value) {
            return copyObject(value, keysIn(value));
        }
        /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */ function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */ function toString(value) {
            return value == null ? "" : baseToString(value);
        }
        /*------------------------------------------------------------------------*/ /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */ var assign = createAssigner(function(object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
                copyObject(source, keys(source), object);
                return;
            }
            for(var key in source)if (hasOwnProperty.call(source, key)) assignValue(object, key, source[key]);
        });
        /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */ var assignIn = createAssigner(function(object, source) {
            copyObject(source, keysIn(source), object);
        });
        /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */ var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
        });
        /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */ var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer);
        });
        /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */ var at = flatRest(baseAt);
        /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */ function create(prototype, properties) {
            var result = baseCreate(prototype);
            return properties == null ? result : baseAssign(result, properties);
        }
        /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */ var defaults = baseRest(function(object, sources) {
            object = Object1(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) length = 1;
            while(++index < length){
                var source = sources[index];
                var props = keysIn(source);
                var propsIndex = -1;
                var propsLength = props.length;
                while(++propsIndex < propsLength){
                    var key = props[propsIndex];
                    var value = object[key];
                    if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) object[key] = source[key];
                }
            }
            return object;
        });
        /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */ var defaultsDeep = baseRest(function(args) {
            args.push(undefined, customDefaultsMerge);
            return apply(mergeWith, undefined, args);
        });
        /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */ function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */ function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */ function forIn(object, iteratee) {
            return object == null ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);
        }
        /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */ function forInRight(object, iteratee) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);
        }
        /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */ function forOwn(object, iteratee) {
            return object && baseForOwn(object, getIteratee(iteratee, 3));
        }
        /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */ function forOwnRight(object, iteratee) {
            return object && baseForOwnRight(object, getIteratee(iteratee, 3));
        }
        /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */ function functions(object) {
            return object == null ? [] : baseFunctions(object, keys(object));
        }
        /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */ function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */ function get(object, path, defaultValue) {
            var result = object == null ? undefined : baseGet(object, path);
            return result === undefined ? defaultValue : result;
        }
        /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */ function has(object, path) {
            return object != null && hasPath(object, path, baseHas);
        }
        /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */ function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
        }
        /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */ var invert = createInverter(function(result, value, key) {
            if (value != null && typeof value.toString != "function") value = nativeObjectToString.call(value);
            result[value] = key;
        }, constant(identity));
        /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */ var invertBy = createInverter(function(result, value, key) {
            if (value != null && typeof value.toString != "function") value = nativeObjectToString.call(value);
            if (hasOwnProperty.call(result, value)) result[value].push(key);
            else result[value] = [
                key
            ];
        }, getIteratee);
        /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */ var invoke = baseRest(baseInvoke);
        /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */ function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */ function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */ function mapKeys(object, iteratee) {
            var result = {};
            iteratee = getIteratee(iteratee, 3);
            baseForOwn(object, function(value, key, object) {
                baseAssignValue(result, iteratee(value, key, object), value);
            });
            return result;
        }
        /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */ function mapValues(object, iteratee) {
            var result = {};
            iteratee = getIteratee(iteratee, 3);
            baseForOwn(object, function(value, key, object) {
                baseAssignValue(result, key, iteratee(value, key, object));
            });
            return result;
        }
        /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */ var merge = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
        });
        /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */ var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
        });
        /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */ var omit = flatRest(function(object, paths) {
            var result = {};
            if (object == null) return result;
            var isDeep = false;
            paths = arrayMap(paths, function(path) {
                path = castPath(path, object);
                isDeep || (isDeep = path.length > 1);
                return path;
            });
            copyObject(object, getAllKeysIn(object), result);
            if (isDeep) result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            var length = paths.length;
            while(length--)baseUnset(result, paths[length]);
            return result;
        });
        /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */ function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
        }
        /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */ var pick = flatRest(function(object, paths) {
            return object == null ? {} : basePick(object, paths);
        });
        /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */ function pickBy(object, predicate) {
            if (object == null) return {};
            var props = arrayMap(getAllKeysIn(object), function(prop) {
                return [
                    prop
                ];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function(value, path) {
                return predicate(value, path[0]);
            });
        }
        /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */ function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1, length = path.length;
            // Ensure the loop is entered when path is empty.
            if (!length) {
                length = 1;
                object = undefined;
            }
            while(++index < length){
                var value = object == null ? undefined : object[toKey(path[index])];
                if (value === undefined) {
                    index = length;
                    value = defaultValue;
                }
                object = isFunction(value) ? value.call(object) : value;
            }
            return object;
        }
        /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */ function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
        }
        /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */ function setWith(object, path, value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined;
            return object == null ? object : baseSet(object, path, value, customizer);
        }
        /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */ var toPairs = createToPairs(keys);
        /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */ var toPairsIn = createToPairs(keysIn);
        /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */ function transform(object, iteratee, accumulator) {
            var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee = getIteratee(iteratee, 4);
            if (accumulator == null) {
                var Ctor = object && object.constructor;
                if (isArrLike) accumulator = isArr ? new Ctor : [];
                else if (isObject(object)) accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
                else accumulator = {};
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
                return iteratee(accumulator, value, index, object);
            });
            return accumulator;
        }
        /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */ function unset(object, path) {
            return object == null ? true : baseUnset(object, path);
        }
        /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */ function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */ function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */ function values(object) {
            return object == null ? [] : baseValues(object, keys(object));
        }
        /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */ function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object));
        }
        /*------------------------------------------------------------------------*/ /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */ function clamp(number, lower, upper) {
            if (upper === undefined) {
                upper = lower;
                lower = undefined;
            }
            if (upper !== undefined) {
                upper = toNumber(upper);
                upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined) {
                lower = toNumber(lower);
                lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
        }
        /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */ function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined) {
                end = start;
                start = 0;
            } else end = toFinite(end);
            number = toNumber(number);
            return baseInRange(number, start, end);
        }
        /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */ function random(lower, upper, floating) {
            if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) upper = floating = undefined;
            if (floating === undefined) {
                if (typeof upper == "boolean") {
                    floating = upper;
                    upper = undefined;
                } else if (typeof lower == "boolean") {
                    floating = lower;
                    lower = undefined;
                }
            }
            if (lower === undefined && upper === undefined) {
                lower = 0;
                upper = 1;
            } else {
                lower = toFinite(lower);
                if (upper === undefined) {
                    upper = lower;
                    lower = 0;
                } else upper = toFinite(upper);
            }
            if (lower > upper) {
                var temp = lower;
                lower = upper;
                upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
                var rand = nativeRandom();
                return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
            }
            return baseRandom(lower, upper);
        }
        /*------------------------------------------------------------------------*/ /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */ var camelCase = createCompounder(function(result, word, index) {
            word = word.toLowerCase();
            return result + (index ? capitalize(word) : word);
        });
        /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */ function capitalize(string) {
            return upperFirst(toString(string).toLowerCase());
        }
        /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */ function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */ function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
        }
        /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */ function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */ function escapeRegExp(string) {
            string = toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */ var kebabCase = createCompounder(function(result, word, index) {
            return result + (index ? "-" : "") + word.toLowerCase();
        });
        /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */ var lowerCase = createCompounder(function(result, word, index) {
            return result + (index ? " " : "") + word.toLowerCase();
        });
        /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */ var lowerFirst = createCaseFirst("toLowerCase");
        /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */ function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) return string;
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */ function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */ function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */ function parseInt1(string, radix, guard) {
            if (guard || radix == null) radix = 0;
            else if (radix) radix = +radix;
            return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */ function repeat(string, n, guard) {
            if (guard ? isIterateeCall(string, n, guard) : n === undefined) n = 1;
            else n = toInteger(n);
            return baseRepeat(toString(string), n);
        }
        /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */ function replace() {
            var args = arguments, string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */ var snakeCase = createCompounder(function(result, word, index) {
            return result + (index ? "_" : "") + word.toLowerCase();
        });
        /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */ function split(string, separator, limit) {
            if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) separator = limit = undefined;
            limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) return [];
            string = toString(string);
            if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
                separator = baseToString(separator);
                if (!separator && hasUnicode(string)) return castSlice(stringToArray(string), 0, limit);
            }
            return string.split(separator, limit);
        }
        /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */ var startCase = createCompounder(function(result, word, index) {
            return result + (index ? " " : "") + upperFirst(word);
        });
        /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */ function startsWith(string, target, position) {
            string = toString(string);
            position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
        }
        /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */ function template(string, options, guard) {
            // Based on John Resig's `tmpl` implementation
            // (http://ejohn.org/blog/javascript-micro-templating/)
            // and Laura Doktorova's doT.js (https://github.com/olado/doT).
            var settings = lodash.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) options = undefined;
            string = toString(string);
            options = assignInWith({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            // Compile the regexp to match each delimiter.
            var reDelimiters = RegExp1((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
            // Use a sourceURL for easier debugging.
            // The sourceURL gets injected into the source that's eval-ed, so be careful
            // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
            // and escape the comment, thus injecting code that gets evaled.
            var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                interpolateValue || (interpolateValue = esTemplateValue);
                // Escape characters that can't be included in string literals.
                source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
                // Replace delimiters with snippets.
                if (escapeValue) {
                    isEscaping = true;
                    source += "' +\n__e(" + escapeValue + ") +\n'";
                }
                if (evaluateValue) {
                    isEvaluating = true;
                    source += "';\n" + evaluateValue + ";\n__p += '";
                }
                if (interpolateValue) source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
                index = offset + match.length;
                // The JS engine embedded in Adobe products needs `match` returned in
                // order to produce the correct `offset` value.
                return match;
            });
            source += "';\n";
            // If `variable` is not specified wrap a with-statement around the generated
            // code to add the data object to the top of the scope chain.
            var variable = hasOwnProperty.call(options, "variable") && options.variable;
            if (!variable) source = "with (obj) {\n" + source + "\n}\n";
            else if (reForbiddenIdentifierChars.test(variable)) throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
            // Cleanup code by stripping empty strings.
            source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
            // Frame code as the function body.
            source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
            var result = attempt(function() {
                return Function1(importsKeys, sourceURL + "return " + source).apply(undefined, importsValues);
            });
            // Provide the compiled function's source by its `toString` method or
            // the `source` property as a convenience for inlining compiled templates.
            result.source = source;
            if (isError(result)) throw result;
            return result;
        }
        /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */ function toLower(value) {
            return toString(value).toLowerCase();
        }
        /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */ function toUpper(value) {
            return toString(value).toUpperCase();
        }
        /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */ function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) return baseTrim(string);
            if (!string || !(chars = baseToString(chars))) return string;
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join("");
        }
        /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */ function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) return string.slice(0, trimmedEndIndex(string) + 1);
            if (!string || !(chars = baseToString(chars))) return string;
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join("");
        }
        /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */ function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) return string.replace(reTrimStart, "");
            if (!string || !(chars = baseToString(chars))) return string;
            var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join("");
        }
        /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */ function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
                var separator = "separator" in options ? options.separator : separator;
                length = "length" in options ? toInteger(options.length) : length;
                omission = "omission" in options ? baseToString(options.omission) : omission;
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
                var strSymbols = stringToArray(string);
                strLength = strSymbols.length;
            }
            if (length >= strLength) return string;
            var end = length - stringSize(omission);
            if (end < 1) return omission;
            var result = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
            if (separator === undefined) return result + omission;
            if (strSymbols) end += result.length - end;
            if (isRegExp(separator)) {
                if (string.slice(end).search(separator)) {
                    var match, substring = result;
                    if (!separator.global) separator = RegExp1(separator.source, toString(reFlags.exec(separator)) + "g");
                    separator.lastIndex = 0;
                    while(match = separator.exec(substring))var newEnd = match.index;
                    result = result.slice(0, newEnd === undefined ? end : newEnd);
                }
            } else if (string.indexOf(baseToString(separator), end) != end) {
                var index = result.lastIndexOf(separator);
                if (index > -1) result = result.slice(0, index);
            }
            return result + omission;
        }
        /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */ function unescape(string) {
            string = toString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */ var upperCase = createCompounder(function(result, word, index) {
            return result + (index ? " " : "") + word.toUpperCase();
        });
        /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */ var upperFirst = createCaseFirst("toUpperCase");
        /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */ function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined : pattern;
            if (pattern === undefined) return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            return string.match(pattern) || [];
        }
        /*------------------------------------------------------------------------*/ /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */ var attempt = baseRest(function(func, args) {
            try {
                return apply(func, undefined, args);
            } catch (e) {
                return isError(e) ? e : new Error(e);
            }
        });
        /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */ var bindAll = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
                key = toKey(key);
                baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
        });
        /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */ function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function(pair) {
                if (typeof pair[1] != "function") throw new TypeError(FUNC_ERROR_TEXT);
                return [
                    toIteratee(pair[0]),
                    pair[1]
                ];
            });
            return baseRest(function(args) {
                var index = -1;
                while(++index < length){
                    var pair = pairs[index];
                    if (apply(pair[0], this, args)) return apply(pair[1], this, args);
                }
            });
        }
        /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */ function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */ function constant(value) {
            return function() {
                return value;
            };
        }
        /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */ function defaultTo(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value;
        }
        /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */ var flow = createFlow();
        /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */ var flowRight = createFlow(true);
        /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */ function identity(value) {
            return value;
        }
        /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */ function iteratee(func) {
            return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */ function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */ function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */ var method = baseRest(function(path, args) {
            return function(object) {
                return baseInvoke(object, path, args);
            };
        });
        /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */ var methodOf = baseRest(function(object, args) {
            return function(path) {
                return baseInvoke(object, path, args);
            };
        });
        /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */ function mixin(object, source, options) {
            var props = keys(source), methodNames = baseFunctions(source, props);
            if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
                options = source;
                source = object;
                object = this;
                methodNames = baseFunctions(source, keys(source));
            }
            var chain = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
            arrayEach(methodNames, function(methodName) {
                var func = source[methodName];
                object[methodName] = func;
                if (isFunc) object.prototype[methodName] = function() {
                    var chainAll = this.__chain__;
                    if (chain || chainAll) {
                        var result = object(this.__wrapped__), actions = result.__actions__ = copyArray(this.__actions__);
                        actions.push({
                            "func": func,
                            "args": arguments,
                            "thisArg": object
                        });
                        result.__chain__ = chainAll;
                        return result;
                    }
                    return func.apply(object, arrayPush([
                        this.value()
                    ], arguments));
                };
            });
            return object;
        }
        /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */ function noConflict() {
            if (root._ === this) root._ = oldDash;
            return this;
        }
        /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */ function noop() {
        // No operation performed.
        }
        /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */ function nthArg(n) {
            n = toInteger(n);
            return baseRest(function(args) {
                return baseNth(args, n);
            });
        }
        /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */ var over = createOver(arrayMap);
        /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */ var overEvery = createOver(arrayEvery);
        /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */ var overSome = createOver(arraySome);
        /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */ function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */ function propertyOf(object) {
            return function(path) {
                return object == null ? undefined : baseGet(object, path);
            };
        }
        /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */ var range = createRange();
        /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */ var rangeRight = createRange(true);
        /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */ function stubArray() {
            return [];
        }
        /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */ function stubFalse() {
            return false;
        }
        /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */ function stubObject() {
            return {};
        }
        /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */ function stubString() {
            return "";
        }
        /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */ function stubTrue() {
            return true;
        }
        /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */ function times(n, iteratee) {
            n = toInteger(n);
            if (n < 1 || n > MAX_SAFE_INTEGER) return [];
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
            iteratee = getIteratee(iteratee);
            n -= MAX_ARRAY_LENGTH;
            var result = baseTimes(length, iteratee);
            while(++index < n)iteratee(index);
            return result;
        }
        /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */ function toPath(value) {
            if (isArray(value)) return arrayMap(value, toKey);
            return isSymbol(value) ? [
                value
            ] : copyArray(stringToPath(toString(value)));
        }
        /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */ function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
        }
        /*------------------------------------------------------------------------*/ /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */ var add = createMathOperation(function(augend, addend) {
            return augend + addend;
        }, 0);
        /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */ var ceil = createRound("ceil");
        /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */ var divide = createMathOperation(function(dividend, divisor) {
            return dividend / divisor;
        }, 1);
        /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */ var floor = createRound("floor");
        /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */ function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
        }
        /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */ function maxBy(array, iteratee) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined;
        }
        /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */ function mean(array) {
            return baseMean(array, identity);
        }
        /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */ function meanBy(array, iteratee) {
            return baseMean(array, getIteratee(iteratee, 2));
        }
        /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */ function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
        }
        /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */ function minBy(array, iteratee) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined;
        }
        /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */ var multiply = createMathOperation(function(multiplier, multiplicand) {
            return multiplier * multiplicand;
        }, 1);
        /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */ var round = createRound("round");
        /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */ var subtract = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend;
        }, 0);
        /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */ function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0;
        }
        /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */ function sumBy(array, iteratee) {
            return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0;
        }
        /*------------------------------------------------------------------------*/ // Add methods that return wrapped values in chain sequences.
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        // Add aliases.
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        // Add methods to `lodash.prototype`.
        mixin(lodash, lodash);
        /*------------------------------------------------------------------------*/ // Add methods that return unwrapped values in chain sequences.
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt1;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        // Add aliases.
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
            var source = {};
            baseForOwn(lodash, function(func, methodName) {
                if (!hasOwnProperty.call(lodash.prototype, methodName)) source[methodName] = func;
            });
            return source;
        }(), {
            "chain": false
        });
        /*------------------------------------------------------------------------*/ /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */ lodash.VERSION = VERSION;
        // Assign default placeholders.
        arrayEach([
            "bind",
            "bindKey",
            "curry",
            "curryRight",
            "partial",
            "partialRight"
        ], function(methodName) {
            lodash[methodName].placeholder = lodash;
        });
        // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
        arrayEach([
            "drop",
            "take"
        ], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n) {
                n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
                var result = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
                if (result.__filtered__) result.__takeCount__ = nativeMin(n, result.__takeCount__);
                else result.__views__.push({
                    "size": nativeMin(n, MAX_ARRAY_LENGTH),
                    "type": methodName + (result.__dir__ < 0 ? "Right" : "")
                });
                return result;
            };
            LazyWrapper.prototype[methodName + "Right"] = function(n) {
                return this.reverse()[methodName](n).reverse();
            };
        });
        // Add `LazyWrapper` methods that accept an `iteratee` value.
        arrayEach([
            "filter",
            "map",
            "takeWhile"
        ], function(methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee) {
                var result = this.clone();
                result.__iteratees__.push({
                    "iteratee": getIteratee(iteratee, 3),
                    "type": type
                });
                result.__filtered__ = result.__filtered__ || isFilter;
                return result;
            };
        });
        // Add `LazyWrapper` methods for `_.head` and `_.last`.
        arrayEach([
            "head",
            "last"
        ], function(methodName, index) {
            var takeName = "take" + (index ? "Right" : "");
            LazyWrapper.prototype[methodName] = function() {
                return this[takeName](1).value()[0];
            };
        });
        // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
        arrayEach([
            "initial",
            "tail"
        ], function(methodName, index) {
            var dropName = "drop" + (index ? "" : "Right");
            LazyWrapper.prototype[methodName] = function() {
                return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
        });
        LazyWrapper.prototype.compact = function() {
            return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
            return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
            return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
            if (typeof path == "function") return new LazyWrapper(this);
            return this.map(function(value) {
                return baseInvoke(value, path, args);
            });
        });
        LazyWrapper.prototype.reject = function(predicate) {
            return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
            start = toInteger(start);
            var result = this;
            if (result.__filtered__ && (start > 0 || end < 0)) return new LazyWrapper(result);
            if (start < 0) result = result.takeRight(-start);
            else if (start) result = result.drop(start);
            if (end !== undefined) {
                end = toInteger(end);
                result = end < 0 ? result.dropRight(-end) : result.take(end - start);
            }
            return result;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH);
        };
        // Add `LazyWrapper` methods to `lodash.prototype`.
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) return;
            lodash.prototype[methodName] = function() {
                var value = this.__wrapped__, args = isTaker ? [
                    1
                ] : arguments, isLazy = value instanceof LazyWrapper, iteratee = args[0], useLazy = isLazy || isArray(value);
                var interceptor = function(value) {
                    var result = lodashFunc.apply(lodash, arrayPush([
                        value
                    ], args));
                    return isTaker && chainAll ? result[0] : result;
                };
                if (useLazy && checkIteratee && typeof iteratee == "function" && iteratee.length != 1) // Avoid lazy use if the iteratee has a "length" value other than `1`.
                isLazy = useLazy = false;
                var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
                if (!retUnwrapped && useLazy) {
                    value = onlyLazy ? value : new LazyWrapper(this);
                    var result = func.apply(value, args);
                    result.__actions__.push({
                        "func": thru,
                        "args": [
                            interceptor
                        ],
                        "thisArg": undefined
                    });
                    return new LodashWrapper(result, chainAll);
                }
                if (isUnwrapped && onlyLazy) return func.apply(this, args);
                result = this.thru(interceptor);
                return isUnwrapped ? isTaker ? result.value()[0] : result.value() : result;
            };
        });
        // Add `Array` methods to `lodash.prototype`.
        arrayEach([
            "pop",
            "push",
            "shift",
            "sort",
            "splice",
            "unshift"
        ], function(methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash.prototype[methodName] = function() {
                var args = arguments;
                if (retUnwrapped && !this.__chain__) {
                    var value = this.value();
                    return func.apply(isArray(value) ? value : [], args);
                }
                return this[chainName](function(value) {
                    return func.apply(isArray(value) ? value : [], args);
                });
            };
        });
        // Map minified method names to their real names.
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
                var key = lodashFunc.name + "";
                if (!hasOwnProperty.call(realNames, key)) realNames[key] = [];
                realNames[key].push({
                    "name": methodName,
                    "func": lodashFunc
                });
            }
        });
        realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [
            {
                "name": "wrapper",
                "func": undefined
            }
        ];
        // Add methods to `LazyWrapper`.
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        // Add chain sequence methods to the `lodash` wrapper.
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        // Add lazy aliases.
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) lodash.prototype[symIterator] = wrapperToIterator;
        return lodash;
    };
    /*--------------------------------------------------------------------------*/ // Export lodash.
    var _ = runInContext();
    // Some AMD build optimizers, like r.js, check for condition patterns like:
    if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        // Expose Lodash on the global object to prevent errors when Lodash is
        // loaded by a script tag in the presence of an AMD loader.
        // See http://requirejs.org/docs/errors.html#mismatch for more details.
        // Use `_.noConflict` to remove Lodash from the global object.
        root._ = _;
        // Define as an anonymous module so, through path mapping, it can be
        // referenced as the "underscore" module.
        define(function() {
            return _;
        });
    } else if (freeModule) {
        // Export for Node.js.
        (freeModule.exports = _)._ = _;
        // Export for CommonJS support.
        freeExports._ = _;
    } else // Export to the global object.
    root._ = _;
}).call(this);

});

parcelRequire.register("cHkVQ", function(module, exports) {
"use strict";
// ref: https://github.com/tc39/proposal-global
var getGlobal = function() {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== "undefined") return self;
    if (typeof window !== "undefined") return window;
    if (typeof global !== "undefined") return global;
    throw new Error("unable to locate global object");
};
var global = getGlobal();
module.exports = exports = global.fetch;
// Needed for TypeScript and Webpack.
if (global.fetch) exports.default = global.fetch.bind(global);
exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

});

var $a21f92c2d48e9b2b$exports = {};
"use strict";
var $a21f92c2d48e9b2b$var$__importDefault = $a21f92c2d48e9b2b$exports && $a21f92c2d48e9b2b$exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty($a21f92c2d48e9b2b$exports, "__esModule", {
    value: true
});
$a21f92c2d48e9b2b$exports.Taggy = void 0;

const $a21f92c2d48e9b2b$var$wink_tokenizer_1 = $a21f92c2d48e9b2b$var$__importDefault((parcelRequire("52Krb")));

const $a21f92c2d48e9b2b$var$stopwords_iso_1 = $a21f92c2d48e9b2b$var$__importDefault((parcelRequire("68hxX")));

const $a21f92c2d48e9b2b$var$normalize_for_search_1 = $a21f92c2d48e9b2b$var$__importDefault((parcelRequire("7ZFLE")));

var $b3s9C = parcelRequire("b3s9C");
var $3c0234303b2190c1$exports = {};
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $3c0234303b2190c1$var$runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}($3c0234303b2190c1$exports);
try {
    regeneratorRuntime = $3c0234303b2190c1$var$runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = $3c0234303b2190c1$var$runtime;
    else Function("r", "regeneratorRuntime = r")($3c0234303b2190c1$var$runtime);
}


var $4a409d97e7483de1$exports = {};
"use strict";
/**
 * openthesaurus
 * Copyright (c) 2021 Marvin Schopf
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @copyright 2021 Marvin Schopf
 * @license Apache-2.0
 *
 */ var $4a409d97e7483de1$var$__awaiter = $4a409d97e7483de1$exports && $4a409d97e7483de1$exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var $4a409d97e7483de1$var$__generator = $4a409d97e7483de1$exports && $4a409d97e7483de1$exports.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
$4a409d97e7483de1$exports.__esModule = true;
$4a409d97e7483de1$exports.get = void 0;

var $cHkVQ = parcelRequire("cHkVQ");
function $4a409d97e7483de1$var$asyncForEach(array, callback) {
    return $4a409d97e7483de1$var$__awaiter(this, void 0, void 0, function() {
        var index;
        return $4a409d97e7483de1$var$__generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    index = 0;
                    _a.label = 1;
                case 1:
                    if (!(index < array.length)) return [
                        3 /*break*/ ,
                        4
                    ];
                    return [
                        4 /*yield*/ ,
                        callback(array[index], index, array)
                    ];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    index++;
                    return [
                        3 /*break*/ ,
                        1
                    ];
                case 4:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
function $4a409d97e7483de1$var$get(word, options) {
    return $4a409d97e7483de1$var$__awaiter(this, void 0, void 0, function() {
        var baseUrl, returnSimilar, returnBaseforms, response, responseJson, synsets, responseObject;
        var _this = this;
        return $4a409d97e7483de1$var$__generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    baseUrl = options != null && options != undefined && options.baseUrl != null && options.baseUrl.length >= 1 ? options.baseUrl : "https://www.openthesaurus.de/synonyme/search";
                    returnSimilar = options != null && options != undefined && options.similar != null && options.similar != true ? false : true;
                    returnBaseforms = options != null && options != undefined && options.baseform != null && options.baseform != true ? false : true;
                    return [
                        4 /*yield*/ ,
                        $cHkVQ.default(baseUrl + "?format=application/json&similar=" + returnSimilar.toString() + "&baseform=" + returnBaseforms.toString() + "&q=" + word)
                    ];
                case 1:
                    response = _a.sent();
                    if (response.status != 200) throw new Error("Error: " + response.status + " " + response.statusText);
                    return [
                        4 /*yield*/ ,
                        response.json()
                    ];
                case 2:
                    responseJson = _a.sent();
                    synsets = [];
                    return [
                        4 /*yield*/ ,
                        $4a409d97e7483de1$var$asyncForEach(responseJson.synsets, function(synset) {
                            return $4a409d97e7483de1$var$__awaiter(_this, void 0, void 0, function() {
                                return $4a409d97e7483de1$var$__generator(this, function(_a) {
                                    synsets.push(synset);
                                    return [
                                        2 /*return*/ 
                                    ];
                                });
                            });
                        })
                    ];
                case 3:
                    _a.sent();
                    responseObject = {
                        copyright: responseJson.metaData.copyright,
                        warning: responseJson.metaData.warning,
                        license: responseJson.metaData.license,
                        source: responseJson.metaData.source,
                        synsets: synsets,
                        similarTerms: responseJson.similarterms != null && responseJson.similarterms != undefined && responseJson.similarterms.length >= 1 ? responseJson.similarterms : [],
                        baseforms: responseJson.baseforms != null && responseJson.baseforms != undefined && responseJson.baseforms.length >= 1 ? responseJson.baseforms : []
                    };
                    return [
                        2 /*return*/ ,
                        responseObject
                    ];
            }
        });
    });
}
$4a409d97e7483de1$exports.get = $4a409d97e7483de1$var$get;


var $53ab241e01586fc6$exports = {};
$53ab241e01586fc6$exports = JSON.parse('{"tags":[{"category":"Herbs and Spices","keywords":["Rosemary","Parsley","Pepper","Thyme","Mint","Chilli","Basil","Dill"]},{"category":"Vegetables","keywords":["Potatoes","Cucumber","Garlic","Carrots","Spinach","Onion","Mushrooms"]},{"category":"Fish","keywords":["Salmon","Tuna","Red Snapper","Sardines","Herring","Flounder","Bass","Mackerel"]}]}');


class $a21f92c2d48e9b2b$var$Taggy {
    resetData() {
        this.mostFrequentTopTags = [];
        this.mostFrequentWords = [];
    }
    setInputField(inputField) {
        this.inputField = inputField;
        if (this.options.useSubmit && this.submitButton) return;
        else this.inputField.addEventListener("input", (event)=>{
            this.handleInputEventListener();
        });
    }
    setSubmitButton(submitButton) {
        this.submitButton = submitButton;
        this.submitButton.addEventListener("click", (event)=>{
            if (this.options.useSubmit) this.handleSubmitButtonEventListener();
        });
    }
    setLanguage(languageCode) {
        this.stopwords = $a21f92c2d48e9b2b$var$stopwords_iso_1.default[languageCode];
    }
    handleInputEventListener() {
        if (this.options.useSubmit) return;
        if (this.loaderElement) this.loaderElement.style.setProperty("display", "block");
        this.deleteTags();
        clearTimeout(this.timeout);
        // make a new timeout set to go off in 1000ms
        this.timeout = setTimeout(async ()=>{
            await this.processAndAddTags(this.inputField.value, this.outputField);
            this.loaderElement?.style.setProperty("display", "none");
        // this.addTags(result);
        }, this.options.waittime);
    }
    async handleSubmitButtonEventListener() {
        if (this.loaderElement) this.loaderElement.style.setProperty("display", "block");
        this.deleteTags();
        // set and hide loading-indicator
        clearTimeout(this.timeout);
        this.timeout = setTimeout(async ()=>{
            await this.processAndAddTags(this.inputField.value, this.outputField);
            if (this.loaderElement) this.loaderElement.style.setProperty("display", "none");
        }, this.options.waittime);
    }
    setOutputField(outputField) {
        // outputField.setAttribute("value", "");
        outputField.readOnly = true;
        outputField.value = "";
        this.outputField = outputField;
    }
    setFrequencyOutput(frequencyOutput) {
        this.frequencyOutput = frequencyOutput;
    }
    setOverrideOutput(overrideOutput) {
        this.overrideOutput = overrideOutput;
        this.overrideOutput.addEventListener("click", (event)=>{
            this.handleOverrideOutputEventListener(event);
        });
    }
    handleOverrideOutputEventListener(event) {
        const target = event.target;
        // prevent container above to be clickabe -> only tag-div itself
        if (event.target == event.currentTarget) return;
        if (target) this.addTags(target.innerHTML);
    }
    getOptions() {
        return this.options;
    }
    getGlossary() {
        return this.glossaryData;
    }
    setGlossary(glossaryToSet) {
        this.glossaryData = glossaryToSet;
    }
    setOption(option, value) {
        if (option == "useSubmit") {
            this.options.useSubmit = value;
            if (value) {
                this.setSubmitButton(this.submitButton);
                this.setInputField(this.inputField);
            } else this.setInputField(this.inputField);
        }
        if (option == "assignTop") this.options.assignTop = value;
        if (option == "openthesaurus") this.options.openthesaurus = value;
        if (option == "includeTop") this.options.includeTop = value;
    }
    getMostFrequentWords() {
        return this.mostFrequentWords;
    }
    async callOpenThesaurusAPI(inputArray) {
        let returnSet = [];
        // get synsets from openthesaurus?
        for await (const word of inputArray)await this.openthesaurus.get(word).then((response)=>{
            let optValues = [];
            // response.baseforms?
            if (response && response.synsets[0]?.terms) response.synsets[0].terms.forEach((term)=>{
                optValues.push((0, $a21f92c2d48e9b2b$var$normalize_for_search_1.default)(term.term));
            });
            returnSet = this.tokenize(this.filterStopWords(optValues).toString());
        });
        return returnSet;
    }
    async processAndAddTags(input, outputField) {
        this.deleteTags();
        let processedInput = await this.processInput(input);
        if (processedInput) {
            this.addTags(processedInput[0]);
            return Promise.resolve(true);
        }
        return Promise.reject(false);
    }
    addTags(input) {
        this.deleteTags();
        if (this.outputField.lastChild) this.outputField.removeChild(this.outputField.lastChild);
        this.outputField.setAttribute("value", input);
        this.outputField.value = input;
        if (this.options.messageNotFound == "" && (!input || input == "")) return;
        const taggyTag = document.createElement("div");
        taggyTag.classList.add("taggy-tag");
        if (!input || input == "") {
            input = this.options.messageNotFound;
            taggyTag.classList.add("tag-not-found");
        } else {
            // set override tags
            if (this.overrideOutput && this.mostFrequentTopTags) this.addOverrideOutput();
            // set most frequent words
            this.addFrequencyOutput();
        }
        taggyTag.innerText = input;
        this.outputField.appendChild(taggyTag);
    // }
    }
    addFrequencyOutput() {
        if (this.frequencyOutput) {
            let frequencyList = [];
            // delete previous added words
            while(this.frequencyOutput.firstChild)this.frequencyOutput.removeChild(this.frequencyOutput.firstChild);
            // add new words
            this.getMostFrequentWords().forEach((word)=>{
                let frequencySpan = document.createElement("span");
                frequencySpan.innerText = word;
                frequencySpan.classList.add("taggy-frequency");
                this.frequencyOutput?.appendChild(frequencySpan);
            });
        }
    }
    addOverrideOutput() {
        let topTags = [];
        Object.values(this.mostFrequentTopTags).forEach((element)=>topTags.push(element.category));
        if (this.overrideOutput) {
            if (topTags.length > 1) {
                this.overrideOutput.setAttribute("value", topTags.join(", "));
                topTags.forEach((tag)=>{
                    let taggyTagOverride = document.createElement("div");
                    taggyTagOverride.classList.add("taggy-tag", "taggy-override");
                    taggyTagOverride.innerText = tag;
                    this.overrideOutput.appendChild(taggyTagOverride);
                });
            }
        }
    }
    deleteTags() {
        // delete main tag
        if (this.outputField.lastChild) this.outputField.removeChild(this.outputField.lastChild);
        // delete override tags
        if (this.overrideOutput) while(this.overrideOutput.firstChild)this.overrideOutput.removeChild(this.overrideOutput.firstChild);
    }
    tokenize(input, type = "word") {
        let tokenizedItems = this.winkTokenizer.tokenize(input);
        let returnSet = [];
        let tokenizedWords = tokenizedItems.filter((item)=>{
            return item.tag === type;
        });
        tokenizedWords.forEach((element)=>{
            returnSet.push(element.value);
        });
        return returnSet;
    }
    normalize(inputArray) {
        let normalizedValues = [];
        for (const element of inputArray)normalizedValues.push((0, $a21f92c2d48e9b2b$var$normalize_for_search_1.default)(element));
        return normalizedValues;
    }
    filterStopWords(inputArray) {
        return inputArray.filter((item)=>!this.stopwords.includes(item.value));
    }
    async processInput(input) {
        this.resetData();
        // tokenize, filter out german stopwords and normalize input (remove umlaute and transform to lowercase)
        let tokenizedValues = this.normalize(this.filterStopWords(this.tokenize(input, "word")));
        // return if input is too small
        if (tokenizedValues.length < 1) return [];
        let enrichedInputValues = [];
        // don't call openthesaurus-API too often (-> results in too many requests error)
        if (this.options.openthesaurus && tokenizedValues.length < 20) enrichedInputValues = await this.callOpenThesaurusAPI(tokenizedValues);
        // flat out arrays
        enrichedInputValues = enrichedInputValues.flat().concat(tokenizedValues.flat());
        let glossaryTags = [];
        let combinedWordsReturnSet = [];
        // if INCLUDE-TOP is set -> add top tag
        for (const category of this.glossaryData.tags){
            if (this.options.includeTop) glossaryTags.push((0, $a21f92c2d48e9b2b$var$normalize_for_search_1.default)(category.category));
            for (const word of category.keywords)glossaryTags.push((0, $a21f92c2d48e9b2b$var$normalize_for_search_1.default)(word));
        }
        // check input for words with whitespaces and "-"
        for (const word1 of glossaryTags){
            if (word1.includes(" ") || word1.includes("-")) {
                if ((0, $a21f92c2d48e9b2b$var$normalize_for_search_1.default)(input).includes(word1)) combinedWordsReturnSet.push(word1);
            }
        }
        let returnValues = [];
        // look for matches in glossary
        for (const glossaryValue of glossaryTags){
            for (const inputValue of enrichedInputValues)if (inputValue == glossaryValue) returnValues.push(inputValue);
        }
        let finalSet = [
            ...combinedWordsReturnSet
        ].concat(returnValues);
        let topTagCount = [];
        let maxCount = 0;
        // if assignTop is set -> return top categegory
        if (this.options.assignTop) {
            let count = 0;
            // if includeTop ist set -> add top categories
            this.glossaryData.tags.forEach((category)=>{
                count = 0;
                finalSet.forEach((element)=>{
                    // if includeTop ist set -> add top categories
                    if ((0, $a21f92c2d48e9b2b$var$normalize_for_search_1.default)(category.category) == element) count += 1;
                    if (this.normalize(category.keywords).includes(element)) count += 1;
                });
                topTagCount.push({
                    category: category.category,
                    count: count
                });
                if (count > maxCount) maxCount = count;
            });
            // set most frequent top tags
            let groupedMostFrequentTopTags = (0, $b3s9C.groupBy)(topTagCount, "count");
            if (groupedMostFrequentTopTags[maxCount][0].count) this.mostFrequentTopTags = groupedMostFrequentTopTags[maxCount];
        }
        // set most frequent matches
        this.mostFrequentWords = $a21f92c2d48e9b2b$var$modeArray(finalSet);
        let finalValue = (0, $b3s9C.sample)(this.mostFrequentWords);
        // if assignTop is set -> return top categegory
        if (this.options.assignTop) {
            let topTags = [];
            Object.values(this.mostFrequentTopTags).forEach((element)=>{
                if (element.count) topTags.push(element.category);
            });
            let tempValue = (0, $b3s9C.sample)(topTags);
            if (tempValue) finalValue = tempValue;
        }
        return finalValue ? [
            finalValue
        ] : [
            ""
        ];
    }
    //  * @param submitButton Optional: Submit button to trigger processing instead of automatic behavior while typing
    //  * @param frequencyOutput Optional: Show frequency of identified tags
    //  * @param overrideOutput Optional: Show identified top tags with possibility to override default detection
    //  * @param loaderElement Optional: Add a loading indicator (spinner) that gets hidden on completion
    /**
     * Create a new instance of taggy
     * @param inputField Input field where user text goes
     * @param outputField Output field where the tags will show up
     * @param options Optional: Provide options for taggy's behaviour
     */ constructor(inputField, outputField, options){
        this.name = "taggy";
        this.mostFrequentWords = [];
        this.mostFrequentTopTags = [];
        this.timeout = null;
        this.options = {
            submitButton: undefined,
            frequencyOutput: undefined,
            overrideOutput: undefined,
            loaderElement: undefined,
            useSubmit: false,
            waittime: 1000,
            language: "en",
            assignTop: true,
            includeTop: false,
            messageNotFound: "No matching tag found",
            openthesaurus: false
        };
        // if options get passed to constructor -> merge with existing options-object
        this.options = {
            ...this.options,
            ...options
        };
        // set demo-data for glossary
        this.glossaryData = $53ab241e01586fc6$exports;
        if (options?.submitButton) {
            this.setSubmitButton(options.submitButton);
            this.options.useSubmit = true;
        } else {
            this.options.useSubmit = false;
            this.options.waittime = 500;
        }
        if (!inputField) throw new Error("No input-element provided for taggy");
        this.setInputField(inputField);
        if (!outputField) throw new Error("No output-element provided for taggy");
        this.outputField = outputField;
        if (options?.loaderElement) this.loaderElement = options.loaderElement;
        // this.submitButton = submitButton;
        this.winkTokenizer = new $a21f92c2d48e9b2b$var$wink_tokenizer_1.default();
        // set stopwords-language | defaults to en
        this.setLanguage(this.options.language);
        this.openthesaurus = $4a409d97e7483de1$exports;
        if (options?.frequencyOutput) this.frequencyOutput = options.frequencyOutput;
        if (options?.overrideOutput) this.setOverrideOutput(options.overrideOutput);
    }
}
$a21f92c2d48e9b2b$exports.Taggy = $a21f92c2d48e9b2b$var$Taggy;
function $a21f92c2d48e9b2b$var$enrichWithOpenThesaurus(inputArray) {
    let enrichedArray = [];
    for (const word of inputArray)// get baseforms from openthesaurus?
    $4a409d97e7483de1$exports.get(word).then((response)=>{
        if (response && response.baseforms) enrichedArray.push(response.baseforms);
    });
    return enrichedArray;
}
// return an array of mode element(s) -> highest occurrences
function $a21f92c2d48e9b2b$var$modeArray(array) {
    if (array.length == 0) return null;
    var modeMap = {}, maxCount = 1, modes = [];
    for(var i = 0; i < array.length; i++){
        var el = array[i];
        if (modeMap[el] == null) modeMap[el] = 1;
        else modeMap[el]++;
        if (modeMap[el] > maxCount) {
            modes = [
                el
            ];
            maxCount = modeMap[el];
        } else if (modeMap[el] == maxCount) {
            modes.push(el);
            maxCount = modeMap[el];
        }
    }
    return modes;
}


var $b18ee538a1ef55e3$exports = {};
$b18ee538a1ef55e3$exports = JSON.parse('{"tags":[{"category":"Print-Abo","keywords":["printausgabe","gedruckt","postkasten","zeitung"]},{"category":"Online-Abo","keywords":["website","kommentarfunktion","forum"]},{"category":"ePaper-Abo","keywords":["eReader","kindle","tolino","cloud","download","connection","error"]},{"category":"Nachsendeauftrag","keywords":["nachsendung","urlaub","umzug","reise","verreisen","ausland","adresse"]},{"category":"Reklamation","keywords":["beschwerde","beschweren","\xe4rgerlich","frechheit","unversch\xe4mt","verz\xf6gert","nicht gekommen","verschwunden"]}]}');


var $8e59844428161339$exports = {};
$8e59844428161339$exports = JSON.parse('{"tags":[{"category":"Food","keywords":["A la carte","A la grecque","A point","Acidulation","Aerate","Afternoon Tea","A\xefoli","Al dente","Allemande sauce","Andouille sausage","Apple Pie","Arborio rice","Aromatics","Asiago cheese","Aspic","Au gratin","Au jus","Au poivre","Au sec","Baguette","Bain Marie","Balsamic vinegar","Baozi","Barbecue","Barding","Barley","Basmati rice","Baste","B\xe9chamel","Beurre blanc","Bibimbap","Bind","Biryani","Bisque","black pepper","Blackcurrants","Blanch","Blanched almonds","Blanching","Boar","Bolognese","Bordelaise","B\xf6rek","Borscht","Bouquet Garni","Braise","Braising","Braising liquid","Brining","Brown stock","Brownies","Bruschetta","Bulgogi","Bulgur wheat","Burger","Burrito","Candied ginger","Cannellini beans","Capers","Caramelize","carbonara","Carnitas","Cellophane Noodles","Ceviche","Cheddar","Cheeseburger","Chervil","Chiffonade","chipotle chile sauce","Chipotle pepper","Chop","Chorizo","Churrasco","Churros","Chutney","Clever, Creative Cooks","Coconut milk","Cognac","Cointreau","Compote","Concasse","Confit","Consomm\xe9","Contemporary sauces","Cookie","Cool Cooks","Coq Au Vin","Coriander","Coring","Coulis","Couscous","Cracklings","Cream","Cr\xe8me fra\xeeche","Croissant","Croquette","Cumin","Cupcake","Cure","Curry","Dashi","Deglaze","Degrease","Demi-glace","Derivative sauces","Dice","Dijon mustard","Ditalini pasta","Dondurma","Doughnut","Dredging","Dress","Dried currants","Dried mushrooms","Dried tart cherries","Dropping Consistency","Dry mustard","Dry red wine","Dry white wine","Duck sausages","Durian","\xc9clair","Effiler","Emincer","Emulsion","Escabeche","Escarole","Escoffier","Espagnole sauce","Essence","Fajitas","Fennel","Feta","Fillet","Filo Pastry","Fish and Chips","Flambe","Flash point","Fold","Fond","Fondue","Foundation sauce","Freezing","Frenched","Frenching","Fried Chicken","Frozen Yogurt","Fruits de Mer","Fudge","Fumet","Galantine","Galette","Game sausages","Garbanzo beans","Gazpacho","Ginger","Glace","Glaze","Gluten-free","Gnocchi","Gorgonzola","Goulash","Green peppercorn mustard","Green peppercorns","Grillades","Grilled Cheese","Grits","Gruy\xe9re cheese","Guacamole","Gumbo","Gyoza","Harissa","Heavy cream","Herbes de Provence","Herbs","Hollandaise sauce","Hummus","Hungarian paprika","Infuse","Infusion","Involtini","Irradiation","Isinglass","Jacquarding","Japanese bread crumbs","Japonica rice","Jeon","Jeroboam","Jiaozi","Julienne","Juniper berries","Jus","Jus lie","Jus li\xe9","Kalamata olives","Kale","Kielbasa","Kimbap","Kimchi","Kipper","Kirsch","Kissing Crust","Kitchen twine","Kombu","Lactobacillus","Larding","Lasagna","Leek","Lemongrass","Liaison","Loose-bottom tin","Lukewarm","Mac and Cheese","Macaroni","Macarons","Macerate","Madeira","Mahogany rice","Maldon salt","Manchego cheese","Marinara","Marinate","Marsala","Merlot","Mesclun","Mignonette","Milkshake","Mince","Minestrone","Mirepoix","Mirin","Mise en place","Miso","Miso Soup","Mochi","Mole","Mooncake","Morel","Mother","Mother sauces or\xa0Grand sauces","Mozzarella","Naan","Nachos","Nap","Nappe","Napp\xe9","Napper","Needling","Nori","Nougat","Nutmeg","Nutraceutical","Oeuf","Oignon brule","Oil-cured olives","Olive oil","Onigiri","Ort","Ouzo","Pad Thai","Paella","Pan sauce","Panfry","Paprika","Parboil","Parboiling","Parcooking","Parmigiano","Parmigiano Reggiano","Parsnips","Pasta ","P\xe2t\xe9","Paupiette","Pearl onions","Penne","peppercorns","Pepperoni","Persillade","Pesto","Pho","Piccata","Pilaf","Pinbones","Pine nuts","Piquant","Pizza","Pizza Napoletana","Poach","Poivrade","Polenta","Porcini","Port","Praline","Pulled Pork","Pure\xe9","Pur\xe9e","Quadriller","Quatre-epices","Quenelle","Quesadilla","Quiche","Ravigote","Ravioli","Reconstitute","Red chili paste","Reduce","Reduction sauce","Refresh","Remouillage","Render","Ricotta","Riesling wine","Risotto","Roast","Roma tomato","Rondeau","Roti","Roulade","Roux","Rub into","Saffron","Salsa","Sandwich","Sashimi","SauceGal","Saut\xe9","Saut\xe9ing","Scald","Scallions","Score","Sear","Shabu-shabu","Shallot","Sherry","Shiitake mushroom","Shiraz wine","Simmer","Skim","Soba","Soy sauce","Spaghetti","Spring Rolls","Springform pan","Sriracha sauce","Staling","Steam","Steep","Stew meat","Stilton cheese","Stir-fry","Stock","Sun-dried tomatoes","Sushi","Sweat","Swiss chard","Swiss roll tin","Tacos","Tagliatelle","Tamal","Tarragon vinegar","Tempering","Thai chile","Thai fish sauce","Tiramis\xf9","Toasted coconut shreds","Tofu","Tomato sauce","Tonkatsu","Tortilla","Tourner","Truffles","Trussing","Udon","Ultra-pasteurization","Unleavened","Vandyke","vegan","Vegetable oil","Vegetarian","Velout\xe9","Vermouth","Victual","Vinaigrette","Vol-au-Vent","Wagashi","Walnut oil","Wasabi","Water Bath","Whip","Whisk","white pepper","White stock","Whole-grain mustard","Wild mushrooms","Wonton","Xanthan gum","Xylitol","Yakiniku","Yakitori","Zest","Zinfandel wine"]},{"category":"Politics","keywords":["Absentee Voting","Act","Adjourn","Adjourn Sine Die","Administrative Assistant (AA)","Alliances","Amendment","Anarchism","Appropriation","Armed forces","Arms control","Arms race","Arms sales","Assistant Minority Leader","Authorization","Baiting","Balance of power","Balanced Budget","Bias","Bilateral relations","Bill","Bills","Budget","Calendar","Calendar Wednesday","Campaign","Candidate","Capitalism","Central government","Chairperson","Child soldiers","Citizen","Civil servants","Civil service","Civil war","Cloture","Co-Sponsor","Collectivism","Colonial countries","Colonialism","Colonization","Committee of the Whole","Committee Report","Communism","Concurrent Resolutions","Conflict research","Conflict resolution","Congress","Congressional Districts (CD)","Congressional Research Service","Conscientious objection","Conservatism","Constituency","Constituent","Continuing Resolution","Debate","Decolonization","Defence","Democracy","Dictatorship","Diplomacy","Diplomatic immunity","Disarmament","Discharge Petition","Discharge Resolution","East West relations","Economic sanctions","Editorial","Election","Election Day","Elections","Electoral College","Electoral systems","Electronic governance","Etiquette","Fascism","Federal","Federalism","Federation","Feudalism","Filibuster","Fiscal Year","Foreign aid","Foreign policy","Foreign relations","Franchise","G.O.P.","General Accounting Office","Germane","Global commons","Global public goods","Governance","Government","Government control","Government departments","Government policy","Grassroots","Gubernatorial Election","Guerrilla activities","Heads of state","Hopper","Humanitarian assistance","Hype","Imperialism","Incumbent","Independent","Institute of Medicine (IOM)","Intergovernmental organizations","Internal politics","International civil service","International conflicts","International cooperation","International organizations","International politics","International relations","International security","International solidarity","International tensions","Internationalism","Issues","Joint Committee","Joint Resolution","Joint Resolutions","Landslide","Law","Legislative Assistant (LA)","Liberalism","Liberation movements","Local government","Majority Leader","Majority Whip","Majority/Minority Leader","Mark-up","Marxism","Militarism","Minority Leader","Minority Whip","Monarchy","Motion to Recommit","Motion to Table","Mudslinging","Multilateral relations","Municipal government","National Academy of Sciences (NAS)","National Research Council (NRC)","Nationalism","Nazism","Neocolonialism","Neutrality","Newly independent states","Nominee","Non-partisan","Nonaligned countries","Nongovernmental organizations","Nonproliferation treaties","Nonviolence","North South relations","Ombudsman","Oppression","Override a Veto","Pacifism","Parliament","Parliamentary systems","Partisan","Party","Peace","Peace research","Peacebuilding","Peaceful coexistence","Peacekeeping","Peacemaking","Platform","Pluralism","Pocket Veto","Polemology","Political Action Committee (PAC)","Political behaviour","Political communication","Political conflicts","Political corruption","Political crises","Political doctrines","Political institutions","Political leadership","Political movements","Political participation","Political parties","Political philosophy","Political power","Political science","Political sociology","Political systems","Political theory","Politicians","Politics","Politics and government","Poll","Pollster","Precinct","President of the Senate","Private Bill","Protest movements","Public","Public administration","Public Bill","Quorum","Ranking Member","Ranking Minority Member","Ratified","Reauthorization","Recess","Referendum","Regional cooperation","Regional organizations","Regionalism","Republic","Resistance to oppression","Resolution","Revolutionary movements","Revolutions","Rhetoric","Rider","Riots","Self government","Separatism","Simple Resolutions","Socialism","South South relations","Speaker of the House","Sponsor","State","State security","Substitute Amendment","Suspension of the Rules","Table a Bill","Technocracy","The Corrections Calendar","The House Calendar","The Private Calendar","The Union Calendar","Totalitarianism","Unanimous Consent","Unbiased","Utopia","Veto","War","War devastated countries","War prisoners","War victims","Whip","Women in politics","Womens liberation movement","Womens suffrage","World government","World war"]},{"category":"Science","keywords":["Academies of science","Accident prevention","Accidents","Acid rain","Acids","Acoustics","Acupuncture","Adriatic Sea","Aegean Sea","Aerodynamics","Aerospace medicine","Ageing","Agricultural wastes","Agroclimatology","AIDS","Air pollution","Algebra","Algorithms","Anatomy","Animal behaviour","Animal diseases","Animal ecology","Animal genetics","Animal migration","Animal nutrition","Animal resources","Animal rights","Animal taxonomy","Animals","Antarctic Ocean","Antarctic regions","Anthropology","Applied research","Appropriate technology","Aquatic animals","Aquatic ecosystems","Aquatic environment","Aquatic plants","Aquifers","Arctic Ocean","Arctic regions","Arid zones","Arithmetic","Artificial procreation","Astronomical systems","Astronomy","Astrophysics","Atlantic Ocean","Atmosphere","Atmospheric circulation","Atmospheric pressure","Atomic structure","Automation","Avalanches","Bacteria","Bacteriology","Baltic Sea","Basins","Bathymetric charts","Bathymetry","Beaches","Benchmarking","Bering Sea","Biochemical analysis","Biochemicals","Biochemistry","Bioclimatology","Bioethics","Biogas","Biogenesis","Biogeochemistry","Biogeography","Biological adaptation","Biological control","Biological diversity","Biological effects","Biological research","Biology","Biomass","Biomass energy","Biomes","Biometrics","Biophysics","Biosphere","Biosphere reserves","Biosynthesis","Birds","Birth","Black holes","Black Sea","Blindness","Body temperature","Botanical gardens","Botany","Brackish water","Brain","Brain research","Breast feeding","Calculus","Calibration","Calories","Cancer","Carbon","Carbon dioxide","Carbonate rocks","Cardiovascular diseases","Cardiovascular systems","Caribbean Sea","Case studies","Caspian Sea","Causal analysis","Cause and effect","Caves","Celestial mechanics","Cell biology","Cells","Chemical analysis","Chemical compounds","Chemical effects","Chemical elements","Chemical kinetics","Chemical oceanography","Chemical processes","Chemical properties","Chemical research","Chemical sciences","Chemistry","China Sea","Choice of technology","Chromatographic analysis","Chromosomes","Climate","Climate change","Climate change adaptation","Climatic data","Climatic maps","Climatic zones","Climatology","Clinical medicine","Clinical psychology","Coal resources","Coastal erosion","Coastal waters","Coastal zones","Colour blindness","Combinatorial mathematics","Combustion","Comparative analysis","Continental drift","Continental shelf","Continents","Cooling","Coral reefs","Correlation","Corrosion","Cosmic matter","Cosmic radiation","Cosmology","Cross national analysis","Crystallography","Cyclones","Damage","Dangerous materials","Dead Sea","Deaf dumbness","Deafness","Death","Deep sea","Deltas","Dentistry","Desalination","Desert science","Desert soils","Desertification","Deserts","Design","Dietetics","Diffusion","Diffusion of technology","Digestive systems","Digital divide","Disabilities","Disaster prevention","Disaster relief","Disasters","Disease control","Diseases","Domestic animals","Drainage","Drainage basins","Drinking water","Drought","Drought control","Drug control","Drug policy","Drug psychotherapy","Drugs","Dunes","Dynamic oceanography","Earth (planet)","Earth sciences","Earth\'s crust","Earthquake prediction","Earthquakes","Ecological balance","Ecological crisis","Ecological research","Ecology","Economic geography","Economics of science","Ecosystems","Electric power","Electrical properties","Electricity","Electrochemistry","Electromagnetic waves","Electromagnetism","Electrons","Elementary particles","Embryology","Embryos","Empirical research","Endangered species","Endocrine systems","Endocrinology","Energy balance","Energy conservation","Energy consumption","Energy conversion","Energy economics","Energy policy","Energy resources","Energy shortages","Energy supply","Engineers","Entomology","Environment","Environmental awareness","Environmental chemistry","Environmental conservation","Environmental degradation","Environmental economics","Environmental engineering","Environmental ethics","Environmental health","Environmental impact assessment","Environmental indicators","Environmental legislation","Environmental management","Environmental monitoring","Environmental policy","Environmental quality","Environmental sciences","Environmental sciences and engineering","Environmental statistics","Environmentalists","Enzymes","Epidemics","Epidemiology","Equations","Erosion","Estuaries","Ethics of science","Ethnobotany","Eugenics","Eutrophication","Evaluation","Evaluation methods","Evaporation","Evapotranspiration","Evolution","Experimental chemistry","Experimental methods","Experiments","Extrapolation","Eyesight","Factor analysis","Fauna","Fermentation","Fertility","Field work","Fire protection","Fires","Fish","Fishery resources","Flood control","Floods","Flora","Flow","Fluid dynamics","Fluid mechanics","Food consumption","Food control","Food resources","Food shortages","Food supply","Forecasting","Forensic medicine","Forest conservation","Forest fires","Forest resources","Formative evaluation","Fossils","Freezing","Freshwater","Frost","Fuel resources","Functional analysis","Fundamental research","Fungi","Galaxies","Gas resources","Gases","Gems","Genes","Genetics","Genome","Geochemistry","Geochronology","Geodesy","Geodynamics","Geographers","Geographical data","Geographical exploration","Geography","Geography and oceanography","Geological data","Geology","Geomagnetism","Geometry","Geomorphology","Geophysics","Geothermal energy","Gerontology","Glaciers","Glaciology","Global warming","Graph theory","Grasslands","Gravitation","Groundwater","Health","Health economics","Health policy","Health statistics","Hearing","Heat","Heat transfer","Heating","Heredity","High technology","Higher technical personnel","Historical geography","History of science","Homeopathy","Hormones","Human activities effects","Human biology","Human ecology","Human genetics","Human geography","Human physiology","Human reproduction","Human species","Humid tropics","Humid zones","Humidity","Hydrobiology","Hydrocarbons","Hydrodynamics","Hydroelectric power","Hydrogen","Hydrogeological maps","Hydrogeology","Hydrological cycle","Hydrological data","Hydrological forecasting","Hydrological measurement","Hydrological networks","Hydrological research","Hydrologists","Hydrology","Hydrometeorology","Hydrosphere","Hygiene","Ice","Igneous rocks","Image formation","Immunology","Indian Ocean","Industrial pollution","Infectious diseases","Injuries","Inorganic chemistry","Inorganic compounds","Insects","Interdisciplinary approach","Interdisciplinary research","Interpolation","Interstellar space","Intertidal areas","Interviews","Ionization","Iron ores","Islands","Isotopes","Jungles","Karst","Know-how transfer","Laboratory animals","Lagoons","Lakes","Land forms","Land resources","Land subsidence","Landscape protection","Landslides","Laterites","Leprosy","Life cycle","Life sciences","Light","Limnology","Magnetism","Magnetochemistry","Magnetohydrodynamics","Maladjustment","Malaria","Mammals","Mangrove areas","Manmade disasters","Marine algae","Marine animals","Marine biology","Marine ecosystems","Marine environment","Marine fish","Marine geology","Marine geophysics","Marine life","Marine mineral resources","Marine pollution","Marine resources","Maternal and child health","Mathematical analysis","Mathematical logic","Mathematical models","Mathematicians","Mathematics","Mathematics and statistics","Measurement","Measuring methods","Mechanics","Mechanization","Medical ethics","Medical personnel","Medical profession","Medical rehabilitation","Medical research","Medical sciences","Medical technology","Medical treatment","Medicinal plants","Mediterranean Sea","Melting","Mental deficiency","Mental diseases","Mental health","Metabolism","Metallic deposits","Metamorphic rocks","Meteorites","Meteorological data","Meteorology","Methodology","Metric system","Metrology","Microbiology","Microchemistry","Microorganisms","Microwaves","Mineral deposits","Mineral resources","Mineralogy","Minerals","Mission oriented research","Molecular biology","Molecular physics","Molecular structure","Monitoring","Moon","Motor development","Mountains","Multivariate analysis","Mutation","Nanotechnology","Narcotic drugs","National parks","Natural disasters","Natural environment","Natural heritage","Natural history","Natural resources","Natural sciences","Natural selection","Nature conservation","Nature reserves","Nervous system diseases","Nervous systems","Neurobiology","Neurology","Neuropsychology","Neuroses","Nitrogen","Noise control","Noise pollution","Nonrenewable energy sources","Nonrenewable resources","North Sea","Nuclear energy","Nuclear explosions","Nuclear fusion","Nuclear physics","Number theory","Numerical analysis","Nursing","Nutrients","Nutrition","Nutritional diseases","Oases","Obesity","Observation","Occupational diseases","Occupational medicine","Ocean circulation","Ocean currents","Ocean exploration","Ocean floor","Ocean waves","Oceanographic data","Oceanographic measurement","Oceanographic research","Oceanography","Oceans","Oil pollution","Ophthalmology","Optics","Organ transplantation","Organic chemistry","Organic compounds","Organic matter","Organization of research","Ornithology","Oxygen","Ozone","Ozone depletion","Pacific Ocean","Palaeoclimatology","Palaeogeography","Palaeogeology","Palaeontology","Paramedical personnel","Parasitology","Pathology","Pediatrics","Permafrost","Personality disorders","Petroleum resources","Petrology","Pharmacists","Pharmacology","Phosphorus","Photochemistry","Photosynthesis","Physical chemistry","Physical geography","Physical oceanography","Physical processes","Physical properties","Physical sciences","Physicians","Physics","Physiological development","Physiological effects","Physiology","Phytochemistry","Phytogeography","Pilot projects","Plains","Planets","Plankton","Plant diseases","Plant ecology","Plant genetics","Plant nutrition","Plant physiology","Plant resources","Plant taxonomy","Plant transpiration","Plants","Plasma physics","Plastics","Polar regions","Political geography","Pollutants","Pollution","Pollution control","Pollution, disasters and safety","Polymers","Precambrian","Precipitation","Pregnancy","Prehistoric man","Preventive medicine","Primates","Probability theory","Proteins","Psychiatry","Psychoanalysis","Psychopathology","Psychophysiology","Psychoses","Psychotherapy","Puberty","Qualitative analysis","Quality control","Quantitative analysis","Quantum theory","Quasars","Quaternary","Questionnaires","Radiation","Radiation effects","Radiation protection","Radio waves","Radioactive pollution","Radioactive tracers","Radioactive wastes","Radioactivity","Radiobiology","Radiochemistry","Radiography","Radioisotopes","Rain","Random processes","Red Sea","Regime of waters","Regional geography","Regression analysis","Relativity","Renewable energy sources","Renewable resources","Reptiles","Research","Research and development","Research centres","Research councils","Research foundations","Research grants","Research priorities","Research programmes","Research projects","Research results","Research strategies","Research trends","Research work","Research workers","Resources conservation","Resources development","Resources evaluation","Resources exploration","Resources management","Respiratory systems","Rheology","River basins","River discharge","Rivers","Rocks","Runoff","Safety","Safety measures","Saline soils","Saline water","Salinity","Salt","Salt deposits","Sample surveys","Sampling","Sands","Sanitation","Satellites","Savannah","Schistosomiasis","Science","Science administration","Science and development","Science and research management","Science and society","Science budgets","Science finance","Science of science","Science philosophy","Science planning","Science policy","Science statistics","Scientific activities","Scientific approach","Scientific cooperation","Scientific development","Scientific expeditions","Scientific expenditure","Scientific innovations","Scientific methods","Scientific organizations","Scientific personnel","Scientific potential","Scientific programmes","Scientists","Sea ice","Sea level","Sea water","Seas","Sedimentary rocks","Sedimentation","Seismic areas","Seismicity","Seismology","Self evaluation","Sensory aids","Sensory systems","Set theory","Sewers","Shellfish","Simulation models","Skin diseases","Snow","Snowmelt","Soil conservation","Soil degradation","Soil erosion","Soil fertility","Soil maps","Soil mechanics","Soil moisture","Soil pollution","Soil resources","Soil sciences","Soil surveys","Soil water","Soils","Solar activity","Solar energy","Solar radiation","Solar system","Sound wave propagation","Space","Space biology","Space sciences","Species","Spectrochemical analysis","Speech disorders","Speech therapy","Sports medicine","Standardization","Stars","Statistical analysis","Statistical data","Statistical inference","Statistical mathematics","Statistics","Statistics presentation","Steam power","Steppe","Storms","Stratigraphy","Sulphur","Summative evaluation","Sun","Surface water","Surgery","Survey analysis","Surveys","Systems design","Systems of medicine","Taiga","Technicians","Technological change","Technological forecasting","Technological gap","Technology","Technology assessment","Technology transfer","Technology transfer services","Tectonics","Temperate zones","Temperature","Temperature distribution","Termites","Terrestrial ecosystems","Terrestrial environment","Terrestrial heat","Testing","Therapy","Thermal energy","Thermal properties","Thermal springs","Thermochemistry","Thermodynamics","Tidal energy","Tides","Time","Time series","Topography","Topology","Toxicology","Trace analysis","Trace elements","Traditional medicine","Traditional technology","Transport safety","Trees","Tropical diseases","Tropical zones","Trypanosomiasis","Tsetse flies","Tsunami","Tundra","Typology","Ultraviolet radiation","Universe","Unsaturated soils","Vaccination","Valleys","Variance analysis","Vegetation","Vegetation maps","Venereal diseases","Veterinary medicine","Virology","Viruses","Vitamins","Volcanic eruptions","Volcanic soils","Volcanoes","Volcanology","Waste disposal","Waste treatment","Waste water","Wastes","Water","Water analysis","Water balance","Water chemistry","Water conservation","Water consumption","Water currents","Water discharge","Water level","Water pollution","Water quality","Water resources","Water resources management","Water sampling","Water storage","Water supply","Water treatment","Water vapour","Watersheds","Wave mechanics","Weather","Weather forecasting","Weather modification","Wells","Wetlands","Wild animals","Wildlife conservation","Wind power","Winds","Women scientists","Womens health","X-rays","Zoogeography","Zoological gardens","Zoology"]},{"category":"Economy","keywords":["401a Retirement Plan","401k Retirement Plan","403b Retirement Plan","457 Retirement Plan","absolute advantage","abandonment of the gold standard","adaptive expectations","aggregate demand (AD)","aggregate supply (AS)","aggregation problem","agent","agricultural economics","allocative efficiency","antitrust law","applied economics","appropriate technology","arbitrage","Arrow\'s impossibility ","Austrian School","autarky","automatic stabilizer","autonomous consumption","average cost","average fixed cost","average variable cost","average tax rate","backward induction","balance of payments","balance of trade","balanced budget","bank","bankruptcy","barriers to entry","barter","behavioral economics","Bellman equation","bequest motive","Bertrand–Edgeworth model","Black–Scholes model","board of governors","bond","borrower","break-even","Bretton Woods system","budget deficit","budget set","budget surplus","big push model","business cycle","business economics","business sector","capacity utilization","capital","capital cost","capital flight","capital good","cartel","central bank","Certificate of ","Choice (CD or COD)","circular flow of income","circulation","classical economics","command economy","commerce","commodity","comparative advantage","Competition (CD or COD)","competition law","competitive market","complementary goods","compound interest","computational economics","consumer","consumer choice","consumer confidence","consumer price index (CPI)","consumer surplus","consumerism","consumption","consumption function","contract curve","contract theory","convexity","corporation","cost","cost curve","cost of living","cost overrun","cost-benefit analysis","Cost-of-production theory of ","credit bureau","credit card","credit score","credit rating","credit union","creditor","crowding out","cultural economics","currency","current ","cyclical unemployment","deadweight loss","debt","debtor","deficit spending","deflation","deflator","demand","demand curve","demand deposit","demand shock","demographic economics","depreciation","depression","deregulation","Diminishing marginal ","diminishing returns","discretionary income","disinflation","disposable ","dissaving","distribution","domestic final demand","domestic final supply (DFS)","duopoly","dynamic ","econometrics","economic costs","economic development","economic efficiency","economic equilibrium","economic growth","economic indicator","economic interdependence","economic model","economic profits","economic rent","economic shortage","economic surplus","economic system","economics","economies of agglomeration","economies of scale","economies of scope","economist","economy","effective demand","elastic demand","elasticity","engineering economics","entrepreneurship","environmental economics","equal opportunity","equilibrium","equilibrium price","equity","excess supply","exchange rate","excludability","expected utility hypothesis","expeditionary economics","experimental economics","externality","factors of production","federal funds rate target","Federal Open Market ","Federal Reserve ","finance","financial economics","financial institution","financial markets","financial planning","financial risk","financial transaction","fiscal policy","fixed costs","foreign exchange market","free market","free trade","frictional unemployment","full employment","full employment output (Y*)","functions of money","future value","GDP deflator","general equilibrium theory","gift economy","good","government revenue","government spending","gross domestic product (GDP)","growth recession","happiness economics","health economics","heterodox economics","household","housing starts","human capital","humanistic economics","hyperinflation","implicit cost","import quota","import","incentive","income","income distribution","income effect","increasing returns","indifference curve","Individual Retirement ","industrial organization","industry","inelastic demand","inflation","inflation rate","information economics","interest","interest rate","international economics","intertemporal choice","inventory bounce","investment","investment fund","invisible hand","IS–LM model","JEL classification codes","job hunting","joint product pricing","just price","Keynesian economics","labor","labor economics","laissez-fairei>","Law of Demand","Law of Diminishing Marginal Utility","law of increasing costs","law of supply","lease","lending","leprechaun economics","liability","loan","local tax","long run","long-run shutdown condition","long-term financing","loose money policy","macroeconomics","Major ","managerial economics","marginal cost","marginal product of labor","marginal propensity to ","marginal revenue","marginal utility","marginal value","marginalism","market","market basket","market economy","market failures","market structure","market production","market system","markets","mercantilism","microeconomics","mixed economy","monetarism","monetary economics","monetary policy","monetary system","money","money supply","monopolistic competition","monopoly","monopsony","mortgage","motivation","multiplier","mutual fund","Nash equilibrium","national tax","national wealth","natural monopoly","natural resource economics","need","nominal interest rates","nominal prices","nominal wages","non-convexity","non-price determinant of demand","non-rivalry","oligopoly","oligopsony","open-market operations","opportunity cost","organizational economics","Pareto efficiency","participation","partnership","per capita","perfect competition","personal property","physical capital","physiocracy","population economics","preference","price","price ceiling","price controls","price elasticity of demand","price elasticity of supply","price floor","price index","price level","pricing","prime rate","producer","producer price index","producer surplus","product differentiation","production","Production possibilities ","productive efficiency","production set","profit","profit motive","progressive tax","proportional tax","proxemics","public economics","public good","pure competition","purchasing power parity (PPP)","quantitative easing (QE)","quantity demanded","quantity supplied","quantity theory of money","quota","rate of profit","rational choice","rational expectations","rationing","Real income ","real interest rates","real GDP","real prices","real wages","recessions","recoveries","reflation","regional science","regressive tax","regulation","retail sales","returns to scale","revenue","rights","right to work law","risk aversion","rivalry","saving","scarcity","sector","service","service economy","shift work","short run","shortage","short-run shutdown condition","shrinkflation","social behavior","social choice theory","social mobility","socialist economics","sociality","socially optimal output level","socioeconomics","sole proprietorship","solidarity economy","stagflation","standard of living","state tax","steady-state economy","sticky prices","Stockholm School","structural unemployment","substitution effect","substitute good","sunk costs","supply","supply and demand","supply chain","supply curve","supply schedule","supply shock","supply-side economics","surplus","tariff","tax","tax rate","terms of trade","theory of the firm","thermoeconomics","time value of money","total cost","total surplus","trade","traditional economy","transaction cost","transport economics","trough","underemployment","unemployment","unit of account","Unitary elastic ","unskilled labor","urban economics","utilitarianism","utility","value","value-added tax (VAT)","variable costs","velocity of money","wage","want","wealth","wealth effect","welfare","welfare economics","willingness to accept (WTA)","willingness to pay (WTP)","yield","zero-sum game"]}]}');


var $24950bff9801a4eb$exports = {};
$24950bff9801a4eb$exports = JSON.parse('{"tags":[{"category":"Return / Refund","keywords":["return","shipment","reposit"]},{"category":"Feedback","keywords":["love","great work","fan"]},{"category":"Account Information","keywords":["information","account"]}]}');


let $d14dcff871c6b756$var$example1, $d14dcff871c6b756$var$example2, $d14dcff871c6b756$var$example3, $d14dcff871c6b756$var$language;
jQuery(function() {
    // create instance of taggy
    // let taggyObject = new Taggy();
    // set input field for taggy
    let inputFieldForTaggy = document.getElementById("taggyInput");
    // console.log(inputFieldForTaggy);
    // // set output field for taggy
    let outputFieldForTaggy = document.getElementById("taggyOutput");
    // taggyObject.setOutputField(outputFieldForTaggy);
    // console.log(outputFieldForTaggy);
    // set submit button taggy (optional)
    let submitButton = document.getElementById("taggySubmit");
    // get element for word count output (optional)
    let frequencySpan = document.getElementById("frequency");
    // get element for override-possibility output (optional)
    let overrideSpan = document.getElementById("override");
    // get loader element (optional)
    let loaderDiv = document.getElementById("taggyLoader");
    // create taggy instance
    let taggyObject = new (0, $a21f92c2d48e9b2b$exports.Taggy)(inputFieldForTaggy, outputFieldForTaggy, {
        overrideOutput: overrideSpan,
        loaderElement: loaderDiv,
        frequencyOutput: frequencySpan,
        submitButton: submitButton
    });
    // use submit button instead of auto-detection
    // taggyObject.options.useSubmit = true;
    // console.log(taggyObject.options);
    let optionsToggle = document.getElementById("optionsToggle");
    let glossaryToggle = $(".glossary-toggle");
    console.log("OPTIONS", taggyObject.getOptions());
    let taggyOptions = Object.keys(taggyObject.getOptions());
    // create glossary visualization
    let taggyGlossary = taggyObject.getGlossary();
    // console.log("taggyGlossary", taggyGlossary);
    // glossary-tab switching
    $(".tabs").click(function() {
        let tabContent = $(this).attr("data");
        let selectedTabId = $(this).attr("id");
        $(".tab-content").addClass("hidden");
        $(".tabs").removeClass("bg-rose-100");
        $("#" + tabContent).removeClass("hidden");
        $("#" + selectedTabId).addClass("bg-rose-100");
        switch(selectedTabId){
            case "tab-1":
                $d14dcff871c6b756$var$language = "en";
                $d14dcff871c6b756$var$example1 = "Pepperoni pizza is a classic favorite among pizza lovers. It is made with a tomato sauce base, cheese, and slices of pepperoni, a type of spicy salami. Pepperoni is a popular topping due to its spicy and savory flavor. Whether you're ordering in or making your own, it's a delicious and satisfying meal.";
                $d14dcff871c6b756$var$example2 = "Environmental awareness is the understanding and recognition of the impact of human actions on the natural world. It is important to be mindful of the ways in which our daily choices and habits can harm the environment and make efforts to reduce our impact. Simple actions such as reducing, reusing, and recycling can make a significant difference in preserving the planet for future generations. By raising environmental awareness, which is also part of the politics, we can work together to create a sustainable future for all.";
                $d14dcff871c6b756$var$example3 = "A growth recession is a period of economic decline characterized by low or negative GDP growth. It is different from a typical recession in which there is a significant decrease in economic activity, but still positive GDP growth. Economic growth recessions are often caused by a combination of factors such as global economic slowdown, tight monetary policies, and political instability. To mitigate the effects of growth recession, governments and central banks may implement policies such as monetary stimulus and fiscal stimulus.";
                switchGlossary("1", (0, (/*@__PURE__*/$parcel$interopDefault($8e59844428161339$exports))), $d14dcff871c6b756$var$language, $d14dcff871c6b756$var$example1, $d14dcff871c6b756$var$example2, $d14dcff871c6b756$var$example3);
                break;
            case "tab-2":
                $d14dcff871c6b756$var$language = "de";
                $d14dcff871c6b756$var$example1 = "Ich habe eure Zeitung bestellt und sie landet nie da, wo sie hin soll. Das ist eine Frechheit!";
                $d14dcff871c6b756$var$example2 = "Guten Tag. Wir verreisen ins Ausland. Deswegen bitte um Nachsendung der Zeitung an die neue Adresse: ...";
                $d14dcff871c6b756$var$example3 = "Hallo. Auf meinem ereader wird das PDF einfach nicht richtig dargestellt. Bitte um R\xfcckmeldung.";
                switchGlossary("2", (0, (/*@__PURE__*/$parcel$interopDefault($b18ee538a1ef55e3$exports))), $d14dcff871c6b756$var$language, $d14dcff871c6b756$var$example1, $d14dcff871c6b756$var$example2, $d14dcff871c6b756$var$example3);
                break;
            case "tab-3":
                switchGlossary("3", (0, (/*@__PURE__*/$parcel$interopDefault($24950bff9801a4eb$exports))), $d14dcff871c6b756$var$language, $d14dcff871c6b756$var$example1, $d14dcff871c6b756$var$example2, $d14dcff871c6b756$var$example3);
                presentInput = "";
                break;
        }
        function switchGlossary(number, glossaryData, language, example1, example2, example3) {
            $("#taggyInput").val(example1);
            $("#example1").data("text", example1);
            $("#example2").data("text", example2);
            $("#example3").data("text", example3);
            $(".button-example").removeClass("opacity-50 cursor-not-allowed");
            $(".button-example").prop("disabled", false);
            $("#example1").prop("disabled", true);
            $("#example1").addClass("opacity-50 cursor-not-allowed");
            taggyObject.deleteTags();
            $("#extras, #glossary-info").addClass("hidden");
            taggyObject.setGlossary(glossaryData);
            taggyObject.setLanguage(language);
            if (!$("#tab-content-" + number + " #container-glossary").length) {
                // console.log("#container-glossary IS NOT inside #tab-content-" + number);
                let glossaryDataPrint = JSON.stringify(glossaryData, null, 2); // spacing level = 2
                // $("#tab-content-" + number)
                //   .find(".glossary-content")
                //   .append($("<div></div>").attr("id", "container-glossary"));
                let preElement = $("<pre id='glossary-pre'></pre>").addClass("mt-2 rounded-md outline outline-offset-1 outline-2 outline-gray-400 text-[0.66rem] hidden").text(glossaryDataPrint);
                $("#glossary-pre").remove();
                $("#tab-content-" + number).find(".glossary-content").append(preElement);
            }
        }
    });
    $('input[type="checkbox"]').click(function() {
        if ($(this).prop("checked") == true) taggyObject.setOption($(this).val(), true);
        else taggyObject.setOption($(this).val(), false);
    });
    // create options visualization
    $.each(taggyOptions, function(index, value) {
        let labelText = " " + value;
        let nextElement = $(taggyOptions).eq(index + 1);
        let commentText = "";
        if (value.includes("waittime") || value.includes("categories") || value.includes("submitButton") || value.includes("language") || value.includes("frequencyOutput") || value.includes("overrideOutput") || value.includes("loaderElement") || value.includes("messageNotFound")) return;
        if (value.includes("useSubmit")) commentText = "true -> analyze input while typing / false -> use of submit button to process ('submitButton' has to be defined) | default: false";
        if (value.includes("assignTop")) commentText = "true -> return category of found keyword / false -> return the keyword itself | default: true";
        if (value.includes("includeTop")) commentText = "Include name of the categories themself as keywords | default: false";
        if (value.includes("openthesaurus")) commentText = "Add call to openthesaurus API to enrich words (experimental) | default: false";
        let checkbox = $("#container-options").append($("<input></input>").attr("type", "checkbox").attr("id", value).val(value)).append($("<label></label>").addClass("text-sm font-bold").text(labelText));
        if (commentText) checkbox.append($("<p></p>").addClass("text-justify text-xs").text(commentText));
        checkbox.append("</br>");
        if (taggyObject.options[value]) $("#" + value).prop("checked", true);
    });
    $('input[type="checkbox"]').click(function() {
        if ($(this).prop("checked") == true) taggyObject.setOption($(this).val(), true);
        else taggyObject.setOption($(this).val(), false);
    });
    // trigger submit button on pressing 'enter' inside textfield
    inputFieldForTaggy.addEventListener("keydown", function(event) {
        // click listener on button is called
        if (event.key == "Enter") submitButton.click();
    });
    $(submitButton).on("click", function() {
        $("#extras, #glossary-info").addClass("hidden");
    });
    $(".button-example").on("click", function() {
        taggyObject.deleteTags();
        $("#extras, #glossary-info").addClass("hidden");
        console.log("this", this);
        console.log("data-text", $(this).data("text"));
        $(".button-example").removeClass("opacity-50 cursor-not-allowed");
        $(".button-example").prop("disabled", false);
        $(this).prop("disabled", true);
        $(this).addClass("opacity-50 cursor-not-allowed");
        $("#taggyInput").val($(this).data("text"));
    });
    // options toggle functionality
    $(optionsToggle).on("click", function() {
        $("#container-options").toggleClass("hidden");
        $("#options-chevron-left").toggleClass("hidden");
        $("#options-chevron-down").toggleClass("hidden");
    });
    // glossary toggle functionality
    $(glossaryToggle).on("click", function() {
        console.log("glossaryToggle clicked");
        $("#glossary-pre").toggleClass("hidden");
        $("#glossary-chevron-left").toggleClass("hidden");
        $("#glossary-chevron-down").toggleClass("hidden");
    });
    // give every new tag a random color
    // $('div[type="checkbox"]').click(function () {
    //   if ($(this).prop("checked") == true) {
    //     taggyObject.setOption($(this).val(), true);
    //   } else {
    //     taggyObject.setOption($(this).val(), false);
    //   }
    // });
    // load tab 1 of glossary
    $("#tab-1").trigger("click");
    // check fore new inserted DOM-elements (tags)
    $("body").on("DOMNodeInserted", ".taggy-override", function(event) {
        $("#extras").removeClass("hidden");
        console.log("hit for", event.target);
        if (!($("#override-title").length > 0)) {
            const overrideTitle = $("<h3></h3>").attr("id", "override-title").text("Multiple possibilities found. Click to override main tag:").addClass("pr-8 text-sm col-span-1");
            $("#override").prepend(overrideTitle);
        }
    });
    $("body").on("DOMNodeInserted", ".taggy-frequency", function(event) {
        if (!($("#frequency-title").length > 0)) {
            const frequencyTitle = $("<h3></h3>").attr("id", "frequency-title").text("Most frequent words:").addClass("pr-8 text-sm");
            $("#frequency").prepend(frequencyTitle);
        }
    });
    $("body").on("DOMNodeInserted", ".tag-not-found", function(event) {
        $("#glossary-info").removeClass("hidden");
    });
});

})();
//# sourceMappingURL=index.9a05c704.js.map
