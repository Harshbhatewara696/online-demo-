class ABC // Parent Class
{
    constructor(a,b)
    {
        this.a = a 
        this.b = b
    }
    showABC()
    {
        console.log("\nA : " , this.a , " B : " , this.b)
    }
}
// Child Class
class XYZ extends ABC
{
    constructor(x,y,a,b)
    {
        super(a,b) // Parent Constructor Call
        this.x = x 
        this.y = y
    }
    showXYZ()
    {
        console.log("X : " , this.x , " Y : " , this.y)
    }
}

var ob1 = new XYZ(76,23,55,66)
ob1.showABC()
ob1.showXYZ()



