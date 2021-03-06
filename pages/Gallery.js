import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api'
const Gallery = () => {
    return (

        <div>
            <title>MY WEB</title>

<div style={{textAlign:"center"}}>
  <h1>Gallery</h1>
  <br/>
  <table align = "center">
      <tr>
          <th> <Link href ="/"><button>HOME </button></Link></th>
          {/*<th><Link href ="Gallery"><button>Gallery</button></Link> </th>*/}
          <th><Link href ="Contact"><button>Contact</button></Link> </th>
          <th><Link href ="GPA"><button >calculateGPA</button></Link> </th>
          <th><Link href ="post"><button >Post</button></Link> </th>
      </tr>
  </table>
</div>
<br/>


<fieldset>
    <legend><h2>My Gallery</h2></legend>
    <table align="center" border="1px">
                        <tbody>
                        <tr>
                            <td><img src="black magic.jpg" alt="black magician" width="200px" height="200px" /></td>
                            <td><img src="neos.jpg" alt="E-hero Neos" width="200px" height="200px"/></td>
                            <td><img src="stardust.png" alt="stardust dragon" width="200px" height="200px"/></td>
                            <td><img src="hope.png" alt="No39 king Hope" width="200px" height="200px"/></td>
                        </tr>
                        <tr>
                            <td><san>Black Magician จาก yugioh</san></td>
                            <td><san>neos จาก yugioh GX</san></td>
                            <td><san>stardust dragon <br/>จาก yugioh 5Ds</san></td>
                            <td><san>No39 king Hope <br/>จาก yugioh Zexal</san></td>
                        </tr>
                        <tr>
                            <td><img src="judy.jpg" alt="judy" width="200px" height="200px"/></td>
                            <td><img src="keanu reeves.jpg" alt="Keanu Reeves" width="200px" height="200px"/></td>
                            <td><img src="Night city at night.jpg" alt="Night city" width="200px" height="200px"/></td>
                            <td><img src="Night city at Noon.jpg" alt="Night city" width="200px" height="200px"/></td>
                        </tr>
                        <tr>
                            <td><san>น้องjudyล่ะ</san></td>
                            <td><san>Keanu Reeves <br/>"Breathtaking"</san></td>
                            <td><san>NightCity at night</san></td>
                            <td><san>NightCity at Noon</san></td>
                        </tr><tr>
                            <td><img src="cocktail.jpg" alt="cocktail" width="200px" height="200px"/></td>
                            <td><img src="Zommarie.jpg" alt="Zommarie" width="200px" height="200px"/></td>
                            <td><img src="1 ok rock.jpg" alt="one ok rock" width="200px" height="200px"/></td>
                            <td><img src="threemandown.jpg" alt="threemandown" width="200px" height="200px"/></td>
                        </tr>
                        <tr>
                            <td><san>วงcocktail <br/> "คุกเข่า ดึงดัน"</san></td>
                            <td><san>พี่ส้มมารี <br/> "กล่องสุ่ม"</san></td>
                            <td><san>1 ok rock <br/>"where ever u r"</san></td>
                            <td><san>threemandown <br/>"ทีมรอเธอ"</san></td>
                        </tr>
                        </tbody>
    </table>
</fieldset>




        </div>









        /*
    <div>
            <table align = "center" width = "800">
                <tr>
                    <th><Link href ="/"> <button value="Home" ></button></Link></th>
                    <th><button  value="Gallery" ></button></th>
                    <th><Link href ="contact"><button  value="Contact" ></button></Link> </th>
                    <th><Link href ="GPA"><button  value="GPA" ></button></Link> </th>
                </tr>
            </table>

            <body>
                    <h1>Gallery</h1>

                    <table>
                        <tbody>
                        <tr>
                            <td><img src="black magic.jpg" alt="black magician" width="200px" height="200px" /></td>
                            <td><img src="neos.jpg" alt="E-hero Neos" width="200px" height="200px"/></td>
                            <td><img src="stardust.png" alt="stardust dragon" width="200px" height="200px"/></td>
                            <td><img src="hope.png" alt="No39 king Hope" width="200px" height="200px"/></td>
                        </tr>
                        <tr>
                            <td><san>Black Magician จาก yugioh</san></td>
                            <td><san>neos จาก yugioh GX</san></td>
                            <td><san>stardust dragon <br/>จาก yugioh 5Ds</san></td>
                            <td><san>No39 king Hope <br/>จาก yugioh Zexal</san></td>
                        </tr>
                        <tr>
                            <td><img src="judy.jpg" alt="judy" width="200px" height="200px"/></td>
                            <td><img src="keanu reeves.jpg" alt="Keanu Reeves" width="200px" height="200px"/></td>
                            <td><img src="Night city at night.jpg" alt="Night city" width="200px" height="200px"/></td>
                            <td><img src="Night city at Noon.jpg" alt="Night city" width="200px" height="200px"/></td>
                        </tr>
                        <tr>
                            <td><san>น้องjudyล่ะ</san></td>
                            <td><san>Keanu Reeves <br/>"Breathtaking"</san></td>
                            <td><san>NightCity at night</san></td>
                            <td><san>NightCity at Noon</san></td>
                        </tr>
                        <tr>
                            <td><img src="cocktail.jpg" alt="cocktail" width="200px" height="200px"/></td>
                            <td><img src="Zommarie.jpg" alt="Zommarie" width="200px" height="200px"/></td>
                            <td><img src="1 ok rock.jpg" alt="one ok rock" width="200px" height="200px"/></td>
                            <td><img src="threemandown.jpg" alt="threemandown" width="200px" height="200px"/></td>
                        </tr>
                        <tr>
                            <td><san>วงcocktail <br/> "คุกเข่า ดึงดัน"</san></td>
                            <td><san>พี่ส้มมารี <br/> "กล่องสุ่ม"</san></td>
                            <td><san>1 ok rock <br/>"where ever u r"</san></td>
                            <td><san>threemandown <br/>"ทีมรอเธอ"</san></td>
                        </tr>
                        </tbody>
                    </table>



            </body>

        </div>
        */
    );
}

export default Gallery