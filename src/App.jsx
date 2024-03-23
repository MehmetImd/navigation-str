import Button from "./components/Button";

const App = () => {
    return (
        <div>
            <div>
                <Button success outline>Click me!</Button>
            </div>
            <div>
                <Button danger rounded>Buy Now!</Button>
            </div>
            <div>
                <Button warning>See Now!</Button>
            </div>
            <div>
                <Button secondary>Hello</Button>
            </div>
            <div>
                <Button primary>UP Down</Button>
            </div>
        </div>
    );
};

export default App;