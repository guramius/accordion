import { useState } from 'react'

const Accordion = () => {

  const [open, setOpne] = useState<number | null>(null)
  const data = [
    { 
      id: 0, 
      question: "How many team members can I invite??", 
      answer: "No more than 2GB. All files in your account must fit your allotted storage space.", 
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M1 0.798645L5 4.79865L9 0.798645" stroke="#F47B56" strokeWidth="2" />
        </svg>
      ),
    },
    { 
      id: 1, 
      question: "What is the maximum file upload size?",
      answer: "how i know?!",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M1 0.798645L5 4.79865L9 0.798645" stroke="#F47B56" strokeWidth="2" />
        </svg>
      ), 
    },
    { 
      id: 2, 
      question: "How do I reset my password?",
      answer: "how i know?!",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M1 0.798645L5 4.79865L9 0.798645" stroke="#F47B56" strokeWidth="2" />
        </svg>
      ), 
    },
    { 
      id: 3, 
      question: "Can I cancel my subscription?",
      answer: "how i know?!",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M1 0.798645L5 4.79865L9 0.798645" stroke="#F47B56" strokeWidth="2" />
        </svg>
      ), 
    },
    { 
      id: 4, 
      question: "Do you provide additional support?",
      answer: "how i know?!",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M1 0.798645L5 4.79865L9 0.798645" stroke="#F47B56" strokeWidth="2" />
        </svg>
      ), 
    },
  ];

  const handleClick = (id:number) => {
    setOpne( open === id ? null : id)
  }

  return (
    <div>
      <h1 className="sm-custom:mr-auto sm-custom:pb-[38px] sm-custom:text-center text-[#1E1F36] text-[32px] font-bold font-['Kumbh_Sans'] leading-normal uppercase">faq</h1>   
      <div>
      {data.map((item) => (
        <div
          key={item.id}
          className="border-b border-[#E8E8EA] py-4"
        >
          <div  onClick={() => handleClick(item.id)} className='flex justify-between gap-[72px] pr-[7px] items-baseline cursor-pointer'>
            <p className={`${open === item.id ? 'text-[#1E1F36]' : 'text-[#4B4C5F]'} transition-all duration-[300ms] ease-in-out`}>
              {item.question}
            </p>
          <span style={{transform: open === item.id ? 'rotate(180deg)' : 'rotate(0deg)',transition: 'transform 0.9s ease'}}>
              {item.svg}
            </span>
          </div>
          {open === item.id && (
            <p className="w-[319px] sm-custom:w-[279px] text-sm text-gray-600 mt-2 transition-transform duration-[300ms] ease-in-out">
              {item.answer}
            </p>
          )}
        </div>
      ))}
      </div> 
    </div>
  )
}

export default Accordion