var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = "It was 94 farenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Father","brother"];
var insertY = ["Dogs","Spiders"];
var insertZ = ["did everything","did nothing"];

randomize.addEventListener('click', result);

function result() {
  
    var newStory = storyText ;
    
    var xItem= randomValueFromArray(insertX);
    var yItem= randomValueFromArray(insertY);
    var zItem= randomValueFromArray(insertZ);
    
    newStory = newStory.replace('insertX' , xItem);
    newStory = newStory.replace('insertX' , xItem);
    newStory = newStory.replace('insertY' , yItem);
    newStory = newStory.replace('insertZ' , zItem);
    
    if(customName.value != '') {
        var name = customName.value;
        newStory = newStory.replace('Bob',name); 
    }

     if(document.getElementById("uk").checked) {
        var weight = Math.round(300*0.0714286) + ' stone'; 
        var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
        newStory = newStory.replace('94 farenheit',temperature); 
        newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory; 
  story.style.visibility = 'visible';
}