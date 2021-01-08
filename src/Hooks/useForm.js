import {useState} from 'react';

const validation = {
  email:{
    regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message:"Preencha um email valido"
  }
}

const useForm = (type) => {
  const [value,setValue] = useState('');
  const [error,setError] = useState(null);
  function validate(value) {
    if(type === false) return true;
    if(value.length === 0) {
      setError('Preencha um valor')
      return false;
    }else if (validation[type] && !validation[type].regex.test(value)) {
      setError(validation[type].message)
      return false;
    }else {
      setError(null);
      return true;
    }
  }

  function onChange(e) {
    if (error) validate(e.target.value)
    setValue(e.target.value)
  }

  return {value,setValue,onChange,validate:()=>validate(value),onBlur:()=>validate(value),error};
}

export default useForm;