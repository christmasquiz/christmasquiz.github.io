(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/love-letter/love-letter.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/love-letter/love-letter.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"winners\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <h2>Love Letter</h2>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <h2>Round won by</h2>\r\n      <h3 *ngFor=\"let winner of winners\">\r\n        {{winner}}\r\n      </h3>\r\n      <h4>\r\n        <a (click)=\"refresh()\">Again!</a>\r\n      </h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"!winners\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <h2>Love Letter</h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n      <h3 [style.text-decoration]=\"isAlive(player1)\">Player 1 {{getFirstCardName(player1)}}</h3>\r\n      <h4 *ngIf=\"isActivePlayer(player1)\">Active player</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\" *ngFor=\"let card of player1.cards;let ind=index\">\r\n          <button title=\"{{getCardHoverText(player1,card)}}\" (click)=\"playCard(player1, card)\">card {{ind+1}}</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <h5>Played cards</h5>\r\n      </div>\r\n      <div class=\"row\" *ngFor=\"let playedCard of player1.playedCards\">\r\n        {{playedCard.name}}({{playedCard.score}})\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3\">\r\n      <h3 [style.text-decoration]=\"isAlive(player2)\">Player 2 {{getFirstCardName(player2)}}</h3>\r\n      <h4 *ngIf=\"isActivePlayer(player2)\">Active player</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\" *ngFor=\"let card of player2.cards;let ind=index\">\r\n          <button title=\"{{getCardHoverText(player2,card)}}\" (click)=\"playCard(player2,card)\">card {{ind+1}}</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <h5>Played cards</h5>\r\n      </div>\r\n      <div class=\"row\" *ngFor=\"let playedCard of player2.playedCards\">\r\n        {{playedCard.name}}({{playedCard.score}})\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3\">\r\n      <h3 [style.text-decoration]=\"isAlive(player3)\">Player 3 {{getFirstCardName(player3)}}</h3>\r\n      <h4 *ngIf=\"isActivePlayer(player3)\">Active player</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\" *ngFor=\"let card of player3.cards;let ind=index\">\r\n          <button title=\"{{getCardHoverText(player3,card)}}\" (click)=\"playCard(player3,card)\">card {{ind+1}}</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <h5>Played cards</h5>\r\n      </div>\r\n      <div class=\"row\" *ngFor=\"let playedCard of player3.playedCards\">\r\n        {{playedCard.name}}({{playedCard.score}})\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3\">\r\n      <h3 [style.text-decoration]=\"isAlive(player4)\">Player 4 {{getFirstCardName(player4)}}</h3>\r\n      <h4 *ngIf=\"isActivePlayer(player4)\">Active player</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\" *ngFor=\"let card of player4.cards;let ind=index\">\r\n          <button title=\"{{getCardHoverText(player4,card)}}\" (click)=\"playCard(player4,card)\">card {{ind+1}}</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <h5>Played cards</h5>\r\n      </div>\r\n      <div class=\"row\" *ngFor=\"let playedCard of player4.playedCards\">\r\n        {{playedCard.name}}({{playedCard.score}})\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n      <h3>Burned card</h3>\r\n      <h4>???</h4>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n      <h3>Deck</h3>\r\n      <h4>Number of cards remaining in deck: {{deck.length}}</h4>\r\n      <h4>Unplayed cards:</h4>\r\n      <h5 *ngFor=\"let summary of remainingCardsSummary\">\r\n        {{summary.name}}: {{summary.amount}} left\r\n      </h5>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"menusToShow\">\r\n    <h5>Played card actions</h5>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"menusToShow\">\r\n    <div *ngIf=\"menusToShow==='GUARD'\" class=\"col-lg-5\">\r\n      <div *ngIf=\"canBeTargeted(player1)\"><input type=\"radio\" name=\"playerNumberGuard\" [(ngModel)]=\"guardCardTarget\"\r\n                                                 value=\"player1\">Player 1<br></div>\r\n      <div *ngIf=\"canBeTargeted(player2)\"><input type=\"radio\" name=\"playerNumberGuard\" [(ngModel)]=\"guardCardTarget\"\r\n                                                 value=\"player2\">Player 2<br></div>\r\n      <div *ngIf=\"canBeTargeted(player3)\"><input type=\"radio\" name=\"playerNumberGuard\" [(ngModel)]=\"guardCardTarget\"\r\n                                                 value=\"player3\">Player 3<br></div>\r\n      <div *ngIf=\"canBeTargeted(player4)\"><input type=\"radio\" name=\"playerNumberGuard\" [(ngModel)]=\"guardCardTarget\"\r\n                                                 value=\"player4\">Player 4<br></div>\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='GUARD'\" class=\"col-lg-2\">\r\n      has a\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='GUARD'\" class=\"col-lg-5\">\r\n      <button (click)=\"performGuardAction('PRIEST')\">Priest</button>\r\n      <button (click)=\"performGuardAction('BARON')\">Baron</button>\r\n      <button (click)=\"performGuardAction('HANDMAIDEN')\">Handmaiden</button>\r\n      <button (click)=\"performGuardAction('PRINCE')\">Prince</button>\r\n      <button (click)=\"performGuardAction('KING')\">King</button>\r\n      <button (click)=\"performGuardAction('COUNTESS')\">Countess</button>\r\n      <button (click)=\"performGuardAction('PRINCESS')\">Princess</button>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"menusToShow==='PRIEST'\" class=\"col-lg-2\">\r\n      Look at card of player\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='PRIEST' && !lookingAtCardAsPriest\" class=\"col-lg-5\">\r\n      <div *ngIf=\"canBeTargeted(player1)\"><input type=\"radio\" name=\"playerNumberPriest\" [(ngModel)]=\"priestCardTarget\"\r\n                                                 value=\"player1\">Player 1<br></div>\r\n      <div *ngIf=\"canBeTargeted(player2)\"><input type=\"radio\" name=\"playerNumberPriest\" [(ngModel)]=\"priestCardTarget\"\r\n                                                 value=\"player2\">Player 2<br></div>\r\n      <div *ngIf=\"canBeTargeted(player3)\"><input type=\"radio\" name=\"playerNumberPriest\" [(ngModel)]=\"priestCardTarget\"\r\n                                                 value=\"player3\">Player 3<br></div>\r\n      <div *ngIf=\"canBeTargeted(player4)\"><input type=\"radio\" name=\"playerNumberPriest\" [(ngModel)]=\"priestCardTarget\"\r\n                                                 value=\"player4\">Player 4<br></div>\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='PRIEST' && !lookingAtCardAsPriest\" class=\"col-lg-2\">\r\n      <button (click)=\"performPriestAction()\">Look</button>\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='PRIEST' && lookingAtCardAsPriest\" class=\"col-lg-2\">\r\n      <button (click)=\"endPriestAction()\">Okay, I've seen it</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"menusToShow==='BARON'\" class=\"col-lg-2\">\r\n      Compare for highest hand card value with\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='BARON'\" class=\"col-lg-5\">\r\n      <div *ngIf=\"canBeTargeted(player1)\"><input type=\"radio\" name=\"playerNumberBaron\" [(ngModel)]=\"baronCardTarget\"\r\n                                                 value=\"player1\">Player 1<br></div>\r\n      <div *ngIf=\"canBeTargeted(player2)\"><input type=\"radio\" name=\"playerNumberBaron\" [(ngModel)]=\"baronCardTarget\"\r\n                                                 value=\"player2\">Player 2<br></div>\r\n      <div *ngIf=\"canBeTargeted(player3)\"><input type=\"radio\" name=\"playerNumberBaron\" [(ngModel)]=\"baronCardTarget\"\r\n                                                 value=\"player3\">Player 3<br></div>\r\n      <div *ngIf=\"canBeTargeted(player4)\"><input type=\"radio\" name=\"playerNumberBaron\" [(ngModel)]=\"baronCardTarget\"\r\n                                                 value=\"player4\">Player 4<br></div>\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='BARON'\" class=\"col-lg-2\">\r\n      <button (click)=\"endBaronAction()\">FIGHT</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"menusToShow==='PRINCE'\" class=\"col-lg-2\">\r\n      Player that has to discard hand\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='PRINCE'\" class=\"col-lg-5\">\r\n      <div *ngIf=\"canBeTargetedByPrince(player1)\"><input type=\"radio\" name=\"playerNumberPrince\"\r\n                                                         [(ngModel)]=\"princeCardTarget\" value=\"player1\">Player 1<br>\r\n      </div>\r\n      <div *ngIf=\"canBeTargetedByPrince(player2)\"><input type=\"radio\" name=\"playerNumberPrince\"\r\n                                                         [(ngModel)]=\"princeCardTarget\" value=\"player2\">Player 2<br>\r\n      </div>\r\n      <div *ngIf=\"canBeTargetedByPrince(player3)\"><input type=\"radio\" name=\"playerNumberPrince\"\r\n                                                         [(ngModel)]=\"princeCardTarget\" value=\"player3\">Player 3<br>\r\n      </div>\r\n      <div *ngIf=\"canBeTargetedByPrince(player4)\"><input type=\"radio\" name=\"playerNumberPrince\"\r\n                                                         [(ngModel)]=\"princeCardTarget\" value=\"player4\">Player 4<br>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='PRINCE'\" class=\"col-lg-2\">\r\n      <button (click)=\"endPrinceAction()\">Discard</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"menusToShow==='KING'\" class=\"col-lg-2\">\r\n      Swap hands with\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='KING'\" class=\"col-lg-5\">\r\n      <div *ngIf=\"canBeTargeted(player1)\"><input type=\"radio\" name=\"playerNumberKing\" [(ngModel)]=\"kingCardTarget\"\r\n                                                 value=\"player1\">Player 1<br></div>\r\n      <div *ngIf=\"canBeTargeted(player2)\"><input type=\"radio\" name=\"playerNumberKing\" [(ngModel)]=\"kingCardTarget\"\r\n                                                 value=\"player2\">Player 2<br></div>\r\n      <div *ngIf=\"canBeTargeted(player3)\"><input type=\"radio\" name=\"playerNumberKing\" [(ngModel)]=\"kingCardTarget\"\r\n                                                 value=\"player3\">Player 3<br></div>\r\n      <div *ngIf=\"canBeTargeted(player4)\"><input type=\"radio\" name=\"playerNumberKing\" [(ngModel)]=\"kingCardTarget\"\r\n                                                 value=\"player4\">Player 4<br></div>\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='KING'\" class=\"col-lg-2\">\r\n      <button (click)=\"endKingAction()\">Discard</button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz-question-image/quiz-question-image.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz-question-image/quiz-question-image.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-md-12\">\r\n    <a [href]=\"questionImage\" class=\"thumbnail\" target=\"_blank\">\r\n      <img alt=\"100%x180\" data-src=\"holder.js/100%x180\" [src]=\"questionImage\"></a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"!isSolved\">\r\n  <div class=\"col-xs-offset-3 col-xs-9 col-md-offset-3 col-md-9\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"antwoord\" [(ngModel)]=\"resolution\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-offset-3 col-xs-9 col-md-offset-3 col-md-9\">\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"validateAnswer()\">Antwoord</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"!isSolved\">\r\n  <div class=\"col-xs-offset-3 col-xs-9 col-md-offset-3 col-md-9\">\r\n        <button class=\"btn btn-primary btn-lg\" type=\"button\" (click)=\"showHint()\">De grote ik-ben-dom-knop</button>\r\n  </div>\r\n  <div *ngIf=\"showhint\" class=\"col-xs-offset-3 col-xs-9 col-md-offset-3 col-md-9\">\r\n        <h2>{{hint}}</h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"isSolved\">\r\n  <div class=\"col-xs-offset-3 col-xs-6 col-md-offset-3 col-md-6\">\r\n    <h3>{{answer[0]}}</h3>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-offset-6 col-xs-4 col-md-offset-6 col-md-4\">\r\n    <span *ngIf=\"isSolved\" class=\"glyphicon glyphicon-ok\" style=\"font-size: 100px;  color: green;\"\r\n          aria-hidden=\"true\"></span>\r\n    <span *ngIf=\"!isSolved\" class=\"glyphicon glyphicon-remove\" style=\"font-size: 100px; color: red;\"\r\n          aria-hidden=\"true\"></span>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz-round-crossword/quiz-round-crossword.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz-round-crossword/quiz-round-crossword.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<quiz-round-image *ngIf=\"questions\"\r\n                  [providedQuestions]=\"questions\"\r\n                  (questionSolved)=\"handleQuestionSolved($event)\">\r\n</quiz-round-image>\r\n\r\n<td>\r\n  <div>\r\n    <table style=\"table-layout: fixed;width:125%\">\r\n      <tbody>\r\n      <tr *ngFor=\"let question of questions\">\r\n        <td style=\"background:black\" *ngFor=\"let blackBefore of getBlacksBefore(question)\" class=\"\">\r\n          &nbsp;\r\n        </td>\r\n        <td *ngFor=\"let white of getWhites(question); let ind=index;\">\r\n          <input style=\"text-transform: uppercase\"\r\n                 size=\"1\"\r\n                 disabled value=\"{{getValue(question, ind)}}\"\r\n                 [ngStyle]=\"{'background-color': getWhiteColor(white)}\">\r\n        </td>\r\n        <td style=\"background:black\" *ngFor=\"let blackAfter of getBlacksAfter(question)\">\r\n          &nbsp;\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</td>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz-round-image/quiz-round-image.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz-round-image/quiz-round-image.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-1 col-md-1\"></div>\r\n    <div class=\"col-xs-3 col-md-1\" *ngFor=\"let question of questions; let ind = index;\">\r\n      <a (click)=\"goToQuestion(ind)\">\r\n        <span class=\"glyphicon glyphicon-ok\" style=\"font-size: 50px;\" aria-hidden=\"true\" [style.color]=\"isSolved(ind)\"></span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <quiz-question-image\r\n    [questionImage]=\"getCurrentImageUrl()\"\r\n    [solvedBefore]=\"isCurrentQuestionSolvedBefore()\"\r\n    [answer]=\"getCurrentQuestionAnswer()\"\r\n    [hint]=\"getCurrentQuestionHint()\"\r\n    (answeredCorrectly)=\"currentQuestionSolved()\">\r\n  </quiz-question-image>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-offset-1 col-xs-1 col-md-offset-1 col-md-1\">\r\n      <a (click)=\"previousQuestion()\" *ngIf=\"currentQuestion > 0\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\" style=\"font-size: 75px;\" aria-hidden=\"true\"></span>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-offset-6 col-xs-1 col-md-offset-9 col-md-1\">\r\n      <a (click)=\"nextQuestion()\" *ngIf=\"currentQuestion < questions.length -1\">\r\n        <span class=\"glyphicon glyphicon-chevron-right\" style=\"font-size: 75px;\" aria-hidden=\"true\"></span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz-round-overview/quiz-round-overview.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz-round-overview/quiz-round-overview.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h1>Overzicht rondes</h1>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h2>Klassieke rondes</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\" *ngFor=\"let round of classicrounds\">\n      <a [routerLink]=\"['/classic', round.roundName]\">\n        <img class=\"img-circle\" style=\"border: 1px black solid\" [src]=\"getRoundAvatar(round)\" width=\"140\" height=\"140\">\n      </a>\n      <h2>{{round.roundName}}</h2>\n      <p>{{getClassicRoundOmschrijving(round.roundName)}}</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h2>Galerij rondes</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\" *ngFor=\"let round of imagerounds\">\n      <a [routerLink]=\"['/image', round.roundName]\">\n        <img class=\"img-circle\" style=\"border: 1px black solid\" [src]=\"getRoundAvatar(round)\" width=\"140\" height=\"140\">\n      </a>\n      <h2>{{round.roundName}}</h2>\n      <p>{{getImageRoundOmschrijving(round.roundName)}}</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h2>Kruiswoordraadsel rondes</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\" *ngFor=\"let round of crosswordrounds\">\n      <a [routerLink]=\"['/image-crossword', round.roundName]\">\n        <img class=\"img-circle\" style=\"border: 1px black solid\" [src]=\"getRoundAvatar(round)\" width=\"140\" height=\"140\">\n      </a>\n      <h2>{{round.roundName}}</h2>\n      <p>{{getCrosswordRoundOmschrijving(round.roundName)}}</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h2>Rode draad rondes</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\" *ngFor=\"let round of rodedraadrounds\">\n      <a [routerLink]=\"['/rode-draad', round.roundName]\">\n        <img class=\"img-circle\" style=\"border: 1px black solid\" [src]=\"getRoundAvatar(round)\" width=\"140\" height=\"140\">\n      </a>\n      <h2>{{round.roundName}}</h2>\n      <p>{{getRodeDraadRoundOmschrijving(round.roundName)}}</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h2>Puzzelrondes</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\" *ngFor=\"let round of puzzlerounds\">\n      <a [routerLink]=\"['/puzzle', round.roundName]\">\n        <img class=\"img-circle\" style=\"border: 1px black solid\" [src]=\"getRoundAvatar(round)\" width=\"140\" height=\"140\">\n      </a>\n      <h2>{{round.roundName}}</h2>\n      <p>{{getPuzzleRoundOmschrijving(round.roundName)}}</p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz-round-puzzle/quiz-round-puzzle.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz-round-puzzle/quiz-round-puzzle.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>We zoeken vier antwoorden. Elk antwoord heeft vier puzzelstukken die je in de juiste richting wijzen</p>\n\n  <table class=\"table table-bordered\">\n    <tbody>\n    <tr *ngFor=\"let chunk of keywords\">\n      <td *ngFor=\"let keyword of chunk\">{{keyword}}</td>\n    </tr>\n    </tbody>\n  </table>\n\n  <h1>Correcte antwoorden:</h1>\n  <div>\n    <p *ngFor=\"let correctAnswer of correctAnswers\">\n      {{correctAnswer}}\n    </p>\n  </div>\n\n  <div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"antwoord\" [(ngModel)]=\"currentGuess\">\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"checkAnswer()\">Antwoord</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz-round-question/quiz-round-question.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz-round-question/quiz-round-question.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <div class=\"list-group-item\" *ngFor=\"let vraag of vragen; let ind = index;\" [style.background-color]=\"backgroundColor(ind)\" [style.color]=\"textColor(ind)\">\n    <h4 class=\"list-group-item-heading\">{{vraag.titel}}</h4>\n    <p class=\"list-group-item-text\" style=\"margin-bottom: 5px\">{{vraag.vraag}}</p>\n    <input *ngIf=\"vragen[ind].solved === false\" type=\"text\" class=\"form-control\" placeholder=\"antwoord\" [(ngModel)]=\"guesses[ind]\">\n    <button *ngIf=\"vragen[ind].solved === false\" class=\"btn btn-default\" type=\"button\" (click)=\"checkAnswer(ind)\">Antwoord</button>\n    <h3 *ngIf=\"vragen[ind].solved === true\">{{vraag.answer[0]}}</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <div class=\"list-group-item\" *ngFor=\"let vraag of vragen; let ind = index;\" [style.background-color]=\"backgroundColor(ind)\" [style.color]=\"textColor(ind)\">\n    <h4 class=\"list-group-item-heading\">{{vraag.titel}}</h4>\n    <p class=\"list-group-item-text\" style=\"margin-bottom: 5px\">{{vraag.vraag}}</p>\n    <input *ngIf=\"vragen[ind].solved === false\" type=\"text\" class=\"form-control\" placeholder=\"antwoord\" [(ngModel)]=\"guesses[ind]\">\n    <button *ngIf=\"vragen[ind].solved === false\" class=\"btn btn-default\" type=\"button\" (click)=\"checkAnswer(ind)\">Antwoord</button>\n    <h3 *ngIf=\"vragen[ind].solved === true\">{{vraag.answer[0]}}</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz-round-solved/quiz-round-solved.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz-round-solved/quiz-round-solved.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Gefeliciteerd, u heeft alle vragen van de ronde '{{roundName}}' opgelost</h1>\n  <div class=\"row\">\n    <div class=\"col-xs-offset-3 col-xs-6 col-md-offset-3 col-md-6\">\n      <img alt=\"100%x180\" data-src=\"holder.js/100%x180\" style=\"max-width:600px;width:100%\" [src]=\"getRoundSolvedImage()\">\n      <h4><i>{{getWinnerText()}}</i></h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-offset-3 col-xs-6 col-md-offset-3 col-md-6\">\n      <a [routerLink]=\"['/overview']\">Terug naar overzicht rondes</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz.component.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: QuizModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizModule", function() { return QuizModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quiz_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz.component */ "./src/app/quiz.component.ts");
/* harmony import */ var _quiz_question_image_quiz_question_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-question-image/quiz-question-image.component */ "./src/app/quiz-question-image/quiz-question-image.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _quiz_round_image_quiz_round_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz-round-image/quiz-round-image.component */ "./src/app/quiz-round-image/quiz-round-image.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _quiz_round_solved_quiz_round_solved_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz-round-solved/quiz-round-solved.component */ "./src/app/quiz-round-solved/quiz-round-solved.component.ts");
/* harmony import */ var _quiz_round_overview_quiz_round_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz-round-overview/quiz-round-overview.component */ "./src/app/quiz-round-overview/quiz-round-overview.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _quiz_round_question_quiz_round_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quiz-round-question/quiz-round-question.component */ "./src/app/quiz-round-question/quiz-round-question.component.ts");
/* harmony import */ var _love_letter_love_letter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./love-letter/love-letter.component */ "./src/app/love-letter/love-letter.component.ts");
/* harmony import */ var _quiz_round_crossword_quiz_round_crossword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quiz-round-crossword/quiz-round-crossword.component */ "./src/app/quiz-round-crossword/quiz-round-crossword.component.ts");
/* harmony import */ var _quiz_round_rode_draad_quiz_round_rode_draad_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./quiz-round-rode-draad/quiz-round-rode-draad.component */ "./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.ts");
/* harmony import */ var _quiz_round_puzzle_quiz_round_puzzle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./quiz-round-puzzle/quiz-round-puzzle.component */ "./src/app/quiz-round-puzzle/quiz-round-puzzle.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
















