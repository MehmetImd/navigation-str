import Button from "./components/Button";
import { MdAccountBalance, MdEmojiEvents, MdHelp, MdPermMedia, MdPinDrop } from "react-icons/md";

const App = () => {
    const handleClick = () => {
        console.log('Click!');
    };

    return (
        <div>
            <div>
                <Button success outline className='mb-5' onClick={handleClick}>
                    <MdAccountBalance />
                    Click me!
                </Button>
            </div>
            <div>
                <Button danger rounded onMouseEnter={handleClick}>
                    <MdEmojiEvents />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning onMouseLeave={handleClick}>
                    <MdHelp />
                    See Now!
                </Button>
            </div>
            <div>
                <Button secondary>
                    <MdPermMedia />
                    Hello
                </Button>
            </div>
            <div>
                <Button primary>
                    <MdPinDrop />
                    UP Down
                </Button>
            </div>
        </div>
    );
};

export default App;