import Page from '@/components/page';
import { DisplayText } from '@/components/DisplayText';
import Form from '@/components/review/input/form';
import IntroCard from '@/components/introCard';
import ReviewList from '@/components/review/display/list';

export default function Home() {
  return (
    <>
      <Page title='Leave a review' hideNamePrefix>
        <div className='flex flex-col items-center justify-center'>
          <div className='max-w-prose w-full'>
            <section className='py-8 flex flex-col gap-4'>
              <IntroCard />
              <p>
                maybe a paragraph of information or something idk you can put
                anything here u choose homie
              </p>
            </section>
            <section className='mt-16'>
              <div className='my-2 text-center'>
                <DisplayText>Leave a review</DisplayText>
              </div>
            </section>
            <section className='flex flex-col gap-1'>
              <Form />
            </section>
            <section className='mt-8'>
              <ReviewList />
            </section>
          </div>
        </div>
      </Page>
    </>
  );
}