let QuizModule = class QuizModule {
};
QuizModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _quiz_component__WEBPACK_IMPORTED_MODULE_2__["QuizAppComponent"],
            _quiz_question_image_quiz_question_image_component__WEBPACK_IMPORTED_MODULE_3__["QuizQuestionImageComponent"],
            _quiz_round_image_quiz_round_image_component__WEBPACK_IMPORTED_MODULE_6__["QuizRoundImageComponent"],
            _quiz_round_solved_quiz_round_solved_component__WEBPACK_IMPORTED_MODULE_8__["QuizRoundSolvedComponent"],
            _quiz_round_overview_quiz_round_overview_component__WEBPACK_IMPORTED_MODULE_9__["QuizRoundOverviewComponent"],
            _quiz_round_question_quiz_round_question_component__WEBPACK_IMPORTED_MODULE_11__["QuizRoundQuestionComponent"],
            _quiz_round_crossword_quiz_round_crossword_component__WEBPACK_IMPORTED_MODULE_13__["QuizRoundCrosswordComponent"],
            _quiz_round_rode_draad_quiz_round_rode_draad_component__WEBPACK_IMPORTED_MODULE_14__["QuizRoundRodeDraadComponent"],
            _love_letter_love_letter_component__WEBPACK_IMPORTED_MODULE_12__["LoveLetterComponent"],
            _quiz_round_puzzle_quiz_round_puzzle_component__WEBPACK_IMPORTED_MODULE_15__["QuizRoundPuzzleComponent"]
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"] }
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["QuizAppRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ],
        bootstrap: [_quiz_component__WEBPACK_IMPORTED_MODULE_2__["QuizAppComponent"]]
    })
], QuizModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: QuizAppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizAppRoutes", function() { return QuizAppRoutes; });
/* harmony import */ var _quiz_round_image_quiz_round_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-round-image/quiz-round-image.component */ "./src/app/quiz-round-image/quiz-round-image.component.ts");
/* harmony import */ var _quiz_round_solved_quiz_round_solved_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz-round-solved/quiz-round-solved.component */ "./src/app/quiz-round-solved/quiz-round-solved.component.ts");
/* harmony import */ var _quiz_round_overview_quiz_round_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-round-overview/quiz-round-overview.component */ "./src/app/quiz-round-overview/quiz-round-overview.component.ts");
/* harmony import */ var _quiz_round_question_quiz_round_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-round-question/quiz-round-question.component */ "./src/app/quiz-round-question/quiz-round-question.component.ts");
/* harmony import */ var _love_letter_love_letter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./love-letter/love-letter.component */ "./src/app/love-letter/love-letter.component.ts");
/* harmony import */ var _quiz_round_crossword_quiz_round_crossword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz-round-crossword/quiz-round-crossword.component */ "./src/app/quiz-round-crossword/quiz-round-crossword.component.ts");
/* harmony import */ var _quiz_round_rode_draad_quiz_round_rode_draad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz-round-rode-draad/quiz-round-rode-draad.component */ "./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.ts");
/* harmony import */ var _quiz_round_puzzle_quiz_round_puzzle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quiz-round-puzzle/quiz-round-puzzle.component */ "./src/app/quiz-round-puzzle/quiz-round-puzzle.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








