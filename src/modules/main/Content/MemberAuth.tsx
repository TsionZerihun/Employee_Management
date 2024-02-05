/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect,useState } from 'react';
import axios from 'axios';

const [id,setId]=useState("");
const [user_name ,setuser_name]=useState("");
const [password ,setpassword]=useState("");
const [confirmpassword,setconfirmpassword]=useState("");
const [registers ,setMember]=useState([]);
export default async function MemberAuth():Promise<JSX.Element>{
useEffect(()=>{
    (async ()=>await Load())();
},[]);
async function Load(){
    const result=await axios.get("http://localhost:5259/api/Register");
    setMember(result.data);
    console.log(result.data);
}
async function save(event:any){
    event.PreventDefault();
    try{
        await axios.post("http://localhost:5259/api/Register",{
            Email:user_name,
            Password:password,
            ConfirmPassword:confirmpassword,
        });
    alert("Member registeration Successfully");
    setId("");
    setuser_name("");
    setpassword("");
    setconfirmpassword("");
    Load();
}catch(err){
    alert(err);
}}
async  function EditMember(registers:any){
    setuser_name(registers.user_name);
    setpassword(registers.password);
    setconfirmpassword(registers.confirmpassword);
setId(registers.id);
}
async function DeleteMember(id:any){
await axios.delete("http://localhost:5259/api/Register"+id);
alert("Member deleted successfuly");
setId("");
setuser_name("");
setpassword("");
setconfirmpassword("");
Load();
}
async function update(event:any){
event.PreventDefault();
try{
    await axios.put("http://localhost:5259/api/Register" + registers.find((u:any)=>u.id===id),
    {
        id:id,
        user_name:user_name,
        password:password,
        confirmpassword:confirmpassword,
    });
    alert("updated successfully");
    setId("");
    setuser_name("");
    setpassword("");
    setconfirmpassword("");
    Load();
}catch(err){
    alert(err);
}
}
return (
<div>
    <h2>Register Member</h2>
    <div className='container mt-4'>

    
    <form>
    <div className='form-group'>
            <label>User Id</label>
            <input type='text'className='form-control'
            id='id'hidden
            value={id}
            onChange={(event)=>{
                setId(event.target.value);
            }}
            />
        </div>
        <div className='form-group'>
            <label>User Name</label>
            <input type='text'className='form-control'
            id='User_Name'value={user_name}
            onChange={(event)=>{
                setuser_name(event.target.value);
            }}
            />
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input type='password'className='form-control'
            id='password'value={password}
            onChange={(event)=>{
                setpassword(event.target.value);
            }}
            />
        </div>
        <div className='form-group'>
            <label>Confirm Password</label>
            <input type='text'className='form-control'
            id='Confirmpassword'value={confirmpassword}
            onChange={(event)=>{
                setconfirmpassword(event.target.value);
            }}
            />
        </div>
        <div>
            <button className='btn btn-primary mt-4'onClick={save}>Register</button>
            
            <button className='btn btn-primary mt-4'onClick={update}>Updated</button>
        </div>
        
    </form>
    
    </div>
    <br></br>
    <table className='table table-dark'align='center'>
    <thead>
        <tr>
            <th scope='col'>Member Id</th>
            <th scope='col'>Member UserName</th>
            <th scope='col'>Member Password</th>
            <th scope='col'>Member ConfirmPassword</th>
            <th scope='col'>Action</th>
        </tr>
    </thead>
    {registers.map(function fn(MemberAuthication:any){
return (
    <tbody>
        <tr>
            <th scope="row">{MemberAuthication.id}</th>
            <td>{MemberAuthication.user_name}</td>
            <td>{MemberAuthication.password}</td>
            <td>{MemberAuthication.confirmpassword}</td>
            <td>
                <button type='button' className='btn btn-warning'
                onClick={()=>EditMember(MemberAuthication)}>Edit</button>
            <button type='button'className='btn btn-danger'
            onClick={()=>DeleteMember(MemberAuthication.id)}>Delete

            </button>
            </td>
        </tr>
    </tbody>);
    })}
    </table>
    </div>
)

}
