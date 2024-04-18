import {Field} from "formik";
import {useEffect} from "react";

// eslint-disable-next-line react/prop-types
export default function LoanApplicationRow({selection, placeholder, name, fieldType, number, input, label, inputSetter, checkbox, errors, diffStyle}) {

    const focusInput = () => {
        const textField = document.getElementById("inputname");
        textField.focus();
            textField.blur();
    }

    useEffect(()=>{
        focusInput()
    },[])

    return (
        <div>
            <div className={`w-full min-w-[380px] border-black text-start border-x border-b grid ${diffStyle ? 'grid-cols-[40px_minmax(140px,_3fr)_2fr]' : 'grid-cols-[40px_2fr_3fr]'}`}>
                <label className='border-r border-black pl-2 pb-2'>{number}</label>
                <div className='min-w-[140px] border-r border-black flex items-center pl-2 pb-2'>
                    {errors ? <div title={errors} className="cursor-pointer mr-2 min-h-[12px] min-w-[12px] rounded-full bg-red-600"/> :
                        <div className="mr-2 min-h-[12px] min-w-[12px] rounded-full bg-green-600"/>}
                <label className=''>{label}</label>
                </div>
                {checkbox && <input type='checkbox' onClick={() => inputSetter(prevState => !prevState)}/>}
                {!checkbox && !selection &&
                    <Field name={name}
                           type={fieldType ? fieldType : "text"}
                           className='focus:outline-0 pl-2'
                           placeholder={placeholder}
                           id={'input'+name}
                           />
                }
                {selection &&
                    <select value={input}
                            onChange={e => inputSetter(e.target.value)}
                            className='focus:outline-0'
                    >
                        <option value='NIE'>NIE</option>
                        <option value='TAK'>TAK</option>
                    </select>
                }
            </div>
        </div>
    )
}