const QuizAppRoutes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: _quiz_round_overview_quiz_round_overview_component__WEBPACK_IMPORTED_MODULE_2__["QuizRoundOverviewComponent"] },
    { path: 'image/:quizname', component: _quiz_round_image_quiz_round_image_component__WEBPACK_IMPORTED_MODULE_0__["QuizRoundImageComponent"] },
    { path: 'image-crossword/:quizname', component: _quiz_round_crossword_quiz_round_crossword_component__WEBPACK_IMPORTED_MODULE_5__["QuizRoundCrosswordComponent"] },
    { path: 'rode-draad/:quizname', component: _quiz_round_rode_draad_quiz_round_rode_draad_component__WEBPACK_IMPORTED_MODULE_6__["QuizRoundRodeDraadComponent"] },
    { path: 'puzzle/:quizname', component: _quiz_round_puzzle_quiz_round_puzzle_component__WEBPACK_IMPORTED_MODULE_7__["QuizRoundPuzzleComponent"] },
    { path: 'classic/:quizname', component: _quiz_round_question_quiz_round_question_component__WEBPACK_IMPORTED_MODULE_3__["QuizRoundQuestionComponent"] },
    { path: ':quizname/solved', component: _quiz_round_solved_quiz_round_solved_component__WEBPACK_IMPORTED_MODULE_1__["QuizRoundSolvedComponent"] },
    { path: 'loveletter', component: _love_letter_love_letter_component__WEBPACK_IMPORTED_MODULE_4__["LoveLetterComponent"] }
];


/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! exports provided: QuizAppComponent, QuizModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quiz_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz.component */ "./src/app/quiz.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuizAppComponent", function() { return _quiz_component__WEBPACK_IMPORTED_MODULE_0__["QuizAppComponent"]; });

/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuizModule", function() { return _app_module__WEBPACK_IMPORTED_MODULE_1__["QuizModule"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




/***/ }),

/***/ "./src/app/love-letter/love-letter.component.ts":
/*!******************************************************!*\
  !*** ./src/app/love-letter/love-letter.component.ts ***!
  \******************************************************/
/*! exports provided: LoveLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoveLetterComponent", function() { return LoveLetterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let LoveLetterComponent = class LoveLetterComponent {
    constructor() {
        this.activePlayerIndex = 1;
        this.player1 = { name: "player1", active: true, alive: true, cards: [], playedCards: [], isProtectedByHandmaiden: false };
        this.player2 = { name: "player2", active: false, alive: true, cards: [], playedCards: [], isProtectedByHandmaiden: false };
        this.player3 = { name: "player3", active: false, alive: true, cards: [], playedCards: [], isProtectedByHandmaiden: false };
        this.player4 = { name: "player4", active: false, alive: true, cards: [], playedCards: [], isProtectedByHandmaiden: false };
        this.lookingAtCardAsPriest = false;
    }
    ngOnInit() {
        //16 cards
        this.cardList = [
            { name: "GUARD", score: 1, isTargeting: true },
            { name: "GUARD", score: 1, isTargeting: true },
            { name: "GUARD", score: 1, isTargeting: true },
            { name: "GUARD", score: 1, isTargeting: true },
            { name: "GUARD", score: 1, isTargeting: true },
            { name: "PRIEST", score: 2, isTargeting: true }, { name: "PRIEST", score: 2, isTargeting: true },
            { name: "BARON", score: 3, isTargeting: true }, { name: "BARON", score: 3, isTargeting: true },
            { name: "HANDMAIDEN", score: 4, isTargeting: false }, { name: "HANDMAIDEN", score: 4, isTargeting: false },
            { name: "PRINCE", score: 5, isTargeting: true }, { name: "PRINCE", score: 5, isTargeting: true },
            { name: "KING", score: 6, isTargeting: true },
            { name: "COUNTESS", score: 7, isTargeting: false },
            { name: "PRINCESS", score: 8, isTargeting: false }
        ];
        this.deck = this.shuffleArray(this.cardList);
        this.burnFirstCard();
        this.dealCards();
        this.dealCardToActivePlayer();
        this.createRemainingCardsSummary();
    }
    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     */
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    burnFirstCard() {
        this.burnCard = this.deck[0];
        this.removeFirstCardFromDeck();
    }
    removeFirstCardFromDeck() {
        this.deck.splice(0, 1);
    }
    dealCardToActivePlayer() {
        if (this.deck.length === 0) {
            this.determineWinner();
        }
        else {
            this.giveTopCardTo(this["player" + this.activePlayerIndex]);
        }
    }
    dealCards() {
        this.giveTopCardTo(this.player1);
        this.giveTopCardTo(this.player2);
        this.giveTopCardTo(this.player3);
        this.giveTopCardTo(this.player4);
    }
    giveTopCardTo(player) {
        player.cards.push(this.deck[0]);
        this.removeFirstCardFromDeck();
    }
    isActivePlayer(player) {
        return player.active;
    }
    getActivePlayer() {
        return this["player" + this.activePlayerIndex];
    }
    getCardHoverText(player, card) {
        if (this.isActivePlayer(player) || (this.lookingAtCardAsPriest && this[this.priestCardTarget] === player)) {
            let regularCardText = card.name + " (" + card.score + ")";
            if (card.name === "COUNTESS" && (this.hasCardInHandWithName("PRINCE", player) || this.hasCardInHandWithName("KING", player))) {
                regularCardText += " you MUST play this card";
            }
            return regularCardText;
        }
        return "Cheater (-1)";
    }
    createRemainingCardsSummary() {
        let tempDeck = this.deck.slice();
        tempDeck.push(this.burnCard);
        tempDeck.push(...this.player1.cards);
        tempDeck.push(...this.player2.cards);
        tempDeck.push(...this.player3.cards);
        tempDeck.push(...this.player4.cards);
        let tempSummary = [];
        tempDeck.forEach(cardInDeck => {
            if (tempSummary.filter(summaryCard => summaryCard.name === cardInDeck.name).length === 0) {
                tempSummary.push({ name: cardInDeck.name, score: cardInDeck.score, amount: 1 });
            }
            else {
                tempSummary[tempSummary.indexOf(tempSummary.filter(summaryCard => summaryCard.name === cardInDeck.name)[0])].amount++;
            }
        });
        this.remainingCardsSummary = tempSummary.sort((card1, card2) => card1.score > card2.score ? -1 : 1);
    }
    playCard(player, card) {
        if (this.isActivePlayer(player)) {
            this.addCardToPlayedCards(player, card);
            if (card.name === "COUNTESS") {
                this.nextPlayer();
            }
            if (card.name === "HANDMAIDEN") {
                this.performHandmaidenAction(player);
            }
            else {
                if (card.isTargeting && this.noPlayerTargetAvailable()) {
                    this.nextPlayer();
                }
                else {
                    this.menusToShow = card.name;
                }
            }
            this.createRemainingCardsSummary();
        }
    }
    performHandmaidenAction(player) {
        this.performHandMaidenAction(player);
        this.nextPlayer();
    }
    addCardToPlayedCards(player, card) {
        const index = player.cards.indexOf(card);
        if (!player.playedCards) {
            player.playedCards = [];
        }
        player.playedCards.push(...player.cards.splice(index, 1));
        if (player.playedCards[player.playedCards.length - 1].name === "PRINCESS") {
            player.alive = false;
            this.determineWinnerIfNeeded();
        }
    }
    moveActivePlayerMarker() {
        this["player" + this.activePlayerIndex].active = false;
        if (this.activePlayerIndex === 4) {
            this.activePlayerIndex = 1;
        }
        else {
            this.activePlayerIndex++;
            if (!this["player" + this.activePlayerIndex].alive) {
                this.moveActivePlayerMarker();
            }
        }
        this["player" + this.activePlayerIndex].active = true;
    }
    performGuardAction(cardName) {
        if (this.guardCardTarget) {
            if (this[this.guardCardTarget].cards[0].name === cardName) {
                this.addCardToPlayedCards(this[this.guardCardTarget], this[this.guardCardTarget].cards[0]);
                this[this.guardCardTarget].alive = false;
                this.determineWinnerIfNeeded();
            }
            this.guardCardTarget = undefined;
            this.nextPlayer();
        }
    }
    nextPlayer() {
        this.menusToShow = undefined;
        this.moveActivePlayerMarker();
        this.dealCardToActivePlayer();
        this.undoHandmaidenProtection();
    }
    isAlive(player) {
        return player.alive ? "" : "line-through";
    }
    //TODO: debug method, uncomment only locally
    getFirstCardName(player) {
        return "";
        // if (player.cards.length !== 0) {
        //   return player.cards[0].name;
        // }
    }
    performPriestAction() {
        this.lookingAtCardAsPriest = true;
    }
    endPriestAction() {
        this.lookingAtCardAsPriest = false;
        this.priestCardTarget = undefined;
        this.nextPlayer();
    }
    endBaronAction() {
        if (this.getActivePlayer().cards[0].score > this[this.baronCardTarget].cards[0].score) {
            this.addCardToPlayedCards(this[this.baronCardTarget], this[this.baronCardTarget].cards[0]);
            this[this.baronCardTarget].alive = false;
        }
        else if (this.getActivePlayer().cards[0].score < this[this.baronCardTarget].cards[0].score) {
            this.addCardToPlayedCards(this.getActivePlayer(), this.getActivePlayer().cards[0]);
            this.getActivePlayer().alive = false;
        }
        this.determineWinnerIfNeeded();
        this.baronCardTarget = undefined;
        this.nextPlayer();
    }
    performHandMaidenAction(player) {
        player.isProtectedByHandmaiden = true;
    }
    undoHandmaidenProtection() {
        this.getActivePlayer().isProtectedByHandmaiden = false;
    }
    canBeTargeted(player) {
        return !this.isActivePlayer(player) && player.alive === true && player.isProtectedByHandmaiden === false;
    }
    canBeTargetedByPrince(player) {
        return player.alive === true && player.isProtectedByHandmaiden === false;
    }
    noPlayerTargetAvailable() {
        return !this.canBeTargeted(this.player1) && !this.canBeTargeted(this.player2) && !this.canBeTargeted(this.player3) && !this.canBeTargeted(this.player4);
    }
    endPrinceAction() {
        this.addCardToPlayedCards(this[this.princeCardTarget], this[this.princeCardTarget].cards[0]);
        if (this[this.princeCardTarget].alive) {
            this.givePlayerNewCardAfterPrinceDiscard();
        }
        this.princeCardTarget = undefined;
        this.nextPlayer();
    }
    givePlayerNewCardAfterPrinceDiscard() {
        if (this.deck.length !== 0) {
            this.giveTopCardTo(this[this.princeCardTarget]);
        }
        else {
            this.giveBurnCardTo(this[this.princeCardTarget]);
        }
    }
    giveBurnCardTo(player) {
        player.cards.push(this.burnCard);
        this.burnCard = undefined;
    }
    endKingAction() {
        let swapVar = this.getActivePlayer().cards.slice();
        this.getActivePlayer().cards = this[this.kingCardTarget].cards.slice();
        this[this.kingCardTarget].cards = swapVar;
        this.nextPlayer();
    }
    hasCardInHandWithName(cardName, player) {
        return player.cards.map(card => card.name).some(name => name === cardName);
    }
    determineWinner() {
        let players = [this.player1, this.player2, this.player3, this.player4];
        let livingPlayersOrderedByCardPowerDescending = players.filter(player => player.alive).sort((p1, p2) => p1.cards[0].score < p2.cards[0].score ? 1 : -1);
        let highestCardValue = livingPlayersOrderedByCardPowerDescending[0].cards[0].score;
        this.winners = livingPlayersOrderedByCardPowerDescending.filter(player => player.cards[0].score === highestCardValue)
            .map(player => `${player.name} with ${player.cards[0].name}`);
    }
    determineWinnerIfNeeded() {
        let players = [this.player1, this.player2, this.player3, this.player4];
        if (players.filter(player => player.alive).length === 1) {
            this.determineWinner();
        }
    }
    refresh() {
        location.reload();
    }
};
LoveLetterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'trm-love-letter',
        template: __importDefault(__webpack_require__(/*! raw-loader!./love-letter.component.html */ "./node_modules/raw-loader/index.js!./src/app/love-letter/love-letter.component.html")).default
    }),
    __metadata("design:paramtypes", [])
], LoveLetterComponent);



