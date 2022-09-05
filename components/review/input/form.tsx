import addReview from '@/lib/firebase/reviews/addReview';
import IReview from '@/lib/firebase/reviews/IReview';
import { useState } from 'react';
import Rating from './rating';
import SubmitButton from './SubmitButton';

export default function Form({ refresh }: { refresh: () => Promise<void> }) {
  const [rating, setRating] = useState<number>(-1);
  const [review, setReview] = useState<string>('');
  const [name, setName] = useState<string>('Anonymous');
  const reviewPlaceholder =
    'Please give a review on my performance in your store, be as detailed as you would like but please do not breach patient confidentiality';
  const invalid = review.length === 0 || rating < 0;

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  async function submit() {
    setLoading(true);
    const body: IReview = {
      rating: rating + 1,
      review,
      name,
      date: new Date(),
      approved: false,
    };
    if (invalid) return;
    await addReview(body);
    await refresh();
    setLoading(false);
    setSubmitted(true);
  }

  function updateRating(n: number) {
    setRating(n);
    setSubmitted(false);
  }

  function updateReview(e) {
    setReview(e.target.value);
    setSubmitted(false);
  }

  function updateName(e) {
    setName(e.target.value);
    setSubmitted(false);
  }

  return (
    <form
      className={`flex flex-col gap-2 ${
        loading ? 'opacity-80' : 'opacity-100'
      }`}
    >
      <Rating update={updateRating} />
      <textarea
        name='review'
        id='review'
        cols={30}
        rows={10}
        placeholder={reviewPlaceholder}
        onChange={updateReview}
        disabled={loading}
      ></textarea>
      <input
        type='text'
        name='name'
        id='name'
        autoComplete='name'
        placeholder='name (optional)'
        onChange={updateName}
        disabled={loading}
      />
      <SubmitButton
        submit={submit}
        disabled={invalid || loading || submitted}
        submitted={submitted}
      />
      {submitted && <p>Thank you for submitting a review.</p>}
    </form>
  );
}