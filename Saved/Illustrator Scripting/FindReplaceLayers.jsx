#target illustrator
var doc = app.activeDocument;

jsfind = prompt("Find: ", "");
jsreplace = prompt("Replace: ", "");

for ( var i=0; i<doc.layers.length ;i++) {
var aBoard = doc.layers[i].active;
var oldName = doc.layers[i].name;
doc.layers[i].name = oldName.replace (jsfind, jsreplace);
}
