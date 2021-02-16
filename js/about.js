var brainstorming = [
    ["User Research"],['Wireframing'],['Prototyping'],['A/B Testing'],
]
  
var data0 = brainstorming.reduce((ac, ele) => {
  
    ac += `<p>${ele[0]}</p>`

    return ac;
  
  }, '')

var tools = [
    ["Photoshop"],['Illustrator'],['Adobe XD'],['Sketch'],['Figma'],['Zeplin']
]
  
var data1 = tools.reduce((ac, ele) => {
  
    ac += `<p>${ele[0]}</p>`

    return ac;
  
}, '')

var coding = [
    ["HTML"],['CSS'],['Javascript'],['Jquery UI'],['Flutter UI'],['CMS - Wordpress']
]
  
var data2 = coding.reduce((ac, ele) => {
  
    ac += `<p>${ele[0]}</p>`

    return ac;
  
}, '')


document.getElementById("brainstorming").innerHTML = data0;
document.getElementById("tools").innerHTML = data1;
document.getElementById("coding").innerHTML = data2;



var element = document.getElementById("aboutNav");
  element.classList.add("active");