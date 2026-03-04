import Header from './Header.jsx';
import Footer from './Footer.jsx';  
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';

function App() {
  return (
    <div>
      <Header></Header>
      <Food></Food>
      <Footer></Footer>
      <Card></Card>
      <Button></Button>
      <Student></Student>

      
      <Student name="John Doe" age={20} isStudent={true} />
      <Student name="Jane Smith" age={25} isStudent={false} />
      

      

    </div>
  );
}

export default App

  
