import {useLocation} from "react-router-dom";

export default function LoanConfirmation() {
    const location = useLocation();

    return (
        <>
            <h1 className='text-black text-[32px] font-bold text-center pb-10'>Dziękujemy za wypełnienie wniosku o kredyt!</h1>
            <div className='flex flex-col gap-2 text-[16px] md:text-[18px]'>
                <h2 className='text-[24px] pb-4 font-semibold uppercase'>Twoje dane:</h2>
                <p>Imię: <span className='font-bold'>{location.state ? location.state.values.name : <span>Nie podano</span>}</span></p>
                <p>Nazwisko: <span className='font-bold'>{location.state ? location.state.values.surname : <span>Nie podano</span>}</span></p>
                <p>Status rezydenta: <span className='font-bold'>{location.state ? location.state.residentStatus : <span>Nie podano</span>}</span></p>
                <p>Obywatelstwo: <span className='font-bold'>{location.state ? location.state.values.citizenship : <span>Nie podano</span>}</span></p>
                <p>PESEL: <span className='font-bold'>{location.state ? location.state.values.pesel : <span>Nie podano</span>}</span></p>
                <p>Data urodzenia: <span className='font-bold'>{location.state ? location.state.values.birthdayDate : <span>Nie podano</span>}</span></p>
                <p>Prowadzę działaność gospodarczą: <span className='font-bold'>{location.state && location.state.businessRun ? <span>TAK</span> : <span>NIE</span>}</span></p>
                <p>Nazwa banku kredytującego: <span className='font-bold'>{location.state ? location.state.values.bankName : <span>Nie podano</span>}</span></p>
                <p>Wnioskowana kwota kredytu: <span className='font-bold'>{location.state ? location.state.values.loanAmount : <span>Nie podano</span>}</span></p>

                {location.state && location.state.businessRun &&
                    <div className='flex flex-col mt-2 pt-2 border-t'>
                        <p>Adres: <span className='font-bold'>{location.state ? location.state.values.address : <span>Nie podano</span>}</span></p>
                        <p>Kod pocztowy: <span className='font-bold'>{location.state ? location.state.values.zipcode : <span>Nie podano</span>}</span></p>
                        <p>Miasto: <span className='font-bold'>{location.state ? location.state.values.city : <span>Nie podano</span>}</span></p>
                    </div>
                }
            </div>
        </>
    )
}