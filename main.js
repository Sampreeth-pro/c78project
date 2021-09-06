var images = ["https://e7.pngegg.com/pngimages/392/734/png-clipart-mother-cartoon-mother-child-face-thumbnail.png","download (4).png","download.jpg"];
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          
          document.getElementById("family_member_image").src = images[i];
          document.getElementById("family_member_name").innerHTML = names[i];
      }
      i++;   
    
   
}