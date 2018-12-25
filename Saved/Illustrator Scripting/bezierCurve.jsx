var docRef = documents.add();
var piRef = activeDocument.pathItems;
var myPath = app.activeDocument.pathItems.add();

{
var newPoint = myPath.pathPoints.add();
newPoint.leftControl = [10, -5];
newPoint.anchor = [0, 0];
newPoint.rightControl = [-10, 5];
}
