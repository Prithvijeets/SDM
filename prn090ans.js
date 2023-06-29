import React, { useState } from 'react';

      var Studentform_090 = () => {

      var [birthdate, setBirthdate] = useState('');

      var  [prn, setPrn] = useState('');

      var[aadhar, setAadhar] = useState('');

      var  [submitted, setSubmitted] = useState(false);
      
      var[errors, setErrors] = useState([]);

      var handleSubmit = (e) => {
          e.preventDefault();

    var newErrors = [];
    const age = calculateAge(birthdate);
    
    if (age < 21 || age > 25) 
               {
                    newErrors.push('age must be between 21 and 25');
               }

            if (prn.length !== 12) 
               {
                    newErrors.push('prn should be complusory 12 digit');
                }

    var  aadharRegex = /^\d{4} \d{4} \d{4} \d{4}$/;

        if (!aadhar.match(aadharRegex))
           {
            newErrors.push('aadhar no must in format of XXXX XXXX XXXX XXXX');
           }

       setErrors(newErrors);

       setSubmitted(true);
  };

      const calculateAge = (birthdate) => 
      {
    
        var today = new Date();
   
        var  birthdateObj = new Date(birthdate);
   
        let age = today.getFullYear() - birthdateObj.getFullYear();
   
        var  monthDiff = today.getMonth() - birthdateObj.getMonth();
   
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate()))
         {
             age--;
         }
           return age;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="birthdate">Birthdate:</label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="prn">PRN:</label>
          <input
            type="number"
            id="prn"
            value={prn}
            onChange={(e) => setPrn(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="aadhar">Aadhar no:</label>
          <input
            type="text"
            id="aadhar"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && errors.length === 0 && <p>Data is submitted successfully.</p>}
      {submitted && errors.length > 0 && (
        <div>
          <p>Please solve the errors:</p>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Studentform_090;
