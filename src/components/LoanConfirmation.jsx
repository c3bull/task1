import {useLocation, useNavigate} from "react-router-dom";

export default function LoanConfirmation() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <>
            {location.state ?
                <div>
                    <h1 className='text-black text-[32px] font-bold text-center pb-10'>Dziękujemy za wypełnienie wniosku
                        o kredyt!</h1>
                    <h2 className='text-[24px] pb-4 font-semibold uppercase text-center'>Twoje dane:</h2>
                    <div className='w-full flex justify-center'>
                        <div className='flex flex-col text-[16px] md:text-[18px] overflow-x-auto '>
                            <div className='min-w-[360px] w-full max-w-[1024px]'>

                                <div className='grid grid-cols-[minmax(140px,_1fr)_3fr] border-x border-t'>
                                    <span className='border-r border-b px-2 py-1 bg-neutral-100'>Imię:</span> <span
                                    className='pl-2 py-1 font-bold border-b'>{location.state ? location.state.values.name :
                                    <span>Nie podano</span>}</span>
                                    <span className='border-r border-b px-2 py-1 bg-neutral-100'>Nazwisko:</span> <span
                                    className='pl-2 py-1 font-bold border-b'>{location.state ? location.state.values.surname :
                                    <span>Nie podano</span>}</span>
                                    <span
                                        className='border-r border-b px-2 py-1 bg-neutral-100'>Status rezydenta:</span>
                                    <span
                                        className='pl-2 py-1 font-bold border-b'>{location.state ? location.state.residentStatus :
                                        <span>Nie podano</span>}</span>
                                    <span className='border-r border-b px-2 py-1 bg-neutral-100'>Obywatelstwo:</span>
                                    <span
                                        className='pl-2 py-1 font-bold border-b'>{location.state ? location.state.values.citizenship :
                                        <span>Nie podano</span>}</span>
                                    <span className='border-r border-b px-2 py-1 bg-neutral-100'>PESEL:</span> <span
                                    className='pl-2 py-1 font-bold border-b'>{location.state ? location.state.values.pesel :
                                    <span>Nie podano</span>}</span>
                                    <span className='border-r border-b px-2 py-1 bg-neutral-100'>Data urodzenia:</span>
                                    <span
                                        className='pl-2 py-1 font-bold border-b'>{location.state ? location.state.values.birthdayDate :
                                        <span>Nie podano</span>}</span>
                                    <span className='border-r border-b px-2 py-1 bg-neutral-100'>Prowadzę działaność gospodarczą:</span>
                                    <span
                                        className='pl-2 py-1 font-bold border-b'>{location.state && location.state.businessRun ?
                                        <span>TAK</span> : <span>NIE</span>}</span>
                                    <span className='border-r border-b px-2 py-1 bg-neutral-100'>Nazwa banku kredytującego:</span>
                                    <span
                                        className='pl-2 py-1 font-bold border-b'>{location.state ? location.state.values.bankName :
                                        <span>Nie podano</span>}</span>
                                    <span className='border-r border-b px-2 py-1 bg-neutral-100'>Wnioskowana kwota kredytu:</span>
                                    <span
                                        className='pl-2 py-1 font-bold border-b'>{location.state ? location.state.values.loanAmount :
                                        <span>Nie podano</span>}</span>

                                </div>
                                {location.state && location.state.businessRun &&
                                    <div>
                                        <div className='bg-blue-400 px-2 py-1'>
                                            <p>Prowadzona działaność gospodarcza:</p>
                                        </div>
                                        <div
                                            className='grid grid-cols-[minmax(140px,_1fr)_3fr] w-full max-w-[1024px] border-x'>
                                            <span className='border-r border-b px-2 py-1 bg-neutral-300'>Adres:</span>
                                            <span
                                                className='pl-2 py-1 font-bold border-b'>{location.state ? location.state.values.address :
                                                <span>Nie podano</span>}</span>
                                            <span
                                                className='border-r border-b px-2 py-1 bg-neutral-300'>Kod pocztowy:</span>
                                            <span
                                                className='pl-2 py-1 font-bold border-b'>{location.state ? location.state.values.zipcode :
                                                <span>Nie podano</span>}</span>
                                            <span className='border-r border-b px-2 py-1 bg-neutral-300'>Miasto:</span>
                                            <span
                                                className='pl-2 py-1 font-bold border-b'>{location.state ? location.state.values.city :
                                                <span>Nie podano</span>}</span>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='text-center flex flex-col gap-4 items-center'>
                    <p className='uppercase font-semibold text-[32px]'>Brak danych do wyświetlenia</p>
                    <button type="submit" onClick={() => navigate("/")}
                            className='max-w-fit bg-[#37679B] text-white hover:bg-[#244E7B] duration-150 text-center px-4 py-2 font-semibold rounded-[16px] uppercase '>
                        <span>Wypełnij formularz</span>
                    </button>
                </div>
            }
        </>
    )
}