import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel,
         Grid, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';
        
export interface Family {
  firstName: string;
  }

interface FamilyFormProps {
  onBack: () => void;
  onSave: (data: Family) => void;
  name:any;
  address:any;
  edu:any;
  work:any;
  finance:any;
  service:any;
  spritual:any;
  gibegubae:any;
  parish:any;
  emergency:any;
  family:any;
}

const  FamilyForm: React.FC<FamilyFormProps> = ( {edu, name, address, work, finance, spritual, service, gibegubae, parish, emergency, family, onBack, onSave }) => {
  const [formData, setFormData] = useState<Family>({
  
    firstName: '',
    
  });

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name as string]: value,
     
    }));
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    

  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    onSave(formData);
    event.preventDefault();
  };
  
  return (
    <>
      <form style={{
        width: "100%",
        padding: "20px",
        paddingLeft: "60px",
        paddingRight: "30px",


                   }} >

        <Grid container sx={{

              bgcolor: '#fff',
              boxShadow: '2px 3px 3px 1px #ccc',
              borderRadius: "5px",
              padding: '10px',
              paddingRight: '25px'
              }}
                spacing={4}
                rowSpacing={1} >
                  <Grid item xs={12}>
                    <h1>Member Detail</h1>
                  </Grid>
                          <Grid item xs={12} sm={6} md={2}>
                            <span className="{classes.field}">First Name</span>
                            <TextField
                              className="{classes.field}"
                              value={name.firstName}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={2}>
                            <span className="{classes.field}">Middle Name</span>
                            <TextField
                              className="{classes.field}"
                              value={name.middleName}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={2}>
                            <span className="{classes.field}">Last Name</span>
                            <TextField
                              className="{classes.field}"
                              value={name.lastName}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={2}>
                          <span className="{classes.field}">Email</span>
                            <TextField
                              className="{classes.field}"
                              value={name.email}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={2}>
                          <span className="{classes.field}">Title</span>
                            <TextField
                              className="{classes.field}"
                              value={name.title}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={2}>
                          <span className="{classes.field}">Gender</span>
                            <TextField
                              className="{classes.field}"
                              value={name.gender}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={2}>
                          <span className="{classes.field}">Baptist Name</span>
                            <TextField
                              className="{classes.field}"
                              value={name.baptistName}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={2}>
                          <span className="{classes.field}">Birthdate</span>
                            <TextField
                              className="{classes.field}"
                              value={name.birthDate}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={2}>
                          <span className="{classes.field}">phone</span>
                            <TextField
                              className="{classes.field}"
                              value={name.phone}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={2}>
                          <span className="{classes.field}">Mk-Employee</span>
                            <TextField
                              className="{classes.field}"
                              value={name.isMkEmployee}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={2}>
                          <span className="{classes.field}">ACTIVE</span>
                            <TextField
                              className="{classes.field}"
                              value={name.isMemberActive}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={2}>
                          <span className="{classes.field}">ROLE</span>
                            <TextField
                              className="{classes.field}"
                              value={name.role}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
        </Grid>
        
        <Grid container sx={{

      bgcolor: '#fff',
      boxShadow: '2px 3px 3px 1px #ccc',
      borderRadius: "5px",
      padding: '10px',
      paddingRight: '25px'
      }}
        spacing={4}
        rowSpacing={1} >
          <Grid item xs={12}>
            <h1>Address Detail</h1>
          </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <span className="{classes.field}">Country</span>
                    <TextField
                      className="{classes.field}"
                      value={address.Country}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <span className="{classes.field}">Region</span>
                    <TextField
                      className="{classes.field}"
                      value={address.Region}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <span className="{classes.field}">Zone</span>
                    <TextField
                      className="{classes.field}"
                      value={address.Zone}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                  <span className="{classes.field}">Woreda</span>
                    <TextField
                      className="{classes.field}"
                      value={address.Woreda}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                  <span className="{classes.field}">Kebele</span>
                    <TextField
                      className="{address.Kebele}"
                      value={name.title}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
        </Grid>

        <Grid container sx={{

                bgcolor: '#fff',
                boxShadow: '2px 3px 3px 1px #ccc',
                borderRadius: "5px",
                padding: '10px',
                paddingRight: '25px'
                }}
        spacing={4}
        rowSpacing={1} >
          <Grid item xs={12}>
            <h1>Education Detail</h1>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Qualification</span>
              <TextField
                className="{edu.Qualification}"
                value={edu.Qualification}
                onChange={handleChange}
                fullWidth
              />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Department</span>
              <TextField
                className="{edu.Department}"
                value={edu.Department}
                onChange={handleChange}
                fullWidth
              />
          </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Other</span>
              <TextField
                className="{edu.OtherEducation}"
                value={edu.OtherEducation}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            
            
        </Grid>

        <Grid container sx={{

            bgcolor: '#fff',
            boxShadow: '2px 3px 3px 1px #ccc',
            borderRadius: "5px",
            padding: '10px',
            paddingRight: '25px'
            }}
            spacing={4}
            rowSpacing={1} >
            <Grid item xs={12}>
            <h1>Work Status</h1>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <span className="{classes.field}">currently employed</span>
            <TextField
            className="{work.AreEmployee}"
            value={work.AreEmployee}
            onChange={handleChange}
            fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <span className="{classes.field}">Current Workplace</span>
            <TextField
            className="{work.CurrentWorkPlace}"
            value={work.CurrentWorkPlace}
            onChange={handleChange}
            fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <span className="{classes.field}">Organization</span>
            <TextField
            className="{work.NameofOrganization}"
            value={work.NameofOrganization}
            onChange={handleChange}
            fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <span className="{classes.field}">Responsibility</span>
            <TextField
            className="{work.WorkResponsibility}"
            value={work.WorkResponsibility}
            onChange={handleChange}
            fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <span className="{classes.field}">Work Status</span>
            <TextField
            className="{work.WorkStatus}"
            value={work.workStatus}
            onChange={handleChange}
            fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <span className="{classes.field}">Position</span>
            <TextField
            className="{work.CurrentJobPosition}"
            value={work.CurrentJobPosition}
            onChange={handleChange}
            fullWidth
            />
            </Grid>


        </Grid>

        <Grid container sx={{

            bgcolor: '#fff',
            boxShadow: '2px 3px 3px 1px #ccc',
            borderRadius: "5px",
            padding: '10px',
            paddingRight: '25px'
            }}
            spacing={4}
            rowSpacing={1} >
            <Grid item xs={12}>
            <h1>Donation</h1>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <span className="{classes.field}">Monthly Donation</span>
            <TextField
            className="{finance.monthlyDonor}"
            value={finance.monthlyDonor}
            onChange={handleChange}
            fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <span className="{classes.field}">Current Workplace</span>
            <TextField
            className="{finance.monthlyDonor}"
            value={finance.monthlyDonor}
            onChange={handleChange}
            fullWidth
            />
            </Grid>
        </Grid>

        <Grid container sx={{

              bgcolor: '#fff',
              boxShadow: '2px 3px 3px 1px #ccc',
              borderRadius: "5px",
              padding: '10px',
              paddingRight: '25px'
              }}
              spacing={4}
              rowSpacing={1} >
              <Grid item xs={12}>
              <h1>Service</h1>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Dep't</span>
              <TextField
              className="{service.serviceDepartment}"
              value={service.serviceDepartment}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Section</span>
              <TextField
              className="{service.serviceSection}"
              value={service.serviceSection}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Year</span>
              <TextField
              className="{service.serviceYear}"
              value={service.serviceYear}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Meeting</span>
              <TextField
              className="{service.serviceMeeting}"
              value={service.serviceMeeting}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Task</span>
              <TextField
              className="{service.haveTask}"
              value={service.haveTask}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Responsibility</span>
              <TextField
              className="{service.responsibility}"
              value={service.responsibility}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Avaliability</span>
              <TextField
              className="{service.canTakeService}"
              value={service.canTakeService}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Can be Assigned</span>
              <TextField
              className="{service.wantToOtherAssignmen}"
              value={service.wantToOtherAssignment}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Member Since</span>
              <TextField
              className="{service.memberSince}"
              value={service.memberSince}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Service Center</span>
              <TextField
              className="{service.serviceCenter}"
              value={service.serviceCenter}
              onChange={handleChange}
              fullWidth
              />
              </Grid>


        </Grid>

        <Grid container sx={{

              bgcolor: '#fff',
              boxShadow: '2px 3px 3px 1px #ccc',
              borderRadius: "5px",
              padding: '10px',
              paddingRight: '25px'
              }}
              spacing={4}
              rowSpacing={1} >
              <Grid item xs={12}>
              <h1>Spritual Father Information</h1>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Name</span>
              <TextField
              className="{spritual.spirFatherName}"
              value={spritual.spirFatherName}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Title</span>
              <TextField
              className="{spritual.spiritualTitle}"
              value={spritual.spiritualTitle}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">School</span>
              <TextField
              className="{spritual.spirSchoolName}"
              value={spritual.spirSchoolName}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Graduated on</span>
              <TextField
              className="{spritual}"
              value={spritual.spirFatherName}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Phone Number</span>
              <TextField
              className="{spritual.spirFatherName}"
              value={spritual.spirFatherName}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Parish</span>
              <TextField
              className="{spritual.spirFatherParish}"
              value={spritual.spirFatherParish}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              


        </Grid>

        <Grid container sx={{

              bgcolor: '#fff',
              boxShadow: '2px 3px 3px 1px #ccc',
              borderRadius: "5px",
              padding: '10px',
              paddingRight: '25px'
              }}
              spacing={4}
              rowSpacing={1} >
              <Grid item xs={12}>
              <h1>Gebi Gubae</h1>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Was Member</span>
              <TextField
              className="{gibegubae.haveBeenGibiGubae}"
              value={gibegubae.haveBeenGibiGubae}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Name</span>
              <TextField
              className="{gibegubae.gibiGubaeName}"
              value={gibegubae.gibiGubaeName}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <span className="{classes.field}">Place</span>
              <TextField
              className="{gibegubae.gibiGubaeName}"
              value={gibegubae.gibiGubaeName}
              onChange={handleChange}
              fullWidth
              />
              </Grid>
            



        </Grid>

        <Grid container sx={{

          bgcolor: '#fff',
          boxShadow: '2px 3px 3px 1px #ccc',
          borderRadius: "5px",
          padding: '10px',
          paddingRight: '25px'
          }}
          spacing={4}
          rowSpacing={1} >
          <Grid item xs={12}>
          <h1>Parish</h1>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
          <span className="{classes.field}">Church Name</span>
          <TextField
          className="{parish.parshChurchName}"
          value={parish.parshChurchName}
          onChange={handleChange}
          fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
          <span className="{classes.field}">Role in Church</span>
          <TextField
          className="{parish.roleInParishChurch}"
          value={parish.roleInParishChurch}
          onChange={handleChange}
          fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
          <span className="{classes.field}">Church Address</span>
          <TextField
          className="{parish.parshChurchAddress}"
          value={parish.parshChurchAddress}
          onChange={handleChange}
          fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
          <span className="{classes.field}">Church Address</span>
          <TextField
          className="{parish.parshChurchAddress}"
          value={parish.parshChurchAddress}
          onChange={handleChange}
          fullWidth
          />
          </Grid>




        </Grid>

        <Grid container sx={{

          bgcolor: '#fff',
          boxShadow: '2px 3px 3px 1px #ccc',
          borderRadius: "5px",
          padding: '10px',
          paddingRight: '25px'
          }}
          spacing={4}
          rowSpacing={1} >
          <Grid item xs={12}>
          <h1>Emergency Contact</h1>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
          <span className="{classes.field}">Name</span>
          <TextField
          className="{emergency.EmergName}"
          value={emergency.EmergName}
          onChange={handleChange}
          fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
          <span className="{classes.field}">Phone</span>
          <TextField
          className="{emergency.EmergPhone}"
          value={emergency.EmergPhone}
          onChange={handleChange}
          fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
          <span className="{classes.field}">Relation</span>
          <TextField
          className="{emergency.EmergRelation}"
          value={emergency.EmergRelation}
          onChange={handleChange}
          fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
          <span className="{classes.field}">Email</span>
          <TextField
          className="{emergency.EmergEmail}"
          value={emergency.EmergEmail}
          onChange={handleChange}
          fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
          <span className="{classes.field}">Address</span>
          <TextField
          className="{emergency.EmergAddress}"
          value={emergency.EmergAddress}
          onChange={handleChange}
          fullWidth
          />
          </Grid>
        </Grid>

        <Grid container sx={{

            bgcolor: '#fff',
            boxShadow: '2px 3px 3px 1px #ccc',
            borderRadius: "5px",
            padding: '10px',
            paddingRight: '25px'
            }}
            spacing={4}
            rowSpacing={1} >
            <Grid item xs={12}>
            <h1>Family Information</h1>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <span className="{classes.field}">Martial Status</span>
            <TextField
            className="{family.maritalStatus}"
            value={family.maritalStatus}
            onChange={handleChange}
            fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <span className="{classes.field}">Have Children</span>
            <TextField
            className="{family.haveChildren}"
            value={family.haveChildren}
            onChange={handleChange}
            fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <span className="{classes.field}">Member</span>
            <TextField
            className="{family.isSpouseMember}"
            value={family.isSpouseMember}
            onChange={handleChange}
            fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
            <span className="{classes.field}">Spouse Name</span>
            <TextField
            className="{family.spouseName}"
            value={family.spouseName}
            onChange={handleChange}
            fullWidth
            />
            </Grid>
        </Grid>
        <br/>
        <Stack direction="row" spacing={2}>
        <Button variant="contained"onClick={onBack}>
          Back
        </Button>
        <Button  type="submit" variant="contained" color='success' >
          Save
        </Button>
        </Stack>
     
      </form>
    </>

  );
};


export default FamilyForm;