import NavBar from "../components/navbar/NavBar";

function Home() {
    return (
        <>
            <div style={{height: '100%', minHeight: '400px'}}>
                <NavBar position="fixed" brand="GymFit" minHeight='50px' />
                <div style={{ backgroundColor: 'red', height: '100%' }}>Hello</div>
                <div style={{ backgroundColor: 'blue', height: '100%' }}>Hello</div>
            </div>
        </>
    );
}

export default Home;