var interaction = [
    ["User Research"],['Wireframing'],['Prototyping'],['A/B Testing'],
]
  
var data0 = interaction.reduce((ac, ele) => {
  
    ac += `<p>${ele[0]}</p>`

    return ac;
  
  }, '')

var tools = [
    ["Adobe Photoshop"],['Adobe Illustrator'],['Adobe XD'],['Sketch'],['Figma'],['Zeplin']
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


document.getElementById("interaction").innerHTML = data0;
document.getElementById("tools").innerHTML = data1;
document.getElementById("coding").innerHTML = data2;