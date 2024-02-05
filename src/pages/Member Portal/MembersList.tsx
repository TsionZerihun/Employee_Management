import React, { useEffect, useState } from 'react';
import axios from "axios";
import {baseUrl} from '../../constant';
import {Link} from 'react-router-dom';

import {MENU} from '../../modules/main/menu-sidebar/MenuSidebar';
import {SidebarSearch} from '@app/components/sidebar-search/SidebarSearch';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Stack,
  colors,
} from '@mui/material';
import {makeStyles} from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Pagination from '@mui/material/Pagination';

// Define the Member interface
interface Member {
  MemberId: number;
  Email: string;
  Title: string;
  FirstName: string;
  MiddleName?: string;
  Gender: string;
  BirthDate?: Date;
  Phone: string;
}

const MembersList: React.FC = () => {

  const [membersData, setmembersData] = useState([]);
  const [searchString, setSearchString] = useState("Amare");
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  // Sample members data


  useEffect(() => {
  refreshData();
  }, [])
 const searchPaginate = ()=>{
  alert("ok");
  if(pageSize>3){
    setPageSize(1);
  }
  else{
    setPageSize(x=>x+1);
  }
  refreshData();
 }
  const [members, setMembers] = useState<Member[]>();
  const [page, setPage] = useState(2);
  const membersPerPage = 5;

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };
 
  const handleDelete = (memberId: number) => {
    // const updatedMembers = members.filter((member) => member.MemberId !== memberId);
    // setMembers(updatedMembers);
    console.log(`Edit member with ID: ${memberId}`);
    axios.delete(baseUrl + '/members/' +memberId).then((response) => {
      console.log(response.data);
      refreshData();
          });
  };
  

  const handleEdit = (memberId: number) => {
    axios.put(baseUrl + '/members/' + memberId).then((response) => {
      console.log(response.data);
     setmembersData(response.data);
          });
    console.log('Edit member with ID:');
  };

const refreshData = () => {
 
  
  let url=baseUrl + "/Members/paginated?searchKey="+searchString+"&pageindex="+pageIndex+"&pageSize="+pageSize;
  axios.get(url).then((response) => {
    console.log(response.data);
    setmembersData(response.data);
        });
  console.log('formData');
}

  

  const startIndex = (page - 1) * membersPerPage;
  const endIndex = startIndex + membersPerPage;
 // const displayedMembers = members.slice(startIndex, endIndex);

  return (

    <>
    
      <TableContainer component={Paper}>
      <Stack paddingLeft={100} paddingTop={1}direction={"row"} spacing={2}>
            <Button href="/MemerberRegister/new" variant="contained" >
               ADD 
              </Button> 
        <SidebarSearch/>
  </Stack>
<button onClick={searchPaginate}>demo </button>
        <Table>
          <TableHead>
        
          
            <TableRow >
          
            
              <TableCell>Title</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Middle Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Birth Date</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {membersData.map((member: any) => (
              <TableRow key={member.id}>
           
                
                <TableCell>{member.title}</TableCell>
                <TableCell>{member.firstName}</TableCell>
                <TableCell>{member.middleName}</TableCell>
                <TableCell>{member.gender}</TableCell>
                <TableCell>{member.BirthDate?.toLocaleDateString()}</TableCell>
                <TableCell>{member.phone}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDelete(member.id)}>
                    <DeleteIcon />
                  </IconButton >
                  <IconButton onClick ={()=>handleEdit(member.id)}>
                  <Link to={'/MemerberRegister/'+ member.id}> <EditIcon /></Link>
                  </IconButton>
                  {/* <IconButton onClick={() => handleEdit(member.id)}>
                   
                  </IconButton> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
      
       // count={Math.ceil(members.length / membersPerPage)}// total no of page
        page={page} 
        variant="outlined" color="secondary" 
        onChange={handleChangePage}
      />
    </>
  );
};

export default MembersList;