/***/ }),

/***/ "./src/app/quiz-question-image/quiz-question-image.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/quiz-question-image/quiz-question-image.component.ts ***!
  \**********************************************************************/
/*! exports provided: QuizQuestionImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizQuestionImageComponent", function() { return QuizQuestionImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let QuizQuestionImageComponent = class QuizQuestionImageComponent {
    constructor() {
        this.answeredCorrectly = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isSolved = false;
        this.showhint = false;
    }
    ngOnInit() {
        this.isSolved = this.solvedBefore;
    }
    ngOnChanges(changes) {
        if (changes['questionImage']) {
            this.isSolved = this.solvedBefore;
            this.showhint = false;
        }
    }
    validateAnswer() {
        if (this.resolution && this.answer.map(possibleAnswer => possibleAnswer.toLowerCase()).indexOf(this.resolution.toLowerCase()) !== -1) {
            this.isSolved = true;
            this.answeredCorrectly.emit();
        }
        this.resolution = "";
    }
    showHint() {
        this.showhint = true;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], QuizQuestionImageComponent.prototype, "questionImage", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], QuizQuestionImageComponent.prototype, "solvedBefore", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], QuizQuestionImageComponent.prototype, "answeredCorrectly", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], QuizQuestionImageComponent.prototype, "answer", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], QuizQuestionImageComponent.prototype, "hint", void 0);
QuizQuestionImageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'quiz-question-image',
        template: __importDefault(__webpack_require__(/*! raw-loader!./quiz-question-image.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz-question-image/quiz-question-image.component.html")).default
    }),
    __metadata("design:paramtypes", [])
], QuizQuestionImageComponent);



/***/ }),

/***/ "./src/app/quiz-round-crossword/quiz-round-crossword.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/quiz-round-crossword/quiz-round-crossword.component.ts ***!
  \************************************************************************/
/*! exports provided: QuizRoundCrosswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRoundCrosswordComponent", function() { return QuizRoundCrosswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/RoundInfo */ "./src/app/shared/RoundInfo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let QuizRoundCrosswordComponent = class QuizRoundCrosswordComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.getRoundName();
    }
    getRoundName() {
        this.activatedRoute.params.subscribe(param => {
            this.questions = new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__["RoundInfo"]().getCrosswordRoundQuestions(param['quizname']);
        });
    }
    handleQuestionSolved($event) {
        this.questions[$event].solved = true;
    }
    getBlacksBefore(question) {
        let verticalWordIndex = this.getVerticalWordIndex();
        let questionVerticalWordtLetterIndex = question.verticalWordLetterIndex;
        // console.log(question);
        return new Array((verticalWordIndex - questionVerticalWordtLetterIndex) + 1).fill(1);
    }
    getBlacksAfter(question) {
        let numberOfBlacksAfter = this.getCrosswordWidth() - (this.getBlacksBefore(question).length + this.getWhites(question).length);
        return new Array(numberOfBlacksAfter).fill(1);
    }
    getWhites(question) {
        let whites = question.answer[0].split("");
        whites[question.verticalWordLetterIndex] = "*";
        return whites;
    }
    getVerticalWordIndex() {
        return Math.max.apply(null, this.questions.map(question => question.verticalWordLetterIndex));
    }
    getCrosswordWidth() {
        return Math.max.apply(null, this.questions.map(question => question.answer[0].length + 3));
    }
    getWhiteColor(white) {
        return white === "*" ? "yellow" : "white";
    }
    getValue(question, index) {
        return question.solved ? question.answer[0][index] : "";
    }
};
QuizRoundCrosswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
QuizRoundCrosswordComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'quiz-round-crossword',
        template: __importDefault(__webpack_require__(/*! raw-loader!./quiz-round-crossword.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz-round-crossword/quiz-round-crossword.component.html")).default
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], QuizRoundCrosswordComponent);



/***/ }),

/***/ "./src/app/quiz-round-image/quiz-round-image.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/quiz-round-image/quiz-round-image.component.ts ***!
  \****************************************************************/
/*! exports provided: QuizRoundImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRoundImageComponent", function() { return QuizRoundImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/RoundInfo */ "./src/app/shared/RoundInfo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let QuizRoundImageComponent = class QuizRoundImageComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.questionSolved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentQuestion = 0;
    }
    ngOnInit() {
        this.getRoundName();
    }
    getRoundName() {
        this.activatedRoute.params.subscribe(param => {
            this.roundName = param['quizname'];
            this.setQuestions();
        });
    }
    setQuestions() {
        if (this.providedQuestions) {
            this.questions = this.providedQuestions;
        }
        else {
            this.questions = new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_2__["RoundInfo"]().getImageRoundQuestions(this.roundName);
        }
    }
    getCurrentImageUrl() {
        let url = this.questions[this.currentQuestion].url;
        return url ? url : this.getLocalImgUrl();
    }
    getLocalImgUrl() {
        return `../../assets/${this.roundName}/${this.getCurrentQuestionName()}.jpg`;
    }
    getCurrentQuestionName() {
        return this.questions[this.currentQuestion].name;
    }
    getCurrentQuestionAnswer() {
        return this.questions[this.currentQuestion].answer;
    }
    getCurrentQuestionHint() {
        return this.questions[this.currentQuestion].hint;
    }
    previousQuestion() {
        this.currentQuestion--;
    }
    nextQuestion() {
        this.currentQuestion++;
    }
    isCurrentQuestionSolvedBefore() {
        return this.questions[this.currentQuestion].solved;
    }
    currentQuestionSolved() {
        this.questions[this.currentQuestion].solved = true;
        this.questionSolved.emit(this.currentQuestion);
        if (this.allQuestionsSolved()) {
            this.router.navigateByUrl("/" + this.roundName + "/solved");
        }
    }
    isSolved(index) {
        return this.questions[index].solved ? 'green' : 'grey';
    }
    goToQuestion(index) {
        this.currentQuestion = index;
    }
    allQuestionsSolved() {
        return this.questions
            .filter(value => value.solved === false)
            .length === 0;
    }
};
QuizRoundImageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], QuizRoundImageComponent.prototype, "providedQuestions", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], QuizRoundImageComponent.prototype, "questionSolved", void 0);
QuizRoundImageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'quiz-round-image',
        template: __importDefault(__webpack_require__(/*! raw-loader!./quiz-round-image.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz-round-image/quiz-round-image.component.html")).default
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], QuizRoundImageComponent);



/***/ }),

/***/ "./src/app/quiz-round-overview/quiz-round-overview.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/quiz-round-overview/quiz-round-overview.component.ts ***!
  \**********************************************************************/
/*! exports provided: QuizRoundOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRoundOverviewComponent", function() { return QuizRoundOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/RoundInfo */ "./src/app/shared/RoundInfo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let QuizRoundOverviewComponent = class QuizRoundOverviewComponent {
    constructor() { }
    ngOnInit() {
        this.imagerounds = new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__["RoundInfo"]().getImageRoundNames();
        this.classicrounds = new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__["RoundInfo"]().getClassicRoundNames();
        this.crosswordrounds = new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__["RoundInfo"]().getCrosswordRoundNames();
        this.rodedraadrounds = new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__["RoundInfo"]().getRodeDraadRoundNames();
        this.puzzlerounds = new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__["RoundInfo"]().getPuzzleRoundNames();
    }
    getImageRoundOmschrijving(rondeNaam) {
        return new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__["RoundInfo"]().getImageRoundOmschrijving(rondeNaam);
    }
    getCrosswordRoundOmschrijving(rondeNaam) {
        return new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__["RoundInfo"]().getCrosswordRoundOmschrijving(rondeNaam);
    }
    getRodeDraadRoundOmschrijving(rondeNaam) {
        return new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__["RoundInfo"]().getRodeDraadRoundOmschrijving(rondeNaam);
    }
    getPuzzleRoundOmschrijving(rondeNaam) {
        return new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__["RoundInfo"]().getPuzzleRoundOmschrijving(rondeNaam);
    }
    getClassicRoundOmschrijving(rondeNaam) {
        return new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__["RoundInfo"]().getClassicRoundOmschrijving(rondeNaam);
    }
    getRoundAvatar(round) {
        return round.isUrl ? round.link : `assets/${round.link}/avatar.jpg`;
    }
};
QuizRoundOverviewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'trm-quiz-round-overview',
        template: __importDefault(__webpack_require__(/*! raw-loader!./quiz-round-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz-round-overview/quiz-round-overview.component.html")).default
    }),
    __metadata("design:paramtypes", [])
], QuizRoundOverviewComponent);



/***/ }),

/***/ "./src/app/quiz-round-puzzle/quiz-round-puzzle.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/quiz-round-puzzle/quiz-round-puzzle.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXotcm91bmQtcHV6emxlL3F1aXotcm91bmQtcHV6emxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/quiz-round-puzzle/quiz-round-puzzle.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/quiz-round-puzzle/quiz-round-puzzle.component.ts ***!
  \******************************************************************/
/*! exports provided: QuizRoundPuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRoundPuzzleComponent", function() { return QuizRoundPuzzleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/RoundInfo */ "./src/app/shared/RoundInfo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let QuizRoundPuzzleComponent = class QuizRoundPuzzleComponent {
    constructor(activatedRoute, router) {
        this.correctAnswers = [];
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(param => {
            this.roundName = param['quizname'];
            this.puzzleRound = new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_2__["RoundInfo"]().getPuzzleRound(this.roundName);
            this.keywords = this.chunkArray(this.shuffleArray(this.mapToKeywords()));
        });
    }
    mapToKeywords() {
        return this.puzzleRound.questions.map(question => question.keywords)
            .flatMap(x => x);
    }
    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    chunkArray(myArray) {
        var index = 0;
        var arrayLength = myArray.length;
        var tempArray = [];
        var chunk;
        for (index = 0; index < arrayLength; index += 4) {
            chunk = myArray.slice(index, index + 4);
            tempArray.push(chunk);
        }
        return tempArray;
    }
    checkAnswer() {
        if (this.isAnswerCorrect()) {
            const questionCorrectlyAnswered = this.puzzleRound.questions[this.getCorrectAnswerIndex()];
            this.removeKeywords(questionCorrectlyAnswered.keywords);
            this.correctAnswers.push(questionCorrectlyAnswered.answer);
            this.puzzleRound.questions.splice(this.getCorrectAnswerIndex(), 1);
        }
        this.currentGuess = '';
        if (this.correctAnswers.length === 4) {
            this.router.navigateByUrl("/" + this.roundName + "/solved");
        }
    }
    isAnswerCorrect() {
        return this.getCorrectAnswerIndex() > -1;
    }
    getCorrectAnswerIndex() {
        return this.puzzleRound.questions.map(q => q.answer).indexOf(this.currentGuess.toLowerCase());
    }
    removeKeywords(keywordsToRemove) {
        keywordsToRemove.forEach(keywordToRemove => {
            this.keywords.forEach(keywordGroup => {
                let indexOfKeywordToRemove = keywordGroup.indexOf(keywordToRemove);
                if (indexOfKeywordToRemove > -1) {
                    keywordGroup[indexOfKeywordToRemove] = '-';
                }
            });
        });
    }
};
QuizRoundPuzzleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
QuizRoundPuzzleComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'trm-quiz-round-puzzle',
        template: __importDefault(__webpack_require__(/*! raw-loader!./quiz-round-puzzle.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz-round-puzzle/quiz-round-puzzle.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./quiz-round-puzzle.component.css */ "./src/app/quiz-round-puzzle/quiz-round-puzzle.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], QuizRoundPuzzleComponent);



/***/ }),

