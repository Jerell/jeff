import { DisplayText } from '@/components/DisplayText';
import Link from 'next/link';
import CircleImg from '@/components/CircleImg';

const IntroCard = () => {
  return (
    <div className='flex space-x-8 items-center'>
      <div className='left'>
        <CircleImg />
      </div>
      <div className='right flex flex-col'>
        <p>Cheuk Man Ng</p>
        <DisplayText>Locum Pharmacist</DisplayText>
        <p>Aston University Graduate</p>
        <p>Qualified pharmacist since Aug 2022</p>
        <p>GpHC no. 2231084</p>
        <div className='mt-2'>
          <a href='tel:+447570807718'>+447570807718</a>
          <a href='mailto:Ngcheukman15@gmail.com' className='block'>
            <span>Ngcheukman15@gmail.com</span>
          </a>
          <a
            href='https://www.linkedin.com/in/cheuk-man-ng-9014821a4/'
            className='block'
          >
            <span>Linkedin profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
