import UserSvg from "../src/assets/user.svg"
import RobotSvg from "../src/assets/robot.svg"
const ChatMessage = ({message, sender}) => {

    /* DESTRUCTURED THE BELOW INTO THE PARAMETERS UP */

    //const message, = props.message;
    // const sender = props.sender; (destructuring)

    /*if(sender === 'robot'){
        return(
           <div>
             <img src={RobotSvg} width={50} alt="Robot svg icon" />
             {message}
           </div>
        )
    };*/

  return (
    <div>
        {sender === 'robot' && (
            <img src={RobotSvg} width={50} alt="Robot svg icon" />
            )}
        {message}

        {sender === 'user' && (
            <img src={UserSvg} width={50} alt="" />
            )}
    </div>
  )
}

export default ChatMessage