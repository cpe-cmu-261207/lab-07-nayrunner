import {useEffect} from 'react';
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
import Link from 'next/link'
const Home = () => {
  return (


    <div>
      <title>MY WEB</title>

      <div style={{textAlign:"center"}}>
        <h1>Home</h1>
        <br/>
        <table align = "center">
            <tr>
                {/*<th> <button >HOME </button></th>*/}
                <th><Link href ="Gallery"><button>Gallery</button></Link> </th>
                <th><Link href ="Contact"><button>Contact</button></Link> </th>
                <th><Link href ="GPA"><button >calculateGPA</button></Link> </th>
                <th><Link href ="post"><button >Post</button></Link> </th>
            </tr>
        </table>
      </div>
      <br/>

    </div>




    /*
    <div>
    <head>
        <title>Nutchanon</title>
        <div>
        <table align = "center">
            <tr>
                <th> <button  value="Home" > </button></th>
                <th><Link href ="Gallery.js"><button value="Gallery" ></button></Link> </th>
                <th><Link href ="Contact.js"><button value="Contact" ></button></Link> </th>
                <th><Link href ="GPA.js"><button  value="GPA" ></button></Link> </th>
            </tr>
        </table>
        </div>
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
                <table align="center">
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
    </div>
    */
);
      
}

export default Home
