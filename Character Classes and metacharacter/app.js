// Using \b (at begining of word)sequence................

const regbs = /[\bfoot]/g;
const str1bs = "I love football";
const str2bs = "a kjufootb";
const match1bs = regbs.test(str1bs);
if(match1bs) {
    console.log("Found");
}
else{
    console.log("Not found");
}
const match2bs = regbs.test(str2bs);
if(match2bs) {
    console.log("Found");
}
else{
    console.log("Not found");
}

// Using \b (at end of word) sequence................

const regbb = /[foo\b]/;
const str1bb = "the fifoo is heavy";
const str2bb = "football is famous";
const match1bb = regbb.test(str1bb);
if(match1bb) {
    console.log("Found");
}
else{
    console.log("Not found");
}
const match2bb = regbb.test(str2bb);
if(match2bb) {
    console.log("Found");
}
else{
    console.log("Not found");
}
// Using \B(at the begining of word) sequence................

const regB = /[\Bbook]/;
const str1B = "This is my macbook";
const str2B = "this is a book";
const match1B = regB.test(str1B);
if(match1B) {
    console.log("Found");
}
else{
    console.log("Not found");
}
const match2B = regB.test(str2B);
if(match2B) {
    console.log("Found");
}
else{
    console.log("Not found");
}

// Using \B(at the end of word) sequence................

const regBb = /[boo\B]/;
const str1Bb = "I found this book the booself";
const str2Bb = "i called her boo";
const match1Bb = regBb.test(str1Bb);
if(match1Bb) {
    console.log("Found");
}
else{
    console.log("Not found");
}
const match2Bb = regBb.test(str2Bb);
if(match2Bb) {
    console.log("Found");
}
else{
    console.log("Not found");
}
// Using \d sequence................

const regd = /[\d]/;
const str1d = "html5css3";
const str2d= "javascript";
const match1d = regd.test(str1d);
if(match1d) {
    console.log("Found");
}
else{
    console.log("Not found");
}
const match2d = regd.test(str2d);
if(match2d) {
    console.log("Found");
}
else{
    console.log("Not found");
}

// Using \D sequence................

const regD = /[\D]/;
const str1D = "javascript";
const str2D= "html5css3";
const match1D = regD.test(str1D);
if(match1D) {
    console.log("Found");
}
else{
    console.log("Not found");
}
const match2D = regD.test(str2D);
if(match2D) {
    console.log("Found");
}
else{
    console.log("Not found");
}

// Using \s sequence................

const regs = /[\s]/;
const str1s = "javascript regex";
const str2s = "javascriptregex";
const match1s = regs.test(str1s);
if(match1s) {
    console.log("Found");
}
else{
    console.log("Not found");
}
const match2s = regs.test(str2s);
if(match2s) {
    console.log("Found");
}
else{
    console.log("Not found");
}

// Using \S sequence................

const regS = /[\S]/;
const str1S = "ab";
const str2S = "a b";
const match1S = regS.test(str1S);
if(match1S) {
    console.log("Found");
}
else{
    console.log("Not found");
}
const match2S = regS.test(str2S);
if(match2S) {
    console.log("Found");
}
else{
    console.log("Not found");
}

// Using \w sequence................

const regw = /[\w] /;
const str1w = "12& ;c:";
const str2w = "% >!";
const match1w = regw.test(str1w);
if(match1w) {
    console.log("Found");
}
else{
    console.log("Not found");
}
const match2w = regw.test(str2w);
if(match2w) {
    console.log("Found");
}
else{
    console.log("Not found");
}

// Using \W sequence...............

const regW = /[\W]/;
const str1W = "1a2%c";
const str2W= "JavaScript";
const match1W = regW.test(str1W);
if(match1W) {
    console.log("Found");
}
else{
    console.log("Not found");
}
const match2W = regW.test(str2W);
if(match2W) {
    console.log("Found");
}
else{
    console.log("Not found");
}
