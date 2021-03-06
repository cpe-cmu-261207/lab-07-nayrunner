import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api'
const Contact = () => {
    return (
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
        );
}

export default Contact