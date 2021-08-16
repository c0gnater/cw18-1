var student;
function setup() {
  createCanvas(400,400);
student=new Student("student",13,7)
}

function draw() 
{
  background(30);
  student.display();
}