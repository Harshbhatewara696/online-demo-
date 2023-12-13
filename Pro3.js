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

class PQR extends XYZ
{
    constructor(p,x,y,a,b)
    {
        super(x,y,a,b)
        this.p = p
    }
    showPQR()
    {
        console.log("P : " , this.p)
    }
}

var ob1 = new PQR(76,23,55,66,21)
ob1.showABC()
ob1.showXYZ()
ob1.showPQR()



