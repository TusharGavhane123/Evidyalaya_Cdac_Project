import Contact from './Components1/Contact';
import About from './Components1/About';
import Home from './Components1/Home';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import {Route,Routes} from 'react-router-dom';
import Signin from './Components1/Signin';
import Student from "./StudentPages/Student"
import TimeTable from "./StudentPages/TimeTable"
import NoticeBoard from './StudentPages/NoticeBoard';
import ViewFaculty from './StudentPages/ViewFaculty';
import Assignment from './StudentPages/Assignment';
import Logout from './Components1/Logout';
import Faculty from './FacultyPages/Faculty';
import AddTimeTable from './FacultyPages/AddTimeTable';
import ViewTimeTable from './FacultyPages/ViewTimeTable';
import AddNoticeBoard from './FacultyPages/AddNoticeBoard';
import ViewNoticeBoard from './FacultyPages/ViewNoticeBoard';
import ViewStudent from './FacultyPages/ViewStudent';
import UploadAssignment from './FacultyPages/UploadAssignment';
import ViewAssignment from './FacultyPages/ViewAssignment';
import AssignmentAnswer from './FacultyPages/ViewAssignmentAnswer';
//import AddFaculty from './AdminPages/AddFaculty';
import AddStudent from './AdminPages/AddStudent';
import EditFaculty from './AdminPages/EditFaculty';
import EditStudent from './AdminPages/EditStudent';
import AdminViewFaculty from './AdminPages/AdminViewFaculty';
import AdminViewStudent from './AdminPages/AdminViewStudent';
import Admin from './AdminPages/Admin';
import AddFaculty1 from './AdminPages/AddFaculty1';
import EditNoticeBoard from './FacultyPages/EditNoticeBoard';
import EditTimeTable from './FacultyPages/EditTimeTable';
import Result from './StudentPages/Result';
import EditAssignment from './FacultyPages/EditAssignment';

function App() {
return (
<div className="App">
  
 <Routes>

<Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route exact path="/contact" element={<Contact/>}></Route>
<Route exact path="/signin" element={<Signin/>}></Route>
<Route exact path="/logout" element={<Logout/>}/>

<Route exact path="/student" element={<Student/>}></Route>
<Route exact path="/student/timetable" element={<TimeTable/>}/>
<Route exact path="/student/noticeboard" element={<NoticeBoard/>}/>
<Route exact path="/student/faculty" element={<ViewFaculty/>}/>
<Route exact path="/student/assignment" element={<Assignment/>}/>
<Route exact path="/student/result" element={<Result/>}/>

<Route exact path="/faculty" element={<Faculty/>}/>
<Route exact path="/faculty/addtimetable/" element={<AddTimeTable/>}/>
<Route exact path="/faculty/viewtimetable" element={<ViewTimeTable/>}/>
<Route exact path="/faculty/addnoticeboard" element={<AddNoticeBoard/>}/>
<Route exact path="/faculty/viewnoticeboard" element={<ViewNoticeBoard/>}/>
<Route exact path="/faculty/viewstudent" element={<ViewStudent/>}/>
<Route exact path="/faculty/addassignment" element={<UploadAssignment/>}/>
<Route exact path="/faculty/viewassignment" element={<ViewAssignment/>}/>
<Route path="/faculty/viewassignmentanswer" element={<AssignmentAnswer/>}/>
<Route  path="/faculty/editnoticeboard/:id" element={<EditNoticeBoard/>}/>
<Route  path="/faculty/edittimetable/:id" element={<EditTimeTable/>}/>
<Route exact path="/faculty/viewtimetable" element={<ViewTimeTable/>}/>
<Route  path="/faculty/editassignment/:id" element={<EditAssignment/>}/>


<Route exact path="/admin" element={<Admin/>}/>
<Route exact path="/admin/addfaculty" element={<AddFaculty1/>}/>
<Route exact path="/admin/viewfaculty" element={<AdminViewFaculty/>}/> 
<Route exact path="/admin/addstudent" element={<AddStudent/>}/>
<Route exact path="/admin/viewstudent" element={<AdminViewStudent/>}/>
<Route  path="/admin/editstudent/:id" element={<EditStudent/>}/>
<Route path="/admin/editfaculty/:id" element={<EditFaculty/>}/>

</Routes>
</div>
);
}

export default App;
