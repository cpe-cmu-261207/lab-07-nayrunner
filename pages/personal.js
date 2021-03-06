import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api'
const Personal = () => {
    return (
        <head>
            <title>Nutchanon</title>
            
            <table align = "center" width = "800">
                <tr>
                    <th> <input type="button" value="Home" > </input></th>
                    <th><Link href ="gallery.html"><input type="button" value="Gallery" ></input></Link> </th>
                    <th><Link href ="contact.html"><input type="button" value="Contact" ></input></Link> </th>
                    <th><Link href ="GPA.html"><input type="button" value="GPA" ></input></Link> </th>
                </tr>
            </table>

            <body>
                
                <fieldset>
                
                    <legend><h1>My Name</h1></legend>
                    <table align = "left">
                    <tr>
                        <td><img src = "S__23167040.jpg" alt = "Me" width="300" height="300"></img></td>
                        <td>     <h1>Name: Nutchanon Thonganun</h1>
                                 <h2>ID: 620610785</h2>
                                 <h3>Major: Computer Engineering</h3>
                                 <h4>Chiengmai University</h4>
                        </td>
                     </tr>
                    </table>
                </fieldset>


                <fieldset>
                    <legend><h1>My Proflie</h1></legend>
                    <table align="center" border="1px" style="padding:1px; border:1px;">
                        <tr>
                            <td width = "20%"><h4>ประวัติ</h4></td>
                            <td>เกิดบนดาวโลก ประเทศไทย ไฝ่ฝันอยากเรียนเขียนโค้ดตั่งแต่เด็กแต่พอมาเรียนจริงๆเริ่มอยากตาย ปัจจุบันกําลังปวดหัวไปกับการศึกษาHTML</td>
                        </tr>
                        <tr>
                            <td width = "20%"><h4>ความสามารถ</h4></td>
                            <td> สามารถเขียนโปรแกรมภาษา java c++ html ภาษาไทย และ อังกฤษได้ มีความรู้เกี่ยวกับการสร้างเกมด้วยengineต่างๆนิดหน่อย</td>
                        </tr>
                        <tr>
                            <td width = "20%"><h4>ความฝัน</h4></td>
                            <td> ได้A วิชานี้แหละครับ</td>
                        </tr>
                        <tr>
                            <td width = "20%"><h4>ศิลปินที่ชอบ</h4></td>
                            <td> cocktail ส้มมารี oneokrock ThreeMandown</td>
                        </tr>
                        <tr>
                            <td width = "20%"><h4>ศิลปินที่ชอบ</h4></td>
                            <td> cocktail ส้มมารี oneokrock ThreeMandown</td>
                        </tr>
                        <tr>
                            <td width = "20%"><h4>งานอดิเรก</h4></td>
                            <td> เล่นเกม ฟังเพลง เขียนโค้ด</td>
                        </tr>
                    </table>
                </fieldset>



            </body>

        </head> 
    );
}

export default Personal