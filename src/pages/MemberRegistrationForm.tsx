import React, { useState, ChangeEvent, FormEvent, ChangeEventHandler } from 'react';
enum Title {
  Mr = 'Mr',
  Mrs = 'Mrs',
  Miss = 'Miss',
}

enum Role {
  Admin = 'Admin',
  User = 'User',
}

interface MemberFormData {
  memberId: number;
  email: string;
  title: Title;
  firstName: string;
  middleName: string;
  lastName: string;
  baptismName: string;
  gender: string;
  birthDate: string;
  phone: string;
  secondaryPhone: string;
  motherName: string;
  parishNo: string;
  isMkEmployee: boolean;
  isMemberActive: boolean;
  service: string;
  parishChurch: string;
  gibiGubea: string;
  additional: string;
  role: Role;
}

interface AddressFormData {
  countryId: number;
  country: string;
  region: string;
  zone: string;
  woreda: string;
  kebele: string;
}

const MemberRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [memberData, setMemberData] = useState<MemberFormData>({
    memberId: 0,
    email: '',
    title: Title.Mr,
    firstName: '',
    middleName: '',
    lastName: '',
    baptismName: '',
    gender: '',
    birthDate: '',
    phone: '',
    secondaryPhone: '',
    motherName: '',
    parishNo: '',
    isMkEmployee: false,
    isMemberActive: false,
    service: '',
    parishChurch: '',
    gibiGubea: '',
    additional: '',
    role: Role.User,
  });
  const [addressData, setAddressData] = useState<AddressFormData>({
    countryId: 0,
    country: '',
    region: '',
    zone: '',
    woreda: '',
    kebele: '',
  });

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform form submission logic here, such as sending data to an API or saving to a database

    console.log('Member Data:', memberData);
    console.log('Address Data:', addressData);
  };

  const handleMemberInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setMemberData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleInputAreaChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const { name, value } = event.target;
    setAddressData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAddressData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderMemberRegistrationForm = (
    <div>
      <h1>Member Registration</h1>
      <form onSubmit={handleNext}>
        <label>
          Member ID:
          <input
            type="number"
            name="memberId"
            value={memberData.memberId}
            onChange={handleMemberInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={memberData.email}
            onChange={handleMemberInputChange}
            required
          />
        </label>
        <br />
        <label>
          Title:
          <select
            name="title"
            value={memberData.title}
            onChange={handleMemberInputChange}
            required
          >
            <option value={Title.Mr}>Mr</option>
            <option value={Title.Mrs}>Mrs</option>
            <option value={Title.Miss}>Miss</option>
          </select>
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={memberData.firstName}
            onChange={handleMemberInputChange}
            required
          />
        </label>
        <br />
        <label>
          Middle Name:
          <input
            type="text"
            name="middleName"
            value={memberData.middleName}
            onChange={handleMemberInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={memberData.lastName}
            onChange={handleMemberInputChange}
            required
          />
        </label>
        <br />
        <label>
          Baptism Name:
          <input
            type="text"
            name="baptismName"
            value={memberData.baptismName}
            onChange={handleMemberInputChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={memberData.gender}
            onChange={handleMemberInputChange}
          />
        </label>
        <br />
        <label>
          Birth Date:
          <input
            type="date"
            name="birthDate"
            value={memberData.birthDate}
            onChange={handleMemberInputChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={memberData.phone}
            onChange={handleMemberInputChange}
            required
          />
        </label>
        <br />
        <label>
          Secondary Phone:
          <input
            type="text"
            name="secondaryPhone"
            value={memberData.secondaryPhone}
            onChange={handleMemberInputChange}
          />
        </label>
        <br />
        <label>
          Mother's Name:
          <input
            type="text"
            name="motherName"
            value={memberData.motherName}
            onChange={handleMemberInputChange}
          />
        </label>
        <br />
        <label>
          Parish No:
          <input
            type="text"
            name="parishNo"
            value={memberData.parishNo}
            onChange={handleMemberInputChange}
          />
        </label>
        <br />
        <label>
          Is MK Employee:
          <input
            type="checkbox"
            name="isMkEmployee"
            checked={memberData.isMkEmployee}
            onChange={handleMemberInputChange}
          />
        </label>
        <br />
        <label>
          Is Member Active:
          <input
            type="checkbox"
            name="isMemberActive"
            checked={memberData.isMemberActive}
            onChange={handleMemberInputChange}
          />
        </label>
        <br />
        <label>
          Service:
          <input
            type="text"
            name="service"
            value={memberData.service}
            onChange={handleMemberInputChange}
          />
        </label>
        <br />
        <label>
          Parish Church:
          <input
            type="text"
            name="parishChurch"
            value={memberData.parishChurch}
            onChange={handleMemberInputChange}
          />
        </label>
        <br />
        <label>
          Gibi-gubea:
          <input
            type="text"
            name="gibiGubea"
            value={memberData.gibiGubea}
            onChange={handleMemberInputChange}
          />
        </label>
        <br />
        <label>
          Additional:
          <textarea
            name="additional"
            value={memberData.additional}
            onChange={handleInputAreaChange}
          />
        </label>
        <br />
        <label>
          Role:
          <select
            name="role"
            value={memberData.role}
            onChange={handleMemberInputChange}
          >
            <option value={Role.Admin}>Admin</option>
            <option value={Role.User}>User</option>
          </select>
        </label>
        <br />
        {currentStep > 1 && (
          <button type="button" onClick={handlePrevious}>
            Back
          </button>
        )}
        <button type="button" onClick={handleNext}>
          Next
        </button>
        <button type="button" >Save</button>
      </form>
    </div>
  );

  const renderAddressRegistrationForm = (
    <div>
      <h1>Address Registration</h1>
      <form onSubmit={handleSave}>
        <label>
          Country ID:
          <input
            type="number"
            name="countryId"
            value={addressData.countryId}
            onChange={handleAddressInputChange}
            required
          />
        </label>
        <br />
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={addressData.country}
            onChange={handleAddressInputChange}
            required
          />
        </label>
        <br />
        <label>
          Region:
          <input
            type="text"
            name="region"
            value={addressData.region}
            onChange={handleAddressInputChange}
            required
          />
        </label>
        <br />
        <label>
          Zone:
          <input
            type="text"
            name="zone"
            value={addressData.zone}
            onChange={handleAddressInputChange}
            required
            />
            </label>
        <br />
        <label>
          Woreda:
          <input
            type="text"
            name="woreda"
            value={addressData.woreda}
            onChange={handleAddressInputChange}
            required
          />
        </label>
        <br />
        <label>
          Kebele:
          <input
            type="text"
            name="kebele"
            value={addressData.kebele}
            onChange={handleAddressInputChange}
            required
          />
        </label>
        <br />
        {currentStep > 1 && (
          <>
                     <button type="button" onClick={handlePrevious}>
                      Back
                    </button>
                    <button type="button" onClick={handleNext}>
                      Next
                      </button>
        </>
        )}
        <button type="submit">Save</button>
      </form>
    </div>
  );

  let renderedForm: JSX.Element;

  if (currentStep === 1) {
    renderedForm = renderMemberRegistrationForm;
  } else {
    renderedForm = renderAddressRegistrationForm;
  }

  return renderedForm;
};

export default MemberRegistrationForm;