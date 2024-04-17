// eslint-disable-next-line react/prop-types
export default function LoanApplicationSection({title}){

    return (
        <div>
            <div className='min-w-[380px] border-black bg-[#729fcf] text-start border-x border-b grid grid-cols-[40px_1fr]'>
                <label className='pl-2 pb-2 border-r border-black'></label>
                <label className='pl-2 pb-2'>{title}</label>
            </div>
        </div>
    )
}