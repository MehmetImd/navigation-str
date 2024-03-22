import Button from "./components/Button";

const App = () => {
    return (
        <div>
            <div>
                <Button success primary>Click me!</Button>
            </div>
            <div>
                <Button danger>Buy Now!</Button>
            </div>
            <div>
                <Button warning>See Now!</Button>
            </div>
            <div>
                <Button danger>Hello</Button>
            </div>
            <div>
                <Button secondary>UP Down</Button>
            </div>
        </div>
    );
};

export default App;