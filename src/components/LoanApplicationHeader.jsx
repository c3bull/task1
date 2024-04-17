// eslint-disable-next-line react/prop-types
export default function LoanApplicationHeader({style, col1, col2, col3}){

    return (
        <div className=''>
            <div className={`font-bold bg-[#d9d9d9] text-start border border-black grid ${style}`}>
                <p className=' border-r border-black pl-2 pb-2'>{col1}</p>
                <p className='border-r border-black pl-2 pb-2'>{col2}</p>
                <p className='pl-2 pb-2'>{col3}</p>
            </div>
        </div>
    )
}