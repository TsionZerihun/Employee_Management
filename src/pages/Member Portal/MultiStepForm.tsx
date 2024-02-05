import React, { FormEvent, useState } from 'react';
import EducationForm from './EducationForm';
import { Education } from './EducationForm';    
import AddressForm from './AddressForm';
import { Member } from './MemberRegistrationForm';
import { Address} from './AddressForm';
import MemberRegistrationForm from './MemberRegistrationForm';
import { Work } from './WorkForm';
import WorkForm from './WorkForm';
import FamilyForm from './FamilyForm';
import ServiceForm, { Service } from './ServiceForm';
import {
  Button,
  Stepper, Step, StepLabel, Box, Grid
} from '@mui/material';
import { Family } from './FamilyForm';
import FinanceForm, { Finance } from './IncomeForm';
import { Spirituals } from './SpiritualsForm';
import SpiritualsForm from './SpiritualsForm';
import GibGubaeRegistrationForm, { GibGubae } from './GibGubaeRegistrationForm';
import { parishChurchs } from './parshChurchForm';
import RegistrationForms from './parshChurchForm';
import EmergencyContactForm, { Emergency } from './EmergencyContactForm';
import FamilyForm2 from './FamilyForm2';
import { Family2 } from './FamilyForm2';


const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];


const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [memberData, setMemberData] = useState<Member>({
    email: '',
    title: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    baptismName: '',
    gender: 0,
    birthDate: '',
    phone: '',
    secondaryPhone: 0,
    motherName: '',
    isMkEmployee: false,
    isMemberActive: false,
    
    parish_no: '',
   
  });

  const [educationData, setEducationData] = useState<Education>({
    Qulification: '',
    Department: '',
    OtherEducation: false,
  });
 const [workData, setWorkData] = useState<Work>({
       AreEmployee: false,
       CurrentWorkPlace: '',
       NameofOrganization: '',
       WorkResponsibility: '',
       workStatus :'',
       CurrentJobPosition: '',
     });

   const [financeData, setFinanceData] = useState<Finance>({
    monthlyDonor: '',
    monthlyIncome: '',
   });
   const [ServiceData, setServiceData] = useState<Service>({
    serviceDepartment: '',
    serviceSection: '',
    serviceYear: '',
    serviceMeeting: '',
    haveTask: false,
    responsibility: '',
    canTakeService: false,
    wantToOtherAssignment: false,
    memberSince: null,
    serviceCenter: '',
  });
  const [SpiritualData, setSpiritualData] = useState<Spirituals>({
    spirFatherName: '',
    spiritualTitle: '',
    spirSchoolName: '',
    spirGraduateDate: '',
    spirFatherPhone: '',
    spirFatherParish: '',
  });
  const [GibGubaeData, setGibGubaeData] = useState<GibGubae>
  (
    {
      haveBeenGibiGubae: false,
      gibiGubaeName: "",
      gibiGubaePlace: "",
    
    }
  )
  const [parishChurchData, setparishChurch] = useState<parishChurchs>({
    parshChurchName: '',
    roleInParishChurch: '',
    parshChurchAddress: '',
  });
  const [emergencyContact, setEmergencyContact] = useState({
    EmergName: '',
    EmergPhone: '',
    EmergRelation: '',
    EmergEmail: '',
    EmergAddress: '',
  });

  const [Family2data, setFamily2Data] = useState<Family2>({
    maritalStatus: '',
    haveChildren: false,
    isSpouseMember: false,
    spouseName: '',
  });

  
 // const [activeStep, setActiveStep] = useState(0);
  const steps = ['Member Details', 'Address Details', 'Education Details','WorkForm','FinanceForm',
  'ServiceForm','spritual form','GibGubae form','parsh Church','Emergence Contact','Family Info','Preview'];
  const handleNextMemberRegistration = (data: Member) => 
       {
      setMemberData(data);
      setStep(step + 1);
 
        };

  const handleNextAddress = (data: Address) => 
        {
       
       setStep(step + 1);
       
        };
  const handleNextEducation =(date:Education) =>{
      setEducationData(date)
      setStep(step + 1);
        }
  const handleNextWork = (data: Work) =>{
      setWorkData(data)
      setStep(step + 1);
       }
  const handleNexIncome = (data: Finance) =>{
      setFinanceData(data)
      setStep(step + 1);
       }
  const handleNextSpiritual =(data: Spirituals)=>{
     setSpiritualData(data);
      setStep(step +1);
         }
         
  const handNextService =(data:Service) =>
         {
        setServiceData(data) ;    
        setStep(step+1)
         }
  const handleNextGibiGubae =(data: GibGubae)=>{
      setGibGubaeData(data);
       setStep(step +1);
              }
  const handleNextParshChurch =(data: parishChurchs)=>{
                setparishChurch(data);
                 setStep(step +1);
                        }
    const handleNextEmergency =(data:Emergency) =>{
        setEmergencyContact(data)
        setStep(step +1)
               }
  const handleNextFamily2 =(data:Family2) =>{
        setFamily2Data(data)
        setStep(step +1)
              }
  const handleSave = (familyData: Family) => {
         console.log('Member Data:', memberData);
        
         console.log('Work Data:',workData)
         console.log('Education data',educationData)
         console.log('Family data',familyData)
         console.log('Income Data',financeData)
         console.log('Service Data',ServiceData)
         console.log('spiritual Data',SpiritualData)
         console.log('Gibi Gubae Data ', GibGubaeData)
         console.log("Parish Church",parishChurchData)
       
  
    // You can save all the form data here
    // Example: send a request to the server to save the data

    // Reset the form and go back to the first step
   setMemberData({
    email: '',
    title: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    baptismName: '',
    gender: 0,
    birthDate: '',
    phone: '',
    secondaryPhone: 0,
    motherName: '',
    isMkEmployee: false,
    isMemberActive: false,
    parish_no: '',
    
    });
  
    setEducationData({
      Qulification: '',
      Department: '',
      OtherEducation: false,
    });
    
    //setStep(1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };
  return (
    
    <div> 
      <div className="content">
      <Stepper className="card-body"   sx={{
         bgcolor: '#fff',
         fontWeight: 'fontWeightLight',
         m: 3, p: 1, 
      }}  activeStep={step} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
      
    </Stepper>
    </div>
       {step === 0 && 
      <MemberRegistrationForm onNext={handleNextMemberRegistration} /> }
       {step === 1 && 
        <AddressForm onBack={handleBack} onNext={handleNextAddress} />}
      {step === 2  && 
      <EducationForm onBack={handleBack}  onNext={handleNextEducation} />}
      {step === 3  && <WorkForm onBack={handleBack} onNext={handleNextWork}/>}
      {step === 4  && <FinanceForm onBack={handleBack} onNext={handleNexIncome}/>}
      {step === 5  && <ServiceForm onBack={handleBack} onNext={handNextService}/>}
      {step === 6  && <SpiritualsForm onBack={handleBack} onNext={handleNextSpiritual}/>}
      {step === 7  && <GibGubaeRegistrationForm onBack={handleBack} onNext={handleNextGibiGubae}/>}
      {step === 8  && <RegistrationForms onBack={handleBack} onNext={handleNextParshChurch}/>} 
      {step === 9 && <EmergencyContactForm onBack={handleBack} onNext={handleNextEmergency}/>}
      {step === 10 && <FamilyForm2 onBack={handleBack} onNext={handleNextFamily2}/>}
     {/*} {step === 11  &&<FamilyForm 
          name={memberData} 
       //   address={addressData} 
          edu={educationData} 
          work={workData}
          finance={financeData}
          service={ServiceData}
          spritual={SpiritualData}
          gibegubae={GibGubaeData}
          parish={parishChurchData}
          emergency={emergencyContact}
          family={Family2data}
     onBack={handleBack} onSave={handleSave}/>*/}
    </div>
  );
};

export default MultiStepForm;