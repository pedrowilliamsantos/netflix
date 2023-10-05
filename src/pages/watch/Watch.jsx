import { ArrowBackIosOutlined } from "@material-ui/icons"
import "./watch.scss"

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackIosOutlined/>
            home
        </div>
        <video className="video" autoPlay progress controls src="https://media.istockphoto.com/id/1423721886/pt/v%C3%ADdeo/men-close-fighting-in-dim-basement.mp4?s=mp4-640x640-is&k=20&c=biV3MzbPqVHOZ3ZOvWDE08L5asoYmjvwuYGzGPGE7P0="/>
    </div>
  )
}

export default Watch