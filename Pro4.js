class ABC 
{
    fun1()
    {
        console.log("ABC Fun1 ..... ")
    }

    fun2()
    {
        console.log("ABC Fun2 ..... ")
    }

    fun3()
    {
        console.log("ABC Fun3 ..... ")
    }
}

class XYZ extends ABC
{
    hello()
    {
        console.log("XYZ hello ..... ")
    }

    fun2()
    {
        console.log("XYZ Fun2 ..... ")
    }

    fun3()
    {
        super.fun3()
        console.log("XYZ Fun3 ..... ")
    }
}



var ob1 = new XYZ()

ob1.fun1() // Inherited Method
ob1.hello() // Self Method
ob1.fun2() // Override Method
ob1.fun3() 



                            
