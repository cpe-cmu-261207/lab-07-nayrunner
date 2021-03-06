import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api'
const Contact = () => {
    return (

<div>
        <div style={{textAlign:"center"}}>
        <h1>Contect</h1>
        <br/>
        <table align = "center">
            <tr>
                <th> <Link href ="/"><button>HOME </button></Link></th>
                <th><Link href ="Gallery"><button>Gallery</button></Link> </th>
                {/*<th><Link href ="Contact"><button>Contact</button></Link> </th>*/}
                <th><Link href ="GPA"><button >calculateGPA</button></Link> </th>
                <th><Link href ="post"><button >Post</button></Link> </th>
            </tr>
        </table>
        </div>


        <br/>

        <fieldset>
        <legend><h1>Contact</h1></legend>
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname"></input><br/>
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname"></input><br/>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"></input><br/>
                    <label for="birthday">Birthday:</label>
                    <input type="date" id="birthday" name="birthday"></input><br/>
                    <label for="birthday">Phone Number:</label>
                    <input type="text" id="number" name="phone number"></input><br/>
                    <button type="submit" value="Submit">ตกลง</button>
        </fieldset>

        
      </div>




        /*
        <div>
        <head>
            <title>Nutchanon</title>
            
            <table align = "center" width = "800">
                <tr>
                    <th><Link href ="personal"><button value="Home" ></button></Link> </th>
                    <th><Link href ="gallery"><button value="Gallery" ></button></Link> </th>
                    <th><button value="Contact" > </button></th>
                    <th><Link href ="GPA"><button value="GPA" ></button></Link> </th>
                </tr>
            </table>

            <body>
                <Fieldset>
                    <legend><h1>Contact</h1></legend>
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname"></input><br/>
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname"></input><br/>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"></input><br/>
                    <label for="birthday">Birthday:</label>
                    <input type="date" id="birthday" name="birthday"></input><br/>
                    <label for="birthday">Phone Number:</label>
                    <input type="text" id="number" name="phone number"></input><br/>
                    <button type="submit" value="Submit"></button>
                </Fieldset>
            </body>
        </head>
        </div>
        */
        );
}

export default Contact