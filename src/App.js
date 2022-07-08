import NameForm from './Components/NameForm';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Student from './Components/Student';
import AddStudents from './Components/AddStudent';

function App() {

  let Name="Amit";
  let LastName="Singh";
  let Address="kharak"
  let PhoneNumber=8053205361;
  let Fee=1000;

  return (
    <div >
      

      <AddStudents
                  name={Name} 
                  lastname={LastName} 
                  address={Address}
                  phonenumber={PhoneNumber}
                  fee={Fee}
      ></AddStudents>
      <Student></Student>
    <Navbar></Navbar>
    <NameForm></NameForm>
    </div>
  );
}

export default App;