/***/ "./src/app/quiz-round-question/quiz-round-question.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/quiz-round-question/quiz-round-question.component.ts ***!
  \**********************************************************************/
/*! exports provided: QuizRoundQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRoundQuestionComponent", function() { return QuizRoundQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/RoundInfo */ "./src/app/shared/RoundInfo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let QuizRoundQuestionComponent = class QuizRoundQuestionComponent {
    constructor(activatedRoute, router) {
        this.guesses = [];
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(param => {
            this.roundName = param['quizname'];
            this.vragen = new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__["RoundInfo"]().getClassicRoundQuestions(this.roundName);
        });
    }
    backgroundColor(ind) {
        return ind % 2 === 0 ? "#9CB7B7" : "#1D7D7D";
    }
    textColor(ind) {
        return "white";
    }
    checkAnswer(ind) {
        if (this.guesses[ind] && this.vragen[ind].answer.map(vraag => vraag.toLowerCase()).indexOf(this.guesses[ind].toLowerCase()) !== -1) {
            this.vragen[ind].solved = true;
            if (this.allSolved()) {
                this.router.navigateByUrl("/" + this.roundName + "/solved");
            }
        }
    }
    allSolved() {
        return this.vragen
            .filter(vraag => vraag.solved === false)
            .length === 0;
    }
};
QuizRoundQuestionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
QuizRoundQuestionComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'trm-quiz-round-question',
        template: __importDefault(__webpack_require__(/*! raw-loader!./quiz-round-question.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz-round-question/quiz-round-question.component.html")).default
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], QuizRoundQuestionComponent);



/***/ }),

/***/ "./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.ts ***!
  \**************************************************************************/
/*! exports provided: QuizRoundRodeDraadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRoundRodeDraadComponent", function() { return QuizRoundRodeDraadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/RoundInfo */ "./src/app/shared/RoundInfo.ts");
/* harmony import */ var _quiz_round_question_quiz_round_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz-round-question/quiz-round-question.component */ "./src/app/quiz-round-question/quiz-round-question.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let QuizRoundRodeDraadComponent = class QuizRoundRodeDraadComponent extends _quiz_round_question_quiz_round_question_component__WEBPACK_IMPORTED_MODULE_2__["QuizRoundQuestionComponent"] {
    ngOnInit() {
        this.activatedRoute.params.subscribe(param => {
            this.roundName = param['quizname'];
            this.vragen = new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_1__["RoundInfo"]().getRodeDraadRoundQuestions(this.roundName);
        });
    }
    backgroundColor(ind) {
        return ind === this.vragen.length - 1 ? '#db3a31' : super.backgroundColor(ind);
    }
};
QuizRoundRodeDraadComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'trm-quiz-round-rode-draad',
        template: __importDefault(__webpack_require__(/*! raw-loader!./quiz-round-rode-draad.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.html")).default
    })
], QuizRoundRodeDraadComponent);



/***/ }),

/***/ "./src/app/quiz-round-solved/quiz-round-solved.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/quiz-round-solved/quiz-round-solved.component.ts ***!
  \******************************************************************/
/*! exports provided: QuizRoundSolvedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRoundSolvedComponent", function() { return QuizRoundSolvedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/RoundInfo */ "./src/app/shared/RoundInfo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let QuizRoundSolvedComponent = class QuizRoundSolvedComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.getRoundName();
    }
    getRoundName() {
        this.activatedRoute.params.subscribe(param => this.roundName = param['quizname']);
    }
    getRoundSolvedImage() {
        return `../../assets/${this.roundName}/winner.jpg`;
    }
    getWinnerText() {
        return new _shared_RoundInfo__WEBPACK_IMPORTED_MODULE_2__["RoundInfo"]().getImageRoundWinnerText(this.roundName);
    }
};
QuizRoundSolvedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
QuizRoundSolvedComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'trm-quiz-round-solved',
        template: __importDefault(__webpack_require__(/*! raw-loader!./quiz-round-solved.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz-round-solved/quiz-round-solved.component.html")).default
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
], QuizRoundSolvedComponent);



/***/ }),

/***/ "./src/app/quiz.component.ts":
/*!***********************************!*\
  !*** ./src/app/quiz.component.ts ***!
  \***********************************/
/*! exports provided: QuizAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizAppComponent", function() { return QuizAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let QuizAppComponent = class QuizAppComponent {
};
QuizAppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'quiz-app',
        template: __importDefault(__webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz.component.html")).default
    })
], QuizAppComponent);



/***/ }),

/***/ "./src/app/shared/RoundInfo.ts":
/*!*************************************!*\
  !*** ./src/app/shared/RoundInfo.ts ***!
  \*************************************/
