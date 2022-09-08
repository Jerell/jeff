import { formatRelative } from 'date-fns';
import { enGB } from 'date-fns/locale';

export default function ReviewDisplay({
  rating,
  review,
  company,
  name,
  date,
}: {
  rating: number;
  review: string;
  company: string;
  name: string;
  date: { nanoseconds: number; seconds: number };
}) {
  const d = new Date(date.seconds * 1000);
  return (
    <div className='border-t py-2 mb-2 text-right'>
      <p className='text-j-dodger text-left'>{rating} / 5</p>
      <p className='text-center text-gradient bg-gradient-to-r from-j-dodger to-j-blue text-j'>
        {review}
      </p>
      <p className='text-xs uppercase'>{company}</p>
      <p>{name}</p>
      <p className='text-xs'>
        {formatRelative(d, new Date(), { locale: enGB })}
      </p>
    </div>
  );
}
