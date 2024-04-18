import '../App.css'
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import LoanApplicationSection from "./LoanApplicationSection.jsx";
import LoanApplicationRow from "./LoanApplicationRow.jsx";
import {useState} from "react";
import LoanApplicationHeader from "./LoanApplicationHeader.jsx";
import {useNavigate} from 'react-router-dom';

export default function LoanApplication() {

    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [residentStatus, setResidentStatus] = useState("NIE")
    const [citizenship, setCitizenship] = useState('')
    const [pesel, setPesel] = useState('')
    const [birthdayDate, setBirthdayDate] = useState('')
    const [businessRun, setBusinessRun] = useState(false)
    const [bankName, setBankName] = useState('')
    const [loanAmount, setLoanAmount] = useState('')
    const [address, setAddress] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [city, setCity] = useState('')
    const [showErrors, setShowErrors] = useState(false)

    const formSchema = Yup.object().shape({
        name: Yup.string().required('Imię powinno zawierać między 2 a 30 liter').matches(/^[A-Za-z]{2,30}$/, "Imię powinno zawierać między 2 a 30 liter"),
        surname: Yup.string().required('Nazwisko powinno zawierać między 2 a 50 liter').matches(/^[A-Za-z-]{2,50}$/, "Naziwsko powinno zawierać między 2 a 50 liter"),
        residentStatus: '',
        citizenship: Yup.string().required('Obywatelstwo powinno zawierać między 2 a 20 liter').matches(/^[A-Za-z]{2,20}$/, "Obywatelstwo powinno zawierać między 2 a 20 liter"),
        pesel: Yup.string().required('PESEL powinien składać się z 11 cyfr').matches(/^\d{11}$/, "PESEL powinien składać się z 11 cyfr"),
        birthdayDate: Yup.string().required('Data urodzenia powinna być wprowadzona w formacie DD-MM-RRRR').matches(/^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-(19|20)\d{2}$/, "Data urodzenia powinna być wprowadzona w formacie DD-MM-RRRR"),
        businessRun: '',
        bankName: Yup.string().required('Nazwa banku powinna mieć między 3 a 100 liter').matches(/^[A-Za-z0-9\s.,()\-/]{3,100}$/, "Nazwa banku powinna mieć między 3 a 100 liter"),
        loanAmount: Yup.string().required('Kwota kredytu powinna mieć maksymalnie 10 cyfr').matches(/^\d{1,10}(\.\d{1,2})?$/, "Kwota kredytu powinna mieć maksymalnie 10 cyfr"),
        address: businessRun ? Yup.string().matches(/^[A-Za-z0-9\s.,()\-/]{5,100}$/, "Adres powinien zawierać między 5 a 100 znaków").required('Adres powinien zawierać między 5 a 100 znaków') : Yup.string(),
        zipcode: businessRun ? Yup.string().matches(/^\d{2}(-\d{3})/, "Kwota kredytu powinna zawierać 2 cyfry, myślnik a następnie 3 znaki").max(6).required('Kwota kredytu powinna zawierać 2 cyfry, myślnik a następnie 3 znaki') : Yup.string(),
        city: businessRun ? Yup.string().matches(/^[A-Za-z0-9\s.,()\-/]{3,100}$/, "Miasto powininno zawierać między 3 a 100 znaków").required('Miasto powininno zawierać między 3 a 100 znaków') : Yup.string(),
    });

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    surname: '',
                    residentStatus: '',
                    citizenship: '',
                    pesel: '',
                    birthdayDate: '',
                    businessRun: '',
                    bankName: '',
                    loanAmount: '',
                    address: '',
                    zipcode: '',
                    city: ''
                }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    navigate("/your-application", {
                        state: {
                            values: values,
                            businessRun: businessRun,
                            residentStatus: residentStatus,
                        }
                    });
                }}
            >
                {({errors}) => (
                    <Form className='overflow-x-auto'>
                        <LoanApplicationHeader style='min-w-[380px] grid-cols-[40px_minmax(140px,_2fr)_3fr]' col1='ID'
                                               col2='Nazwa pola'
                                               col3='Właściwości/ Uwagi'/>
                        <LoanApplicationSection title='Sekcja Dane wnioskodawcy'/>
                        <LoanApplicationRow number='1' name='name' label='Imię' placeholder='Jan'
                                            input={name} inputSetter={setName} errors={errors.name}/>
                        <LoanApplicationRow number='2' name='surname' label='Nazwisko' placeholder='Kowalski'
                                            input={surname} inputSetter={setSurname} errors={errors.surname}/>
                        <LoanApplicationRow number='3' name='residentStatus' label='Czy posiadasz status rezydenta?'
                                            input={residentStatus} inputSetter={setResidentStatus}
                                            errors={errors.residentStatus} selection={true}/>
                        <LoanApplicationRow number='4' name='citizenship' label='Obywatelstwo' placeholder='polskie'
                                            input={citizenship} inputSetter={setCitizenship}
                                            errors={errors.citizenship}/>
                        <LoanApplicationRow number='5' name='pesel' label='PESEL' placeholder='90010101234'
                                            input={pesel} inputSetter={setPesel} errors={errors.pesel}/>
                        <LoanApplicationRow number='6' name='birthdayDate' label='Data urodzenia'
                                            placeholder='DD-MM-RRRR'
                                            input={birthdayDate} inputSetter={setBirthdayDate}
                                            errors={errors.birthdayDate}/>
                        <LoanApplicationRow number='7' name='businessRun' label='Prowadzę działalność gospodarczą'
                                            input={businessRun} inputSetter={setBusinessRun} errors={errors.businessRun}
                                            checkbox={true}/>

                        <LoanApplicationSection title='Sekcja Dane kredytowe'/>
                        <LoanApplicationRow number='8' name='bankName' label='Nazwa banku kredytującego'
                                            placeholder='Twój Bank'
                                            input={bankName} inputSetter={setBankName} errors={errors.bankName}/>
                        <LoanApplicationRow number='9' name='loanAmount' label='Wnioskowana kwota kredytu'
                                            placeholder='kwota w PLN, np. 10000'
                                            input={loanAmount} inputSetter={setLoanAmount} errors={errors.loanAmount}/>
                        {businessRun &&
                            <div className='pt-10'>
                                <LoanApplicationHeader style='min-w-[380px] grid-cols-[40px_minmax(140px,_3fr)_2fr]'
                                                       col1='ID' col2='Nazwa pola'
                                                       col3='Właściwości/ Uwagi'/>
                                {businessRun && <LoanApplicationSection title='Sekcja dane działaności gospodarczej'/>}
                                <LoanApplicationRow number='10' name='address' label='Adres'
                                                    placeholder='ul. spokojna 1/23'
                                                    input={address} inputSetter={setAddress} errors={errors.address}
                                                    diffStyle='grid-cols-[40px_minmax(140px,_3fr)_2fr]'/>
                                <LoanApplicationRow number='11' name='zipcode' label='Kod pocztowy' placeholder='00-000'
                                                    input={zipCode} inputSetter={setZipCode} errors={errors.zipcode}
                                                    diffStyle='grid-cols-[40px_minmax(140px,_3fr)_2fr]'/>
                                <LoanApplicationRow number='12' name='city' label='Miasto' placeholder='Warszawa'
                                                    input={city} inputSetter={setCity} errors={errors.city}
                                                    diffStyle='grid-cols-[40px_minmax(140px,_3fr)_2fr]'/>
                            </div>
                        }
                        <div className='flex justify-center items-center flex-col mt-10 gap-2'>
                            <p className='text-center text-blue-600'>*najedź na czerwoną kropkę, aby zobaczyć błąd wypełnienia,<br/>wszystkie pola są obowiązkowe</p>
                            {!showErrors && <p>lub</p>}
                            <div>
                                <button onClick={()=>setShowErrors(prevState => !prevState)} className='mt-2'>
                                    {showErrors ? <span className='bg-red-400 text-white hover:bg-red-500 duration-150 text-center px-4 py-2 font-semibold rounded-[16px] uppercase'>Ukryj błędy</span> :
                                    <span className='bg-red-400 text-white hover:bg-red-500 duration-150 text-center px-4 py-2 font-semibold rounded-[16px] uppercase'>Pokaż błędy</span>}
                                </button>
                            </div>
                            {showErrors && <div className='w-full max-w-[600px] pt-4'>
                                {errors.name && <p className='text-black'>• {errors.name}</p>}
                                {errors.surname && <p className='text-black'>• {errors.surname}</p>}
                                {errors.residentStatus && <p className='text-black'>• {errors.residentStatus}</p>}
                                {errors.citizenship && <p className='text-black'>• {errors.citizenship}</p>}
                                {errors.pesel && <p className='text-black'>• {errors.pesel}</p>}
                                {errors.birthdayDate && <p className='text-black'>• {errors.birthdayDate}</p>}
                                {errors.businessRun && <p className='text-black'>• {errors.businessRun}</p>}
                                {errors.bankName && <p className='text-black'>• {errors.bankName}</p>}
                                {errors.loanAmount && <p className='text-black'>• {errors.loanAmount}</p>}
                                {errors.address && <p className='text-black'>• {errors.address}</p>}
                                {errors.zipcode && <p className='text-black'>• {errors.zipcode}</p>}
                                {errors.city && <p className='text-black'>• {errors.city}</p>}
                        </div>}
                            <button type="submit" onClick={() => setShowErrors(true)}
                                    className='mt-6 bg-[#37679B] text-white hover:bg-[#244E7B] duration-150 text-center px-4 py-2 min-w-[200px] min-h-[48px] font-semibold rounded-[16px] uppercase '>
                                <span>Złóż wniosek</span>
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