/*! exports provided: RoundInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundInfo", function() { return RoundInfo; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class RoundInfo {
    constructor() {
        this.imageRounds = new Map();
        this.classicRounds = new Map();
        this.crosswordRounds = new Map();
        this.rodeDraadRounds = new Map();
        this.puzzleRounds = new Map();
        this.initializeImageRounds();
        this.initializeClassicRounds();
        this.initializeCrosswordRounds();
        this.initializeRodeDraadRounds();
        this.initializePuzzleRounds();
    }
    initializeImageRounds() {
        this.imageRounds.set("merken", {
            winnerText: "Alles opgelost!? Wat een opMERKelijke verdienste!",
            omschrijving: "Vind de merken aan de hand van een cryptische afbeelding.",
            questions: [
                {
                    name: "one",
                    answer: ["devos & lemmens", "devos&lemmens", "devos-lemmens", "devos lemmens"],
                    hint: "Aan tafel!",
                    solved: false
                },
                { name: "two", answer: ["carlsberg", "carl'sberg"], hint: "Probably not the best in the world", solved: false },
                { name: "three", answer: ["ford"], hint: "Vroem!", solved: false },
                { name: "four", answer: ["vans"], hint: "Engelse busjes", solved: false },
                { name: "five", answer: ["studio brussel", "stubru"], hint: "Meer dan 1000 goede doelen", solved: false },
                { name: "six", answer: ["coca-cola", "coca cola"], hint: "In het rood, in het grijs, in het zwart en in het groen", solved: false },
                {
                    name: "seven",
                    answer: ["häagen-dazs", "haagen-dazs", "haagen dazs", "hagen das", "haagen das", "haagen daz"],
                    hint: "Niet Ben&Jerries",
                    solved: false
                },
                { name: "eight", answer: ["albert heijn", "albert-heijn", "albert hein"], hint: "Hechte vriend van Delhaize", solved: false },
                { name: "nine", answer: ["thomas cook", "tomas cook"], hint: "Boven de wolken", solved: false },
                { name: "ten", answer: ["de lijn"], hint: "Er is momenteel geen hint beschikbaar wegens stakend personeel", solved: false }
            ]
        });
        this.imageRounds.set("films", {
            winnerText: "Gefeliciteerd! De naam van een filmfan zoals jij zou in de aftiteling moeten staan.",
            omschrijving: "Welke films zoeken we? Je enige leidraad zijn enkele raadselachtige prenten...",
            questions: [
                { name: "one", answer: ["das boot"], hint: "auf Deutsch", solved: false },
                { name: "two", answer: ["hector"], hint: "Vlaamse film", solved: false },
                { name: "three", answer: ["jaws"], hint: "Eentje van Spielberg", solved: false },
                { name: "four", answer: ["mad max"], hint: "Werd al gespeeld door Mel Gibson en Tom Hardy", solved: false },
                { name: "five", answer: ["life of brian"], hint: "Monty Python", solved: false },
                { name: "six", answer: ["the silence of the lambs", "silence of the lambs"], hint: "Politie gaat ten rade bij kannibaal", solved: false },
                {
                    name: "seven",
                    answer: ["schindler's list", "schindlers list", "shindler's list", "shindlers list"],
                    hint: "Nog eentje van Spielberg. Bijna volledig in zwart-wit.",
                    solved: false
                },
                { name: "eight", answer: ["wall-e", "wall e", "walle"], hint: "Populatie van de aarde: 0", solved: false },
                { name: "nine", answer: ["up"], hint: "ballonnen", solved: false },
                { name: "ten", answer: ["the wolf of wall street", "wolf of wall street"], hint: "Rijk worden met andermans geld", solved: false }
            ]
        });
        this.imageRounds.set("steden", {
            winnerText: "Van de Alpen tot Zimbabwe, jij vindt overal de weg terug naar huis!",
            omschrijving: "Tien bekende steden uit binnen- en buitenland verbergen zich achter mysterieuze foto's",
            questions: [
                { name: "one", answer: ["dinant"], hint: "zoek het in Wallonië", solved: false },
                { name: "two", answer: ["parijs"], hint: "Ze zijn met twee, ze zijn een stel, een koppel, een ...", solved: false },
                { name: "three", answer: ["den haag"], hint: "Onpopulaire plek voor massamoordenaars en dictators", solved: false },
                { name: "four", answer: ["bonn", "bon"], hint: "pas mal", solved: false },
                { name: "five", answer: ["lissabon", "lisabon"], hint: "In deze stad ligt Vasco da Gama begraven", solved: false },
                { name: "six", answer: ["ankara"], hint: "De hoofdstad", solved: false },
                {
                    name: "seven",
                    answer: ["port-au-prince", "port-o-prince", "portoprince", "port au prince"],
                    hint: "Dat is de vlag van Haïti",
                    solved: false
                },
                { name: "eight", answer: ["oxford"], hint: "Ze hebben een bekende unief", solved: false },
                { name: "nine", answer: ["stalingrad", "stalinrad"], hint: "A single death is a tragedy; a million deaths is a statistic.", solved: false },
                { name: "ten", answer: ["las vegas", "vegas"], hint: "Ik zet 2000 dollar op rood", solved: false }
            ]
        });
        this.imageRounds.set("acteurs", {
            winnerText: "Als er een Oscar was voor de beste quizzer, dan ging die sowieso naar jou!",
            omschrijving: "en ook een paar actrices. Uit binnen- én buitenland!",
            questions: [
                { name: "one", answer: ["mathias coppens", "coppens", "matthias coppens"], hint: "Presenteert voornamelijk programma's en dan voornamelijk samen met zijn broer. Acteerde onder ander naast Herbert Flack. Regisseerde ook De zonen van Van As.", solved: false },
                { name: "two", answer: ["ben stiller", "stiller"], hint: "Amerikaans acteur, vooral bekend uit comedy's zoals Zoolander.", solved: false },
                { name: "three", answer: ["vin diesel"], hint: "kale actieheld. Kan snel en furieus uit de hoek komen.", solved: false },
                { name: "four", answer: ["sylvester stallone", "stallone", "stalone"], hint: "Speelde mee in de bekendste boksfilms aller tijden. Die gezichtsverlamming had hij daarvoor al.", solved: false },
                { name: "five", answer: ["matteo simoni", "simoni"], hint: "Speelde al een Italiaanse zanger, een hyperactief broodje en een Marokkaan.", solved: false },
                { name: "six", answer: ["filip peeters", "peeters", "peters", "filip peters"], hint: "De man van Liesje van Het Eiland. Deed al twee keer mee aan De Slimste Mens", solved: false },
                { name: "seven", answer: ["jan decleir", "declair", "decleir", "jan declair"], hint: "Broer van Reinhilde, vader van Sofie, Flor en Jenne", solved: false },
                { name: "eight", answer: ["peter van asbroeck", "peter van asbroek", "van asbroek", "peter van as broek"], hint: "Bij deze flik mag iedereen komen eten", solved: false },
                { name: "nine", answer: ["madonna"], hint: "Je kent haar vooral als zangeres, maar de blondine op leeftijd heeft ook meerdere hoofdrollen mogen vertolken.", solved: false },
                { name: "ten", answer: ["meryl streep", "streep"], hint: "Eén van de zes personen op aarde met 3 Oscars op haar naam. Vertolkte onder andere Margareth Thatcher.", solved: false }
            ]
        });
        this.imageRounds.set("plekken", {
            winnerText: "Hopelijk heb je nog een plekje in je maag gereserveerd voor het dessert straks!",
            omschrijving: "Kan jij deze tien wereldberoemde trekpleisters afleiden uit een reeks cryptische afbeeldingen?",
            questions: [
                { name: "one", answer: ["Arc de Triomphe", "Ark de Triomphe"], hint: "In het midden van een rond punt in Parijs.", solved: false },
                { name: "two", answer: ["Mont Saint-Michel", "Mont Saint Michel"], hint: "Soms geraak je er te voet, soms met een bootje", solved: false },
                { name: "three", answer: ["Vlooybergtoren", "Vlooibergtoren"], hint: "Voorzichtig op de baan, he!", solved: false },
                { name: "four", answer: ["Big Ben"], hint: "Ding-dong!", solved: false },
                { name: "five", answer: ["Chinese muur", "De chinese muur"], hint: "In tegenstelling tot wat sommigen beweren is dit bouwwerk niét zichtbaar vanuit de ruimte", solved: false },
                { name: "six", answer: ["Brandenburger Poort", "Brandenburger Tor"], hint: "Twee woorden. Als je het op z'n Duits uitspreekt wordt het tweede woord 'Tor'", solved: false },
                { name: "seven", answer: ["Times Square", "Time Square"], hint: "Overal reclameborden, taxi's en toeristen. Eén van de beste plekken om Nieuwjaar te vieren", solved: false },
                { name: "eight", answer: ["Christus de Verlosser", "Christ The Redeemer", "Christ The Redeemer"], hint: "Welk beroep oefent de man rechts uit?", solved: false },
                { name: "nine", answer: ["Alhambra"], hint: "Meneer Pacino vraagt dat je het derde item op z'n Engels uitspreekt.", solved: false },
                { name: "ten", answer: ["Eiffeltoren", "Eifeltoren"], hint: "De maker van dit bouwwerk, Gustave, leverde ook het Vrijheidsbeeld aan de VS.", solved: false }
            ]
        });
        this.imageRounds.set("muziek", {
            imgUrl: "https://i.imgur.com/4zrclW9.jpg",
            winnerText: "Jouw antwoorden klinken als muziek in de oren",
            omschrijving: "Welke artiesten en bands werden er in deze ronde verborgen?",
            questions: [
                { url: "https://i.imgur.com/qPgUHxs.png", answer: ["Roxette", "Roxet"], hint: "Zangeres Marie Fredriksson overleed onlangs", solved: false },
                { url: "https://i.imgur.com/MHE5H0l.png", answer: ["The Weeknd", "The Weekend"], hint: "Deze Canadees kan zijn gezicht niet voelen als hij bij je is", solved: false },
                { url: "https://i.imgur.com/zk6rECh.png", answer: ["Eminem"], hint: "Deze rapper speelde ook al zichzelf in de film 8 Mile", solved: false },
                { url: "https://i.imgur.com/ac4Dh1T.png", answer: ["Miley Cyrus"], hint: "Dochter van Billy Ray en nicht van Dolly Parton", solved: false },
                { url: "https://i.imgur.com/qwRGUqX.png", answer: ["Amy Winehouse"], hint: "Recentste vrouwelijk lid van de 27 club", solved: false },
                { url: "https://i.imgur.com/Uxc8vPG.png", answer: ["Deep Purple"], hint: "Rockers die begonnen in de sixties en nog steeds actief touren", solved: false },
                { url: "https://i.imgur.com/rXTzzfI.jpg", answer: ["Nick Cave"], hint: "Zong een duet met Kylie Minogue en speelt meestal samen met zijn Bad Seeds", solved: false },
                { url: "https://i.imgur.com/Zu5XriR.jpg", answer: ["School is cool"], hint: "Frontman Johannes Genard deed mee aan het VTM-programma 'Liefde voor Muziek'", solved: false },
                { url: "https://i.imgur.com/MyosTo0.jpg", answer: ["Bruce Springsteen", "Springsteen"], hint: "Deze baas is geboren om te lopen", solved: false },
                { url: "https://i.imgur.com/ZPmubzQ.png", answer: ["The Chainsmokers", "Chainsmokers"], hint: "Niels moet er van kotsen", solved: false },
                { url: "https://i.imgur.com/Q1A2c4F.png", answer: ["Twenty-one pilots", "twentyone pilots", "21 pilots"], hint: "<hoeveel> <beroep>", solved: false }
            ]
        });
    }
    initializeClassicRounds() {
        this.classicRounds.set("jaarretrospectief-2016", {
            winnerText: "Ben jij even klaar voor het volgend jaar als deze poes?",
            omschrijving: "Weet jij nog wat er het afgelopen jaar allemaal is gebeurd? Bewijs het in deze ronde!",
            questions: [
                {
                    titel: "Januari",
                    vraag: "Naast David Bowie stierf ook de carrière van een Vlaamse veldrijdster. Wat werd er gevonden in de fiets van Femke Van Den Driessche?",
                    answer: ["motor", "motortje", "een motor", "een motortje"],
                    solved: false
                },
                {
                    titel: "Februari",
                    vraag: "Leonardo DiCaprio won voor het eerst in zijn leven een Oscar voor zijn hoofdrol in The Revenant. Weet je echter welke Valentijnsfilm zo maar even 5 Razzies (filmprijzen voor de slechtste films in een bepaalde categorie) naar huis mocht meenemen?",
                    answer: ["50 shades of grey", "50 shades of gray", "fifty shades of grey", "fifty shades of gray"],
                    solved: false
                },
                {
                    titel: "Maart",
                    vraag: "Barack Obama hief het handelsembargo met dit Zuid-Amerikaanse land op dat in 1959 werd opgericht. Dat werd prompt gevierd met een concert van de Rolling Stones. Over welk land gaat het?",
                    answer: ["cuba"],
                    solved: false
                },
                {
                    titel: "April",
                    vraag: "In April moesten we niet alleen van Prince afscheid nemen. Ook een minister uit de Vlaamse regering stapte op. Niet omwille van haar gelijkenis met de zanger van The Cure. Wel omwille van haar slecht ontvangen taks. Wat is de achternaam van deze minister?",
                    answer: ["turtelboom"],
                    solved: false
                },
                {
                    titel: "Mei",
                    vraag: "In Mei kwam het grootste dopingschandaal ooit aan het licht toen werd ontdekt dat de Russische regering al jarenlang de dopingtests van honderden atleten vervalste. In Mei vond ook het Eurovisiesongfestival plaats. Dit jaar won Jamala met het liedje '1944'. Dat gaat over de deportatie van 240.000 Krim-Tataren naar Centraal-Azië door Jozef Stalin. Wat is de nationaliteit van Jamala?",
                    answer: ["oekraïne", "oekraine"],
                    solved: false
                },
                {
                    titel: "Juni",
                    vraag: "Deze maand stond in het teken van het EK voetbal in Frankrijk. Omdat ik niks van voetbal ken, maak ik er een antropologische vraag van. Wat zijn de drie laatste letters van de meeste achternamen van de leden uit de Ijslandse voetbalploeg?",
                    answer: ["son"],
                    solved: false
                },
                {
                    titel: "Juli",
                    vraag: "Eén spel kreeg alle aandacht tijdens de zomermaanden: Pokémon Go. De hoeveelste verjaardag vierde de franchise dit jaar? Tip: het is een rond getal.",
                    answer: ["20", "twintig"],
                    solved: false
                },
                {
                    titel: "Augustus",
                    vraag: "Welke vrouw won dit jaar onze enige gouden medaille in de atletiek (achternaam)?",
                    answer: ["thiam", "tiam"],
                    solved: false
                },
                {
                    titel: "September",
                    vraag: "Welke Nobelprijswinnares voor de vrede werd door Paus Franciscus heilig verklaard?",
                    answer: ["moeder teresa", "moeder theresa", "teresa", "theresa"],
                    solved: false
                },
                {
                    titel: "Oktober",
                    vraag: "Wie won de Nobelprijs voor de Literatuur?",
                    answer: ["bob dylan", "dylan"],
                    solved: false
                },
                {
                    titel: "November",
                    vraag: "The Donald haalde het van Hillary Clinton. Ken je ook de achternaam van zijn running mate en dus toekomstige vice-president van de VS? Tip: het lijkt op een synoniem voor 'worst'",
                    answer: ["pence"],
                    solved: false
                },
                {
                    titel: "December",
                    vraag: "Koning Bhumibol van Thailand kwam dit jaar te gaan. Hoe lang gaat het land om zijn heengaan rouwen?",
                    answer: ["1 jaar", "een jaar", "één jaar", "twaalf maanden", "twaalf maand", "12 maand", "twaalf maanden"],
                    solved: false
                }
            ]
        });
        this.classicRounds.set("vijftig", {
            winnerText: "Op naar de volgende 50 jaar",
            omschrijving: "Algemene kennis vragen over de voorbije vijftig jaar",
            questions: [
                {
                    titel: "1967",
                    vraag: "Welke acteur die later president van de VS zou worden, wordt ingewijd als gouverneur van Californië? (achternaam)",
                    answer: ["raegan", "regan"],
                    solved: false
                },
                {
                    titel: "1972",
                    vraag: "Het Britse leger doodt 14 ongewapende burgers in Noord-Ierland. Welke naam kreeg deze gebeurtenis?",
                    answer: ["bloody sunday"],
                    solved: false
                },
                {
                    titel: "1977",
                    vraag: "George Lucas breekt alle box-office records met zijn nieuwste film. Hoe heet deze?",
                    answer: ["Star Wars: A New Hope", "star wars", "star wars a new hope", "a new hope"],
                    solved: false
                },
                {
                    titel: "1982",
                    vraag: "Er breekt een tien weken durende oorlog uit tussen Groot-Brittanië en Argentinië. Rond welke eilanden speelt deze oorlog zich af?",
                    answer: ["falkland", "falkland eilanden"],
                    solved: false
                },
                {
                    titel: "1987",
                    vraag: "Wie wordt het eerste vrouwelijke lid van de Rock and Roll Hall of Fame? Je kent haar van nummers als 'Respect' en 'Faith' (achternaam)",
                    answer: ["franklin"],
                    solved: false
                },
                {
                    titel: "1992",
                    vraag: "Steffi Graf wint Wimbledon bij het vrouwentennis. Wie won bij de mannen? (achternaam)",
                    answer: ["agassi", "agasi", "aggassi", 'aggassi'],
                    solved: false
                },
                {
                    titel: "1997",
                    vraag: "De avonturen van Ash Ketchum, Misty en Brock beginnen. Over welke tv-serie die nog steeds loopt (weliswaar zonder Misty en Brock) gaat het?",
                    answer: ["pokémon", "pokemon"],
                    solved: false
                },
                {
                    titel: "2002",
                    vraag: "De auteur van onder meer Pipi Langkous sterft. Wat is de achternaam van deze Zweedse?",
                    answer: ["lindgren", "lintgren"],
                    solved: false
                },
                {
                    titel: "2007",
                    vraag: "Wie wint de nobelprijs voor de vrede omwille van zijn werk rond klimaatopwarming? (achternaam)",
                    answer: ["gore"],
                    solved: false
                },
                {
                    titel: "2012",
                    vraag: "Lonesome George sterft op 102-jarige leeftijd waardoor zijn soort uitsterft. Wat was Lonesome George?",
                    answer: ["schildpad"],
                    solved: false
                },
                {
                    titel: "2017",
                    vraag: "Wie haalde Grammy's binnen voor 'Record of the Year', 'Album of the Year', 'Song of the Year', 'Best Pop Solo' en 'Best Pop Vocal album'?",
                    answer: ["adele"],
                    solved: false
                }
            ]
        });
        this.classicRounds.set("jaarretrospectief-2017", {
            winnerText: "Als je je even hard smijt als deze hond, ben je volledig klaar voor 2018",
            omschrijving: "Twaalf vragen over het jaar 2017. Heb jij de voorbije 31,536,000 seconden goed opgelet",
            questions: [
                {
                    titel: "Januari",
                    vraag: "Trump legt de eed af als president van de Verenigde Staten van Amerika. De hoeveelste president is hij als je weet dat Eisenhower de 34ste president was en dat die regeerde tussen 1953 en 1961?",
                    answer: ["45ste", "45"],
                    solved: false
                },
                {
                    titel: "Februari",
                    vraag: "Belgische astronomen ontdekken een ster met bewoonbare planeten op 39 lichtjaren van de aarde. Hij noemen ze deze ster? De onderzoekers zijn fan van een biersoort gebrouwen door moniken.",
                    answer: ["trappist-1", "trappist", "trapist"],
                    solved: false
                },
                {
                    titel: "Maart",
                    vraag: "Hoe heet de Amerikaanse gitaarvirtuoos die op 90-jarige leeftijd het leven liet? Eén van zijn bekendste nummers is 'Johnny B. Goode'.",
                    answer: ["chuck berry", "berry", "berrie"],
                    solved: false
                },
                {
                    titel: "April",
                    vraag: "Welke Disneyfilm werd verfilmd met Emma Watson in de hoofdrol?",
                    answer: ["beauty and the beast", "belle en het beest"],
                    solved: false
                },
                {
                    titel: "Mei",
                    vraag: "Salvador Sobral zingt Portugal naar de Eurovisie Songfestival overwinning met het nummer 'Amor pelos dois'. De hoeveelste overwinning was dit voor Portugal?",
                    answer: ["eerste", "1"],
                    solved: false
                },
                {
                    titel: "Juni",
                    vraag: "Ariana Grande houdt een concert in Manchester ter nagedachtenis van de slachtoffers van de bom die tijdens haar vorige concert in de Engelse stad afging. Het nummer 'Don't look back in anger' werd het lijflied van het event. Maar wie bedacht dat nummer? Tip: je vindt ze in de woestijn.",
                    answer: ["oasis", "oase"],
                    solved: false
                },
                {
                    titel: "Juli",
                    vraag: "Chris Froome wint voor de vierde keer de Tour de France. Wie was de laatste Belgische winnaar? Tip: Tijdens die zomer liepen de Olympische Spelen in Montréal, Canada.",
                    answer: ["lucien van impe", "van impe"],
                    solved: false
                },
                {
                    titel: "Augustus",
                    vraag: "Prins Philip gaat op pensioen na meer dan 22.000 publieke optredens. Wie is de echtgenote van deze philip?",
                    answer: ["queen elisabeth II", "queen elisabeth", "elisabeth"],
                    solved: false
                },
                {
                    titel: "September",
                    vraag: "Eén van de bekendste uitgevers ter wereld sterft op 91-jarige leeftijd in zijn Mansion genoemd naar zijn bekendste blad. Hij laat 4 kinderen en een 31-jarige vrouw achter. Over wie hebben we het?",
                    answer: ["hugh hefner", "hefner"],
                    solved: false
                },
                {
                    titel: "Oktober",
                    vraag: "Hein Vanhaezebrouck wordt coach van Anderlecht. Welke Zwitser moest opstappen om plaats te maken voor Hein? Zijn naam is een anagram voor 'Weer in leer'",
                    answer: ["rene weiler", "weiler"],
                    solved: false
                },
                {
                    titel: "November",
                    vraag: "De afgezette minister-president van Catalonië stelt in Brugge zijn kiescampagne voor. Hoe heet die man ook alweer?",
                    answer: ["puigdemont"],
                    solved: false
                },
                {
                    titel: "December",
                    vraag: "1 eenheid van deze elektronisch munt die in 2009 het levenslicht zag is op 3 december meer dan 11.000 dollar waard. Wat is de naam van deze munt?",
                    answer: ["bitcoin", "bit coin"],
                    solved: false
                }
            ]
        });
        this.classicRounds.set("jaarretrospectief-2018", {
            winnerText: "Dit varken zal 2019 waarschijnlijk niet halen, maar iemand die zo veel weet als jij haalt zonder problemen het volgende decennium",
            omschrijving: "2018 ligt bijna achter ons. Hoe memorabel waren de gebeurtenissen van dit jaar voor jou?",
            questions: [
                {
                    titel: "Januari",
                    vraag: "Op 10 januari laat comédienne Lies Lefever op 37-jarige leeftijd het leven. Drie dagen eerder verloor de wereld ook al een andere zangeres. Welke Franse France zoeken we? (achternaam)",
                    answer: ["Gall", "gal"],
                    solved: false
                },
                {
                    titel: "Februari",
                    vraag: "SpaceX, een bedrijf die commerciële ruimtereizen poogt te organiseren, slaagt er in om zijn eerste raket, de 'Falcon Heavy', te lanceren. Mensen aan boord zijn er niet, wel een Tesla Roadster. Deze elektrische wagen wordt achtergelaten in de ruimte en speelt daar sindsdien nonstop 'Life on Mars' van David Bowie. Wat is de achternaam van de baas van SpaceX en Tesla. Hij ontwikkelde ook al PayPal, vlammenwerpers en leidt The Boring Company. ",
                    answer: ["Elon Musk", "Musk"],
                    solved: false
                },
                {
                    titel: "Maart",
                    vraag: "Een vrouw in Arizona sterft nadat ze wordt aangereden door een Uber taxi. Wat was er zo speciaal aan deze wagen waardoor dit ongeval het eerste van zijn soort werd?",
                    answer: ["De wagen was zelfsturend", "zelfsturend", "geen bestuurder", "zelfrijdend"],
                    solved: false
                },
                {
                    titel: "April",
                    vraag: "Na 35 jaar wordt de ban op films opgeheven in Saoedi-Arabië. Welke film werd de eerste die getoond werd na deze ban? Hij is ondertussen genomineerd voor 3 Oscars: beste film, beste soundtrack en beste song. Enkele hoofdrollen zijn weggelegd voor Chadwick Boseman als koning T'Challa, Michael B. Jordan als Eric Killmonger en Lupita Nyong'o als Nakia.",
                    answer: ["Black Panther"],
                    solved: false
                },
                {
                    titel: "Mei",
                    vraag: "De best bezochte film van dit jaar haalt maar liefst 2 miljard dollar binnen voor Walt Disney en wordt daarmee de vierde best verdienende film ooit. Met zijn geschatte budget dat tussen de 300 en 400 miljoen dollar ligt, is hij echter ook één van de duurste films ooit gemaakt. Welke film zoeken we?",
                    answer: ["Avengers: Infinity War", "Avengers 3", "Infinity War"],
                    solved: false
                },
                {
                    titel: "Juni",
                    vraag: "De wereldbeker voetbal vind plaats in Rusland. Frankrijk gaat met de trofee naar huis en België wordt derde. Welk land kreeg de zilveren plak?",
                    answer: ["Kroatië", "Kroatie"],
                    solved: false
                },
                {
                    titel: "Juli",
                    vraag: "De Tham Luang Nang Non grot komt uitgebreid in het nieuws. Twaalf jongeren en hun begeleider zitten er namelijk 17 dagen lang vast nadat de grot volloopt met water. Welke hobby delen deze mannen?",
                    answer: ["voetbal"],
                    solved: false
                },
                {
                    titel: "Augustus",
                    vraag: "Tientallen mensen sterven nadat een brug in Italië instort. In welke stad in het noordwesten van het land met meer dan een half miljoen inwoners bevond deze brug zich?",
                    answer: ["Genua"],
                    solved: false
                },
                {
                    titel: "September",
                    vraag: "Trump was niet welkom, maar onder meer Obama en George W. Bush waren wel aanwezig op de begrafenis van deze Republikeinse senator en krijgsgevangene uit de Vietnam oorlog. Wat is de achternaam van de man die ooit nog met Obama streed om de presidentstitel?",
                    answer: ["John McCain", "McCain"],
                    solved: false
                },
                {
                    titel: "Oktober",
                    vraag: "Gemeenteverkiezingen in België. In welke gemeente boekte Guy D'Haeseleer een monsteroverwinning met zijn extreemrechtse partij?",
                    answer: ["Ninove", "Ninnove"],
                    solved: false
                },
                {
                    titel: "November",
                    vraag: "Als gevolg van de verkiezingen trok de toenmalige minister van Defensie terug naar Hasselt om daar burgemeester te worden. Hij werd opgevolgd door partijgenoot Sander Loones die na minder dan een maand zijn post weer mocht afgeven aan Didier Reynders. Wie is de huidige burgemeester van Hasselt? (achternaam)",
                    answer: ["Vandeput", "van de put"],
                    solved: false
                },
                {
                    titel: "December",
                    vraag: "Wat is de Franse naam van de protestbeweging die onder andere Parijs en Wallonië bezette uit onvrede omtrent hoge brandstofprijzen en lage inkomens?",
                    answer: ["Gilets jaunes", "Gilet jaune"],
                    solved: false
                }
            ]
        });
        this.classicRounds.set("decennium-retrospectief", {
            winnerText: "Tien (jaar) op tien!",
            omschrijving: "Wat weet jij nog over de voorbije tien jaar? Omdat sommige antwoorden misschien ver weg zitten, zijn er meerdere vragen per jaar waar je op kan antwoorden",
            questions: [
                {
                    titel: "2010",
                    vraag: "De Slimste Mens Ter Wereld loopt voor de laatste keer op één. Tijdens deze editie nemen de beste deelnemers van de voorbije edities het tegen elkaar op. Welke comedian met opvallende snor won deze quiz zowel in 2004 als in 2010? Wie presenteerde de quiz in 2003?",
                    answer: ["Bert Kruismans won twee keer, Bruno Wyndaele presenteerde voor Eric van Looy", 'Kruismans', 'Wyndaele', 'Wijndaele', 'Weyndaele'],
                    solved: false
                },
                {
                    titel: "2011",
                    vraag: "Deze Apple topman en bedenker van onder meer de iPhone en iPod verliest de strijd tegen kanker. Hoe heet deze man? Wie volgde hem op?",
                    answer: ["Steve Jobs stierf en werd opgevolgd door Tim Cook", "Jobs", 'Cook'],
                    solved: false
                },
                {
                    titel: "2012",
                    vraag: "De Olympsche Spelen vinden plaats in Londen. Noem één Belgische medaillewinnaar (we haalden 1 zilveren medaille en twee bronzen)",
                    answer: ["Cox (Schietsport, Zilver), Van Snick (Judo, Brons), Van Acker (Zeilen, Brons)", "Cox", "Cockx", "Van Snick", "Van Snik", "Van Acker", "Van Akker"],
                    solved: false
                },
                {
                    titel: "2013",
                    vraag: "We krijgen een nieuwe paus. Jorge Mario Bergoglio zal voortaan door het leven gaan als paus Franciscus. Uit welke land komt Jorge? Vaticaanstad is een land en elk land heeft ook een voetbalploeg. Sinds hun oprichting in 1994 speelden de voetballers van Vaticaanstad al 7 interlands. Hoeveel keer wonnen ze al?",
                    answer: ["Argentinie en hun voetbalploeg won nog nooit", "Argentinie", 'Nooit', "0", 'nul'],
                    solved: false
                },
                {
                    titel: "2014",
                    vraag: "De Ice Bucket Challenge doet de ronde. Door een emmer ijswater over je heen te gieten, voel je je even als een patiënt die aan de ziekte lijdt waarvoor deze virale challenge aandacht wilt vragen. Welke ziekte zoeken we? Welke wetenschapper was de bekendste persoon die aan deze ziekte leed? Hij overleed in 2018 en hield zich vooral bezig met het heelal.",
                    answer: ["Amyotrofe laterale sclerosen Stephen Hawking", "ALS", 'Hawking'],
                    solved: false
                },
                {
                    titel: "2015",
                    vraag: "Documenten omtrent wereldwijde belastingontduiking worden gelekt naar de pers. Deze lek wordt genoemd naar een Centraal-Amerikaanse land waar de eigenaar van de documenten verbleef. Hoe heet deze leak? Enkele jaren later wordt het Belgisch voetbal getroffen door een schandaal omtrent matchfixing en omkoping. Hoe heet deze operatie?",
                    answer: ["Panama Papers/Operatie Propere Handen (of Operatie Zero)", "Panama Papers", "Operatie Propere Handen", "Operatie Zero"],
                    solved: false
                },
                {
                    titel: "2016",
                    vraag: "Wie won op 41-jarige leeftijd zijn eerste Oscar voor zijn hoofdrol in The Revenant? James Bond film Spectre gaat naar huis met de Oscar voor beste origineel nummer. Wie zong dit nummer?",
                    answer: ["Leonardo DiCaprio was beste acteur en Sam Smith verzorgde het beste nummer met Writing's on the Wall.", 'Dicaprio', 'Sam Smith'],
                    solved: false
                },
                {
                    titel: "2017",
                    vraag: "Wie werd met 6 nominaties (waarvan hij er 3 wist te verzilveren) de ster van de MIAs? Deze Max loopt er altijd zeer fashionable bij en deed in 2005 al mee aan Eurosong for kids. Welke dame won hit van het jaar? Tip: het was de eurosong inzending van dat jaar?",
                    answer: ["Oscar and the wolf won 3 keer, Blanche had de hit van het jaar te pakken (met City Lights)", 'Oscar and the wolf', 'blanche', 'blanch'],
                    solved: false
                },
                {
                    titel: "2018",
                    vraag: "Wie won de Tour de France? Welke Belg droeg even de gele trui?",
                    answer: ["Geraint Thomas won, Greg Van Avermaet mocht 7 etappes lang in het geel fietsen", "Thomas", "Van Avermaet"],
                    solved: false
                },
                {
                    titel: "2019",
                    vraag: "Tv-serie met Sophie Declair, Titus De Voogdt en Maaike Neuville in de hoofdrol. De serie werd steeds per twee afleveringen uitgezonden waarbij dezelfde gebeurtenissen steeds langs twee kanten bekeken werden. Welke serie zoeken we? Hoe heet de eerste Vlaamse 'duikbootfilm'?",
                    answer: ["De Dag & Torpedo", 'De dag', 'torpedo'],
                    solved: false
                }
            ]
        });
    }
    initializeCrosswordRounds() {
        this.crosswordRounds.set("merken-crossword", {
            winnerText: "Hopelijk blijven jouw kleren na de fondue ook onbevlekt",
            omschrijving: "Een bisronde merken raden. Nu met 100% extra kruiswoordraadsels!",
            questions: [
                { name: "one", verticalWordLetterIndex: 1, answer: ["dove"], hint: "Een diersoort in het Engels", solved: false },
                { name: "two", verticalWordLetterIndex: 5, answer: ["mustang"], hint: "Een automerk die je in België quasi nooit ziet rijden. Ook een diersoort.", solved: false },
                { name: "three", verticalWordLetterIndex: 6, answer: ["ravensburger"], hint: "Maken speelgoed en puzzels", solved: false },
                { name: "four", verticalWordLetterIndex: 1, answer: ["becel"], hint: "Niet te dik smeren, dat is ongezond!", solved: false },
                { name: "five", verticalWordLetterIndex: 8, answer: ["harleydavidson", "harley davidson", "harley-davidson"], hint: "Met twee wielen ben je sneller de file door", solved: false },
                { name: "six", verticalWordLetterIndex: 1, answer: ["aldi"], hint: "De bijnaam van die rechtse was Lady...", solved: false },
                { name: "seven", verticalWordLetterIndex: 3, answer: ["drpepper", "dr pepper", "dr. pepper", "dokter pepper", "doctor pepper"], hint: "Artsen raden het drinken van dit merk af", solved: false },
                { name: "eight", verticalWordLetterIndex: 5, answer: ["hellokitty", "hello kitty"], hint: "Meisjes hebben er waarschijnlijk een schrift, pen, inpakpapier en dekbedovertrek van", solved: false },
                { name: "nine", verticalWordLetterIndex: 7, answer: ["kruidvat"], hint: "Amerikanen zouden het een 'Drug store' noemen. Verrast? Dat kan misschien in je voordeel spelen!", solved: false },
            ]
        });
    }
    initializeRodeDraadRounds() {
        this.rodeDraadRounds.set("rode-draad-1", {
            winnerText: "Jouw outfit ziet er vandaag ook sprankelend uit",
            omschrijving: "Vier vragen, vier antwoorden, 1 rode draad.",
            questions: [
                { vraag: "We zoeken de naam van een hondenras. De soort komt voort uit een ander ras dat oorspronkelijk gebruikt werd als een oud-griekse waak-, vecht- en herdershond. Later zette men deze honden zelfs in om op everzwijnen en beren te jagen. Sommigen namen zelfs deel aan stierengevechten. Het mannetje is gemiddeld 63 cm hoog en weegt 32 kg. Vrouwtjes zijn enkele kilo's en centimeters kleiner. Hij wordt omschreven als 'Een forse atleet met een tragisch denkershoofd en een speels hart',maar een blauw oog zal hij je niet snel slaan.", answer: ["Boxer", "Duitse Boxer"], solved: false },
                { vraag: "Wat is de naam van een houder voor vloeistoffen vervaardigd uit polyethyleentereftalaat? Ze werd in 1973 gepatenteerd en wordt gebruikt als verpakking voor onder meer cosmetica, zepen, schoonmaakmiddelen en medicijnen. Meestal bevatten ze echter gewone drinkbare stoffen zoals water of frisdrank. Met drie letters kom je al een heel eind.", answer: ["Petfles", "pet"], solved: false },
                { vraag: "Hoe heet de Belgische groep die in 1994 werd opgericht en oorspronkelijk 'Things To Come' heette? In '98 wonnen ze Humo's Rock Rally waarna singles als 'Never get enough' en 'Fool for Love' volgden. Na de release van hun plaat 'The Game' en hun daaropvolgende tour in 2012 kondigde de groep een hiatus aan die nog steeds loopt. Hun frontman begon een succesvolle solocarrière en zetelde onder meer in The Voice.", answer: ["Das Pop"], solved: false },
                { vraag: "Een glaasje alcoholhoudende drank dat je vlak voor het slapen binnengiet, hoe heet dat ook alweer? Het is ook een synoniem voor de goudpapaver, een bloem die voorkomt in de Verenigde Staten en Mexico.", answer: ["Slaapmutsje", "Slaapmuts"], solved: false },
                { vraag: "Wat is de rode draad?", answer: ["kleding", "kledij", "kledingstukken", "kledingstuk"], solved: false }
            ]
        });
        this.rodeDraadRounds.set("rode-draad-2", {
            winnerText: "Een quiztalent zoals jij kan hele inboedels winnen!",
            omschrijving: "Nog eens vier vragen en vier antwoorden. En dan nog een rode draad.",
            questions: [
                { vraag: "Elk jaar wordt er in Thailand het Loi Krathong gevierd. De deelnemers van dit religieus festival maken elk een 'Khom Loi' en laten deze los als de nacht is gevallen. Hierdoor wordt de hemel gevuld met ontelbaar veel lichtjes. Wat zijn deze 'Khom Loi's in het Nederlands?", answer: ["Lampionnen", "Lampion"], solved: false },
                { vraag: "Met een kabelbaan kan je de top van deze Zuid-Afrikaanse berg van meer dan een kilometer hoog bereiken. De berg kijkt uit over Kaapstad en heeft een typerende platte bovenkant. Wat is de naam van deze berg?", answer: ["Tafelberg"], solved: false },
                { vraag: "De vrucht van de boom die we zoeken is een noot die met 2 tot 4 stuks in een bolster zitten. De bolster wordt gevormd door schutbladen met stekels. Onder meer eekhoorns, kraaien en muizen zijn er verzot op. Ook voor de mens is de vrucht eetbaar. Je kan ze rauw eten, poffen, roosteren of koken. Indien je ze droogt kan je ze verwerken in meel.", answer: ["Kastanje", "Tamme kastanje"], solved: false },
                { vraag: "Dit turntoestel kan je ook in speeltuinen vinden. Het bestaat uit een aan verticale palen bevestigde legger van metaal of glasfiber. De elementen die turners aan dit toestel ondernemen zijn bijvboorbeeld de reuzenzwaai of de buikdraai. Vooraleer ze die elementen proberen te voltooien smeren ze hun handen echter best in met magnesium. Over welk toestel hebben we het?", answer: ["Rekstok"], solved: false },
                { vraag: "Wat is de rode draad?", answer: ["meubels", "meubel", "meubilair"], solved: false }
            ]
        });
    }
    initializePuzzleRounds() {
        this.puzzleRounds.set('puzzle-1', {
            winnerText: 'Alle puzzelstukjes vallen op hun plaats!',
            omschrijving: 'De puzzelronde, integraal gepikt uit De Slimste Mens',
            questions: [
                { answer: 'para', keywords: ['Chute', 'Sol', 'Fix', 'Maribo'] },
                { answer: 'das', keywords: ['Duits lidwoord', 'Moeilijk om te knopen', 'Woont in een burcht', 'Dat is'] },
                { answer: 'ros', keywords: ['Florence Welch', 'Clara Cleymans', 'Ed Sheeran', 'Thibault Christiaensen'] },
                { answer: 'zout', keywords: ['Umami', 'Zoet', 'Zuur', 'Bitter'] }
            ]
        });
    }
    getImageRoundQuestions(roundName) {
        return this.imageRounds.get(roundName).questions;
    }
    getCrosswordRoundQuestions(roundName) {
        return this.crosswordRounds.get(roundName).questions;
    }
    getClassicRoundQuestions(roundName) {
        return this.classicRounds.get(roundName).questions;
    }
    getRodeDraadRoundQuestions(roundName) {
        return this.rodeDraadRounds.get(roundName).questions;
    }
    getImageRoundWinnerText(roundName) {
        if (this.imageRounds.has(roundName)) {
            return this.imageRounds.get(roundName).winnerText;
        }
        else if (this.classicRounds.has(roundName)) {
            return this.classicRounds.get(roundName).winnerText;
        }
        else if (this.rodeDraadRounds.has(roundName)) {
            return this.rodeDraadRounds.get(roundName).winnerText;
        }
        else if (this.crosswordRounds.has(roundName)) {
            return this.crosswordRounds.get(roundName).winnerText;
        }
        else {
            return this.puzzleRounds.get(roundName).winnerText;
        }
    }
    getImageRoundOmschrijving(roundName) {
        return this.imageRounds.get(roundName).omschrijving;
    }
    getCrosswordRoundOmschrijving(roundName) {
        return this.crosswordRounds.get(roundName).omschrijving;
    }
    getClassicRoundOmschrijving(rondeNaam) {
        return this.classicRounds.get(rondeNaam).omschrijving;
    }
    getRodeDraadRoundOmschrijving(rondeNaam) {
        return this.rodeDraadRounds.get(rondeNaam).omschrijving;
    }
    getPuzzleRoundOmschrijving(rondeNaam) {
        return this.puzzleRounds.get(rondeNaam).omschrijving;
    }
    getImageRoundNames() {
        return this.getRoundNames(this.imageRounds);
    }
    getRoundNames(roundMap) {
        return Array.from(roundMap, ([key, value]) => {
            let imgLocation = value.imgUrl ? value.imgUrl : key;
            return {
                roundName: key,
                link: imgLocation,
                isUrl: value.imgUrl !== undefined
            };
        });
    }
    getClassicRoundNames() {
        return this.getRoundNames(this.classicRounds);
    }
    getCrosswordRoundNames() {
        return this.getRoundNames(this.crosswordRounds);
    }
    getRodeDraadRoundNames() {
        return this.getRoundNames(this.rodeDraadRounds);
    }
    getPuzzleRoundNames() {
        return this.getRoundNames(this.puzzleRounds);
    }
    getPuzzleRound(roundName) {
        return this.puzzleRounds.get(roundName);
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file for the current environment will overwrite this one during build.
// Different environments can be found in ./environment.{dev|prod}.ts, and
// you can create your own and use it with the --env flag.
// The build system defaults to the dev environment.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/ */ "./src/app/index.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app___WEBPACK_IMPORTED_MODULE_4__["QuizModule"]);


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/symbol */ "./node_modules/core-js/es6/symbol.js");
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/object */ "./node_modules/core-js/es6/object.js");
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es6/function */ "./node_modules/core-js/es6/function.js");
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es6/parse-int */ "./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/es6/parse-float */ "./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es6/number */ "./node_modules/core-js/es6/number.js");
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/es6/math */ "./node_modules/core-js/es6/math.js");
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/es6/string */ "./node_modules/core-js/es6/string.js");
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/es6/date */ "./node_modules/core-js/es6/date.js");
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/es6/array */ "./node_modules/core-js/es6/array.js");
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/es6/regexp */ "./node_modules/core-js/es6/regexp.js");
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/es6/map */ "./node_modules/core-js/es6/map.js");
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/es6/set */ "./node_modules/core-js/es6/set.js");
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone-evergreen.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__);
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// Prefer CoreJS over the polyfills above


















/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\christmasquiz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map