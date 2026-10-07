import { ReactNode } from 'react';

export const DisplayText = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`text-gradient font-light italic font-sans bg-linear-to-r/srgb from-j-blue to-j-magenta text-4xl`}
    >
      <p className='m-0 pb-4'>{children}</p>
    </div>
  );
};
