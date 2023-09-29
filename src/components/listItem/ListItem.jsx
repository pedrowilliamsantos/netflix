import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useState } from "react"

const ListItem = ({index}) => {

    const [isHovered, setIsHovered] = useState(false)
    return (
        <div className="listItem" onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} style={{left: isHovered && index * 225 - 50 + index * 2.5}}>
            <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow/>
                    <Add/>
                    <ThumbUpAltOutlined/>
                    <ThumbDownAltOutlined/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 30 min</span>
                    <span className="limit">+18</span>
                    <span>2010</span>
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum neque blanditiis 
                    similique veniam, quo temporibus soluta inventore beatae illum voluptatum ullam, 
                    earum ratione doloribus veritatis corporis placeat iste deserunt est!
                </div>
                <div className="genre">Action</div>
            </div>
        </div>
    )
}

export default ListItem