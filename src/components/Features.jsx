import { FeatureCard } from './FeatureCard';
import speakingImg from '../assets/speakingTest.png';
import readingImg from '../assets/readingTest.png';
import listeningImg from '../assets/listeningTest.png';
import writingImg from '../assets/writingTest.png';
import mockTest from '../assets/mockTest.png';
import vocab from '../assets/vocab.png';
import AiBand from '../assets/AiBand.png';
import news from '../assets/news.png';
import blog from '../assets/blog.png';
import plane from '../assets/plane.png';

export default function Features() {
  const features = [
    { title: 'Speaking', image:speakingImg },
    { title: 'Mock Test', image:mockTest },
    { title: 'AI Band Score', image:AiBand },
    { title: 'Vocabulary', image:vocab },
    { title: 'Reading', image:readingImg },
    { title: 'Listening', image: listeningImg },
    { title: 'Writing', image: writingImg },
  ];
  const explore = [
    { title: 'Student News', image:news },
    { title: 'Blogs', image:blog },
    { title: 'Visa Filing', image:plane },
  ]

  return (
    <section id="features" className="max-w-full mx-auto px-4 py-16 bg-indigo-200 mt-15">
      <h2 className="text-3xl font-semibold text-center text-indigo-600 animate-fadeIn">
        What You Get
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <FeatureCard key={f.title} title={f.title} image={f.image} />
        ))}
      </div>
      <h2 className="text-3xl font-semibold text-center mt-10 text-indigo-600 animate-fadeIn">
        Explore
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {explore.map((f) => (
          <FeatureCard key={f.title} title={f.title} image={f.image} />
        ))}
      </div>
    </section>
  );
}

